var inputvalue = document.querySelector('#cityname')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "b3c73a54bf5dd9dafe09ec23f6d70c40"


function conversion(val) {
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())

        .then(data => {
            var nameval = data['name']
            var descripp = data['weather']['0']['description']
            var temper = data['main']['temp']
            var wndspeed = data['wind']['speed']
            city.innerHTML = `Weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${conversion(temper)} C</span>`
            description.innerHTML = `Sky Conditions: <span>${descripp}<span>`
            wind.innerHTML = `Wind Speed: <span>${wndspeed} KM/H<span>`
        })
        .catch(err => alert(' Sorry! You entered a Wrong City '))
})




