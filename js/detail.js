$(function(){
	$(".header div").eq(0).on("touchend",function(){
		window.history.back(-1);
	})
	var vb=true;
	$(".head-top .icon-chacha").on("touchend",function(){
		$(".head-top").slideUp();
	})
	$(".section-article span").on("touchend",function(){		
		if(vb){
			$(this).attr("class","icon iconfont icon-down-copy-copy-copy").parent().find("p").css({
				height:"100%",
				overflow:"wrap"
			})
			vb=false;
		}else{
			$(this).attr("class","icon iconfont icon-demo03").parent().find("p").css({
				height:"0.96rem",
				overflow:"hidden"
			})
			vb=true;
		}
	})	
	var name = window.localStorage.uname.replace(/\s/g,"");
	$.ajax({
		url:"php/detail.php",
		dataType:"json",
		type:"GET",
		data:{data:"http://japi.juhe.cn/comic/book?name="+name+"&type=&skip=&finish=&key=4ea79c644b6ef60dedc994ac2b11724b"}
	}).done(function(data){

		var _data = data.result.bookList[0],
			src = _data.coverImg,
			name = _data.name,
			type = _data.type,
			area = _data.area;
		$(".left-top .left-top-inner img").attr('src',src).next().children().eq(0).text(name).end().eq(2).text(type).next().text(area);

	})
	$.ajax({
		url:"php/detail.php",
		dataType:"json",
		type:"GET",
		data:{data:"http://japi.juhe.cn/comic/chapter?comicName="+name+"&skip=&key=4ea79c644b6ef60dedc994ac2b11724b"}
	}).done(function(data){
		var html = "",
			_html = ""
			_data = data.result.chapterList,
			arr = [];

		console.log(data);
		if(_data.length<=7){
			for(var i=_data.length;i>0;i--){
				html += "<li><a href='#'>"+i+"</a></li>";
			}
			html += "<li><a href='#'><span class='icon iconfont icon-jiahao'></span></a></li>";
			$(".section-number ul").html(html);
		}else{
			for(var i=_data.length;i>_data.length-7;i--){
				html += "<li><a href='#'>"+i+"</a></li>";
			}
			html += "<li><a href='#'><span class='icon iconfont icon-jiahao'></span></a></li>";
			$(".section-number ul").html(html);
		}
		for(var i=_data.length;i>0;i--){
			_html += "<li><a href='#'>"+i+"</a></li>";
			arr.push(_data[i-1].id);
		}	
		window.localStorage.arr = arr;
		// console.log(arr);
		$(".shelter-inner ul").html(_html);
		$(".section-number ul li:last").on("touchend",function(){
			$(".shelter").css({
				display:"flex"
			});
		})
		$('.shelter .shelter-span span').on("touchend",function(){
			$(".shelter").hide();
		})

		$(".shelter-inner ul li").on("touchend",function(){
			var index = $(this).index();
			window.localStorage.index = index;
			location.href = "content.html";
		})
		$(".section-number ul li:not(:last)").on("touchend",function(){
			var index = $(this).index();
			window.localStorage.index = index;
			location.href = "content.html";
		})

		$(".top-right .select").on("touchend",function(){
			location.href = "content.html";
		})
	})
	$.get("php/comments.json",function(data){
		var arr = data.result,
			$html = '';
		//console.log(arr);
		for(var i=0;i<arr.length;i++){
			$html += `<div class="comment">
						<div class="footer-img"><img src="${arr[i].headImg}"></div>
						<div class="footer-reply">
							<div><span>${arr[i].name}</span> <span>${arr[i].time}</span></div>
							<div class="span-img"><span>${arr[i].comment}</span></div>
							<div class="footer-a"><a href="#">回复</a></div>
						</div>	
					</div>`
		}	
		$("footer").html($html);	
	})
	
			
					
})