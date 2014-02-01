$(function(){
	$('.indicators li').click(function(){
		$(this).parents('.indicators').find('li').removeClass('active');
		$(this).addClass('active');
	})

	$('.modal-close').click(function(){
		$($(this).attr('data-target')).modal('hide');
	})

	//Select inputs
	$('select').each(function(){
		$(this).wrap('<div class="select-cont ' + this.className + '"><div class="select-in">').before('<div class="select-value"></div>');
	})
	$('.select-in select').change(function(){
		$(this).parents('.select-in').find('.select-value').html(
			this.options[this.selectedIndex].text
		)
	})
	$('.select-in select').change();
})