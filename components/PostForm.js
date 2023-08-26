import React, { useCallback, useRef } from 'react';
import { Form, Input, Button } from 'antd';
import useInput from '../hooks/useInput';

const PostForm = () => {
    const [text, onChangeText] = useInput('');
    const onRef = useRef();
    const onImageUpload = useCallback(()=>{
        onRef.current.click();
    },[onRef.current]);
    const onSubmitForm = useCallback(()=>{
        console.log({text, onImageUpload});
    },[text, onImageUpload]);
    return (
        <>
            <Form onFinish={onSubmitForm}>
                <Input.TextArea 
                    maxLength={140} rows={4} placeholder='게시글 입력칸'
                    value={text} onChange={onChangeText}    
                />
                <input type='file' style={{display:'none'}} ref={onRef} />
                <Button onClick={onImageUpload}>이미지 업로드</Button>
                <Button htmlType='submit' type='primary' style={{float:'right'}}>짹짹</Button>
            </Form>
        </>
    );
}

export default PostForm;