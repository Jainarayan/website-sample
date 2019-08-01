
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$("#html5modal1").on('hidden.bs.modal', function (e) {
	$("#html5modal1 iframe").attr("src", $("#html5modal1 iframe").attr("src"));
});
$("#html5modal4").on('hidden.bs.modal', function (e) {
	$("#html5modal4 iframe").attr("src", $("#html5modal4 iframe").attr("src"));
});
$("#html5modal5").on('hidden.bs.modal', function (e) {
	$("#html5modal5 iframe").attr("src", $("#html5modal5 iframe").attr("src"));
});
$("#html5modal6").on('hidden.bs.modal', function (e) {
	$("#html5modal6 iframe").attr("src", $("#html5modal6 iframe").attr("src"));
});

$("#animation1").on('hidden.bs.modal', function (e) {
	$("#animation1 iframe").attr("src", $("#animation1 iframe").attr("src"));
});


$("#animation2").on('hidden.bs.modal', function (e) {
	$("#animation2 iframe").attr("src", $("#animation2 iframe").attr("src"));
});	
$("#animation3").on('hidden.bs.modal', function (e) {
	$("#animation3 iframe").attr("src", $("#animation3 iframe").attr("src"));
});
$("#animation4").on('hidden.bs.modal', function (e) {
	$("#animation4 iframe").attr("src", $("#animation4 iframe").attr("src"));
});
$("#animation5").on('hidden.bs.modal', function (e) {
	$("#animation5 iframe").attr("src", $("#animation5 iframe").attr("src"));
});
$("#animation6").on('hidden.bs.modal', function (e) {
	$("#animation6 iframe").attr("src", $("#animation6 iframe").attr("src"));
});
$("#animation7").on('hidden.bs.modal', function (e) {
	$("#animation7 iframe").attr("src", $("#animation7 iframe").attr("src"));
});
$("#animation8").on('hidden.bs.modal', function (e) {
	$("#animation8 iframe").attr("src", $("#animation8 iframe").attr("src"));
});
$("#animation9").on('hidden.bs.modal', function (e) {
	$("#animation9 iframe").attr("src", $("#animation9 iframe").attr("src"));
});
$("#animation10").on('hidden.bs.modal', function (e) {
	$("#animation10 iframe").attr("src", $("#animation10 iframe").attr("src"));
});
$("#animation11").on('hidden.bs.modal', function (e) {
	$("#animation11 iframe").attr("src", $("#animation11 iframe").attr("src"));
});
$("#animation12").on('hidden.bs.modal', function (e) {
	$("#animation12 iframe").attr("src", $("#animation12 iframe").attr("src"));
});
$("#animation13").on('hidden.bs.modal', function (e) {
	$("#animation13 iframe").attr("src", $("#animation13 iframe").attr("src"));
});
$("#animation14").on('hidden.bs.modal', function (e) {
	$("#animation14 iframe").attr("src", $("#animation14 iframe").attr("src"));
});	

jQuery(document).ready(function($){
	//define store some initial variables
	var	halfWindowH = $(window).height()*0.5,
		halfWindowW = $(window).width()*0.5,
		//define a max rotation value (X and Y axises)
		maxRotationY = 2,
		maxRotationX = 2,
		aspectRatio;

	//detect if <img> has been loaded and evaluate its aspect-ratio
	$('.floating-background').find('img, span').eq(0).load(function() {
		aspectRatio = $(this).width()/$(this).height();
  		if( $('html').hasClass('preserve-3d') ) initBackground();
	}).each(function() {
		//check if image was previously load - if yes, trigger load event
  		if(this.complete) $(this).load();
	});
	
	//detect mouse movement
	$('.background-wrapper').each(function(){
		$(this).on('mousemove', function(event){
			var wrapperOffsetTop = $(this).offset().top;
			if( $('html').hasClass('preserve-3d') ) {
				window.requestAnimationFrame(function(){
					moveBackground(event, wrapperOffsetTop);
				});
			}
		});
	});

	//on resize - adjust .background-wrapper and .floating-background dimensions and position
	$(window).on('resize', function(){
		if( $('html').hasClass('preserve-3d') ) {
			window.requestAnimationFrame(function(){
				halfWindowH = $(window).height()*0.5,
				halfWindowW = $(window).width()*0.5;
				initBackground();
			});
		} else {
			$('.background-wrapper').attr('style', '');
			$('.floating-background').attr('style', '').removeClass('is-absolute');
		}
	});

	function initBackground() {
		var wrapperHeight = Math.ceil(halfWindowW*2/aspectRatio), 
			proportions = ( maxRotationY > maxRotationX ) ? 1.1/(Math.sin(Math.PI / 2 - maxRotationY*Math.PI/180)) : 1.1/(Math.sin(Math.PI / 2 - maxRotationX*Math.PI/180)),
			newImageWidth = Math.ceil(halfWindowW*2*proportions),
			newImageHeight = Math.ceil(newImageWidth/aspectRatio),
			newLeft = halfWindowW - newImageWidth/2,
			newTop = (wrapperHeight - newImageHeight)/2;

		//set an height for the .cd-background-wrapper
		$('.background-wrapper').css({
			'height' : wrapperHeight,
		});
		//set dimentions and position of the .cd-background-wrapper		
		$('.floating-background').addClass('is-absolute').css({
			'left' : newLeft,
			'top' : newTop,
			'width' : newImageWidth,
		});
	}

	function moveBackground(event, topOffset) {
		var rotateY = ((-event.pageX+halfWindowW)/halfWindowW)*maxRotationY,
			yPosition = event.pageY - topOffset,
			rotateX = ((yPosition-halfWindowH)/halfWindowH)*maxRotationX;

		if( rotateY > maxRotationY) rotateY = maxRotationY;
		if( rotateY < -maxRotationY ) rotateY = -maxRotationY;
		if( rotateX > maxRotationX) rotateX = maxRotationX;
		if( rotateX < -maxRotationX ) rotateX = -maxRotationX;

		$('.floating-background').css({
			'-moz-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
		    '-webkit-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
			'-ms-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
			'-o-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
			'transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
		});
	}
});

/* 	Detect "transform-style: preserve-3d" support, or update csstransforms3d for IE10 ? #762
	https://github.com/Modernizr/Modernizr/issues/762 */
(function getPerspective(){
  var element = document.createElement('p'),
      html = document.getElementsByTagName('html')[0],
      body = document.getElementsByTagName('body')[0],
      propertys = {
        'webkitTransformStyle':'-webkit-transform-style',
        'MozTransformStyle':'-moz-transform-style',
        'msTransformStyle':'-ms-transform-style',
        'transformStyle':'transform-style'
      };

    body.insertBefore(element, null);

    for (var i in propertys) {
        if (element.style[i] !== undefined) {
            element.style[i] = "preserve-3d";
        }
    }

    var st = window.getComputedStyle(element, null),
        transform = st.getPropertyValue("-webkit-transform-style") ||
                    st.getPropertyValue("-moz-transform-style") ||
                    st.getPropertyValue("-ms-transform-style") ||
                    st.getPropertyValue("transform-style");

    if(transform!=='preserve-3d'){
      html.className += ' no-preserve-3d';
    } else {
    	html.className += ' preserve-3d';
    }
    document.body.removeChild(element);

})();