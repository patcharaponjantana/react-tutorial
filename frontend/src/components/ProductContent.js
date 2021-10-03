import React, { useState } from 'react';
import { Layout } from 'antd';

import appStyles from '../assets/css/main.module.css';
import { Button } from './Style/main'

const { Content } = Layout;

const ProductContent = ({data}) => {

    const onClickButton = () => {
      console.log('Click Order Button')
    }

    return (
      <div>
        <Layout style={{ paddingLeft: '24px'}}>
            <Content
                className={appStyles['content-background']}
                style={{
                    padding: "24px",
                    minHeight: 280,
                }}
            >
                <div>Key: {data.id} </div> 
                <div>Name: {data.name} </div> 
                <div>Group: {data.group} </div> 
                <div>Description: {data.description} </div> 
                <Button type="primary" onClick={onClickButton}>Order</Button> 
            </Content>
        </Layout>
      </div>
    );
  }

  export default ProductContent;