import React from 'react';
import styles from './Header.module.css';

const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

export default function Header(){
    return(
        <header className={styles.header}>
            <h1>Welcome Gaurav!!</h1>
            <p>Expense for the Month - <span className="style.header__month">{MONTHS[new Date().getMonth()]}</span></p>
        </header>
    )
}