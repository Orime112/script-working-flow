# 工作流

## 参考文档
- [一套标准的前端代码工作流](https://mp.weixin.qq.com/s/Y4DDVbGNGrbaBrKICy1irA)
- [prettier options](https://prettier.io/docs/en/options.html)
- [cz-customizable](https://github.com/leoforfree/cz-customizable#steps)

## ESlint

```js
// 初始化ESLint
eslint --init
```

## Prettier

```js
npm install --save-dev --save-exact prettier

// 格式化所有文件，npx命令是使用当前项目下的prettier
npx prettier --write .

```

配置文件需要自己手动创建，支持`.prettierrc.JSON；.prettierrc.js；prettier.config.js`