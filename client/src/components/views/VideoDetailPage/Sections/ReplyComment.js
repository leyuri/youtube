import React, { useEffect, useState } from 'react'
import SingleComment from './SingleComment';

function ReplyComment(props) {


    const [ChildCommentNumber, setChildCommentNumber] = useState(0)

    const [OpenReplyComments, setOpenReplyComments] = useState(false)

    useEffect(() => {

        let commentNumber = 0;
        //처음에는 댓글이 하나도 없음

        props.CommentLists.map((comment) => {
            //모든 댓글 리스트를 가져옴

            if (comment.responseTo === props.parentCommentId) {
                commentNumber++
            }
        })
        setChildCommentNumber(commentNumber)

        //DOM...한번 돌때만 실행되는 것
    }, [props.CommentLists, props.parentCommentId])
    //CommentLists는 부모로부터 오는 것임. VideoDetailPage.js
    // VideoDetailPager가 바뀔 때마다 전체 부분을 다시 실행하라는 의미


    let renderReplyComment = (parentCommentId) =>
        props.CommentLists.map((comment, index) => (
            <React.Fragment>
                {comment.responseTo === parentCommentId &&
                // 부모 컴포넌트 댓글과 같은 것을 찾아야 함!
                    <div style={{ width: '80%', marginLeft: '40px' }}>
                        {/* 여기서는 첫번째가 렌더링이 될 수가 없다
                        우선  responseTo와 parentCommentId가 같아야 렌더링이 된다*/}
                        <SingleComment 
                        comment={comment} 
                        postId={props.postId} 
                        refreshFunction={props.refreshFunction} />
                        <ReplyComment 
                        CommentLists={props.CommentLists} 
                        parentCommentId={comment._id} 
                        postId={props.postId} 
                        refreshFunction={props.refreshFunction} />

                        {/* ReplyComment.js 와 Comment.js 는 계속 왔다갔다 거리면서 반복함 
                        무한정 반복 컴포넌트...*/}
                    
                    </div>
                }
            </React.Fragment>
        ))

    const handleChange = () => {
        setOpenReplyComments(!OpenReplyComments)
        //댓글 열리는 함수...
    }


    return (
        <div>

            {ChildCommentNumber > 0 &&
            //댓글이 1개 이상 있을경우 렌더링 가능하게 함
                <p style={{ fontSize: '14px', margin: 0, color: 'gray' }}
                    onClick={handleChange} >
                    View {ChildCommentNumber} more comment(s)
             </p>
            }

            {OpenReplyComments &&
                renderReplyComment(props.parentCommentId)
                //부모 컴포넌트에서 porps를 가져옴
            }

        </div>
    )
}

export default ReplyComment