import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch } from 'react-redux';

const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogOut = useCallback(()=>{
        dispatch({
            type:'logOut'
        });
    },[]);
    return (
        <>
            <Card
                actions={[
                    <div>짹짹<br />0</div>,
                    <div>팔로잉<br />0</div>,
                    <div>팔로워<br />0</div>,
                ]}
            >
                <Card.Meta 
                    avatar={<Avatar>K</Avatar>}
                    title="KYH"
                    description="my name is KYH"
                />
                <Button onClick={onLogOut}>로그아웃</Button>
            </Card>
        </>
    );
}

export default UserProfile;