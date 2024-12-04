$(document).ready(function () {
  $('.hero').hover(
    function() {
      $(this).css('background-image', 'url(Images/b1.jpg)');
    },
    function() {
      $(this).css('background-image', 'url(Images/b2.jpg)');
    }
  );
});

$(document).ready(function () {
  function updateStatus() {
      const allChecked = $(".item").length === $(".item:checked").length;
      const status = $("#status");

      if (allChecked) {
          status.text("All items checked! You're ready for your bearded dragon!").removeClass("incomplete").addClass("complete");
      } else {
          status.text("Missing some items! Please check all the boxes.").removeClass("complete").addClass("incomplete");
      }
  }
  $(".item").on("change", updateStatus);
});

$(document).ready(function() {
  $(".faq .accordion .question").hover(
    function() {
      var answer = $(this).next(".answer");
      $(".faq .accordion .answer").not(answer).slideUp();
      answer.stop(true, true).slideDown();
    },
    function() {
      var answer = $(this).next(".answer");
      answer.stop(true, true).slideUp();
    }
  );
});

$(document).ready(function() {
  var currentIndex = 0;
  var images = $(".gallery img");
  var totalImages = images.length;

  function showImage(index) {
      images.removeClass("active");
      images.eq(index).addClass("active");
  }
  $(".gallery .left").click(function() {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      showImage(currentIndex);
  });

  $(".gallery .right").click(function() {
      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);
  });
});

$(document).ready(function() {
  $('#newsletter-form').submit(function(event) {
    event.preventDefault();


    var email = $('#email').val();

    if (email) {
      $('.success-message').fadeIn().delay(3000).fadeOut(); 
      $('#email').val(''); 
    } else {
      alert('Please enter a valid email address.');
    }
  });
});