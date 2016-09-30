define([
        'text!./searchGoodList.html','$css!../../main.css', '$css!./searchGoodList.css'
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