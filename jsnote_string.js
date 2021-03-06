//String 对象
//http://www.w3school.com.cn/js/jsref_obj_string.asp

    //-------合并

        var str1="Hello "
        var str2="world!"
        document.write(str1.concat(str2));  //连接字符串     //Hello world!


    //-------分割 （字符串转数组）

        var str="How are you doing today?"
        document.write(str.split(" "));         //将返回['How','are','you','doing','today?']
        document.write(str.split(""));          //将返回['H','o','w',' ','a','r'...........]
        document.write(str.split(" ",3));       //将返回['How','are','you']

        //分割结构更为复杂的字符串
        "2:3:4:5".split(":");   //将返回["2", "3", "4", "5"]
        "|a|b|c".split("|");    //将返回["", "a", "b", "c"]

        var words = sentence.split(' ');    //句子分割成单词
        var words = sentence.split(/\s+/);  //正则表达式作为 separator

        "hello".split("");      //可返回 ["h", "e", "l", "l", "o"]
        "hello".split("", 3);   //可返回 ["h", "e", "l"]




    //-----截取

        //提取字符串的片断，并在新的字符串中返回被提取的部分
        var str="Hello happy world!"
        document.write(str.slice(6));       //提取从位置 6 开始的所有字符       //happy world!
        document.write(str.slice(6,11));    //提取从位置 6 到位置 11 的所有字符  //happy

        //从起始索引号提取字符串中指定数目的字符
        var str="Hello world!";
        document.write(str.substr(3));          //lo world!
        document.write(str.substr(3,7));        //lo worl

        //提取字符串中两个指定的索引号之间的字符
        var str="Hello world!";
        document.write(str.substring(3));       //lo world!
        document.write(str.substring(3,7));     //lo w



        //返回一个指定的字符串值最后出现的位置
        var str="Hello world!";
        document.write(str.indexOf("Hello") + "<br />");        //从前向后检索字符串     //0
        document.write(str.indexOf("World") + "<br />");                                //-1
        document.write(str.indexOf("world"));                                           //6
        document.write(str.lastIndexOf("Hello") + "<br />");    //从后向前搜索字符串     //0
        document.write(str.lastIndexOf("World") + "<br />");                            //-1
        document.write(str.lastIndexOf("world"));                                       //6

        document.write(str.charAt(1));      //返回在指定位置的字符                        //e
        document.write(str.charCodeAt(1));  //返回在指定的位置的字符的 Unicode 编码   //101




    //------转为大写，转为小写

        var str="Hello world!";
        document.write(str.toUpperCase());      //把字符串转换为大写
        document.write(str.toLowerCase());      //把字符串转换为小写





    //----------正则匹配

        //找到一个或多个正则表达式的匹配
        var str="Hello world!";
        document.write(str.match("world") + "<br />");      //world
        document.write(str.match("World") + "<br />");      //null
        document.write(str.match("worlld") + "<br />");     //null
        document.write(str.match("world!"));                //world!

        var str="1 plus 2 equal 3"
        document.write(str.match(/\d+/g));                  //1,2,3


    //------正则替换

        //来替换字符串中的字符
        var str="Visit Microsoft!";
        document.write(str.replace(/Microsoft/, "W3School"));//Visit W3School!

        //进行全局替换
        var str="Welcome to Microsoft! "
        str=str + "We are proud to announce that Microsoft has "
        str=str + "one of the largest Web Developers sites in the world."
        document.write(str.replace(/Microsoft/g, "W3School"))
        //Welcome to W3School! We are proud to announce that W3School
        //has one of the largest Web Developers sites in the world.

        ///确保大写字母的正确性
        text = "javascript Tutorial";
        text.replace(/javascript/i, "JavaScript");

        //来转换姓名的格式
        name = "Doe, John";
        name.replace(/(\w+)\s*, \s*(\w+)/, "$2 $1");

        //来转换引号
        name = '"a", "b"';
        name.replace(/"([^"]*)"/g, "'$1'");

        //把单词的首字母转换为大写
        name = 'aaa bbb ccc';
        uw=name.replace(
            /\b\w+\b/g,
            function(word){
                return word.substring(0,1).toUpperCase()+word.substring(1);
            }
        );


    //--------正则检索

        var str="Visit W3School!"
        document.write(str.search(/W3School/));     //检索 "W3School"     //6


        var str="Visit W3School!"
        document.write(str.search(/w3school/));     //无法检索到 w3school（因为 search() 对大小写敏感）。//-1

        var str="Visit W3School!"
        document.write(str.search(/w3school/i));    //忽略大小写的检索      //6




    //-------------------------
    //localeCompare() 用本地特定的顺序来比较两个字符串










