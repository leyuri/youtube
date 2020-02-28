import React, { useEffect, useState } from 'react'
import { List, Avatar, Typography, Row, Col } from 'antd';
import axios from 'axios';
import SideVideo from './Sections/SideVideo';
import Subscriber from './Sections/Subscriber';
import Comment from './Sections/Comment';

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

    const suberscribeButton = Video.writer._id !== localStorage.getItem('userId') && <Subscriber userTo={Video.writer._id} userFrom={localStorage.getItem('userId')} /> 
    return (
        <Row>
            {/* 총 24에서 18 비중 */}
            <Col lg={18} xs={24}>
                <div className="postPage" style={{ width: '100%', padding: '3rem 4em' }}>
                    <video style={{ width: '100%' }} src={`http://localhost:5000/${Video.filePath}`} controls></video>

                    <List.Item
                       actions={[ suberscribeButton ]}
                       //현재 로그인한 본인의 아이디를 가져올 수 있음
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={Video.writer && Video.writer.image} />}
                            title={<a href="https://ant.design">{Video.title}</a>}
                            description={Video.description}
                        />
                        <div></div>
                    </List.Item>

                    <Comment />

                </div>
            </Col>
            <Col lg={6} xs={24}>

                <SideVideo />

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