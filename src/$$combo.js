//�ϲ��ű�
var fs = require("fs")
var path = require("path") //��ͬ�Ĳ���ϵͳ���� �ļ�Ŀ¼ �ָ���ǲ�һ���ģ�����ֱ��ʹ�� + "/"��ʵ��
var curdir = process.cwd() //��ǰĿ¼
function directive(name) {
   return path.join("15 directive", name)
}
//avalon.js ����Ҫ�ϲ������ļ�
var compatibleFiles = ["01 variable", "01 variable.share", "02 core", "03 es5.shim",
    "04 dom.polyfill", "05 configuration", "06 EventBus", "06 findNodes", "07 modelFactory",
    "07 modelFactory.shim", "08 Collection", "09 dispatcher", "10 HTML",
    "12 scan", "12 scanTag", "12 scanNode", "12 scanAttr", "12 scanText",
    "13 dom", "14 parser", "14 parser.share",
    directive("attr"), directive("class.hover.active")
]
//avalon.modern.js ����Ҫ�ϲ������ļ�
var modernFiles = ["01 variable.modern", "01 variable.share", "02 core.modern",
    "04 dom.polyfill.modern", "05 configuration", "06 EventBus", "06 findNodes.modern", "07 modelFactory",
    "08 Collection", "09 dispatcher", "10 HTML.modern",
    "12 scan", "12 scanTag", "12 scanNode", "12 scanAttr.modern", "12 scanText",
    "13 dom.modern", "14 parser.modern", "14 parser.share",
    directive("attr"), directive("class.hover.active")
]
//avalon.shim.js ����Ҫ�ϲ������ļ�
var shimFiles = ["01 variable", "01 variable.share", "02 core", "03 es5.shim",
    "04 dom.polyfill", "05 configuration", "06 EventBus", "06 findNodes", "07 modelFactory",
    "08 Collection", "09 dispatcher", "10 HTML", "12 scan", "12 scanTag", "12 scanNode", "12 scanText",
    "13 dom", "14 parser", "14 parser.share", directive("attr"), directive("class.hover.active")
]
var writable = fs.createWriteStream(path.join(curdir, 'avalon.js'), {
      encoding: "utf8"
});
writable.setMaxListeners(100) //Ĭ��ֻ�����11���¼��������ױ�ջ
compatibleFiles.forEach(function(fileName) {
    var filePath = path.join(curdir, fileName + ".js")
    var readable = fs.createReadStream(filePath)
    //  readable.push("//����嵽���ļ�����ǰ��")
    //  writable.write("//����嵽���ļ�����ǰ�� ")
    readable.pipe(writable)
    readable.on("readable", function() {
        writable.write("\n//add " + filePath + "\n")
    });
})



