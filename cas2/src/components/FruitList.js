import React from 'react';
import PropTypes from 'prop-types';

export function FruitList({listaNaOvosje}){
    console.log(listaNaOvosje)
    return(
        <div id="fruit-list">
            <h3>Lista na Ovosje</h3>
            {listaNaOvosje.map((ovosje,i)=>{
                return(
                    <p key={i}> {ovosje} </p>
                )
            })}
        </div>
    )
}
//()=>{}

FruitList.propTypes = {
    listaNaOvosje: PropTypes.arrayOf(PropTypes.string).isRequired
}