const btn = document.getElementById('btn');
const nameInput = document.getElementById('name');
const gender = document.getElementById('gender');
const avatar = document.getElementById('avatar');
nameInput.addEventListener('blur', (e) => {
    btn.classList.add('pulse');
})
btn.addEventListener('click', (e) => {
    if (nameInput.value.trim() === '') {
        nameInput.focus();
    }
    else {
        btn.disabled= true;
        btn.value = "Loading...";
        if (gender.value == 'random') {
            avatar.setAttribute('src', `https://joeschmoe.io/api/v1/${nameInput.value}`);
        } else {
            avatar.setAttribute('src', `https://joeschmoe.io/api/v1/${gender.value}/${nameInput.value}`);
        }
        avatar.setAttribute('alt', nameInput.value);

        btn.disabled = false;
        btn.value = "Check Again";
    }
});
document.querySelector('.whatsapp').addEventListener('click', (e) => {
    e.preventDefault();
    if (navigator.share) {
        navigator.share({
            title: 'Name Game',
            text: 'Hey Dear Check this awesome site and see what your name say about your Personality? Check now...',
            url: 'https://name-game.netlify.com/',
        })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
    } else {
        window.location.replace(e.target.href);
    }
})
