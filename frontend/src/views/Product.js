import React, { useState, useEffect } from 'react';

import SideMenu from '../components/SideMenu';
import ProductContent from '../components/ProductContent';
import { getMenuProduct, getProductDetail } from '../api/index'

import { Row, Col } from 'antd';

const Product = () => {

    const [productData, setProductData] = useState({});
    const [menudata, setMenudata] = useState([]);
    
    useEffect(() => {
        getMenuProduct()
            .then(function (response) {
                setMenudata(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const onMenuClick = (item) => {
        console.log("Click Data", item);

        getProductDetail(item.key)
            .then(function (response) {
                setProductData(response.data);
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    console.log('render Product');

    return (<Row>
            <Col xl={4} xs={24} ><SideMenu menudata={menudata} onMenuClick={onMenuClick} /></Col>
            <Col xl={20} xs={24} ><ProductContent data={productData} /></Col>
        </Row>
        
    );
  }

  export default Product;