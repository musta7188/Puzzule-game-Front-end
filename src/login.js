// import anime from './node_modules/animejs/lib/anime.es.js';

// const anime = require('animejs');


var current = null;
document.querySelector('#name').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: 0,
      duration: 900,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 900,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#password').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -336,
      duration: 900,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 900,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#submit').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -730,
      duration: 900,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '530 1386',
      duration: 900,
      easing: 'easeOutQuart'
    }
  });
});



const BASE_URL = "http://localhost:3000"
const PLAYERS_URL = `${BASE_URL}/players`
const theLoginForm = document.querySelector("#createForm") 




  theLoginForm.addEventListener("submit", (event) => {
  event.preventDefault()
   
    const nameInput = event.target.elements.name.value
    const passwordInput = event.target.elements.password.value
     
  console.log("submitted")

      fetch(PLAYERS_URL, {
        method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                      name: (nameInput),
                      password: (passwordInput)
                    })
      })
      .then(res => res.json())
      .then(data => console.log(data))     
  })