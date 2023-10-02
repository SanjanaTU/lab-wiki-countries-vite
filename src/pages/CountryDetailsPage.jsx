import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

function CountryDetails() {
    const [country, setCountry] = useState([]);
    const [currentBorder, setCurrentBorder] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const { countryId } = useParams();
    const fetchACountry = async () => {
        const response = await fetch(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
        console.log(response)
        if (response.ok) {
            const parsed = await response.json()
            console.log(parsed)
            setCountry(parsed)
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchACountry()
    }, [])
    {
        useEffect(() => {
            fetchACountry()
        }, [currentBorder])
    }

    return isLoading ? (
        <h1>Loading...</h1>
    ) : (
        <>
            <h1 className="h1 display-6">Country details</h1>
            <div className='font-weight-bold'>Name: {country.name.common}</div>
            <div>Capital: {country.capital}</div>
            <div>Area: {country.area} km<sup>2</sup></div>
            Borders:
            {country.borders.map((border) => {
                return (
                    <div>

                        <Link to={`/${border}`} onClick={() => {
                            setCurrentPage(border)
                        }
                        }>
                            <p>{border}</p>
                        </Link>
                    </div >
                )
            })}
        </>
    )
}

export default CountryDetails;