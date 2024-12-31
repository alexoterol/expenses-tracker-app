import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/globalContext';
import styled from 'styled-components';
import Dashboard from '../Dashboard/Dashboard';


function Transactions() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <TransactionsStyled>
            <div className="stats-con">
                <Dashboard></Dashboard>
            </div>
        </TransactionsStyled>
    )
}

const TransactionsStyled = styled.div`


`;

export default Transactions