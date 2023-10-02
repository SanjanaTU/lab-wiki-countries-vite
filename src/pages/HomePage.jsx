import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function HomePage() {
    const [countries, setCountries] = useState([]);

    const fetchAllCountries = async () => {
        const response = await fetch(`https://ih-countries-api.herokuapp.com/countries`)
        console.log(response)
        if (response.ok) {
            const parsed = await response.json()
            console.log(parsed)
            setCountries(parsed)
        }
    }
    useEffect(() => {
        fetchAllCountries()
    }, [])
    return (
        <>
        <h1 className="h1 display-6">WikiCountries: Your Guide to the World</h1>
            <ul className='list-unstyled list-group container d-flex align-items-md-center '>
                {countries.map(country => (
                    <li className='list-group-item list-group-item-action w-50' key={country._id}>
                        <Link to={`/${country.alpha3Code}`}>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                            <h4 >{country.name.official}</h4>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default HomePage;