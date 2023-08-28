import { useLocation } from "react-router";


const Predicting = () => {
    const location = useLocation(); 
    const day = location.state?.day || '';


    return (
        <div onClick={onclick}>{day}</div>

    );
}

export default Predicting;