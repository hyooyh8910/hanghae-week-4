import React from "react";
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderH1>MY DICTIONARY</HeaderH1>
        </HeaderContainer>
    )
};

//header
const HeaderContainer = styled.div`
    background-color: #eee;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    padding : 20px;
`;

const HeaderH1 = styled.h1`
    font-size : 35px;
    color : blue;
    display : flex;
    width: center;
`;


export default Header;