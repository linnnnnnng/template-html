/*!
 * 
 * SWFAddress Handle here
 *
 */
var title = document.title;
var log = function(msg) {
	var log = $('.log');
	if (!log.size()) {
		//log = $('<div class="log" />').appendTo('.footer');
	}
	log.append(msg.replace(/^([^:]*):(.*)$/, '<p><b>$1:</b> <span class="$1">$2</span></p>'))
		.attr({scrollTop: log.attr('scrollHeight')})
		.find('p:nth-child(even)').addClass('even');
};
var track = function() {
	log('track: ' + arguments[0]);
};
var serialize = function(obj, re) {
	var result = [];
	$.each(obj, function(i, val) {
		if ((re && re.test(i)) || !re)
			result.push(i + ': ' + (typeof val == 'object' ? val.join 
				? '\'' + val.join(', ') + '\'' : serialize(val) : '\'' + val + '\''));
	});
	return '{' + result.join(', ') + '}';
};

$.address.init(function(event) {
    
}).change(function(event) {
	log('change: ' + event.pathNames);
	selectPage(event.pathNames, event.parameters.back);
	
	if(event.parameters.sample!=undefined){
		$('.page2Output').html("Output "+event.parameters.sample)
	}
})


/*!
 * 
 * All your scripts insert here
 * 
 */
$(function() {
	
	//fancy box init
	$('.fancybox').fancybox();
	$(".fancyIframe").click(function() {
		$.fancybox.open({
			href : 'iframe.html',
			type : 'iframe',
			padding : 5
		});
	});
	
	//nice scroll init
	$(".scrollbar").niceScroll({autohidemode:true});
	//below is to fix scrollbar auto hide issue when content is hide
	$('.scrollbar').mouseenter(function() {
		$(".scrollbar").getNiceScroll().doScrollPos(0,0);
	});
});

function selectPage(selectedPage){
	selectedPage=selectedPage==''?'home':selectedPage
	var checkLink=selectedPage=='home'?'/':selectedPage
	$('#navigation li').each(function(){
		$(this).removeClass('selected');
		var curRel=$(this).find('a').attr('rel');
		if(curRel.substring(9,curRel.length-1)==checkLink){
			$(this).addClass('selected');
		}
	});
	$('.mainContent').each(function(){
		$(this).hide();
	});
	$('.mainWrapper').find('#'+selectedPage).show();
}