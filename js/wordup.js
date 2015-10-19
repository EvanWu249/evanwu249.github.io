// JavaScript Document

$(function(){
	var _titleHeight = 55;
	$('.abgne_tip_gallery_block').each(function(){
		var $this = $(this),
			_height = $this.height(),
			$caption = $('.caption', $this),
			_captionHeight = $caption.outerHeight(true),
			_speed = 200;
		$this.hover(function(){
			$caption.stop().animate({
				top: _height - _captionHeight
			}, _speed);
		}, function(){
			$caption.stop().animate({
				top: _height - _titleHeight
			}, _speed);
		});
	});
});
