$(document).ready(()=>{
  $('#add-user').bind('click', addUser);
  $('#get-users').bind('click', getUsers);
});

// server is down?

function addUser() {
  $.ajax({
    type: 'POST',
    url: 'https://itc-colors.appspot.com/add_user',
    dataType: 'json',
    data: {
      owner: 'hilla',
      username: $('#username-input').val()
    },
    success: (response) => {
      console.log(response);
    },
    error: (response) => {
      console.log(response);
    }
  });
}

function getUsers() {

}