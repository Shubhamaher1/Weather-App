
const city= document.getElementById("city");
const inputcity= document.getElementById("input");
inputcity.addEventListener("keyup",()=>{
    city.innerHTML=inputcity.value;
    wather.featchwather(inputcity.value);
    if(inputcity.value==""){
        document.getElementById("data").innerHTML="City is Not Found";
    }
})
const today = new Date();
const time = today.getHours();
const bday= document.getElementById("main-day");
if(time>6&&time<17){
    bday.className="main-day";
}else if(time>17&&time<19){
    bday.className="main-eve";
}else{
    bday.className="main-night";
}
let cityname= inputcity.value;
// let data = fetch("https://openweathermap.org/data");
// data.then(ele=>ele.json()).then(Element=>{
//     console.log(Element)
// })
// console.log(data);const 
// const url = "http://api.football-data.org/v2/matches";
// fetch(url, {
//     method: "GET",
//     withCredentials: true,
//     headers: {
//       "X-Auth-Token": "ef72570ff371408f9668e414353b7b2e",
//       "Content-Type": "application/json"
//     }
//   })
//     .then(resp => resp.json())
//     .then(function(data) {
//       console.log(data);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });

let wather ={
    apikey:"f7e7c28995103e02319c21768554b4ab",
    featchwather: function(city){
        fetch( `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=f7e7c28995103e02319c21768554b4ab`)
        .then((responce)=>responce.json())
        .then((data)=>{
            console.log(data)
         this.displaywath(data.main);
        
        })
    },
    displaywath: function(data){
        const temp=data.temp_min;
        document.getElementById("data").innerHTML= temp+"/"+data.temp_max;
        console.log(temp)

    }
}
inputcity.addEventListener("")


// let citydata=fetch('https://api.openweathermap.org/data').then(res => {
//      return res.json();
// }).then(function(res) {
//     console.log(res.coord);
//     return res;
// });

// const displaydata= document.getElementById("data");
// displaydata.innerHTML=citydata;
