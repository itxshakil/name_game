const btn = document.getElementById('btn');
const name = document.getElementById('name');
const avatar = document.getElementById('avatar');
btn.addEventListener('click', (e) => {

    if (name.value.trim() === '') {
        name.focus(); 
    }
    else{
        avatar.setAttribute('src' , `https://joeschmoe.io/api/v1/${name.value}`);
        avatar.setAttribute('alt' , name.value);
    }
})
particlesJS.load('particles-js', './assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });