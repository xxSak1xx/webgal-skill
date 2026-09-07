# webgal-skill · WebGAL 场景编辑 skill

**此skill的制作参考了B站UP主北风的猫5306相关教程文档！**

为 AI 代理（如 Claude Code）提供把「剧情要求 → 在真实 WebGAL 游戏目录里读写/演出 WebGAL 脚本」的自动化工作流。

本仓库根目录即 skill 根目录：

```
webgal-skill/
├── SKILL.md                       # 主指令：工作流 + 蒸馏版语法/特效/演出规范
├── scripts/
│   └── wg.mjs                     # 运行时封装：驱动 webgal-tools MCP 操作游戏目录（只读/写 scene、扫资产）
├── references/
│   ├── effects-library.md         # 北风的猫5306《WebGAL 高级演出特效代码整合》全文（渐进披露）
│   └── 3.1-assistant-word.md      # MyGO/Ave Mujica 资产清单 + WebGAL 语法/严禁事项（渐进披露）
├── package.json / pnpm-lock.yaml  # 运行依赖（@webgal-tools/mcp-server、@webgal-tools/config）
└── README.md
```

## 运行时：webgal-tools（不进仓库）

skill 依赖 `@webgal-tools/mcp-server`、`@webgal-tools/config`（驱动 `scripts/wg.mjs`），但**不随仓库提交、不要求仓库内 node_modules**。`scripts/wg.mjs` 每次自动探测：

1. 本 skill 目录 `node_modules`
2. 环境变量 `WEBGAL_TOOLS_DIR` 指向的目录
3. 全局 npm / pnpm root

没有就位时，需向用户说明并**征得同意**后再安装（不静默全局装）：

```bash
node scripts/wg.mjs doctor                  # 查看探测结果
node scripts/wg.mjs install-runtime --global              # 全局安装
node scripts/wg.mjs install-runtime --dir D:/some/dir     # 装到指定目录，并设 WEBGAL_TOOLS_DIR=D:/some/dir
```

## 使用

操作某个游戏目录时，把**该目录绝对路径**交给 skill（也可设 `WEBGAL_WORK_DIR` 作默认）。目标目录需是含 `scene/`、`figure/`、`background/` 的 WebGAL 游戏目录；缺少 `mcp.config.json` 会自动生成默认配置。

- 在 agent中加载本 skill 并完成相关配置后，直接描述需求。
- skill 会：扫真实资产 → 按文档选背景/立绘/表情 → 用 `scripts/wg.mjs` 写入/改写 `scene/*.txt` → 自检后回报。
- 特效取材与规范细节见 `SKILL.md`；完整素材与进阶特效查 `references/` 两个文件。


