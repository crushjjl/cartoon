
var flag = true;
(function ($) {
	$(function () {
		var _html = "",
			url = "http://japi.juhe.cn/comic/category",
			key = "4ea79c644b6ef60dedc994ac2b11724b",
			data = "=&key="+key;
		
		getData(url,data);
		function getData(url,data){
			var _data = url + "?" +data;
			$.ajax({
				url: 'php/comic.php',
				type: 'GET',
				dataType: 'json',
				data: {data: _data}
			})
			.done(function(data) {
				var datas = data.result;
				// console.log(datas);
				for (var i = 0; i < datas.length; i++) {
					_html += `<li><a href="html/category.html?type=${datas[i]}">${datas[i]}</a></li>`;
				}
				$(".tag_sort>ul").html(_html);
				$(".tag_sort li").on('touchend', function(event) {
					// event.preventDefault();
					flag = true;
					localStorage.flag = flag;
				});
				localStorage.flag = flag;
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
		}
	});
})(jQuery);

(function ($) {
	$(function(){
		var _html = "",
			url = "http://japi.juhe.cn/comic/book",
			key = "4ea79c644b6ef60dedc994ac2b11724b",
			data = "name=&type=&skip=&finish=&key="+key;
			getData(url,data);
		function getData(url,data) {
			var _data = url +"?"+data;
			$.ajax({
				url: 'php/comic.php',
				type: 'GET',
				dataType: 'json',
				data: {data: _data}
			})
			.done(function(data) {
				var datas = data.result.bookList;
				// console.log(datas);
				for (var i = 10; i < 16; i++) {
					_html += `<li>
					<a href="#">
					<img src="${datas[i].coverImg}" alt="">
					<p>${datas[i].name}</p>
					</a>
					</li>`;
				}
				$(".content_recommend>ul").html(_html);
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
			
		}
	});
})(jQuery);

(function ($) {
	$(function(){
		var str ="";
		$(".search_btn").on('touchend', function() {
			var url = "http://japi.juhe.cn/comic/book",
				key = "4ea79c644b6ef60dedc994ac2b11724b",
				data = "name="+$(".content_search>input").val()+"&type=&skip=&finish=&key="+key;
			getBookList(url,data);
			flag = false;
			localStorage.flag = flag;
		});
		function getBookList(url,data) {
			var datas = url+"?"+data;
			$.ajax({
				url: 'php/comic.php',
				type: 'GET',
				dataType: 'json',
				data: {data: datas},
			})
			.done(function(data) {
				// console.log(data);
				var _data = data.result.bookList;
				console.log(_data);
				localStorage.datas = JSON.stringify(_data);
				console.log(localStorage.datas);
				location.href = "html/category.html";
			})
			.fail(function(responseText) {
				console.log(responseText);
			})
			.always(function() {
				console.log("complete");
			});
			
		}
	});
})(jQuery);

