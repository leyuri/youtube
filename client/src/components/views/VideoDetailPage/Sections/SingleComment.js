import React from 'react'
import { Comment, Avatar, Button, Input } from 'antd';

const { TextArea } = Input;

function SingleComment() {
    return (
        <div>
            <Comment
                actions
                author
                avatar={<Avatar src alt/>}
                content
            >

            </Comment>

   
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
  

        </div>
    )
}

export default SingleComment
