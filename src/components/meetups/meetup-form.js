import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";

import { UserContext } from "../../store/user-context";

function MeetupForm({ meetup }) {
    const { register, handleSubmit, error, reset } = useForm();
    const userCtx = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (meetup) {
            reset({
                title: meetup.title,
                description: meetup.description,
                location: meetup.location,
                time: meetup.time,
                date: meetup.date
            });
        }
    }, [meetup, reset]);

    function buildForm(data) {
        let formData = new FormData();

        formData.append('meetup[title]', data.title);
        formData.append('meetup[description]', data.description);
        formData.append('meetup[location]', data.location);
        formData.append('meetup[time]', data.time);
        formData.append('meetup[date]', data.date);
        formData.append('meetup[user_id]', userCtx.user.id);

        if (data.main_image[0]) {
            formData.append('meetup[main_image]', data.main_image[0]);
        }

        if (data.thumb_image[0]) {
            formData.append('meetup[thumb_image]', data.thumb_image[0]);
        }

        return formData;
    }

    function submitHandler(data) {
        fetch('http://localhost:4000/meetups', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('practice_token')}`,

            },
            body: buildForm(data)
        })
        .then(response => {
            if (response.ok) {
                navigate('/meetups');
                return response.json();
            }
        })
        .catch(error => {
            console.log('meetup create error:', error);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group mb-3">
                    <label htmlFor="title">Title</label>
                    <input type='text' className="form-control" {...register('title', {required: true})} />
                    {error && error?.title && <p className="error-text">Title is required</p>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" {...register('description', {required: true})} />
                    {error && error?.description && <p className="error-text">Description is required</p>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="location">Location</label>
                    <input type='text' className="form-control" {...register('location', {required: true})} />
                    {error && error?.location && <p className="error-text">Location is required</p>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="main_image">Main Image</label>
                    <input type='file' className="form-control" {...register('main_image', {required: true})} />
                    {error && error?.main_image && <p className="error-text">Main Image is required</p>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="thumb_image">Thumb Image</label>
                    <input type='file' className="form-control" {...register('thumb_image', {required: true})} />
                    {error && error?.thumb_image && <p className="error-text">Thumb Image is required</p>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="time">Time</label>
                    <input type='time' className="form-control" {...register('time', {required: true})} />
                    {error && error?.time && <p className="error-text">Time is required</p>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="date">Date</label>
                    <input type='date' className="form-control" {...register('date', {required: true})} />
                    {error && error?.date && <p className="error-text">Date is required</p>}
                </div>

                <button type="submit" className="btn btn-primary">Create Meetup</button>
            </form>
        </div>
    );
}

export default MeetupForm;