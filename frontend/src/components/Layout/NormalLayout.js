import React from 'react';

import appStyles from '../../assets/css/main.module.css';

const NormalLayout =({children}) =>{

    const contentLayout = {
        margin: "24px 50px 0px 50px",
        padding: "24px 50px 24px 50px",
        backgroundColor: "white"
    }      
    
    return(
        <div style={contentLayout} className={appStyles['content-background']}>      
            {children}
        </div>
    )
}

export default NormalLayout;
