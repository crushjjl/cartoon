$(function(){
	$("header div span").eq(0).on("touchend",function(){
		window.history.back(-1);
	})
	$(".head-span").on("touchstart",function(){
		$(".shelter").css({
			display:"flex"
		});
	})

	$('.shelter .shelter-span span').on("touchstart",function(){
		$(".shelter").hide();
	})
	var arr = window.localStorage.arr.split(","),
		index = window.localStorage.index,
		name = window.localStorage.uname.replace(/\s/g,""),
		html = "",
		_html = "";
		console.log(arr)
	$('header div span').eq(2).text(name);
	$("header div span").eq(1).text("第"+(arr.length-index)+"话");
	for(var i=arr.length;i>0;i--){
		_html +="<a href='#'>"+i+"</a>";
	}
	$(".shelter-inner").html(_html);
	console.log(arr,index,name);
	$.ajax({
		url: 'php/content.php',
		type: 'GET',
		dataType: 'json',
		data: {data: 'http://japi.juhe.cn/comic/chapterContent?comicName='+name+'&id='+arr[index]+'&key=4ea79c644b6ef60dedc994ac2b11724b'},
	})
	.done(function(data) {
		console.log(data)
		var data = data.result.imageList;
		for(var i=0;i<data.length;i++){
			html += "<li><img src='"+data[i].imageUrl+"'></li>";
		}
		$("section ul").html(html);
	})
	var nan = true;	
	$("section").on("touchstart",function(){
		if(nan){
			$("header").slideUp();
			nan = false;
		}else{
			$("header").slideDown();
			nan = true;
		}
		
	})
	$(".shelter-inner a").on("touchstart",function(){
		var _index = $(this).index(),
			html = "";
		console.log(_index);
		window.localStorage.index = _index;
		$("header div span").eq(1).text("第"+(arr.length-_index)+"话");
		$.ajax({
			url: 'php/content.php',
			type: 'GET',
			dataType: 'json',
			data: {data: 'http://japi.juhe.cn/comic/chapterContent?comicName='+name+'&id='+arr[_index]+'&key=4ea79c644b6ef60dedc994ac2b11724b'},
		})
		.done(function(data) {
			console.log(data)
			var data = data.result.imageList;
			for(var i=0;i<data.length;i++){
				html += "<li><img src='"+data[i].imageUrl+"'></li>";
			}
			$("section ul").html(html);
			$('.shelter').hide();
		})

	})
})