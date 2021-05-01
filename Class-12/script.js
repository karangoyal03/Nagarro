function search() {
  let city = document.getElementById("city");
  let cityname = city.value;
  console.log(cityname);
  let api =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityname +
    "&appid=6b7349b64ff9e9642edb46ff538c562c";
  fetch(api)
    .then((res) => {
      try {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res);
        }
      } catch (err) {
        console.log(err.message);
        return WHATEVER_YOU_WANT_TO_RETURN;
      }
    })
    .then((data) => {
      // let dataarray=data.base
      let cityname = data.name;
      let countryname = data.sys.country;
      let coordinatelatitude = data.coord.lat;
      let coordinatelongitude = data.coord.lon;
      let citycountry = document.getElementById("cityandcountry");
      citycountry.innerHTML =
        cityname +
        "," +
        countryname +
        "(latitude: " +
        coordinatelatitude +
        " , longitude: " +
        coordinatelongitude +
        ")";
      //city and country done
      let weather = data.weather[0].main;
      let weatherdescription = data.weather[0].description;
      let weathershown = document.getElementById("weather");
      weathershown.innerHTML = weather;
      //weather done
      let weatherdescshown = document.getElementById("weatherdescription");
      weatherdescshown.innerHTML = weatherdescription;
      //weather description done

      let mainpressure = data.main.pressure;
      let pressure = document.getElementById("pressure");
      pressure.innerHTML = "Pressure: " + mainpressure;
      let mainhumidity = data.main.humidity;
      let humidity = document.getElementById("humidity");
      humidity.innerHTML = "Humidity: " + mainhumidity;

      let currenttemp = data.main.temp;
      let maintemp_min = data.main.temp_min;
      let maintemp_max = data.main.temp_max;
      let temp = document.getElementById("temp");
      temp.innerHTML =
        "Currenttemp: " +
        currenttemp +
        "°C(min: " +
        maintemp_min +
        " , max: " +
        maintemp_max +
        ")";

      let visibliity = data.visibility;
      let visible = document.getElementById("visibility");
      visible.innerHTML = "Visibliity: " + visibliity;

      let windspeed = data.wind.speed;
      let wind = document.getElementById("windspeed");
      wind.innerHTML = "Wind-Speed: " + windspeed + " Km/h";

      let winddegree = data.wind.deg;
      let winddeg = document.getElementById("winddeg");
      winddeg.innerHTML = "Wind-Degree: " + winddegree + " deg";

      console.log(dataarray);
    });
}
