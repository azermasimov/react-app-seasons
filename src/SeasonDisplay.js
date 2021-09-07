import "./SeasonDisplay.css";

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        icon: "sun",
    },
    winter: {
        text: "Burr, its chilly",
        icon: "snowflake",
    },
};

const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? "summer" : "winter";
    } else {
        return latitude < 0 ? "winter" : "summer";
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const { text, icon } = seasonConfig[season];

    return (
        <div className={`${season} season-display`}>
            <i className={`icon-left massive ${icon} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${icon} icon`} />
        </div>
    );
}

export default SeasonDisplay;
