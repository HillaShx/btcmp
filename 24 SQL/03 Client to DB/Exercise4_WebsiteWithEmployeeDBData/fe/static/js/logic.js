$('li').click((e)=>{
  let clickedItem = $(e.target).attr("id").substring(5)
  $.get(`/${clickedItem}`,()=>{
    console.log("here we are")
  })
})