$(document).ready(()=>{
  $('#add-color').bind('click', postColor);
  $('#retrieve-color').bind('click', getColors);
})



function getColors() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:7000/get_colors',
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
    url: 'http://localhost:7000/add_color',
    data: {
      color: $('#color-input').val()
    },
    contentType: "application/json",
    success: (response) => {
      $('.msg').empty()
      $('.msg').text(response.msg);
    },
    error: (response) => {
      $('.msg').empty()
      $('.msg').text(response.msg);
    }
  })
}