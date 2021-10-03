import React, { useState, useEffect } from 'react';

import appStyles from '../../assets/css/main.module.css';

const MenuLayout = ({children}) =>{

    const contentLayout = {
        margin: "24px",
        backgroundColor: "white"
    }

    return(
        <div style={contentLayout} className={appStyles['content-background']}>
            {children}
        </div>
    )
}

export default MenuLayout;
