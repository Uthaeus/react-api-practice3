import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import MeetupItem from "../components/meetups/meetup-item";

function Meetups() {
    const [meetups, setMeetups] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:4000/meetups')
        .then(response => response.json())
        .then(data => {
            console.log('meetups data:', data); 
            setMeetups(data);
            setIsLoading(false);
        })
        .catch(error => {
            console.log('meetups error:', error);
        });
    }, []);

    let meetupsList = meetups.map(meetup => {
        return <MeetupItem key={meetup.id} meetup={meetup} />
    });

    return (
        <div className="meetups-container">
            <div className="meetups-header">
                <h1 className="meetups-title">Meetups Page</h1>
                <Link to='/meetups/new' className="new-meetup-link">Create Meetup</Link>
            </div>
            {isLoading && <p>Loading...</p>}
            {!isLoading && (
                <div className="meetups-list">
                    {meetupsList}
                </div>
            )}
        </div>
    );
}

export default Meetups;