        $(document).ready(function () {
            var events = $('#event-list li');
            events.each(function(index) {
                if (index % 2 === 1) {
                    $(this).addClass('grey');
                }
            })});


        $(document).ready(function() {
            $('#reviewForm').on('submit', function(event) {
                event.preventDefault();
                    var name = $('#name').val();
                    var artist = $('#artist').val();
            
                    if (name && artist) { 
                        $('#message').html(`<p>Thank you, ${name}! We will do our best to book ${artist}.</p>`).css('color', 'dark blue');

                    } else {
                        $('#message').html('<p>Please fill out all fields.</p>').css('color', 'red');
                    }
                });
            });
    

    
        $(document).ready(function () {
        $('.hero').hover(
          function() {
            $(this).css('background-image', 'url(Images/show.jpeg)');
          },
          function() {
            $(this).css('background-image', 'url(Images/therino.jpeg)');
          }
        );
    });

    $(document).ready(function () {
        const slider = $('.slider');
        const images = $('.slider img');
        const totalImages = images.length;
        let index = 0;
      
        function updateSlider() {
          slider.css('transform', `translateX(${-index * 100}%)`);
        }
      
        function nextImage() {
          index = (index + 1) % totalImages;
          updateSlider();
        }
      
        function prevImage() {
          index = (index - 1 + totalImages) % totalImages;
          updateSlider();
        }
      
        let autoPlay = setInterval(nextImage, 3000);
      

        $('.next').click(function () {
          clearInterval(autoPlay); 
          nextImage();
        });
      
        $('.prev').click(function () {
          clearInterval(autoPlay);
          prevImage();
        });
      
        $('.next, .prev').click(function () {
          autoPlay = setInterval(nextImage, 3000);
        });
      });
