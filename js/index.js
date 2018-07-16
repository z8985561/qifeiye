/**
 * Created by 电 on 2018/7/12.
 */
$(function(){
 	var $uList = $("#evaluate2 .container .row");
 	var index = 0;
 	var $spans = $(".indicators span");
 	$("#next").click(function(){

 		index < $spans.length - 1 ? index++ : index = 0;
 		uTarget(index);
 		$spans.eq(index).addClass("on").siblings().removeClass("on");
 	})
 	$("#prev").click(function(){
 		index > 0 ? index-- : index = $spans.length - 1;
 		uTarget(index);
 		$spans.eq(index).addClass("on").siblings().removeClass("on");
 	})
 	$spans.click(function(){
 		$(this).addClass("on").siblings().removeClass("on");
 		index = $(this).index();
 		uTarget(index);
 	})
 	var uTarget = function (a){
 		$uList.animate({left:-1190 * a +'px'});
 	}
});