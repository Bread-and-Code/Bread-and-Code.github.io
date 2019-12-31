function sendMail() {
    $.ajax({
      type: 'POST',
      url: 'https://formspree.io/mrgerblo',
      data: {
        'key': '90a882410e208704b424aced0e66b36b-us20',
        'message': {
          'from_email': 'YOUR@EMAIL.HERE',
          'to': [
              {
                'email': 'sayanmondal2098@gmail.com',
                'name': 'RECIPIENT NAME (OPTIONAL)',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'YOUR SUBJECT HERE!',
          'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
        }
      }
     }).done(function(response) {
       console.log(response); // if you're into that sorta thing
     });
  }

sendMail()