import { useEffect, useState } from "react";

const useFeedback = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://powerful-journey-42037.herokuapp.com/feedback`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return [services, setServices];
}

export default useFeedback;