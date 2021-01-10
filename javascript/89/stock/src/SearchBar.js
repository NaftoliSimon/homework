import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchBar.css';

export default function SearchBar() {
    const [companyId, setCompanyId] = useState()
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/company/${companyId}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter Stock Ticker Symbol:
            <input type="text" onChange={e => setCompanyId(e.target.value)}></input>
            </label>
            <input type='submit' value='Update'></input>
            <hr />
        </form>
    )
}
