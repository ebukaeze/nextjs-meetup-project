import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Card from "../../components/ui/Card";

function NewMeetupPage() {
    function addMeetupHandler(enteredMeetupData){
            console.log(enteredMeetupData);
    }
    return (
         <Card>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
           </Card>
    )
}

export default NewMeetupPage
