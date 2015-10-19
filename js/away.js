/*=================================
Fade Show
April 2013
By : Away
http://www.dfuns.idv.tw
http://dfuns.blogspot.tw
=================================*/
$(function(){

	var num=0;
	var $img=$('.fadeWrap a');
	var tNum=$img.length;
	var duration=3000;
	var myTimeout;
	var str='';

	function fadeShow(){
		myTimeout = setTimeout( fadeFn, duration);
	}
	function fadeFn(){
		todo(num);
		num = num < tNum - 1 ? ++ num : num = 0 ;
		fadeShow();
	}
	function todo(n){
		$img.eq(n).stop(true, true).fadeIn().siblings().fadeOut();
		$('.control a').eq(n).addClass('status').siblings().removeClass();
		return n;
	}

	//=== Init ===
	(function(){
		$img.eq(0).show();
		fadeFn();
		for(var i=1; i<=tNum; i++){
				str += '<a href="#">' + i + '</a>';
		}
		$('.fade').append('<div class="control">' + str + '</div>');
		$('.control a').eq(0).addClass('status');
	})();

	//=== Event ===
	(function(){
		$('.fade').hover(function(){
			clearTimeout(myTimeout);
		}, function(){
			 fadeShow();
		});
		$('.control a').mouseover(function(){
			num=todo($(this).index());
		});
	})();

});
