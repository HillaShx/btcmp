$('.image').click((e)=>{
  $('.selected').removeClass('selected');
  $(e.target).addClass('selected');
  $.get('/flower_desc/'+$(e.target).attr('id')).done((data)=>{
    let flowerInfo = JSON.parse(data);
    $('#flower-title').empty();
    $('#flower-title').html(flowerInfo.name);
    $('#desc-text').empty();
    $('#desc-text').html(flowerInfo.description);
  })
})

