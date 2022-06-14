import './Home.scss'
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestCharacters, processingCharacters, failedCharacters } from "../../redux/actions/character/character";
import { requestLocations } from '../../redux/actions/location/location';
import axios from "axios";
import { Link } from "react-router-dom";
import Image from '../../components/Image';

const Home = () => {
    const {data, loading} = useSelector(state => state.character);
    const {data: location, loading: loadingLocation} = useSelector(state => state.location);
    const [currentPageData, setCurrentPageData] = useState(1);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(processingCharacters());

        const fetchData = async () => {
            // const request = await axios.get(`http://www.omdbapi.com?apikey=faf7e5bb&s=Batman&page=${currentPageData}`);
            const request = await axios.get(`https://rickandmortyapi.com/api/character`);
            const requestLocation = await axios.get(`https://rickandmortyapi.com/api/location`);
            dispatch(requestCharacters(request.data.results));
            dispatch(requestLocations(requestLocation.data.results));
        }
        if (data.length === 0 && location.length === 0) {
            fetchData();
        }
    }, [currentPageData, dispatch]);

    return (
        <div className="home">
            <div>
                <Link className='home__anchor' to={`/locations/`} style={{
                    color: '#fff',
                }}>
                    Locations
                </Link>
            </div>
            <div className="home__container">
                {data ? data.map((item, index) => (
                    <Link className='home__anchor' to={`/character/${encodeURIComponent(JSON.stringify(item))}`} key={index}>
                        <Image src={item.image} alt={item.name} className={'home__image'} />
                    </Link>
                )) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    )
}

export default Home