/**
 * Created by My on 2016/9/29.
 */
define([
        'text!./myOrder.html','$css!../../main.css', '$css!./myOrder.css'
    ],
    function(html){

        function render(){

            $('.container').html(html);

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