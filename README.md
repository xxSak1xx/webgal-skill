# webgal-skill · WebGAL 场景编辑 skill

**本skill的开发参考了bilibili up主 北风的猫5306 的相关视频及文档，详见[声明](#声明)**

聚焦**Mygo/Ave Mujica**主题，节约用户具体操作的时间，只需用自然语言输入想法，就能让`LLM agent`利用webgal做出精美的二创


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
├── LICNESE
└── README.md
```

## 运行时：webgal-tools

skill 依赖 `@webgal-tools/mcp-server`、`@webgal-tools/config`（驱动 `scripts/wg.mjs`）；`scripts/wg.mjs` 每次自动探测：

1. 本 skill 目录 `node_modules`
2. 环境变量 `WEBGAL_TOOLS_DIR` 指向的目录
3. 全局 `npm` / `pnpm root`

没有就位时，需向用户说明并**征得同意**后再安装（不静默全局装）：

```bash
node scripts/wg.mjs doctor                  # 查看探测结果
node scripts/wg.mjs install-runtime --global              # 全局安装
node scripts/wg.mjs install-runtime --dir D:/some/dir     # 装到指定目录，并设 WEBGAL_TOOLS_DIR=D:/some/dir
```

## 使用

将该skill注册到agent中即可开始使用。

操作某个游戏目录时，把**该目录绝对路径**交给 skill（也可设 `WEBGAL_WORK_DIR` 作默认）。目标目录需是含 `scene/`、`figure/`、`background/` 的 WebGAL 游戏目录；缺少 `mcp.config.json` 会自动生成默认配置。

- 在 agent中加载本 skill 并完成相关配置后，直接描述需求。
- skill 会扫真实资产 → 按文档选背景/立绘/表情 → 用 `scripts/wg.mjs` 写入/改写 `scene/*.txt` → 自检后回报。
- 特效取材与规范细节见 `SKILL.md`；完整素材与进阶特效查 `references/` 两个文件。


## 声明

本skill的开发参考了bilibili up主 **@北风的猫5306** 的：
- [相关视频](https://www.bilibili.com/video/BV1Bx9GBaENN/?spm_id_from=333.1391.0.0&vd_source=28c2a235b6a1fb869deda22325f31f88)
- 部分说明文档（references/）

经私信沟通，参考申请已被允许。根据要求，在此一并感谢：

- **@池沼mur大先辈**
- **@其实rigby是一只母猫**
- **@邻家码农真昼酱**
- **@yd天使终结者 @夜皇依月 @紫铜Kris @冲矢明逸** 
- **@其实rigby是一只母猫 @Hardy--Lee @明见 @猫猫猫宫 @瑟瑟发抖小萌新Pro** 
- **@一元粒子对撞机** 
- **@KanameVZ**

等人员。其虽对本项目没有直接贡献，但做了webgal相关的许多前置工作。
> 以上均为bilibili昵称，引自视频简介，截至本次提交（2026-09-07）有效。