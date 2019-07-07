$(document).ready(()=>{
  $('#add-color').bind('click', postColor);
  $('#retrieve-color').bind('click', getColors);
})

function getColors() {
  $.ajax({
    type: 'GET',
    url: 'http://itc-colors.appspot.com/colors',
    dataType: 'json',
    success: (response) => {
      for (i=0; i<response.length; i++) {
        let currColor = $('<li/>');
        currColor.text(response[i].name);
        $('#color-list').append(currColor);
      }
    }
  })
}

function postColor() {
  $.ajax({
    type: 'POST',
    url: 'https://itc-colors.appspot.com/add_color',
    data: {
      color: $('#color-input').val()
    },
    success: (response) => {
      $('.msg').text(response);
    },
    error: (response) => {
      $('.msg').text(response);
    }
  })
}