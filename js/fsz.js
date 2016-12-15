var fsz = document.documentElement.clientWidth/6.4;
document.getElementsByTagName("html")[0].style.fontSize = fsz +"px";
console.log(fsz);
$(".cancle").on("touchend",function(){
		window.history.back(-1);
	})