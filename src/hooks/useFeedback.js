import { useEffect, useState } from "react";

const useFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch(`https://powerful-journey-42037.herokuapp.com/feedback`)
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [feedbacks]);

    return [feedbacks, setFeedbacks];
}

export default useFeedback;