        $(document).ready(function() {
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
    

    
            $(document).ready(function() {
                $('.hero').hover(
                  function() {
                    $(this).css('background-image', 'url(Images/show.jpeg)');
                  },
                  function() {
                    $(this).css('background-image', 'url(Images/therino.jpeg)');
                  }
                );
            });


           
