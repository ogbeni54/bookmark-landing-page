const acc = document.querySelectorAll(".container");
acc.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
    });
});

const button = document.querySelectorAll('.toggle')
const content = document.querySelectorAll('.content')

//using loop to access each of the button click event
button.forEach((btn, i)=>{
    btn.addEventListener('click', () => {
//for each of the button click event loop through the content to remove any class active
        content.forEach(cont=>{
            cont.classList.remove('active');
        })
//for each of the button click event loop through the button to remove any class active
        button.forEach((btn)=>{
            btn.classList.remove('active');
        })
//After removal you can then add active class to each content using the index
//of the node list to access them.
        content[i].classList.add('active');
        // console.log(content[i]);
//After removal you can then add active class to each button using the index
//of the node list to access them.
        button[i].classList.add('active');
        // console.log(button[i]);

       

})
})

const form = document.querySelector('.inp');
const fb = document.querySelector('.fm1');
const error1 = document.querySelector('.error1');
const error = document.querySelector('.error');
const err = document.querySelector('.icon-arrow');

exp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const usern = form.username.value;
    // console.log(usern);
    if(exp.test(usern)){
        form.username.setAttribute('class', 'emailCR');
        error1.style.display = 'block';
        // console.log(usern.classname);
        setTimeout(() => {
            form.username.classList.replace('emailCR', 'email');
            error1.style.display = 'none';
        }, 300000);
    } else {
        setTimeout(() => {
            err.style= 'display: block';
            form.username.setAttribute('class', 'emailWR');
            error.style.display = 'block';
        }, 3000);
        
        // setTimeout(() => {
        //     form.username.classList.replace('emailWR', 'email');
        //     error.style.display = 'none';   
        //     err.style.display = 'none';
        // }, 3000);
        // console.log(usern.classname);

    }
})

// form.username.addEventListener('keyup', (e)=>{
//     if (exp.test(e.target.value)) {
//         form.username.setAttribute('class', 'emailCR');
//     } 
//     else if (!exp.test(e.target.value)) 
//     {
//         form.username.setAttribute('class', 'emailWR');
//     }
// });

const nav = document.querySelector('.nav');
const icon = document.querySelectorAll('.fa-solid');
// console.log(icon);

icon.forEach(hamburger => {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
})

// icon.addEventListener('click', () => {
//     nav.classList.toggle('active');
//     console.log('click');
//     // if(icon.classList.contains("fa-bars")) {
//     //     icon.classList.replace( "fa-bars", "fa-xmark");
//     // }else {
//     //     icon.classList.replace( "fa-xmark", "fa-bars");
//     // }
// });

