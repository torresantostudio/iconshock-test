$(function(){


  $('#send-data').on('click',function(e){

    e.preventDefault();

    var username = $('#username').val();
    var require   = 'https://api.github.com/users/'+username;

    request(require, function(json) {

      if(json.message == "Not Found" || username == '') {

        $('#response').html("<h2>No User Info Found</h2>");

      }
      else {
        
        $('#response').html(JSON.stringify(json, undefined, 2));

      }

  });

});

 function request(url, callback) {
  $.ajax({
    url: url,
    complete: function(xhr) {
      callback.call(null, xhr.responseJSON);
    }
  });
}

});