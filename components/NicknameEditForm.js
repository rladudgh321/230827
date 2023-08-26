import React from 'react';
import { Input } from 'antd';

const NicknameEditForm = () => {
    return (
        <>
            <Input.Search addonBefore="닉네임" enterButton="수정" />
        </>
    );
}

export default NicknameEditForm;