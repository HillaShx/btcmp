$('#submit-btn').click((e)=>{
  e.preventDefault();
  $.post('/post_user_details', (data)=>{
    $(".fname-display").empty();
    $(".lname-display").empty();
    $(".fname-display").html(data.fname);
    $(".lname-display").html(data.lname);
  })
})