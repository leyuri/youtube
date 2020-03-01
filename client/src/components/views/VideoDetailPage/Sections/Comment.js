import React , { useState }from 'react'
import { Button, Input } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';

const { TextArea } = Input;


const Comment = (props) => {


    const user = useSelector(state => state.user)
    //user의 정보들이 모두 담겨있음
    const [Comment, setComment] = useState("")


    //typing 한 결과가 화면
    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        //page가 refresh되지 않도록 해줌

        const variables = { 
            content: Comment,
            writer: user.userData._id,
            //redux hook을 통해
            postId: props.postId   
         }


        // db에 정보를 넣어야 함(사용자, 댓글내용 등)
        axios.post('/api/comment/saveComment', variables)
            .then(response => {
                if (response.data.success) {
                    setComment("")
                    //다시 댓글창을 비워두기 위해
                    props.refreshFunction(response.data.result)
                } else {
                    alert('Failed to save Comment')
                }
            })
    }

    return (
        <div>
            <br />
            <p> replies</p>
            <hr />
            {/* Comment Lists  */}
            {console.log(props.CommentLists)}

            {props.CommentLists && props.CommentLists.map((comment, index) => (
                (!comment.responseTo &&
                    //대댓이 없는 애들만
                    <React.Fragment>
                        <SingleComment 
                        comment={comment} 
                        postId={props.postId} 
                        refreshFunction={props.refreshFunction} />
                        
                        <ReplyComment />
                    </React.Fragment>
                )
            ))}



            {/* Root Comment Form */}
            <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                <TextArea
                    style={{ width: '100%', borderRadius: '5px' }}
                    onChange={handleChange}
                    //타이핑과 동시에 나타남
                    value={Comment}
                    placeholder="write some comments"
                />
                <br />
                <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</Button>
            </form>

        </div>
    )
}

export default Comment
