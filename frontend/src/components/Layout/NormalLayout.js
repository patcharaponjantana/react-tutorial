import React from 'react';

import { Content } from '../Style/main'

const NormalLayout =({children}) =>{

    const contentLayout = {
        margin: "24px 50px 0px 50px",
    }      
    
    return(
        <Content style={contentLayout}>      
            {children}
        </Content>
    )
}

export default NormalLayout;
