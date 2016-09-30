define([
        'text!./home.html', '$css!./home.css','$css!../../main.css','$css!./swiper-3.3.1.min.css'
    ],
    function(html){

        function render(){

            $('.container').html(html);

        }


        function bindEvent(){
        $(".address3").on('click','a',function(){
            $('.container').addClass('home');
           $('nav').hide();
        });
            $(".address1").on('click','a',function(){
                $('nav').hide();
            });
            $('.top').on('click','.sale',function(){
                $('nav').hide();
            })
        }
    function  getAjax(){
        $.get('http://www.vrserver.applinzi.com/aixianfeng/apihome.php',function(res){
            var result=res.substring(0,res.indexOf('<script'));
            var slides=JSON.parse(result);
            var bt=baidu.template,
                data=slides;
            var html = bt("t:_1234-abcd-1",data);
            $(".top").html(html);
            $(function () {
                function slider() {
                    var mySwiper = new Swiper('.slider', {
                        autoplay: 3000,//可选选项，自动滑动
                        loop : true,
                        pagination : '.swiper-pagination',
                        paginationClickable :true,
                        onAutoplayStop: function(swiper){
                            swiper.startAutoplay();
                        }
                    })
                }
                slider();
            })
        })
        $.get('http://www.vrserver.applinzi.com/aixianfeng/apihomehot.php',function(res){
            var result=res.substring(0,res.indexOf('<script'));
            var content=JSON.parse(result);
            var bt=baidu.template,
                 data=content;
            var html = bt("t:_1234-abcd-2",data);
            $(".hot_sale_content").html(html);
        })
    }

        return {
            render:render,
            bindEvent:bindEvent,
            getAjax:getAjax
        }





    }
)