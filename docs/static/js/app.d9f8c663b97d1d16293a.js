webpackJsonp([0],{"F/uF":function(t,e){},HuwF:function(t,e){},KMkc:function(t,e){},Kyfo:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view"),t._v(" "),s("div",{staticClass:"js_dialog",style:t.dis,attrs:{id:"iosDialog2"}},[s("div",{staticClass:"weui-mask"}),t._v(" "),s("div",{staticClass:"weui-dialog"},[s("div",{staticClass:"weui-dialog__bd"},[t._v(t._s(t.ttt))]),t._v(" "),s("div",{staticClass:"weui-dialog__ft"},[s("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t.close}},[t._v("确定")])])])])],1)},staticRenderFns:[]};var l=s("VU/8")({name:"App",data:function(){return{dis:"display:none",ttt:""}},methods:{open:function(t){this.dis="display:block",this.ttt=t},close:function(){this.dis="display:none"}}},a,!1,function(t){s("V4zg")},null,null).exports,n=s("/ocq"),c={name:"index",data:function(){return{title:"欢迎使用iFuture",phone:"",app:null}},created:function(){var t=localStorage.getItem("phone");t&&t.length&&(this.phone=t),this.app=this.$root.$children[0]},methods:{gohref:function(){if(!/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(this.phone))return this.app.open("请输入有效的手机号码！"),!1;localStorage.setItem("phone",this.phone),this.$router.push("/login/"+this.phone)}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("div",{staticClass:"weui-cells__title title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"weui-cells"},[s("div",{staticClass:"weui-cell weui-cell_select weui-cell_select-before"},[t._m(0),t._v(" "),s("div",{staticClass:"weui-cell__bd"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"weui-input",attrs:{type:"number",pattern:"[0-9]*",placeholder:"请输入号码"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"weui-btn-area"},[s("a",{staticClass:"weui-btn weui-btn_primary",attrs:{href:"javascript:"},on:{click:t.gohref}},[t._v("下一步")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-cell__hd"},[e("select",{staticClass:"weui-select",attrs:{name:"select2"}},[e("option",{attrs:{value:"1"}},[this._v("+86")])])])}]};var o=s("VU/8")(c,r,!1,function(t){s("p1T/")},"data-v-421d942c",null).exports,v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("div",{staticClass:"weui-cells__title title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"weui-cells"},[s("div",{staticClass:"weui-cell weui-cell_select weui-cell_select-before"},[t._m(0),t._v(" "),s("div",{staticClass:"weui-cell__bd"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"weui-input",attrs:{type:"number",pattern:"[0-9]*",placeholder:"请输入号码",disabled:"true"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),t._m(1)])]),t._v(" "),s("div",{staticClass:"viewCode"},[s("div",{staticClass:"weui-flex"},[s("div",{staticClass:"weui-flex__item"},[s("div",{staticClass:"placeholder"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.a1,expression:"a1"}],ref:"a1",staticClass:"weui-input weui-inputs",attrs:{type:"text",pattern:"[0-9]*",maxlength:"1"},domProps:{value:t.a1},on:{input:function(e){e.target.composing||(t.a1=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"weui-flex__item"},[s("div",{staticClass:"placeholder"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.a2,expression:"a2"}],ref:"a2",staticClass:"weui-input weui-inputs",attrs:{type:"text",pattern:"[0-9]*",maxlength:"1"},domProps:{value:t.a2},on:{input:function(e){e.target.composing||(t.a2=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"weui-flex__item"},[s("div",{staticClass:"placeholder"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.a3,expression:"a3"}],ref:"a3",staticClass:"weui-input weui-inputs",attrs:{type:"text",pattern:"[0-9]*",maxlength:"1"},domProps:{value:t.a3},on:{input:function(e){e.target.composing||(t.a3=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"weui-flex__item"},[s("div",{staticClass:"placeholder"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.a4,expression:"a4"}],ref:"a4",staticClass:"weui-input weui-inputs",attrs:{type:"text",pattern:"[0-9]*",maxlength:"1"},domProps:{value:t.a4},on:{input:function(e){e.target.composing||(t.a4=e.target.value)}}})])])])]),t._v(" "),s("div",{staticClass:"weui-btn-area"},[s("a",{staticClass:"weui-btn weui-btn_primary",attrs:{href:"javascript:"},on:{click:function(e){t.gohref(1)}}},[t._v("学生登录")]),t._v(" "),s("a",{staticClass:"weui-btn weui-btn_primary",attrs:{href:"javascript:"},on:{click:function(e){t.gohref(2)}}},[t._v("代理登录")])]),t._v(" "),s("div",{staticClass:"weui-footer weui-footer_fixed-bottom"},[s("label",{staticClass:"weui-agree",attrs:{for:"weuiAgree"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.ck,expression:"ck"}],staticClass:"weui-agree__checkbox",attrs:{type:"checkbox",disabled:""},domProps:{checked:Array.isArray(t.ck)?t._i(t.ck,null)>-1:t.ck},on:{change:function(e){var s=t.ck,i=e.target,a=!!i.checked;if(Array.isArray(s)){var l=t._i(s,null);i.checked?l<0&&(t.ck=s.concat([null])):l>-1&&(t.ck=s.slice(0,l).concat(s.slice(l+1)))}else t.ck=a}}}),t._v(" "),t._m(2)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-cell__hd"},[e("select",{staticClass:"weui-select",attrs:{name:"select2"}},[e("option",{attrs:{value:"1"}},[this._v("+86")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-cell__ft"},[e("button",{staticClass:"weui-vcode-btn"},[this._v("获取验证码")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"weui-agree__text"},[this._v("\n                  阅读并同意"),e("a",{attrs:{href:"javascript:void(0);"}},[this._v("《IFuture用户协议》")])])}]};var u=s("VU/8")({name:"login",data:function(){return{title:"发送验证码",phone:this.$route.params.id,ck:!0,a1:"",a2:"",a3:"",a4:""}},methods:{gohref:function(t){var e=null;e=1==t?"/content":"/list",this.$router.push({path:e})}},watch:{a1:function(t){t.length&&this.$refs.a2.focus()},a2:function(t){t.length?this.$refs.a3.focus():this.$refs.a1.focus()},a3:function(t){t.length?this.$refs.a4.focus():this.$refs.a2.focus()},a4:function(t){t.length||this.$refs.a3.focus()}}},v,!1,function(t){s("kKgD")},"data-v-2cd7380a",null).exports,_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page",class:{overh:t.vis}},[s("div",{staticClass:"weui-cells__title title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"weui-cells"},[s("div",{staticClass:"weui-cell weui-cell_select weui-cell_select-after"},[t._m(0),t._v(" "),s("div",{staticClass:"weui-cell__bd"},[s("select",{staticClass:"weui-select",attrs:{name:"select2",placeholder:"学校",disabled:"add"!=t.type}},[s("option",{attrs:{value:"1"}},[t._v("中国")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("美国")]),t._v(" "),s("option",{attrs:{value:"3"}},[t._v("英国")])])])]),t._v(" "),s("div",{staticClass:"weui-cell weui-cell_select weui-cell_select-after"},[t._m(1),t._v(" "),s("div",{staticClass:"weui-cell__bd"},[s("select",{staticClass:"weui-select myselect",attrs:{name:"select2",placeholder:"专业名称",disabled:"add"!=t.type}},[s("option",{attrs:{value:"1"}},[t._v("中国")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("美国")]),t._v(" "),s("option",{attrs:{value:"3"}},[t._v("英国")])]),t._v(" "),s("select",{staticClass:"weui-select myselect",attrs:{name:"select2",placeholder:"专业名称",disabled:"add"!=t.type}},[s("option",{attrs:{value:"1"}},[t._v("中国")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("美国")]),t._v(" "),s("option",{attrs:{value:"3"}},[t._v("英国")])])])])]),t._v(" "),s("div",{staticClass:"weui-cells__title"},[t._v("大学内容")]),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"weui-cells__title"},[t._v("专业内容  "),s("span",{staticClass:"fblue",on:{click:function(e){t.vis=!0}}},[t._v("内容样例")])]),t._v(" "),t._m(3),t._v(" "),s("div",{staticClass:"weui-btn-area"},[s("a",{staticClass:"weui-btn weui-btn_primary",attrs:{href:"javascript:"}},[t._v(t._s("add"==t.type?"提交":"修改"))])]),t._v(" "),t.vis?s("div",{staticClass:"bodytext"},[s("p",[t._v("专业名称 ：食品科学--食品质量与安全专业；Food safety & quality")]),s("p",[t._v("吐槽与感悟：除了理论课，我们专业的实验课就是在厨房做饭，烤个蛋糕、饼干啊，做个巧克力、酸奶、罐头之类的，主要是了解每种原料的特质和一些特性。为了了解不同面粉的特性，我们会分成小组，每个组获得一种面粉，但是不告诉你是什么面粉（适于做面包的，适于烤饼干的等等）然后大家都用自己手里的面粉烤面包和饼干，然后成品感官分析，最后推测出每组是哪种面粉。")]),s("p",[t._v("当然，我们为了专业也有很大牺牲的，比如酿酒课的感官分析，需要去系里的小酒吧，面前摆满各种酒，红酒黄酒白酒啤酒，每种都要喝，每种都要记录，一节课下来，不醉不归啊。@灰色泰迪熊 说，以后出去喝酒，醉了回来，碰到导师，冲他喷着满嘴酒气，然后自豪的说，老师，我刚自习回来。")]),s("p",[t._v("再吐槽，很多人说：“你们学食品的是不是都会做饭啊？”于是，我们系的系服标语就是这样的“We are food scientists, We are not FxxKING chefs !!!”")])]):t._e(),t._v(" "),t.vis?s("div",{staticClass:"bodytext_after"},[s("i",{staticClass:"weui-icon-cancel",on:{click:function(e){t.vis=!1}}})]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-cell__hd"},[e("label",{staticClass:"weui-label",attrs:{for:""}},[this._v("大学")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-cell__hd"},[e("label",{staticClass:"weui-label",attrs:{for:""}},[this._v("专业")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-cells weui-cells_form"},[e("div",{staticClass:"weui-cell"},[e("div",{staticClass:"weui-cell__bd"},[e("textarea",{staticClass:"weui-textarea",attrs:{placeholder:"请对你的学校发表真实的评价，吐槽的点建议如下：1.选择：为嘛来这个学校？是自己喜欢的学校吗？2.生活：校园风景美吗？学校食堂怎么样？宿舍住的舒服吗？图书馆如何?运动场地多么？社团活动咋样？大学生活的方方面面，一一说出来！3.收获：你的大学带给你最大的收获是什么？有什么需要感谢你的大学么？4.不足：在你的大学最不喜欢的是什么？有没有一些让你忍不住吐槽的点？……5.其他：大学里美好或糟糕的那些记忆，写下来，莫忘记！",rows:"3"}}),this._v(" "),e("div",{staticClass:"weui-textarea-counter"},[e("span",[this._v("0")]),this._v("/200")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-cells weui-cells_form"},[e("div",{staticClass:"weui-cell"},[e("div",{staticClass:"weui-cell__bd"},[e("textarea",{staticClass:"weui-textarea",attrs:{placeholder:"请对你的专业发表真实的评价，吐槽的点建议如下：1.选择：为嘛读这个专业？觉得有意思吗？会转专业吗？2.课程：有意思/没意思课程有哪些？学习难度怎么样？挂科率高的有哪些课？有什么需要注意的？3.就业：师兄师姐们主要的就业行业、从事的职业有哪些？就业率怎么样？有什么需要注意的？4.生活：男女比例怎么样？单身率高不高？要经常熬夜赶报告吗？生活得苦逼吗？5.收获：学这个专业最喜欢的是什么？学到了什么？收获了什么？可以是知识、技能或者其他，比如一个好老师，一个女朋友等等。6.不足：学这个专业最讨厌啥？最不喜欢的是什么？所有你痛恨的……都写出来！7.其他：快乐或苦逼的，你能想到的，anyway，随你评论！字数最少500字",rows:"3"}}),this._v(" "),e("div",{staticClass:"weui-textarea-counter"},[e("span",[this._v("0")]),this._v("/200")])])])])}]};var d=s("VU/8")({name:"content1",data:function(){return{title:"提交内容",type:"edite",vis:!1}}},_,!1,function(t){s("Kyfo")},"data-v-13a4c2f8",null).exports,p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("div",{staticClass:"weui-cells__title title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"page__bd page__bd_spacing"},[s("div",{staticClass:"weui-flex"},[s("div",{staticClass:"weui-flex__item"},[s("div",{staticClass:"placeholder",on:{click:function(e){t.gohref(1)}}},[s("p",{staticClass:"tit"},[t._v("提交")]),t._v("\n                  1\n              ")])]),t._v(" "),s("div",{staticClass:"weui-flex__item"},[s("div",{staticClass:"placeholder",on:{click:function(e){t.gohref(1)}}},[s("p",{staticClass:"tit"},[t._v("采用")]),t._v("\n                  1\n                  ")])]),t._v(" "),t._m(0),t._v(" "),t._m(1)])]),t._v(" "),s("div",{staticClass:"page__bd page__bd_spacing",staticStyle:{"margin-top":"15px"}},[s("div",{staticClass:"weui-flex"},[s("div",{staticClass:"weui-flex__item"},[s("div",{staticClass:"placeholder",on:{click:function(e){t.gohref(2)}}},[s("p",{staticClass:"tit"},[t._v("总专业")]),t._v("\n                  13\n              ")])]),t._v(" "),s("div",{staticClass:"weui-flex__item"},[s("div",{staticClass:"placeholder",on:{click:function(e){t.gohref(2)}}},[s("p",{staticClass:"tit"},[t._v("已完成")]),t._v("\n                  12\n                  ")])]),t._v(" "),t._m(2)])]),t._v(" "),s("div",{staticClass:"weui-cells"},t._l([1,2,3],function(e){return s("div",{staticClass:"weui-cell"},[t._m(3,!0)])}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-flex__item"},[e("div",{staticClass:"placeholder"},[e("p",{staticClass:"tit"},[this._v("未采用")]),this._v("\n                  1\n                  ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-flex__item"},[e("div",{staticClass:"placeholder"},[e("p",{staticClass:"tit"},[this._v("未审核")]),this._v("\n                  1\n                  ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-flex__item"},[e("div",{staticClass:"placeholder"},[e("p",{staticClass:"tit"},[this._v("未完成")]),this._v("\n                  11\n                  ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list"},[s("div",{staticClass:"ptit"},[s("span",[t._v("提交")]),t._v(" 18163611912\n              ")]),t._v(" "),s("div",{staticClass:"ptit"},[s("span",[t._v("专业")]),t._v(" 计算机\n              ")]),t._v(" "),s("div",{staticClass:"ptit"},[s("span",[t._v("状态")]),t._v(" 已采用  "),s("i",[t._v("2018-5-16")])])])}]};var h=s("VU/8")({name:"list",data:function(){return{title:"我的数据",phone:""}},methods:{gohref:function(t){var e=1==t?"content":"zy";this.$router.push("/page/"+e)}}},p,!1,function(t){s("KMkc")},"data-v-297426b4",null).exports,f={name:"page",data:function(){return{type:this.$route.params.type,title:"zy"==this.$route.params.type?"专业":"内容",phone:""}},created:function(){var t=localStorage.getItem("phone");t&&t.length&&(this.phone=t)},methods:{gohref:function(){localStorage.setItem("phone",this.phone),this.$router.push("/login/"+this.phone)}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("div",{staticClass:"weui-cells__title title"},[t._v(t._s(t.title))]),t._v(" "),"zy"==t.type?s("div",{staticClass:"weui-cells"},t._l([1,2,3],function(e){return s("div",{staticClass:"weui-cell"},[t._m(0,!0)])})):s("div",{staticClass:"weui-cells"},t._l([1,2,3],function(e){return s("div",{staticClass:"weui-cell"},[t._m(1,!0)])}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list"},[e("div",{staticClass:"ptit"},[e("span",[this._v("专业")]),this._v(" 计算机\n              ")]),this._v(" "),e("div",{staticClass:"ptit"},[e("span",[this._v("状态")]),this._v(" 已采用\n              ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list"},[s("div",{staticClass:"ptit"},[s("span",[t._v("提交")]),t._v(" 18163611912\n              ")]),t._v(" "),s("div",{staticClass:"ptit"},[s("span",[t._v("专业")]),t._v(" 计算机\n              ")]),t._v(" "),s("div",{staticClass:"ptit"},[s("span",[t._v("状态")]),t._v(" 已采用  "),s("i",[t._v("2018-5-16")])])])}]};var C=s("VU/8")(f,m,!1,function(t){s("F/uF")},"data-v-b1939cf2",null).exports;i.a.use(n.a);var w=new n.a({routes:[{path:"/",name:"index",component:o},{path:"/login/:id",name:"login",component:u},{path:"/content",name:"content",component:d},{path:"/list",name:"list",component:h},{path:"/page/:type",name:"page",component:C}]});s("HuwF");i.a.config.productionTip=!1,new i.a({el:"#app",router:w,components:{App:l},template:"<App/>"})},V4zg:function(t,e){},kKgD:function(t,e){},"p1T/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d9f8c663b97d1d16293a.js.map