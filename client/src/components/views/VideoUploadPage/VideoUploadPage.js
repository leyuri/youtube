import React , {useState} from 'react'
import { Typography, Button, Form, message, Input, Icon} from'antd';
import TextArea from 'antd/lib/input/TextArea';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { use } from 'bcrypt/promises';

// const { TextArea } = Input;
const { Title } = Typography;


const PrivateOptions = [
    {value: 0, label: "Private"},
    {value: 1, label: "Public"}
]

const CategoryOption = [
    {value: 0, label: "Film & Animation"},
    {value: 1, label: "Autos & Vehicles"},
    {value: 2, label: "Music"},
    {value: 3, label: "Pets & Animals"}
]

function VideoUploadPage() {


    
    const [VideoTitle, setVideoTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Private, setPrivate] = useState(0)
    const [Category, setCategory] = useState("Film & Animation")

    const onTitleChange = (e) => {
        setVideoTitle(e.currentTarget.value)
    }

    const onDescriptionChange = (e) => {
        setDescription(e.currentTarget.value)
    }

    const onPrivateChange = (e) => {
        setPrivate(e.currentTarget.value)
    }

    const onCategoryChange = (e) => {
        setCategory(e.currentTarget.value)
    }

    const onDrop = (files) => {

        let formData = new FormData;
        const config = {
            header: {'content-type': 'multipart/form-data'}
        }
        formData.append("file",files[0])

        //Axios ajax와 비슷, 같이 보내주지 않으면 파일을 보낼 때 오류가 생김, 따라서 헤더에다가 content-type을 지정해줘야 한다
        axios.post('/api/video/uploadfiles', formData, config)
            .then(response => {
                if(response.data.success) {

                }else{
                    alert('Video upload failed.')
                }
            })
    }

    return (
        <div style={{ maxWidth:'700px', margin:'2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom:'2rem' }}>
                <Title level={2}>Upload Video</Title>
            </div>

            <Form onSubmit>
                <div style={{ display:'flex', justifyContent:'space-between' }}></div>
                {/* Drop Zone */}

                <Dropzone
                onDrop={onDrop}
                multiple={false}    //올릴 동영상 개수(1개씩)
                maxSize={10000000} //사이즈 조정
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
                onChange={onTitleChange}
                value={VideoTitle}
            />
            <br />
            <br />
            <label>Description</label>
            <TextArea
                onChange={onDescriptionChange}
                value={Description}          
            />
            <br />
            <br />

            <select onChange={onPrivateChange}>
                {PrivateOptions.map((item, index) => (
                     <option key={index}  value={item.value}>{item.label}</option>

                ))}
            </select>
            <br />
            <br />

            <select onChange={onCategoryChange}>
                {CategoryOption.map((item, index) => (
                    <option key={index} value={item.value}>{item.label}</option>
                ))}
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
