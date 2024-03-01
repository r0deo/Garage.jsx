
const Car = (props) => {

    const {brand, speed, model, power, year, color} = props;
    return(

        <div>
            <h2>{brand}</h2>
            <h2>{speed}</h2>
            <h3>{model}</h3>
        </div>
    );
};

export default Car;