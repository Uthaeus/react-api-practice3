import { useParams } from "react-router";
import { useState, useEffect } from "react";

function MeetupDetail() {
    const { id } = useParams();
    const [meetup, setMeetup] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:4000/meetups/${id}`)
        .then(response => response.json())
        .then(data => {
            setMeetup(data);
            setIsLoading(false);
        })
        .catch(error => {
            console.log('meetup error:', error);
        });
    }, [id]);

    let meetupImage = meetup.main_image ? `http://localhost:4000${meetup.main_image.url}` : 'https://via.placeholder.com/600x400';

    return (
        <div>
            <h1>Meetup Detail Page</h1>
            <hr />
            {isLoading && <p>Loading...</p>}
            {!isLoading && meetup && (
                <div>
                    <img src={meetupImage} alt={meetup.title} width='600px' height='400px' />
                    <h2>{meetup.title}</h2>
                    <p>{meetup.description}</p>
                    <p>{meetup.location}</p>
                    <p>{meetup.time}</p>
                    <p>{meetup.date}</p>
                    <p>posted by: {meetup.user?.username}</p>
                </div>
            )}
        </div>
    );
}

export default MeetupDetail;