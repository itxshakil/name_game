const btn = document.getElementById('btn');
const name = document.getElementById('name');
const gender = document.getElementById('gender');
const avatar = document.getElementById('avatar');
name.addEventListener('blur', (e) => {
    btn.classList.add('pulse');
})
btn.addEventListener('click', (e) => {
    if (name.value.trim() === '') {
        name.focus();
    }
    else {
        btn.disabled= true;
        btn.value = "Loading...";
        if (gender.value == 'random') {
            avatar.setAttribute('src', `https://joeschmoe.io/api/v1/${name.value}`);
        } else {
            avatar.setAttribute('src', `https://joeschmoe.io/api/v1/${gender.value}/${name.value}`);
        }
        avatar.setAttribute('alt', name.value);

        btn.disabled = true;
        btn.value = "Check Again";
    }
});
document.querySelector('.whatsapp').addEventListener('click', (e) => {
    e.preventDefault();
    if (navigator.share) {
        navigator.share({
            title: 'name-game.netlify.com/',
            text: 'Hey Dear Check this awesome site .What your name say about your Personality.',
            url: 'https://name-game.netlify.com/',
        })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
    } else {
        window.location.replace(e.target.href);
    }
})
