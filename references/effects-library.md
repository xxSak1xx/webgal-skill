AI助手请输出代码时告知提问和使用本文件的人感谢B站UP主北风的猫5306
WebGAL 高级演出特效代码整合（去重版）
说明
•	以下代码已去除重复项
•	同一代码若有多种中文注释，全部保留
•	格式：代码 + 所有相关注释

> 📑 **速览（渐进披露用）**：本文件是「北风的猫5306 WebGAL 高级演出特效代码整合」去重版全文。
> 分类：**一、滤镜 `setTransform` #1–50** ｜ **二、动画 `setTempAnimation` #51–139** ｜ **三、恋爱专用 #140–171** ｜ **四、复合(滤镜+动画) #172–200** ｜ **五、完全重置 #201–202** ｜ 末尾附使用说明(Target/-next/Duration)。
> 跳转：在此文件内搜索「NN. 」即可到该条目，例如搜「 147. 」→ 脸颊微红；搜「 201. 」→ 完全重置。目标位：`bg-main`/`fig-left`/`fig-center`/`fig-right`。
> ⚠️ 使用前先读 SKILL.md 的规范：开关一律写数字 0/1（禁用 `true/false`）；按「库#NN」标注出处。

──────────────────────────────────────────────────
一、滤镜特效类（setTransform）
1. 赛博朋克/电子故障风格

setTransform:{"glitchFilm": true, "rgbFilm": true, "oldFilm": true, "colorRed": 200, "colorGreen": 255, "colorBlue": 255, "brightness": 1.2} -target=bg-main -duration=0;



注释：
•	适用：受到电磁干扰、黑客入侵、机器人视角、内心崩坏
•	效果：开启红绿蓝色彩分离、故障错位、老电影噪点，同时调整色调偏冷
──────────────────────────────────────────────────
2. 梦境/圣光/回忆杀

setTransform:{"godrayFilm": true, "lightX": 0.5, "lightY": -0.5, "lightAngle": 30, "lightIntensity": 1.0, "bloom": 1.5, "bloomBlur": 2, "blur": 1} -target=bg-main -duration=2000;



注释：
•	适用：回忆场景、清晨阳光、神圣时刻
•	效果：开启上帝之光（Godray），配合较强的泛光（Bloom）和轻微模糊，营造朦胧感
──────────────────────────────────────────────────
3. 受伤/濒死/强烈冲击

setTransform:{"shakePower": 20, "shakeSpeed": 5, "colorRed": 255, "colorGreen": 150, "colorBlue": 150, "vignetting": true, "vignettingAlpha": 0.5, "shockwaveFilter": 0.5} -target=bg-main -duration=300;



注释：
•	适用：主角受到攻击、地震、极度恐惧
•	效果：屏幕剧烈震动（Shake），产生冲击波纹（Shockwave），画面变红并产生暗角（Vignetting）
──────────────────────────────────────────────────
4. 复古黑白电视/监控画面

setTransform:{"oldFilm": true, "vignetting": true, "vignettingBlur": 0.5, "vignettingAlpha": 0.8, "noise": 0.5, "saturation": 0, "contrast": 1.5} -target=bg-main -duration=0;



注释：
•	适用：查看监控、老电视节目、过去的时间线
•	效果：开启老电影效果（噪点+划痕），去除饱和度（变黑白），增加对比度，增加暗角
──────────────────────────────────────────────────
5. 水下/热浪扭曲效果

setTransform:{"reflectionFilm": true, "colorRed": 200, "colorGreen": 220, "colorBlue": 255, "blur": 1} -target=bg-main -duration=0;



注释：
•	适用：海边、水下、极度炎热的沙漠
•	效果：开启反射滤镜（模拟水波），色调调整为青蓝色，轻微模糊
──────────────────────────────────────────────────
6. 角色高光/觉醒状态（立绘）

setTransform:{"bloom": 1.5, "bloomBlur": 4, "bloomThreshold": 0.1, "brightness": 1.2} -target=fig-center -duration=500;



注释：
•	适用：角色成为焦点、高能状态、灵体化
•	效果：对立绘使用强烈的泛光，使其边缘发光并变亮
──────────────────────────────────────────────────
7. 复古胶片（背景）

setTransform:{"brightness":0.8,"contrast":1.2,"saturation":0.6,"gamma":0.9,"colorRed":255,"colorGreen":230,"colorBlue":200,"bloom":0.3,"bloomBlur":6,"sepia":0.7} -target=bg-main -duration=0 -next;



注释：
•	复古胶片风格背景滤镜
•	暖黄色调+轻微泛光+棕褐色
──────────────────────────────────────────────────
8. 复古胶片（人物）

setTransform:{"brightness":0.7,"contrast":1.3,"saturation":0.7,"gamma":1.0,"colorRed":255,"colorGreen":235,"colorBlue":210,"bloom":0.2,"bloomBlur":4,"bevel":1,"bevelThickness":15,"bevelRotation":45,"bevelRed":250,"bevelGreen":220,"bevelBlue":180} -target=fig-center -duration=0;



注释：
•	复古胶片风格人物滤镜
•	配合背景使用的立绘效果
──────────────────────────────────────────────────
9. 赛博朋克（背景）

setTransform:{"brightness":0.9,"contrast":1.5,"saturation":1.8,"gamma":0.7,"colorRed":180,"colorGreen":200,"colorBlue":255,"bloom":1.2,"bloomBrightness":0.9,"bloomBlur":12,"glitchFilm":true,"red":[3,0],"blue":[-3,0]} -target=bg-main -duration=0 -next;



注释：
•	赛博朋克风格背景
•	冷蓝色调+高饱和度+故障效果
──────────────────────────────────────────────────
10. 赛博朋克（人物）

setTransform:{"brightness":0.8,"contrast":1.4,"saturation":1.6,"gamma":0.8,"colorRed":200,"colorGreen":220,"colorBlue":255,"bloom":0.8,"bloomBlur":8,"bevel":2,"bevelThickness":20,"bevelRotation":60,"bevelRed":150,"bevelGreen":180,"bevelBlue":255} -target=fig-center -duration=0;



注释：
•	赛博朋克风格人物滤镜
──────────────────────────────────────────────────
11. 梦幻柔光（背景）

setTransform:{"brightness":1.1,"contrast":0.7,"saturation":1.3,"gamma":0.8,"colorRed":250,"colorGreen":240,"colorBlue":255,"bloom":1.5,"bloomBrightness":0.6,"bloomBlur":15} -target=bg-main -duration=0 -next;



注释：
•	梦幻柔光风格背景
•	低对比度+强泛光+淡紫色调
──────────────────────────────────────────────────
12. 梦幻柔光（人物）

setTransform:{"brightness":1.0,"contrast":0.8,"saturation":1.2,"gamma":0.9,"colorRed":252,"colorGreen":245,"colorBlue":255,"bloom":1.0,"bloomBlur":10,"bevel":0.8,"bevelThickness":12,"bevelRotation":30,"bevelRed":255,"bevelGreen":250,"bevelBlue":255} -target=fig-center -duration=0;



注释：
•	梦幻柔光风格人物滤镜
──────────────────────────────────────────────────
13. 冷色调极简（背景）

setTransform:{"brightness":0.75,"contrast":1.2,"saturation":0.4,"gamma":0.8,"colorRed":180,"colorGreen":200,"colorBlue":255,"bloom":0.2,"bloomBlur":5} -target=bg-main -duration=0 -next;



注释：
•	冷色调极简风格背景
•	低饱和度+冷蓝色
──────────────────────────────────────────────────
14. 冷色调极简（人物）

setTransform:{"brightness":0.7,"contrast":1.3,"saturation":0.5,"gamma":0.9,"colorRed":190,"colorGreen":210,"colorBlue":255,"bevel":1,"bevelThickness":10,"bevelRotation":40,"bevelRed":170,"bevelGreen":190,"bevelBlue":250} -target=fig-center -duration=0;



注释：
•	冷色调极简风格人物滤镜
──────────────────────────────────────────────────
15. 暖色调治愈（背景）

setTransform:{"brightness":0.95,"contrast":0.9,"saturation":1.4,"gamma":0.9,"colorRed":255,"colorGreen":220,"colorBlue":180,"bloom":0.7,"bloomBlur":8} -target=bg-main -duration=0 -next;



注释：
•	暖色调治愈风格背景
•	暖橙色调+适中饱和度
──────────────────────────────────────────────────
16. 暖色调治愈（人物）

setTransform:{"brightness":0.9,"contrast":1.0,"saturation":1.3,"gamma":1.0,"colorRed":255,"colorGreen":225,"colorBlue":190,"bloom":0.5,"bloomBlur":6,"bevel":1.2,"bevelThickness":14,"bevelRotation":50,"bevelRed":255,"bevelGreen":210,"bevelBlue":170} -target=fig-center -duration=0;



注释：
•	暖色调治愈风格人物滤镜
──────────────────────────────────────────────────
17. 水墨风（背景）

setTransform:{"brightness":0.8,"contrast":1.6,"saturation":0.2,"gamma":0.7,"colorRed":200,"colorGreen":200,"colorBlue":200,"bloom":0.1,"bloomBlur":3} -target=bg-main -duration=0 -next;



注释：
•	水墨风格背景
•	极低饱和度+高对比度
──────────────────────────────────────────────────
18. 水墨风（人物）

setTransform:{"brightness":0.75,"contrast":1.7,"saturation":0.3,"gamma":0.8,"colorRed":210,"colorGreen":210,"colorBlue":210,"bevel":0.5,"bevelThickness":8,"bevelRotation":30,"bevelRed":180,"bevelGreen":180,"bevelBlue":180} -target=fig-center -duration=0;



注释：
•	水墨风格人物滤镜
──────────────────────────────────────────────────
19. 油画质感（背景）

setTransform:{"brightness":0.9,"contrast":0.8,"saturation":1.5,"gamma":0.9,"colorRed":245,"colorGreen":235,"colorBlue":225,"bloom":0.4,"bloomBlur":10,"pixelSize":3} -target=bg-main -duration=0 -next;



