window.onload = function(){


	//Recall Pop Up
	$('#shadow').hide();
	$('#recall').click(function(){
		$('#shadow').show();
	});
	$('#close-recall-box').click(function(){
		$('#shadow').hide();
	});

	//Mark Pop Up
	var mw = $('.leave-mark-container').outerWidth() - $('.mark-click').outerWidth();
	$('.leave-mark-container').css('right', '-' + mw + 'px');
	var mwt = false;
	$('.mark-click').click(function(){
		if (mwt == false) {
			$('.leave-mark-container').css('right', '0%');
			mwt = true;
		} else if (mwt == true) {
			$('.leave-mark-container').css('right', '-' + mw + 'px');
			mwt = false;
		}
	});

	//Mob Nav
	$('#mob-nav').hide();
	$('#hamb').click(function(){
		$('#mob-nav').slideToggle();
	})

	//SLider
	$('.slide').css('width', $('.slides-container').outerWidth());
	$('.slide-row').css('width', ($('.slides-container').outerWidth() * $('.slide').length));
	var a = 0;
	var p = 1;
	var b = $('.slides-container').outerWidth();
	$('#slidebtn-left').click(function(){
		p -= 1;
		if (p <= 0) {
			p = 1;
			return false;
		} else {
			a += b;
			$('.slide-row').css('left', a + 'px');
			switch(p) {
				case 1 :
					document.getElementById('slide-description').innerHTML = 'Продажа недвижимости от официального представителя строительной компании';
					break;
				case 2: 
					document.getElementById('slide-description').innerHTML = 'Цены от застройщика без дополнительных затрат для покупателей (оформление 0%)';
					break;
				case 3:
					document.getElementById('slide-description').innerHTML = 'Опыт работы на рынке недвижимости 15 лет (надежная компания)';
					break;
				default:
					break;
			}
		}
	});

	$('#slidebtn-right').click(function(){
		p += 1;
		if (p > $('.slide').length) {
			p = $('.slide').length;
			return false;
		} else {
			a -= b;
			$('.slide-row').css('left', a + 'px');
			switch(p) {
				case 1 :
					document.getElementById('slide-description').innerHTML = 'Продажа недвижимости от официального представителя строительной компании';
					break;
				case 2: 
					document.getElementById('slide-description').innerHTML = 'Цены от застройщика без дополнительных затрат для покупателей (оформление 0%)';
					break;
				case 3:
					document.getElementById('slide-description').innerHTML = 'Опыт работы на рынке недвижимости 15 лет (надежная компания)';
					break;
				default:
					break;
			}
		}
	});
	var x = false;
	$('#a-btn').click(function(){
		if (x == false) {
			$('.a-btn-container').css('bottom', '-60%');
			$('.about-des').css('margin-bottom', '15%');
			x = true;
		} else if (x == true) {
			$('.a-btn-container').css('bottom', '0%');
			$('.about-des').css('margin-bottom', '2%');
			x = false;
		}
	});
}