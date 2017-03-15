$(document).ready(function(){
      $(".parallax").parallax();
    });
$(document).ready(function(){
	 $(".button-collapse").sideNav();
	});
$(document).ready(function(){
    $('.collapsible').collapsible();
  });

$(document).ready(function(){
	$(window).scroll(function(){
		var y = $(this).scrollTop();
		var container_pos = $(".container-animation").position();
		var container_height = $ (".container-animation").height();
		if( y >= (container_pos.top - container_height -100)){
			$(".container-animation img").addClass("slide");

		}

	});


});

$(document).ready(function() {

	$(window).scroll(function(event) {
		var y = $(this).scrollTop();
		if (y >= 1700) {
			$(".container-semantic img").addClass("animated fadeInUp");
		}

	});
});