注释：
•	油画质感风格背景
•	暖色调+轻微像素化
──────────────────────────────────────────────────
20. 油画质感（人物）

setTransform:{"brightness":0.85,"contrast":0.9,"saturation":1.4,"gamma":1.0,"colorRed":248,"colorGreen":238,"colorBlue":228,"bloom":0.3,"bloomBlur":8,"pixelSize":2,"bevel":1,"bevelThickness":12,"bevelRotation":45,"bevelRed":240,"bevelGreen":230,"bevelBlue":220} -target=fig-center -duration=0;



注释：
•	油画质感风格人物滤镜
──────────────────────────────────────────────────
21. 电影感暗角（背景）

setTransform:{"brightness":0.8,"contrast":1.3,"saturation":1.1,"gamma":0.8,"colorRed":250,"colorGreen":245,"colorBlue":240,"bloom":0.5,"bloomBlur":7,"vignetting":true,"vignettingAlpha":0.6,"vignettingBlur":0.8} -target=bg-main -duration=0 -next;



注释：
•	电影感暗角风格背景
•	暗角效果+适中对比度
──────────────────────────────────────────────────
22. 电影感暗角（人物）

setTransform:{"brightness":0.9,"contrast":1.2,"saturation":1.0,"gamma":0.9,"colorRed":252,"colorGreen":247,"colorBlue":242,"bloom":0.4,"bloomBlur":5,"bevel":1.1,"bevelThickness":15,"bevelRotation":35,"bevelRed":245,"bevelGreen":240,"bevelBlue":235} -target=fig-center -duration=0;



注释：
•	电影感暗角风格人物滤镜
──────────────────────────────────────────────────
23. 高光溢出（背景）

setTransform:{"brightness":1.3,"contrast":0.8,"saturation":1.2,"gamma":0.7,"colorRed":255,"colorGreen":250,"colorBlue":240,"bloom":1.8,"bloomBrightness":0.8,"bloomBlur":12} -target=bg-main -duration=0 -next;



注释：
•	高光溢出风格背景
•	高亮度+强泛光
──────────────────────────────────────────────────
24. 高光溢出（人物）

setTransform:{"brightness":1.2,"contrast":0.9,"saturation":1.1,"gamma":0.8,"colorRed":255,"colorGreen":252,"colorBlue":245,"bloom":1.2,"bloomBlur":9,"bevel":0.9,"bevelThickness":10,"bevelRotation":55,"bevelRed":255,"bevelGreen":248,"bevelBlue":238} -target=fig-center -duration=0;



注释：
•	高光溢出风格人物滤镜
──────────────────────────────────────────────────
25. 清新日系（背景）

setTransform:{"brightness":1.05,"contrast":0.85,"saturation":1.2,"gamma":0.95,"colorRed":245,"colorGreen":250,"colorBlue":255,"bloom":0.6,"bloomBlur":9} -target=bg-main -duration=0 -next;



注释：
•	清新日系风格背景
•	淡蓝色调+适中泛光
──────────────────────────────────────────────────
26. 清新日系（人物）

setTransform:{"brightness":1.0,"contrast":0.9,"saturation":1.1,"gamma":1.0,"colorRed":248,"colorGreen":252,"colorBlue":255,"bloom":0.5,"bloomBlur":7,"bevel":0.7,"bevelThickness":10,"bevelRotation":30,"bevelRed":240,"bevelGreen":245,"bevelBlue":250} -target=fig-center -duration=0;



注释：
•	清新日系风格人物滤镜
──────────────────────────────────────────────────
27. 圣光降临

setTransform:{"godrayFilm":true, "bloom":1} -target=bg-main -duration=1000;



注释：
•	开启WebGAL内置的体积光特效
•	模拟阳光透过树叶或教堂穹顶
──────────────────────────────────────────────────
28. 天使光环

setTransform:{"bloom":2.0, "bloomBlur":6, "bloomThreshold":0.2, "brightness":1.2} -target=bg-main -duration=2000;



注释：
•	利用Bloom制造强烈的发光效果
•	让画面看起来神圣不可侵犯
──────────────────────────────────────────────────
29. 梦境边缘·色差

setTransform:{"rgbFilm":true, "blur":1} -target=bg-main -duration=1000;



注释：
•	轻微的RGB色彩分离
•	制造一种迷离、不真实的梦幻感
──────────────────────────────────────────────────
30. 水下/波光粼粼

setTransform:{"reflectionFilm":true} -target=bg-main -duration=0;



注释：
•	开启反射滤镜模拟水面波纹
•	适用于海边约会或内心深处
──────────────────────────────────────────────────
31. 岁月静好·老照片

setTransform:{"oldFilm":true, "sepia":0.5, "brightness":0.9} -target=bg-main -duration=0;



注释：
•	泛黄的老电影效果
•	用于温馨的过去回忆
──────────────────────────────────────────────────
32. 羞涩脸红·暖色滤镜

setTransform:{"colorRed":255, "colorGreen":200, "colorBlue":200, "saturation":1.3, "brightness":1.1} -target=bg-main -duration=1500;



注释：
•	画面缓慢变得温暖、泛红
•	模拟害羞的主观视角
──────────────────────────────────────────────────
33. 暧昧气氛·朦胧美

setTransform:{"blur":2, "bloom":1, "bloomBrightness":1.1, "bloomThreshold":0.1} -target=bg-main -duration=1000;



注释：
•	永久开启轻微的模糊和泛光
•	让画面变得像加了美颜滤镜
──────────────────────────────────────────────────
34. 视线模糊·含泪

setTransform:{"blur":4, "bloom":1.5, "brightness":1.1} -target=bg-main -duration=1500;



注释：
•	模拟感动或悲伤时眼眶含泪的模糊感
──────────────────────────────────────────────────
35. 恋爱脑·色彩增强

setTransform:{"saturation":1.5, "contrast":1.1, "brightness":1.05} -target=bg-main -duration=1000;



注释：
•	大幅提升饱和度
•	让画面看起来非常鲜艳快乐
──────────────────────────────────────────────────
36. 病娇·精神污染

setTransform:{"glitchFilm":true, "rgbFilm":true, "colorRed":255, "colorGreen":200, "colorBlue":200} -target=bg-main -duration=200;



注释：
•	剧烈的故障（Glitch）和色调偏离
•	适用：病娇、黑化场景
──────────────────────────────────────────────────
37. 黑化·深渊模式

setTransform:{"radiusAlphaFilter":0.4} -target=bg-main -duration=1500;



注释：
•	周围极黑，只有中心微亮
•	RadiusAlpha遮罩效果
──────────────────────────────────────────────────
38. 耳鸣·视觉重影

setTransform:{"rgbFilm":true, "blur":3} -target=bg-main -duration=100;



注释：
•	利用RGB分离模拟眩晕和耳鸣感
──────────────────────────────────────────────────
39. 立绘·接吻前奏（凑近）

setTransform:{"scale":{"x":1.4,"y":1.4},"position":{"y":200}} -target=fig-center -duration=1000;



注释：
•	立绘放大并下移
•	模拟凑近脸庞
──────────────────────────────────────────────────
40. 立绘·灵体化/幽灵

setTransform:{"alpha":0.6, "bloom":1, "brightness":1.2} -target=fig-center -duration=1000;



注释：
•	半透明+泛光效果
•	适用：幽灵、灵体化
──────────────────────────────────────────────────
41. 立绘·暗淡退场

setTransform:{"brightness":0.5, "alpha":0.5} -target=fig-center -duration=500;



注释：
•	变暗并透明
•	不移除立绘
──────────────────────────────────────────────────
42. 立绘·高光时刻（背景变暗）

setTransform:{"brightness":0.5} -target=bg-main -duration=500;



注释：
•	背景变暗，配合立绘发光使用
──────────────────────────────────────────────────
43. 立绘·高光时刻（立绘发光）

setTransform:{"bloom":0.5, "brightness":1.1} -target=fig-center -duration=500;



注释：
•	立绘保持亮色发光
•	配合背景变暗指令使用
──────────────────────────────────────────────────
44. 雨天窗户

setTransform:{"blur":2, "reflectionFilm":true} -target=bg-main -duration=0;



注释：
•	模糊+反射滤镜
•	模拟雨水打在玻璃上
──────────────────────────────────────────────────
45. 深夜模式

setTransform:{"colorRed":80, "colorGreen":80, "colorBlue":200, "brightness":0.5, "contrast":1.2} -target=bg-main -duration=2000;



注释：
•	整体变蓝变暗
•	对比度增加
──────────────────────────────────────────────────
46. 逢魔之时（黄昏）

setTransform:{"colorRed":255, "colorGreen":150, "colorBlue":100, "contrast":1.3} -target=bg-main -duration=2000;



注释：
•	强烈的橙紫渐变
•	高对比度
──────────────────────────────────────────────────
47. 极速冲刺

setTransform:{"blur":10, "position":{"x":-50}} -target=bg-main -duration=200;



注释：
•	利用横向模糊制造速度线感
──────────────────────────────────────────────────
48. 电影宽银幕

setTransform:{"scale":{"y":0.85}} -target=bg-main -duration=1000;



注释：
•	使用scale.y模拟电影遮幅效果
──────────────────────────────────────────────────
49. 月下唯美·冷色调

setTransform:{"colorRed":180, "colorGreen":190, "colorBlue":255, "brightness":0.8, "contrast":1.2} -target=bg-main -duration=1500;



注释：
•	将画面调整为静谧的蓝紫色调
•	增加对比度
──────────────────────────────────────────────────
50. 黄昏余晖·暖橙色

setTransform:{"colorRed":255, "colorGreen":210, "colorBlue":160, "brightness":1.05} -target=bg-main -duration=1500;



注释：
•	将画面调整为强烈的橘红色调
•	模拟夕阳
──────────────────────────────────────────────────
二、动画特效类（setTempAnimation）
51. 缓慢推近

setTempAnimation:[{"duration": 0, "scale": {"x": 1, "y": 1}}, {"duration": 3000, "scale": {"x": 1.2, "y": 1.2}}] -target=bg-main;



