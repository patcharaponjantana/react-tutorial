import React from 'react';
import { Layout } from 'antd';

import { Button, Content } from './Style/main'

const ProductContent = ({data}) => {

    const onClickButton = () => {
      console.log('Click Order Button')
    }

    return (
      <div>
        <Layout style={{ paddingLeft: '24px'}}>
            <Content>
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