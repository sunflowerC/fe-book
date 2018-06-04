# 配置 parcel 中的 babel

## 安装
```
npm i babel-plugin-transform-runtime babel-preset-env babel-preset-stage-2 -D
```

## 配置
.babelrc
```
{
  "presets": [
    "env",
    "stage-2"
  ],
  "plugins": [
    "transform-runtime"
  ]
}
```
