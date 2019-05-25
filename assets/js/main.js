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
        avatar.setAttribute('alt', name.value);
    }
});
