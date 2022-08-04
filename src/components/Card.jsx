import React from "react";
import Spinner from "./Spinner";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const BoxData = styled.div`
  width: 800px;
  height: 400px;
  background-color: #000;
  display: flex;
  justify-content: center;
`;
const Div1 = styled.div`
  width: 100%;
  position: relative;

  h2 {
    width: 100%;
    position: absolute;
    background-color: rgba(0,0,0,0.50);
    color: #fff;
    text-align: center;
    padding: 10px 0 0;

    span {
        display: block;
        font-size: 15px;
        margin-top: 5px;
    }
    p {
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 50px;
            margin-right: 5px;
        }
    }
  }
  
  img {
    width: 100%;
    height: 100%;
  }
`;
const Div2 = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  .box1 {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .box2 {
    height: 50%;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    gap: 3px;

    div {
        font-size: 14px;
        background-color: lightgray;
        padding: 10px;
        border-radius: 4px;
        
        p {
            display: flex;
            justify-content: center;

            &:nth-last-child(1) {
                margin-top: 30px;
            }
        }
    }
  }
`;
const Msg = styled.h2`
  text-align: center;
  color: #fff;
`;

const Card = ({ showData, loadingData, weather, forecast }) => {

    const data = new Date();
    const fecha = new Intl.DateTimeFormat('es-AR').format(data);

    let url = "";
    let iconUrl = "";

    let iconUrl3 = "";
    let iconUrl6 = "";
    let iconUrl9 = "";

    let forecastDate3 = "";
    let forecastDate6 = "";
    let forecastDate9 = "";

  if (loadingData) {
    return <Spinner />;
  }

  if (showData) {
    url = "https://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";
    
    iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
    iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

    forecastDate3 = forecast.list[1].dt_txt.substring(8,10) + '/' + forecast.list[1].dt_txt.substring(5,7) + '/' + forecast.list[1].dt_txt.substring(0,4) + ' ' + forecast.list[1].dt_txt.substring(11,13);
    forecastDate6 = forecast.list[2].dt_txt.substring(8,10) + '/' + forecast.list[2].dt_txt.substring(5,7) + '/' + forecast.list[2].dt_txt.substring(0,4) + ' ' + forecast.list[2].dt_txt.substring(11,13);
    forecastDate9 = forecast.list[3].dt_txt.substring(8,10) + '/' + forecast.list[3].dt_txt.substring(5,7) + '/' + forecast.list[3].dt_txt.substring(0,4) + ' ' + forecast.list[3].dt_txt.substring(11,13);

}

  return (
    <Container>
      {showData ? (
        <BoxData>
          <Div1>
            <h2>
                {weather.name} 
                <span>{fecha}</span>
                <span>{(weather.main.temp - 273.15).toFixed(1)}°C</span>
                <p><img src={iconUrl} alt={weather.weather[0].description} />{weather.weather[0].description}</p>
            </h2>
            <img src="https://images.pexels.com/photos/12765768/pexels-photo-12765768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image city" />
          </Div1>
          <Div2>
            <div className="box1">
                <h3>Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h3>
                <h3>Temperatura minima: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h3>
                <h3>Temperatura térmica: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h3>
                <h3>Humedad: {weather.main.humidity}%</h3>
                <h3>Velocidad del viento: {weather.wind.speed} m/s</h3>
            </div>
            <hr />
            <div className="box2">
                <div>
                    <p>{forecastDate3}h</p>
                    <p><img src={iconUrl3} alt={forecast.list[1].weather[0].description} /></p>
                    <p>{forecast.list[1].weather[0].description}</p>
                    <p>{(forecast.list[1].main.temp - 273.15).toFixed(1)}°C</p>
                </div>
                <div>
                    <p>{forecastDate6}h</p>
                    <p><img src={iconUrl6} alt={forecast.list[2].weather[0].description} /></p>
                    <p>{forecast.list[2].weather[0].description}</p>
                    <p>{(forecast.list[2].main.temp - 273.15).toFixed(1)}°C</p>
                </div>
                <div>
                    <p>{forecastDate9}h</p>
                    <p><img src={iconUrl9} alt={forecast.list[3].weather[0].description} /></p>
                    <p>{forecast.list[3].weather[0].description}</p>
                    <p>{(forecast.list[3].main.temp - 273.15).toFixed(1)}°C</p>
                </div>
            </div>
          </Div2>
        </BoxData>
      ) : (
        <Msg>No hay resultados</Msg>
      )}
    </Container>
  );
};

export default Card;