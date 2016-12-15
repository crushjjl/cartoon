// ajax请求数据
$(function(){
	var url = "http://japi.juhe.cn/comic/book";
	var data = "name=&type=&skip=&finish=&key=4ea79c644b6ef60dedc994ac2b11724b";
	var str = "";
	getData(url, data);
	function getData(url, data){
		var _data = url + "?" + data;
		// console.log(_data);
		$.ajax({
			url: 'ajax.php',
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
								<a href="#">
									<img src="${book[i].coverImg}" alt="ad" />
								</a>
								<p>
									${book[i].name}
								</p>
								<p>
									${book[i].area+book[i].type}
								</p>
							</li>`
				}
				$(".ajax-warp").find("ul").html(str);
			}else{
				$(".ajax-warp").find("ul").html("正在加载，请稍后...");
			}
			var dragging = false;
			$(".ajax-warp ul li").on("touchend",function(){
				if(dragging){
           			 return false;
           			}
       			 else{
					console.log($(this).find("p").eq(0).html())
					var name = $(this).find("p").eq(0).html();

					window.localStorage.uname = name;
					location.href = "detail.html";
				}
			})
			$(".ajax-warp ul li").on("touchmove",function () {
				 dragging = true;
			})
			$(".ajax-warp ul li").on("touchstart",function () {
				 dragging = false;
			})
			
		})
		.fail(function() {
			console.log("error");
		});		
	}
	
})