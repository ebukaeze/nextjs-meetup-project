import {useRef} from 'react';

import classes from './NewMeetupForm.module.css';

const NewMeetupForm = (props) => {
    const titleInputRef = useRef();
    const ImageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(e){
         e.preventDefault();
    }
    return (
        <div>
            
        </div>
    )
}

export default NewMeetupForm
