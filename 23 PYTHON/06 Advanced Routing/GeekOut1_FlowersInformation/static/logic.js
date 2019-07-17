$('.image').click((e)=>{
  $('.selected').removeClass('selected');
  $(e.target).addClass('selected');
  
  // $.get('/flowerdesc/'+$(e.target).attr('id')).done(()=>{
  $.get('/flowerdesc/'+$(e.target).attr('id')).done(()=>{
    // let flowerInfo = JSON.parse(data);
    $('#flower-title').empty();
    // $('#flower-title').html(flowerInfo.name);
    $('#flower-title').html("flowerInfo.name");
    $('.desc-text').empty();
    // $('#desc-text').html(flowerInfo.description);
    $('.desc-text').html("flowerInfo.description");
  })
})

