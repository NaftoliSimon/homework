export default function(state, setState, link) {
    const fetchData = async () => {
    try {
        const response = await fetch(link);
        if (!response.ok) {
            throw new Error(`${response.statusCode} - ${response.statusText || 'OOPS'}`);
        }
        const companyData = await response.json();
        setState(state);
    } catch (err) {
        console.error(err);
    }
  };
}