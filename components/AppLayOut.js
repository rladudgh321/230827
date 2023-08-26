import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col } from 'antd';
import Link from 'next/link';
import UserProfile from './UserProfile';
import LogInForm from './LogInForm';
import getItem from '../hooks/getItem';
import { useSelector } from 'react-redux';

const AppLayOut = ({children}) => {
    const { isLoggedIn } = useSelector((state) => state.user);
    const items = [
        getItem(<Link href="/"><a>Home</a></Link>, 'main'),
        getItem(<Link href="/profile"><a>Profile</a></Link>, 'profile'),
        getItem(<Input.Search enterButton />, 'search'),
        getItem(<Link href="/signup"><a>SignUp</a></Link>, 'signup'),
    ];
    return (
        <>
            <Menu items={items} mode='horizontal' />
            <Row>
                <Col xs={24} md={6}>
                    {
                        isLoggedIn 
                        ? <UserProfile />
                        : <LogInForm />
                    }
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://www.naver.com" target="_blank" rel='noopener noreferrer'>네이버</a>
                </Col>
            </Row>
        </>
    );
}

AppLayOut.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayOut;