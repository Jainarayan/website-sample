
// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

$('#linkedin').mouseover(function(){
	$('#linkedin').attr('src', 'img/logos/social-media-in-btn-red.png');
})

$('#linkedin').mouseout(function(){
	$('#linkedin').attr('src', 'img/logos/social-media-in-btn-blue.png');
})

$('#gmail').mouseover(function(){
	$('#gmail').attr('src', 'img/logos/social-media-g-btn-red.png');
})

$('#gmail').mouseout(function(){
	$('#gmail').attr('src', 'img/logos/social-media-g-btn-blue.png');
})

$('#pinterest').mouseover(function(){
	$('#pinterest').attr('src', 'img/logos/social-media-p-btn-red.png');
})

$('#pinterest').mouseout(function(){
	$('#pinterest').attr('src', 'img/logos/social-media-p-btn-blue.png');
})

$('#fb').mouseover(function(){
	$('#fb').attr('src', 'img/logos/social-media-f-btn-red.png');
})

$('#fb').mouseout(function(){
	$('#fb').attr('src', 'img/logos/social-media-f-btn-blue.png');
})


$('#twitter').mouseover(function(){
	$('#twitter').attr('src', 'img/logos/social-media-t-btn-red.png');
})

$('#twitter').mouseout(function(){
	$('#twitter').attr('src', 'img/logos/social-media-t-btn-blue.png');
})

$("#contactButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 2000);
});

$(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.service-content').each( function(i){            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){                
                $(this).animate({'opacity':'1'},1000);                    
            }            
        }); 
		
		$('.h2-effect, .showParagraph').each( function(i){            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){                
                $(this).animate({'opacity':'1'},1000);                    
            }            
        }); 
		
});

$(window).scroll( function(){	
  var scroll = $(window).scrollTop();
	/* console.log(scroll); */
  $(".parallel-img").css({

    width: (100 + scroll/5)  + "%",

    top: -(scroll/10)  + "%",

    "-webkit-filter": "blur(" + (scroll/100) + "px)",

    filter: "blur(" + (scroll/100) + "px)"
    
    });
});
	

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('.navbar-toggle').mouseover(function(){
	$('.icon-bar').css('background-color', '#fff');
})
$('.navbar-toggle').mouseout(function(){
	$('.icon-bar').css('background-color', '#e50c14');
})

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
	$(".paroller-right, [data-paroller-factor]").paroller({
		factor: 0.3,            // multiplier for scrolling speed and offset
		factorXs: -0.01,           // multiplier for scrolling speed and offset
		factorSm: -0.1,
		factorMd: -0.2,
		factorLg: -0.3,
		factorXl: -0.3,
		type: 'foreground',     // background, foreground
		direction: 'horizontal', // vertical, horizontal
		transition: 'transform 0.5s ease-in' // CSS transition
	});
	$(".paroller-left, [data-paroller-factor]").paroller({
		factorXs: -0.05,
		factor: -0.4,
		factorSm: 0.1,
		factorMd: -0.4,
		factorLg: -0.5,
		factorXl: -0.6,
		type: 'foreground',
		direction: 'horizontal',
		transition: 'transform 0.5s ease-in'
	});	
});

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

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 2000);
});