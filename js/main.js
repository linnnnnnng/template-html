// SWFADDRESS handle function
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
})


// All your scripts insert here
$(function() {
	//whatever you want to do put here
	$('.fancybox').fancybox();
	
	$(".fancyIframe").click(function() {
		$.fancybox.open({
			href : 'iframe.html',
			type : 'iframe',
			padding : 5
		});
	});
	

});