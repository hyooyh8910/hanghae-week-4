import React from "react";
import styled, { css }  from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";


const Home = ()=> {
const word_ref = useRef(null);
const explain_ref = useRef(null);
const example_ref = useRef(null);

const history = useHistory();

let [word] = useState(['a','b','c','d','d']);
// let [plus, setPlus] = useState(0);
    return (
        <Styles>   
            <Cards>
                {word.map(function () {
                    return <CARD />
                    })
                }
            </Cards>
            <button onClick = {()=>{
                    history.push ("/page")
            }}>플러스</button>
        </Styles>
       
       

    );
};


function CARD() {
    return (
        <Card>
            <h4>단어</h4>
            <br/>
            <h4>설명</h4>
            <br/>
            <h4>예시</h4>
            <br/>
        </Card>
    )

}

const Detail = (props) => {
    const my_wrap = React.useRef(null);


    return(

        <div ref={my_wrap}>
            <h1>단어 추가하기</h1>
            <br/>
            <div>
                <p>단어</p>
                <input type = "text" ref={props.word_ref}/>
            </div>
            <div>
                <p>설명</p>
                <input type = "text" ref={props.explain_ref}/>
            </div>
            <div>
                <p>예시</p>
                <input type = "text" ref={props.example_ref}/>
            </div>
            <Add>추가하기</Add>
        </div>
    )
};


//div
const Styles = styled.div`
    border: 1px solid #eee;
    padding: 20px;
    width: 95%;
    margin: 30px auto;
`;



//cards
const Cards = styled.div`
    top : 10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 1px;
    justify-content: center;
`;


const Card = styled.div`
    margin: 20px;
    padding: 20px;
    width: 500px;
    min-height: 200px;
    display: grid;
    // grid-template-rows: 20px 50px 1fr 50px;
    border-radius: 10px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
    transition: all 0.2s;
    
`;

//button
const Plus = styled.button` 
    position: fixed; 
    height: 60px; 
    width: 60px; 
    border-radius: 20px;
    z-index: 9100;
    background: url(https://www.flaticon.com/svg/vstatic/svg/3917/3917361.svg?token=exp=1654123038~hmac=bef215bbf6bb834dbd4c1d7f22cdd0c9) no-repeat 100%; 
    background-size: 44px auto; 
    background-position: center;
    right: 10px; 
    border: 1px solid white; 
    bottom: 20px; 
`;
const Add = styled.button`
    padding: 10px 36px;
    backgroundColor: #dadafc;
    border: #dadafc;
    borderRadius: 30px;
    margin: 36px 0px;
    display: grid;
`;


export default Home;