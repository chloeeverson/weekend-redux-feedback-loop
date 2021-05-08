import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'

function Comments() {

    //set useDispatch to be variable dispatch
    const dispatch = useDispatch();
    //set useHistory to be variable history
    const history = useHistory();
    //declaring comments state
    const [comments, setComments] = useState('')
    
    //on submit of next button - these events will happen
    const handleSubmit = event => {
        event.preventDefault();
        // test to make sure comments is being added
        console.log('adding comment:', {comments});
        //sending comments response to be held in store
        dispatch({type:'ADD_COMMENTS', payload:{
            comments: comments,
        }})
        //set comments back to original, empty 
        setComments('');
        history.push('/review');
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Any comments you want to leave?</h1>
            <p>Comments</p>
            <input type="text" value={comments} onChange={(event) => setComments(event.target.value)}/>
            <button>NEXT</button>
        </form>

    )
}

export default Comments;