function doSomething(e){"/index.html"!==window.location.pathname&&"/index-en.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-sic-chile/index.html"!==window.location.pathname&&"/project-sic-chile/index-en.html"!==window.location.pathname&&"/project-sic-chile/"!==window.location.pathname||(e>30?(siteNavbar.classList.add("navbar-scroll"),$(".navbar-logo").removeClass("show-icon"),$(".navbar-logo-scroll").addClass("show-icon"),navSeparator.style.backgroundColor="#5275a7",$(".navbar-sections-title").addClass("navbar-sections-scroll"),$(".navbar-dropdown-icon-scroll").addClass("show-icon"),$(".navbar-dropdown-icon").removeClass("show-icon"),$(".navbar-hamburger-icon-scroll").addClass("show-icon"),$(".navbar-hamburger-icon").removeClass("show-icon")):(siteNavbar.classList.remove("navbar-scroll"),$(".navbar-logo").addClass("show-icon"),$(".navbar-logo-scroll").removeClass("show-icon"),navSeparator.style.backgroundColor="#ffffff",$(".navbar-sections-title").removeClass("navbar-sections-scroll"),$(".navbar-dropdown-icon-scroll").removeClass("show-icon"),$(".navbar-dropdown-icon").addClass("show-icon"),$(".navbar-hamburger-icon-scroll").removeClass("show-icon"),$(".navbar-hamburger-icon").addClass("show-icon")))}function showMenu(){document.querySelector("#menuContainer").style.width="85%",document.querySelector("#hamburgerMenu").style.display="none"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline"}function myFunction(){document.getElementById("myDropdown").classList.toggle("show")}function myFunction2(){document.getElementById("myDropdown2").classList.toggle("show")}function myFunction3(){document.getElementById("myDropdown3").classList.toggle("show")}function myFunctionHamburger(){document.getElementById("myDropdownHamburger").classList.toggle("show")}function myFunction2Hamburger(){document.getElementById("myDropdown2Hamburger").classList.toggle("show")}function myFunction3Hamburger(){document.getElementById("myDropdown3Hamburger").classList.toggle("show")}var aboutCarousel=$(".about-cards-carousel");aboutCarousel.owlCarousel({loop:!1,nav:!1,dots:!0,autoWidth:!0,margin:38,responsive:{0:{items:1,autoWidth:!0,center:!0,loop:!0},1221:{items:3}}}),aboutCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='about-navigation-controls'></div>")}),function(){$.validator.setDefaults({invalidHandler:function(e,o){var i=$(this);i.find(".form-message").removeClass(i.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var o=$(e).serialize(),i=$(e).find("select, input, textarea, button").not("[disabled]"),n=$(e).find(".form-message"),a=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),s=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),t=function(e){var o=e?a:s;i.removeAttr("disabled"),n.removeClass(e?"error":"success"),n.addClass(e?"success":"error"),n.html(o)};i.attr("disabled","disabled"),n.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:o}).done(function(o){t(1===parseInt(o)),e.reset()}).fail(function(){t(!1)}).always(function(){i.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}(),$('form[name="sic-contact-form"]').validate({name:"required",email:"required",messages:{name:"Por favor, introduce tu nombre",email:"Por favor introduce tu correo electrónico"},submitHandler:function(e){var o=$('form[name="sic-contact-form"]').serialize();console.log(o),$.ajax({url:"http://integrations.blick.mx/sic/contact/form/",method:"POST",data:o}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Se ha enviado el email. Gracias por contactarnos!."),$('form[name="sic-contact-form"]')[0].reset())})},invalidHandler:function(e,o){var i=o.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica la información. Tienes "+i+" errores.")}}),$('form[name="sic-contact-form-en"]').validate({name:"required",email:"required",messages:{name:"Please, enter your name",email:"Please, enter your email"},submitHandler:function(e){var o=$('form[name="sic-contact-form-en"]').serialize();console.log(o),$.ajax({url:"http://integrations.blick.mx/sic/contact/form/",method:"POST",data:o}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("The email has been sent. Thanks for contact us!"),$('form[name="sic-contact-form-en"]')[0].reset())})},invalidHandler:function(e,o){var i=o.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verify yout information. You have "+i+" errors.")}});var homeCoverCarousel=$(".home-cover-carousel");homeCoverCarousel.owlCarousel({loop:!1,nav:!1,dots:!0,autoplay:!0,autoplayTimeout:5e3,smartSpeed:700,responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),homeCoverCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-navigation-controls'></div>")}),$(function(){$("#changeCdmx").click(function(){$("#iframeLocations").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15056.113334600932!2d-99.1590839!3d19.3679258!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xec1e2c54ac88ff04!2sSIC!5e0!3m2!1ses-419!2smx!4v1527528235518")}),$("#changeEdomex").click(function(){$("#iframeLocations").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15042.278221475199!2d-99.2110856!3d19.5171465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9b00e535cc2c176b!2sSIC+Comercializaci%C3%B3n+y+Servicios!5e0!3m2!1ses-419!2smx!4v1527528449192")}),$("#changeGuadalajara").click(function(){$("#iframeLocations").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14931.97732739294!2d-103.3849958!3d20.6698096!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc849ef5165d88145!2sSIC+Comercializaci%C3%B3n+y+Servicios!5e0!3m2!1ses-419!2smx!4v1527528639364")}),$("#changeMonterrey").click(function(){$("#iframeLocations").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14382.935083291552!2d-100.3428762!3d25.6801186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85955ecaad366e8a!2sSic+Comercializaci%C3%B3n+Y+Servicios!5e0!3m2!1ses-419!2smx!4v1527528793920")}),$("#changeBogota").click(function(){$("#iframeLocations").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14382.935083291552!2d-100.3428762!3d25.6801186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85955ecaad366e8a!2sSic+Comercializaci%C3%B3n+Y+Servicios!5e0!3m2!1ses-419!2smx!4v1527528793920")}),$("#changeMedellin").click(function(){$("#iframeLocations").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14382.935083291552!2d-100.3428762!3d25.6801186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85955ecaad366e8a!2sSic+Comercializaci%C3%B3n+Y+Servicios!5e0!3m2!1ses-419!2smx!4v1527528793920")}),$("#changeSantiago").click(function(){$("#iframeLocations").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14382.935083291552!2d-100.3428762!3d25.6801186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85955ecaad366e8a!2sSic+Comercializaci%C3%B3n+Y+Servicios!5e0!3m2!1ses-419!2smx!4v1527528793920")}),$("#changeBuenosAires").click(function(){$("#iframeLocations").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13135.28630949665!2d-58.3854958!3d-34.608673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7d28e5176b8b0c2a!2sSIC+Argentina!5e0!3m2!1ses-419!2smx!4v1527529211008")})}),$(function(){$(".material-input").focus(function(){$(this).parent().addClass("is-active is-completed")}),$(".material-input").focusout(function(){""===$(this).val()&&$(this).parent().removeClass("is-completed"),$(this).parent().removeClass("is-active")})});var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".navbar"),navSeparator=document.querySelector(".navbar-separator");doSomething(),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(e){e.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");hideHamburger.addEventListener("touchstart",function(e){e.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(e){e.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(e){e.preventDefault(),hideMenu()}),function(){window.onclick=function(e){if(!e.target.matches(".open-dropdown")){var o,i=document.getElementsByClassName("dropdown-content");for(o=0;o<i.length;o++){var n=i[o];n.classList.contains("show")&&n.classList.remove("show")}}}}(),$('form[name="sic-quote-form"]').validate({name:"required",email:"required",company:"required",messages:{name:"Por favor, introduce tu nombre",email:"Por favor introduce tu correo electrónico",company:"Por favor selleciona una solución"},submitHandler:function(e){var o=$('form[name="sic-quote-form"]').serialize();console.log(o),$.ajax({url:"http://integrations.blick.mx/sic/quote/form/",method:"POST",data:o}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Se ha enviado el email. Gracias por contactarnos!."),$('form[name="sic-quote-form"]')[0].reset())})},invalidHandler:function(e,o){var i=o.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica la información. Tienes "+i+" errores.")}}),$('form[name="sic-quote-form-en"]').validate({name:"required",email:"required",company:"required",messages:{name:"Please, enter your name",email:"Please, enter your email",company:"Please, select a solution"},submitHandler:function(e){var o=$('form[name="sic-quote-form-en"]').serialize();console.log(o),$.ajax({url:"http://integrations.blick.mx/sic/quote/form/",method:"POST",data:o}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("The email has been sent. Thanks for contact us!"),$('form[name="sic-quote-form-en"]')[0].reset())})},invalidHandler:function(e,o){var i=o.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verify yout information. You have "+i+" errors.")}});var solutionsCarousel=$(".solutions-carousel"),solutionsCarouselMobile=$(".solutions-carousel-mobile");solutionsCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="solutions-navigation-icon" src="img/icons/icon-arrow-left.png" />','<img class="solutions-navigation-icon" src="img/icons/icon-arrow-right.png" />'],responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),solutionsCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='solutions-navigation-controls'></div>")}),solutionsCarouselMobile.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="solutions-navigation-icon" src="img/icons/icon-arrow-left.png" />','<img class="solutions-navigation-icon" src="img/icons/icon-arrow-right.png" />'],responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),solutionsCarouselMobile.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='solutions-navigation-controls'></div>")});var whereWeAreCarousel=$(".where-carousel"),whereWeAreCarouselMobile=$(".where-carousel-mobile"),wherePinsCarouselMobile=$(".where-pins-carousel-mobile");whereWeAreCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="solutions-navigation-icon" src="img/icons/icon-arrow-left.png" />','<img class="solutions-navigation-icon" src="img/icons/icon-arrow-right.png" />'],responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),whereWeAreCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='where-carousel-navigation'></div>")}),whereWeAreCarouselMobile.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="solutions-navigation-icon" src="img/icons/icon-arrow-left.png" />','<img class="solutions-navigation-icon" src="img/icons/icon-arrow-right.png" />'],responsive:{0:{items:1},700:{items:1},880:{items:1},1301:{items:1}}}),whereWeAreCarouselMobile.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='where-carousel-navigation'></div>")}),wherePinsCarouselMobile.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<img class="solutions-navigation-icon" src="img/icons/icon-arrow-left.png" />','<img class="solutions-navigation-icon" src="img/icons/icon-arrow-right.png" />'],responsive:{0:{items:1},700:{items:1},880:{items:1},1301:{items:1}}}),wherePinsCarouselMobile.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='where-pins-carousel-navigation-mobile'></div>")});