import React from 'react';
import { Card, List } from 'antd';
import { StopOutlined } from '@ant-design/icons';

const FollowList = ({header, data}) => {
    return (
        <>
            <List 
                header={header}
                bordered
                grid={{xs:2, md:3, gutter:2}}
                dataSource={data}
                renderItem={(item)=>(
                    <Card
                        actions={[<StopOutlined key='stop' />]}
                    >
                        <Card.Meta description={item.nickname} />        
                    </Card>
                )}
            >
                
            </List>
        </>
    );
}

export default FollowList;