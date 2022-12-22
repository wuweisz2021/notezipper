import MainScreen from '../../components/MainScreen';
import React from 'react';
import './MyProfile.css';

function MyProfile() {

    const {name,pic,email} = JSON.parse(localStorage.getItem('userInfo') || '{}') 

    return (
        <MainScreen title="MYPROFILE">
            <div className="loginContainer">
                <div className='group'>
                    <div>Name</div>
                    <div>{name}</div>
                </div>
                <div className='group'>
                    <div>email</div>
                    <div>{email}</div>
                </div>
                <div className='group'>
                    <div>Profile Picture</div>
                    <img src={pic}/>
                </div>
            </div>
        </MainScreen>
    )
}

export default MyProfile;