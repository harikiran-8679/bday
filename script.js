document.addEventListener('DOMContentLoaded', function () {

  let nextbtn = document.getElementById("nextbtn");
  let greetingdiv = document.getElementById("greeting");
  let heartgrapics = document.getElementById("heartgrapics");
  const heartPath = document.querySelector('.heart-path');
  const heartFill = document.querySelector('.heart-fill');
  const heart = document.querySelector('.heart');
 

    nextbtn.addEventListener("click",function(){
      greetingdiv.style.animation = "greetingfadeout 1000ms ease forwards";
      nextbtn.style.animation = "nextbtnfadeout 1000ms ease forwards 100ms";
      heartgrapics.style.animation = "displayheart 1000ms ease forwards 500ms";
      heartPath.style.animation = 'drawHeart 4s ease-in-out forwards 600ms';
      setTimeout(() => {
        heartFill.style.animation = 'fillHeart 2s ease-in-out forwards 1000ms';
        }, 2000);

    setTimeout(() => {
      heart.style.animation = 'heartbeat 1.5s ease-in-out infinite';
        }, 4000);
    });
    
    document.querySelectorAll(".greeting span").forEach((span, index) => {
        span.style.animationDelay = `${24 + 0.6 * index}s`; 
      });
});