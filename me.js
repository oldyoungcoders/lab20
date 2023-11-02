// fetch('https://fakestoreapi.com/users').then(
//     response => response.json()
// ).then(
//     data => {
//         console.log(data);
//         console.log(data[1].address.city);
//         console.log(data[data.length-1].name.lastname);
//     }
// )


const input = document.getElementsByTagName('input')[0];
const btn = document.getElementsByTagName('button')[0];
const temp = document.querySelector('.temp');
const wind  = document.querySelector('.wind');
const desc = document.querySelector('.desc');
btn.addEventListener('click',()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
    response => response.json()
    ).then(
        data=>{
            console.log(data);
            temp.innerText = Math.floor(data.main.temp) + ' gradus';
            desc.innerText = (data.weather[0].description) ;
            wind.innerText = (data.wind.speed) + ' m/s';

            //sunny,rainy,snowy,stormy...
            if(data.weather[0].main == "sunny"){
                document.getElementsByName('img')[0].src='sunny.png'
            }else if(data.weather[0].main == "rainy"){
                document.getElementsByName('img')[0].src='rainy.png'
            }
        }
    )
})

