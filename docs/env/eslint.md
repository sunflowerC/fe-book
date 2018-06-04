# 规范化验证

## 安装
```bash
npm i eslint eslint-config-airbnb-base eslint-plugin-import babel-eslint -D
```

## 配置
在根目录下增加 .eslintrc
```
{
  "root": true,
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "extends": "airbnb-base",
  "rules": {
    "import/no-unresolved": 0,
    "no-debugger": 0,
    "import/prefer-default-export": 0
  },
  "env": {
    "browser": true
  }
}
```

## 配置 vscode，在代码编辑阶段验证代码
1. VS Code 安装 ESLint 插件
