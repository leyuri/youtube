import React, { useEffect, useState } from 'react'
import { Tooltip, Icon } from 'antd';
import Axios from 'axios';

function LikeDislikes(props) {

    const [Likes, setLikes] = useState(0)
    const [Dislikes, setDislikes] = useState(0)
    const [LikeAction, setLikeAction] = useState(null)
    const [DislikeAction, setDislikeAction] = useState(null)
    let variable = {};  

    //VideoDetailPage에서 가져와야 함...
    if (props.video) {
        variable = { videoId: props.videoId, userId: props.userId }
    } else {
        variable = { commentId: props.commentId, userId: props.userId }
    }

    
    // 현재 좋아요 싫어요에 대한 정보를 db에서 가져오기

    useEffect(() => {

        Axios.post('/api/like/getLikes', variable)
        .then(response => {
                console.log('getLikes',response.data)

                if (response.data.success) {
                    //얼마나 많은 라이크 수를 가졌는지
                    setLikes(response.data.likes.length)

                    //내가 이미 like 버튼을 눌렀을 ㅕㄱㅇ우
                    response.data.likes.map(like => {
                        if (like.userId === props.userId) {
                            setLikeAction('liked')
                        }
                    })
                } else {
                    alert('Failed to get likes')
                }
            })

        Axios.post('/api/like/getDislikes', variable)
            .then(response => {
                console.log('getDislike',response.data)
                if (response.data.success) {
         
                    setDislikes(response.data.dislikes.length)

                    //내가 이미 ㅣike 버튼을 클릭했을 시,,,,
                    response.data.dislikes.map(dislike => {
                        if (dislike.userId === props.userId) {
                            setDislikeAction('disliked')
                        }
                    })
                } else {
                    alert('Failed to get dislikes')
                }
            })

    }, [])


    const onLike = () => {

        if (LikeAction === null) {

            Axios.post('/api/like/upLike', variable)
                .then(response => {
                    if (response.data.success) {

                        setLikes(Likes + 1)
                        setLikeAction('liked')

                        //이미 dislike 버튼이 클릭되어 있다면

                        if (DislikeAction !== null) {
                            setDislikeAction(null)
                            setDislikes(Dislikes - 1)
                        }


                    } else {
                        alert('Failed to increase the like')
                    }
                })


        } else {

            Axios.post('/api/like/unLike', variable)
                .then(response => {
                    if (response.data.success) {

                        setLikes(Likes - 1)
                        setLikeAction(null)

                    } else {
                        alert('Failed to decrease the like')
                    }
                })

        }

    }


    const onDisLike = () => {

        if (DislikeAction !== null) {

            Axios.post('/api/like/unDisLike', variable)
                .then(response => {
                    if (response.data.success) {

                        setDislikes(Dislikes - 1)
                        setDislikeAction(null)

                    } else {
                        alert('Failed to decrease dislike')
                    }
                })

        } else {

            Axios.post('/api/like/upDisLike', variable)
                .then(response => {
                    if (response.data.success) {

                        setDislikes(Dislikes + 1)
                        setDislikeAction('disliked')

        
                        if(LikeAction !== null ) {
                            setLikeAction(null)
                            setLikes(Likes - 1)
                        }

                    } else {
                        alert('Failed to increase dislike')
                    }
                })


        }


    }

    return (
        <React.Fragment>
            <span key="comment-basic-like">
                <Tooltip title="Like">
                    <Icon type="like"
                        theme={LikeAction === 'liked' ? 'filled' : 'outlined'}
                        onClick={onLike} />
                </Tooltip>
                <span style={{ paddingLeft: '8px', cursor: 'auto' }}>{Likes}</span>
            </span>&nbsp;&nbsp;
            <span key="comment-basic-dislike">
                <Tooltip title="Dislike">
                    <Icon
                        type="dislike"
                        theme={DislikeAction === 'disliked' ? 'filled' : 'outlined'}
                        onClick={onDisLike}
                    />
                </Tooltip>
                <span style={{ paddingLeft: '8px', cursor: 'auto' }}>{Dislikes}</span>
            </span>
        </React.Fragment>
    )
}

export default LikeDislikes