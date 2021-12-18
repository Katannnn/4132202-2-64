import React, {useState} from 'react';
import Table from './Table';

function Car() {
    const [color,setColor] = useState("Red");
    const [Car,setCar] = useState ({
        brand: "Toyota",
        color: "Green",
        year: 2010,
    });
    const chCar = (year,color) => {
        setColor(color);
        let y = year + 10;
        setCar({year:y});
    };
    return (
        <>
        <p>My Car color is {color}, year {Car.year}</p>
        <button onClick={
            () => {
                chCar(2011,"green");
            }
        }>
            Dom
        </button>
        <Table />
        </>
    );
}

export default Car