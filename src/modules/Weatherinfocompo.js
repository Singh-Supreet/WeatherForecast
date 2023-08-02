import styled from "styled-components";
// Help to dynamically add icons in weather info
export const Weatherinfoicon = {
    sunrise: "/images/humidity.png",
    sunset: "/images/humidity.png",
    humidity: "/images/humidity.png",
    wind: "/images/wind.png",
    pressure: "/images/pressure.png",
};
export const Weatherlogos = {
    "01d": "/images/sunny.png",
    "01n": "/images/night.png",
    "02d": "/images/happy-day.png",
    "02n": "/images/cloudy-night.png",
    "03d": "/images/cloudy.png",
    "03n": "/images/cloudy-dark.png",
    "04d": "/images/cloudy.png",
    "04n": "/images/cloudy-night.png",
    "09d": "/images/day-rain.png",
    "09n": "/images/night-rain.png",
    "10d": "/images/day-rain.png",
    "10n": "/images/night-rain.png",
    "11d": "/images/thunder.png",
    "11n": "/images/thunder.png",
    "13d":"/images/snow.png",
    "13n":"/images/night-snow.png",
    "50d":"/images/mist.png",
    "50n":"/images/mist.png",
};

const WeatherCond = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin: 30px auto;
`;



const Cond = styled.span`
    margin: 20px auto;
    font-size: 14px;
    & span{
        font-size: 32px;
    }

`;
const Weatherlogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;

const Location = styled.span`
  font-size: 27px;
  font-weight: bold;
`;


const Locationweatherinfo = styled.span`
  font-size: 15px;
  font-weight: bold;
  margin: 20px 25px 10px;
  text-align: start;
  width: 90%;
`;


const Weatherinfocont = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;

const InfoContainer = styled.div`
    display: flex;
    margin: 5px 10px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;
const InforIcon = styled.img`
    width: 36px;
    height: 36px;
`;

const InfoLabel = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin: 15px;
    & span{
        font-size: 12px;
        text-transform: capitalize;
    }
`;


const Weathercompo = (props) => {
    const { name, value } = props;
    return (
        <InfoContainer>
            <InforIcon src={Weatherinfoicon[name]} />
            <InfoLabel>
                {value}
                <span>{name}</span>

            </InfoLabel>
        </InfoContainer>

    );
};

const Weatherinfocompo = (props) => {
    const { weather } = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }

    const getTimeFromTimezone = (timezone) => {
        const date = new Date();
        const utcOffset = date.getTimezoneOffset() * 60; // Offset in seconds
        const localOffset = timezone + utcOffset;
        const localTime = new Date(date.getTime() + localOffset * 1000);
        return localTime.toLocaleTimeString();
    };

    return (
        <>
            <WeatherCond>
                <Cond><span>{`${Math.floor(weather?.main?.temp - 273)} °C `}</span>{`| ${weather?.weather[0].description}`}</Cond>
                <Weatherlogo src={Weatherlogos[weather?.weather[0].icon]} />
            </WeatherCond>
            <Location>{`${weather?.name},${weather?.sys?.country}`}</Location>
            <Locationweatherinfo>Weather Info</Locationweatherinfo>
            <Weatherinfocont>
                <Weathercompo name="sunrise"
                    value={`${getTime(weather?.sys?.sunrise)}`} />
                {/* <Weathercompo name="sunset"
                                      value={`${getTime(weather?.sys?.sunset)}`}/> */}
                <Weathercompo name="humidity" value={weather?.main?.humidity} />
                <Weathercompo name="wind" value={weather?.wind?.speed} />
                <Weathercompo name="pressure" value={weather?.main?.pressure} />
                {/* <Weathercompo name="time" value={`${getTimeFromTimezone(weather?.timezone)}`} /> */}
            </Weatherinfocont>

        </>
    );
};
export default Weatherinfocompo;
