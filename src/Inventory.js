import './Inventory.css';
import Car from "./App.js";

const cars = [
    {
        make: 'Honda',
        model: 'CRV',
        img: 'honda.jpg'
    },
    {
        make: 'Nissan',
        model: 'Altima',
        img: 'nissan.png'
    },
    {
        make: 'Toyota',
        model: 'Rav4',
        img: 'toyota.jpg'
    }, 
    {
        make: 'Nissan',
        model: '350z',
        img: '350z.jpg'
    },
    {
        make: 'Mazda',
        model: 'Miata',
        img: 'miata.jpg'
    }
];

const Inventory = () => {
    const components = [];
    for (const car of cars) {
        components.push(<Car make={car.make} model={car.model} img={car.img}/>);
    }

    return (
        <div className="container">
            {components}
        </div>
    );
}

export default Inventory;