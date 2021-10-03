import React, { useState } from 'react';
import { Layout } from 'antd';

import { numberWithCommas } from '../utils/utils'
import { Button, Content } from './Style'

const CareerContent = ({data}) => {    

    const onClickButton = () => {
      console.log('Click Apply Button')
    }

    return (
      <div>
        <Layout style={{ paddingLeft: '24px'}}>
            <Content>
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