webpackJsonp([1],{"4A6e":function(t,s){},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("7+uW"),a={name:"App",localStorage:{xikxik:{type:Object,default:{a:["海鷗","小貓","小狗","鯨魚","水獺","烏龜","狼","獾","地鼠","蝸牛","蝙蝠","大象","獅子"],n:["天空","大火","風","雷電","浮雲","山嵐","大海","石頭","漩渦","樹","草","花","磚牆","竹籬","碗","陶窯","泥土路","紙船","風箏","馬車","柏油路","電線竿","怪手","磚牆","竹籬","碗","紙船","風箏","馬車"],natureS:["天","雲","海","山","月亮","風","大雨","太陽","雷","閃電","雲豹","老虎","黑熊","山豬","飛鼠","巫師","神仙"],pla:["湖泊","森林","山脈","海島","平原","沼澤","高山","大地","河流","茅坑","木屋","稻田","五角大廈","金時堂","迪士尼樂園","恐怖谷","鬼屋","武道館","下水道","火車站","雲端","地獄","天堂","高速公路","外太空","星空下","美好的夏夜","午夜裡","光天化日下","大霧中","火堆旁"],vi:["站著","坐著","躺著","沉默","停止","持續轉動","睡著","獨自漫歩","靜坐","自爆","休息","自爆","狂吃拉麵","原地轉圈","表演單腳跳","寫程式","祈禱","靜坐","吹泡泡","玩耍","跳舞","做實驗","算數學"],peaceVI:["等待","沉默","凝結","睡去","微笑","祈禱"],violenceVI:["崩潰","倒下","碎裂","死了","破了","消失無蹤"],vt:["毆打","拍打","載運","推動","舉起","移動","衝擊","包容","擁抱","輕撫","親吻","照顧","安慰","治癒","喚醒","擁抱","扶起","牽起","保護","溫暖","呵護","安撫","深愛著","固定","敲擊","抓緊","踐踏","踢","撕裂","壓倒","撞破","衝向","搥打","揉躪","敲擊","搖晃","扭轉","壓扁","攻擊","摔破"],peaceVT:["輕撫","親吻","照顧","安慰","治癒","喚醒","擁抱","扶起","牽起","保護","溫暖","呵護","安撫","深愛著"],violenceVT:["拍打","踐踏","踢","撕裂","壓倒","撞破","衝向","搥打","揉躪","敲擊","搖晃","扭轉","壓扁","攻擊","摔破"],c:["沒有人知道為什麼","原來","過了很久","時光飛逝","風吹過之後","這就是，世界的夢囈","於是，我們也生生不息","無常，還是無常","喔喔喔","妙哉，善哉"],num:[1,2,3,5,10,20,30,50,100,200,500],per:["和尚","道士","外星人","剌客","魔法師","智者","戰士","修行人","小偷","工頭","國王","詩人","船長","路人甲","修女","超人","漁夫","農婦","小女孩","小男孩","小肥蟲","外星人","電漿生物","變形蟲","蜘蛛人","神奇寶貝","MIB探員","秘密客","宗教領袖","幽靈","政客","知名藝人","米老鼠","白雪公主","空空道人","假面超人","哈哈人","魔術師","小叮噹","武林高手","航海家","數學家","強盜","幫派份子","水果奶奶","微生物","黑傑克","紅魔鬼","黃飛鴻","夜叉","河童","孫悟空","豬八戒","富豪","恐怖份子","宅男","宅女"],adj:["不起眼的","爆笑的","詭異的","愚蠢的","引人省思的","意義深遠的","巨大的","寶貴的","奇特的"],object:["雞蛋","釘子","小刀","骨頭","定時炸彈","水晶球","原子筆","絲巾","符咒","電子計算機","電腦","地球儀","綿被","掃把","鋤頭","石頭","石油","玩偶","滑鼠","啟蒙導師牌","竹筒飯","香蕉","花"],natureO:["石頭","土地","湖","小溪","雲","沖積扇","荔枝","高麗菜","野薑花","相思樹","芒草","柳樹","毛毛蟲","蚯蚓","蟑螂","烏龜","斑馬","貓","黃牛","水牛","綿羊"],civilO:["磚牆","竹籬","茅坑","木屋","稻田","碗","陶窯","泥土路","紙船","風箏","馬車","柏油路","電線竿","怪手","磚牆","竹籬","茅坑","木屋","稻田","碗"]}}},data:function(){return{}},methods:{add:function(t,s){var i=this.$localStorage.xikxik;i[t].push(s),this.$localStorage.set("xikxik",i),this.$forceUpdate()},del:function(t,s){var i=this.$localStorage.xikxik;i[t]=i[t].filter(function(t){return t!==s}),this.$localStorage.set("xikxik",i),this.$forceUpdate()}},mounted:function(){}},n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"ui labeled icon menu"},[s("router-link",{staticClass:"item",attrs:{to:"/"}},[s("i",{staticClass:"home icon"}),this._v("首頁")]),s("router-link",{staticClass:"item",attrs:{to:"/custom"}},[s("i",{staticClass:"pencil alternate icon"}),this._v("自訂元素")]),this._m(0)],1),s("router-view",{attrs:{xikxik:this.$localStorage.xikxik},on:{add:this.add,del:this.del}})],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"right menu"},[s("a",{staticClass:"item",attrs:{href:"https://github.com/bestian/xikxik/",target:"_blank"}},[s("i",{staticClass:"github icon"}),this._v("專案網址")]),s("div",{staticClass:"item"},[s("iframe",{staticStyle:{border:"none",overflow:"hidden"},attrs:{src:"https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fxikxik.bestian.tw&layout=button_count&size=small&appId=485195848253155&width=70&height=20",width:"70",height:"20",scrolling:"no",frameborder:"0",allowTransparency:"true",allow:"encrypted-media"}})])])}]};var l=i("VU/8")(a,n,!1,function(t){i("fqtE")},null,null).exports,c=i("/ocq"),o={name:"HelloWorld",data:function(){return{}},props:["xikxik"],methods:{p:function(t){var s=this.xikxik[t];return s[Math.floor(Math.random()*s.length)]}}},r={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"hello"},[i("div",{staticClass:"ui container grid"},[t._m(0),i("div",{staticClass:"two column doubling row",attrs:{id:"poet"}},[i("div",{staticClass:"six wide column ui teal segment"},[i("h1",[t._v("拾詩氏")]),i("hr"),i("div",{staticClass:"ui list"},[t._l([1,2],function(s){return i("div",{staticClass:"item"},[i("h2",[t._v(t._s(t.p("per"))+t._s(t.p("peaceVT"))+t._s(t.p("natureO")))])])}),i("div",{staticClass:"item"},[i("h2",[t._v(t._s(t.p("a"))+t._s(t.p("vi"))+"、"+t._s(t.p("vi")))])]),i("div",{staticClass:"item"},[i("h2",[t._v(t._s(t.p("c")))])]),t._l([1,2],function(s){return i("div",{staticClass:"item"},[i("h2",[t._v(t._s(t.p("natureS"))+t._s(t.p("vt"))+t._s(t.p("natureO")))])])}),i("div",{staticClass:"item"},[i("h2",[t._v(t._s(t.p("a"))+t._s(t.p("peaceVI"))+"、"+t._s(t.p("peaceVI")))])]),i("div",{staticClass:"item"},[i("h2",[t._v("只剩下"+t._s(t.p("pla")))])])],2)]),i("div",{staticClass:"ten wide column left aligned ui black segment"},[i("h1",[t._v("小道小報 "+t._s((new Date).getYear()+"年"+(new Date).getMonth()+"月"+(new Date).getDate()+"日"))]),i("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-7209910540592367","data-ad-slot":"8130621052"}}),i("h2",[t._v("(本報訊)")]),i("div",{staticClass:"ui bulleted celled list"},[i("div",{staticClass:"item"},[i("h3",[t._v("昨日"+t._s(t.p("per"))+"被指控在"+t._s(t.p("pla"))+"放置"+t._s(t.p("adj"))+t._s(t.p("object"))+"，他鄭重否認。告密者"+t._s(t.p("per"))+"表示，他已有充份證據，將於"+t._s(t.p("num"))+"日後公諸於世。")])]),i("div",{staticClass:"item"},[i("h3",[t._v(t._s(t.p("per"))+"昨天在"+t._s(t.p("pla"))+"旁"+t._s(t.p("vt"))+t._s(t.p("a"))+"，引來"+t._s(t.p("num"))+"人關注")])]),i("div",{staticClass:"item"},[i("h3",[t._v(t._s(t.p("per"))+"和"+t._s(t.p("per"))+"昨天竟然在"+t._s(t.p("pla"))+"旁"+t._s(t.p("vi"))+"了"+t._s(t.p("num"))+" 分鐘，大家都覺得很神奇")])]),i("div",{staticClass:"item"},[i("h3",[t._v("昨天"+t._s(t.p("per"))+"和"+t._s(t.p("per"))+"在"+t._s(t.p("pla"))+"旁彼此"+t._s(t.p("vt"))+"。他們相互"+t._s(t.p("vt"))+"了"+t._s(t.p("num"))+"分鐘，最後決定一起"+t._s(t.p("vi")))])]),i("div",{staticClass:"item"},[i("h3",[t._v("最近避不露面的"+t._s(t.p("per"))+"終於出現了，他對外表示，連續"+t._s(t.p("num"))+"日他都在"+t._s(t.p("pla"))+t._s(t.p("vi")))])]),i("div",{staticClass:"item"},[i("h3",[t._v("昨日"+t._s(t.p("per"))+"宣稱，他和"+t._s(t.p("per"))+"在遺傳上是接近的。對方表示，這種說法純粹是為了要繼承"+t._s(t.p("adj"))+t._s(t.p("object"))+"。")])])])],1)]),i("div",{staticClass:"one column row"},[i("div",{staticClass:"column ui segment"},[i("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-7209910540592367","data-ad-slot":"8130621052"}})],1)]),t._m(1),t._m(2)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"one column row"},[s("div",{staticClass:"column"},[s("a",{staticClass:"ui huge green button",attrs:{onclick:"location.reload()"}},[this._v("再來！")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"one column row"},[s("div",{staticClass:"column"},[s("a",{staticClass:"ui huge green button",attrs:{onclick:"location.reload()"}},[this._v("再來！")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"one column row"},[s("div",{staticClass:"column"},[s("div",{staticClass:"fb-comments",attrs:{"data-href":"http://xikxik.bestian.tw","data-width":"","data-numposts":"5"}})])])}]};var u=i("VU/8")(o,r,!1,function(t){i("4A6e")},"data-v-ea0a9b42",null).exports,d={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"hello"},[i("div",{staticClass:"ui grid"},[i("div",{staticClass:"ui two column row"},[i("div",{staticClass:"column ui segment"},t._l(Object.keys(t.xikxik),function(s){return i("div",{staticClass:"ui horizontal list"},[i("div",{staticClass:"item"},[i("h3",[i("a",{staticClass:"ui big button",class:[t.myList!==s?"blue":"green"],on:{click:function(i){t.myList=s}}},[t._v(t._s(s))])])])])}),0),i("div",{staticClass:"column ui segment"},[i("div",{staticClass:"ui horizontal list"},[i("div",{staticClass:"item ui form"},[i("div",{staticClass:"ui input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.myText,expression:"myText"}],domProps:{value:t.myText},on:{input:function(s){s.target.composing||(t.myText=s.target.value)}}}),i("a",{staticClass:"ui green button",on:{click:function(s){return t.add(t.myList,t.myText)}}},[t._v("+")])])]),i("hr"),t._l(t.xikxik[t.myList],function(s){return s?i("div",{staticClass:"item"},[i("h3",[t._v(t._s(s)),i("a",{staticClass:"ui red button",on:{click:function(i){return t.del(t.myList,s)}}},[t._v("x")])])]):t._e()})],2)])])])])},staticRenderFns:[]};var p=i("VU/8")({name:"HelloWorld",data:function(){return{myText:"",myList:"a"}},props:["xikxik"],methods:{add:function(t,s){this.$emit("add",t,s),this.myText=""},del:function(t,s){this.$emit("del",t,s)}}},d,!1,function(t){i("PHwz")},"data-v-85867a60",null).exports;e.a.use(c.a);var m=new c.a({routes:[{path:"/",name:"HelloWorld",component:u},{path:"/custom",name:"Custom",component:p}]}),v=(i("kVq8"),i("pVtm")),_=i.n(v),h=i("UnSZ"),f=i.n(h);e.a.use(f.a),e.a.use(i("B60x")),e.a.use(_.a.Adsense),e.a.use(_.a.InArticleAdsense),e.a.config.productionTip=!1,new e.a({el:"#app",router:m,components:{App:l},template:"<App/>"})},PHwz:function(t,s){},fqtE:function(t,s){},kVq8:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.fb0680b8895f7deae672.js.map