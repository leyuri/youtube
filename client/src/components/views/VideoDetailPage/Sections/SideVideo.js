import React, {useEffect, useState} from 'react'
import axios from 'axios';
function SideVideo() {

    //db에 있는 비디오 info를 불러오기 위해서 state 사용
    const [SideVideos, setSideVideos] = useState([])

    useEffect(() => {
        axios.get('/api/video/getVideos')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.videos)
                    setSideVideos(response.data.videos)
                } else {
                    alert('Failed to get Videos')
                }
            })
        

    }, [])

        //map이용
    const sideVideoItem = SideVideos.map(( video, index) => {

        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);

       return <div style={{ display: 'flex', marginTop: '1rem', padding: '0 2rem' }}>
        <div style={{ width:'85%', marginRight:'1rem' }}>
            <a href={`/video/${video._id}`}  style={{ color:'gray' }}>
                <img style={{ width: '100%' }} src={`http://localhost:5000/${video.thumbnail}`} alt="thumbnail" />
            </a>
        </div>

        <div style={{ width:'50%' }}>
            <a href={`/video/${video._id}`} style={{ color:'gray' }}>
                <span style={{ fontSize: '1rem', color: 'black' }}>{video.title}  </span><br />
                <span>{video.writer.name}</span><br />
                <span>{video.views}</span><br />
                <span>{minutes} : {seconds}</span><br />
            </a>
        </div>
    </div>
    })

    return (
        <React.Fragment>
            <div style={{ marginTop:'3rem' }}></div>
            {sideVideoItem}


        </React.Fragment>
        
       
    )
}

export default SideVideo;