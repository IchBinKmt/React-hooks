import React, { useRef } from 'react'
import '../02-useEffect/effects.css'
export const FocusScreen = () => {

    const inputRef = useRef();
    console.log(inputRef); 

    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <div>
            <h1>Focus screen</h1>
            <hr/>

            <input 
                ref={inputRef }
                className="form-control"
                placeholder="Tu nombre"
            />

            <button 
                onClick={handleClick}
                className="btn btn-outline-primary mt-5">
                Focus
            </button>
        </div>
    )
}
