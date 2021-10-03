import styled from 'styled-components';
import { 
    Layout as LayoutAnt,
    Menu as MenuAnt,    
    Button as ButtonAnt,

} from 'antd';

const { Header: HeaderAnt, Footer: FooterAnt } = LayoutAnt;


const primaryColor = 'blue';
const secondaryColor = 'white';
const bgColor = '#f0f2f5';
const contentBgColor = 'white';


export const Header = styled(HeaderAnt)`
    background-color: ${contentBgColor};    
`;

export const Menu = styled(MenuAnt)`
    background-color: ${contentBgColor};
    color: green;
`;

export const Button = styled(ButtonAnt)`
    background-color: ${primaryColor};
`;

export const MainContent = styled.div`
    background-color: ${bgColor};
`;

export const Content = styled.div`
    background-color: ${contentBgColor};
    padding: 24px;
`;

export const Footer = styled.div`
    background-color: ${bgColor};
    text-align: center;
    padding: 30px;
`;