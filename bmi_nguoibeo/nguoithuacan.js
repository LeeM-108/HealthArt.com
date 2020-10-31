let result = document.getElementById('result')
let urlParams = new URLSearchParams(window.location.search)
let bmi = urlParams.get('bmi')
if (bmi) {
    result.innerText = bmi
}