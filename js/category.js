;
(function ($) {
	$(function(){
		var _data = JSON.parse(localStorage.datas),
			_html = "";
		// console.log(_data);
		for (var i = 0; i < _data.length; i++) {
			if(_data[i].finish == "true"){
				_data[i].finish = "已完结";
			}else{
				_data[i].finish = "未完结";
			}
			_html += `
				<li>
					<dl>
						<dt><img src="${_data[i].coverImg}" alt=""></dt>
						<dd>	
							<span class="book_name">${_data[i].name}</span>
							<span class="book_author">${_data[i].des}</span>
							<span class="book_praise">${_data[i].finish}</span>
							<span class="book_tag">${_data[i].type}</span>
							<span class="book_updateTime">${_data[i].lastUpdate}</span>
						</dd>
					</dl>
				</li>
			`;
			$(".header_title_else").html(`${_data[0].name}`);
		}
		$(".category_list").html(_html);
		$(".category_list li").on("touchstart",function(){
			var name = $(this).children().find("dd span").eq(0).text();
			window.localStorage.uname = name;
			location.href = "../detail.html"
		})

	});
})(jQuery);

(function ($) {
	$(function () {
		var flag = localStorage.flag;
		console.log( flag)
		if(flag == "true"){
			console.log(flag)
			var newData = window.location.search.split("?")[1];
			console.log(newData);
			var _html = "",
				url = "http://japi.juhe.cn/comic/book",
				key = "4ea79c644b6ef60dedc994ac2b11724b",
				data = "name=&"+newData+"&skip=&finish=&key="+key;
			getCategoryData(url,data);
			function getCategoryData(url,data){
				var _data = url + "?" + data;
				console.log(_data)
				$.ajax({
					url: '../php/comic.php',
					type: 'GET',
					dataType: 'json',
					data: {data:_data},
				})
				.done(function(data){
					console.log(data);
					var datas = data.result.bookList;
					for (var i = 0; i < datas.length; i++) {

						if(datas[i].finish == "true"){
							datas[i].finish = "已完结";
						}else{
							datas[i].finish = "未完结";
						}

						_html += `
						<li>
							<dl>
								<dt><img src="${datas[i].coverImg}" alt=""></dt>
								<dd>	
									<span class="book_name">${datas[i].name}</span>
									<span class="book_author">${datas[i].des}</span>
									<span class="book_praise">${datas[i].finish}</span>
									<span class="book_tag">${datas[i].type}</span>
									<span class="book_updateTime">${datas[i].lastUpdate}</span>
								</dd>
							</dl>
						</li>
						`;
						$(".header_title_else").html(`${datas[i].type}`);
					}
					$(".category_list").html(_html);
					$(".category_list li").on("touchstart",function(){
						var name = $(this).children().find("dd span").eq(0).text();
						window.localStorage.uname = name;
						location.href = "../detail.html"
					})			
				})
				.fail(function() {
					console.log("error");
				})
				.always(function() {
					console.log("complete");
				});
				
			}
		}
		
	});
})(jQuery);