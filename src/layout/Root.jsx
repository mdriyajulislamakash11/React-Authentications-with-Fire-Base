import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => {
    return (
        <div className='mx-auto my-20'>

            {/* Header */}
            <Header />

            {/* dynamic route */}
            <Outlet />

             {/* Footer */}


        </div>
    );
};

export default Root;