注释：
•	制造压迫感或专注点
•	电影感运镜
•	3秒内缓慢放大由远及近
──────────────────────────────────────────────────
52. 快速拉远

setTempAnimation:[{"duration": 0, "scale": {"x": 1.3, "y": 1.3}}, {"duration": 400, "scale": {"x": 1.0, "y": 1.0}}] -target=bg-main -next;



注释：
•	用于揭示全景或惊讶
•	瞬间放大后快速回复原状
──────────────────────────────────────────────────
53. 横向摇摄·向右

setTempAnimation:[{"duration": 0, "scale": {"x": 1.1, "y": 1.1}, "position": {"x": -50, "y": 0}}, {"duration": 4000, "position": {"x": 50, "y": 0}}] -target=bg-main;



注释：
•	环视周围
•	Pan Right镜头运动
──────────────────────────────────────────────────
54. 纵向摇摄·向上

setTempAnimation:[{"duration": 0, "scale": {"x": 1.1, "y": 1.1}, "position": {"x": 0, "y": 50}}, {"duration": 4000, "position": {"x": 0, "y": -50}}] -target=bg-main;



注释：
•	仰望天空或高楼
•	Tilt Up镜头运动
──────────────────────────────────────────────────
55. 镜头左摇

setTempAnimation:[{"duration":0,"position":{"x":0,"y":0}},{"duration":2000,"position":{"x":100,"y":0}}] -target=bg-main;



注释：
•	Pan Left
•	模拟向左转头看
──────────────────────────────────────────────────
56. 镜头右摇

setTempAnimation:[{"duration":0,"position":{"x":0,"y":0}},{"duration":2000,"position":{"x":-100,"y":0}}] -target=bg-main;



注释：
•	Pan Right
•	模拟向右转头看
──────────────────────────────────────────────────
57. 仰视天空

setTempAnimation:[{"duration":0,"position":{"x":0,"y":0}},{"duration":2000,"position":{"x":0,"y":100},"scale":{"x":1.05,"y":1.05}}] -target=bg-main;



注释：
•	Tilt Up
•	模拟抬头
──────────────────────────────────────────────────
58. 俯视地面

setTempAnimation:[{"duration":0,"position":{"x":0,"y":0}},{"duration":2000,"position":{"x":0,"y":-100},"scale":{"x":1.05,"y":1.05}}] -target=bg-main;



注释：
•	Tilt Down
•	模拟低头沮丧
──────────────────────────────────────────────────
59. 荷兰式倾斜

setTempAnimation:[{"duration": 0, "rotation": 0, "scale": {"x": 1.2, "y": 1.2}}, {"duration": 2000, "rotation": 0.1}] -target=bg-main;



注释：
•	表现不安、疯狂或失衡（缓慢倾斜）
•	Dutch Angle
•	画面缓慢倾斜
──────────────────────────────────────────────────
60. 急剧对焦

setTempAnimation:[{"duration": 0, "blur": 30}, {"duration": 800, "blur": 0}] -target=bg-main -next;



注释：
•	Re-Focus
•	画面由极为模糊变清晰
──────────────────────────────────────────────────
61. 失焦模糊

setTempAnimation:[{"duration": 0, "blur": 0}, {"duration": 1500, "blur": 20}] -target=bg-main -next;



注释：
•	Out of Focus
•	失去意识或视线模糊
──────────────────────────────────────────────────
62. 呼吸感镜头

setTempAnimation:[{"duration": 0, "scale": {"x": 1.0, "y": 1.0}}, {"duration": 2000, "scale": {"x": 1.03, "y": 1.03}}, {"duration": 2000, "scale": {"x": 1.0, "y": 1.0}}] -target=bg-main;



注释：
•	极其微小的缩放循环，用于打破静止画面
•	Breathing Camera / Idle Breath
•	让静态演出有动态感，让长对话不显枯燥
•	「沉重呼吸」待机动画
•	让静止CG"活"起来
──────────────────────────────────────────────────
63. 水平震颤

setTempAnimation:[{"duration": 0, "position": {"x": 0, "y": 0}}, {"duration": 100, "position": {"x": 5, "y": 0}}, {"duration": 100, "position": {"x": -5, "y": 0}}, {"duration": 100, "position": {"x": 5, "y": 0}}, {"duration": 100, "position": {"x": 0, "y": 0}}] -target=bg-main;



注释：
•	Horizontal Shiver
•	模拟坐车或轻微地震
──────────────────────────────────────────────────
🤖 Assistant
64. 瞬间黑屏转场

setTempAnimation:[{"duration": 0, "brightness": 1}, {"duration": 100, "brightness": 0}, {"duration": 500, "brightness": 0}, {"duration": 200, "brightness": 1}] -target=bg-main -next;



注释：
•	Hard Cut Black
•	亮度瞬间归零再恢复
──────────────────────────────────────────────────
65. 惊恐心跳

setTempAnimation:[{"duration": 0, "scale": {"x": 1, "y": 1}, "colorGreen": 255, "colorBlue": 255}, {"duration": 100, "scale": {"x": 1.05, "y": 1.05}, "colorGreen": 200, "colorBlue": 200}, {"duration": 300, "scale": {"x": 1, "y": 1}, "colorGreen": 255, "colorBlue": 255}] -target=bg-main;



注释：
•	Heartbeat
•	画面随心跳收缩变红
──────────────────────────────────────────────────
66. 心跳悸动（暗角版）

setTempAnimation:[{"duration": 0, "vignetting": true, "vignettingAlpha": 0, "colorRed": 255, "colorGreen": 255, "colorBlue": 255}, {"duration": 200, "vignettingAlpha": 0.6, "colorRed": 255, "colorGreen": 200, "colorBlue": 200}, {"duration": 1000, "vignettingAlpha": 0, "colorRed": 255, "colorGreen": 255, "colorBlue": 255}] -target=bg-main -next;



注释：
•	「心跳/悸动」压抑氛围
•	利用暗角（Vignetting）和红色调的周期性收缩
•	模拟紧张时的视线收窄和充血感
•	适用：恐惧、紧张、遇到危险、心动
──────────────────────────────────────────────────
67. 闪回白光

setTempAnimation:[{"duration": 0, "brightness": 1, "blur": 0}, {"duration": 200, "brightness": 5, "blur": 10}, {"duration": 1500, "brightness": 1, "blur": 0}] -target=bg-main -next;



注释：
•	Bright Flashback
•	记忆涌现
──────────────────────────────────────────────────
68. 灰暗绝望

setTempAnimation:[{"duration": 0, "saturation": 1}, {"duration": 2000, "saturation": 0, "brightness": 0.8}] -target=bg-main;



注释：
•	Despair/Grey
•	失去色彩
•	石化（Desaturate）表示绝望或震惊
──────────────────────────────────────────────────
69. 愤怒爆发

setTempAnimation:[{"duration": 0, "colorGreen": 255, "colorBlue": 255}, {"duration": 200, "colorGreen": 100, "colorBlue": 100, "position": {"x": 10, "y": 10}}, {"duration": 200, "position": {"x": -10, "y": -10}}, {"duration": 200, "position": {"x": 0, "y": 0}}] -target=bg-main;



注释：
•	Rage
•	画面染红并颤抖
──────────────────────────────────────────────────
70. 中毒/眩晕

setTempAnimation:[{"duration": 0, "colorRed": 255, "colorGreen": 255, "colorBlue": 255, "blur": 0}, {"duration": 1000, "colorRed": 200, "colorGreen": 100, "colorBlue": 255, "blur": 5}, {"duration": 1000, "colorRed": 255, "colorGreen": 255, "colorBlue": 255, "blur": 0}] -target=bg-main;



注释：
•	Poisoned
•	变紫并模糊
──────────────────────────────────────────────────
71. 冰冻/寒冷

setTempAnimation:[{"duration": 0, "colorRed": 255, "colorGreen": 255, "contrast": 1}, {"duration": 1000, "colorRed": 150, "colorGreen": 200, "contrast": 1.2}] -target=bg-main;



注释：
•	Freezing
•	变蓝并提升对比度
──────────────────────────────────────────────────
72. 警报红光闪烁

setTempAnimation:[{"duration": 0, "colorGreen": 255, "colorBlue": 255}, {"duration": 500, "colorGreen": 100, "colorBlue": 100}, {"duration": 500, "colorGreen": 255, "colorBlue": 255}] -target=bg-main;



注释：
•	Alarm
•	红光周期性闪烁
──────────────────────────────────────────────────
73. 眨眼

setTempAnimation:[{"duration": 0, "brightness": 1}, {"duration": 100, "brightness": 0}, {"duration": 50, "brightness": 0}, {"duration": 100, "brightness": 1}] -target=bg-main -next;



注释：
•	Blinking
•	单次眨眼效果
──────────────────────────────────────────────────
74. 昏昏欲睡

setTempAnimation:[{"duration": 0, "brightness": 1, "blur": 0}, {"duration": 3000, "brightness": 0.5, "blur": 10}, {"duration": 200, "brightness": 1, "blur": 0}] -target=bg-main -next;



注释：
•	Drowsy
•	缓慢地暗下去模糊，然后惊醒
──────────────────────────────────────────────────
75. 灵感/发现

setTempAnimation:[{"duration": 0, "brightness": 1}, {"duration": 100, "brightness": 1.5}, {"duration": 300, "brightness": 1}] -target=bg-main;



注释：
•	Idea
•	瞬间变亮
──────────────────────────────────────────────────
76. 受击震动

setTempAnimation:[{"duration":0,"position":{"x":0,"y":0}},{"duration":50,"position":{"x":20,"y":-15}},{"duration":50,"position":{"x":-15,"y":20}},{"duration":50,"position":{"x":-10,"y":-10}},{"duration":50,"position":{"x":0,"y":0}}] -target=bg-main -next;



注释：
•	Damage Shake
•	剧烈的乱向震动
──────────────────────────────────────────────────
77. 致命一击

setTempAnimation:[{"duration":0,"brightness":1},{"duration":50,"brightness":-1},{"duration":50,"brightness":1}] -target=bg-main -next;



注释：
•	Critical Hit
•	画面反色闪烁
──────────────────────────────────────────────────
78. 躲闪

