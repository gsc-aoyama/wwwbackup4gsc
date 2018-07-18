
/* top tab
-----------------------------------------------------
*/
$(function() {
	$("#TabNews li a").click(function() {
		var num = $("#TabNews li a").index(this);
		$(".c-scroll").addClass('disnon');
		$(".c-scroll").eq(num).removeClass('disnon');
		$("#TabNews li a").removeClass('select');
		$(this).addClass('select')
	});
});

/* pageScroller
-----------------------------------------------------
*/
$(function() {
	var topBtn = $('#pageTop');	
	topBtn.hide();
	//スクロールが70に達したらボタン表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 70) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	//スクロールしてトップ
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
});

/* local navigation
-----------------------------------------------------
*/

$(function() {
$('#NavLocal ul li ul').hide();

/* -level2-------------------------------------- */

	$("#NavLocal ul > li").children("a").each(function(){
		var currentHref = this.href;
		var currentHeadingImage = $("h1 img").attr("alt"); 
		var currentHeadingText = $("h1.hLv1").text();
		var currentMenuText = $(this).text();
		
		if (document.location == currentHref || currentHeadingText == currentMenuText) {
			$(this).siblings().show();
			$(this).siblings().children("li").children("ul").show();
			if ($(this).parent().is(":has(ul)")){
				$(this).parent().addClass("active").addClass("lv1"); //includes children
			} else {
				$(this).parent().addClass("active"); //no children
			}
		};
	});
	
/* -level3-------------------------------------- */

	$("#NavLocal ul > li > ul > li").children("a").each(function(){
		var currentHref = this.href;
		var nowUrl = document.location.href;
		var smartUrl, n;
		n = nowUrl.lastIndexOf("/");
		smartUrl = nowUrl.substring(0,n);
		
		if (nowUrl == currentHref) {	
			$(this).parent().addClass("active");
		};
		
		if (currentHref.indexOf(smartUrl) > -1) {
			var currentHeadingImage = $("h1 img").attr("alt"); 
			var currentHeadingText = $("h1.hLv1").text();
			var currentMenuText = $(this).text();
			if ( document.location == currentHref || currentHeadingImage == currentMenuText || currentHeadingText == currentMenuText ){
				$(this).parent().parent().show();
				$(this).siblings().show();
				$(this).parent().addClass("active");
				$(this).parent().parent().parent("li").addClass("active");
				$(this).parent().parent().parent().children("a").addClass("connote");
			};	
		};
	});

/* -level4-------------------------------------- */

															  
	$("#NavLocal ul > li > ul > li > ul > li").children("a").each(function(){
		var currentHref = this.href;
		var nowUrl = document.location.href;
		var smartUrl, n;
		n = nowUrl.lastIndexOf("/");
		smartUrl = nowUrl.substring(0,n);
		if (document.location == currentHref) {
			$(this).parent().addClass("active");
			
		};
		if (currentHref.indexOf(smartUrl) > -1) {
			var currentHeadingImage = $("h1 img").attr("alt"); 
			var currentHeadingText = $("h1.hLv1").text();
			var currentMenuText = $(this).text();
			if ( document.location == currentHref || currentHeadingImage == currentMenuText || currentHeadingText == currentMenuText ){
			
				$(this).parent().parent().show();
				$(this).parent().parent().parent().parent().show();
				$(this).parent().parent().parent().parent().parent().children("a").addClass("connote");
				
				
			};
		};
	});	

});
