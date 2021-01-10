import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import API_KEY from './apiKey';
import './StockInfo.css';


export default function StockInfo() {
    const { companyId } = useParams();
    const [company, setCompany] = useState([]);
    const interval = 5000;

    useEffect(() => {
        const stockInfoLink = `https://api-v2.intrinio.com/securities/${companyId}/prices/realtime?api_key=${API_KEY}`;
        const fetchData = async () => {
            try {
                const response = await fetch(stockInfoLink);
                if (!response.ok) {
                    throw new Error(`${response.statusCode} - ${response.statusText || 'OOPS'}`);
                }
                const companyData = await response.json();
                setCompany(companyData);
            } catch (err) {
                console.error(err);
            }
        };
        setInterval(fetchData, interval);
    }, [companyId]);

    if (!company.last_price) {
        return (
            <h2>Loading...</h2>
        )
    }

    return (
        <div id='stockInfo'>
            <span id='price'> Price: {company.last_price} </span>
            Last Updated: {`${new Date}`}
        </div>
    )
}
/*
TODO:
    clear interval
    make stock info data also appear for first 5 seconds
    color and arrow (green/red & up/down)
*/