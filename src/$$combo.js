//合并脚本
var fs = require("fs")

var curdir = process.cwd() + "/";//当前目录
//avalon.js 所需要合并的子文件
var compatibleFiles = ["01 variable", "01 variable.share", "02 core", "03 es5.shim",
    "04 dom.polyfill", "05 configuration", "06 EventBus", "06 findNodes", "07 modelFactory",
    "07 modelFactory.shin", "08 Collection", "09 dispatcher", "10 HTML", 
    "12 scan", "12 scanTag", "12 scanNode","12 scanAttr", "12 scanText",
    "13 dom", "14 parser", "14 parser.share", 
    "15 directive/attr", "15 directive/class.hover.active"
]
//avalon.modern.js 所需要合并的子文件
var modernFiles = ["01 variable.modern", "01 variable.share", "02 core.modern", 
    "04 dom.polyfill.modern", "05 configuration", "06 EventBus", "06 findNodes.modern", "07 modelFactory",
    "08 Collection", "09 dispatcher", "10 HTML.modern", 
    "12 scan", "12 scanTag", "12 scanNode", "12 scanAttr.modern","12 scanText",
    "13 dom.modern", "14 parser.modern", "14 parser.share", 
    "15 directive/attr.modern", "15 directive/class.hover.active"
]
//avalon.shim.js 所需要合并的子文件
var shimFiles = ["01 variable", "01 variable.share", "02 core", "03 es5.shim",
    "04 dom.polyfill", "05 configuration", "06 EventBus", "06 findNodes", "07 modelFactory",
    "08 Collection", "09 dispatcher", "10 HTML", "12 scan", "12 scanTag", "12 scanNode", "12 scanText",
    "13 dom", "14 parser", "14 parser.share", "15 directive/attr", "15 directive/class.hover.active"
]
var writable = fs.createWriteStream(curdir + 'avalon.js');
writable.setMaxListeners(100) //默认只有添加11个事件，很容易爆栈
compatibleFiles.forEach(function(fileName) {
    var readable = fs.createReadStream(curdir + fileName + ".js")
    //  readable.push("//都会插到新文件的最前面")
    //  writable.write("//都会插到新文件的最前面 ")
    readable.pipe(writable)
    readable.on("readable", function() {
        writable.write("\n//add " + fileName + ".js\n")
    });
})



