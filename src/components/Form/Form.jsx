import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
                    display: flex;
                    gap: 20px;
                    align-items: center;
                    justify-content: space-between;`

const Container = styled.div`
                    text-align: center;
                    border: 1px solid var(--border-color);
                    padding: 20px;
                    margin-bottom: 25px;
                    `;

const Input = styled.input`
                    outline: none;
                    margin: 5px 0;
                    border: 1px solid var(--secondary-color);
                    width: 70%;
                    padding: 15px 20px;
                    outline: none;
                    max-width: 30%;
                    background: transparent;
                    font-size: 14px;
                    color: var(--secondary-color);

                    &::placeholder {
                        color: var(--text-color);
                    }
                    `;

const RadioContainer = styled.div`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    `;

const Label = styled.label`
            margin-left: 10px;
            cursor: pointer;
            `;

const RadioBtn = styled(RadioContainer)`
            margin: 10px 20px 10px 0;
            `;

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

export default function Form({toggle,addTransactionData,setToggle}){

    const [amount,setAmount] =useState('');
    const [details,setDetails] = useState('');
    const [transType,setTransType] = useState('expense');

    function handleSubmit(e){
        e.preventDefault();
        if(!amount || !details){
            alert('Please fill all the fields');
            return;
        }

        const transactionData = {
            amount: Math.round(parseFloat(amount)),
            details,
            transType,
            paid: false,
            id: Math.floor(Math.random() * 1000)
        };

        addTransactionData(transactionData);
        setAmount('');
        setDetails('');
        setTransType('expense');

        setToggle(false);
    }

    return(
        <form onSubmit={handleSubmit}>
                <Container>
                    <FlexContainer>
                        <Input
                            type="text"
                            placeholder="Enter Expense Name"
                            value={details}
                            onChange={(e)=> setDetails(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Enter Amount"
                            value={amount}
                            onChange={(e)=> setAmount(e.target.value)}
                        />
                    <RadioContainer>
                        <RadioBtn>
                            <input
                                type="radio"
                                id="expense"
                                name="transType"
                                value="expense"
                                checked={transType === 'expense'}
                                onChange={(e) => setTransType(e.target.value)}
                            />
                            <Label htmlFor="expense">Expense</Label>
                        </RadioBtn>

                        <RadioBtn>
                            <input
                                type="radio"
                                id="income"
                                name="transType"
                                value="income"
                                checked={transType === 'income'}
                                onChange={(e) => setTransType(e.target.value)}
                            />
                            <Label htmlFor="income">Income</Label>
                        </RadioBtn>
                    </RadioContainer>

                    <SubmitBtn>Add Transactions</SubmitBtn>
                    </FlexContainer>
                </Container>
            </form>
    )
}