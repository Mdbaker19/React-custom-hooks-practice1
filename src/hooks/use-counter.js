import { useEffect, useState } from "react";

// function name needs to start with use
// extracted from component just does not return jsx
const useCounter = (forward = true) => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (forward) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [forward]);

    return counter;

};

export default useCounter;