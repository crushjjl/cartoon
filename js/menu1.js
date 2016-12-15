$(function(){
	$(".menu").on("touchend",function(){
		$(".wrap").show();
		setTimeout(function(){
			$(".btn1").css({ "transform":"scale(2)"});
		}, 70);
		setTimeout(function(){
			$(".btn2").css({ "transform":"scale(2)"});
		}, 140);
		setTimeout(function(){
			$(".btn3").css({ "transform":"scale(2)"});
		}, 210);
		setTimeout(function(){
			$(".btn4").css({ "transform":"scale(2)"});
		}, 280);
		setTimeout(function(){
			$(".btn5").css({ "transform":"scale(2)"});
		}, 350);
		setTimeout(function(){
			$(".btn6").css({ "transform":"scale(2)"});
		}, 420);
		setTimeout(function(){
			$(".btn7").css({ "transform":"scale(2)"});
		}, 490);
		setTimeout(function(){
			$(".btncenter").css({ "transform":"scale(2)"});
		},560);
		
	});
	$(".wrap").on("touchend",function(e){
		$(".btn1").css({"transform":"scale(0)"});
		$(".btn2").css({"transform":"scale(0)"});
		$(".btn3").css({"transform":"scale(0)"});
		$(".btn4").css({"transform":"scale(0)"});
		$(".btn5").css({"transform":"scale(0)"});
		$(".btn6").css({"transform":"scale(0)"});
		$(".btn7").css({"transform":"scale(0)"});
		$(".btncenter").css({"transform":"scale(0)"});
		$(this).hide();
		e.stopPropagation();
		return false;
	});
	//首页
	$(".btn1").on("touchend",function(){
		location.href="../index.html";
	});
	//搜索
	$(".btn2").on("touchend",function(){
		location.href="../search.html";
	});
	//彩漫
	$(".btn3").on("touchend",function(){
		location.href="caiman.html";
	});
	//排行
	$(".btn4").on("touchend",function(){
		location.href="caiman.html";
	});
	//更新
	$(".btn5").on("touchend",function(){
		location.href="caiman.html";
	});
	//书架
	$(".btn6").on("touchend",function(){
		location.href="caiman.html";
	});
	//动漫
	$(".btn7").on("touchend",function(){
		location.href="../animation.html";
	});
	//center
	$(".btncenter").on("touchend",function(){
		location.href="login.html";
	});
})

