import React, { useEffect, useState } from 'react';
import API_KEY from './apiKey';
import Company from './Company';

export default function CompaniesList() {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://api-v2.intrinio.com/companies?has_stock_prices=true&api_key=${API_KEY}`);
        if (!response.ok) {
          throw new Error(`${response.statusCode} - ${response.statusText || 'OOPS'}`);
        }
        const companiesData = await response.json();
        setCompanies(companiesData);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  if (!companies.companies) {
    return null
  }
  return (
    <div>
      <h4>Companies</h4>
      <ul>
        {companies.companies.map((company) => <Company key={company.id} company={company} />)}
      </ul>
    </div>
  )
}
