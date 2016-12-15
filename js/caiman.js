$(function(){
	var str = "";
	var url = "http://japi.juhe.cn/comic/book";
	var data = "name=&type=&skip=&finish=&key=4ea79c644b6ef60dedc994ac2b11724b";
	getData(url, data);
	function getData(url, data){
		var _data = url + "?" + data;
		$.ajax({
			url : '../ajax.php',
			type: 'GET',
			dataType: 'json',
			data: {data: _data},
			beforeSend: function(){
				console.log("正在加载");
			}
		})
		.done(function(data) {
			console.log(data);
			var book = data.result.bookList;
			// console.log(book);
			if (book != "") {
				for(var i = 0; i < book.length; i ++){
					str += `<li>
								<div class="li_img">
									<a href="#" class="ajax-img">
										<img src="${book[i].coverImg}" alt="wcd"/>
									</a>
									<div class="ajax-name">
										<span class="book-name">${book[i].name}</span>
										<span class="book-area">${book[i].area}</span>
										<span class="book-praise">188.8万</span>
										<span class="book-type">${book[i].type}</span>
									</div>
								</div>
							</li>`
				}
				$(".ajax-warp").find("ul").html(str);
				$(".ajax-warp ul li").on("touchstart",function(){
					var name = $(this).children().find(".book-name").text();
					window.localStorage.uname = name;
					location.href = "../detail.html";
				})
			}else{
				$(".ajax-warp").find("ul").html("正在加载，请稍后...");
			}
		})
		.fail(function() {
			console.log("error");
		});
	}
});