import styled from 'styled-components';

const TransactionContainer = styled.div`
    height: 45px;
    display: flex;
    margin-top: 1rem;
    padding: 5px 15px;
    position: relative;
    border-radius: 2px;
    align-items: center;
    text-transform: capitalize;
    background-color: transparent;
    justify-content: space-between;
    border: 1px solid ${({item})=> item.transType === 'income' ? 'var(--green-color)' : 'var(--red-color)'};
    color: ${({item})=> item.transType === 'income' ? 'var(--green-color)' : 'var(--red-color)'};

    &:before{
        top: 0;
        content: '';
        width: 5px;
        right: -1px;
        height: 44px;
        position: absolute;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
        background-color: ${({item})=> item.transType === 'income' ? 'var(--green-color)' : 'var(--red-color)'};
    }

    &.paid {
        position: relative;
        &:after {
            top: 50%;
            left: 1%;
            width: 70%;
            content: '';
            height: 1px;
            position: absolute;
            background-color: var(--text-color);
        }
`;

const RemoveButton = styled.button`
            border: none;
            outline: none;
            cursor: pointer;
            font-size: 10px;
            padding: 4px 5px;
            border-radius: 3px;
            background-color: var(--red-color);
            color: var(--text-color);
            &:hover {
                background-color: var(--primary-color);
            }
            `;

            const PaidButton = styled.button`
            border: none;
            outline: none;
            cursor: pointer;
            font-size: 10px;
            padding: 4px 5px;
            border-radius: 3px;
            color: var(--text-color);
            background-color: var(--green-color);
            &:hover {
                background-color: var(--primary-color);
            }
            `;

const ButtonContainer = styled.div`
display: flex;
gap: 10px;
`


export default function Transactions({item,deleteRecord,paidRecord}){

    return(
            <TransactionContainer item={item} id={item.id} className={item.paid ? 'paid': ' '}>
                <p>{item.details}</p>
                <p> ₹ {item.amount}</p>
                <ButtonContainer>
                    <RemoveButton onClick={()=>deleteRecord(item.id)}>Remove</RemoveButton>
                    {item.transType === 'expense' && !item.paid ? <PaidButton item={item} onClick={()=>paidRecord(item.id)}>Paid</PaidButton> : null}
                </ButtonContainer>
            </TransactionContainer>
    )
}