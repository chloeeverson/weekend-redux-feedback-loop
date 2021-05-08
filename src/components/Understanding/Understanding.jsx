import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'

function Understanding() {

    //set useDispatch to be variable dispatch
    const dispatch = useDispatch();
    //set useHistory to be variable history
    const history = useHistory();
    //declaring understanding state
    const [understanding, setUnderstanding] = useState(0)
    //if any input for understanding, button will be enabled. If no input, button disabled
    const isEnabled = understanding > 0
    //on submit of next button - these events will happen
    const handleSubmit = event => {
        event.preventDefault();
        // test to make sure understanding is being added
        console.log('adding understanding:', {understanding});
        //sending understanding response to be held in store
        dispatch({type:'ADD_UNDERSTANDING', payload:{
            understanding: understanding,
        }})
        //set understanding back to original, empty 
        setUnderstanding('');
        history.push('/support');
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>How well are you understanding the content??</h1>
            <p>Understanding?</p>
            <input type="number" min="0" max="5" value={understanding} onChange={(event) => setUnderstanding(event.target.value)}/>
            <button disabled={!isEnabled}>NEXT</button>
        </form>

    )
}

export default Understanding;