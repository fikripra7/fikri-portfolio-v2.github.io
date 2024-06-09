$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});


/******************************************************************************************************************************
Learn More Page Scroll
*******************************************************************************************************************************/
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/ 
(function() {

	var bodyEl = document.body,
		//content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		/* close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
		*/
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();

// Formspree
var form = document.getElementById("formcontact");

  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);

    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("pesan").value;
    if (nama != "" && email != "" && message != "") {
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "<div class='alert alert-success pt-2 pb-2' role='alert'><i class='fa fa-check-square-o me-1'></i>Thanks for your message!</div>";
        form.reset()
      }).catch(error => {
        status.innerHTML = "<div class='alert alert-danger pt-2 pb-2' role='alert'><i class='fa fa-exclamation me-1'></i>Oops! There was a problem submitting your form</div>"
      });
    }else if(nama == "") {
      status.innerHTML = "<div class='alert alert-danger pt-2 pb-2' role='alert'><i class='fa fa-exclamation me-1'></i> Full Name field is empty</div>";
    }else if (email == "") {
      status.innerHTML = "<div class='alert alert-danger pt-2 pb-2' role='alert'><i class='fa fa-exclamation me-1'></i>Email field is empty</div>";
    }else if (message == "") {
      status.innerHTML = "<div class='alert alert-danger pt-2 pb-2' role='alert'><i class='fa fa-exclamation me-1'></i>You must type your message</div>";
    }else {
      status.innerHTML = "<div class='alert alert-danger pt-2 pb-2' role='alert'><i class='fa fa-exclamation me-1'></i>You must fill this form first!</div>";
    }

    
  }
  form.addEventListener("submit", handleSubmit)
