/**
 * Created by Administrator on 2017/4/8.
 */
import React from "react";
var $=require("jquery");
var HomeTab=React.createClass({
    getInitialState: function () {
      return{
          newbooks:this.props.newbooks,
          recommendbooks:this.props.recommendbooks
      }
    },
    tabListChange: function (id,con) {
        $(id).css("background","#ff6600").siblings().css("background","#fff");
        $(con).css("display","block").siblings().css("display","none")
    },
    componentDidMount: function () {
        $("#one").mouseover(this.tabListChange.bind(this,"#one","#con_one"));
        $("#two").mouseover(this.tabListChange.bind(this,"#two","#con_two"));
    },
    render: function () {
        return(
            <div className="home-tab">
                <div className="tab-list">
                    <span id="one">新书预售</span>
                    <span id="two">重磅推荐</span>
                </div>
                <div>
                    <div id="con_one" className="tab-container">
                        {
                            this.state.newbooks.map(function (item, index) {
                                return <div className="book_list" key={index}>
                                    <a href={item.href}>
                                        <img src={item.src} alt=""/>
                                        <div className="book_name">
                                            <p>{item.bookname}</p>
                                            <span className="new">{item.pricenew}</span>
                                            <span className="old">{item.priceold}</span>
                                        </div>
                                    </a>
                                </div>
                            })
                        }
                    </div>
                    <ul id="con_two" className="tab-container">
                        {
                            this.state.recommendbooks.map(function (item, index) {
                                return <div  className="book_list" key={index}>
                                    <a href={item.href}>
                                        <img src={item.src} alt=""/>
                                        <div className="book_name">
                                            <p>{item.bookname}</p>
                                            <span className="new">{item.pricenew}</span>
                                            <span className="old">{item.priceold}</span>
                                        </div>
                                    </a>
                                </div>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
});
module.exports=HomeTab;