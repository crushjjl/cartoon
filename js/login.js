$(function(){
	$(".login").on("touchend",function(){

		var $username = $("#username").val();
		var $password = $("#pwd").val();
		$.ajax({
			url:"../php/login.php",
			type:"GET",
			dataType:"json",
			data:"username="+$username+"&password="+$password,
			success:function(data){
				//如果在数据库中查找到了则返回状态码1，反之返回0
				if(data.status === 1){
					location.href="index.html?username="+$username;
				}else{
					$(".hint").html("用户名或密码错误");
					setTimeout(function(){
						$(".hint").html("");
					}, 2000)
					
				}
				
			}
		});
		console.log($username,$password);
	});
	$(".regist").on("touchend",function(){
		location.href="../html/regist.html";
	})

});