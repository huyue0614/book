import React from "react";
var Nav=React.createClass({
    getInitialState: function () {
      return {navs:this.props.navs}
    },
    render: function () {
        return(
            <div className="nav">
                {
                    this.state.navs.map(function (item, index) {
                        return <a href={item.href} key={index}>
                            <img src={item.src} alt=""/>
                            <span>{item.des}</span>
                        </a>
                    })
                }
            </div>
        )
    }
});
module.exports=Nav;