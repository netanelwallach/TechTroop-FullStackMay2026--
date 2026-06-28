import "./Weather.css";

function WeatherComp() {
  const getClassName = (temperature) => {
    let className = "";
    switch (true) {
      case temperature < 15:
        className = "freezing";
        break;
      case temperature >= 15 && temperature <= 30:
        className = "fair";
        break;
      case temperature > 30:
        className = "hell-scape";
        break;
      default:
        break;
    }

    return className;
  };

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        <div id="weatherBox" className={getClassName(14)}></div>
        <div id="weatherBox" className={getClassName(25)}></div>
        <div id="weatherBox" className={getClassName(32)}></div>
      </div>
    </div>
  );
}

export default WeatherComp;
