$("#greeting").hide();

$('#submit-btn').click((e)=>{
  e.preventDefault();
  $.post('/post_user_details', (data)=>{
    $("#greeting").show();
    $(".fname-display").empty();
    $(".lname-display").empty();
    $(".fname-display").html(data.fname);
    $(".lname-display").html(data.lname);
  })
})