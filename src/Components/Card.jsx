import React from 'react';

const Card=({name,email,id}) =>{
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-1'>
            <img alt='img1' src={`https://robohash.org/${id}?200*200`}/> 
            <h3>{name}</h3>
            <h3>{email}</h3>
        </div>
    );
}

export default Card;