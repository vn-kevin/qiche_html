(function($) {
  /*生成列表*/
  var compareList = function(config) {
    this.config = $.extend({}, this.defaultOption, config);
    this._EventHandle = $({});
    this.init();
  };
 function displayList(e,n){
    var _this=e;
    side.brand_detail.open();
    $('#div_BrandDetailListContent h3').text(n);
 }
  function displaySpec(e) {
    side.brand.open();
  }

  compareList.prototype = {
    defaultOption: {
      seriesId: "",
      ids: [],
      seriesName: "",
      type: 0,
      mtype: 1,
      cityId:1
    },
    defaultParam: {
      sereisStateLoad: false,
      brandStateLoad: false,
      historyStateLoad: false,
      currData: [],
      compareItems: []
    },
    init: function() {
      this.config.ids = this.config.ids.filter(function(item) {
        return item > 0;
      })
      this.getData(this.config.ids);
    },
    on: function() {
      this._EventHandle.on.apply(this._EventHandle, arguments);
    },
    off: function() {
      this._EventHandle.off.apply(this._EventHandle, arguments);
    },
    trigger: function() {
      this._EventHandle.trigger.apply(this._EventHandle, arguments);
    },
    onEvent: function() {
      var _this = this;

      //dothing
      var lens = $('#scroller__compare .column').length,
        aleft = $('.ck_left'),
        aright = $('.ck_right');

      if (lens >= 3) {
        if (paramScrollerCompare.x <= paramScrollerCompare.maxScrollX) {
          aright.hide();
        } else {
          aright.show();
        }
        if (Math.abs(paramScrollerCompare.x) >= 0) {
          aleft.hide();
        } else {
          aleft.show();
        }
      }else{
        aleft.hide();
        aright.hide();
      }

      //减少
      $('i.reduce').on("click", function() {
        var specId = parseInt($(this).attr('data-specId'));
        var arrWz = _this.config.ids.indexOf($(this).data('specid'));
        _this.config.ids.splice(arrWz, 1);
        _this.removeData(specId);
        _this.renderView();
        _this.controlPopItem('remove', specId);
        //触发高亮显示
        _this.otherDeal();
      });
      $('#compare_ul').on("click", "span.added i.icon-cross", function() {
        var specId = parseInt($(this).attr('data-specId'));
        _this.controlPopItem('remove', specId);
      });
      //添加
      $('i.added').on("click", function(evt) {
         $('body').scrollTop(0);
        displaySpec(evt);
      });
      //选择品牌
      //$('#div_BrandListContent').off("click",'.series a');
      $('#div_BrandListContent').on("click",'.series a',function(evt) {
        var name=$(this).find('h4').text();
        displayList(_this,'品牌 > '+name);
      });
      $('#div_BrandDetailListContent').off('click','a')
      $('#div_BrandDetailListContent').on('click','a',function() {
        var nid = $(this).attr('data-ids');
        _this.config.ids.push(nid);

        var lens=$('#scroller__compare .column').length,
            c_w=$('#scroller__compare .column').width(),
            aleft=$('.ck_left'),
            aright=$('.ck_right'),
            mwidth=0;

            if(lens>2){mwidth=(((lens+1)*c_w)-$('body').width())+(c_w-17);}

            _this.getData(_this.config.ids);

        setTimeout(function(){
             paramScrollerCompare.scrollTo(-mwidth,0,500, IScroll.utils.ease.circular);
             paramScrollerDetail.scrollTo(-mwidth,0,500, IScroll.utils.ease.circular);
        },500);
       
        side.brand.close();
        side.brand_detail.close();

      });

    /*  //对比               
      $("span[data-comid]").on("click", function() {
        var jNode = $(this),
          specId = jNode.attr("data-comid"),
          specName = jNode.attr("data-name");
        var b = Auto.Compare.updateDate({
          specid: parseInt(specId),
          specname: specName,
          seriesname: ""
        });
        _this.controlPopItem('add', specId);
        if (b == false) return;
        var count = Auto.Compare.getCompareCount();
        if (count != 4) {
          AutoMsgBox("ok", '已加入对比框中<br />您还可以继续添加', 'fn-hide'); //已加入对比框中<br />您还可以继续添加
        } else {
          AutoMsgBox("ok", '已加入对比框中', 'fn-hide');
        }
        Auto.Compare.setCompareSpecCookie(specId); //记录对比cookie                        
        jNode.addClass("disabled").html('已加入');
        return false;
      });*/
    },
    getNativeId:function(id){
      var _this=this;
      var isOks=function(){
        var lens=$('#scroller__compare .column').length,
            c_w=$('#scroller__compare .column').width(),
            aleft=$('.ck_left'),
            aright=$('.ck_right'),
            mwidth=0;
        if(lens>2){mwidth=(((lens+1)*c_w)-$('body').width())+(c_w-17);}
        _this.config.ids.push(id);
          _this.getData(_this.config.ids);
          setTimeout(function() {
            paramScrollerCompare.scrollTo(-mwidth, 0, 500, IScroll.utils.ease.circular);
            paramScrollerDetail.scrollTo(-mwidth, 0, 500, IScroll.utils.ease.circular);
          }, 500);
      }
      if(!_this.config.ids.length){
        isOks();
      }else{
        for(var i=0,len=_this.config.ids.length;i<len;i++){
          if(_this.config.ids[i]==id){
            alert('该数据已经在对比数据中,请重新添加。');
            return false;
          }
        }
        isOks();
      }
    },
    getData: function(ids) {
      var _this = this;
      if ((!ids) || ids.length == 0) {
        _this.renderEmptyView();
        return;
      }
      
      var url = PATH_DATA + ids + "&mtype=" + this.config.mtype+"&cityId="+this.config.cityId;
      $.getJSON(url, function(d) {
          if (d == null || d == undefined || d.param == null || d.param == undefined || d.config == null || d.config == undefined) {
          return;
        }
        _this.defaultParam.currData = [];
        //参数
        _this.defaultParam.currData = d.param.concat(d.config);
        _this.renderView();
        loads.hide();
      });
    },
    setHistory: function(specId) {
      var cname = "ComparedSpecList",
        hs = $.getCookie("ComparedSpecList", ""),
        maxhl = 6,
        hsL = [],
        len = 0;
      if (hs == "") {
        $.setCookie(cname, specId, {
          expireHours: 24 * 30
        });
      } else {
        hsL = hs.split(",");
        len = hsL.length >= maxhl ? maxhl : hsL.length;
        for (var i = 0; i < len; i++) {
          if (hsL[i] == specId) {
            return;
          }
        }
        hsL.unshift(specId);
        hsL.length = hsL.length >= maxhl ? maxhl : hsL.length;
        $.setCookie(cname, hsL.join(","), {
          expireHours: 24 * 30
        });
      }
    },
    renderView: function() {
      //加载标题
      this.renderTitle();
      //加载表格内容
      this.rendContent();
      //加载绑定事件
      this.onEvent();
      // 后加载内容
      //this.rendTailContent();
      // 其他处理
      this.otherDeal();
    },
    renderEmptyView: function() {
      //加载标题
      this.renderTitle();
      //加载绑定事件
      this.onEvent();
    },
    renderTitle: function() {
      var _this = this,
        d = _this.defaultParam.currData,
        valueItems = d.length > 0 ? _this.getTitleItems(d) : [],
        valuePriceItems = d.length > 0 ? _this.getPriceItems(d) : [],
        html = '';

        var mws=Math.floor(($('body').width()-80)/3);
        if(mws<84){
          mws=90;
        }
        if(mws>120){
          mws=120;
        }
        var cw=valueItems.length<=3?mws+'px':mws+'px';

      if (valueItems) {
        if (_this.config.type == 1) {
          if (valueItems[0] && valueItems[0].specid != 0) {
            html += '<div class="column" data-specid="' + valueItems[0].specid + '" style="width:'+cw+'">';
            html += '<h4>' + valueItems[0].value + "</h4>";
            //html += '<p class="price">厂家指导价：<strong>' + valuePriceItems[0].value + "</strong></p>";
            html += '<span class="btn small" data-comid="' +
              valueItems[0].specid +
              '" data-name="' +
              valueItems[0].value +
              '"><i class="iconfont icon-add" ></i>对比</span>';
            html += '</div>';
          }
          $("section.cartype").html(html);
        } else {
          for (var i = 0; i < valueItems.length + 1; i++) {
            if (valueItems[i] && valueItems[i].specid != 0) {
              html += '<div class="column" data-specid="' + valueItems[i].specid + '" style="width:'+cw+'">';
              html += '<h4>' + valueItems[i].value + "</h4>";
              //html += '<p class="price">' + valuePriceItems[i].value + "</p>";
              html += '<i class="cross reduce" data-specid="' + valueItems[i].specid + '">&#xe608;</i>';
              html += '</div>';
            } else {
              if (i <= 8) {
                html += '<div class="column" style="width:'+cw+'"><i class="iconfont add added">&#xe603;</i></div>';
              }
            }
          }
          $("#scroller__compare>div.slide").html(html);
        }
      }
    },
    rendContent: function() {
      //生成对比参数表格
      var _this = this,
        d = _this.defaultParam.currData,
        titleHtml = '',
        html = '',
        count = 0,
        valueItems = d.length > 0 ? _this.getTitleItems(d) : [];
        var mws=Math.floor(($('body').width()-80)/3);
        if(mws<84){
          mws=90;
        }
        if(mws>120){
          mws=120;
        }
        var cw=valueItems.length<=3?mws+'px':mws+'px';

      for (var i in d) {
        var groupName = d[i].name;
        //添加vs标题信息
        titleHtml += '<div class="group"><h4><strong>' + groupName + '</strong></h4>';
        //添加表格内容
        html += '<div class="group">';
        if (d[i].paramitems) {
          var groupItems = d[i].paramitems;
          for (var j in groupItems) {
            var itemName = groupItems[j].name;
            var items = groupItems[j].valueitems;
            var classType = _this.checkTypeItem(items);
            if (itemName == "机械名称") {
              continue;
            }
            //添加vs标题信息
            titleHtml += '<div class="item"><span class="inner ' + classType + '">' + itemName + '</span></div>';
            html += '<div class="item">';
            for (var k in items) {
              if (items[k] !== null && items[k] !== undefined) {
                if (itemName == "厂商指导价<br/>(元)") {
                  items[k].value = "<strong>" + items[k].value + "</strong>";
                }
                html += '<span class="inner ' + classType + '" data-specid="' + items[k].specid + '"  style="width:'+cw+'">' + items[k].value + '</span>';
              }
            }
            html += '</div>';
          }
        }
        if (d[i].configitems) {
          var groupItems = d[i].configitems;
          for (var j in groupItems) {
            var itemName = groupItems[j].name;
            var items = groupItems[j].valueitems;
            var classType = _this.checkTypeItem(items);

            //添加vs标题信息
            titleHtml += '<div class="item"><span class="inner ' + classType + '">' + itemName + '</span></div>';
            html += '<div class="item">';
            for (var k in items) {
              if (items[k] !== null && items[k] !== undefined) {
                html += '<span class="inner ' + classType + '" data-specid="' + items[k].specid + '" style="width:'+cw+'">' + items[k].value + '</span>';
              }
            }
            html += '</div>';
          }
        }
        html += "</div>";
        titleHtml += "</div>";
        count++;
      }
      $("section.detail>div.left").html(titleHtml);
      $("#scroller__detail div.data").html(html);

      this.trigger('rendContentEnd');
    },
    rendTailContent: function() {
      var _this = this,
        ids = _this.config.ids,
        cityid = $.getCookie('cookieCityId') == undefined ? '' : $.getCookie('cookieCityId');
      cityid = 110100;

      if ($.grep(_this.defaultParam.currData, function(n) {
          return n.name == '电动机';
        }).length > 0) {
        var url = PATH_SUBSIDY.replace('$spec', ids).replace('$city', parseInt(($.getCookie('cookieCityId') || $.getCookie('area') || 0) / 100) * 100 || 0);
        $.getJSON(url, function(d) {
          if (!d || d.returncode > 0 || d.result.specitems.length == 0) {
            return;
          }
          for (var i in d.result.specitems) {
            var item = d.result.specitems[i];
            if (item.countrysubsidy > 0 || item.citysubsidy > 0) {
              $('.js-subsidy [data-specid="' + item.id + '"]').html((item.countrysubsidy > 0 ? ((item.countrysubsidy / 10000).toFixed(2) + '万') : '-') +
                '/' +
                (item.citysubsidy > 0 ? ((item.citysubsidy / 10000).toFixed(2) + '万') : '-'));
              $('.js-subsidy').removeClass('fn-hide');
            }
          }
        });
      }
    },
    getTitleItems: function(d) {
      var titleItems = [];
      for (var p in d) {
        if (d[p].name === "主要参数") {
          for (var pItem in d[p].paramitems) {
            if (d[p].paramitems[pItem].name === "机械名称") {
              return d[p].paramitems[pItem].valueitems;
            }
          }
        }
      }
      return null;
    },
    getPriceItems: function(d) {
      var titleItems = [];
      for (var p in d) {
        if (d[p].name === "主要参数") {
          for (var pItem in d[p].paramitems) {
              if (d[p].paramitems[pItem].name === "厂商指导价 (万元）") {
              return d[p].paramitems[pItem].valueitems;
            }
          }
        }
      }
      return null;
    },
    removeData: function(id) {
      var data = this.defaultParam.currData;
      for (var i in data) {
        var groupName = data[i].name;
        if (data[i].paramitems) {
          var groupItems = data[i].paramitems;
          for (var j in groupItems) {
            var itemName = groupItems[j].name;
            var items = groupItems[j].valueitems;
            for (var k in items) {
              if (items[k] !== null && items[k] !== undefined && items[k].specid === id) {

                var index = items.indexOf(items[k]);
                if (index > -1) {
                  items.splice(index, 1);
                }
              }
            }
          }
        }
        if (data[i].configitems) {
          var groupItems = data[i].configitems;
          for (var j in groupItems) {
            var itemName = groupItems[j].name;
            var items = groupItems[j].valueitems;
            for (var k in items) {
              if (items[k] !== null && items[k] !== undefined && items[k].specid === id) {

                var index = items.indexOf(items[k]);
                if (index > -1) {
                  items.splice(index, 1);
                }
              }
            }
          }
        }
      }
    },
    checkTypeItem: function(data) {
      var hasValue = false;
      for (var j = 0; j < data.length; j++) {
        if (data[j] && data[j].value != "-") {
          hasValue = true;
        }
      }

      if (hasValue) {
        for (var i = 0; i < data.length; i++) {
          if (data[i + 1] && (data[i].value != data[i + 1].value)) {
            return "item-differ";
          }
        }
      } else {
        return "item-null";
      }
      return "item-same";
    },
    renderPopList: function(id, templateId, json) {
      var html = template(templateId, json);
      document.getElementById(id).innerHTML = html;

      if (this.config.type == 1) {
        var ids = $.getCookie("product_compare", "");
        if (ids === "") return;
        var arr = ids.split(','),
          arg = [];

        if (arr.length !== 4) return;
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] != 0) {
            this.controlPopItem('add', arr[i]);
          }
        }
        return;
      }
      for (var i = 0; i < this.config.ids.length; i++) { //渲染默认选中得ID的项目
        this.controlPopItem('add', this.config.ids[i]);
      }
    },
    popEvent: function() {
      var self = this;
      $('#loadData').off('click.select');
      $('#loadData').on('click.select', '#common_specselect_list li a,#common_historyselect_list li a', function() {
        if ($(this).hasClass('w-disabled')) { //选中过得不在可选
          return false;
        }
        $('#loadSpec').hide();
        $('#loadSeries').hide();

        $('#compare_mark').removeClass('activate').next().addClass('fn-hide');
        document.body.scrollTop = 0;
        $('.parameter-detail header').removeClass('sticky');
        $('.parameter-detail .header-stand').addClass('fn-hide');

        $('.wrapper').show();
        var oId = $(this).data('id')
        self.controlPopItem('add', oId)
        if (self.config.ids.indexOf(oId) > -1 || self.config.ids.length > 3) { //判断是否用重复ID 和 是否已经4个元素
          return false;
        }
        self.setHistory(oId); // 加入对比历史

        var specName = $(this).find("span").text().replace("(已选择)", "").trim();
        var seriesName = "";
        var selVal = $("#nav_select_list a.selected").attr("data-target");
        if (selVal == "#common_specselect_list") {
          seriesName = $("#divloadSeries > div.w-nav > h2").text().replace("-选择车型", "").trim();
        } else if (selVal == "#common_brandselect_list") {
          seriesName = $("#loadSeries > div.w-nav > h2").text().replace("-选择车型", "").trim();
        }

        if (self.config.type == 1) {
          //GetSeriesBySpecId
          var specName = $(this).find("span").text().replace("(已选择)", "").trim();
          var seriesName = "";
          var selVal = $("#nav_select_list a.selected").attr("data-target");
          if (selVal == "#common_specselect_list") {
            seriesName = $("#divloadSeries > div.w-nav > h2").text().replace("-选择车型", "").trim();
          } else if (selVal == "#common_brandselect_list") {
            seriesName = $("#loadSeries > div.w-nav > h2").text().replace("-选择车型", "").trim();
          }

          var b = Auto.Compare.updateDate({
            specid: parseInt(oId),
            specname: specName,
            seriesname: seriesName
          });
        } else {
          self.config.ids.push(oId);
          self.getData(self.config.ids);
        }
      });

      $('#loadSpec').off('click.select');
      $('#loadSpec').on('click.select', '#nav_select_list li a', function() {
        $('#nav_select_list a.selected').removeClass('selected');
        $(this).addClass('selected');

        var $div = $($(this).attr('data-target'));
        $div.siblings().hide();
        $div.show();
      });

      $('#loadSpec').on('click.select', '#btn_historyselect_list', function() {
        var stateLoad = self.defaultParam.historyStateLoad,
          url = PATH_HISTORY;
        if (!stateLoad) {
          var specItems = $.getCookie("ComparedSpecList", "");
          if (specItems != "") {
            $.getJSON(url + specItems, function(data) {
              self.renderPopList('common_historyselect_list', 'popListDataHistory', data);
              self.defaultParam.historyStateLoad = true;
            });
          } else {
            self.renderPopList('common_historyselect_list', 'popListDataHistory', {
              SpecList: []
            });
          }
        }
      });
      $('#loadSpec').on('click.select', '#btn_brandselect_list', function() {
        var stateLoad = self.defaultParam.brandStateLoad;
        if (!stateLoad) {
          var url = PATH_BRAND;
          $.getJSON(url + "0", function(data) {
            self.renderPopList('common_brand_list', 'popListDataBrand', data);
          });
          self.defaultParam.brandStateLoad = true;
        }
      });
      $('#loadSpec').on('click.select', '#common_brandselect_list .w-sift-letter-content a', function() {
        var url = PATH_BRAND,
          $this = $(this);
        $.getJSON(url + $this.text(), function(data) {
          self.renderPopList('common_brand_list', 'popListDataBrand', data);
          $this.siblings('.w-btn-selected').removeClass('w-btn-selected');
          $this.addClass('w-btn-selected');
        });
      });

      $('#loadSpec').on('click.select', 'a.js-branditem', function() {
        var url = PATH_SERIES,
          $li = $(this).closest('li'),
          id = $(this).attr('data-brandid'),
          index = ($li.index() > $('#common_seriesselect_items').index() ? ($li.index() - 1) : $li.index()),
          left = $li.offset().left,
          lis = $('li.item', $li.parent()),
          len = lis.length;
        $.getJSON(url + id, function(data) {
          self.renderPopList('common_seriesselect_items', 'popListDataSeriesList', data);
          $('#common_seriesselect_items').show();
          $li.siblings('.item-current').removeClass('item-current');
          $li.addClass('item-current');
          if (index + 1 < len) {
            for (var i = index + 1; i < len; i++) {
              if ($(lis[i]).offset().left <= left) {
                $(lis[i]).before($('#common_seriesselect_items'));
                break;
              }
            }
          } else {
            $li.after($('#common_seriesselect_items'));
          }
        });
      });
      $('#loadSpec').on('click.select', '#common_seriesselect_items a', function() {
        if ($(this).hasClass('disabled'))
          return false;
        var url = PATH_LIST;
        var seriesId = $(this).data('seriesid');
        $.ajax({
          url: url,
          data: {
            seriesId: seriesId,
            state: 4,
            v: 1
          },
          dataType: "jsonp",
          success: function(data) {
            self.renderPopList('loadSeries', 'popListDataSeries', data);
            $('#loadSpec').hide();
            $('#loadSeries').show();

            $('#compare_mark').removeClass('activate').next().addClass('fn-hide');
            document.body.scrollTop = 0;
            $('.parameter-detail header').removeClass('sticky');
            $('.parameter-detail .header-stand').addClass('fn-hide');
          }
        });
      });
    },
    controlPopItem: function(ctrl, specId) {
      var $nowIt = $('#loadData').find('[data-id="' + specId + '"]');
      var $caption = $nowIt.find('.caption');
      if (ctrl == 'remove') {
        $nowIt.removeClass('w-disabled')
        $caption.text() && $caption.text($caption.text().replace(/\(已选择\)/g, ''));
      } else {
        $nowIt.addClass('w-disabled')
        $caption.each(function(i, item) {
          var $item = $(item);
          $item.text().indexOf('(已选择)') > -1 || $item.text($item.text() + '(已选择)');
        });
      }
    },
    otherDeal: function() {
      // 更新对比框
      Auto.Compare.updateCompareUI(true);
        //触发高亮显示
      if (!this.config.type) {
          $(".compare .left input").each(function (i, obj) {
              if ($(obj).attr("id") == "chkHL") {
                  $(obj)[0].checked = false;
                  $(obj).click();
              } else if ($(obj)[0].checked) {
                  $(obj)[0].checked = false;
                  $(obj).click();
              }
          });
      }
    }
  };

  //数据接口
  var PATH_LIST = "json/add.json",
    PATH_DATA = 'json/data0.json?ids=',
    //PATH_HISTORY = 'json/HistoryComSpecNew.json?',
    PATH_BRAND = 'json/pinpai.json?';
    //PATH_SERIES = '/ashx/spec/GetSeriesListByBrandIdNew.ashx?brandid=',
    ///PATH_PRICE = "http://car.interface.autohome.com.cn/dealer/LoadDealerPrice.ashx?type=4&_callback=?&specid=",
    //PATH_SUBSIDY = "http://car.interface.autohome.com.cn/Car/GetSpecElectricSubsidy.ashx?_callback=?&speclist=$spec&cityid=$city";

  window.compareList = compareList;



  //对比弹出层
  var Auto = Auto || {};
  Auto.Compare = {
    compare_area: $('#compare_area'),
    compare_body: $('#compare_body'),
    lis: $('#compare_ul li'),
    compare_no: $('#compare_no'),
    compare_mark: $('#compare_mark'),
    compare_clear: $('#compare_clear'),
    data: [],
    onremovedate: function() {},
    CompareCount: 4,
    StateObj: {},
    reset: function() { //重置；清楚；
      for (var i = 0; i < this.CompareCount; i++) {
        if (this.data[i] && this.data[i].specid != 0) {
          this.onremovedate(this.data[i].specid);
          window.compareList.prototype.controlPopItem('remove', this.data[i].specid);
        }
        this.data[i] = {
          specid: 0,
          specname: '',
          seriesname: ''
        };
      }
    },
    getCompareCount: function() { //获取对比个数。
      var no = 0;
      for (var i = 0; i < this.CompareCount; i++) {
        if (this.data[i]['specid'] > 0) no++;
      }
      return no;
    },
    updateDate: function(d, index, defshow) { // 更新数据，同时更新页面显示;
      var count = this.getCompareCount();
      if (count == this.CompareCount && d.specid != 0) { 
        AutoMsgBox(Config.msgboxClass, '抱歉，只能对比四款车型', 'fn-hide'); //抱歉，只能对比两款车型 
        return false;
      }
      if (index != undefined) {
        if (this.data[index].specid != 0)
          this.onremovedate(this.data[index].specid);
        this.data[index] = d;
        this.updateCompareUI(defshow);
        return true;
      }
      for (var i = 0; i < this.CompareCount; i++) {
        if (this.data[i].specid == 0) {
          this.data[i] = d;
          this.updateCompareUI(defshow);
          return true;
        }
      }
      return false;
    },
    updateCompareUI: function(defshow) { //更新页面显示对比个数
      var No = this.getCompareCount();
      this.compare_mark.html(' 对比<br />(' + No + ')');
      this.compare_no.html('' + No);
      if (No == 1) {
        setTimeout(function() {
            Auto.Compare.compare_area.removeClass("fn-hide");
            if (!(defshow == true)) {
              Auto.Compare.compare_body.removeClass("fn-hide");
              Auto.Compare.compare_mark.addClass("activate");
            }
          },
          1000);
      }
      for (var i = 0; i < this.data.length; i++) {
        if (this.data[i]['specid'] == 0) {
          $(this.lis[i])
            .html('<span class="item null reduce"><i class="iconfont icon-add"></i><i class="iconfont icon-cross"></i></span>');
        } else {
          $(this.lis[i])
            .html('<span class="item added">' +
              this.data[i]['seriesname'] +
              ' ' +
              this.data[i]['specname'] +
              '<i class="iconfont icon-add"></i><i class="iconfont icon-cross" data-itemclear=true data-specId=' + this.data[i]['specid'] + '></i></span>');
          var node = $("span[data-comid='" + this.data[i]['specid'] + "']");
          if (node.length > 0) {
            node.addClass(Config.ClassNameDis).html('已加入');
          }
        }
      }
      Auto.Compare.UpdateProductCompare();
    },
    setCompareSpecCookie: function(specId) {
      var self = this,
        hs = $.getCookie("ComparedSpecList", ""),
        hsL = [],
        L = 0;
      if (hs == "") {
        $.setCookie("ComparedSpecList", specId, {
          expireHours: 24 * 30,
          domain: '.autohome.com.cn'
        });
      } else {
        hsL = hs.split(",");
        L = hsL.length >= this.CompareCount ? this.CompareCount : hsL.length;
        for (var i = 0; i < L; i++) {
          if (hsL[i] == specId) {
            return;
          }
        }
        hsL.unshift(specId);
        hsL.length = hsL.length >= this.CompareCount ? this.CompareCount : hsL.length;
        $
          .setCookie("ComparedSpecList",
            hsL.join(","), {
              expireHours: 24 * 30,
              domain: '.autohome.com.cn'
            });
      }
    },
    SelectedSpec: function() {
      var specId = '',
        loadSpecObj = $("#loadSpec");
      currCompareScrollTop = $(window).scrollTop();
      var d = Auto.Compare.data;
      var dlist = {};
      for (var i = 0; i < d.length; i++) {
        if (d[i].specid > 0) {
          dlist[d[i].specid] = true;
        }
      }
      if (this.StateObj["loadSelectSpec"]) {
        specSelect.show(Config.SeriesId, Config.SeriesName, dlist);
        loadSpecObj.show();
        $("#loadImg").addClass("fn-hide");
      } else {

      }
    },
    HandleSelectSpec: function(obj) {
      var shiftObj = $(".wrapper"),
        loadSpecObj = $("#loadSpec");
      Auto.Compare.setCompareSpecCookie(obj.id);
      if (obj.seriesName) {
        specName = obj.seriesName + " " + obj.name;
      } else {
        specName = obj.name;
      }
      var index = parseInt($("#compare_ul").attr('selectindex'));
      Auto.Compare.updateDate({
        specid: obj.id,
        specname: specName,
        seriesname: ""
      }, index);
      shiftObj.show();
      loadSpecObj.hide();
      window.scrollTo(0, currCompareScrollTop);
    },
    CutOffWord: function(str, n) {
      var tmpStr = str.substr(0, n);
      var tmpCode = tmpStr.replace(/[^\x00-\xff]/g, '\r\n').split('');
      n = (tmpCode[n - 1] == '\r') ? n - 2 : n - 1;
      var l = tmpCode.slice(0, n).join('').replace(/\r\n/g, '*').length + 1;
      return tmpStr.substr(0, l);
    }
  };
  Auto.Compare.ProductCompare = function() {
    var ids = $.getCookie("product_compare", "");
    if (ids === "") return;
    var arr = ids.split(','),
      arg = [];

    if (arr.length !== 4) return;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != 0) {
        arg.push(arr[i]);
      }
    }
    if (arg.length == 0) return;
    $.get("/Ashx/car/LoadHistoryComSpec.ashx?speclist=" + arg.join(','),
      function(data) {
        for (var j = 0; j < arr.length; j++) {
          for (var k = 0; k < data.length; k++) {
            if (arr[j] == data[k].Id) {
              Auto.Compare.updateDate({
                  specid: data[k].Id,
                  specname: data[k].Name,
                  seriesname: data[k].SeriesName
                },
                j,
                true);
            }
          }
        }
      });
  }
  Auto.Compare.UpdateProductCompare = function() {
    var data = Auto.Compare.data;
    var arr = [0, 0, 0, 0];
    for (var i = 0; i < data.length; i++) {
      arr[i] = data[i].specid;
    }
    var ids = arr.join(',');
    $.setCookie("product_compare", ids, {
      expireHours: 24 * 30,
      domain: '.autohome.com.cn'
    });
  }
  Auto.Compare.onremovedate = function(specid) {
    var node = $("span[data-comid='" + specid + "']");
    if (node.length > 0) {
      node.removeClass(Config.ClassNameDis).html(Config.DuibuString);
    }
  };

  Auto.Compare.init = function() {
    this.reset();
    var that = this;
    this.lis.on('click',
      'i[data-itemclear]',
      function() { //清楚单项事件绑定
        var obj = $(this).parent().parent();
        that.updateDate({
          specid: 0,
          specname: '',
          seriesname: ''
        }, obj.attr('index'));
      });
    this.compare_clear.on("click",
      function() {
        that.reset();
        that.updateCompareUI();
      })
    $('#compare_go')
      .on("click",
        function() {
          var No = that.getCompareCount();
          if (No < 1) {
            AutoMsgBox(Config.msgboxClass, '抱歉，对比至少一款车型', "fn-hide"); //抱歉，只能对比两款车型 
            return;
          }
          var d = [];
          for (var i = 0; i < that.data.length; i++) {
            d.push(that.data[i]['specid']);
          }
          location.href = 'http://car.m.autohome.com.cn/' +
            Config.SeriesId +
            '/duibi/' +
            d.join('-') +
            "#pvareaid=103155";
        })
    that.compare_mark.on('click',
      function() {
        var No = that.getCompareCount();
        if (No < 1) {
          Auto.Compare.compare_area.addClass("fn-hide");
          Auto.Compare.compare_body.addClass("fn-hide");
        } else {
          Auto.Compare.compare_body.toggleClass("fn-hide");
          Auto.Compare.compare_mark.toggleClass("activate");
        }
      })
    Auto.Compare.ProductCompare();
  };
  Auto.Compare.init();
})(Zepto)

