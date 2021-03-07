$(".header .nav-item .nav-link").on("click", function () {
    $(".header .nav-item").removeClass("active");
    $(this).parent().addClass("active");
});



$('.header a[href^="#"]').on('click',function (e) {
    // e.preventDefault();
    var window_width = $( window ).width();
    if (window_width > 767) {
        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-63
        }, 400, 'swing', function () {
            window.location.hash = target;
        });
    }
    else {
        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-54
        }, 400, 'swing', function () {
            window.location.hash = target;
        });
        $('.navbar-toggler').click();
    }
});

$('.banner a[href^="#"]').on('click',function (e) {
    // e.preventDefault();
    var window_width = $( window ).width();
    if (window_width > 767) {
        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-63
        }, 400, 'swing', function () {
            window.location.hash = target;
        });
    }
    else {
        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-54
        }, 400, 'swing', function () {
            window.location.hash = target;
        });
        $('.navbar-toggler').click();
    }
});





const user_form = document.getElementById('user-form');
const fname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const thankyoumessage = document.getElementById('thankyoumessage');
const all_input = document.querySelectorAll('#user-form .form-group');

user_form.addEventListener('submit', e => {
	e.preventDefault();
	var check_input = checkInputs();
    console.log(check_input);
    if (check_input === 4) {
        all_input.forEach(function(el) {
            el.classList.remove("success");
        })
        thankyoumessage.style.display = "inline-block";
        user_form.reset();
        message.value = '';
    }
});

function checkInputs() {
	// trim to remove the whitespaces
	const fnameValue = fname.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	const messageValue = message.value.trim();
    var count = 0;
	
	if(fnameValue === '') {
		setErrorFor(fname, 'Name cannot be blank');
	} else if (!isFullname(fnameValue)) {
		setErrorFor(fname, 'Please enter full name');
	} else {
		setSuccessFor(fname);
        count++;
	}
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
        count++;
	}
	
	if(phoneValue === '') {
		setErrorFor(phone, 'Phone cannot be blank');
	} else if (!isPhone(phoneValue)) {
		setErrorFor(phone, 'Not a valid Phone number');
	} else {
		setSuccessFor(phone);
        count++;
	}
	if(messageValue === '') {
		setErrorFor(message, 'Message cannot be blank');
	} else {
		setSuccessFor(message);
        count++;
	}
    return count;
}

function setErrorFor(input, message) {
	const formGroup = input.parentElement;
	const small = formGroup.querySelector('small');
	formGroup.className = 'form-group error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formGroup = input.parentElement;
	formGroup.className = 'form-group success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPhone(phone) {
	return /^[6-9]\d{9}$/.test(phone);
}
function isFullname(fname) {
	return /^([\w]{3,})+\s+([\w\s]{3,})+$/i.test(fname);
}