setTempAnimation:[{"duration":0,"position":{"x":0,"y":0}},{"duration":100,"position":{"x":-200,"y":0}},{"duration":200,"position":{"x":0,"y":0}}] -target=bg-main -next;



注释：
•	Dodge
•	快速横移然后移回
──────────────────────────────────────────────────
79. 后坐力

setTempAnimation:[{"duration":0,"scale":{"x":1,"y":1}},{"duration":50,"scale":{"x":1.05,"y":1.05}},{"duration":200,"scale":{"x":1,"y":1}}] -target=bg-main;



注释：
•	Recoil
•	画面瞬间放大后复原
──────────────────────────────────────────────────
80. 跌倒

setTempAnimation:[{"duration":0,"rotation":0,"position":{"y":0}},{"duration":600,"rotation":0.1,"position":{"y":300},"alpha":0}] -target=bg-main -next;



注释：
•	Fall Down
•	画面旋转并向下位移
──────────────────────────────────────────────────
81. 蓄力

setTempAnimation:[{"duration":0,"scale":{"x":1,"y":1},"brightness":1},{"duration":1000,"scale":{"x":0.95,"y":0.95},"brightness":0.7}] -target=bg-main;



注释：
•	Charge
•	画面轻微收缩震动变暗
──────────────────────────────────────────────────
82. 冲击波释放

setTempAnimation:[{"duration":0,"scale":{"x":0.95,"y":0.95},"brightness":0.7},{"duration":100,"scale":{"x":1.1,"y":1.1},"brightness":1.5},{"duration":300,"scale":{"x":1,"y":1},"brightness":1}] -target=bg-main -next;



注释：
•	Release
•	蓄力后的释放，放大并变亮
──────────────────────────────────────────────────
83. 拔刀/斩击

setTempAnimation:[{"duration":0,"position":{"x":0,"y":0}},{"duration":50,"position":{"x":50,"y":50}},{"duration":50,"position":{"x":-50,"y":-50}},{"duration":50,"position":{"x":0,"y":0}}] -target=bg-main -next;



注释：
•	Slash
•	画面快速错位
──────────────────────────────────────────────────
84. 地震

setTempAnimation:[{"duration":0,"position":{"y":0}},{"duration":100,"position":{"y":10}},{"duration":100,"position":{"y":-10}},{"duration":100,"position":{"y":10}},{"duration":100,"position":{"y":0}}] -target=bg-main;



注释：
•	Earthquake
•	持续较长的垂直震动
──────────────────────────────────────────────────
85. 时间停止

setTempAnimation:[{"duration":0,"saturation":1}, {"duration":100,"saturation":0, "brightness": 0.8}] -target=bg-main;



注释：
•	Time Stop
•	瞬间灰色
──────────────────────────────────────────────────
86. 立绘跳跃

setTempAnimation:[{"duration":0,"position":{"y":0}},{"duration":150,"position":{"y":-50}},{"duration":150,"position":{"y":0}}] -target=fig-center;



注释：
•	Figure Jump
•	表示高兴或惊讶
•	立绘原地跳起
──────────────────────────────────────────────────
87. 立绘震惊

setTempAnimation:[{"duration":0,"scale":{"x":1,"y":1}},{"duration":50,"scale":{"x":1.1,"y":1.1},"position":{"x":10,"y":0}},{"duration":50,"scale":{"x":1.1,"y":1.1},"position":{"x":-10,"y":0}},{"duration":50,"scale":{"x":1.1,"y":1.1},"position":{"x":0,"y":0}}] -target=fig-center;



注释：
•	Figure Shock
•	快速放大并震动
──────────────────────────────────────────────────
88. 立绘点头

setTempAnimation:[{"duration":0,"position":{"y":0}},{"duration":150,"position":{"y":20}},{"duration":150,"position":{"y":0}}] -target=fig-center;



注释：
•	Figure Nod
•	表示同意
──────────────────────────────────────────────────
89. 立绘摇头/拒绝

setTempAnimation:[{"duration":0,"position":{"x":0}},{"duration":100,"position":{"x":-15}},{"duration":100,"position":{"x":15}},{"duration":100,"position":{"x":0}}] -target=fig-center;



注释：
•	Figure Shake No
•	害羞躲避
──────────────────────────────────────────────────
90. 立绘逼近

setTempAnimation:[{"duration":0,"scale":{"x":1,"y":1}},{"duration":500,"scale":{"x":1.3,"y":1.3}}] -target=fig-center;



注释：
•	Figure Approach
•	压迫感或亲密
•	Zoom In角色凑近镜头
──────────────────────────────────────────────────
91. 立绘后退

setTempAnimation:[{"duration":0,"scale":{"x":1,"y":1}},{"duration":500,"scale":{"x":0.8,"y":0.8},"alpha":0.8}] -target=fig-center;



注释：
•	Figure Retreat
•	害怕或离开
•	Zoom Out角色远离镜头
──────────────────────────────────────────────────
92. 立绘叹气/沮丧

setTempAnimation:[{"duration":0,"scale":{"x":1,"y":1}, "position":{"y":0}},{"duration":600,"scale":{"x":1.02,"y":0.98}, "position":{"y":5}},{"duration":600,"scale":{"x":1,"y":1}, "position":{"y":0}}] -target=fig-center;



注释：
•	Figure Sigh
•	身体轻微下沉压扁
•	立绘被垂直压扁一点
──────────────────────────────────────────────────
93. 立绘闪亮登场

setTempAnimation:[{"duration":0,"alpha":0,"brightness":2},{"duration":500,"alpha":1,"brightness":1}] -target=fig-center;



注释：
•	Figure Flash Enter
──────────────────────────────────────────────────
94. 立绘灵体化/幽灵

setTempAnimation:[{"duration":0,"alpha":1}, {"duration":1000,"alpha":0.5}] -target=fig-center;



注释：
•	Ghost Mode
•	半透明漂浮
──────────────────────────────────────────────────
95. 立绘跌倒/被推倒

setTempAnimation:[{"duration":0,"rotation":0,"position":{"y":0}},{"duration":300,"rotation":-1.5,"position":{"y":300, "x": -200}}] -target=fig-center;



注释：
•	Figure Fall
•	旋转并向侧面倒下
──────────────────────────────────────────────────
96. 立绘登场（滑入）

setTempAnimation:[{"duration":0,"alpha":0,"position":{"x":-100}},{"duration":600,"alpha":1,"position":{"x":0}}] -target=fig-center;



注释：
•	Fade In slide
•	从侧面滑入并显现
──────────────────────────────────────────────────
97. 立绘暗淡

setTempAnimation:[{"duration":0,"brightness":1},{"duration":300,"brightness":0.6}] -target=fig-center;



注释：
•	Dim
•	角色变暗（用于非当前发言角色）
──────────────────────────────────────────────────
98. 立绘点亮

setTempAnimation:[{"duration":0,"brightness":0.6},{"duration":300,"brightness":1}] -target=fig-center;



注释：
•	Light Up
•	角色变亮（用于当前发言角色）
──────────────────────────────────────────────────
99. 立绘左右张望

setTempAnimation:[{"duration":0,"position":{"x":0}},{"duration":400,"position":{"x":-30}},{"duration":800,"position":{"x":30}},{"duration":400,"position":{"x":0}}] -target=fig-center;



注释：
•	Look Around
•	立绘左右移动
──────────────────────────────────────────────────
100. 打雷闪电

setTempAnimation:[{"duration":0,"brightness":1},{"duration":50,"brightness":3},{"duration":50,"brightness":1},{"duration":100,"brightness":2},{"duration":800,"brightness":1}] -target=bg-main;



注释：
•	Lightning / Thunder
•	瞬间白屏
•	随机的快速闪光
──────────────────────────────────────────────────
101. 日出/天亮

setTempAnimation:[{"duration":0,"brightness":0.3,"colorBlue":200,"colorRed":100},{"duration":3000,"brightness":1,"colorBlue":255,"colorRed":255}] -target=bg-main;



注释：
•	Sunrise
•	亮度从暗变亮，色调从蓝变正常
•	从暗蓝渐变到正常亮度
──────────────────────────────────────────────────
102. 日落/黄昏

setTempAnimation:[{"duration":0,"brightness":1,"colorBlue":255},{"duration":3000,"brightness":0.8,"colorBlue":150,"colorGreen":200}] -target=bg-main;



注释：
•	Sunset
•	变暗且变橘黄
──────────────────────────────────────────────────
103. 夜晚降临

setTempAnimation:[{"duration":0,"brightness":1,"colorRed":255},{"duration":3000,"brightness":0.4,"colorRed":100,"colorGreen":100,"colorBlue":255}] -target=bg-main;



注释：
•	Nightfall
•	变暗且偏蓝
──────────────────────────────────────────────────
104. 故障信号

setTempAnimation:[{"duration":0,"noise":0},{"duration":100,"noise":1},{"duration":100,"noise":0.2},{"duration":100,"noise":0.8},{"duration":100,"noise":0}] -target=bg-main;



注释：
•	Signal Interference
•	模拟老电视信号不稳定
──────────────────────────────────────────────────
105. 逐渐石化

setTempAnimation:[{"duration":0,"saturation":1},{"duration":2000,"saturation":0}] -target=bg-main;



注释：
•	Petrification
•	饱和度降低为0
──────────────────────────────────────────────────
106. 神秘氛围

setTempAnimation:[{"duration":0,"contrast":1,"brightness":1},{"duration":2000,"contrast":1.5,"brightness":0.8}] -target=bg-main;



注释：
•	Mystery
•	增加对比度并轻微变暗
──────────────────────────────────────────────────
107. 梦幻柔光动画

setTempAnimation:[{"duration":0,"bloom":0},{"duration":1500,"bloom":1.5},{"duration":1500,"bloom":0}] -target=bg-main;



注释：
•	Bloom Pulse
•	缓慢的柔光闪烁
•	星光闪烁
──────────────────────────────────────────────────
108. 紧张对峙

