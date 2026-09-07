#!/usr/bin/env node
/**
 * webgal-editor 运行时封装脚本。
 *
 * 本脚本在单个进程内加载 webgal-tools 的 MCP server，并代表用户对指定 WebGAL 游戏目录
 * 发起一次工具调用。它不直接读写文件 —— 一切目录操作都经由 webgal-tools MCP server 的
 * 工具处理器完成（含 mcp.config.json 校验、资产/立绘/Live2D 扫描语义、scene 读写约束）。
 *
 * 运行时（@webgal-tools/mcp-server、@webgal-tools/config）**不在仓库内、不提交**，按以下
 * 顺序探测：本地 node_modules → env WEBGAL_TOOLS_DIR → 全局 npm/pnpm root。找不到时本脚本
 * 只负责说明与给出安装命令（需由 agent 先征得用户同意再执行 install-runtime）。
 *
 * 用法：
 *   node wg.mjs doctor                                  # 诊断运行时与候选位置
 *   node wg.mjs install-runtime --global|--dir <目录>   # 安装运行时（先征得用户同意）
 *   node wg.mjs <workDir> <toolName> [argsJson]         # 执行一次 MCP 工具
 *
 * 支持的 toolName 与参数（与 webgal-tools MCP 一致）：
 *   get_docs_directory
 *   get_doc_content                    {"path": "webgal-script/dialogue.md"}
 *   scan_work_dir_assets               {"include_assets": ["background","vocal","bgm","animation","video"]}
 *   scan_static_figures
 *   scan_live2d_figures
 *   get_live2d_character_details       {"model_paths": ["tomori/casual-2023/model.json", ...]}
 *   scan_scene_script
 *   read_scene_script                  {"file": "start.txt"}
 *   write_scene_script                 {"file": "scene-01.txt","content":"...","mode":"overwrite|append"}
 *
 * 退出码：0 成功（结果打到 stdout）；1 失败；2 参数错误；3 运行时缺失。
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { execSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const PKG = { mcp: '@webgal-tools/mcp-server', cfg: '@webgal-tools/config', ver: '1.7.18' };
const SKILL_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function fail(msg, code = 1) {
  console.error(`[webgal-editor] ${msg}`);
  process.exit(code);
}

/* ---------------- 运行时解析 ---------------- */

