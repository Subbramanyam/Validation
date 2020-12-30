import React from 'react';


const validation = (props)=>{
    let validationMsg= 'text long engough'
    if (props.inputLength <=5) {
        validationMsg = 'text too short'
    }

    return (
    <div>
      <p>{validationMsg}</p>
    </div>
)
}
export default validation;