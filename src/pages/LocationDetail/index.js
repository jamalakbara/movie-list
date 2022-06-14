import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Image from "../../components/Image";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const LocationDetail = () => {
    const { data } = useParams();
    const [location, setLocation] = useState();
    const [character, setCharacter] = useState([])
    const {data: locationRedux, loading: loadingLocation} = useSelector(state => state.location);

    useEffect(() => {
        if (locationRedux) {
            locationRedux.forEach(item => {
                if (item.id == data) {
                    setLocation(item);
                }
            })
        }
    }, [])

    useEffect(() => {
        const fetchDataw = async () => {
            if (location) {
                location.residents.map(async (item, index) => {
                    const request = await axios.get(item);
                    setCharacter(prevState => [...prevState, request.data])
                })
            }
        }
        fetchDataw();
    }, [location])
    
  return (
    <div className="home__container">
        {character ? character.map((item, index) => (
            <Link className='home__anchor' to={`/movie/${encodeURIComponent(JSON.stringify(item))}`} key={index}>
                <Image src={item.image} alt={item.name} className={'home__image'} />
            </Link>
        )) : (
            <div>Loading...</div>
        )}
    </div>
  )
}

export default LocationDetail