/**
 * Created by Administrator on 2017/4/7.
 */
import React from "react";
var $ = require('jquery');
//require("../../node_modules/swiper/dist/css/swiper.min.css");
//var Swiper=require("../../node_modules/swiper/dist/js/swiper.min");
require('../lib/swiper.min.css');
var Swiper=require('../lib/swiper.min.js');
var Banner =React.createClass({
    getInitialState: function () {
      return {images:this.props.images}
    },
    componentDidMount: function () {
        new Swiper(".banner .swiper-container",{
            loop:true,
            pagination:".swiper-pagination",
            paginationClickable:true,
            autoplay:3000,
            autoplayDisableOnInteraction:false
        })
    },
    render: function () {
        return(
            <div className="banner">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.images.map(function (item, index) {
                                return <div className="swiper-slide" key={index}>
                                    <a href={item.href}><img src={item.src} alt="" className="img"/></a>
                                </div>
                            })
                        }
                    </div>
                <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
});
module.exports=Banner;