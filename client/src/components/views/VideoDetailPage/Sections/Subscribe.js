import React from 'react';
import axios from 'axios';
import { response } from 'express';

function Subscribe(props) {


    const [SubscribeNumber, setSubscribeNumber] = useState(initialState)

    useEffect(() => {

        let variable = { userTo: props.userTo }

        axios.post('/api/subscribe/subscribeNumber', variable)
        .then( response => {
            if(response.data.success) {
                setSubscribeNumber(response.data.subscribeNumber)
            } else {
                alert('Failed to subscriber number.')
            }
        })

    }, [])








    return (
        <div>
            <button
                style={{
                    backgroundColor: '#CC0000',
                    borderRadius: '4px',
                    color: 'white', padding: '10px 16px',
                    fontWeight: '500', fontSize: '1rem', textTransform: 'uppercase'
                }}
                onClick
                >
                   0 Suberscribe    
            </button>
        </div>
    )
}

export default Subscribe;
