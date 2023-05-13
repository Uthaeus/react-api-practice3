import { Link } from "react-router-dom";

import MeetupForm from "./meetup-form";

function NewMeetup() {

    return (
        <div>
            <h1>New Meetup Page</h1>
            <Link className="btn btn-primary" to='/meetups'>Back to Meetups</Link>
            <hr />
            <MeetupForm />
        </div>
    );
}

export default NewMeetup;