//const city=document.querySelector('.input').value;
const apiKey="833GXT9VV386UW68HEGPFB8EZ";
const output=document.querySelector('.display');

//add event listener to btn
const btn=document.querySelector('#submitbtn').addEventListener('click',checkweather);

//checkweather function
function checkweather(e){
    //output.value=" ";
    const city=document.querySelector('#city').value;
    console.log(city);
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${apiKey}&contentType=json`)
    .then(Response => Response.json())
    .then(data =>{
      console.log(data);
      
      const temp=(data.currentConditions.conditions);
      const cel=FarenheightToCelcius(data.currentConditions.conditions);
      console.log(cel);

      output.innerHTML=`
            <div class="cityWeather">
              <h3 class="display-5 fw-normal text-center">Weather</h3>
              <div class="card">
                  <div class="card-body flex-wrap mx-4">
                      <div class="row align-items-center text-center">
                          <div class="col-sm-6 ml-5">
                              <h5 class="display-1">${data.address}</h5>
                              <p class="lead">${data.days[0].datetime}</p>
         
                              <img width="100" height="80" src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/2de560da89d87de44e3ca2a6593a12c19c8346d3/SVG/2nd%20Set%20-%20Color/${data.currentConditions.icon}.svg"/>
                              
                              <p class="card-text mt-3">${data.currentConditions.conditions}</p>
                          </div>
                          <div class="col-sm-6">
                              <h1 class="display-1">${FarenheightToCelcius(data.currentConditions.temp)}&#8451;</h1>
                              <p class="card-text lead">${FarenheightToCelcius(data.days[0].tempmax)}&#8451; / ${FarenheightToCelcius(data.days[0].tempmin)}&#8451;</p>
                          </div>
                          <div class="fw-semibold">
                                <div class="py-1 d-flex flex-wrap justify-content-around">
                                    <div class="m-auto mb-1">Pressure: ${data.days[0].pressure} Pa</div>
                                    <div class="m-auto mb-1">Windspeed: ${data.days[0].windspeed} km/h</div>   
                                </div>
    
                                <div class="py-1 d-flex flex-wrap justify-content-around">
                                    <div class="m-auto mb-1">Humidity: ${data.days[0].humidity} gm³</div>
                                    <div class="m-auto mb-1">Visibility: ${data.days[0].visibility} km</div>
                                </div>
                            </div>
                     </div>
                     <p class="card-text text-center mt-4"><em>${data.description}</em></p>
                 </div>
              </div>
            </div>

            <div class="WeekWeather">
                <br>
                <h3 class="display-5 fw text-center">Weekly Forecast</h3>
                
                <div class="row">

                    <div class="col-sm-2">
                        <div class="card mb-3">
                            <div class="card-body text-center">
                                <p class="">${data.days[1].datetime}</p>
                                <img width="80" height="60" src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/2de560da89d87de44e3ca2a6593a12c19c8346d3/SVG/2nd%20Set%20-%20Color/${data.days[1].icon}.svg"/>
                                                
                                <p class="card-text mt-2">${data.days[1].conditions}</p>
                                <h1 class="display-6">${FarenheightToCelcius(data.days[1].temp)}&#8451;</h1>
                                <p class="fw-light">${FarenheightToCelcius(data.days[1].tempmax)}&#8451; / ${FarenheightToCelcius(data.days[1].tempmin)}&#8451;</p>
                                <p class="card-text text-center mt-3"><em>${data.days[1].description}</em></p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-2">
                        <div class="card mb-3">
                            <div class="card-body text-center">
                                <p class="">${data.days[2].datetime}</p>
                                <img width="80" height="60" src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/2de560da89d87de44e3ca2a6593a12c19c8346d3/SVG/2nd%20Set%20-%20Color/${data.days[2].icon}.svg"/>
                                                
                                <p class="card-text mt-2">${data.days[2].conditions}</p>
                                <h1 class="display-6">${FarenheightToCelcius(data.days[2].temp)}&#8451;</h1>
                                <p class="fw-light">${FarenheightToCelcius(data.days[2].tempmax)}&#8451; / ${FarenheightToCelcius(data.days[2].tempmin)}&#8451;</p>
                                <p class="card-text text-center mt-3"><em>${data.days[2].description}</em></p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-2">
                        <div class="card mb-3">
                            <div class="card-body text-center">
                                <p class="">${data.days[3].datetime}</p>
                                <img width="80" height="60" src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/2de560da89d87de44e3ca2a6593a12c19c8346d3/SVG/2nd%20Set%20-%20Color/${data.days[3].icon}.svg"/>
                                                
                                <p class="card-text mt-2">${data.days[3].conditions}</p>
                                <h1 class="display-6">${FarenheightToCelcius(data.days[3].temp)}&#8451;</h1>
                                <p class="fw-light">${FarenheightToCelcius(data.days[3].tempmax)}&#8451; / ${FarenheightToCelcius(data.days[3].tempmin)}&#8451;</p>
                                <p class="card-text text-center mt-3"><em>${data.days[3].description}</em></p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-2">
                        <div class="card mb-3">
                            <div class="card-body text-center">
                                <p class="">${data.days[4].datetime}</p>
                                <img width="80" height="60" src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/2de560da89d87de44e3ca2a6593a12c19c8346d3/SVG/2nd%20Set%20-%20Color/${data.days[4].icon}.svg"/>
                                                
                                <p class="card-text mt-2">${data.days[4].conditions}</p>
                                <h1 class="display-6">${FarenheightToCelcius(data.days[4].temp)}&#8451;</h1>
                                <p class="fw-light">${FarenheightToCelcius(data.days[4].tempmax)}&#8451; / ${FarenheightToCelcius(data.days[4].tempmin)}&#8451;</p>
                                <p class="card-text text-center mt-3"><em>${data.days[4].description}</em></p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-2">
                        <div class="card mb-3">
                            <div class="card-body text-center">
                                <p class="">${data.days[5].datetime}</p>
                                <img width="80" height="60" src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/2de560da89d87de44e3ca2a6593a12c19c8346d3/SVG/2nd%20Set%20-%20Color/${data.days[5].icon}.svg"/>
                                                
                                <p class="card-text mt-2">${data.days[5].conditions}</p>
                                <h1 class="display-6">${FarenheightToCelcius(data.days[5].temp)}&#8451;</h1>
                                <p class="fw-light">${FarenheightToCelcius(data.days[5].tempmax)}&#8451; / ${FarenheightToCelcius(data.days[5].tempmin)}&#8451;</p>
                                <p class="card-text text-center mt-3"><em>${data.days[5].description}</em></p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-2">
                        <div class="card mb-3">
                            <div class="card-body text-center">
                                <p class="">${data.days[6].datetime}</p>
                                <img width="80" height="60" src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/2de560da89d87de44e3ca2a6593a12c19c8346d3/SVG/2nd%20Set%20-%20Color/${data.days[6].icon}.svg"/>
                                                
                                <p class="card-text mt-2">${data.days[6].conditions}</p>
                                <h1 class="display-6">${FarenheightToCelcius(data.days[6].temp)}&#8451;</h1>
                                <p class="fw-light">${FarenheightToCelcius(data.days[6].tempmax)}&#8451; / ${FarenheightToCelcius(data.days[6].tempmin)}&#8451;</p>
                                <p class="card-text text-center mt-3"><em>${data.days[6].description}</em></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      `;
    });

    e.preventDefault();
}

function FarenheightToCelcius(temp){
    Celci=(temp-32) * 5/9;
    return Celci.toFixed(1);
};
