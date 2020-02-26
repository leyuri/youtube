import React , {useState} from 'react'
import { Typography, Button, Form, message, Input, Icon} from'antd';
import Dropzone from 'react-dropzone';
import axios from 'axios';


const { TextArea } = Input;
const { Title } = Typography;


const PrivateOptions = [
    {value: 0, label: "Private"},
    {value: 1, label: "Public"}
]

const CategoryOption = [
    {value: 0, label: "Film & Animation"},
    {value: 1, label: "Autos & Vehicles"},
    {value: 2, label: "Music"},
    {value: 3, label: "Pets & Animals"},
    {value: 4, label: "Sports" },
]

function VideoUploadPage() {


    
    const [VideoTitle, setVideoTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Private, setPrivate] = useState(0)
    const [Category, setCategory] = useState("Film & Animation")
    const [FilePath, setFilePath] = useState("")
    const [Duration, setDuration] = useState("")
    const [Thumbnail, setThumbnail] = useState("")

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

    const onSubmit = () => {
        
    }
//Axios ajax와 비슷, 같이 보내주지 않으면 파일을 보낼 때 오류가 생김, 따라서 헤더에다가 content-type을 지정해줘야 한다

    const onDrop = ( files ) => {

        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        console.log(files)
        formData.append("file", files[0])

        axios.post('/api/video/uploadfiles', formData, config)
        .then(response=> {
            if(response.data.success){

                let variable = {
                    filePath: response.data.filePath,
                    fileName: response.data.fileName
                }
                setFilePath(response.data.filePath)

                //gerenate thumbnail with this filepath ! 
                
                axios.post('/api/video/thumbnail', variable)
                .then(response => {
                    if(response.data.success) {
                        setDuration(response.data.fileDuration)
                        setThumbnail(response.data.thumbsFilePath)
                    } else {
                        alert('Failed to make the thumbnails');
                    }
                })


            } else {
                alert('failed to save the video in server')
            }
        })

    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Title level={2} > Upload Video</Title>
        </div>

        <Form onSubmit={onSubmit}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Dropzone 
                    onDrop={onDrop}
                    multiple={false}
                    maxSize={800000000}>
                    {({ getRootProps, getInputProps }) => (
                        <div style={{ width: '300px', height: '240px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            <Icon type="plus" style={{ fontSize: '3rem' }} />

                        </div>
                    )}
                </Dropzone>

                {Thumbnail !== "" &&
                    <div>
                        <img src={`http://localhost:5000/${Thumbnail}`} alt="haha" />
                    </div>
                }
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
