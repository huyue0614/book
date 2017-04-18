import React from "react";
var Header =React.createClass({
    render: function () {
        return(
            <div className="header">
                <h1></h1>
                <div className="search">
                    <input type="text" placeholder="搜索"/>
                    <input type="button"/>
                </div>
                <div className="shopping">
                    <b>2</b>
                    <i></i>
                </div>
            </div>
        )
    }
});
module.exports=Header;