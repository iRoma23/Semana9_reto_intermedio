import React from 'react'

const Card = (props) => {
  return (
    <div className='card mb-3'>
        <img src={`https://randomuser.me/api/portraits/${props.gender}/${props.id}.jpg`}></img>
        <div className='card-body'>
            <h5 className='card-title text-center'>{props.name}</h5>
        </div>
    </div>
  )
}

export default Card;
