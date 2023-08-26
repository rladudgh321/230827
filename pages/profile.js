import React from 'react';
import AppLayOut from '../components/AppLayOut';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import { useSelector } from 'react-redux';

const Profile = () => {
    const { isLoggedIn } = useSelector((state) => state.user);
    const followingList = [{nickname:'김소방'},{nickname:'이소방'},{nickname:'박소방'}];
    const followerList = [{nickname:'김소방'},{nickname:'이소방'},{nickname:'박소방'}];
    return (
        <>
            <AppLayOut>
                { isLoggedIn && <NicknameEditForm />}
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로워 목록" data={followerList} />
            </AppLayOut>
        </>
    );
}

export default Profile;