function searchGo(){
var s = document.getElementById('Searchbox').value;
var getvalue = document.getElementById('s-menu').value;
if (getvalue == 'baidu') {window.open("https://www.baidu.com/s?wd=" + s ,"_blank")}
else if (getvalue == 'bing') {window.open("https://cn.bing.com/search?q=" + s ,"_self");}
else if (getvalue == 'sogou') {window.open("https://www.sogou.com/web?query=" + s ,"_self");}
else if (getvalue == 'fanyi') {window.open("https://cn.bing.com/dict/search?q=" + s ,"_self");}
else if (getvalue == 'zhihu') {window.open("https://www.zhihu.com/search?type=content&q=" + s ,"_self");}
else if (getvalue == 'douban') {window.open("https://www.douban.com/search?q=" + s ,"_self");}
else if (getvalue == 'bilibili') {window.open("https://search.bilibili.com/all?keyword=" + s ,"_self");}
else if (getvalue == 'taobao') {window.open("https://s.taobao.com/search?q=" + s ,"_self");}
else if (getvalue == 'jd') {window.open("https://search.jd.com/Search?keyword=" + s ,"_self");}
else if (getvalue == 'stock') {window.open("https://xueqiu.com/k?q=" + s ,"_self");}
else if (getvalue == 'soft') {window.open("http://www.carrotchou.blog/?s=" + s ,"_self");}
else if (getvalue == 'wallhaven') {window.open("https://alpha.wallhaven.cc/search?q=" + s ,"_self");}
else if (getvalue == 'linuxcmd') {window.open("http://man.linuxde.net/" + s ,"_self");}
else if (getvalue == 'outline') {window.open("https://outline.com/" + s ,"_self");}
else if (getvalue == 'ip') {window.open("https://www.maitube.com/ip/?ip=" + s ,"_self");}
}

Searchbox.focus();

let cssFile = document.getElementById("css");
let cssHref = cssFile.getAttribute('href');
let storedName = localStorage.getItem("link")
let darkMode = "css/favorites-dark.css"

if (storedName === null) {
   cssFile.setAttribute("href","css/favorites.css");
} else if (storedName === darkMode){
   cssFile.setAttribute("href",darkMode);
}

function changeStyle(){
   cssFile.setAttribute("href",darkMode);
   localStorage.setItem("link",darkMode);
}

function reStyle(){
   cssFile.setAttribute("href","css/favorites.css");
   localStorage.clear()
}