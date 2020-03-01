import React, { useState } from 'react'
import { Comment, Avatar, Button, Input } from 'antd';

const { TextArea } = Input;

function SingleComment() {
    
    //처음에는 숨겨져 있어야 한다
    const [OpenReplay, setOpenReplay] = useState(false)

    const onClickReplayOpen = () => {
        setOpenReplay(!OpenReplay)
    }

    const actions = [
        <span onClick={onClickReplayOpen} key="comment-basic-replay-to"> Replay to </span>
    ]

    return (
        <div>
            <Comment
                actions={actions}
                author
                avatar={<Avatar src alt/>}
                content
            >

            </Comment>


            {OpenReplay &&
   
                <form style={{ display: 'flex' }} onSubmit>
                    <TextArea
                        style={{ width: '100%', borderRadius: '5px' }}
                        onChange
                        value
                        placeholder="write some comments"
                    />
                    <br />
                    <Button style={{ width: '20%', height: '52px' }} onClick>Submit</Button>
                </form>
            }

        </div>
    )
}

export default SingleComment
