/*
 @ 文本框插入表情插件
 @ 作者：水墨寒 Smohan.net
 @ 日期：2013年1月28日
*/
$(function() {
  $.fn.smohanfacebox = function(options) {
    var defaults = {
      Event: "click", //响应事件		
      divid: "Smohan_FaceBox", //表单ID（textarea外层ID）
      textid: "TextArea" //文本框ID
    };
    var options = $.extend(defaults, options);
    var $btn = $(this); //取得触发事件的ID

    //创建表情框
    var faceimg = '';
    for (i = 0; i < 60; i++) { //通过循环创建60个表情，可扩展
      faceimg += '<li><a href="javascript:void(0)"><img src="./static/images/commentInput/face/' + (i + 1) + '.gif" face="<emt>' + (i + 1) + '</emt>"/></a></li>';
    };
    $("#" + options.divid).prepend("<div id='SmohanFaceBox'><span class='Corner'></span><div class='Content'><h3><span>常用表情</span><a class='close' title='关闭'></a></h3><ul>" + faceimg + "</ul></div></div>");
    $('#SmohanFaceBox').css("display", 'none'); //创建完成后先将其隐藏
    //创建表情框结束

    var $facepic = $("#SmohanFaceBox li img");
    //BTN触发事件，显示或隐藏表情层
    $btn.on(options.Event, function(e) {
      $('#SmohanFaceBox').fadeToggle(360);
    });
    //插入表情
    $facepic.off().click(function() {
      $('#SmohanFaceBox').fadeToggle(360);
      //$("#"+options.textid).focus();
      //$("#"+options.textid).val($("#"+options.textid).val()+$(this).attr("face"));
      $("#" + options.textid).off().append($(this).clone());
    });
    //关闭表情层
    $('#SmohanFaceBox h3 a.close').click(function() {
      $('#SmohanFaceBox').fadeToggle(360);
    });

  };

});
