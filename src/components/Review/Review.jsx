import {useSelector} from 'react-redux';

function Review (){

    //access items in store - set variables to stored values
    const feelingFeedback = useSelector(store => store.feelingReducer);
    const understandingFeedback = useSelector(store => store.understandingReducer);
    const supportFeedback = useSelector(store => store.supportReducer);
    const commentsFeedback = useSelector(store => store.commentsReducer);

    const handleSubmit = () => {
        console.log('click');
        const summary = {
          feeling: feelingFeedback,
          understanding: understandingFeedback,
          support: supportFeedback,
          comments: commentsFeedback
          
        }
        console.log(summary);
        axios({
          method: 'POST',
          url: '/api/summary', 
          data: summary
        })
        .then(response =>  {
          console.log('added summary to the server', response);
        })
        .catch(error => {
          console.log('Unable to add summary', error);
          alert('Unable to add summary');
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