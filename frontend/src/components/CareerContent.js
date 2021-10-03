import React, { useState } from 'react';
import { Layout } from 'antd';

import appStyles from '../assets/css/main.module.css';
import { numberWithCommas } from '../utils/utils'
import { Button } from './Style/main'

const { Content } = Layout;

const CareerContent = ({data}) => {    

    const onClickButton = () => {
      console.log('Click Apply Button')
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
              { // check data is seted (not undefined)
                data && (
                  <>
                    <div>Key: {data.id} </div> 
                    <div>Name: {data.name} </div> 
                    <div>Description: {data.description} </div> 
                    <div>Salary: {numberWithCommas(data['min-salary'])} - {numberWithCommas(data['max-salary'])} baht </div>
                    <Button type="primary" onClick={onClickButton}>Apply</Button>
                  </> 
                )
              }

              

            </Content>
        </Layout>
      </div>
    );
  }

  export default CareerContent;