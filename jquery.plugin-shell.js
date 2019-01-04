(function(win, doc, $, undefined){
	'use strict';

	//jQuery 유틸리티 메소드 확장
	$.extend($,{
	 'version': function(){console.log($.fn.jquery);}
	});

	//jQuery.fn 인스턴스 메소드 확장
	$.extend($.fn,{
		'method': function(options){
			var $origin = this;
			return $.each($origin, function(index, el){

			};
		}
	});
})(window, document, jQuery);