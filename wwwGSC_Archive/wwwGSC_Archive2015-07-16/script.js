jQuery(function($){

	var CONFIG = {
		pathname: location.pathname,
		referrer: document.referrer,
		relatedSites: [
			{ title: '青山学院サイト',	url: 'http://www.aoyamagakuin.jp/' },
			{ title: '文学部サイト', url: 'http://www.cl.aoyama.ac.jp/' },
			{ title: '教育人間科学部サイト', url: 'http://www.ephs.aoyama.ac.jp/' },
			{ title: '経済学部サイト', url: 'http://www.econ.aoyama.ac.jp/' },
			{ title: '法学部サイト', url: 'http://www.als.aoyama.ac.jp/' },
			{ title: '経営学部サイト', url: 'http://www.agub.aoyama.ac.jp/' },
			{ title: '国際政治経済学部サイト', url: 'http://www.sipeb.aoyama.ac.jp/' },
			{ title: '総合文化政策学部サイト', url: 'http://www.sccs.aoyama.ac.jp/' },
			{ title: '理工学部サイト', url: 'http://www.agnes.aoyama.ac.jp/' },
			{ title: '社会情報学部サイト', url: 'http://www.si.aoyama.ac.jp/' },
			{ title: '国際マネジメント研究科サイト', url: 'http://www.aoyamabs.jp/' },
			{ title: '法務研究科サイト', url: 'http://www.law.aoyama.ac.jp/' },
			{ title: '会計プロフェッション研究科サイト', url: 'http://www.gspa.aoyama.ac.jp/' },
			{ title: '青山コミュニティラボサイト', url: 'http://aclweb.jp/' },
			{ title: 'SMIPRPサイト', url: 'http://www.aoyamasmiprp.jp/' },
			{ title: '図書館サイト', url: 'http://www.agulin.aoyama.ac.jp/' },
			{ title: '情報科学研究センターサイト', url: 'http://www.cc.aoyama.ac.jp/' },
			{ title: '外国語ラボラトリーサイト', url: 'http://www.agufll.aoyama.ac.jp/' },
			{ title: '総合研究所サイト', url: 'http://www.ri.aoyama.ac.jp/' },
			{ title: '社学連携研究センターサイト', url: 'http://www.renkei.aoyama.ac.jp/' },
			{ title: 'WTO研究センターサイト', url: 'http://www.wto.aoyama.ac.jp/' },
			{ title: 'ヒューマンイノベーション研究センターサイト',	url: 'http://www.hirc.aoyama.ac.jp/' },
			{ title: '国際交流共同研究センターサイト', url: 'http://www.jripec.aoyama.ac.jp/' },
			{ title: '国際交流センターサイト', url: 'http://web.iec.aoyama.ac.jp/' },
			{ title: '外国人留学生のための受験案内サイト', url: 'http://web.iec.aoyama.ac.jp/examination/' },
			{ title: 'シラバス検索システムサイト', url: 'http://aogaku-syllabus.jp/' },
			{ title: '青山ポータル', url: 'https://aoyama-portal.aoyama.ac.jp/' },
			{ title: '事務ポータル', url: 'https://portal.jm.aoyama.ac.jp/jim/' },
			{ title: '青山学院大学研究者情報サイト', url: 'http://raweb.jm.aoyama.ac.jp/' },
			{ title: 'ボランティア・ステーションサイト',	 url: 'http://ameblo.jp/agu-vsta/' },
			{ title: '「世界の窓から」（塚本教授からのメッセージ）', url: 'http://glep.sipeb.aoyama.ac.jp/blog1/' },
			{ title: '青学オープンカレッジサイト', url: 'http://www.j-aoyama.jp/opencollege/' },
			{ title: '宗教センターページサイト', url: 'http://www.aoyamagakuin.jp/rcenter/' },
			{ title: '資料センターサイト', url: 'http://www.aoyamagakuin.jp/mcenter/' },
			{ title: '校友センターサイト', url: 'http://www.aoyamagakuin.jp/acenter/' },
			{ title: '青山学院校友会サイト', url: 'http://www.alumni-aogaku.jp/' },
			{ title: '青山学院公式チャンネル', url: 'http://www.youtube.com/user/aogakumovie' }
		]

	}

	var globalNav = function() {
		var elem = $('#nav > ul > li');

		setTimeout(function(){
			elem.on('mouseover mousemove mouseout', function(e) {  
				if (e.type == 'mouseover' || e.type == 'mousemove') {
					$(this).addClass('navHover');
					$(this).find('ul').css('display', 'block');
				} else {
					$(this).removeClass('navHover');
					$(this).find('ul').css('display', 'none');
				}

			});
		}, 1000);

	}();

	var sidenav = function() {
		var elem 		= $( '#sidenav').find( 'ul:first' )
		,	elemLinks	= $( elem ).find( 'a' )
		,	linkFlag	= false;

		// toggle list
		$(elem ).find( '> li > a' ).on( 'click', function () {
			if( !( $(this).attr( 'href' ) == "#" ) ){
				window.location = $(this).attr( 'href' );
			}
			$(this).parent().toggleClass( 'open' );
			return false;
		});

	}();

	var searchPlaceholder = function() {
		var elem 	= $( '#search input[type=text]' )
		,	elemVal = 'サイト内を検索する';
		
		elem.val( elemVal );

		elem.on( {
			focusin: function() {
				if( elem.val() == elemVal ) {
					elem.val( '' );
					elem.addClass( 'placeholder' );
				}
			},
			focusout: function() {
				if( elem.val() == '' ) {
					elem.removeClass( 'placeholder' );
					elem.val( elemVal );
				}
			}
		}).parent().on( 'submit' , function( e ){
			if ( elem.val() == elemVal ) {
				e.preventDefault();
			}
		});
	}();


	var alignColHeight = function(){
		var elem = $('.mod_2col_340');
		if(elem.length && elem.find('.mod_box_02')){
			elem.each(function(){
				var box = $(this).find('.mod_box_02');
				if(box.length == 2){
					$(box[0]).outerHeight() > $(box[1]).outerHeight() && $(box[1]).css('height', $(box[0]).outerHeight() - 31);
					$(box[1]).outerHeight() > $(box[0]).outerHeight() && $(box[0]).css('height', $(box[1]).outerHeight() - 31);
				}
			});
		}
	}();


	var pageBack = function(){
		var elem = $('.mod_pageBack_01');
		if(elem.length && document.referrer){
			var host = location.host
			  , referrer = document.referrer.split('/')[2]
			if(host == referrer){
				var backLink = $('<p class="prevPage"><a href="#">前のページへ戻る</a></p>');
				elem.prepend(backLink)
				backLink.find('a').bind('click', function(){
					history.back(-1);
					return false;
				});
			}
		}
	}();

	var recentPages = function(){
		var pageTitle = document.title.replace('青山学院大学 | ', '')
		,	recentPagesElem = $('<dl class="recentPages"><dt><img src="/img/layout/footer_nav_recentPages.png" alt="最近見たページ" /></dt><dd><ul></ul></dd></dl>')
		,	recentPagesElemUl = recentPagesElem.find('ul')
		,	matchedSites = function() {
			if(CONFIG.referrer == "") return;
			for( j = 0; j < CONFIG.relatedSites.length; j++ ) {
				if( CONFIG.referrer.indexOf(CONFIG.relatedSites[j].url) != -1 ) {
					return CONFIG.relatedSites[j];
				}
			}
		}();

		if ( !localStorage['agu_recentPages'] ){
			if(matchedSites){
				recentPagesElemUl.append($('<li><a href="' + matchedSites.url + '" class="mod_link_01">' + matchedSites.title + '</a></li>'));
				$('#footer_nav .topics').after(recentPagesElem);
				localStorage['agu_recentPages'] = JSON.stringify([{ pageTitle : pageTitle, pagePath : CONFIG.pathname },{ pageTitle : matchedSites.title, pagePath : matchedSites.url }]);
			}
			else{
				localStorage['agu_recentPages'] = JSON.stringify([{ pageTitle : pageTitle, pagePath : CONFIG.pathname }]);
			}
		}
		else{
			var cookieObject = JSON.parse(localStorage['agu_recentPages']);
			if(matchedSites){
				if(cookieObject.length >= 1){
					if(!(cookieObject[0].pageTitle == matchedSites.title && cookieObject[0].pagePath == matchedSites.url)){
						cookieObject[1] = cookieObject[0];
						cookieObject[0] = { pageTitle : matchedSites.title, pagePath : matchedSites.url };
					}
				}
				for(i in cookieObject){
					recentPagesElemUl.append($('<li><a href="' + cookieObject[i].pagePath + '" class="mod_link_01">' + cookieObject[i].pageTitle + '</a></li>'));				
				}
				$('#footer_nav .topics').after(recentPagesElem);
				localStorage['agu_recentPages'] = JSON.stringify(cookieObject);
			}
			else{
				for(i in cookieObject){
					recentPagesElemUl.append($('<li><a href="' + cookieObject[i].pagePath + '" class="mod_link_01">' + cookieObject[i].pageTitle + '</a></li>'));				
				}
				$('#footer_nav .topics').after(recentPagesElem);
				if(cookieObject.length >= 1){
					if(!(cookieObject[0].pageTitle == pageTitle && cookieObject[0].pagePath == CONFIG.pathname)){
						cookieObject[1] = cookieObject[0];
						cookieObject[0] = { pageTitle : pageTitle, pagePath : CONFIG.pathname };
					}
				}
				localStorage['agu_recentPages'] = JSON.stringify(cookieObject);
			}
		}

	}();

	var setlIcons = function(){
		var allElems = $('a:not(:has(img)):not(#cse a)');

		function checkInObj(href, obj) {
			for( j = 0; j < obj.length; j++ ) {
				if( href.indexOf(obj[j].url) != -1 ) {
					return true;
				}
			}
		}

		for( i = 0; i < allElems.length; i++ ) {

			var elemHref = $(allElems[i]).attr('href');

			if(	/^https?:\/\//.test( elemHref ) ) {
				checkInObj( $(allElems[i]).attr('href'), CONFIG.relatedSites) ? 
					$(allElems[i]).addClass( 'ico_external_01' ).attr( "target", "_blank" ) : 
					$(allElems[i]).addClass( 'ico_external_02' ).attr( "target", "_blank" );
			}

			var endMatch = elemHref.match(/^.*\.(pdf|xls|xlsx|doc|mpg)$/i);

			if(endMatch) {
				switch( endMatch[1] ) {
					case 'pdf':
						$(allElems[i]).addClass( 'ico_pdf_01' ).attr( "target", "_blank" );
						break;
					case 'xls':
						$(allElems[i]).addClass( 'ico_excel_01' );
						break;
					case 'xlsx':
						$(allElems[i]).addClass( 'ico_excel_01' );
						break;
					case 'doc':
						$(allElems[i]).addClass( 'ico_word_01' );
						break;
					case 'mpg':
						$(allElems[i]).addClass( 'ico_media_01' ).attr( "target", "_blank" );
						break;
				}
			}

		}

	}();

	var encodeURL = function(){
		var elem = $('.encodeURL');
		if( elem.length ){
			$(elem).on('click', function(e){
				e.preventDefault();
				window.location = encodeURI( $(this).attr( 'href' ) );
			});
		}
	}();

	var rollover = function(){
		var hovimgend = "_hov"
		,	pattern = /(\.\w+$)/;

		$('img.hover[src], input.hover[src]')
			.each( function(){
				var nimg = new Image;
				nimg.src = $(this)[0].src.replace(pattern, hovimgend + '$1');
			})
			.on( 'mouseover mouseout', function( event ) {
				var img = $(this)[0]
				,	matches = img.src.match(/hovimgend/);

				if(!matches && event.type == 'mouseover'){
					img.src = img.src.replace(pattern, hovimgend + '$1');
				}
				else{
					img.src = img.src.replace(hovimgend, '');
				}
				$(window).bind( 'unload', function(){
					img.src = img.src.replace(hovimgend, '');
				});

			});

	}();

	var footerTabs = function(){

		if(localStorage['agu_footerTab']){
			var savedIndexStorage = JSON.parse(localStorage['agu_footerTab'])
			,	indexPosition = savedIndexStorage[0].tab.charAt( savedIndexStorage[0].tab.length-1 ) - 1;
		}

		$('#footer_nav').uaTab({
			defaultIndex: indexPosition || 0,
			selector_tabs: '.nav_tabs',
			selector_contents: '.nav_contents',
			className_active: 'cur',
			transition: 'fade',
			transitionSpeed: 300,
			wai_aria: true,
			useHash: false,
			tabImageMode: true,
			tabImageHoverSuffix: false,
			tabImageActiveSuffix: '_cur',
			complete: function(message){
				$('.nav_contents').css({
					height: $('.nav_contents > div:visible').outerHeight()
				})

				footerBanners(message.content, message.relatedContent);
			}
		}).find('.nav_tabs a').on('click', function(){
			localStorage['agu_footerTab'] = JSON.stringify([{ tab : $(this).attr('href') }]);
		});
	}();

	var footerBanners = function(bannerElem, prevBannerElem){

		var Reel = function(bannerElem, prevBannerElem){
			this.bannerElem = bannerElem.find('.banners');
			this.prevBannerElem = prevBannerElem && prevBannerElem;
			this.reelWraper = this.bannerElem.find('ul');
			this.reelElems = this.reelWraper.find('li');
			this.animTimer = '';
			this.automate = this.bannerElem.hasClass('auto');
			this.init();
		}
		Reel.prototype = {
			init: function(){
				this.setWidth();
				this.setStage();
				if(this.automate){
					this.autoAnimate();
				}
			},
			setWidth: function(elem){
				var totalWidth = 0;
				for(i=0;i<this.reelElems.length;i++){
					totalWidth = totalWidth + $(this.reelElems[i]).outerWidth();
				}
				this.reelWraper.width(totalWidth + 368);
			},
			setStage: function(){
				if(this.reelElems.length > 5){
					if(!this.bannerElem.data('old-state')){
						this.bannerElem.data('old-state', this.bannerElem.clone());
						this.reelElems.eq(0).clone().appendTo(this.reelWraper);
						this.reelElems.eq(-1).clone().prependTo(this.reelWraper);
					}
					else{
						this.reelElems.eq(0).clone().appendTo(this.reelWraper);
						this.reelElems.eq(-1).clone().prependTo(this.reelWraper);
					}
					this.bannerElem.find('ul').css('margin-left', '-184px');
					this.attachPaddles();
				}
				if(prevBannerElem && prevBannerElem.find('.banners').data('old-state')){
					var prevElem = prevBannerElem.find('.banners');
					prevElem.html(prevElem.data('old-state').html());
				}
			},
			autoAnimate: function(){
				var self = this;
				if ( this.animTimer == '' ) {
					this.animTimer = setTimeout(function(){  
					      self.animateNext();
					}, 7000);
				}
			},
			clearAnimate: function(){
				clearTimeout(this.animTimer);
				this.animTimer = '';
				if(this.automate) this.autoAnimate();	
			},
			animateNext: function(){
				var self = this;
				this.reelWraper.animate({'marginLeft': '-368px'}, 500, function(){
					$(this).find('li').eq(0).remove();
					$(this).find('li').eq(1).clone().appendTo($(this));
					$(this).css('margin-left', '-184px');
				});
				this.clearAnimate();
			},
			animatePrev: function(){
				var self = this;
				this.reelWraper.animate({'marginLeft': '0'}, 500, function(){
					$(this).find('li').eq(-1).remove();
					$(this).find('li').eq(-2).clone().prependTo($(this));
					$(this).css('margin-left', '-184px');
				});
				this.clearAnimate();
			},
			attachPaddles: function(){
				this.bannerElem.append('<div class="paddle_btn prev"></div>');
				this.bannerElem.prepend('<div class="paddle_btn next"></div>');
				this.attachPaddleEvent();
			},
			attachPaddleEvent: function(){
				var self = this;
				this.bannerElem.find('.paddle_btn').bind('click', function(){
					if($(this).hasClass('prev')){
						if(self.reelWraper.is(":animated")){
							return false;
						}				
						else{
							self.animatePrev();
						}		
					}
					if($(this).hasClass('next')){
						if(self.reelWraper.is(":animated")){
							return false;
						}				
						else{
							self.animateNext();
						}				
					}
					return false;					
				});
			}
		}

		var reel = new Reel(bannerElem, prevBannerElem);

	};

	var closePopup = function(){
		$('#header #close a').on('click', function(){
			window.close();
		});
	}();

});