import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'

function Support() {

    //set useDispatch to be variable dispatch
    const dispatch = useDispatch();
    //set useHistory to be variable history
    const history = useHistory();
    //declaring support state
    const [support, setSupport] = useState(0)
    //if any input for support, button will be enabled. If no input, button disabled
    const isEnabled = understanding > 0
    //on submit of next button - these events will happen
    const handleSubmit = event => {
        event.preventDefault();
        // test to make sure support is being added
        console.log('adding support:', {support});
        //sending support response to be held in store
        dispatch({type:'ADD_SUPPORT', payload:{
            support: support,
        }})
        //set support back to original, empty 
        setSupport('');
        history.push('/comments');
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>How well are you being supported?</h1>
            <p>Support?</p>
            <input type="number" min="0" max="5" value={support} onChange={(event) => setSupport(event.target.value)}/>
            <button disabled={!isEnabled}>NEXT</button>
        </form>

    )
}

export default Support;