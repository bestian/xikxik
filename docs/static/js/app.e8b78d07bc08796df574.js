webpackJsonp([1],{I03a:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"ui menu"},[s("router-link",{staticClass:"item",attrs:{to:"/"}},[s("i",{staticClass:"home icon"})]),this._m(0)],1),s("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"right menu"},[s("div",{staticClass:"item"},[s("iframe",{staticStyle:{border:"none",overflow:"hidden"},attrs:{src:"https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fxikxik.bestian.tw&layout=button_count&size=small&appId=485195848253155&width=64&height=20",width:"64",height:"20",scrolling:"no",frameborder:"0",allowTransparency:"true",allow:"encrypted-media"}})])])}]};var n=e("VU/8")({name:"App"},a,!1,function(t){e("I03a")},null,null).exports,l=e("/ocq"),r={name:"HelloWorld",data:function(){return{a:["海鷗","小貓","小狗","鯨魚","水獺","烏龜","狼","獾","地鼠","蝸牛","蝙蝠","大象","獅子"],n:["天空","大火","風","雷電","浮雲","山嵐","大海","石頭","漩渦","樹","草","花","磚牆","竹籬","碗","陶窯","泥土路","紙船","風箏","馬車","柏油路","電線竿","怪手","磚牆","竹籬","碗","紙船","風箏","馬車"],pla:["湖泊","森林","山脈","海島","平原","沼澤","高山","大地","河流","茅坑","木屋","稻田","五角大廈","金時堂","迪士尼樂園","恐怖谷","鬼屋","武道館","下水道","火車站","雲端","地獄","天堂","高速公路","外太空","星空下","美好的夏夜","午夜裡","光天化日下","大霧中","火堆旁"],vi:["站著","坐著","躺著","沉默","停止","持續轉動","睡著","獨自漫歩","靜坐","自爆","休息","自爆","狂吃拉麵","原地轉圈","表演單腳跳","寫程式","祈禱","靜坐","吹泡泡","玩耍","跳舞","做實驗","算數學"],vt:["毆打","拍打","載運","推動","舉起","移動","衝擊","包容","擁抱","輕撫","親吻","照顧","安慰","治癒","喚醒","擁抱","扶起","牽起","保護","溫暖","呵護","安撫","深愛著","固定","敲擊","抓緊","踐踏","踢","撕裂","壓倒","撞破","衝向","搥打","揉躪","敲擊","搖晃","扭轉","壓扁","攻擊","摔破"],c:["沒有人知道為什麼","原來","過了很久","時光飛逝","風吹過之後"],num:[1,2,3,5,10,100,200,1e3],per:["和尚","道士","外星人","剌客","魔法師","智者","戰士","修行人","小偷","工頭","國王","詩人","船長","路人甲","修女","超人","漁夫","農婦","小女孩","小男孩","小肥蟲","外星人","電漿生物","變形蟲","蜘蛛人","神奇寶貝","MIB探員","秘密客","宗教領袖","幽靈","政客","知名藝人","米老鼠","白雪公主","空空道人","假面超人","哈哈人","魔術師","小叮噹","武林高手","航海家","數學家","強盜","幫派份子","水果奶奶","微生物","黑傑克","紅魔鬼","黃飛鴻","夜叉","河童","孫悟空","豬八戒","富豪","恐怖份子","宅男","宅女"]}},methods:{p:function(t){var s=this[t];return s[Math.floor(Math.random()*s.length)]}}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hello"},[e("div",{staticClass:"ui container grid"},[t._m(0),e("div",{staticClass:"two column doubling row",attrs:{id:"poet"}},[e("div",{staticClass:"six wide column ui teal segment"},[e("h1",[t._v("拾詩氏")]),e("img",{attrs:{src:"http://lorempixel.com/400/200/"}}),e("div",{staticClass:"ui list"},[t._l([1,2],function(s){return e("div",{staticClass:"item"},[e("h2",[t._v(t._s(t.p("per"))+t._s(t.p("vt"))+t._s(t.p("a")))])])}),e("div",{staticClass:"item"},[e("h2",[t._v(t._s(t.p("a"))+t._s(t.p("vi"))+"、"+t._s(t.p("vi")))])]),e("div",{staticClass:"item"},[e("h2",[t._v(t._s(t.p("c")))])]),t._l([1,2],function(s){return e("div",{staticClass:"item"},[e("h2",[t._v(t._s(t.p("per"))+t._s(t.p("vt"))+t._s(t.p("a")))])])}),e("div",{staticClass:"item"},[e("h2",[t._v(t._s(t.p("a"))+t._s(t.p("vi"))+"、"+t._s(t.p("vi")))])]),e("div",{staticClass:"item"},[e("h2",[t._v("只剩下"+t._s(t.p("pla")))])])],2)]),e("div",{staticClass:"ten wide column left aligned ui black segment"},[e("h1",[t._v("小道小報 "+t._s((new Date).getYear()+"年"+(new Date).getMonth()+"月"+(new Date).getDate()+"日"))]),e("img",{attrs:{src:"http://lorempixel.com/300/200/"}}),e("h2",[t._v("(本報訊)")]),e("div",{staticClass:"ui bulleted divided list"},[e("div",{staticClass:"item"},[e("h3",[t._v(t._s(t.p("per"))+"昨天在"+t._s(t.p("pla"))+"旁"+t._s(t.p("vt"))+t._s(t.p("a"))+"，引來"+t._s(t.p("num"))+"人關注")])]),e("div",{staticClass:"item"},[e("h3",[t._v(t._s(t.p("per"))+"和"+t._s(t.p("per"))+"昨天竟然在"+t._s(t.p("pla"))+"旁"+t._s(t.p("vi"))+"了"+t._s(t.p("num"))+" 分鐘，大家都覺得很神奇")])]),e("div",{staticClass:"item"},[e("h3",[t._v("昨天夜裡"+t._s(t.p("per"))+"和"+t._s(t.p("per"))+"在"+t._s(t.p("pla"))+"旁彼此"+t._s(t.p("vt"))+"。他們相互"+t._s(t.p("vt"))+"又"+t._s(t.p("vt"))+"，最後決定一起"+t._s(t.p("vi")))])]),e("div",{staticClass:"item"},[e("h3",[t._v("最近避不露面的"+t._s(t.p("per"))+"終於出現了，他對外表示，連續"+t._s(t.p("num"))+"日他都在"+t._s(t.p("pla"))+t._s(t.p("vi")))])])])])]),e("div",{staticClass:"one column row"},[e("div",{staticClass:"column ui segment"},[e("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-7209910540592367","data-ad-slot":"8130621052"}})],1)]),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"one column row"},[s("div",{staticClass:"column"},[s("a",{staticClass:"ui huge green button",attrs:{onclick:"location.reload()"}},[this._v("再來！")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"one column row"},[s("div",{staticClass:"column"},[s("a",{staticClass:"ui huge green button",attrs:{onclick:"location.reload()"}},[this._v("再來！")])])])}]};var o=e("VU/8")(r,c,!1,function(t){e("Okit")},"data-v-0a3fcb4f",null).exports;i.a.use(l.a);var p=new l.a({routes:[{path:"/",name:"HelloWorld",component:o}]}),u=(e("kVq8"),e("pVtm")),v=e.n(u);i.a.use(e("B60x")),i.a.use(v.a.Adsense),i.a.use(v.a.InArticleAdsense),i.a.config.productionTip=!1,new i.a({el:"#app",router:p,components:{App:n},template:"<App/>"})},Okit:function(t,s){},kVq8:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.e8b78d07bc08796df574.js.map