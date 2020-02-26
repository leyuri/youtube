import React from 'react'
import { Typography, Button, Form, message, Input, Icon} from'antd';
import TextArea from 'antd/lib/input/TextArea';
import Dropzone from 'react-dropzone';

// const { TextArea } = Input;
const { Title } = Typography;

function VideoUploadPage() {
    return (
        <div style={{ maxWidth:'700px', margin:'2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom:'2rem' }}>
                <Title level={2}>Upload Video</Title>
            </div>

            <Form onSubmit>
                <div style={{ display:'flex', justifyContent:'space-between' }}></div>
                {/* Drop Zone */}

                <Dropzone
                onDrop
                multiple
                maxSize
                >
                {({ getRootProps, getInputProps}) => (
                    <div style={{ width: '700px', height: '240px', border:'1px solid lightgray', display:'flex',
                    alignItems:'center', justifyContent:'center'}} {...getRootProps()}>
                        <input {...getInputProps()}/>
                        <Icon type="plus" style={{ fontSize:'4rem'}}/> 
                    </div>
                )}
                </Dropzone>

                {/* Thumbnail */}

                <div>
                    <img src alt/>
                </div>

            <br />
            <br />
            <labe>Title</labe>
            <Input
                onChange
                value
            />
            <br />
            <br />
            <label>Description</label>
            <TextArea
                onChange
                value          
            />
            <br />
            <br />

            <select onChange>
                <option key value></option>
            </select>
            <br />
            <br />

            <select>
                <option key value></option>
            </select>
            <br />
            <br />

            <Button type="primary" size="large" onClick>
                Submit
            </Button>

            </Form>
           
        </div>
    )
}

export default VideoUploadPage;
