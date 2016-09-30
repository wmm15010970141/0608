/**
 * Created by yupeng on 16/9/29.
 */
define([
        'text!./store.html','$css!../../main.css', '$css!./store.css'
    ],
    function(html){

        function render() {

            $('.container').html(html);
            hotGetAjax();
        }
        function hotGetAjax(){
            $.get('http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=热销榜',function(res){
                var result=res.substring(0,res.indexOf('<script'));
                addHtml(result);
            })
        }
        function saleGetAjax(){
            $.get('http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=天天特价',function(res){
                var result=res.substring(0,res.indexOf('<script'));
                addHtml(result);
            })
        }
        function fruitGetAjax(){
            $.get('http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=优选水果',function(res){
                var result=res.substring(0,res.indexOf('<script'));
                addHtml(result);
            })
        }
        function  milkGetAjax(){
            $.get('http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=牛奶面包',function(res){
                var result=res.substring(0,res.indexOf('<script'));
                addHtml(result);
            })
        }
        //获取数据添加到页面的方法
        function addHtml(result){
            var content=JSON.parse(result);
            var data=content;
            var html=[];
            for (var i=0;i<data.data.length;i++){
                html.push(getTPl(data.data[i]));
            }
            $(".goodsitem").html(html.join(''));
        }
        //创建模板的函数
        function getTPl(list){
         var str=' <li class="item">\
             <div class="image"><img src="'+list.img+'"/></div>\
                <div class="text">\
                <div class="title">'+list.name+'</div>\
                <div class="mark"><span>精选</span><span>'+list.pm_desc+'</span></div>\
                <div class="size">'+list.specifics+'</div>\
            <div class="price">\
                <span class="current-price">¥<span>'+list.price+'</span></span>\
                <span class="before-price">¥<span>'+list.market_price+'</span></span>\
                </div>\
                <div class="add"><span></span></div>\
                </div>\
                </li>';
            return str;

        }
        function bindEvent(){
            $(".search").on('click',function(){
                $('.container').addClass('store');
                $('nav').hide();
            })
            $('.goodtype').on('click','li',function(){
              if($(this).html()=='热销榜'){
                  hotGetAjax();
              }
               else if($(this).html()=='天天特价'){
                    saleGetAjax();
                }
              else if($(this).html()=='优选水果'){
                  fruitGetAjax();
              }
              else if($(this).html()=='牛奶面包'){
                  milkGetAjax();
              }
            })
        }


        return {
            render:render,
            bindEvent:bindEvent
        }





    }
)