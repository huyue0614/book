import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.js";
import Banner from "./components/Banner.js";
import Nav from "./components/Nav.js";
import HomeTab from "./components/Home-tab.js";
import HomeBooks from "./components/Home-books.js";
require('./index.css');
var images=[
    {"src":require("../images/banner1.jpg"),"href":"http://m.china-pub.com/and/zt_mb/zt/2017_sj_songTxu_1.htm"},
    {"src":require("../images/banner2.jpg"),"href":"http://m.china-pub.com/and/zt_mb/zt/2017_sj_minjie_20170330_1.htm"},
    {"src":require("../images/banner3.jpg"),"href":"http://m.china-pub.com/and/zt_mb/zt/2017_sj_robot_20170327_1.htm"},
    {"src":require("../images/banner4.jpg"),"href":"http://m.china-pub.com/and/zt_mb/zt/2017_sj_srdz_20170328_1.htm"},
    {"src":require("../images/banner5.jpg"),"href":"http://m.china-pub.com/and/zt_mb/zt/2017_sj_jg_xlzd_20170314_1.htm"}
];
var navs=[
    {"href":"http://m.china-pub.com/touch/tbrowse.aspx","src":require("../images/nav_sort.png"),"des":"全部分类"},
    {"href":"http://m.china-pub.com/touch/touchsearch.aspx?keyword=%CC%D8%BC%DB%CA%E9","src":require("../images/nav_book.png"),"des":"特价书"},
    {"href":"http://m.china-pub.com/touch/touchsearchebook.aspx","src":require("../images/nav_ebook.png"),"des":"电子书"},
    {"href":"http://m.china-pub.com/touch/zt_mb/zt/2015_sj_1111pod_1.htm","src":require("../images/nav_pod.png"),"des":"按需印刷"},
    {"href":"http://m.china-pub.com/touch/touchborank.aspx","src":require("../images/nav_rank.png"),"des":"排行榜"},
    {"href":"http://m.china-pub.com/touch/touch-login.aspx","src":require("../images/nav_fav.png"),"des":"我的收藏"},
    {"href":"http://m.china-pub.com/touch/shiducenter.aspx","src":require("../images/nav_order.png"),"des":"试读赠书"},
    {"href":"http://m.china-pub.com/touch/touch-login.aspx","src":require("../images/nav_person.png"),"des":"个人中心"}
];
var newbooks=[
    {"href":"http://m.china-pub.com/touch/tbrowse.aspx","src":require("../images/book1.jpg"),"bookname":"go并发编程实战（第二版）","pricenew":"￥60.83","priceold":"￥79"},
    {"href":"http://m.china-pub.com/touch/tbrowse.aspx","src":require("../images/book2.jpg"),"bookname":"go并发编程实战（第二版）","pricenew":"￥60.83","priceold":"￥79"},
    {"href":"http://m.china-pub.com/touch/tbrowse.aspx","src":require("../images/book3.jpg"),"bookname":"go并发编程实战（第二版）","pricenew":"￥60.83","priceold":"￥79"}
];
var recommendbooks=[
    {"href":"http://m.china-pub.com/touch/tbrowse.aspx","src":require("../images/book4.jpg"),"bookname":"go并发编程实战（第二版）","pricenew":"￥60.83","priceold":"￥79"},
    {"href":"http://m.china-pub.com/touch/tbrowse.aspx","src":require("../images/book5.jpg"),"bookname":"go并发编程实战（第二版）","pricenew":"￥60.83","priceold":"￥79"},
    {"href":"http://m.china-pub.com/touch/tbrowse.aspx","src":require("../images/book6.jpg"),"bookname":"go并发编程实战（第二版）","pricenew":"￥60.83","priceold":"￥79"}
];
var homebooks=[
    {
        "book_module":"特价促销",
        "data":[
        {"href":"http://m.china-pub.com/touch/tbrowse.aspx","src":require("../images/book4.jpg"),"bookname":"go并发编程实战（第二版）","pricenew":"￥60.83","priceold":"￥79"},
        {"href":"http://m.china-pub.com/touch/tbrowse.aspx","src":require("../images/book5.jpg"),"bookname":"go并发编程实战（第二版）","pricenew":"￥60.83","priceold":"￥79"},
        {"href":"http://m.china-pub.com/touch/tbrowse.aspx","src":require("../images/book6.jpg"),"bookname":"go并发编程实战（第二版）","pricenew":"￥60.83","priceold":"￥79"}
    ]
    },
    {
        "book_module":"经济管理",
        "data":[
            {"href":"http://m.china-pub.com/touch/tbrowse.aspx","src":require("../images/book4.jpg"),"bookname":"go并发编程实战（第二版）","pricenew":"￥60.83","priceold":"￥79"},
            {"href":"http://m.china-pub.com/touch/tbrowse.aspx","src":require("../images/book5.jpg"),"bookname":"go并发编程实战（第二版）","pricenew":"￥60.83","priceold":"￥79"},
            {"href":"http://m.china-pub.com/touch/tbrowse.aspx","src":require("../images/book6.jpg"),"bookname":"go并发编程实战（第二版）","pricenew":"￥60.83","priceold":"￥79"}
        ]
    },
    {
        "book_module":"计算机",
        "data":[
            {"href":"http://m.china-pub.com/touch/tbrowse.aspx","src":require("../images/book4.jpg"),"bookname":"go并发编程实战（第二版）","pricenew":"￥60.83","priceold":"￥79"},
            {"href":"http://m.china-pub.com/touch/tbrowse.aspx","src":require("../images/book5.jpg"),"bookname":"go并发编程实战（第二版）","pricenew":"￥60.83","priceold":"￥79"},
            {"href":"http://m.china-pub.com/touch/tbrowse.aspx","src":require("../images/book6.jpg"),"bookname":"go并发编程实战（第二版）","pricenew":"￥60.83","priceold":"￥79"}
        ]
    },

];
var App=React.createClass({
    render: function () {
        return (
            <div>
                <Header></Header>
                <Banner images={images}></Banner>
                <Nav navs={navs}></Nav>
                <HomeTab newbooks={newbooks} recommendbooks={recommendbooks}/>
                <HomeBooks homebooks={homebooks}/>
            </div>
        )
    }
});
ReactDOM.render(<App/>,document.getElementById("app"));