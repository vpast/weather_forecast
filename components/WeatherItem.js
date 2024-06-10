const WeatherItem = ({ itemTitle, src, humidity, isActive, onClick }) => {
  return (
    <div
      className={`cardBorder ${isActive && 'cardBorderActive'}`}
      onClick={() => onClick()}
    >
      <p className='cardFonts'>{itemTitle}</p>
      <div className='cardImg'>
        <img src={src} className='img' />
      </div>
      <p className='cardFonts'>Humidity</p>
      <p className='cardFonts'>
        {humidity} % {isActive}
      </p>
    </div>
  );
};

export default WeatherItem;