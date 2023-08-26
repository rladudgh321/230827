import React, { useState, useCallback } from 'react';
import { Button } from 'antd';
const FollowButton = () => {
    const [follow, setFollow] = useState(false);
    const onFollow = useCallback(()=>{
        setFollow((prev) => !prev);
    },[]); 
    return (
        <>
            {
                follow
                ? <Button style={{background:'pink', color:'red'}} onClick={onFollow}>언팔로우 하기</Button>
                : <Button onClick={onFollow}>팔로우 하기</Button>
            }
        </>
    );
}

export default FollowButton;