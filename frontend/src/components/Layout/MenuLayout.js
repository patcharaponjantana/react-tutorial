import React, { useState, useEffect } from 'react';

const MenuLayout = ({children}) =>{

    const contentLayout = {
        margin: "24px"
    }
    
    return(
        <div style={contentLayout}>
            {children}
        </div>
    )
}

export default MenuLayout;
