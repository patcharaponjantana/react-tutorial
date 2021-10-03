import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Row, Col, Layout } from 'antd';
import 'antd/dist/antd.css'; 

import NormalLayout from './components/Layout/NormalLayout'
import MenuLayout from './components/Layout/MenuLayout'
import Home from './views/Home'
import About from './views/About'
import Product from './views/Product'
import Career from './views/Career'
import ProductContent from './components/ProductContent'
import { Header, Menu, Footer, MainContent } from './components/Style/main'

// const { Footer } = Layout;

function App() {

  return (  
    <Router>
      {/* <Row>
        <Col span={24}> */}
          <Header>
            <Menu mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1"><Link exact to="">Home</Link></Menu.Item>
              <Menu.Item key="2"><Link exact to="product">Products</Link></Menu.Item>
              <Menu.Item key="3"><Link exact to="career">Career</Link></Menu.Item>
              <Menu.Item key="4"><Link exact to="about">About Us</Link></Menu.Item>
            </Menu>
          </Header>
        {/* </Col>
      </Row> */}
      <MainContent>
      <Row>
        <Col span={24}>
          {/* <MainContent> */}
              <Route exact path={["/about", "/"]}>
                <NormalLayout>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                </NormalLayout>
              </Route>

              <Route path={["/product", "/career"]}>
                <MenuLayout>
                  <Route path="/product" component={Product} />
                  <Route path="/career" component={Career} />
                    {/* <Route path="/product" component={{menu: 1, contentComponent: ProductContent}} />
                    <Route path="/career" component={{menu: 1, contentComponent: Career}} /> */}
                </MenuLayout>
              </Route>
          {/* </MainContent> */}

          {/* 
          ////// we cab use Switch if we don't want to create multiple layout
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/product" component={() => <Product props="props1"/>} />
            <Route path="/career" component={() => <Career props="props2"/>} />                    
            <Route path="/about" component={About} />
          </Switch> 
          */}

        </Col>
      </Row>
      </MainContent>

      {/* <Row>
        <Col span={24} > */}
          <Footer>
            <div> Company Name</div>
            <div> Your Street Address, City, State, Zip, Country</div>
          </Footer>
        {/* </Col>
      </Row> */}
     
    </Router>
  );
}

export default App;
