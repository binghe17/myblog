//Array 对象
//http://www.w3school.com.cn/js/jsref_obj_array.asp

    //----定义数组
    //var arr = new Array("George", "John", "Thomas");
    var arr = ["George", "John", "Thomas"];

    document.write(arr);    //输出到页面

    //-----数组转字符串
    arr.join('-');          //数组转字符串       //George-John-Thomas
    arr.length;             //统计个数          //返回数组中元素的数目,也可以设置  (使用：字符串和数组)


    //----增加与删除
    arr.pop();              //删除最后一个元素，并返回删除元素       //Thomas
    arr.shift();            //删除第一个元素，并返回删除元素         //George
    arr.push("James");      //在末尾添加多个元素，并返回新的长度     //4
    arr.unshift("William"); //在开头添加多个元素，并返回新的长度     //4

	//----合并数组
    arr.concat();
        // var arr1 = [1,2,3];
        // document.write(arr1.concat(4,5));//1,2,3,4,5

        // var arr = new Array("George","John","Thomas");
        // var arr2 = new Array("James","Adrew","Martin");
        // var arr3 = new Array("William","Franklin");
        // document.write(arr.concat(arr2,arr3));//George,John,Thomas,James,Adrew,Martin,William,Franklin


    //----排序
    arr.sort();             //按字母排序
    arr.sort(sortNumber);   //按数值排序
    arr.reverse();          //反转元素顺序    //Thomas,John,George

    //----过滤与替换
    arr.slice(1)    //提取第一个元素到最后的元素
    arr.slice(2,4)  //提取第二个元素到第四个元素

    arr.splice(2,0,"William");//在第二个元素后面 插入新的元素。（删除元素，并向数组添加新元素）
    arr.splice(2,1,"William");//第二个元素后的第一个元素 替换为 新的元素（删除后插入）
    arr.splice(2,3,"William");//第二个元素后的第三个元素 替换为 新的元素（删除后插入）


    //------其他

    arr.toString();         //把数组转换为字符串，并返回结果    //George,John,Thomas
    arr.toLocaleString();   //把数组转换为本地字符串           //George, John, Thomas
    arr.valueOf();          //返回数组对象的原始值


    function employee(name,job,born) {
        this.name=name;
        this.job=job;
        this.born=born;
    }
    var bill=new employee("Bill Gates","Engineer",1985);
    employee.prototype.salary=null; //使您有能力向对象添加属性和方法
    bill.salary=20000;
    document.write(bill.salary);            //结果20000
    document.write(bill.constructor);       //返回对创建此对象的数组函数的引用
    //结果function employee(name, jobtitle, born) {this.name = name; this.jobtitle = job; this.born = born;}


//---------------------------取数组长度的bug.
// var arr=Array();
// arr['a']='aaa';
// arr[0]='00000';
// arr[10]='10';
// arr[8]='8';
// window.alert(arr['a']);
// window.alert(arr[10]);       //长度函数逻辑是。从0开始数~所以10是 11个
// window.alert(arr.length);    //长度是，max的下标（最大索引的键名）。注意js的长度不是真正的长度。



//-----------------------------

//完整的对象克隆  http://qianduanblog.com/post/js-learning-30-object-clone-copy.html
function clone(obj){
    // 原始类型对象指的是字符串（String）=ok、数值（Number）=ok、布尔值（Boolean）=ok，
    // 合成类型对象指的是数组（Array）?、对象（Object）?、    函数（Function）=ok
    var o,i,j,k;
    if(typeof(obj)!="object" || obj===null)return obj;
    if(obj instanceof(Array)){
        o=[];  i=0;j=obj.length;
        for(;i<j;i++){
            if(typeof(obj[i])=="object" && obj[i]!=null) o[i]=arguments.callee(obj[i]); else o[i]=obj[i]; 
        }
    }else{
        o={};
        for(i in obj){
            if(typeof(obj[i])=="object" && obj[i]!=null) o[i]=arguments.callee(obj[i]);else o[i]=obj[i];
        }
    }
    return o;
}

    //-----------------对象克隆
    //例子：
     //新创建一个对象a，
    o = {'a':1};
    // o=["One","Two","Three"];
    //b = o;//对象地址
    b=clone(o);//真正克隆array和object
    b['0'] = 2;
    // b['a'] = 2;
    console.log(_toString(o));
    console.log(_toString(b));
    //控制台输出提示:Object {a: 2}
    //--------------------------


