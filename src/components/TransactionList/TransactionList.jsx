import styled from "styled-components";

import Transactions from "../Form/Transactions";

const ContainerStyle2 = styled.div`
                    padding: 20px 0;
                    margin-top: 2rem;
                    `;
            
const GridContainer = styled.div`
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 16px;`

const Title = styled.h2`
                    color: var(--text-color);
                    border-bottom: 1px solid var(--border-color);
                    font-weight: 500;
                    font-size: 2rem;
                    margin-bottom: 20px;
                    line-height: 2;
                    `;

export default function TransactionList({transactionData,deleteRecord,paidRecord}){
    return(
        <ContainerStyle2>
            <Title>Transactions List</Title>
            <GridContainer>
                {
                    transactionData.length > 0 ? (
                        transactionData.map((item) => (
                            <Transactions
                                deleteRecord={deleteRecord}
                                paidRecord={paidRecord}
                                key={item.id}
                                item={item}
                            />
                        ))
                    ) : (
                        <p style={{color: 'var(--text-color)'}}>No transactions found</p>
                    )
                }
            </GridContainer>
        </ContainerStyle2>
    )
}