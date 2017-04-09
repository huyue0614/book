/**
 * Created by Administrator on 2017/4/8.
 */
import React from "react";
var $=require("jquery");
var HomeBooks=React.createClass({
    getInitialState: function () {
        return{homebooks:this.props.homebooks}
    },
    loadMore:function (){
        $.ajax({
            url:require("./data.json"),
            data:"json",
            success: function (result) {
                console.log(result)
            },
            error: function (error) {
                console.log(error)
            }
        })
    },
    render: function () {
        return(
            <ul className="home-books">
                {
                    this.state.homebooks.map((item, index)=> {
                        return <li key={index}>
                            <div className="book_header">
                                <span className="book_module">{item.book_module}</span>
                                <span className="book_more" onMouseOver={()=>{this.loadMore()}}>更多&gt;&gt;</span>
                            </div>
                            {
                                item.data.map(function (item, index) {
                                    return (<div className="book_list" key={index}>
                                        <a href={item.href}>
                                            <img src={item.src} alt=""/>
                                            <div className="book_name">
                                                <p>{item.bookname}</p>
                                                <span className="new">{item.pricenew}</span>
                                                <span className="old">{item.priceold}</span>
                                            </div>
                                        </a>
                                    </div>)
                                })
                            }
                        </li>
                    })
                }
            </ul>
        )
    }
});
module.exports=HomeBooks;