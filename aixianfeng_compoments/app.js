/**
 * Created by yupeng on 16/9/29.
 */
require.config({
    paths:{
        'jquery':'./lib/jquery',
        'backbone':'./lib/backbone',
        'underscore':'./lib/underscore',
        'swiper':'./lib/swiper-3.3.1.jquery.min',
        'text':'./lib/text',
        '$css':'./lib/css',
        'adapter':'./lib/adaptor',
        "baidu":"./lib/baiduTemplate"
    }
});
require(['jquery','backbone','swiper','adapter','./router.js','index.js','baidu'],function($,Backbone,swiper,adapter,router,index){
    //console.log(index.changeTabBar());
    Backbone.history.start();
})
