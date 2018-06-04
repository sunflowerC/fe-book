# 开发构建工具 parcel

## 安装
```
npm i parcel-bundler -D
```

## 编辑 package.json
```
{
  "name": "demo",
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html --public-url ./"
  }
}
```