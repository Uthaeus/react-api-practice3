import { Link } from 'react-router-dom';

function MeetupItem({ meetup }) {
    let meetupImage = meetup.thumb_image ? `http://localhost:4000${meetup.thumb_image.url}` : 'https://via.placeholder.com/250x300';

    return (
        <Link className="meetup-item-wrapper">
            <img src={meetupImage} alt={meetup.title} width='100%' height='300px' />
            <p className="meetup-item-author">posted by: <span className="item-author-span">{meetup.user?.username}</span></p>
            <h2 className="meetup-item-title">title: {meetup.title}</h2>
        </Link>
    );
}

export default MeetupItem;