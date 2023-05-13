
function MeetupItem({ meetup }) {
    let meetupImage = meetup.thumb_image ? `http://localhost:4000${meetup.thumb_image.url}` : 'https://via.placeholder.com/250x300';

    return (
        <div>
            <img src={meetupImage} alt={meetup.title} width='250px' height='300px' />
            <h2>title: {meetup.title}</h2>
            <p>posted by: {meetup.user?.username}</p>
        </div>
    );
}

export default MeetupItem;