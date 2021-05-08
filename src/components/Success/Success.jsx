import { useHistory } from 'react-router-dom';

function Success() {

    //create variable for history function
    const history = useHistory();

    function handleSubmit (){
        console.log('clicked');
        history.push('/');
    }
    return(
        <>
            <h1>Thank you for your feedback!</h1>
            <button onClick={handleSubmit}>Leave New Feedback</button>
        </>
    )
}

export default Success;