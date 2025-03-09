这是一个基于 [Mistral AI OCR](https://mistral.ai/) 的文字识别插件，用于 [Pot-App](https://github.com/pot-app/pot-desktop) 截图翻译软件。本插件利用 Mistral 的强大 OCR 技术，可以从图像中准确提取和识别多种语言的文本。

## 功能特点

- 支持多种语言的文字识别
- 基于Mistral AI的先进OCR技术
- 简单易用的配置界面
- 与Pot-App无缝集成

## 先决条件

使用此插件前，您需要：

1. 安装 [Pot-App](https://github.com/pot-app/pot-desktop) 截图翻译软件
2. 获取 [Mistral AI](https://mistral.ai/) 的 API 密钥

## 安装方法


### 手动安装

1. 从 [Releases](https://github.com/yourusername/pot-app-recognize-plugin-mistral/releases) 页面下载最新的插件文件 (`plugin.com.pot-app.mistral.potext`)
2. 在 Pot-App 中打开设置
3. 点击"插件管理"
4. 点击"加载本地插件"并选择下载的插件文件

## 配置说明

安装插件后，需要进行以下配置：

1. 在 Pot-App 设置中找到 Mistral OCR 插件
2. 输入您的 Mistral API 密钥
3. 保存设置

## 获取 Mistral API 密钥

1. 访问 [Mistral AI 官网](https://mistral.ai/)
2. 注册并创建一个账户
3. 在开发者设置中创建 API 密钥
4. 复制生成的密钥并配置到插件中

**注意：** 请妥善保管您的 API 密钥，不要将其分享给他人或提交到公共代码仓库中。

## 使用方法

1. 在 Pot-App 中截取包含文字的图像
2. 在识别选项中选择 "Mistral OCR"
3. 等待识别结果显示
