define(['backbone'],function(Backbone){

    var Router = Backbone.Router.extend({

        routes: {
            "home":  "home",
            "store": "store",
            "order":"order",
            "cart":"cart",
            "mine":"mine",
            "search":"search",
            "searchGoodList":"searchGoodList",
            "crazySale":"crazySale",
            "myOrder":"myOrder",
            "integral":"integral",
            "twoCode":"twoCode",
            "*actions":"defaultAction"

        },

        home: function() {
            require(['./components/home/home.js'],function(home){
                home.render();
                home.bindEvent();
                home.getAjax();
            })
        },
        store: function() {
            require(['./components/store/store.js'],function(store){
                store.render();
                store.bindEvent();
            })
        },
        order: function() {
            require(['./components/order/order.js'],function(order){
                order.render();
            })
        },
        cart: function() {
            require(['./components/cart/cart.js'],function(cart){
                cart.render();
            })
        },
        mine: function() {
            require(['./components/mine/mine.js'],function(mine){
                mine.render();
                mine.bindEvent();
            })
        },
        twoCode: function() {
            require(['components/twoCode/twoCode.js'],function(twoCode){
                twoCode.render();
                twoCode.bindEvent();
            })
        },
        integral: function() {
            require(['./components/integral/integral.js'],function(integral){
                integral.render();
                integral.bindEvent();
            })
        },
        myOrder: function() {
            require(['./components/myOrder/myOrder.js'],function(myOrder){
                myOrder.render();
                myOrder.bindEvent();
            })
        },
        crazySale: function() {
            require(['./components/crazySale/crazySale.js'],function(crazySale){
                crazySale.render();
                crazySale.bindEvent();
            })
        },
        searchGoodList: function() {
            require(['./components/searchGoodList/searchGoodList.js'],function(searchGoodList){
                searchGoodList.render();
                searchGoodList.bindEvent();
            })
        },
        search: function() {
            require(['./components/search/search.js'],function(search){
                search.render();
                search.bindEvent();
            })
        },
        defaultAction:function(){
            location.hash = "home";
        }

    });

    var router = new Router();
    return router;

})

