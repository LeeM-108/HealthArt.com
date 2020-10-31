let form=document.getElementById('myForm')
form.onsubmit = (e) =>{
    e.preventDefault();
    let c=Number(form.b.value)/Math.pow((Number(form.a.value)/100),2)
    if(c<18.5){
        window.location.href = `../baitap/giamcan.html?bmi=${c}`

    }
}
