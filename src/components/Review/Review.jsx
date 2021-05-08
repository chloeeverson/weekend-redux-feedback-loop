import {useSelector} from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Review (){
    //create variable for history function
    const history = useHistory();
    //access items in store - set variables to stored values
    const feelingFeedback = useSelector(store => store.feelingReducer);
    const understandingFeedback = useSelector(store => store.understandingReducer);
    const supportFeedback = useSelector(store => store.supportReducer);
    const commentsFeedback = useSelector(store => store.commentsReducer);

    const handleSubmit = () => {
        console.log('click');
        const feedback = {
          feeling: feelingFeedback,
          understanding: understandingFeedback,
          support: supportFeedback,
          comments: commentsFeedback
          
        }
        console.log(feedback);
        axios({
          method: 'POST',
          url: '/api/feedback', 
          data: feedback
        })
        .then(response =>  {
          console.log('added feedback to the server', response);
        })
        .catch(error => {
          console.log('Unable to add feedback', error);
          alert('Unable to add feedback');
        })
        // dispatch({type: 'RESET_FEELING'});
        // dispatch({type: 'RESET_UNDERSTANDING'});
        history.push('/success');
      }
    
    return (
        <>
            <h1>Review Your Feedback</h1>
            <p>
                {feelingFeedback}
                <br />
                {understandingFeedback}
                <br />
                {supportFeedback}
                <br />
                {commentsFeedback}
                <br />
            </p>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Review;