let inputEle = document.getElementById("location input");
let tempEle = document.getElementById("temp.value");
let locEle = document.getElementById("location");
let weatherDesk = document.getElementById("weather.desk");
let button = document.getElementById("btn");
let icon = document.getElementById("icon");


const apiKey = "a8fd49f8ed78a1c62e7da77860899c0e"
button.onclick = function () {

    if (inputEle.value == '') {
        alert("please enter some location")
    } else {
        loc = inputEle.value;
        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`
        fetch(url).then(res => res.json())
            .then(data => {
                console.log(data);
                const { name } = data
                const { feels_like } = data.main
                const { description } = data.weather[0]
                tempEle.innerText = Math.floor(feels_like - 273);
                locEle.innerText = name;
                weatherDesk.innerText = description;


            })
            .catch(
                () => { alert('enter valid location') }
            )
        inputEle.value = ''
    }




}
