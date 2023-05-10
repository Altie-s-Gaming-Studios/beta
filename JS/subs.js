$(document).ready(function() {
    // Replace 'YOUR_API_KEY' with your YouTube API key
    var apiKey = 'AIzaSyDe_T9FnA-kpwi5mfJwsudAur4N-Vc6ROA';
  
    // Define the channels and their respective IDs
    var channels = [
      { name: 'Channel 1', id: 'UC9RA0TJNGmiMcyFYkhvKrtg', spanId: 'AGsubs' },
      { name: 'Channel 2', id: 'UCDdNM3GzfcJ2rix0WfUeJ3A', spanId: 'AGIsubs' },
      { name: 'Channel 3', id: 'UCeIyX6udwdsbDLwdAvfHQAg', spanId: 'AGLsubs' }
    ];
  
    function updateSubscriberCount(channel) {
        var apiUrl =
          'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=' +
          channel.id +
          '&key=' +
          apiKey;
    
        $.getJSON(apiUrl)
          .done(function(data) {
            var subscriberCount = data.items[0].statistics.subscriberCount;
            $('#' + channel.spanId).text(subscriberCount);
          })
          .fail(function(jqXHR) {
            if (jqXHR.status === 403) {
              $('#' + channel.spanId).text('API Unavailable');
            } else {
              console.log('Error:', jqXHR.statusText);
            }
          });
      }
    
      // Update the subscriber counts initially
      channels.forEach(function(channel) {
        updateSubscriberCount(channel);
      });
    });
    
    
    
    
    