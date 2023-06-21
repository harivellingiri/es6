var samplelist = [1, 2, 3, 4, 5, 5, 6];
var samp = ["abc", "def", "ghi"]

//isarray
function myFunction() {
    var x = document.getElementById("demo");
    x.innerHTML = Array.isArray(samplelist);
}
//foreach
function foreach() {
    var txt = ""
    var loop = document.getElementById("forloop");
    samplelist.forEach(val);
    loop.innerHTML = txt;
    function val(value) { txt = txt + value }
    console.log(txt)
}
//map
function maps() {
    var txt = ''
    var map = document.getElementById("map")
    samplelist.map(val)
    map.innerHTML = txt;
    function val(value) { txt = txt + value }
}
function filter() {
    var txt = ""
    var filt = document.getElementById('filter')
    txt = samplelist.filter(val)
    filt.innerHTML = txt

    function val(value, index, array) { return value > 1 }
    console.log(txt)
}
function reduce() {
    var red = document.getElementById('reduce');
    let sum = samplelist.reduce((a, b) => a + b);
    red.innerText = sum;
}
function every() {
    var el = document.getElementById('every');
    var over1 = samplelist.every((value) => value > 1)
    el.innerHTML = over1
}
function some() {
    var some = document.getElementById('some')
    var data = samplelist.some((value) => value > 1)
    some.innerHTML = data
} function find() {
    var find = document.getElementById('find')
    var data = samplelist.find((value) => value > 1)
    find.innerHTML = data
}

function indexof() {
    var indexof = document.getElementById('indexof')
    var ind = samplelist.indexOf(4)
    indexof.innerHTML = ind
}
function indexlastof() {
    var lastind = document.getElementById('indexlastof')
    var indexis = samplelist.lastIndexOf(5)
    lastind.innerHTML = indexis;
}
function json() {
    var jsondata = document.getElementById("json")
    const txt = '{"name":"John", "age":30, "city":"New York"}'
    const obj = JSON.parse(txt);
    jsondata.innerHTML = obj.name + " " + obj.age

} function jsonstring() {
    var obj = { name: "John", age: 30, city: "New York" };
    var jsondata = document.getElementById("jsonstring")
    const txt = JSON.stringify(obj);
    jsondata.innerHTML = txt

}

function date() {
    var d = new Date();
    var dat = document.getElementById("date")
    dat.innerHTML = "Today is " + d + "<br>"
}
function promise() {
    var htmlpro = document.getElementById("promise")
    const myPromise = new Promise(function (myResolve, myReject) {
        myResolve();
        myReject();
    });
    myPromise.then(
        function (value) { htmlpro.innerHTML = "Value Sucess" },
        function (error) { htmlpro.innerHTML = "Value Failed" }
    );
}

function startwith() {
    var htmlval = document.getElementById("start")
    var txt = "hari";

    htmlval.innerHTML = txt.startsWith("h")
} function endwith() {
    var htmlval = document.getElementById("end")
    var txt = "hari";
    htmlval.innerHTML = txt.endsWith("h")
} function from() {
    var htmlval = document.getElementById("from")
    htmlval.innerHTML = Array.from("hari")
} function spread() {
    var htmlval = document.getElementById("spread")
    htmlval.innerHTML = [...samp, ...samplelist]
} function include() {
    var txt = "java script"
    var htmlval = document.getElementById("include")
    htmlval.innerHTML = txt.includes("java")
} 