const path = require("path");
const fs = require("fs");
module.exports = class TestNow {
  genJestSource(sourcePath = path.resolve("./")) {
    const testPath = `${sourcePath}/__test__`;
    if (!fs.existsSync(testPath)) {
      fs.mkdirSync(testPath);
    }
    let list = fs.readdirSync(sourcePath);
    list
      .map((v) => `${sourcePath}/${v}`)
      .filter((v) => fs.statSync(v).isFile())
      .filter((v) => v.indexOf(".spec") === -1)
      .map((v) => this.getTestFile(v));
  }

  getTestFile(filename) {
    console.log("filename:", filename);
    const testFileName = this.getTextFileName(filename);
    if (fs.existsSync(testFileName)) {
      console.log("该测试代码文件已存在");
      return;
    }
    const mod = require(filename);
    let source;
    if (typeof mod === "object") {
      source = Object.keys(mod)
        .map((v) => this.getTestSource(v, path.basename(filename), true))
        .join("\n");
    } else if (typeof mod === "function") {
      const basename = path.basename(filename);
      source = this.getTestSource(basename.replace(".js", ""), basename);
    }
    fs.writeFileSync(testFileName, source);
  }

  getTestSource(methodName, classFile, isClass = false) {
    console.log("getTestSource:", methodName);
    return `
      test('${"TEST " + methodName}', () => {
        const ${isClass ? "{" + methodName + "}" : methodName} = require('${
      "../" + classFile
    }')
        const ret = ${methodName}()
        // expect(ret)
        //    .toBe('test return)
      })
      
    `;
  }
  /**
   * 生成测试文件名
   * @param {*} filename 代码文件名
   */
  getTextFileName(filename) {
    const dirName = path.dirname(filename);
    const baseName = path.basename(filename);
    const extName = path.extname(baseName);
    const newName = baseName.replace(extName, `.spec${extName}`);
    return path.format({ root: dirName + "/__test__/" + newName });
  }
};
