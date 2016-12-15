<?php 
    //接受参数的方法
    $data = $_GET["data"];
    //设置跨域的请求头信息
    header("Access-Control-Allow-Origin:*");
    // 设置跨域的方式
    header("Access-Control-Allow-Method:GET");
    //设置变量请求目标数据
    $url = $data;
    // 将读取到的数据存储
    $html = file_get_contents($url);
    // 给前端返回数据
    echo $html;
 ?>