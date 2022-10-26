import React from 'react'

const Display =(props)=>{
    let ci=props.next;
    return(
        <div className='content'>
            <h1>"{ci.content}"</h1>
            <p>{ci.author}</p>
        </div>
    );
}

export default Display 