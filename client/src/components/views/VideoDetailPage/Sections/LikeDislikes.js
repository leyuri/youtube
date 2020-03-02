import React , { useEffect } from 'react'
import { Tooltip, Icon } from 'antd';
import axios from 'axios';
import { response } from 'express';

function LikeDislikes(props) {


    let variable = { }

    //VideoDetailPage에서 가져와야 함...
    if(props.video) {
        variable = { videoId: props.videoId, userId: props.userId}
    } else {
        variable = { commentId: , userId: }
    }

    // 현재 좋아요 싫어요에 대한 정보를 db에서 가져오기
    useEffect(() => {

        axios.post('/api/like/getLikes', variable)
        .then(response=> {
            if(response.data.success) {

            } else {
                alert('Failed to get Likes info')
            }
        })




        
        return () => {
            cleanup
        };
    }, [input])


    return (
        <React.Fragment>
            <span key="comment-basic-like">
                <Tooltip title="Like">
                    <Icon type="like"
                        theme="filled"
                        onClick />
                </Tooltip>
                <span style={{ paddingLeft: '8px', cursor: 'auto' }}></span>
            </span>&nbsp;&nbsp;
            <span key="comment-basic-dislike">
                <Tooltip title="Dislike">
                    <Icon
                        type="dislike"
                        theme="outlined"
                        onClick
                    />
                </Tooltip>
                <span style={{ paddingLeft: '8px', cursor: 'auto' }}></span>
            </span>
        </React.Fragment>
    )
}

export default LikeDislikes
