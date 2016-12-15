$(function(){
	$(".cancle").on("touchend",function(){
		window.history.back(-1);
	})
	$(".regist").on("touchend",function(){
		var $username = $("#user").val(),
			$password = $("#password").val(),
			$surepassword = $("#surepassword").val();
		//先判断 注册的时候是否重复用户名
		$.ajax({
			url:"../php/check-proname.php",
			type:"GET",
			dataType:"json",
			data:"username="+$username
		}).done(function(data){
			//如果状态为1 则证明用户名可以注册
			if(data.status === 1 && $password === $surepassword){

				//对两次输入的密码进行校验，如果一致则将用户和密码存储到数据库
				$.ajax({
					url:"../php/regist.php",
					type:"POST",			
					data:{"username":$username,"password":$password},
					success:function(data){
						setTimeout(function(){
							location.href="../html/login.html";
						}, 2000)
						$(".hint").html("注册成功");
					}		
				});
			}else{
				$(".hint").html("该用户已被注册或两次密码不正确");
			}
		});
		
	});
});