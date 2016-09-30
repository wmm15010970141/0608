define([
        'text!./search.html','$css!../../main.css', '$css!./search.css'
    ],
    function(html){

        function render(){

            $('.container').html(html);

        }

        function bindEvent(){
            $('.back').on('click',function(){
                if($('.container').hasClass('home')){
                    $('.goback')[0].href="#home";
                    $('.container').removeClass('home');
                }
                else if($('.container').hasClass('store')){
                    $('.goback')[0].href="#store";
                }
                else{
                    $('.goback')[0].href="#";
                }
                $('nav').show();
            })
        }


        return {
            render:render,
            bindEvent:bindEvent
        }





    }
)/**
 * Created by My on 2016/9/29.
 */
