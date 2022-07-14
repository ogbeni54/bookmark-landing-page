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

const form = document.querySelector('.fm1');

form.addEventListener('submit', (e)=>{
    e.preventDefault;
    exp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    const usern = form.username.value;
    if(exp.test(usern)){
        console.log('Correct');
    } else {
        console.log('Incorrect');

    }
})

