module.exports = {
  env: {
    // ? 环境
    browser: true,
    commonjs: true,
    es2021: true,
  },
  // ? 拓展 'plugin:@typescript-eslint/recommended'
  // "extends": "eslint:recommended",
  extends: ["eslint:recommended"],
  // parser: '@typescript-eslint/parser', // ?   解析器，本解析器支持Ts
  parserOptions: {
    ecmaVersion: 12, // 解析器版本
    // sourceType: 'module', // ? 代码支持es6，使用module
  },
  //   plugins: [
  //     // 插件
  //     "@typescript-eslint",
  //   ],
  rules: {},
}

/**
 * ? rules 规则配置
 * * off或0，关闭规则
 * * warn或1，开启规则，并对不符合规则的书写提示警告
 * * error或2，开启规则，并会出错阻止代码运行
 */

/**
 * ? 规则配置优先级
 * * 行内配置
 * * 命令行选项
 * * 项目级配置
 * * IDE环境配置
 */