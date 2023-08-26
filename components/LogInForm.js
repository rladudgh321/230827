import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';

const LogInForm = () => {
    const dispatch = useDispatch();
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    const onSubmitForm = useCallback(()=>{
        console.log({email,password});
        dispatch({
            type:'logIn',
            data:{email,password}
        })
    },[email,password])
    return (
        <>
            <Form onFinish={onSubmitForm}>
                <div>
                    <label>이메일</label>
                    <Input type='email' value={email} onChange={onChangeEmail} />
                </div>
                <div>
                    <label>비밀번호</label>
                    <Input type='password' value={password} onChange={onChangePassword} />
                </div>
                <div>
                    <Button type='primary' htmlType='submit'>로그인</Button>
                    <Button style={{float:'right'}}><Link href="/signup"><a>회원가입</a></Link></Button>
                </div>
            </Form>
        </>
    );
}

export default LogInForm;