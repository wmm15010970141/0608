/**
 * Created by My on 2016/9/29.
 */
define([
        'text!./integral.html','$css!../../main.css', '$css!./integral.css'
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
