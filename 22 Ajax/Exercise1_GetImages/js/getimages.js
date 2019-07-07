$.ajax({
  type: 'GET',
  url: 'https://itc-colors.appspot.com/get_images',
  dataType: 'json',
  success: (imgArray) => {
    for (let i=0; i<imgArray.length; i++) {
      let newImg = $('<img/>').attr("src", imgArray[i]);
      $('.display-img').append(newImg);
    }
  }
})