var items;

$( document ).ready(function() {
	items = $('.transition');
});

$( window ).scroll(function() {

	var topPosition = window.pageYOffset;
	var docHeight = $(window).height();
	var bottomPosition = topPosition + docHeight;
	var itemToRemove = -1;
	
	$.each(items, function( index, item ) {
		
		if (bottomPosition >= item.offsetTop+150){
			$(item).removeClass("transition");
			$(item).addClass("transitioning");
			item.style.opacity = "0";
			itemToRemove = index;
		}			
	});
	
	if (itemToRemove >= 0)
		items.splice(itemToRemove,1);

	
	var transitioning = $('.transitioning');
	
	$.each(transitioning, function( index, item ) {	
		//console.log(window.getComputedStyle(i,null).getPropertyValue("height"););
		item.style.opacity = (parseFloat(item.style.opacity) + 0.05).toString();
		
		if (item.style.opacity >= 1)
			$(item).removeClass('transitioning');
	});
	
	//p.scrollTop()
});