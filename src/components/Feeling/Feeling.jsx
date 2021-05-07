import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Feeling() {

    //set useDispatch to be variable dispatch
    const dispatch = useDispatch();
    //set useHistory to be variable history
    const history = useHistory();
    //declaring feeling state
    const [feeling, setFeeling] = useState('')
    //if any input for feeling, button will be enabled. If no input, button disabled
    const isEnabled = feeling.length > 0
    //on submit of next button - these events will happen
    const handleSubmit = event => {
        event.preventDefault();
        // test to make sure feeling is being added
        console.log('adding feeling:', {feeling});
        //sending feeling response to be held in store
        dispatch({type:'ADD_FEELING', payload:{
            feeling: feeling,
        }})
        //set feeling back to original, empty 
        setFeeling('');
        history.push('/understanding');
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>How are you feeling today?</h1>
            <p>Feeling?</p>
            <input />
            <button disabled={!isEnabled}>NEXT</button>
        </form>

    )
}

export default Feeling;