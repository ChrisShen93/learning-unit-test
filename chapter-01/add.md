### 测试脚本的写法

describe块称为"测试套件"（test suite），表示一组相关的测试。
它是一个函数，第一个参数是测试套件的名称（"加法函数的测试"），第二个参数是一个实际执行的函数。


it块称为"测试用例"（test case），表示一个单独的测试，是测试的最小单位。
它也是一个函数，第一个参数是测试用例的名称（"1 加 1 应该等于 2"），第二个参数是一个实际执行的函数。


### 断言库的用法

mocha 本身不带有断言库

```javascript
let chai = require('chai'),
    expect = chai.expect,
    should = chai.should(),
    assert = chai.assert;


expect(add(1, 1)).to.be.equal(2);
add(1, 1).should.equal(2);
assert.equal(add(1, 1), 2);
```

### 运行测试用例

直接执行某一个测试文件：

```sh
mocha add.test.js
```

可以将测试文件全部放在 *test* 路径下：
```sh
mocha
```
即可自动执行 *test* 路径下所有的测试文件

如果 *test* 下还有嵌套的路径，则需要：
```sh
mocha --recursive
```

### 使用命令行指定测试脚本

* shell 风格：

```sh
mocha spec/{my,awesome}.js
mocha test/unit/*.js
```
第一行命令，指定执行 spec 路径下的 my.js 和 awesome.js
第二行命令，指定执行 test/unit 路径下的所有 js 文件

* node 风格：

```sh
mocha 'test/**/*.@(js|jsx)'
```
该行命令指定执行 test 路径下任何子路径、文件名后缀为 js 或 jsx 的测试脚本。
node 风格的命令必须用单引号 '' 包裹，否则通配符 * 将被 shell 先解析。

### 可视化的测试结果

```sh
npm i mochawesome -D

node_modules/.bin/mocha --reporter mochawesome
```
此处不可使用全局安装的 mocha

### mocha 配置文件

在 *test* 路径下，将命令行参数写入配置文件 **mocha.opts**




