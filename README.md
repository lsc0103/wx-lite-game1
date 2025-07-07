# wx-lite-game1

本仓库提供示例小游戏 **《炸弹猫的复仇》** 的最小 TypeScript 骨架代码。

仅包含少量脚本和关卡数据，用于演示如何在 Cocos Creator 中组织游戏逻辑，
并不含完整的模型、UI 或场景。如果直接在 Cocos Creator 3.8.6 中运行，画面上不会出现实际模型，
只能在控制台看到日志输出。

## 快速开始

1. 安装依赖并编译脚本：
   ```bash
   npm install
   npm run build
   ```
   编译后的 JavaScript 会生成到 `dist/` 目录。

2. 在 Cocos Creator 3.8.6 中创建一个空项目，将 `dist/`（或 `src/`）里的脚本
   拷贝到新项目的 `assets` 目录。
3. 在场景中新建空节点，挂载入口脚本 `index.ts`，或根据需要挂载 `GameManager` 等脚本。
4. 点击预览运行，查看浏览器或控制台输出，以验证逻辑是否按预期执行。
   由于缺乏美术资源和完整流程，初次运行时不会看到模型或 UI。

## 进一步开发

- 参考 [`docs/RevengeOfBombCat_GDD.md`](docs/RevengeOfBombCat_GDD.md) 中的设计文档，
  添加场景、模型和界面资源，逐步完善玩法。
- 在 `src/` 目录中扩展新的实体、系统或关卡数据，以满足完整游戏需求。
