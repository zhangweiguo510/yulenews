(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tarbar/home/home"],{"304d":function(t,e,n){"use strict";n.r(e);var a=n("8ec7"),s=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=s.a},3462:function(t,e,n){"use strict";n.r(e);var a=n("568d"),s=n("304d");for(var i in s)"default"!==i&&function(t){n.d(e,t,(function(){return s[t]}))}(i);n("d18b");var o,u=n("f0c5"),c=Object(u["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=c.exports},"568d":function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={pulldown:function(){return n.e("components/pulldown/pulldown").then(n.bind(null,"9a81"))},loadMore:function(){return n.e("components/loadMore/loadMore").then(n.bind(null,"57bc"))}},s=function(){var t=this,e=t.$createElement;t._self._c},i=[]},"730d":function(t,e,n){"use strict";(function(t){n("ba2e");a(n("66fd"));var e=a(n("3462"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"8ec7":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(n("3ac1"));function s(t){return t&&t.__esModule?t:{default:t}}var i=function(){n.e("components/home/newsCell").then(function(){return resolve(n("3c79"))}.bind(null,n)).catch(n.oe)},o=function(){n.e("components/loadMore/loadMore").then(function(){return resolve(n("57bc"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/pulldown/pulldown").then(function(){return resolve(n("9a81"))}.bind(null,n)).catch(n.oe)},c={components:{newsCell:i,loadMore:o,pulldown:u},data:function(){return{tabList:[],tabIndex:0,toView:"",page:1,size:10,newsid:"",newsList:[],footerbottom:0,top:190,navigateFlag:!1}},onLoad:function(){this.getTabsData(),this.loadTabData(),this.footerbottom=document.getElementsByTagName("uni-tabbar")[0].offsetHeight+"px"},methods:{getTabsData:function(){var t=this;this.request({url:a.default.getTabList,success:function(e){e.data.forEach((function(t){t.loadMoreStatus=0})),t.tabList=e.data}})},onTabTap:function(t){var e=this;this.tabIndex=t,this.page=1,this.tabList.length>0&&(this.tabList[this.tabIndex].loadMoreStatus=0),this.newsid=this.tabList.length>0?this.tabList[this.tabIndex].newsid:"all",this.request({url:a.default.getNewsList+"".concat(this.newsid,"/").concat(this.page,"/").concat(this.size),success:function(t){e.newsList=t.data,e.$refs.pdr&&e.$refs.pdr.endPulldownRefresh()}})},onSwiperChange:function(t){this.tabIndex=t.target.current||t.detail.current,this.toView=this.tabList[this.tabIndex].id},loadTabData:function(){var t=this;this.page=1,this.tabList.length>0&&(this.tabList[this.tabIndex].loadMoreStatus=0),this.newsid=this.tabList.length>0?this.tabList[this.tabIndex].newsid:"all",this.request({url:a.default.getNewsList+"".concat(this.newsid,"/").concat(this.page,"/").concat(this.size),success:function(e){t.newsList=e.data,t.$refs.pdr&&t.$refs.pdr.endPulldownRefresh()}})},loadMoreData:function(){var t=this;this.tabList[this.tabIndex].loadMoreStatus=1,this.page++,this.request({url:a.default.getNewsList+"".concat(this.newsid,"/").concat(this.page,"/").concat(this.size),success:function(e){if(!(e.data.length>0))return t.tabList[t.tabIndex].loadMoreStatus=2,!1;e.data.forEach((function(e){t.newsList.push(e)})),t.tabList[t.tabIndex].loadMoreStatus=0}})},handleCellTap:function(e){var n=this;this.navigateFlag||(this.navigateFlag=!0,t.navigateTo({url:"./article?url=".concat(e)}),setTimeout((function(){n.navigateFlag=!1}),200))}}};e.default=c}).call(this,n("543d")["default"])},d18b:function(t,e,n){"use strict";var a=n("d367"),s=n.n(a);s.a},d367:function(t,e,n){}},[["730d","common/runtime","common/vendor"]]]);