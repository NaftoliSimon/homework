import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import API_KEY from './apiKey';

export default function CompanyInfo() {
    const [company, setCompany] = useState([]);
    const { companyId } = useParams()
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://api-v2.intrinio.com/companies/${companyId}?api_key=${API_KEY}`);
                if (!response.ok) {
                    throw new Error(`${response.statusCode} - ${response.statusText || 'OOPS'}`);
                }
                const companyData = await response.json();
                setCompany(companyData);
            } catch (err) {
                console.error(err);
            }
        })();
    }, [companyId]);

    if (!company.name) {
        return (<>
            <h3 style={{ fontWeight: 'bold' }}>No Company Found</h3>
            <div>Make Sure That Ticker Is Spelled Correctly,</div>
            <div> Or Try A Different Stock Ticker</div>
            <Link to='/'>Return To List of Companies</Link>
        </>)
    }
    const { name, ticker, long_description } = company;
    return (
        <div>
            <h2>{ticker} - {name}</h2>
            <div>{long_description}</div>
        </div>
    )
}
