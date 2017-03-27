$(function(){
    var width = document.querySelector('html').offsetWidth;
    var delta =  (640-320) / (20-10);
    var fontSize = (width - 320) / delta + 17;
    if(width <= 320){
	fontSize = 10;
    }else if(width >=1024){
	fontSize = 40;
    }
    document.querySelector('html').style.fontSize = fontSize+'px';
    window.addEventListener('resize',function(){
	var width = document.querySelector('html').offsetWidth;
	var delta =  (640-320) / (20-10);
	var fontSize = (width - 320) / delta + 17;
	if(width <= 320){
	    fontSize = 10;
	}else if(width >=1024){
	    fontSize = 40;
	}
	document.querySelector('html').style.fontSize = fontSize+'px';
    })
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
