import React, { useEffect, useState } from 'react'
import { List, Avatar, Typography, Row, Col } from 'antd';
import axios from 'axios';
import SideVideo from './Sections/SideVideo';
import Subscribe from './Sections/Subscribe';

function VideoDetailPage(props) {


    const videoId = props.match.params.videoId
    const [Video, setVideo] = useState([])

    const videoVariable = {
        videoId: videoId
    }

    useEffect(() => {
        axios.post('/api/video/getVideo', videoVariable)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.video)
                    setVideo(response.data.video)
                } else {
                    alert('Failed to get video Info')
                }
            })
    }, [])

if(Video.writer){
    return (
        <Row>
            {/* 총 24에서 18 비중 */}
            <Col lg={18} xs={24}>
                <div className="postPage" style={{ width: '100%', padding: '3rem 4em' }}>
                    <video style={{ width: '100%' }} src={`http://localhost:5000/${Video.filePath}`} controls></video>

                    <List.Item
                        actions={[<Subscribe userTo={Video.writer._id } />]}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={Video.writer && Video.writer.image} />}
                            title={<a href="https://ant.design">{Video.title}</a>}
                            description={Video.description}
                        />
                        <div></div>
                    </List.Item>

                </div>
            </Col>
            {/* 사이즈가 6 */}
            <Col lg={6} xs={24}>

                <SideVideo />
                {/* component를 만듦 */}

            </Col>
        </Row>
    )
} else{
    return(
        <div>loading...</div>
    )
}
    
}

export default VideoDetailPage