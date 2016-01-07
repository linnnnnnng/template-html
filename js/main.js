/*!
 * 
 * SWFAddress Handle here
 *
 */
var title = document.title;
var track = function() {
	//console.log('track: ' + arguments[0]);
};
// Serialization utility
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
	//console.log('change: ' + serialize(event, /parameters|parametersNames|path|pathNames|queryString|value/));
	goPage(event.pathNames);
	
	//output sub pages
	if(event.parameters.sample!=undefined){
		$('.page2Output').html("Output "+event.parameters.sample)
	}
})


/*!
 * 
 * All your scripts insert here
 * 
 */
var isTablet, isMobile;
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
	
	isTablet = (/ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent.toLowerCase()));
	
	//mobile and tablet detection
	if($.browser.mobile || isTablet){
		//if is mobile or tablet
	}
});

function goPage(sPage){
	sPage=sPage==''?'home':sPage;
	var pageCheck=sPage=='home'?'/':sPage;
	
	$('#navigation li').each(function(){
		//remove highlighted class
		$(this).removeClass('selected');
		
		//grab navigation address
		var curRel=$(this).find('a').attr('rel');
		//remove address:/
		curRel=curRel.substring(9,curRel.length-1);
		//check page exist
		if(curRel==pageCheck){
			//add highlight class
			$(this).addClass('selected');
			//toggle contens
			$('.mainContent').each(function(){
				$(this).hide();
			});
			$('.mainWrapper').find('#'+sPage).show();
		}
	});
}