/** 返回候选“node_modules 根目录”列表（按优先级）。 */
function candidateRoots() {
  const list = [];
  const push = (label, root) => {
    if (root && !list.some((c) => c.root === root)) list.push({ label, root });
  };
  if (process.env.WEBGAL_TOOLS_DISABLE_LOCAL !== '1') {
    push('本地 node_modules', path.join(SKILL_ROOT, 'node_modules'));
  }
  const env = process.env.WEBGAL_TOOLS_DIR;
  if (env) {
    const v = path.resolve(env);
    push('env WEBGAL_TOOLS_DIR', fs.existsSync(path.join(v, '@webgal-tools')) ? v : path.join(v, 'node_modules'));
  }
  for (const cmd of ['npm root -g', 'pnpm root -g']) {
    try {
      const out = execSync(cmd, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
      if (out) push(`全局(${cmd.split(' ')[0]})`, out);
    } catch { /* 该包管理器不可用则跳过 */ }
  }
  return list;
}

function hasRuntime(root) {
  return fs.existsSync(path.join(root, PKG.mcp)) && fs.existsSync(path.join(root, PKG.cfg));
}

function findRuntime() {
  for (const c of candidateRoots()) if (hasRuntime(c.root)) return c;
  return null;
}

/** 说明缺运行时并给出需用户同意的安装入口。 */
function missingRuntime() {
  const opts = candidateRoots()
    .map((c) => `  - ${c.label}: ${c.root}（${hasRuntime(c.root) ? 'OK' : '缺包'}）`)
    .join('\n');
  console.error(
    `[webgal-editor] 未找到 webgal-tools 运行时（${PKG.mcp}@${PKG.ver}、${PKG.cfg}@${PKG.ver}）。\n` +
      `已探测：\n${opts || '  （无任何候选位置）'}\n` +
      `\n请先向用户说明并征得同意后，执行以下任一命令安装：\n` +
      `  node scripts/wg.mjs install-runtime --global           # 全局安装\n` +
      `  node scripts/wg.mjs install-runtime --dir D:/some/dir  # 装到指定目录，随后设 WEBGAL_TOOLS_DIR=D:/some/dir\n` +
      `（诊断详情：node scripts/wg.mjs doctor）`
  );
  process.exit(3);
}

/* ---------------- 子命令：doctor / install-runtime ---------------- */

const [a, b] = process.argv.slice(2);

if (a === 'doctor') {
  console.log(`webgal-tools 运行时探测（SKILL_ROOT=${SKILL_ROOT}）`);
  for (const c of candidateRoots()) {
    const ok = hasRuntime(c.root);
    const mc = fs.existsSync(path.join(c.root, PKG.mcp)) ? 'mcp✓' : 'mcp✗';
    const cf = fs.existsSync(path.join(c.root, PKG.cfg)) ? 'config✓' : 'config✗';
    console.log(`  [${ok ? '可用' : '缺失'}] ${c.label} -> ${c.root}  (${mc} ${cf})`);
  }
  const rt = findRuntime();
  console.log(rt ? `\n结论：使用 ${rt.label} -> ${rt.root}` : '\n结论：未找到运行时，需 install-runtime（先征得用户同意）。');
  process.exit(rt ? 0 : 3);
}

if (a === 'install-runtime') {
  if (!b || !['--global', '--dir'].includes(b)) fail('用法: node wg.mjs install-runtime --global | --dir <目录>', 2);
  const args = process.argv.slice(2);
  const dirIdx = args.indexOf('--dir');
  const specs = `${PKG.mcp}@${PKG.ver} ${PKG.cfg}@${PKG.ver}`;
  let cmd;
  if (b === '--global') {
    cmd = `npm install -g ${specs}`;
  } else {
    const target = path.resolve(args[dirIdx + 1]);
    fs.mkdirSync(target, { recursive: true });
    cmd = `npm install --prefix ${JSON.stringify(target)} ${specs}`;
    console.log(`\n安装后请设置环境变量：WEBGAL_TOOLS_DIR=${target}\n`);
  }
  console.log(`执行：${cmd}`);
  try {
    execSync(cmd, { stdio: 'inherit', shell: true });
    console.log('\n安装完成。可用 node scripts/wg.mjs doctor 复核。');
    process.exit(0);
  } catch {
    fail('安装失败，请检查网络/权限后重试。');
  }
}

/* ---------------- 常规工具调用 ---------------- */

if (!a || !b) {
  console.error('用法: node wg.mjs <workDir> <toolName> [argsJson]  （或 doctor / install-runtime）');
  process.exit(2);
}

const workDir = path.resolve(a);
const toolName = b;
const argsJson = process.argv[4];

if (!fs.existsSync(workDir) || !fs.statSync(workDir).isDirectory()) {
  fail(`游戏目录不存在或不是目录: ${workDir}\n请在请求里提供有效的 WebGAL 游戏目录，或用 WEBGAL_WORK_DIR 指向默认目录。`);
}

const configPath = path.join(workDir, 'mcp.config.json');
if (!fs.existsSync(configPath)) {
  if (fs.existsSync(path.join(workDir, 'scene'))) {
    const defaultConfig = {
      directories: {
        background: 'background',
        figure: 'figure',
        vocal: 'vocal',
        bgm: 'bgm',
        animation: 'animation',
        video: 'video',
      },
    };
    fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
    console.error(`[webgal-editor] 已生成默认 ${configPath}`);
  } else {
    fail(`缺少 ${configPath}，且目录中未发现 scene/，看起来不是可操作的 WebGAL 游戏目录。`);
  }
}

let args = {};
if (argsJson !== undefined && argsJson !== '') {
  try {
    args = JSON.parse(argsJson);
  } catch {
    fail(`无法解析参数 JSON: ${argsJson}`);
  }
}

// 运行时探测（缺失则说明并退出 3，由 agent 征询用户后再装）
const rt = findRuntime();
if (!rt) missingRuntime();

const { server, setWorkDir } = await import(pathToFileURL(path.join(rt.root, PKG.mcp, 'dist/server/index.js')).href);
const { loadMcpConfig } = await import(pathToFileURL(path.join(rt.root, PKG.cfg, 'dist/index.js')).href);

setWorkDir(workDir);
try {
  loadMcpConfig(workDir);
} catch (e) {
  fail(`加载 MCP 配置失败: ${e.message}`);
}

/** 单 transport + 一次 connect；消息按 id 匹配返回，通知立即投递。 */
let handler = null;
const pending = new Map();
const transport = {
  start: async () => {},
  close: async () => {},
  send: async (out) => {
    const p = pending.get(out && out.id);
    if (p) {
      pending.delete(out.id);
      if (p.timer) clearTimeout(p.timer);
      p.resolve(out);
    }
  },
  set onmessage(fn) { handler = fn; },
  get onmessage() { return handler; },
};

async function dispatch(serverInst, msg) {
  return new Promise((resolve, reject) => {
    if (msg.id === undefined) {
      if (!handler) return reject(new Error('server 未就绪'));
      handler(msg);
      resolve(null);
      return;
    }
    const timer = setTimeout(() => {
      pending.delete(msg.id);
      reject(new Error(`请求超时: ${msg.method}`));
    }, 20000);
    pending.set(msg.id, { resolve, reject, timer });
    if (!handler) return reject(new Error('server 未就绪'));
    handler(msg);
  });
}

try {
  await server.connect(transport);
  await dispatch(server, {
    jsonrpc: '2.0',
    id: 1,
    method: 'initialize',
    params: { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name: 'webgal-editor', version: '1.0.0' } },
  });
  await dispatch(server, { jsonrpc: '2.0', method: 'notifications/initialized' });

  const resp = await dispatch(server, {
    jsonrpc: '2.0',
    id: 2,
    method: 'tools/call',
    params: { name: toolName, arguments: args },
  });

  if (resp.error) fail(`工具调用错误: ${JSON.stringify(resp.error)}`);
  const result = resp.result ?? {};
  const texts = (result.content ?? [])
    .filter((c) => c && c.type === 'text' && typeof c.text === 'string')
    .map((c) => c.text);
  const out = texts.join('\n\n') || JSON.stringify(result);
  if (result.isError) fail(`工具返回错误:\n${out}`);
  process.stdout.write(out + '\n');
  process.exit(0);
} catch (e) {
  fail(`MCP 调用失败: ${e.message}`);
}
