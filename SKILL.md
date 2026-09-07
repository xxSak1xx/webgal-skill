---
name: webgal-editor
description: Edit and create WebGAL visual-novel scripts (scene/*.txt) inside a real WebGAL game project by driving the webgal-tools MCP server against the live game directory. Use this whenever the user wants to turn a story/dialogue/narrative idea into a WebGAL scene, modify an existing scene, change character figures/expressions/backgrounds, add visual-novel effects/transitions, or edit script files in a WebGAL game folder. Fires for Chinese requests about galgame/视觉小说剧本、MyGO/Ave Mujica/Bang Dream 同人、"给某幕加演出/改立绘/配表情/换背景/加特效". Prefer it over writing WebGAL from memory: every referenced background/figure/motion/expression is scanned from the real directory so it exists, and effects/assets follow the bundled reference library.
compatibility: Node.js ≥ 18（需可用 `node`）。运行时 `@webgal-tools/mcp-server`、`@webgal-tools/config` 不随仓库携带；按“本地 node_modules → env `WEBGAL_TOOLS_DIR` → 全局 npm/pnpm”探测，缺失时需在征得用户同意后安装（`scripts/wg.mjs doctor` / `install-runtime`）。可用 `pnpm`/`npm`。
---

# WebGAL 场景编辑器（Scene Editor）

把用户的自然语言剧情要求，落成对**某个现有 WebGAL 游戏目录**里 `scene/*.txt` 的增改。所有对游戏目录的读写**一律通过 `scripts/wg.mjs`**（它在进程内驱动 webgal-tools 的 MCP server），不要用自带文件工具直接碰游戏目录——这样才能保证资产路径与 `mcp.config.json` 一致、引用的素材确实存在。

**webgal-tools 运行时（`@webgal-tools/mcp-server`、`@webgal-tools/config`）不进仓库、不提交**。`scripts/wg.mjs` 每次自动探测：① 本 skill 目录 `node_modules` → ② 环境变量 `WEBGAL_TOOLS_DIR` 指向的目录 → ③ 全局 npm/pnpm root。**探测不到就停下，向用户说明原因与代价，征得同意后再** `node scripts/wg.mjs install-runtime --global`（或 `--dir 某目录` 并提示设 `WEBGAL_TOOLS_DIR`），**不要擅自全局安装**。可用 `node scripts/wg.mjs doctor` 查看探测结果。`scripts/wg.mjs <gameDir> <tool> <argsJson>` 用法见其文件头注释。

## 工作流（通用六步：先查运行时）

0. **运行时检查**：开工前先 `node scripts/wg.mjs doctor`。缺运行时 → 按上文“说明并征得同意”处理后再继续。
1. **定位目录**：显式路径 > `WEBGAL_WORK_DIR` > 问用户（绝不猜）。传**绝对路径**。目录须含 `scene/`（缺 `mcp.config.json` 时 wg.mjs 会自动生成默认）。
2. **摸底**：`scan_scene_script` 列剧本（`start.txt` 是入口、不可改名）；`read_scene_script {"file":"start.txt"}` 学现有风格（返回值带 markdown 围栏，记得“去壳”）；必要时 `get_docs_directory`。
3. **清点资产**（**绝不凭记忆选**）：
   - `scan_live2d_figures` 得 model 相对路径（不带 `figure/`）。
   - 对要上台的角色 `get_live2d_character_details {"model_paths":[...]}` 取**全部** motion/expression。⚠️ 返回常是“全角色聚合、上千行”，**先按角色前缀过滤**出目标角色（如 `soyo/*`）再使用，且只用返回清单里逐字出现的 ID。
   - 背景/音频用 `scan_work_dir_assets {"include_assets":["background","vocal","bgm","animation","video"]}`。
4. **起草**：先想清楚每句谁在说话、情绪怎么走、用哪个背景/特效；拿不准的语法先 `get_doc_content {"path":"webgal-script/xxx.md"}`。
5. **写入 + 自检**：新建用 `write_scene_script`（`mode` `overwrite`/`append`）；改现有文件 = 读→整篇改好→`overwrite`，勿手写半截。改完 `read_scene_script` 复核：引用素材都存在、无类型前缀、ASCII 标点、每句以 `;` 收尾、跳转/接线成立。

## WebGAL 语法核心（蒸馏）

- 语句以 **ASCII `;`** 结束；`;` 后全是注释（别把代码写在分号后，也别用全角 `；`）。
- `-next`=本句跑完立刻进下句（换背景/立绘后常用）；`-concat`=接上一句；`-notend`=本句未结束（可插演出）。
- `none` 清资源：`changeBg:none;` `changeFigure:none -left;` 等。
- **资源引用不带类型前缀**：写 `商店/羽泽咖啡厅（白天）.png`、`soyo/casual-2023/model.json`，绝不写 `background/…`、`figure/…`。
- 对话 `角色:台词;`；同人连续对话可省略名；旁白 `:文字;`；黑屏独白 `intro:第1行|第2行;`（要停住加 `-hold`）。
- 文本内插变量 `{name}`；用户输入 `getUserInput:name -title=… -buttonText=确认;`。
- 换/调剧本：`changeScene:文件.txt;`、子剧本 `callScene:文件.txt;`、分支 `choose:选项A:文件1.txt|选项B:文件2.txt;`、同文件 `jumpLabel:x;` / `label:x;`（每个分支末要 jumpLabel 收束）。回标题 `end;`。
- 台词人名：**中文**；`changeFigure` 的 `-id/-motion/-expression`：**拉丁码**。

## 立绘更新（引擎实测铁律）

- 主角色放**三槽位**（`-left`/`-right`/中间无位置），**不写 `-id`**。换表情/动作=**同一槽位再发一次** `changeFigure:<路径> -left -motion=… -expression=… -next;`（原地更新，实测有效）。
- ⚠️ 同名 `-id` 再次 `changeFigure` = 空操作；不带槽位只换表情会在中间**叠新立绘**；对同一 Live2D 做 `changeFigure:none` 再放回会**“毒化”它**（此后表情/动作都不再更新）。所以：**需多表情的主角全程槽位、只放置一次、此后只用同槽更新**；`-id` 仅用于“一次出现、不再变脸”的角色（路人/群像）。
- 每个更新紧贴它所属那句台词前一行；**说话人动、旁听少动**。

## 特效与转场（蒸馏自 `references/effects-library.md`，标注 `; 库#NN`）

- 目标位：`bg-main` / `fig-left` / `fig-center` / `fig-right`（或用立绘 `-id`）。
- 三类调用：
  - `setTransform:{…} -target=… -duration=0 -next;` —— 静态滤镜/风格（库 #1–50），氛围常用「变暗+轻微调色」而非「加亮+泛光」。
  - `setTempAnimation:[{…},{…}] -target=… [-next];` —— 关键帧动画（库 #51–139、恋爱 #140–171、复合 #172–200）。带 `-next`=播完进下句；不带=与文字并行。
  - `setAnimation:预设名 -target=… -next;` —— 工程自带预设（见该游戏 `game/animation/animationTable.json`：`enter-from-*`/`shake`/`godrayFilm`/`removeFilm`/`shockwaveIn` 等）。
- **开关一律数字 0/1**（`oldFilm dotFilm reflectionFilm glitchFilm rgbFilm godrayFilm vignetting …`），禁用布尔。
- **克制与亮度**：`brightness` ≤ ~1.05、`bloom` 小值、少大面积 godray；顿拍/脉冲的结束帧要回到基准，防残光串场。
- **重置**：跨不同滤镜风格前先做「库#201」精简重置（只写本幕动过字段）。
- **换幕=亮度暗场、且不重播上一句**：`setTextbox:hide;` → 依次压暗 `bg-main/fig-left/fig-right` 到 `brightness:0`（≈250ms）→ `changeBg:新背景 -next;` → 依次回亮（≈450ms）→（文本框仍隐藏）把新幕开场立绘姿态 `changeFigure` 摆好、补氛围滤镜（`-duration=0`）→ **最后 `setTextbox:on`，紧接其后就是新幕第一句全新台词**（严禁把上一幕末句再显示一遍）。同幕内小停顿不必暗场。
- 老引擎个别字段（`lightX/lightY/lightAngle/lightIntensity`、`shakePower/shakeSpeed`、部分 `sepia/pixelSize/bevel`）可能不支持——拿不准先小范围试跑或用自带预设替代。

## 人物演出：表情/动作分级

- **先枚举该角色全部可选项**（见工作流 3），按“幕/拍/句”为每句分不同档，别来回只用一两个。
- **人设决定动/静**：傲娇/沉稳角色（素世）以表情分级为主、身体克制（`idle01` 打底，偶用 `ando01` 安堵等小动作，避开 `odoodo` 缩身这类夸张姿态）；外放角色（爱音）可用多样动作（`kime/wink/surprised/thinking/kandou`…）。
- 素世傲娇示例链：`default→smile01(客气)→serious02(装冷)→ando01(松口)→serious01(拆穿)→wink01(得逞)→smile05(真心)→surprised→shame01(脸红)→smile06(最暖)`；每个 ID 先用真实清单核对。

## 权威 references（渐进披露，按需打开）

| 文件 | 内容 | 何时打开 |
|---|---|---|
| `references/effects-library.md` | 北风特效库全文：滤镜/动画/恋爱/复合/重置 196+ 条带编号 | 要选具体特效、滤镜、顿拍时，挑完标注 `库#NN` |
| `references/3.1-assistant-word.md` | MyGO/mujica 全角色立绘/动作/表情/背景清单 + WebGAL 语法教程 + transform/严禁事项 | 选资产、查角色拉丁码、查进阶语法与严禁时 |

SKILL.md 里的一切规则都是上面两文件 + 实机验证的**提炼**；遇到文中没覆盖的细节，去对应文件对应小节查。

## 收尾自检

1. 改动的文件都 `read_scene_script` 复核过；引用的每个背景/立绘/动作/表情都在扫描结果里逐字存在。
2. 无类型前缀；ASCII 标点；语句以 `;` 收尾；`jumpLabel/choose/changeScene` 指向存在。
3. 没对主角做过 `none→放回`；转场开箱即接新句、没重播上一句。
4. 向用户交代：改了哪些文件、怎么接线、哪些资产因不存在而替换。

## 报错与诚实

- `doctor` 探测不到 webgal-tools 运行时 → **停下并向用户说明原因与代价**，征得同意后才 `install-runtime`（默认 `--global`；或 `--dir` 装到自定目录并让其设 `WEBGAL_TOOLS_DIR`）。绝不静默全局安装。
- 目录缺失/非 game 目录 → 请用户给正确路径（或 `WEBGAL_WORK_DIR`），别编造目录。
- 工具报错 → 改参数重试，别绕过。
- 请求的资产不存在 → 明说，并给最接近的真实替代，不写悬空引用。