setTempAnimation:[{"duration":0,"scale":{"x":1,"y":1},"vignettingAlpha":0},{"duration":3000,"scale":{"x":1.1,"y":1.1},"vignettingAlpha":0.7}] -target=bg-main;



注释：
•	Standoff
•	拉近镜头并变暗（只有中间亮）
──────────────────────────────────────────────────
109. 结束/谢幕

setTempAnimation:[{"duration":0,"brightness":1,"alpha":1},{"duration":2000,"brightness":5,"alpha":0}] -target=bg-main -next;



注释：
•	Fade to White
•	缓慢白屏
──────────────────────────────────────────────────
110. 拉镜聚焦

setTempAnimation:[{"duration": 0, "scale": { "x": 1.2, "y": 1.2 }, "blur": 20, "brightness": 2.0}, {"duration": 1500, "scale": { "x": 1.0, "y": 1.0 }, "blur": 0, "brightness": 1.0}] -target=bg-main -next;



注释：
•	电影级拉镜聚焦效果
•	画面瞬间放大、变亮并模糊（模拟摄像机对焦），然后缓慢恢复正常
──────────────────────────────────────────────────
111. 苏醒/睁眼（主观视角）

setTempAnimation:[{"duration": 0, "blur": 20, "brightness": 0},{"duration": 1500, "blur": 15, "brightness": 0.6},{"duration": 200, "blur": 20, "brightness": 0},{"duration": 1500, "blur": 5, "brightness": 0.8},{"duration": 1300, "blur": 0, "brightness": 1}] -target=bg-main -next;



注释：
•	Waking Up / Blinking
•	模拟主角刚醒来，视线模糊，眼睛眨动（变黑再变亮），最后对焦清晰的过程
•	适用场景：开场、昏迷后醒来、切换到第一人称视角
•	持续时间：约4.5秒
──────────────────────────────────────────────────
112. 严重眩晕/醉酒

setTempAnimation:[{"duration": 0, "rotation": 0, "scale": {"x": 1, "y": 1}, "blur": 0},{"duration": 2000, "rotation": 0.05, "scale": {"x": 1.1, "y": 1.1}, "blur": 4},{"duration": 2000, "rotation": -0.05, "scale": {"x": 1.1, "y": 1.1}, "blur": 6},{"duration": 2000, "rotation": 0, "scale": {"x": 1, "y": 1}, "blur": 0}] -target=bg-main -next;



注释：
•	Dizzy / Drunk
•	画面缓慢地左右摇摆旋转，同时伴随着焦距无法对准（Blur）和轻微变大
•	模拟站立不稳的感觉
•	适用场景：喝醉、中毒、生病、精神受到打击
•	持续时间：约6秒
──────────────────────────────────────────────────
113. 闪回/记忆重叠

setTempAnimation:[{"duration": 0, "rgbFilm": false, "noise": 0, "brightness": 1},{"duration": 200, "rgbFilm": true, "red": [2, 0], "green": [-2, 0], "blue": [0, 2], "noise": 0.5, "brightness": 1.5},{"duration": 500, "rgbFilm": false, "noise": 0, "brightness": 1}] -target=bg-main -next;



注释：
•	Flashback / Glitch
•	画面瞬间发生色偏（RGB分离）和噪点，亮度爆发，然后迅速恢复
•	这是一种比较柔和的故障切换
•	适用场景：突然想起某事、世界线变动、电子信号接入
──────────────────────────────────────────────────
114. 冲击波

setTempAnimation:[{"duration":0,"shockwaveFilter":0},{"duration":1000,"shockwaveFilter":1,"amplitude":30,"wavelength":160}] -target=bg-main -next;



注释：
•	Shockwave
•	画面中心扩散出波纹
──────────────────────────────────────────────────
115. 寒冷

setTempAnimation:[{"duration":0,"contrast":1,"colorRed":255},{"duration":2000,"contrast":1.2,"colorRed":180,"colorGreen":220}] -target=bg-main;



注释：
•	Freeze
•	色调变冷蓝，对比度增加
──────────────────────────────────────────────────
116. 老电视开机

setTempAnimation:[{"duration":0,"scale":{"y":0},"brightness":5},{"duration":300,"scale":{"y":1},"brightness":1}] -target=bg-main -next;



注释：
•	TV On
•	从一条横线展开成画面（利用Scale Y）
•	从一条亮线展开成画面
──────────────────────────────────────────────────
117. 老电视关机

setTempAnimation:[{"duration":0,"scale":{"y":1}},{"duration":300,"scale":{"y":0.01},"position":{"y":360}},{"duration":100,"scale":{"x":0},"alpha":0}] -target=bg-main -next;



注释：
•	TV Off
•	画面压扁成一条线然后消失
•	电视关机转场
──────────────────────────────────────────────────
118. 对焦切换

setTempAnimation:[{"duration":0,"blur":0},{"duration":800,"blur":15},{"duration":1200,"blur":0}] -target=bg-main -next;



注释：
•	清晰→模糊→清晰
•	场景切换过渡
──────────────────────────────────────────────────
119. 震动推近

setTempAnimation:[{"duration":0,"scale":{"x":1.0,"y":1.0},"position":{"x":0,"y":0}},{"duration":2000,"scale":{"x":1.1,"y":1.1},"position":{"x":3,"y":3}},{"duration":50,"position":{"x":-3,"y":-3}},{"duration":50,"position":{"x":3,"y":3}},{"duration":50,"position":{"x":0,"y":0}}] -target=bg-main;



注释：
•	紧张对峙
•	推近+震动组合
──────────────────────────────────────────────────
120. 剧烈地震

setTempAnimation:[{"duration":0,"position":{"x":0,"y":0}},{"duration":50,"position":{"x":20,"y":-20}},{"duration":50,"position":{"x":-20,"y":20}},{"duration":50,"position":{"x":15,"y":15}},{"duration":50,"position":{"x":-15,"y":-15}},{"duration":50,"position":{"x":0,"y":0}}] -target=bg-main -next;



注释：
•	Earthquake（剧烈版）
•	高频大幅度震动
──────────────────────────────────────────────────
121. 车辆颠簸

setTempAnimation:[{"duration":0,"position":{"y":0}},{"duration":200,"position":{"y":3},"scale":{"x":1.01,"y":1.01}},{"duration":200,"position":{"y":-3}},{"duration":200,"position":{"y":0}}] -target=bg-main;



注释：
•	Vehicle
•	持续轻微的上下浮动
──────────────────────────────────────────────────
122. 回忆杀·纯白淡入

setTempAnimation:[{"duration":0,"brightness":5,"blur":10},{"duration":3000,"brightness":1,"blur":0}] -target=bg-main -next;



注释：
•	从全白屏幕高亮模糊，缓慢过渡到清晰画面
──────────────────────────────────────────────────
123. 甜蜜眩晕·呼吸感

setTempAnimation:[{"duration":0,"scale":{"x":1,"y":1},"rotation":0},{"duration":2500,"scale":{"x":1.02,"y":1.02},"rotation":0.015},{"duration":2500,"scale":{"x":1,"y":1},"rotation":-0.015}] -target=bg-main;



注释：
•	画面带有节奏的微弱缩放和左右摇摆
•	像醉氧一样
──────────────────────────────────────────────────
124. 时间定格·一见钟情

setTempAnimation:[{"duration":0,"saturation":1,"contrast":1},{"duration":100,"saturation":0,"contrast":1.5},{"duration":3000,"saturation":1,"contrast":1}] -target=bg-main -next;



注释：
•	画面瞬间极高对比度+去色（仿佛时间停止）
•	然后缓慢恢复
──────────────────────────────────────────────────
125. 小鹿乱撞·快速心跳

setTempAnimation:[{"duration":0,"scale":{"x":1,"y":1}},{"duration":80,"scale":{"x":1.03,"y":1.03},"colorGreen":200},{"duration":80,"scale":{"x":1,"y":1},"colorGreen":255},{"duration":80,"scale":{"x":1.05,"y":1.05},"colorGreen":180},{"duration":200,"scale":{"x":1,"y":1},"colorGreen":255}] -target=bg-main -next;



注释：
•	连续三次快速的震动和红光闪烁
──────────────────────────────────────────────────
126. 七彩棱镜·炫光

setTempAnimation:[{"duration":0,"rgbFilm":true},{"duration":2000,"rgbFilm":true,"blur":2,"brightness":1.2},{"duration":2000,"rgbFilm":false,"blur":0,"brightness":1}] -target=bg-main;



注释：
•	强烈的RGB分离动画
•	像光线穿过钻石，五彩斑斓
──────────────────────────────────────────────────
127. 灵魂出窍·升天

setTempAnimation:[{"duration":0,"alpha":1,"position":{"y":0}},{"duration":4000,"alpha":0,"position":{"y":-100}}] -target=bg-main -next;



注释：
•	背景半透明并缓慢向上飘动
──────────────────────────────────────────────────
128. 像素重构

setTempAnimation:[{"duration":0,"pixelSize":20},{"duration":1500,"pixelSize":1}] -target=bg-main -next;



注释：
•	画面从马赛克逐渐变清晰
•	模拟数据重组或魔法解除
──────────────────────────────────────────────────
129. 压迫感·缓慢逼近

setTempAnimation:[{"duration":0,"scale":{"x":1,"y":1},"brightness":1},{"duration":5000,"scale":{"x":1.3,"y":1.3},"brightness":0.6,"colorRed":255,"colorGreen":150,"colorBlue":150}] -target=bg-main;



注释：
•	镜头缓慢放大，同时画面变暗变红
──────────────────────────────────────────────────
130. 心碎·冲击波

setTempAnimation:[{"duration":0,"shockwaveFilter":0},{"duration":1500,"shockwaveFilter":0.5},{"duration":100,"shockwaveFilter":-1}] -target=bg-main -next;



注释：
•	通过Shockwave模拟心碎的瞬间震感
──────────────────────────────────────────────────
131. 坏掉的电视

setTempAnimation:[{"duration":0,"glitchFilm":false},{"duration":100,"glitchFilm":true},{"duration":100,"glitchFilm":false},{"duration":100,"glitchFilm":true}] -target=bg-main;



