import styled from 'styled-components'

export const LoanTitle = styled.p`
    font-size: 1.3rem;
    padding-bottom: 1.2rem;
`
export const LoanSubTitle = styled.a`
    background: #4400C2;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    padding: .5rem 2rem;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
background: #5900ff;
    }
`

export const LoanCenter = styled.div`
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LoanSection = styled.div`
    width: 98%;
`

export const LoanContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 2rem;
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
`