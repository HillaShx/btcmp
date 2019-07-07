const APP = {
  users: []
}

$(document).ready(()=>{
  $('#create-user-submit').bind('click', doesUserExist);
  $('#get-user-submit').bind('click', showUsers);
});

function doesUserExist() {
  let owner = $('#owner').val();
  let userName = $('#username').val();
  $.ajax({
    type: 'POST',
    url: 'https://itc-colors.appspot.com/add_user',
    dataType: 'json',
    data: {
      owner: owner,
      username: userName
    },
    success: (response) => {
      if (response.msg) {
        console.log("success");
        console.log(response);
      }
    },
    error: (response) => {
      console.log("error");
    }
  });
  
  
  // let userName = $('#username').val();
  // for (let i=0; i<APP.users.length; i++) {
  //   if (APP.users[i] === userName) {
  //     $('.msg').text('user already exists');
  //     return true;
  //   }
  // }
  // $('.msg').text('user created successfully');
  // APP.users.push(userName);
  // return false;
}

function showUsers() {
  $.ajax({
    type: 'GET',
    url: 'https://itc-colors.appspot.com/users',
    dataType: 'json',
    data: {
      owner: $('#owner').val()
    },
    success: (response) => {
      console.log(response);
    },
    error: (response) => {
      console.log("error");
    }
  })
  
  // $('.msg').text(APP.users);
  // return APP.users;
}