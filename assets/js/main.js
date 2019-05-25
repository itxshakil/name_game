const btn = document.getElementById('btn');
const name = document.getElementById('name');
const gender = document.getElementById('gender');
const avatar = document.getElementById('avatar');
name.addEventListener('blur' , (e)=>{
    btn.classList.add('pulse');
})
btn.addEventListener('click', (e) => {
    if (name.value.trim() === '') {
        name.focus();
    }
    else{
        if(gender.value == 'random'){
            avatar.setAttribute('src' , `https://joeschmoe.io/api/v1/${name.value}`);
    }else{
        avatar.setAttribute('src' , `https://joeschmoe.io/api/v1/${gender.value}/${name.value}`);
    }
        avatar.setAttribute('alt' , name.value);
    }
<<<<<<< HEAD
});
=======
})
particlesJS.load('particles-js', './assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
window.onload(e){
document.body.requestFullscreen();
}
>>>>>>> 5eed4446f3d80eaa30f2f9d26f67d39b6d3a3670
