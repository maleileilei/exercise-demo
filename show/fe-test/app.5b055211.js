(function(t){function n(n){for(var s,r,a=n[0],c=n[1],l=n[2],h=0,f=[];h<a.length;h++)r=a[h],i[r]&&f.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(n);while(f.length)f.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],s=!0,a=1;a<e.length;a++){var c=e[a];0!==i[c]&&(s=!1)}s&&(o.splice(n--,1),t=r(r.s=e[0]))}return t}var s={},i={1:0},o=[];function r(n){if(s[n])return s[n].exports;var e=s[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var s in t)r.d(e,s,function(n){return t[n]}.bind(null,s));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var u=c;o.push([4,0]),e()})({"+sxe":function(t,n,e){"use strict";var s=e("s34J"),i=e.n(s);i.a},4:function(t,n,e){t.exports=e("Vtdi")},"5Q7h":function(t,n,e){t.exports=e.p+"assets/img/goods-img.742b62ec.png"},AVET:function(t,n,e){t.exports=e.p+"assets/img/img1.00b34076.png"},Hkmn:function(t,n,e){t.exports=e.p+"assets/img/img3.54c842b9.png"},Vtdi:function(t,n,e){"use strict";e.r(n);e("VRzm");var s=e("Kw5r"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("banner")],1)},o=[],r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"banner"},[e("div",{staticClass:"banner-left"},[e("div",{staticClass:"trends-info-content"},[t._m(0),e("ul",{staticClass:"info"},t._l(t.trendsInfo,function(n,s){return e("li",{key:s,on:{click:function(e){t.gotoLink(n.src)}}},[e("p",{staticClass:"info-content"},[t._v(t._s(n.content))]),e("p",{staticClass:"count"},[e("span",{staticClass:"number"},[t._v(t._s(n.count>99999?Math.floor(n.count/1e4)+"万":n.count))]),t._v("人气")])])})),t._m(1)]),e("div",{staticClass:"slider-content"},[e("slider",{attrs:{height:t.height,width:t.width,imgs:t.sliderImgs}})],1)]),e("div",{staticClass:"banner-right"},[e("span",{staticClass:"bg-shadow"}),e("div",{staticClass:"rttention-content"},[t._m(2),e("div",{staticClass:"rttention-info"},t._l(t.goods,function(n,s){return e("div",{key:s,staticClass:"goods",on:{click:function(e){t.gotoLink(n.src)}}},[e("div",{staticClass:"goods-img-content"},[e("img",{attrs:{src:n.img,alt:"",width:"80",height:"80"}})]),e("div",{staticClass:"goods-info"},[e("h1",{staticClass:"name"},[t._v(t._s(n.name))]),e("p",{staticClass:"price"},[t._v("原价 "+t._s(n.priceBefore>99999?Math.floor(n.priceBefore/1e4)+"万":n.priceBefore)+"元")]),e("div",{staticClass:"price-now"},[e("span",{staticClass:"price-now-icon"},[t._v(t._s(n.slogan))]),e("span",{staticClass:"price-now-num"},[t._v(t._s(n.priceNow>99999?Math.floor(n.priceNow/1e4)+"万":n.priceNow))])]),e("p",{staticClass:"des"},[t._v(t._s(n.count>99999?Math.floor(n.count/1e4)+"万":n.count)+"人"),e("span",{staticClass:"des-highlight"},[t._v("在抢购")])])])])}))])])])},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"title"},[e("span",{staticClass:"bg-title_trends_info"})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"footer"},[e("span",{staticClass:"bg-banner_left_footer_icon"}),e("div",{staticClass:"banner-left-footer-p"},[e("p",[e("span",[t._v("淘宝时装周")]),t._v("为你解读")]),e("p",[t._v("淘宝品牌服饰流行趋势")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"title"},[e("span",{staticClass:"bg-banner_right_title_icon"}),e("span",{staticClass:"bg-title_rttentidn"})])}],c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"slider",staticClass:"slider"},[e("div",{ref:"sliderContent",staticClass:"slider-content move-transition"},[t._l(t.imgs,function(n,s){return e("div",{key:s,staticClass:"img-content",on:{click:function(e){t.gotoLink(n.src)}}},[e("img",{attrs:{src:n.img,width:t.width,height:t.height}})])}),e("div",{staticClass:"img-content"},[e("img",{attrs:{src:t.imgLast,width:t.width,height:t.height}})])],2),e("ul",{staticClass:"btn-content"},t._l(t.imgs,function(n,s){return e("li",{key:s,staticClass:"btn",on:{mouseover:function(n){t.btnChangeImg(s)},mouseout:t.btnMoveStart}},[e("span",{class:{active:t.imgNow===s}},[t._v(t._s(s+1))])])}))])},l=[],u=(e("xfY5"),{props:{width:{type:Number},height:{type:Number},imgs:{type:Array}},data:function(){return{imgNow:0}},created:function(){this.imgLast=this.imgs[0].img,this.moveWidth=0,this.moveCount=0,this.haveTransition=!0},mounted:function(){var t=this,n=this.$refs.slider;n.style.width=this.width+"px",n.style.height=this.height+"px";var e=this.$refs.sliderContent,s=this.width*(this.imgs.length+1);e.style.width=s+"px";var i=function(){t.haveTransition||(e.className="slider-content move-transition",t.haveTransition=!0),t.moveCount++,t.moveCount===t.imgs.length?t.imgNow=0:t.imgNow=t.moveCount,t.moveWidth=t.width*t.moveCount,e.style.transform="translate3d(-".concat(t.moveWidth,"px, 0, 0)"),t.moveCount===t.imgs.length&&(t.changeFirst=setTimeout(function(){e.className="slider-content",t.moveWidth=0,t.moveCount=0,e.style.transform="translate3d(-".concat(t.moveWidth,"px, 0, 0)"),t.haveTransition=!1},500))};this.move=setInterval(i,1500),this.start=function(){this.move=setInterval(i,1500)}},methods:{btnChangeImg:function(t){var n=this.$refs.sliderContent;this.haveTransition||(n.className="slider-content move-transition",this.haveTransition=!0),clearInterval(this.move),clearTimeout(this.changeFirst),this.imgNow=t,this.moveCount=t,this.moveWidth=this.moveCount*this.width,n.style.transform="translate3d(-".concat(this.moveWidth,"px, 0, 0)")},btnMoveStart:function(){this.start()},gotoLink:function(t){window.open(t)}}}),h=u,f=(e("+sxe"),e("KHd+")),d=Object(f["a"])(h,c,l,!1,null,"f96d35f4",null),m=d.exports,p={data:function(){return{height:270,width:510,sliderImgs:[{img:e("AVET"),src:"#"},{img:e("hrVi"),src:"#"},{img:e("Hkmn"),src:"#"}],trendsInfo:[{content:"胳膊粗小腿粗怎么穿！",count:9719945,src:"#"},{content:"胳膊粗小腿粗怎么穿！胳膊粗小腿粗怎么穿！",count:4719945,src:"#"},{content:"胳膊粗小腿粗怎么穿！",count:1234511,src:"#"},{content:"胳膊粗小腿粗怎么穿讷讷呢！",count:893455,src:"#"},{content:"胳膊粗小腿粗怎么穿！",count:12345,src:"#"},{content:"胳膊粗小腿粗怎么穿！",count:12345,src:"#"}],goods:[{img:e("5Q7h"),name:"SUPER LOVER包",priceBefore:8888888,slogan:"6折",priceNow:999999,count:1234566,src:"#"},{img:e("5Q7h"),name:"SUPER包包包包",slogan:"现价",priceBefore:8888,priceNow:498,count:74566,src:"#"}]}},methods:{gotoLink:function(t){window.open(t)}},components:{Slider:m}},g=p,v=(e("b6RQ"),Object(f["a"])(g,r,a,!1,null,"7187262a",null)),_=v.exports,C={name:"app",components:{Banner:_}},b=C,w=(e("ZL7j"),Object(f["a"])(b,i,o,!1,null,null,null)),y=w.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(y)}}).$mount("#app")},ZL7j:function(t,n,e){"use strict";var s=e("slcd"),i=e.n(s);i.a},b6RQ:function(t,n,e){"use strict";var s=e("gqT2"),i=e.n(s);i.a},gqT2:function(t,n,e){},hrVi:function(t,n,e){t.exports=e.p+"assets/img/img2.920db420.png"},s34J:function(t,n,e){},slcd:function(t,n,e){}});
//# sourceMappingURL=app.5b055211.js.map