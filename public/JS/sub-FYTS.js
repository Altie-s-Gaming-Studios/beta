document.addEventListener('DOMContentLoaded', function() {
  // Replace 'YOUR_API_KEY' with your YouTube API key
  var apiKey = 'AIzaSyDe_T9FnA-kpwi5mfJwsudAur4N-Vc6ROA';

  // Define the channels and their respective IDs
  var channels = [
    { name: 'Channel 1', id: 'UCNV2wPTijzD2DhdAVQhLKUg', spanId: '@Lolbit_The_Fox-subs' }
  ];

  function updateSubscriberCount(channel) {
    var apiUrl =
      'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=' +
      channel.id +
      '&key=' +
      apiKey;

    fetch(apiUrl)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('API Unavailable');
        }
      })
      .then(function(data) {
        var subscriberCount = data.items[0].statistics.subscriberCount;
        document.getElementById(channel.spanId).textContent = subscriberCount;
      })
      .catch(function(error) {
        if (error.message === 'API Unavailable') {
          document.getElementById(channel.spanId).textContent = 'API Unavailable';
        } else {
          console.log('Error:', error.message);
        }
      });
  }

  // Update the subscriber counts initially
  channels.forEach(function(channel) {
    updateSubscriberCount(channel);
  });
});
