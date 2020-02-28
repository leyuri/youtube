import React from 'react'
import { Button, Input } from 'antd';

const { TextArea } = Input;


const Comment = () => {


    return (
        <div>
            <br />
            <p> replies</p>
            <hr />
            {/* Comment Lists  */}
   
            {/* Root Comment Form */}
            <form style={{ display: 'flex' }} onSubmit >
                <TextArea
                    style={{ width: '100%', borderRadius: '5px' }}
                    onChange
                    value
                    placeholder="write some comments"
                />
                <br />
                <Button style={{ width: '20%', height: '52px' }} onClick >Submit</Button>
            </form>

        </div>
    )
}

export default Comment
