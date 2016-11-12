$(function(){
   var todos=[];
   var a;
   var ul=$("#uls");
   var heng=$(".yemian1 .heng");
   var jia=$(".yemian1 .jia");
   
   var heng2=$(".yemian2 .heng")
   console.log(heng2)

   var dh1=$(".yemian1");
   var dh2=$(".yemian2");
   // 页面转动
   jia.on("touchend",function(){
       dh1.addClass("left");
       dh2.addClass("right");
   })
   heng2.on("touchend",function(){
   	   dh1.removeClass("left").addClass("left1");
       dh2.removeClass("right").addClass("right1");
   })

 //切换完成,未完成
 	ul.on("touchstart",'.zt',function(e){
		 a = e.originalEvent.changedTouches[0].clientX;
	})

	ul.on("touchend",'.zt',function(e){
		var b = e.originalEvent.changedTouches[0].clientX;
		if(b-a>50){				
			$(this).addClass("dones");
			todos[$(this).index()].state=1;
			localStorage.todos=JSON.stringify(todos);
		}
		if(b-a<-50){
			$(this).removeClass("dones");
			todos[$(this).index()].state=0;
			localStorage.todos=JSON.stringify(todos);
		}
	})

//添加数据

	if(localStorage.todos){
		todos=JSON.parse(localStorage.todos);

		for(var i=0;i<todos.length;i++){
			var c=(todos[i].state)?'done':'';
           
			$("<li class='done'><div class='kuai'></div><div class'sj'><form astion='' id='divT'>"+todos[i].shijian+"</form></div><div class='wjx'>"+'&#xe682'+"</div><div class='zt'>"+todos[i].name+"</div></li>").appendTo(ul);
		}
		
	}




// 添加内容到页面
    var  add=$(".add") 
    var  divTs=$("#divT");
    var  input=$("#xie textarea");

      add.on("touchend",function(){
   	  var shi=$.trim(divTs.val());
   	  var   v=$.trim(input.val());
   	  console.log(shi)
   	  	if(!v){
			return;
		}
		var todo={
			name:v,
			state:0,
			shijian:shi
		}
		todos.push(todo);
		localStorage.todos=JSON.stringify(todos);
		$("<li class='done'><div class='kuai'></div><div class'sj'><form astion='' id='divT'>"+shi+"</form></div><div class='wjx'>"+'&#xe682'+"</div><div class='zt'>"+v+"</div></li>").appendTo(ul);
		input.val('').focus();	
   })


// 如何创建时间

// ?? 无法获取


// 点击右侧删除
ul.on("touchend",".wjx",function(){
	var index=$(this).closest("li").index();
	todos.splice(index,1);
	localStorage.todos=JSON.stringify(todos);
	$(this).closest("li").addClass("delete-d")
	$(this).closest("li").delay(600).queue(function(){
			$(this).remove().dequeue();
		})
})

//选项卡
var yanse=$(".yanse");
// console.log(yanse)
yanse.on("touchend",function(){
    ul.find("li").show;
   	//$(this).addClass("index");

	ul.find("li").hide();
	ul.find("li.zt").show();

})

// var yanse1=$(".yanse ul")
// var yanse=$(".yanse");
// console.log(yanse1)
// yanse.on("touchend",function(){
//   yanse.animate({opacity:0})
//   yanse1.animate({opacity:1})
   
// })
// yanse1.on("touchend",function(){
//    yanse.css("display","none");
//    yanse1.css("display","block")
// })





function getCurDate()
{
 var d = new Date();
 var week;
 switch (d.getDay()){
 case 1: week="星期一"; break;
 case 2: week="星期二"; break;
 case 3: week="星期三"; break;
 case 4: week="星期四"; break;
 case 5: week="星期五"; break;
 case 6: week="星期六"; break;
 default: week="星期天";
 }
 var years = d.getFullYear();
 console.log(years)
 var month = add_zero(d.getMonth()+1);
 var days = add_zero(d.getDate());
 var hours = add_zero(d.getHours());
 var minutes = add_zero(d.getMinutes());
 var seconds=add_zero(d.getSeconds());
 //var ndate = years+"年"+month+"月"+days+"日 "+hours+":"+minutes+":"+seconds+" "+week;
var ndate = years+" "+month+"."+days+"."+week;
var divT=document.getElementById("divT");
    divT.innerHTML= ndate;
}
function add_zero(temp)
{
 if(temp<10) return "0"+temp;
 else return temp;
}
// setInterval("getCurDate()",100);
	getCurDate()
	
})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	




	
	
	
	
	
	
	
	
