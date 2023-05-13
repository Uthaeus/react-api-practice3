const API_ROOT = 'http://localhost:4000';

export function fetchImage(img) {
    return fetch(`${API_ROOT}/${img}`)
        .then(response => {
            if (response.ok) {
                return response.blob();
            } else {
                throw new Error('Something went wrong');
            }
        })
        .then(data => {
            return URL.createObjectURL(data);
        })
        .catch(error => {
            console.log('fetchImage error:', error);
        });
}