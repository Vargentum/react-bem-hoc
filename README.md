# React Bem Hoc

[![Travis](https://img.shields.io/travis/Vargentum/react-bem-hoc.svg?style=flat-square)](https://travis-ci.org/Vargentum/react-bem-hoc)
[![npm](https://img.shields.io/npm/v/react-bem-hoc.svg?style=flat-square)](https://www.npmjs.com/package/react-bem-hoc)
[![license](https://img.shields.io/npm/l/react-bem-hoc.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

This HOC provide support of bem flawored modifiers, like `block block--foo`. 
Howto:
* wrap your component: `const BemifiedCmp = BemHOC(SomeCmp, 'baseClass')`
* provide a mod property: `<BemifiedCmp mod="foo,bar" />`. Output className should look like `baseClass baseClass--foo baseClass--bar`.
* PROFIT

[Example](https://Vargentum.github.io/react-bem-hoc)
