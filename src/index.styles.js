import styled from 'styled-components';
import {darkGray} from "./assets/constants";

export const MainWrapper = styled.div`
    font-family:Helvetica;
    display: flex;
    justify-content: center; 
    align-items: center;
    height: 100%;
`;

export const Nav = styled.div`
    position: fixed;
    z-index:2;
    top: 0;
    left: 0;  
    height: 66px;
    padding: 0 15px;
    background: ${darkGray};
    width:100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const Logo = styled.div`
    background: url('../src/assets/anchor-logo.png') no-repeat center;  
    background-size: contain;
    width: 132px;
    height: 33px;
`;
