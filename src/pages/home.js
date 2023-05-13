import { useState, useEffect } from "react";


import ProductItem from "../components/products/product-item";
import MeetupItem from "../components/meetups/meetup-item";
import PostItem from "../components/posts/post-item";

function HomePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/home', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(data => {
            setData(data);
            setIsLoading(false);
        })
        .catch(error => console.log('home page error', error));
    }, []);
    
    console.log(data);

    return (
        <div>
            <h1>Home Page</h1>
            <hr />
            {isLoading && <p>Loading...</p>}
            {!isLoading && (
                <div>
                    <div>
                        <h2>Posts</h2>
                        {data.posts?.map(post => <PostItem key={post.id} post={post} />)}
                    </div>

                    <div>
                        <h2>Meetups</h2>
                        {data.meetups?.map(meetup => <MeetupItem key={meetup.id} meetup={meetup} />)}
                    </div>

                    <div>
                        <h2>Products</h2>
                        {data.products?.map(product => <ProductItem key={product.id} product={product} />)}
                    </div>
                </div>
                
            )}
        </div>
    );
}

export default HomePage;