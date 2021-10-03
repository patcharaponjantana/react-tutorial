import React from 'react';
import { Layout, Menu,  } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideMenu = ({onMenuClick, menudata}) => {   
    
    const renderMenu = () => {
        return (
            <>
                { 
                    menudata.map((parent) => {
                        return (
                            <SubMenu key={`parent_${parent.id}`} title={parent.name}>
                                {
                                    parent.product_list.map((child) => {
                                        return (
                                            <Menu.Item key={child.id} onClick={onMenuClick}>{child.name}</Menu.Item>
                                        )
                                    })
                                }
                            </SubMenu>
                        )
                    })
                }
            </>
        )
    }

    console.log('render SideMenu');

    return (
        <Sider width={"100%"} className="site-layout-background">
            <Menu
                mode="inline"
                style={{ height: '100%', borderRight: 0 }}
            >
                {renderMenu()}
            </Menu>
        </Sider>
    );
  }

  export default SideMenu;
