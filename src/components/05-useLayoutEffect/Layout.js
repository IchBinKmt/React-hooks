import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './Layout.css';

export const Layout = () => {
    const {counter, increment } = useCounter(1);
    const {data} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
    const [boxSize, setBoxSize] = useState({})

    const {quote} = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect (() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>

            <blockquote className="blockquote text-right">
                <p className="mb-0"
                    ref={pTag}
                >{quote}</p>
            </blockquote>
            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>
            <button className="btn btn-primary"
                    onClick={increment}>
                Next quote
            </button>
        </div>
    )
}