//--------------RegExp---------------------------------------------------

//编译正则表达式
var str="Every man in the world! Every woman on earth!";
patt=/man/g;
str2=str.replace(patt,"person");
document.write(str2+"<br />");      //Every person in the world! Every woperson on earth!
patt=/(wo)?man/g;
patt.compile(patt);
str2=str.replace(patt,"person");
document.write(str2);               //Every person in the world! Every person on earth!


//检索字符串中指定的值。返回找到的值，并确定其位置
var str = "Visit W3School";
var patt = new RegExp("W3School","g");
var result;
while ((result = patt.exec(str)) != null) {
    document.write(result);             //W3School
    document.write("<br />");
    document.write(result.lastIndex);   //14  //一个整数，标示开始下一次匹配的字符位置
}


//检索字符串中指定的值。返回 true 或 false
var str = "Visit W3School";
var patt1 = new RegExp("W3School");
var result = patt1.test(str);
document.write("Result: " + result);    //Result: true




var str = "Visit W3School.com.cn";
var patt1 = new RegExp("W3S","g");
document.write("The regular expression is: " + patt1.source);//The regular expression is: W3S



//---------Math------------------------------------

// random() 返回 0 ~ 1 之间的随机数
document.write(Math.random())//0.2746153267252691


// abs(x) 返回数的绝对值
document.write(Math.abs(7.25) + "<br />")   //7.25
document.write(Math.abs(-7.25) + "<br />")  //7.25
document.write(Math.abs(7.25-10))           //2.75


// ceil(x) 对数进行上舍入
document.write(Math.ceil(0.60) + "<br />")  //1
document.write(Math.ceil(0.40) + "<br />")  //1
document.write(Math.ceil(5) + "<br />")     //5
document.write(Math.ceil(5.1) + "<br />")   //6
document.write(Math.ceil(-5.1) + "<br />")  //-5
document.write(Math.ceil(-5.9))             //-5

// floor(x) 对数进行下舍入
document.write(Math.floor(0.60) + "<br />") //0
document.write(Math.floor(0.40) + "<br />") //0
document.write(Math.floor(5) + "<br />")    //5
document.write(Math.floor(5.1) + "<br />")  //5
document.write(Math.floor(-5.1) + "<br />") //-6
document.write(Math.floor(-5.9))            //-6

// round(x) 把数四舍五入为最接近的整数。
document.write(Math.round(0.60) + "<br />")     //1
document.write(Math.round(0.50) + "<br />")     //1
document.write(Math.round(0.49) + "<br />")     //0
document.write(Math.round(-4.40) + "<br />")    //-4
document.write(Math.round(-4.60))               //-5


// max(x,y) 返回 x 和 y 中的最高值
// min(x,y) 返回 x 和 y 中的最低值
document.write(Math.min(5,7) + "<br />")    //5
document.write(Math.min(-3,5) + "<br />")   //-3
document.write(Math.min(-3,-5) + "<br />")  //-5
document.write(Math.min(7.25,7.30))         //7.25



//------------Functions---------------------------------------

//--------------编码，解码

