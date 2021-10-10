import React from 'react';

import { Content } from '../Style'

const NormalLayout =({children}) =>{

    const contentLayout = {
        margin: "24px 50px 0px 50px",
    }      
    
    return(
        <Content style={contentLayout}>      
            Normal
            {children}
        </Content>
    )
}

export default NormalLayout;
