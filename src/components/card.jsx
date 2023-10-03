import React from 'react'
import "../stylesheets/card.css"
import seatIcon from '../images/seat.png'
import fuelIcon from '../images/fuel.png'
import mileageIcon from '../images/mileage.png'
import modeIcon from '../images/mode.png'

const Card = ({ currentItems }) => {
  return (
    <div className='cardDiv'>
       {
       currentItems &&
        currentItems.map((car) => (
            <div className='card-container' key={car.id}>
                <img src={car.image} alt='car image' className='card-image'/>
                <div className='part1'>
                    <h4 className='name'>{car.name}</h4>
                    <h6 className='year'>{car.year}</h6>
                </div>
                <div className='part2'>
                    <div className='part2a'>
                        <div className='seat'>
                            <img src={seatIcon} className='seatIcon'/>
                            {`${car.seat} people`}
                        </div>
                    <div className='fuel'>
                        <img src={fuelIcon} className='fuelIcon'/>
                            {car.fuel}</div>
                    </div>
                    <br />
                    <div className='part2b'>
                        <div className='mileage'>
                            <img src={mileageIcon} className='mileageIcon'/>
                                {car.mileage}
                        </div>
                        <div className='mode'>
                            <img src={modeIcon} className='modeIcon'/>
                                {car.mode} 
                        </div>
                    </div>
                </div>
                <div className='part3'>
                    <h5>{`$${car.rentPrice}/`}</h5><h6>month</h6>
                    <button className='rent-button'>Rent now</button>
                </div>
            </div>
        ))
        }
    </div>
  )
}

export default Card
