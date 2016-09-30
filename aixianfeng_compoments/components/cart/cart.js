/**
 * Created by yupeng on 16/9/29.
 */
define([
        'text!./cart.html','$css!../../main.css', '$css!./cart.css'
    ],
    function(html){

        function render(){

            $('.container').html(html);

        }

        function bindEvent(){

        }


        return {
            render:render,
            bindEvent:bindEvent
        }





    }
)