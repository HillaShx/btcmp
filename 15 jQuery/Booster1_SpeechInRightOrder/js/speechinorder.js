var speechPre = "Good morning. In less than an hour, aircraft from here will join others from around the world. And you will be launchingthe largest aerial battle in the history of \"Mankind\" That word should have new meaning for all of us today.We can't be consumed by our petty differences anymore. We will be united in our common interests. Perhaps it's fatethat today is the Fourth of July, and you will once again be fighting for our freedom... Not from tyranny, oppression, orpersecution... but from annihilation. We are fighting for our right to live. To exist. And should we win the day, the Fourthof July will no longer be known as an American holiday, but as the day the world declared in one voice: ";
var speechPost = " ​We will not vanish without a fight! We're going to live on! We're going to survive! Today wecelebrate our Independence Day!";
var speechDOM = $(".speech");

$(".main-message").css("font-weight", "bold");
speechDOM.prepend(speechPre);
speechDOM.append(speechPost);
