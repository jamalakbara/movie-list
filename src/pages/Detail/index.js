import './Detail.scss'
import { useState } from "react";
import { useParams } from "react-router"
import Image from "../../components/Image";
import { Link } from 'react-router-dom';

const Detail = () => {
    const { data } = useParams();
    const [movie, setMovie] = useState(JSON.parse(data));

  return (
    <div className="detail">
        <div className="detail__image">
            <Image src={movie.Poster} />
        </div>
        <div className="detail__detail">
            <p className="detail__year">{movie.Year}</p>
            <p className="detail__type">{movie.Type}</p>
            <h1 className="detail__title">{movie.Title}</h1>
        </div>
        <Link style={{color: 'white'}} to={'/'}>Back</Link>
    </div>
  )
}

export default Detail