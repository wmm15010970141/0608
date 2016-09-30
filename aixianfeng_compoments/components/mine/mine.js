define([
        'text!./mine.html','$css!../../main.css', '$css!./mine.css'
    ],
    function(html){

        function render(){

            $('.container').html(html);

        }

        function bindEvent(){
         $('.allOrder').on('click',function(){
             $('nav').hide();
         });
            $('.integral').on('click',function(){
                $('nav').hide();
            })
        }


        return {
            render:render,
            bindEvent:bindEvent
        }





    }
)/**
 * Created by yupeng on 16/9/29.
 */
