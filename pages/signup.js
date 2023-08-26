import React, {useState, useCallback} from 'react';
import AppLayOut from '../components/AppLayOut';
import { Form, Input, Button, Checkbox } from 'antd';
import useInput from '../hooks/useInput';

const signUp = () => {
    const [id, onChangeId] = useInput('');
    const [pwd, onChangePwd] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [pwdCheck, setPwdCheck] = useState('');
    const [pwdError, setPwdError] = useState(false);
    const onChangePwdCheck = useCallback((e)=>{
        setPwdCheck(e.target.value);
        setPwdError(false);
    },[]);
    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e)=>{
        setTerm(e.target.checked);
        setTermError(false);
    },[]);
    const onSubmitForm = useCallback(()=>{
        if(pwd !== pwdCheck) {
            setPwdError(true);
        } else if(!term) {
            setTermError(true);
        }
        console.log({id,pwd,pwdCheck,nickname});
    },[id,pwd,pwdCheck,nickname,term]);
    return (
        <>
            <AppLayOut>
                <Form onFinish={onSubmitForm}>
                    <div>
                        <label htmlFor='id'>이메일</label>
                        <Input type='email' id='id' value={id} onChange={onChangeId} />
                    </div>
                    <div>
                        <label htmlFor='nickname'>닉네임</label>
                        <Input id='nickname' value={nickname} onChange={onChangeNickname} />
                    </div>
                    <div>
                        <label htmlFor='pwd'>비밀번호</label>
                        <Input type='password' id='pwd' value={pwd} onChange={onChangePwd} />
                    </div>
                    <div>
                        <label htmlFor='pwdCheck'>비밀번호 확인</label>
                        <Input type='password' id='pwdCheck' value={pwdCheck} onChange={onChangePwdCheck} />
                        {pwdError && <div style={{color:'red'}}>비밀번호가 일치하지 않습니다</div>}
                    </div>
                    <div>
                        <Checkbox value={term} onChange={onChangeTerm}>약관에 동의합니다</Checkbox>
                        { termError && <div style={{color:'red'}}>약관에 동의해야 회원가입됩니다</div> }
                    </div>
                    <div>
                        <Button htmlType='submit'>가입하기</Button>
                    </div>
                </Form>
            </AppLayOut>
        </>
    );
}

export default signUp;