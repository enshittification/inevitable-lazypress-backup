var $ = jQuery,
	list;

function onPageInfo( clippings, pageData )  {
	var html = '';
	clippings.forEach(function(clipping){
		html += '<li>' + clipping + '</li>';
	});
	list.html( html );
}

$( window ).load(function(){
	list = $( '#clippings' );
	chrome.extension.getBackgroundPage().getPageInfo( onPageInfo );
});