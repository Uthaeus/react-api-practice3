import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import MeetupForm from './meetup-form';

function EditMeetup() {
    const { id } = useParams();
    const [meetup, setMeetup] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/meetups/${id}`)
        .then(response => response.json())
        .then(data => {
            setMeetup(data);
        })
        .catch(error => {
            console.log('meetup error:', error);
        });
    }, [id]);

    return (
        <div>
            <h1>Edit Meetup Page</h1>
            <Link className="btn btn-primary" to='/meetups'>Back to Meetups</Link>
            <hr />
            <MeetupForm meetup={meetup} />
        </div>
    );
}

export default EditMeetup;