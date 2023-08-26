import { Card, Avatar, Popover, Button, List } from 'antd';
import React, { useState, useCallback } from 'react';
import { RetweetOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, EllipsisOutlined  } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import FollowButton from './FollowButton';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';

const PostCard = ({post}) => {
    const [liked, setLiked] = useState(false);
    const onToggleLiked = useCallback(()=>{
        setLiked((prev) => !prev);
    },[]);
    const [openContent, setOpenContent] = useState(false);
    const onToggleMessage = useCallback(()=>{
        setOpenContent((prev) => !prev);
    },[]);
    const { isLoggedIn } = useSelector((state)=>state.user);
    return (
        <>
            <Card
                extra={<FollowButton />}
                actions={[
                    <RetweetOutlined key='retweet' />,
                    liked
                    ? <HeartTwoTone twoToneColor='red' key='liked' onClick={onToggleLiked} />
                    : <HeartOutlined key='unLiked' onClick={onToggleLiked} />,
                    <MessageOutlined key='content' onClick={onToggleMessage} />,
                    <Popover key='more' content={
                    <Button.Group>
                        <>
                            { isLoggedIn 
                            ? <>
                                <Button style={{background:'yellow'}}>수정</Button>
                                <Button style={{background:'red'}}>삭제</Button>
                            </>
                            : <Button style={{background:'coral'}}>신고</Button>}
                        </>
                    </Button.Group>}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
                cover={post.Images[0] && <PostImages images={post.Images} />}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent content={post.content} />}
                />
            </Card>
            {
                openContent && (<>
                    <CommentForm />
                    <List 
                        dataSource={post.Comments}
                        renderItem={(comment)=>(
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar>{comment.User.nickname[0]}</Avatar>}
                                    title={comment.User.nickname}
                                    description={comment.content}
                                />
                            </List.Item>
                        )}
                    >   
                    </List>
                    </>
                )
            }
        </>
    );
}

export default PostCard;