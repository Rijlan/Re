//navbar
$(document).ready(function(){

	var myNavBar = {
		flagAdd: true,
		elements: [],
		init: function (elements) {
			this.elements = elements;
		},

		add : function() {
			if(this.flagAdd) {
				for(var i=0; i < this.elements.length; i++) {
					document.getElementById(this.elements[i]).className += " fixed-theme";
				}
				this.flagAdd = false;
			}
		},

		remove: function() {
			for(var i=0; i < this.elements.length; i++) {
				document.getElementById(this.elements[i]).className = 
				document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g, '');
			}
			this.flagAdd = true;
		}
	};

	myNavBar.init( [
		"header",
		"header-container",
		"brand"
		]);

	function offSetManager(){

		var yOffset = 0;
		var currYOffset = window.pageYOffset;

		if(yOffset < currYOffset) {
			myNavBar.add();
		}
		else if(currYOffset == yOffset){
			myNavBar.remove();
		}
	}

	window.onscroll = function(e) {
		offSetManager();
	}

	offSetManager();
});

//back to top

if ($('#back-to-top').length) {
    var scrollTrigger = 400,
    backToTop = function () {
        var scrollTop =
        $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
            $('#back-to-top').addClass('show');
        } else {
            $('#back-to-top').removeClass('show');
        }
    };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 100);
    });
}