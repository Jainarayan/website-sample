
/* $(window).scroll(lazy);
   */
   /*  lazy();
 */
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


/* 
            $(window).scroll(function() {
                if ($(".service-content").height() <= ($(window).height() + $(window).scrollTop())) {
                    $(".service-content").css("display","block");
                }else {
                    $(".service-content").css("display","none");
                }
            }); */



/*  $(function() {
	 $('#1').lazy({
		bind: "event"
	});
	
} */

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
		
		$('.h2-effect').each( function(i){
            
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

const rotateBox = basicScroll.create({
	elem: document.querySelector('.client-item'),
	from: 'bottom-bottom',
	to: 'top-middle',
	props: {
		'--r': {
			from: '0',
			to: '1turn'
		}
	}
})



// Start all instances
rotateBox.start()
/* fadeBox.start()
easeBoxes.forEach((easeBox) => easeBox.start()) */

// Recalculate all positions and update all properties manually when the viewport size changes.
// Debounce this function in production to avoid unnecessary calculations.
window.onresize = function() {

	rotateBox.calculate()
	/* fadeBox.calculate()
	easeBoxes.forEach((easeBox) => easeBox.calculate()) */

	rotateBox.update()/* 
	fadeBox.update()
	easeBoxes.forEach((easeBox) => easeBox.update()) */

}