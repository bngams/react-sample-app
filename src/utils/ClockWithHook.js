import React, { useState, useEffect } from 'react';

export default function ClockWithHook(props) {
    // Déclaration d'une nouvelle variable d'état, que l'on appellera “count”
    const [date, setDate] = useState(new Date());

    // Similaire à componentDidMount et componentDidUpdate :
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        // componentWillUnmount
        return () => {
            clearInterval(timer);
        };
    });

    return (
        <h2>{date.toLocaleTimeString()}</h2>
    );
}