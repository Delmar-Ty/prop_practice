import './App.css';

const Car = ({make, model, img}) => {
    return(
      <div className='card'>
          <img src={img} alt='some pic' className='img'></img>
          <h2>Make: {make}</h2>
          <h2>Model: {model}</h2>
          <br></br>
      </div>
    );
}

export default Car;