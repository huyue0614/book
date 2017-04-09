/**
 * Created by Administrator on 2017/4/8.
 */
import React from "react";
var $=require("jquery");
var HomeBooks=React.createClass({
    getInitialState: function () {
        return{homebooks:this.props.homebooks}
    },
    loadMore:function (bookModule){
        var homebooks=this.state.homebooks;
        var obj=homebooks.find(function (item) {
            return item.book_module==bookModule;
        });
        $.ajax({
            url:require("./data.txt"),
            data:"json",
            success:  (result)=> {
                result=JSON.parse(result);
                var data=obj.data;
                obj.data=data.concat(result);
                homebooks=homebooks.map(function (item) {
                    if(item.book_module==obj.book_module){
                        return obj;
                    }else{
                        return item;
                    }
                });
                this.setState({homebooks});
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
                                <span className="book_more" onTouchStart={()=>{this.loadMore(item.book_module)}}>更多&gt;&gt;</span>
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