import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div >
            {/* Main Layoute */}
            <h2>main layouts</h2>
            {/* Header */}

            {/* dynamic route */}
            <Outlet />

             {/* Footer */}


        </div>
    );
};

export default Root;