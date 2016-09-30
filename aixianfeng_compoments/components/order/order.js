/**
 * Created by yupeng on 16/9/29.
 */
define([
        'text!./order.html','$css!../../main.css', '$css!./order.css'
    ],
    function(html){

        function render(){

            $('.container').html(html);
             getAjax();
        }
        function getAjax(){
            $.get('http://www.vrserver.applinzi.com/aixianfeng/apiyuding.php',function(res){
                var result=res.substring(0,res.indexOf('<script'));
                var content=JSON.parse(result);
                var bt=baidu.template,
                    data=content;
                var html = bt("t:_1234-abcd-1",data);
                $(".product").html(html);
            });
        }

        function bindEvent(){

        }


        return {
            render:render,
            bindEvent:bindEvent
        }





    }
)