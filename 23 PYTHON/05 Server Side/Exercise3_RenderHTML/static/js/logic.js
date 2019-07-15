let album = {
  title: "when the pawn",
  src: "static/img/FionaApple_WhenThePawn.jpg"
};

let albumImg = $('<div/>');

albumImg.css({"color": "white", "background-image": 'url(' + album.src + ')', "height": "400px", "width": "400px", "background-size": "cover"});
albumImg.html(album.title);


$('body').append(albumImg);