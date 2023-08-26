import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import useInput from '../hooks/useInput';

const CommentForm = () => {
    const [comment, onChangeComment] = useInput('');
    const onSubmitForm = useCallback(()=>{
        console.log({comment});
    },[comment]);
    return (
        <>
            <Form onFinish={onSubmitForm}>
                <Input.TextArea maxLength={100} rows={3} value={comment} onChange={onChangeComment} />
                <Button htmlType='submit' type='primary' style={{float:'right', zIndex:1}}>삐약</Button>
            </Form>
        </>
    );
}

export default CommentForm;