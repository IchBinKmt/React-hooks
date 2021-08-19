import React, { useEffect } from 'react'

export const Message = () => {
    useEffect(() => {
        const mouseMove = (e) => {
            const coors = {x: e.x, y: e.y};
            console.log(coors);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])
    return (
        <div>
            <h3>Eres genial!</h3>
        </div>
    )
}
