$.get('/get_items', (data)=>{
  let items = JSON.parse(data);
  for (let i=0;i<items.length;i++) {
    let anchor_tag = $('<a/>');
    let li_tag = $('<li/>');
    li_tag.html(items[i].title);
    anchor_tag.attr('href', items[i].link);
    anchor_tag.append(li_tag);
    $('#items').append(anchor_tag);
}
})