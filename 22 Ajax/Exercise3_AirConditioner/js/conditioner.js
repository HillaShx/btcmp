$(document).ready(()=>{
  $.ajax({
    type: 'GET',
    url: 'https://itc-colors.appspot.com/aircon/state',
    dataType: 'json',
    success: (response) => {
      checkPower(response.state);
      setInterval(()=>{checkPower(response.state)},1000); 
    }
  })
})

function checkPower(isOn) {
  if (isOn === "on") {
    $('#on-off').removeClass('off');
    $('#on-off').addClass('on');
  } else {
    $('#on-off').removeClass('on');
    $('#on-off').addClass('off');
  }
}