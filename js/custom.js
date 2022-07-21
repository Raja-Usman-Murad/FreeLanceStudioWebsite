
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }

});
console.log('usman');
const contactForm = document.querySelector("#contactForm");
      $(contactForm).submit(async (e) => {
        e.preventDefault();
              let name = document.querySelector("#name").value;
      let email = document.querySelector("#email").value;
      let message = document.querySelector("#message").value;
        let formObj = {
          name,
          email,
          message,
        };
        console.log(formObj);
        try {
          const response = await fetch(
            `https://freelancestudio-18c8a-default-rtdb.firebaseio.com/freelancer.json`,
            {
              method: "POST",
              body: JSON.stringify(formObj),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          document.querySelector("#name").value = "";
          document.querySelector("#email").value = "";
          document.querySelector("#message").value = "";
          alert("your Request Submitted Successfully")
        } catch (error) {
          alert("Try Again")
          // $("#error").fadeIn();
          // $(".modal").modal("hide");
          // $("#error").modal("show");
        }
      });
  })(window.jQuery);


  // $(document).ready(function () {
  //   (function ($) {
  //     const contactForm = document.querySelector("#contactForm");
  //     let name = document.querySelector("#name").value;
  //     let email = document.querySelector("#email").value;
  //     let subject = document.querySelector("#subject").value;
  //     let message = document.querySelector("#message").value;
  //     $(contactForm).submit(async (e) => {
  //       e.preventDefault();
  //       let formObj = {
  //         name,
  //         email,
  //         subject,
  //         message,
  //       };
  //       try {
  //         const response = await fetch(
  //           `https://my-portfolio-website-61e43-default-rtdb.firebaseio.com/userForm.json`,
  //           {
  //             method: "POST",
  //             body: JSON.stringify(formObj),
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         );
  //         const data = await response.json();
  //         document.querySelector("#name").value = "";
  //         document.querySelector("#email").value = "";
  //         document.querySelector("#subject").value = "";
  //         document.querySelector("#message").value = "";
  //         $("#success").fadeIn();
  //         $(".modal").modal("hide");
  //         $("#success").modal("show");
  //       } catch (error) {
  //         $("#error").fadeIn();
  //         $(".modal").modal("hide");
  //         $("#error").modal("show");
  //       }
  //     });
  //   })(jQuery);
  // });


