import {useRef, useState, useEffect} from "react";

function TimerClock(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=> {

    }, [isRunning]
    );

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;

    }

    function stop(){

    }

    function reset(){

    }

    function formatTime(){
        return '00:00:00';

    }


return(
    <div className="container text-white text-center">   
        {formatTime()}
        <div className="text-center">
            <button className="btn btn-success" onClick={start}>Start</button>
            <button className="btn btn-danger" onClick={stop}>Stop</button>
            <button className="btn btn-warning" onClick={start}>Restart</button>
        </div>
        
    </div>

)

}

export default TimerClock