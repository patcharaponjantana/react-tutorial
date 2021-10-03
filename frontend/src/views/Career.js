import React, { useState, useEffect } from 'react';

import SideMenu from '../components/SideMenu';
import CareerContent from '../components/CareerContent';
import { getMenuCareer, getCareerDetail } from '../api/index'

import { Row, Col } from 'antd';

const Career = () => {

    const [careerData, setCareerData] = useState();
    const [menudata, setMenudata] = useState([]);
    
    useEffect(() => {
        getMenuCareer()
            .then(function (response) {
                setMenudata(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const onMenuClick = (item) => {
        console.log("Click Data", item);
        getCareerDetail(item.key)
            .then(function (response) {
              setCareerData(response.data);
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    console.log('render Product');

    return (
        <Row>
            <Col xl={4} xs={24} ><SideMenu menudata={menudata} onMenuClick={onMenuClick} /></Col>
            <Col xl={20} xs={24} ><CareerContent data={careerData} /></Col>
        </Row>
    );
  }

  export default Career;