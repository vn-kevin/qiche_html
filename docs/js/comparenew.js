!function(e){function t(t,a){side.brand_detail.open(),e("#div_BrandDetailListContent h3").text(a)}function a(e){side.brand.open()}var i=function(t){this.config=e.extend({},this.defaultOption,t),this._EventHandle=e({}),this.init()};i.prototype={defaultOption:{seriesId:"145",ids:[19250],seriesName:"POLO",type:0},defaultParam:{sereisStateLoad:!1,brandStateLoad:!1,historyStateLoad:!1,currData:[],compareItems:[]},init:function(){this.config.ids=this.config.ids.filter(function(e){return e>0}),this.getData(this.config.ids)},on:function(){this._EventHandle.on.apply(this._EventHandle,arguments)},off:function(){this._EventHandle.off.apply(this._EventHandle,arguments)},trigger:function(){this._EventHandle.trigger.apply(this._EventHandle,arguments)},onEvent:function(){var i=this;e("i.reduce").on("click",function(){var t=parseInt(e(this).attr("data-specId")),a=i.config.ids.indexOf(e(this).data("specid"));i.config.ids.splice(a,1),i.removeData(t),i.renderView(),i.controlPopItem("remove",t),i.otherDeal()}),e("#compare_ul").on("click","span.added i.icon-cross",function(){var t=parseInt(e(this).attr("data-specId"));i.controlPopItem("remove",t)}),e("i.added").on("click",function(e){a(e)}),e("#div_BrandListContent").on("click",".series a",function(a){var s=e(this).find("h4").text();t(i,"品牌 > "+s)}),e("#div_BrandDetailListContent").off("click","a"),e("#div_BrandDetailListContent").on("click","a",function(){var t=e(this).attr("data-ids");i.config.ids.push(t),alert("已选中"+i.config.ids),i.getData(i.config.ids),side.brand.close(),side.brand_detail.close()}),e("span[data-comid]").on("click",function(){var t=e(this),a=t.attr("data-comid"),s=t.attr("data-name"),o=l.Compare.updateDate({specid:parseInt(a),specname:s,seriesname:""});if(i.controlPopItem("add",a),0!=o){var r=l.Compare.getCompareCount();return 4!=r?AutoMsgBox("ok","已加入对比框中<br />您还可以继续添加","fn-hide"):AutoMsgBox("ok","已加入对比框中","fn-hide"),l.Compare.setCompareSpecCookie(a),t.addClass("disabled").html("已加入"),!1}})},getData:function(t){var a=this;if(!t||0==t.length)return void a.renderEmptyView();var i=o+t;e.getJSON(i,function(e){null!=e&&void 0!=e&&null!=e.param&&void 0!=e.param&&null!=e.config&&void 0!=e.config&&(a.defaultParam.currData=[],a.defaultParam.currData=e.param.concat(e.config),a.renderView())})},setHistory:function(t){var a="ComparedSpecList",i=e.getCookie("ComparedSpecList",""),s=6,o=[],r=0;if(""==i)e.setCookie(a,t,{expireHours:720});else{o=i.split(","),r=o.length>=s?s:o.length;for(var n=0;n<r;n++)if(o[n]==t)return;o.unshift(t),o.length=o.length>=s?s:o.length,e.setCookie(a,o.join(","),{expireHours:720})}},renderView:function(){this.renderTitle(),this.rendContent(),this.onEvent(),this.rendTailContent(),this.otherDeal()},renderEmptyView:function(){this.renderTitle(),this.onEvent()},renderTitle:function(){var t=this,a=t.defaultParam.currData,i=a.length>0?t.getTitleItems(a):[],s=(a.length>0?t.getPriceItems(a):[],"");if(i)if(1==t.config.type)i[0]&&0!=i[0].specid&&(s+='<div class="column" data-specid="'+i[0].specid+'">',s+="<h4>"+i[0].value+"</h4>",s+='<span class="btn small" data-comid="'+i[0].specid+'" data-name="'+i[0].value+'"><i class="iconfont icon-add"></i>对比</span>',s+="</div>"),e("section.cartype").html(s);else{for(var o=0;o<i.length+1;o++)i[o]&&0!=i[o].specid?(s+='<div class="column" data-specid="'+i[o].specid+'">',s+="<h4>"+i[o].value+"</h4>",s+='<i class="cross reduce" data-specid="'+i[o].specid+'">&#xe608;</i>',s+="</div>"):o<=3&&(s+='<div class="column"><i class="iconfont add added">&#xe603;</i></div>');e("#scroller__compare>div.slide").html(s)}},rendContent:function(){var t=this,a=t.defaultParam.currData,i="",s="",o=0;for(var r in a){var n=a[r].name;if(i+='<div class="group"><h4><strong>'+n+"</strong></h4>",s+='<div class="group">',a[r].paramitems){var c=a[r].paramitems;for(var d in c){var l=c[d].name,p=c[d].valueitems,m=t.checkTypeItem(p);if("机械名称"!=l){i+='<div class="item"><span class="inner '+m+'">'+l+"</span></div>",s+='<div class="item">';for(var f in p)null!==p[f]&&void 0!==p[f]&&("厂商指导价<br/>(元)"==l&&(p[f].value="<strong>"+p[f].value+"</strong>"),s+='<span class="inner '+m+'" data-specid="'+p[f].specid+'" >'+p[f].value+"</span>");s+="</div>"}}}if(a[r].configitems){var c=a[r].configitems;for(var d in c){var l=c[d].name,p=c[d].valueitems,m=t.checkTypeItem(p);i+='<div class="item"><span class="inner '+m+'">'+l+"</span></div>",s+='<div class="item">';for(var f in p)null!==p[f]&&void 0!==p[f]&&(s+='<span class="inner '+m+'" data-specid="'+p[f].specid+'" >'+p[f].value+"</span>");s+="</div>"}}s+="</div>",i+="</div>",o++}e("section.detail>div.left").html(i),e("#scroller__detail div.data").html(s),this.trigger("rendContentEnd")},rendTailContent:function(){var t=this,a=t.config.ids,i=void 0==e.getCookie("cookieCityId")?"":e.getCookie("cookieCityId");if(i=110100,e.grep(t.defaultParam.currData,function(e){return"电动机"==e.name}).length>0){var s=d.replace("$spec",a).replace("$city",100*parseInt((e.getCookie("cookieCityId")||e.getCookie("area")||0)/100)||0);e.getJSON(s,function(t){if(t&&!(t.returncode>0)&&0!=t.result.specitems.length)for(var a in t.result.specitems){var i=t.result.specitems[a];(i.countrysubsidy>0||i.citysubsidy>0)&&(e('.js-subsidy [data-specid="'+i.id+'"]').html((i.countrysubsidy>0?(i.countrysubsidy/1e4).toFixed(2)+"万":"-")+"/"+(i.citysubsidy>0?(i.citysubsidy/1e4).toFixed(2)+"万":"-")),e(".js-subsidy").removeClass("fn-hide"))}})}},getTitleItems:function(e){for(var t in e)if("基本参数"===e[t].name)for(var a in e[t].paramitems)if("机械名称"===e[t].paramitems[a].name)return e[t].paramitems[a].valueitems;return null},getPriceItems:function(e){for(var t in e)if("基本参数"===e[t].name)for(var a in e[t].paramitems)if("厂商指导价(元)"===e[t].paramitems[a].name)return e[t].paramitems[a].valueitems;return null},removeData:function(e){var t=this.defaultParam.currData;for(var a in t){t[a].name;if(t[a].paramitems){var i=t[a].paramitems;for(var s in i){var o=(i[s].name,i[s].valueitems);for(var r in o)if(null!==o[r]&&void 0!==o[r]&&o[r].specid===e){var n=o.indexOf(o[r]);n>-1&&o.splice(n,1)}}}if(t[a].configitems){var i=t[a].configitems;for(var s in i){var o=(i[s].name,i[s].valueitems);for(var r in o)if(null!==o[r]&&void 0!==o[r]&&o[r].specid===e){var n=o.indexOf(o[r]);n>-1&&o.splice(n,1)}}}}},checkTypeItem:function(e){for(var t=!1,a=0;a<e.length;a++)e[a]&&"-"!=e[a].value&&(t=!0);if(!t)return"item-null";for(var i=0;i<e.length;i++)if(e[i+1]&&e[i].value!=e[i+1].value)return"item-differ";return"item-same"},renderPopList:function(t,a,i){var s=template(a,i);if(document.getElementById(t).innerHTML=s,1!=this.config.type)for(var o=0;o<this.config.ids.length;o++)this.controlPopItem("add",this.config.ids[o]);else{var r=e.getCookie("product_compare","");if(""===r)return;var n=r.split(",");if(4!==n.length)return;for(var o=0;o<n.length;o++)0!=n[o]&&this.controlPopItem("add",n[o])}},popEvent:function(){var t=this;e("#loadData").off("click.select"),e("#loadData").on("click.select","#common_specselect_list li a,#common_historyselect_list li a",function(){if(e(this).hasClass("w-disabled"))return!1;e("#loadSpec").hide(),e("#loadSeries").hide(),e("#compare_mark").removeClass("activate").next().addClass("fn-hide"),document.body.scrollTop=0,e(".parameter-detail header").removeClass("sticky"),e(".parameter-detail .header-stand").addClass("fn-hide"),e(".wrapper").show();var a=e(this).data("id");if(t.controlPopItem("add",a),t.config.ids.indexOf(a)>-1||t.config.ids.length>3)return!1;t.setHistory(a);var i=e(this).find("span").text().replace("(已选择)","").trim(),s="",o=e("#nav_select_list a.selected").attr("data-target");if("#common_specselect_list"==o?s=e("#divloadSeries > div.w-nav > h2").text().replace("-选择车型","").trim():"#common_brandselect_list"==o&&(s=e("#loadSeries > div.w-nav > h2").text().replace("-选择车型","").trim()),1==t.config.type){var i=e(this).find("span").text().replace("(已选择)","").trim(),s="",o=e("#nav_select_list a.selected").attr("data-target");"#common_specselect_list"==o?s=e("#divloadSeries > div.w-nav > h2").text().replace("-选择车型","").trim():"#common_brandselect_list"==o&&(s=e("#loadSeries > div.w-nav > h2").text().replace("-选择车型","").trim());l.Compare.updateDate({specid:parseInt(a),specname:i,seriesname:s})}else t.config.ids.push(a),t.getData(t.config.ids)}),e("#loadSpec").off("click.select"),e("#loadSpec").on("click.select","#nav_select_list li a",function(){e("#nav_select_list a.selected").removeClass("selected"),e(this).addClass("selected");var t=e(e(this).attr("data-target"));t.siblings().hide(),t.show()}),e("#loadSpec").on("click.select","#btn_historyselect_list",function(){var a=t.defaultParam.historyStateLoad,i=r;if(!a){var s=e.getCookie("ComparedSpecList","");""!=s?e.getJSON(i+s,function(e){t.renderPopList("common_historyselect_list","popListDataHistory",e),t.defaultParam.historyStateLoad=!0}):t.renderPopList("common_historyselect_list","popListDataHistory",{SpecList:[]})}}),e("#loadSpec").on("click.select","#btn_brandselect_list",function(){var a=t.defaultParam.brandStateLoad;if(!a){var i=n;e.getJSON(i+"0",function(e){t.renderPopList("common_brand_list","popListDataBrand",e)}),t.defaultParam.brandStateLoad=!0}}),e("#loadSpec").on("click.select","#common_brandselect_list .w-sift-letter-content a",function(){var a=n,i=e(this);e.getJSON(a+i.text(),function(e){t.renderPopList("common_brand_list","popListDataBrand",e),i.siblings(".w-btn-selected").removeClass("w-btn-selected"),i.addClass("w-btn-selected")})}),e("#loadSpec").on("click.select","a.js-branditem",function(){var a=c,i=e(this).closest("li"),s=e(this).attr("data-brandid"),o=i.index()>e("#common_seriesselect_items").index()?i.index()-1:i.index(),r=i.offset().left,n=e("li.item",i.parent()),d=n.length;e.getJSON(a+s,function(a){if(t.renderPopList("common_seriesselect_items","popListDataSeriesList",a),e("#common_seriesselect_items").show(),i.siblings(".item-current").removeClass("item-current"),i.addClass("item-current"),o+1<d){for(var s=o+1;s<d;s++)if(e(n[s]).offset().left<=r){e(n[s]).before(e("#common_seriesselect_items"));break}}else i.after(e("#common_seriesselect_items"))})}),e("#loadSpec").on("click.select","#common_seriesselect_items a",function(){if(e(this).hasClass("disabled"))return!1;var a=s,i=e(this).data("seriesid");e.ajax({url:a,data:{seriesId:i,state:4,v:1},dataType:"jsonp",success:function(a){t.renderPopList("loadSeries","popListDataSeries",a),e("#loadSpec").hide(),e("#loadSeries").show(),e("#compare_mark").removeClass("activate").next().addClass("fn-hide"),document.body.scrollTop=0,e(".parameter-detail header").removeClass("sticky"),e(".parameter-detail .header-stand").addClass("fn-hide")}})})},controlPopItem:function(t,a){var i=e("#loadData").find('[data-id="'+a+'"]'),s=i.find(".caption");"remove"==t?(i.removeClass("w-disabled"),s.text()&&s.text(s.text().replace(/\(已选择\)/g,""))):(i.addClass("w-disabled"),s.each(function(t,a){var i=e(a);i.text().indexOf("(已选择)")>-1||i.text(i.text()+"(已选择)")}))},otherDeal:function(){l.Compare.updateCompareUI(!0),this.config.type||e(".compare .left input").each(function(t,a){"chkHL"==e(a).attr("id")?(e(a)[0].checked=!1,e(a).click()):e(a)[0].checked&&(e(a)[0].checked=!1,e(a).click())})}};var s="json/add.json",o="json/data.json?ids=",r="json/HistoryComSpecNew.json?",n="json/pinpai.json?",c="/ashx/spec/GetSeriesListByBrandIdNew.ashx?brandid=",d="http://car.interface.autohome.com.cn/Car/GetSpecElectricSubsidy.ashx?_callback=?&speclist=$spec&cityid=$city";e(function(){e("#loadData").on("click",".w-nav-mini-btn",function(){return e(this).siblings(".w-nav-mini-pop").toggleClass("w-fn-hide"),!1}).on("click",".first-w-nav-back",function(){return e("#loadSpec").hide(),e(".wrapper").show(),e("#compare_mark").removeClass("activate").next().addClass("fn-hide"),document.body.scrollTop=0,e(".parameter-detail header").removeClass("sticky"),e(".parameter-detail .header-stand").addClass("fn-hide"),!1}).on("click",".second-w-nav-back",function(){return e("#loadSeries").hide(),e("#loadSpec").show(),!1})}),window.compareList=i;var l=l||{};l.Compare={compare_area:e("#compare_area"),compare_body:e("#compare_body"),lis:e("#compare_ul li"),compare_no:e("#compare_no"),compare_mark:e("#compare_mark"),compare_clear:e("#compare_clear"),data:[],onremovedate:function(){},CompareCount:4,StateObj:{},reset:function(){for(var e=0;e<this.CompareCount;e++)this.data[e]&&0!=this.data[e].specid&&(this.onremovedate(this.data[e].specid),window.compareList.prototype.controlPopItem("remove",this.data[e].specid)),this.data[e]={specid:0,specname:"",seriesname:""}},getCompareCount:function(){for(var e=0,t=0;t<this.CompareCount;t++)this.data[t].specid>0&&e++;return e},updateDate:function(e,t,a){var i=this.getCompareCount();if(i==this.CompareCount&&0!=e.specid)return AutoMsgBox(Config.msgboxClass,"抱歉，只能对比四款车型","fn-hide"),!1;if(void 0!=t)return 0!=this.data[t].specid&&this.onremovedate(this.data[t].specid),this.data[t]=e,this.updateCompareUI(a),!0;for(var s=0;s<this.CompareCount;s++)if(0==this.data[s].specid)return this.data[s]=e,this.updateCompareUI(a),!0;return!1},updateCompareUI:function(t){var a=this.getCompareCount();this.compare_mark.html(" 对比<br />("+a+")"),this.compare_no.html(""+a),1==a&&setTimeout(function(){l.Compare.compare_area.removeClass("fn-hide"),1!=t&&(l.Compare.compare_body.removeClass("fn-hide"),l.Compare.compare_mark.addClass("activate"))},1e3);for(var i=0;i<this.data.length;i++)if(0==this.data[i].specid)e(this.lis[i]).html('<span class="item null reduce"><i class="iconfont icon-add"></i><i class="iconfont icon-cross"></i></span>');else{e(this.lis[i]).html('<span class="item added">'+this.data[i].seriesname+" "+this.data[i].specname+'<i class="iconfont icon-add"></i><i class="iconfont icon-cross" data-itemclear=true data-specId='+this.data[i].specid+"></i></span>");var s=e("span[data-comid='"+this.data[i].specid+"']");s.length>0&&s.addClass(Config.ClassNameDis).html("已加入")}l.Compare.UpdateProductCompare()},setCompareSpecCookie:function(t){var a=e.getCookie("ComparedSpecList",""),i=[],s=0;if(""==a)e.setCookie("ComparedSpecList",t,{expireHours:720,domain:".autohome.com.cn"});else{i=a.split(","),s=i.length>=this.CompareCount?this.CompareCount:i.length;for(var o=0;o<s;o++)if(i[o]==t)return;i.unshift(t),i.length=i.length>=this.CompareCount?this.CompareCount:i.length,e.setCookie("ComparedSpecList",i.join(","),{expireHours:720,domain:".autohome.com.cn"})}},SelectedSpec:function(){var t=e("#loadSpec");currCompareScrollTop=e(window).scrollTop();for(var a=l.Compare.data,i={},s=0;s<a.length;s++)a[s].specid>0&&(i[a[s].specid]=!0);this.StateObj.loadSelectSpec&&(specSelect.show(Config.SeriesId,Config.SeriesName,i),t.show(),e("#loadImg").addClass("fn-hide"))},HandleSelectSpec:function(t){var a=e(".wrapper"),i=e("#loadSpec");l.Compare.setCompareSpecCookie(t.id),t.seriesName?specName=t.seriesName+" "+t.name:specName=t.name;var s=parseInt(e("#compare_ul").attr("selectindex"));l.Compare.updateDate({specid:t.id,specname:specName,seriesname:""},s),a.show(),i.hide(),window.scrollTo(0,currCompareScrollTop)},CutOffWord:function(e,t){var a=e.substr(0,t),i=a.replace(/[^\x00-\xff]/g,"\r\n").split("");t="\r"==i[t-1]?t-2:t-1;var s=i.slice(0,t).join("").replace(/\r\n/g,"*").length+1;return a.substr(0,s)}},l.Compare.ProductCompare=function(){var t=e.getCookie("product_compare","");if(""!==t){var a=t.split(","),i=[];if(4===a.length){for(var s=0;s<a.length;s++)0!=a[s]&&i.push(a[s]);0!=i.length&&e.get("/Ashx/car/LoadHistoryComSpec.ashx?speclist="+i.join(","),function(e){for(var t=0;t<a.length;t++)for(var i=0;i<e.length;i++)a[t]==e[i].Id&&l.Compare.updateDate({specid:e[i].Id,specname:e[i].Name,seriesname:e[i].SeriesName},t,!0)})}}},l.Compare.UpdateProductCompare=function(){for(var t=l.Compare.data,a=[0,0,0,0],i=0;i<t.length;i++)a[i]=t[i].specid;var s=a.join(",");e.setCookie("product_compare",s,{expireHours:720,domain:".autohome.com.cn"})},l.Compare.onremovedate=function(t){var a=e("span[data-comid='"+t+"']");a.length>0&&a.removeClass(Config.ClassNameDis).html(Config.DuibuString)},l.Compare.init=function(){this.reset();var t=this;this.lis.on("click","i[data-itemclear]",function(){var a=e(this).parent().parent();t.updateDate({specid:0,specname:"",seriesname:""},a.attr("index"))}),this.compare_clear.on("click",function(){t.reset(),t.updateCompareUI()}),e("#compare_go").on("click",function(){var e=t.getCompareCount();if(e<1)return void AutoMsgBox(Config.msgboxClass,"抱歉，对比至少一款车型","fn-hide");for(var a=[],i=0;i<t.data.length;i++)a.push(t.data[i].specid);location.href="http://car.m.autohome.com.cn/"+Config.SeriesId+"/duibi/"+a.join("-")+"#pvareaid=103155"}),t.compare_mark.on("click",function(){var e=t.getCompareCount();e<1?(l.Compare.compare_area.addClass("fn-hide"),l.Compare.compare_body.addClass("fn-hide")):(l.Compare.compare_body.toggleClass("fn-hide"),l.Compare.compare_mark.toggleClass("activate"))}),l.Compare.ProductCompare()},l.Compare.init()}(Zepto),$(function(){function e(e,i,s){var o=t().replace("{title}",i).replace("{type}",e).replace("{class}",s);a.html(o),"fn-hide"==s&&a.popAlert(1e3)}function t(){return'<div class="alert">                    <div class="info"><i class="iconfont icon-{type}"></i>{title}</div>                    <div class="handle {class}"><span class="btn primary small"><em class="fn-oneword"></em>确定<em class="fn-oneword"></em></span></div>                </div>                <div class="mask"></div>'}var a=$("#alert_box");window.AutoMsgBox=e});