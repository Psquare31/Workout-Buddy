import { useEffect, useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from "../components/WorkoutForm";

const Home=()=>{
    // const [ workouts, setWorkouts ]= useState(null);
        const {workouts, dispatch}= useWorkoutsContext()    
    useEffect(()=>{
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')//new bad boi
            const json = await response.json(); //bad line
            if(response.ok)
            {
                // setWorkouts(json);
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
            
        };
        
        fetchWorkouts();
    }, []);  //everytime there is change to dependency array [], here workouts, useEffect() is rendered
    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails key={workout._id} workout={workout} />
                    // <p key={workout._id}>{workout.title}</p>
                    
                ))}
            </div>
            <WorkoutForm />
        </div>
    ) 
}
export default Home;