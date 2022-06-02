import React from "react";
import styled from "styled-components";
import { useRef } from "react"

const Detail = (props) => {
    const my_wrap = React.useRef(null);
    const word_ref = useRef(null);
    const explain_ref = useRef(null);
    const example_ref = useRef(null);

    function handleClick() {
     
        // console.log(word_ref.current.value);
    }

    console.log();

    return(

        <div ref={my_wrap}>
            <h1>단어 추가하기</h1>
            <br />
            <div>
                <p>단어</p>
                <input type="text" ref={word_ref} 
                onChange={()=>{
                    console.log(word_ref.current.value);
                }}/>
            </div>
            <div>
                <p>설명</p>
                <input type="text" ref={explain_ref} />
            </div>
            <div>
                <p>예시</p>
                <input type="text" ref={example_ref} />
            </div>
            <Add onClick={handleClick}>추가하기</Add>
        </div>
    )
};




// //div
// const Styles = styled.div`
//     border: 1px solid #eee;
//     padding: 20px;
//     width: 400px;
//     margin: 30px auto;
// `;

//button
const Add = styled.button`
    padding: 10px 36px;
    backgroundColor: #dadafc;
    border: #dadafc;
    borderRadius: 30px;
    margin: 36px 0px;
    display: grid;
`;


export default Detail;