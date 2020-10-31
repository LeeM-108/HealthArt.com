let form=document.getElementById('myForm')
form.onsubmit = (e) =>{
    e.preventDefault();
    let c=Number(form.b.value)/Math.pow((Number(form.a.value)/100),2)
    c= Math.round(c * 100) / 100
    if(c<18.5){
        window.location.href = `../bmi_nguoigay/nguoitangcan.html?bmi=${c}`

    }
    else if(c>=18.5&&c<25.0){
        window.location.href=`../bmi_nguoigiucan/nguoigiucan.html?bmi=${c}`
    }
    else 
        window.location.href=`../bmi_nguoibeo/nguoithuacan.html?bmi=${c}`
}