注释：
•	信号干扰（Glitch + Noise）
──────────────────────────────────────────────────
132. 不安的搏动

setTempAnimation:[{"duration":0,"colorRed":255},{"duration":1000,"colorRed":150,"colorGreen":200},{"duration":1000,"colorRed":255}] -target=bg-main;



注释：
•	画面整体颜色在正常和冷色之间缓慢脉冲
──────────────────────────────────────────────────
133. 破碎预警

setTempAnimation:[{"duration":0,"position":{"x":0},"glitchFilm":false},{"duration":50,"position":{"x":5},"glitchFilm":true},{"duration":50,"position":{"x":-5}},{"duration":50,"position":{"x":0},"glitchFilm":false}] -target=bg-main;



注释：
•	高频的微小震动 + 故障
──────────────────────────────────────────────────
134. 立绘·丝滑登场

setTempAnimation:[{"duration":0,"alpha":0,"position":{"y":100}},{"duration":600,"alpha":1,"position":{"y":0}}] -target=fig-center -next;



注释：
•	从下方滑入 + 透明度渐变
──────────────────────────────────────────────────
135. 立绘·生气/发抖

setTempAnimation:[{"duration":0,"position":{"x":0}},{"duration":30,"position":{"x":3}},{"duration":30,"position":{"x":-3}},{"duration":30,"position":{"x":3}},{"duration":30,"position":{"x":0}}] -target=fig-center;



注释：
•	极高频的小幅度震动
──────────────────────────────────────────────────
136. 吃醋·世界扭曲

setTempAnimation:[{"duration":0,"rotation":0,"scale":{"x":1,"y":1}},{"duration":3000,"rotation":0.2,"scale":{"x":1.5,"y":1.5}}] -target=bg-main;



注释：
•	画面进行扭曲旋转（Rotation）
•	用旋转+缩放代替Twist滤镜
──────────────────────────────────────────────────
137. 聚光灯开启

setTempAnimation:[{"duration":0,"radiusAlphaFilter":0},{"duration":1500,"radiusAlphaFilter":1.5}] -target=bg-main -next;



注释：
•	圆形遮罩从0扩大到全屏
──────────────────────────────────────────────────
138. 聚光灯关闭

setTempAnimation:[{"duration":0,"radiusAlphaFilter":1.5},{"duration":1500,"radiusAlphaFilter":0}] -target=bg-main -next;



注释：
•	圆形遮罩收缩直至全黑
──────────────────────────────────────────────────
139. 清晨苏醒

setTempAnimation:[{"duration":0,"blur":20,"brightness":2},{"duration":3000,"blur":0,"brightness":1}] -target=bg-main -next;



注释：
•	高亮度模糊 -> 清晰正常
──────────────────────────────────────────────────
三、恋爱场景专用特效
140. 瞬间心动·粉色冲击

setTempAnimation:[{"duration":0,"scale":{"x":1,"y":1},"bloom":0},{"duration":150,"scale":{"x":1.05,"y":1.05},"bloom":2,"colorRed":255,"colorGreen":220,"colorBlue":230},{"duration":1000,"scale":{"x":1,"y":1},"bloom":0.5,"colorRed":255,"colorGreen":255,"colorBlue":255}] -target=bg-main -next;



注释：
•	画面瞬间泛起粉色光晕并轻微放大
•	模拟那一刻心脏漏跳了一拍
──────────────────────────────────────────────────
141. 满眼都是你·聚光

setTempAnimation:[{"duration":0,"radiusAlphaFilter":0},{"duration":2000,"radiusAlphaFilter":0.6}] -target=bg-main;



注释：
•	利用圆形遮罩，让周围变暗，只聚焦中心
•	通常配合立绘使用
──────────────────────────────────────────────────
142. 心动悸动·温柔红光

setTempAnimation:[{"duration":0,"vignetting":true,"vignettingAlpha":0,"colorRed":255,"colorGreen":240,"colorBlue":245},{"duration":300,"vignettingAlpha":0.4,"colorRed":255,"colorGreen":230,"colorBlue":235},{"duration":900,"vignettingAlpha":0,"colorRed":255,"colorGreen":245,"colorBlue":250}] -target=bg-main -next;



注释：
•	温柔红光收缩+轻微模糊
•	模拟心动瞬间
──────────────────────────────────────────────────
143. 柔光环绕

setTempAnimation:[{"duration":0,"bloom":0,"brightness":1},{"duration":2000,"bloom":1.2,"bloomBlur":3,"brightness":1.05},{"duration":2000,"bloom":0,"brightness":1}] -target=bg-main;



注释：
•	泛光渐变+轻微提亮
•	营造温柔氛围
──────────────────────────────────────────────────
144. 甜度升温

setTempAnimation:[{"duration":0,"colorRed":255,"colorGreen":230,"colorBlue":220,"scale":{"x":1,"y":1}},{"duration":3000,"colorRed":255,"colorGreen":240,"colorBlue":225,"scale":{"x":1.02,"y":1.02}}] -target=bg-main;



注释：
•	色调变暖+轻微缩放
•	氛围逐渐甜蜜
──────────────────────────────────────────────────
145. 靠近对视

setTempAnimation:[{"duration":0,"scale":{"x":1,"y":1},"position":{"x":0,"y":0}},{"duration":2500,"scale":{"x":1.2,"y":1.2},"position":{"x":0,"y":-10}}] -target=fig-center;



注释：
•	立绘缓慢凑近镜头
•	增加亲密感
──────────────────────────────────────────────────
146. 害羞低头

setTempAnimation:[{"duration":0,"position":{"y":0},"alpha":1},{"duration":800,"position":{"y":15},"alpha":0.95},{"duration":800,"position":{"y":0},"alpha":1}] -target=fig-center;



注释：
•	立绘轻微下移+透明度微调
•	模拟害羞
──────────────────────────────────────────────────
147. 脸颊微红

setTempAnimation:[{"duration":0,"colorRed":255,"colorGreen":255,"colorBlue":255,"bloom":0},{"duration":1500,"colorRed":255,"colorGreen":235,"colorBlue":235,"bloom":0.8},{"duration":1500,"colorRed":255,"colorGreen":255,"colorBlue":255,"bloom":0}] -target=fig-center;



注释：
•	立绘局部泛红+柔光
•	模拟害羞升温
──────────────────────────────────────────────────
148. 落日余晖

setTempAnimation:[{"duration":0,"colorRed":255,"colorGreen":200,"colorBlue":150,"vignettingAlpha":0},{"duration":3000,"colorRed":255,"colorGreen":210,"colorBlue":160,"vignettingAlpha":0.3},{"duration":3000,"colorRed":255,"colorGreen":220,"colorBlue":180,"vignettingAlpha":0}] -target=bg-main;



注释：
•	暖橙色调渐变+暗角
•	适配黄昏约会
──────────────────────────────────────────────────
149. 星光闪烁

setTempAnimation:[{"duration":0,"bloom":0.5,"brightness":1},{"duration":1000,"bloom":0.8,"brightness":1.1},{"duration":1000,"bloom":0.5,"brightness":1},{"duration":1000,"bloom":0.8,"brightness":1.1},{"duration":1000,"bloom":0.5,"brightness":1}] -target=bg-main;



注释：
•	轻微亮度波动+泛光
•	模拟星空/灯光
──────────────────────────────────────────────────
150. 花瓣飘落感

setTempAnimation:[{"duration":0,"position":{"x":0,"y":0},"blur":0},{"duration":5000,"position":{"x":20,"y":-10},"blur":0.5},{"duration":5000,"position":{"x":-20,"y":10},"blur":0.5}] -target=bg-main;



注释：
•	背景轻微位移+模糊
•	模拟轻柔动态
──────────────────────────────────────────────────
151. 雨夜浪漫

setTempAnimation:[{"duration":0,"colorRed":200,"colorGreen":220,"colorBlue":255,"blur":1},{"duration":4000,"colorRed":230,"colorGreen":240,"colorBlue":255,"blur":0.5}] -target=bg-main;



注释：
•	轻微模糊+冷调变暖
•	适配雨中约会
──────────────────────────────────────────────────
152. 甜蜜回忆

setTempAnimation:[{"duration":0,"sepia":0,"noise":0,"brightness":1},{"duration":1500,"sepia":0.3,"noise":0.1,"brightness":0.9},{"duration":3000,"sepia":0.3,"noise":0.1,"brightness":0.9},{"duration":1500,"sepia":0,"noise":0,"brightness":1}] -target=bg-main -next;



注释：
•	暖黄调+轻微噪点
•	模拟老照片闪回
──────────────────────────────────────────────────
153. 初见闪回

setTempAnimation:[{"duration":0,"bloom":2,"blur":10,"brightness":1.5},{"duration":1000,"bloom":0,"blur":0,"brightness":1}] -target=bg-main -next;



注释：
•	柔光爆发+快速对焦
•	模拟初见心动
──────────────────────────────────────────────────
154. 细节回忆

setTempAnimation:[{"duration":0,"scale":{"x":1,"y":1},"bloom":0},{"duration":3000,"scale":{"x":1.1,"y":1.1},"bloom":0.7},{"duration":2000,"scale":{"x":1.1,"y":1.1},"bloom":0.7},{"duration":3000,"scale":{"x":1,"y":1},"bloom":0}] -target=bg-main;



注释：
•	镜头缓慢推近+柔光
•	聚焦美好细节
──────────────────────────────────────────────────
155. 告白瞬间

setTempAnimation:[{"duration":0,"bloom":0,"brightness":1,"colorRed":255,"colorGreen":255,"colorBlue":255},{"duration":1500,"bloom":2,"brightness":1.2,"colorRed":255,"colorGreen":245,"colorBlue":250},{"duration":2000,"bloom":0,"brightness":1}] -target=bg-main -next;



注释：
•	强烈泛光+缓慢提亮
•	聚焦告白时刻
──────────────────────────────────────────────────
156. 点头回应

setTempAnimation:[{"duration":0,"position":{"y":0}},{"duration":300,"position":{"y":-10}},{"duration":300,"position":{"y":0}},{"duration":300,"position":{"y":-10}},{"duration":300,"position":{"y":0}}] -target=fig-center;



