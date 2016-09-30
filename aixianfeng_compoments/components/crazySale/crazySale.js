/**
 * Created by My on 2016/9/29.
 */
define([
        'text!./crazySale.html','$css!../../main.css', '$css!./crazySale.css'
    ],
    function(html){

        function render(){

            $('.container').html(html);
             getAjax();
        }
        function  getAjax(){
            $.get('http://www.vrserver.applinzi.com/aixianfeng/apimiaosha.php',function(res){
                var result=res.substring(0,res.indexOf('<script'));
                var content=JSON.parse(result);
                var data=content;
                var html=[];
                for (var i=0;i<data.product.length;i++){
                    html.push(getTPl(data.product[i]));
                }
                $(".hotsalelist").html(html.join(''));
            })
        }

        //创建模板的函数
        function getTPl(list){
            var str=' <div class="goodlist">\
                <div class="image"><img src="'+list.img+'"/></div>\
                <div class="text">\
                <div class="title">'+list.name+'</div>\
            <div class="size">'+list.specifics+'</div>\
            <div class="price">\
                <span class="current_price">¥<span>'+list.price+'</span></span>\
                <span class="before_price">¥<span>'+list.market_price+'</span></span>\
                </div>\
                <div class="add"><span></span></div>\
                </div>\
                </div>';
            return str;

        }
        function bindEvent(){
            $('.back').on('click',function(){
                $('nav').show();
            })
        }


        return {
            render:render,
            bindEvent:bindEvent
        }





    }
)