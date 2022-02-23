import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='container bg-white'>
        <div className='row py-4'>
            <div className='col'>
                <h3>Mujeres</h3>
            </div>
        </div>
        <div className='row'>
            <div className='col-6 col-md-3'>
                <Card id={44} name={'Maria'} gender={'women'} />
            </div>
            <div className='col-6 col-md-3'>
                <Card id={65} name={'Evelyn'} gender={'women'} />
            </div>
            <div className='col-6 col-md-3'>
                <Card id={77} name={'Jeanine'} gender={'women'} />
            </div>
            <div className='col-6 col-md-3'>
                <Card id={19} name={'Daniela'} gender={'women'} />
            </div>
        </div>
        <div className='row py-4'>
            <div className='col'>
                <h3>Hombres</h3>
            </div>
        </div>
        <div className='row'>
            <div className='col-6 col-md-3'>
                <Card id={4} name={'Mariano'} gender={'men'} />
            </div>
            <div className='col-6 col-md-3'>
                <Card id={32} name={'Michael'} gender={'men'} />
            </div>
            <div className='col-6 col-md-3'>
                <Card id={54} name={'Jordy'} gender={'men'} />
            </div>
            <div className='col-6 col-md-3'>
                <Card id={25} name={'Alex'} gender={'men'} />
            </div>
        </div>
    </div>
  )
}

export default Cards