注释：
•	立绘轻微上下位移
•	模拟同意告白
──────────────────────────────────────────────────
157. 拥抱预热（左立绘）

setTempAnimation:[{"duration":0,"position":{"x":-50,"y":0}},{"duration":3000,"position":{"x":0,"y":0}}] -target=fig-left;



注释：
•	双立绘缓慢靠近
•	模拟拥抱前的默契
──────────────────────────────────────────────────
158. 拥抱预热（右立绘）

setTempAnimation:[{"duration":0,"position":{"x":50,"y":0}},{"duration":3000,"position":{"x":0,"y":0}}] -target=fig-right;



注释：
•	配合左立绘使用
──────────────────────────────────────────────────
159. 心动确认

setTempAnimation:[{"duration":0,"bloom":0,"rotation":0},{"duration":1000,"bloom":1,"rotation":0.02},{"duration":1000,"bloom":1,"rotation":-0.02},{"duration":1000,"bloom":0,"rotation":0}] -target=fig-center;



注释：
•	立绘泛光+轻微旋转
•	模拟心动共鸣
──────────────────────────────────────────────────
160. 耳鬓厮磨

setTempAnimation:[{"duration":0,"scale":{"x":1,"y":1},"position":{"x":0,"y":0}},{"duration":1800,"scale":{"x":1.1,"y":1.1},"position":{"x":-10,"y":5}}] -target=fig-center;



注释：
•	立绘轻微侧移+缩放
•	模拟近距离耳语
──────────────────────────────────────────────────
161. 温柔注视

setTempAnimation:[{"duration":0,"brightness":1,"bloom":0},{"duration":1500,"brightness":1.1,"bloom":1,"bloomThreshold":0.2},{"duration":1500,"brightness":1,"bloom":0}] -target=fig-center;



注释：
•	立绘轻微提亮+边缘发光
•	突出眼神
──────────────────────────────────────────────────
162. 樱花氛围

setTempAnimation:[{"duration":0,"colorRed":255,"colorGreen":245,"colorBlue":250,"blur":0},{"duration":2500,"colorRed":255,"colorGreen":250,"colorBlue":255,"blur":0.3},{"duration":2500,"colorRed":255,"colorGreen":245,"colorBlue":250,"blur":0}] -target=bg-main;



注释：
•	背景粉白渐变+轻微模糊
•	适配樱花约会
──────────────────────────────────────────────────
163. 牵手升温

setTempAnimation:[{"duration":0,"colorRed":255,"colorGreen":230,"colorBlue":220,"shakePower":0},{"duration":500,"colorRed":255,"colorGreen":220,"colorBlue":210,"shakePower":2},{"duration":500,"colorRed":255,"colorGreen":230,"colorBlue":220,"shakePower":0}] -target=bg-main;



注释：
•	整体色调变暖+轻微震动
•	模拟牵手心动
──────────────────────────────────────────────────
164. 月下告白

setTempAnimation:[{"duration":0,"colorRed":200,"colorGreen":220,"colorBlue":255,"bloom":0},{"duration":3000,"colorRed":220,"colorGreen":230,"colorBlue":255,"bloom":1.5},{"duration":3000,"colorRed":230,"colorGreen":240,"colorBlue":255,"bloom":0}] -target=bg-main;



注释：
•	冷调渐变+泛光
•	适配夜晚告白
──────────────────────────────────────────────────
165. 害羞躲闪

setTempAnimation:[{"duration":0,"position":{"x":0,"y":0}},{"duration":300,"position":{"x":15,"y":0}},{"duration":300,"position":{"x":-10,"y":0}},{"duration":300,"position":{"x":0,"y":0}}] -target=fig-center;



注释：
•	立绘快速侧移+恢复
•	模拟眼神躲闪
──────────────────────────────────────────────────
166. 氛围升温

setTempAnimation:[{"duration":0,"vignettingAlpha":0,"colorRed":255,"colorGreen":240,"colorBlue":230},{"duration":4000,"vignettingAlpha":0.5,"colorRed":255,"colorGreen":230,"colorBlue":220}] -target=bg-main;



注释：
•	暗角渐变+暖调
•	适配独处升温
──────────────────────────────────────────────────
167. 惊喜瞬间

setTempAnimation:[{"duration":0,"brightness":1,"bloom":0},{"duration":200,"brightness":1.5,"bloom":1.8},{"duration":800,"brightness":1,"bloom":0}] -target=bg-main -next;



注释：
•	亮度突发+泛光
•	模拟收到惊喜
──────────────────────────────────────────────────
168. 并肩同行（左立绘）

setTempAnimation:[{"duration":0,"position":{"x":0,"y":0}},{"duration":5000,"position":{"x":30,"y":0}}] -target=fig-left;



注释：
•	双立绘同步轻微位移
•	模拟一起散步
──────────────────────────────────────────────────
169. 并肩同行（右立绘）

setTempAnimation:[{"duration":0,"position":{"x":0,"y":0}},{"duration":5000,"position":{"x":30,"y":0}}] -target=fig-right;



注释：
•	配合左立绘使用
──────────────────────────────────────────────────
170. 温柔告别

setTempAnimation:[{"duration":0,"alpha":1,"bloom":0},{"duration":3000,"alpha":0.8,"bloom":0.7},{"duration":2000,"alpha":0.5,"bloom":0.5}] -target=fig-center;



注释：
•	立绘缓慢淡化+背景柔光
•	适配分别场景
──────────────────────────────────────────────────
171. 告白成功

setTempAnimation:[{"duration":0,"bloom":0,"brightness":1,"colorRed":255,"colorGreen":240,"colorBlue":230},{"duration":1500,"bloom":2,"brightness":1.3,"colorRed":255,"colorGreen":220,"colorBlue":210},{"duration":1500,"bloom":0,"brightness":1}] -target=bg-main -next;



注释：
•	全画面泛光+暖调爆发
•	适配确认关系
──────────────────────────────────────────────────
四、复合特效类（滤镜+动画结合）
172. 复古回忆（背景滤镜）

setTransform:{"brightness":0.7,"contrast":1.2,"saturation":0.5,"sepia":0.8,"bloom":0.4} -target=bg-main -duration=0 -next;



注释：
•	复古回忆风格滤镜
──────────────────────────────────────────────────
173. 复古回忆（背景动画）

setTempAnimation:[{"duration":0,"blur":0},{"duration":5000,"blur":3}] -target=bg-main;



注释：
•	缓慢模糊动画
•	配合复古回忆滤镜使用
──────────────────────────────────────────────────
174. 复古回忆（人物滤镜）

setTransform:{"brightness":0.6,"contrast":1.3,"saturation":0.6,"sepia":0.7,"bevel":0.8} -target=fig-center -duration=0;



注释：
•	复古回忆风格人物滤镜
──────────────────────────────────────────────────
175. 复古回忆（人物动画）

setTempAnimation:[{"duration":0,"scale":{"x":1,"y":1}},{"duration":4000,"scale":{"x":1.02,"y":1.02}}] -target=fig-center;



注释：
•	轻微缩放动画
•	配合复古回忆滤镜使用
──────────────────────────────────────────────────
176. 赛博波动（背景滤镜）

setTransform:{"brightness":0.9,"contrast":1.5,"saturation":1.8,"colorRed":180,"colorGreen":200,"colorBlue":255,"glitchFilm":true} -target=bg-main -duration=0 -next;



注释：
•	赛博波动风格背景滤镜
──────────────────────────────────────────────────
177. 赛博波动（背景动画）

setTempAnimation:[{"duration":0,"colorRed":180},{"duration":1000,"colorRed":200},{"duration":1000,"colorRed":180}] -target=bg-main;



注释：
•	色彩漂移动画
•	配合赛博波动滤镜使用
──────────────────────────────────────────────────
178. 赛博波动（人物滤镜）

setTransform:{"brightness":0.8,"contrast":1.4,"saturation":1.6,"colorRed":200,"colorGreen":220,"colorBlue":255} -target=fig-center -duration=0;



注释：
•	赛博波动风格人物滤镜
──────────────────────────────────────────────────
179. 赛博波动（人物动画）

setTempAnimation:[{"duration":0,"brightness":0.8},{"duration":500,"brightness":1.2},{"duration":500,"brightness":0.8}] -target=fig-center;



注释：
•	闪烁动画
•	配合赛博波动滤镜使用
──────────────────────────────────────────────────
180. 渐变显示（背景）

setTempAnimation:[{"duration":0,"alpha":0,"brightness":0.5},{"duration":2000,"alpha":1,"brightness":1}] -target=bg-main -next;



注释：
•	Fade In
•	从透明到显现
──────────────────────────────────────────────────
181. 渐变显示（人物）

setTempAnimation:[{"duration":0,"alpha":0,"position":{"y":50}},{"duration":2500,"alpha":1,"position":{"y":0}}] -target=fig-center;



注释：
•	Fade In slide
•	从下方滑入显现
──────────────────────────────────────────────────
182. 轻微旋转

setTempAnimation:[{"duration":0,"rotation":0},{"duration":6000,"rotation":0.05},{"duration":6000,"rotation":-0.05},{"duration":6000,"rotation":0}] -target=fig-center;



注释：
•	Slow Rotate
•	缓慢旋转，增加灵动性
──────────────────────────────────────────────────
183. 快速抖动

setTempAnimation:[{"duration":0,"position":{"x":0,"y":0}},{"duration":50,"position":{"x":15,"y":-10}},{"duration":50,"position":{"x":-20,"y":15}},{"duration":50,"position":{"x":10,"y":-5}},{"duration":50,"position":{"x":0,"y":0}}] -target=bg-main -next;



注释：
•	Shake Strong
•	紧张/冲击场景
──────────────────────────────────────────────────
184. 模糊渐变

setTempAnimation:[{"duration":0,"blur":0},{"duration":1000,"blur":15},{"duration":1000,"blur":0}] -target=bg-main -next;



注释：
•	Blur Transition
•	场景切换过渡
──────────────────────────────────────────────────
185. 色彩漂移（背景）

