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
          feeling: feelingFeedback.feeling,
          understanding: understandingFeedback.understanding,
          support: supportFeedback.support,
          comments: commentsFeedback.comments
          
        }
        console.log(feedback);
        axios({
          method: 'POST',
          url: '/feedback', 
          data: feedback
        })
        .then(response =>  {
          console.log('added feedback to the server', response);
        })
        .catch(error => {
          console.log('Unable to add feedback', error);
          alert('Unable to add feedback');
        })
        history.push('/success');
      }
    
    return (
        <>
            <h1>Review Your Feedback</h1>
            <p>
               
                Feeling: {feelingFeedback.feeling}
                <br /><br />
                Understanding: {understandingFeedback.understanding}
                <br /><br />
                Support: {supportFeedback.support}
                <br /><br />
                Comments: {commentsFeedback.comments}
                <br /><br />
            </p>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Review;