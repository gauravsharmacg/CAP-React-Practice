import { useState } from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
                    display: flex;
                    gap: 20px;
                    align-items: center;
                    justify-content: space-between;
                    h2 {
                        font-size: 1.2rem;
                        font-weight: 500;
                        span {
                            font-size: 2rem;
                        }
                    }
                    `

    const SubmitBtn = styled.button`
                background-color: var(--secondary-color);
                color: var(--text-color);
                padding: 10px 20px;
                border: none;
                outline: none;
                cursor: pointer;
                &:hover {
                    background-color: var(--primary-color);
                }
                `;

export default function Overview({toggle,handleToggle,balance}){
    return(
        <FlexContainer style={{padding: '20px 0'}}>
                <h2>Total Balance <span>₹ {balance} </span></h2>
                <SubmitBtn onClick={()=>handleToggle()}>{toggle ? 'Cancel' : 'Add Entry'}</SubmitBtn>
        </FlexContainer>
    )
}