$(function() {
  var obj = $("#alert_box");

  function msgbox(type, title, classname) {
    var tep = getTemplate().replace('{title}', title).replace('{type}', type).replace('{class}', classname);
    obj.html(tep);
    if (classname == "fn-hide") {
      obj.popAlert(1000);
    }
  };

  function getTemplate() {
    return '<div class="alert">\
                    <div class="info"><i class="iconfont icon-{type}"></i>{title}</div>\
                    <div class="handle {class}"><span class="btn primary small"><em class="fn-oneword"></em>确定<em class="fn-oneword"></em></span></div>\
                </div>\
                <div class="mask"></div>';
    return '<div class="alert"><p><i class="iconfont icon-{type}"></i><span>{title}</span></p></div>';
  }
  window.AutoMsgBox = msgbox;
});

 $(function() {
      $(window).scroll(function(e){
        var stop = $(this).scrollTop();
        if(stop>=55){
          if(stop<=60){
            $('header').css({'top':stop-55, 'position': 'absolute'});
            $('.header-stand').removeClass('fn-hide')
          }else{
             $('header').css({'top':0, 'position': 'fixed'});
             $('.header-stand').removeClass('fn-hide')
          }
        }else{
          $('header').css({'top':0, 'position': ''});
          $('.header-stand').addClass('fn-hide')
        }
      });

      var lens = $('#scroller__compare .column').length,
        aleft = $('.ck_left'),
        aright = $('.ck_right');

      document.addEventListener('touchmove', function(e) {
        var lens = $('#scroller__compare .column').length;
        
        if (lens >= 3) {
          aleft.show();
          aright.show();
          if (paramScrollerCompare.x <= paramScrollerCompare.maxScrollX+10) {
            aright.hide();
          } else {
            aright.show();
          }
          if (paramScrollerCompare.x >= -10) {
            aleft.hide();
          } else {
            aleft.show();
          }
        }
      }, false);

      aleft.click(function() {
        var q_w=Math.abs(paramScrollerCompare.x)-$('#scroller__compare .column').width();
        if(-q_w>=10) {
            $(this).hide();
            aright.show();
            return false;
           }
            paramScrollerCompare.scrollTo(-q_w,0,500, IScroll.utils.ease.circular);
            paramScrollerDetail.scrollTo(-q_w,0,500, IScroll.utils.ease.circular);
      });
      aright.click(function() {
        var q_w=Math.abs(paramScrollerCompare.x)+$('#scroller__compare .column').width();

            if(!(q_w-10<=Math.abs(paramScrollerCompare.maxScrollX))){
              $(this).hide();
              aleft.show();
              return false;
            }
            paramScrollerCompare.scrollTo(-q_w,0,500, IScroll.utils.ease.circular);
            paramScrollerDetail.scrollTo(-q_w,0,500, IScroll.utils.ease.circular);
      })
  });
