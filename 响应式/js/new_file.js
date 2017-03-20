$(function(){
	var iW = document.getElementsByTagName('html')[0].clientWidth;			
	var size  =iW/16;
	var html = document.getElementsByTagName('html')[0];
	html.style.fontSize = size + 'px';
	var bg = ['#428BCA','pink','#19C8A9','lightcoral','#D43F3A','#EA5F8D']
	$('.nav a').click(function(){
		$('body').stop().animate({
			scrollTop:$('.con').eq($(this).index()).offset().top+50
		},900,'easeInOutExpo');
		return false
	})
	$('.nav a').each(function(i,ele){
		$(ele).mousemove(function(){
			$(this).css('background',bg[i]).siblings('.nav a').css('background','');
		})
	})
	$(window).scroll(function(){
		var height = $(window).scrollTop();
		$('.con').each(function(i,ele){
			var iH = $(ele).offset().top;
			if(height>=iH){
				$('.nav a').eq(i).css('background',bg[i]).siblings('.nav a').css('background','');
			}
		})
	})
	
})