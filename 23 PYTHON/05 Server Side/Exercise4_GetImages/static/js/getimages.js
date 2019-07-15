$.ajax({
  type: 'GET',
  url: 'http://localhost:7001/get_images',
  dataType: 'json',
  success: (imgArray) => {
    for (let i=0; i<imgArray.length; i++) {
      let newImg = $('<img/>').attr("src", imgArray[i]);
      $('.display-img').append(newImg);
    }
  }
})