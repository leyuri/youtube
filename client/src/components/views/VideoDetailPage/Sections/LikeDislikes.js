import React from 'react'
import { Tooltip, Icon } from 'antd';

function LikeDislikes() {
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