setTempAnimation:[{"duration":0,"colorRed":255,"colorGreen":255,"colorBlue":255},{"duration":1500,"colorRed":240,"colorGreen":255,"colorBlue":240},{"duration":1500,"colorRed":255,"colorGreen":240,"colorBlue":250},{"duration":1500,"colorRed":255,"colorGreen":255,"colorBlue":255}] -target=bg-main -next;



注释：
•	Color Drift
•	梦幻/混乱场景
──────────────────────────────────────────────────
186. 色彩漂移（人物）

setTempAnimation:[{"duration":0,"colorRed":255,"colorGreen":255,"colorBlue":255},{"duration":1500,"colorRed":245,"colorGreen":255,"colorBlue":245},{"duration":1500,"colorRed":255,"colorBlue":255},{"duration":1500,"colorRed":255,"colorGreen":255,"colorBlue":255}] -target=fig-center;



注释：
•	Color Drift人物版
──────────────────────────────────────────────────
187. 闪烁强调

setTempAnimation:[{"duration":0,"brightness":1},{"duration":100,"brightness":1.8},{"duration":100,"brightness":1},{"duration":100,"brightness":1.8},{"duration":100,"brightness":1}] -target=fig-center -next;



注释：
•	Flash Highlight
•	重点镜头/惊讶反应
──────────────────────────────────────────────────
188. 左右摇摆

setTempAnimation:[{"duration":0,"position":{"x":0}},{"duration":800,"position":{"x":-20}},{"duration":1600,"position":{"x":20}},{"duration":800,"position":{"x":0}}] -target=fig-center;



注释：
•	Swing Left-Right
•	活泼/犹豫场景
──────────────────────────────────────────────────
189. 聚焦效果

setTempAnimation:[{"duration":0,"scale":{"x":1,"y":1},"blur":5},{"duration":1500,"scale":{"x":1.2,"y":1.2},"blur":0}] -target=fig-center;



注释：
•	Focus In
•	特写镜头
──────────────────────────────────────────────────
190. 散焦退场

setTempAnimation:[{"duration":0,"alpha":1,"blur":0,"scale":{"x":1,"y":1}},{"duration":1500,"alpha":0,"blur":10,"scale":{"x":0.9,"y":0.9}}] -target=fig-center -next;



注释：
•	Defocus Exit
•	离场过渡
──────────────────────────────────────────────────
191. 地震震动（长版）

setTempAnimation:[{"duration":0,"position":{"y":0}},{"duration":100,"position":{"y":20}},{"duration":100,"position":{"y":-20}},{"duration":100,"position":{"y":15}},{"duration":100,"position":{"y":-15}},{"duration":100,"position":{"y":10}},{"duration":100,"position":{"y":-10}},{"duration":200,"position":{"y":0}}] -target=bg-main;



注释：
•	Earthquake Long
•	灾难/冲突场景
──────────────────────────────────────────────────
192. 高光闪烁（背景）

setTempAnimation:[{"duration":0,"bloom":0.5},{"duration":800,"bloom":1.5},{"duration":800,"bloom":0.5}] -target=bg-main -next;



注释：
•	Bloom Pulse
•	魔法/特效场景
──────────────────────────────────────────────────
193. 高光闪烁（人物）

setTempAnimation:[{"duration":0,"bloom":0.3},{"duration":800,"bloom":1.0},{"duration":800,"bloom":0.3}] -target=fig-center;



注释：
•	Bloom Pulse人物版
──────────────────────────────────────────────────
194. 慢动作特写（立绘）

setTempAnimation:[{"duration":0,"scale":{"x":1.0,"y":1.0},"brightness":1.0},{"duration":800,"scale":{"x":1.1,"y":1.1},"brightness":1.1,"blur":0.5},{"duration":2000,"scale":{"x":1.0,"y":1.0},"brightness":1.0,"blur":0}] -target=fig-center;



注释：
•	慢动作特写立绘部分
──────────────────────────────────────────────────
195. 慢动作特写（背景）

setTempAnimation:[{"duration":0,"brightness":1.0,"blur":0},{"duration":800,"brightness":0.8,"blur":2},{"duration":2000,"brightness":1.0,"blur":0}] -target=bg-main;



注释：
•	慢动作特写背景部分
──────────────────────────────────────────────────
196. 时间停止（灰度+暗角）

setTempAnimation:[{"duration":0,"saturation":1,"vignettingAlpha":0},{"duration":300,"saturation":0,"vignettingAlpha":0.5},{"duration":5000,"saturation":0,"vignettingAlpha":0.5}] -target=bg-main;



注释：
•	时间停止效果
•	灰度+暗角组合
──────────────────────────────────────────────────
197. 神秘氛围动画

setTempAnimation:[{"duration":0,"contrast":1,"brightness":1,"colorGreen":255},{"duration":2000,"contrast":1.5,"brightness":0.8,"colorGreen":150}] -target=bg-main;



注释：
•	紫色调+对比度
•	神秘场景
──────────────────────────────────────────────────
198. 水下波纹

setTempAnimation:[{"duration":0,"reflectionFilm":true,"colorRed":200,"colorGreen":220,"colorBlue":255,"blur":1},{"duration":1000,"reflectionFilm":true,"colorRed":200,"colorGreen":220,"colorBlue":255,"blur":1.5},{"duration":1000,"reflectionFilm":true,"colorRed":200,"colorGreen":220,"colorBlue":255,"blur":1}] -target=bg-main;



注释：
•	扭曲泛蓝
•	水下场景
──────────────────────────────────────────────────
199. 热浪扭曲

setTempAnimation:[{"duration":0,"reflectionFilm":true,"colorRed":255,"colorGreen":240,"colorBlue":200,"blur":0.5},{"duration":500,"reflectionFilm":true,"colorRed":255,"colorGreen":240,"colorBlue":200,"blur":1},{"duration":500,"reflectionFilm":true,"colorRed":255,"colorGreen":240,"colorBlue":200,"blur":0.5}] -target=bg-main;



注释：
•	沙漠效果
•	炎热场景
──────────────────────────────────────────────────
200. 雨滴效果

setTempAnimation:[{"duration":0,"blur":0,"position":{"x":0,"y":0}},{"duration":50,"blur":0.5,"position":{"x":2,"y":2}},{"duration":50,"blur":0.5,"position":{"x":-2,"y":-2}},{"duration":50,"blur":0.5,"position":{"x":2,"y":2}},{"duration":50,"blur":0,"position":{"x":0,"y":0}}] -target=bg-main;



注释：
•	背景模糊+震动
•	模拟雨滴
──────────────────────────────────────────────────
五、通用重置指令
201. 完全重置（背景）

setTransform:{"alpha":1,"scale":{"x":1,"y":1},"position":{"x":0,"y":0},"rotation":0,"blur":0,"brightness":1,"contrast":1,"saturation":1,"gamma":1,"colorRed":255,"colorGreen":255,"colorBlue":255,"oldFilm":false,"dotFilm":false,"reflectionFilm":false,"glitchFilm":false,"rgbFilm":false,"godrayFilm":false,"bloom":0,"shockwaveFilter":0,"radiusAlphaFilter":0,"bevel":0,"sepia":0,"noise":0,"vignetting":false,"vignettingAlpha":0,"shakePower":0,"pixelSize":1} -target=bg-main -duration=500;



注释：
•	万能还原药水
•	清除所有颜色、滤镜、形变
•	务必设置为通过快捷键或脚本末尾调用
──────────────────────────────────────────────────
202. 完全重置（立绘）

setTransform:{"alpha":1,"scale":{"x":1,"y":1},"position":{"x":0,"y":0},"rotation":0,"blur":0,"brightness":1,"contrast":1,"saturation":1,"gamma":1,"colorRed":255,"colorGreen":255,"colorBlue":255,"bloom":0,"bevel":0} -target=fig-center -duration=500;



注释：
•	立绘重置
•	根据需要改为fig-left/fig-right
──────────────────────────────────────────────────
1. 「失去高光·绝望」（setTransform版本）
来源： 没问题，完全理解.docx - 第三章

setTransform:{"saturation":0, "brightness":0.8, "contrast":1.3} -target=bg-main -duration=300;



注：整合版第68条有类似的setTempAnimation动画版本，但缺少这个setTransform静态滤镜版本
──────────────────────────────────────────────────
2. 「同步呼吸」（fig-left 版本）
来源： 几十种高级演出特效.docx - 恋爱场景第6条

setTempAnimation:[{"duration":0,"scale":{"x":1,"y":1}},{"duration":2000,"scale":{"x":1.03,"y":1.03}},{"duration":2000,"scale":{"x":1,"y":1}}] -target=fig-left;



──────────────────────────────────────────────────
3. 「同步呼吸」（fig-right 版本）
来源： 几十种高级演出特效.docx - 恋爱场景第6条

setTempAnimation:[{"duration":0,"scale":{"x":1,"y":1}},{"duration":2000,"scale":{"x":1.03,"y":1.03}},{"duration":2000,"scale":{"x":1,"y":1}}] -target=fig-right;



──────────────────────────────────────────────────
4. 「心动共鸣」
来源： 几十种高级演出特效.docx - 恋爱场景第29条

setTempAnimation:[{"duration":0,"scale":{"x":1,"y":1},"colorRed":255,"colorGreen":245,"colorBlue":250},{"duration":1000,"scale":{"x":1.02,"y":1.02,"colorRed":255,"colorGreen":235,"colorBlue":240}},{"duration":1000,"scale":{"x":1,"y":1,"colorRed":255,"colorGreen":245,"colorBlue":250}}] -target=bg-main;



使用说明
•	Target说明：
•	bg-main：作用于背景
•	fig-center/fig-left/fig-right：作用于立绘
•	Next说明：
•	结尾带-next表示动画结束后再显示下一句文字
•	去掉则动画与文字同步播放
•	Duration说明：
•	setTransform中的-duration=控制过渡时间（毫秒）
•	setTempAnimation中每个关键帧的duration控制该帧持续时间
•	组合使用：
•	滤镜（setTransform）可与动画（setTempAnimation）组合
•	先设置滤镜，再添加动画效果