var test1="http://www.w3school.com.cn/My first/"
//把字符串编码为URI/解码URI
document.write(encodeURI(test1)+ "<br />"); //http://www.w3school.com.cn/My%20first/
document.write(decodeURI(test1));           //http://www.w3school.com.cn/My first/
//把字符串编码为URI组件/解码URI组件
document.write(encodeURIComponent(test1)+ "<br />");    //http%3A%2F%2Fwww.w3school.com.cn%2FMy%20first%2F
document.write(decodeURIComponent(test1));              //http://www.w3school.com.cn/My first/

//对字符串进行编码
document.write(escape("Visit W3School!?!=()#%&"));  //Visit%20W3School%21%3F%21%3D%28%29%23%25%26
document.write(unescape('Visit%20W3School%21%3F%21%3D%28%29%23%25%26'));//Visit W3School!?!=()#%&


//-----------------

parseInt("10");         //返回 10
parseInt("19",10);      //返回 19 (10+9)
parseInt("11",2);       //返回 3 (2+1)
parseInt("17",8);       //返回 15 (8+7)
parseInt("1f",16);      //返回 31 (16+15)
parseInt("010");        //未定：返回 10 或 8

document.write(parseFloat("10"))            //10
document.write(parseFloat("10.00"))         //10
document.write(parseFloat("10.33"))         //10.22
document.write(parseFloat("34 45 66"))      //34
document.write(parseFloat(" 60 "))          //60
document.write(parseFloat("40 years"))      //40
document.write(parseFloat("He was 40"))     //NaN

document.write(isNaN(123));             //false
document.write(isNaN(-1.23));           //false
document.write(isNaN(5-2));             //false
document.write(isNaN(0));               //false
document.write(isNaN("Hello"));         //true
document.write(isNaN("2005/12/12"));    //true

document.write(isFinite(123)+ "<br />")             //true
document.write(isFinite(-1.23)+ "<br />")           //true
document.write(isFinite(5-2)+ "<br />")             //true
document.write(isFinite(0)+ "<br />")               //true
document.write(isFinite("Hello")+ "<br />")         //false
document.write(isFinite("2005/12/12")+ "<br />")    //false

//--------------

eval("x=10;y=20;document.write(x*y)");//200
document.write(eval("2+2"));//4
var x=10; document.write(eval(x+17));//27

// eval("2+3")          // 返回 5
// var myeval = eval;   // 可能会抛出 EvalError 异常
// myeval("2+3");       // 可能会抛出 EvalError 异常

//alert((5/0));         //输出不是0，而是输出怪异的结果Infinity? 

//-----------------



//判断是不是数组
// (function(win){ 
//  var obj = {}; 
//  var type = ['String','Array','Number','Function','Object','Boolean','Date','Undefined','Null','RegExp'];
//  var type2= ['is_string','is_array','is_number','is_function','is_object','is_bool','is_date','is_undefined','is_null','is_regexp'];
//  for(var i=0;i<type.length;i++){ 
//      obj[type2[i]] = (function(str){ 
//          return function(o){return Object.prototype.toString.call(o) === '[object '+str+']' ;}; 
//      })(type[i]); 
//  } //isString,isArray,isNumber...
//  obj.gettype=function(obj){ return typeof(obj); }
//  win.ap = obj; 
// })(window); 
// is_array = function(v){ return toString.apply(v) === '[object Array]'; }  
// is_array = function(obj){ return Object.prototype.toString.call(obj) === '[object Array]'; }  
// alert(is_array(arr));
// alert(is_array(arr2));

// alert(ap.gettype(arr));




// var arr=new Array("1","2","3","4","5");//object
// var arr2=new Object({"b":"2222"});//object
// var str='aaa';
// alert(typeof(str)==='string');//string


//-------------------
// 表达式                  返回值
// typeof undefined         'undefined'
// typeof unknownVariable   'undefined'
// typeof true              'boolean'
// typeof 123               'number'
// typeof "abc"             'string'
// typeof function() {}     'function'
// typeof null              'object'
// typeof {}                'object'
// typeof []                'object'
