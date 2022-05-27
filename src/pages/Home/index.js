import './Home.scss'
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestMovies, processingMovies, failedMovies } from "../../redux/actions/movie/movie";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from '../../components/Image';

const Home = () => {
    const {data, loading} = useSelector(state => state.movie);
    const [currentPageData, setCurrentPageData] = useState(1);

    const dispatch = useDispatch();

    // const observer = useRef();
    // const lastElement = useCallback(
    //   (node) => {
    //     if (observer.current) observer.current.disconnect()
    //     observer.current = new IntersectionObserver(entries => {
    //         if (entries[0].isIntersecting) {
    //             console.log('dude');
    //             if (currentPageData <= 2){
    //                 setCurrentPageData(currentPageData + 1);
    //                 dispatch(processingMovies());
    //                 axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${currentPageData}`)
    //                 .then(res => {
    //                     dispatch(requestMovies(res.data.Search));
    //                     console.log(data);
    //                 })
    //                 .catch(err => {
    //                     dispatch(failedMovies(err));
    //                 })
    //             }
    //         }
    //     })
    //     if (node) observer.current.observe(node)
    //   },[currentPageData]
    // )
    

    useEffect(() => {
        dispatch(processingMovies());

        const fetchData = async () => {
            const request = await axios.get(`http://www.omdbapi.com?apikey=faf7e5bb&s=Batman&page=${currentPageData}`);
            dispatch(requestMovies(request.data.Search));
        }
        fetchData();
    }, [currentPageData, dispatch]);

    return (
        <div className="home">
            <div className="home__container">
                {data ? data.map((item, index) => (
                    <Link className='home__anchor' to={`/movie/${encodeURIComponent(JSON.stringify(item))}`} key={index}>
                        <Image src={item.Poster} alt={item.Title} className={'home__image'} />
                    </Link>
                )) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    )
}

export default Home