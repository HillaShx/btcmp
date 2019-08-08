// Django requires adding CSRF token
function csrfSafeMethod(method) {
  // these HTTP methods do not require CSRF protection
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = $.trim(cookies[i]);
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

var csrftoken = getCookie('csrftoken');

$.ajaxSetup({
  beforeSend: function(xhr, settings) {
      if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader("X-CSRFToken", csrftoken);
      }
  }
});

$('#add-post-button').click((e)=>{
  $('.new-post-form').removeClass('dissolve');
  $('#new-post-buttons-container').removeClass('hide');
  $('#add-post-button-container').addClass('hide');
})

$('#discard-post-button').click((e)=>{
  $('.new-post-form').addClass('dissolve');
  $('#new-post-buttons-container').addClass('hide');
  $('#add-post-button-container').removeClass('hide');
})

$('#send-post-button').click((e)=>{
  $('.error-msg').addClass('hide');
  if ($('#new-post-title').val().length == 0 && $('#new-post-content').val().length == 0) {
    $('.error-msg').html("please fill in the title and content");
    $('.error-msg').removeClass('hide');
  } else if ($('#new-post-title').val().length == 0) {
    $('.error-msg').html("please fill in the title");
    $('.error-msg').removeClass('hide');
  } else if ($('#new-post-content').val().length == 0) {
    $('.error-msg').html("please fill in the content");
    $('.error-msg').removeClass('hide');
  } else {
    $.post("send_post", {title: $('#new-post-title').val(), content: $('#new-post-content').val()}, (data)=>{
      location.reload(true);
    })
  }
  $('input[type="text"]').change((e)=>{
    if ($('#new-post-title').val().length > 0 && $('#new-post-content').val().length > 0) {
      $('.error-msg').addClass('hide');
    }
  })
});

$('.trash-post').click((e)=>{
  // console.log($(e.target).parents(".post").attr("post-id"));
  $.ajax({
    url: 'delete_post?' + $.param({"id": $(e.target).parents(".post").attr("post-id")}),
    type: 'DELETE',
    success: result => {
      location.reload(true);
    }
  })
})