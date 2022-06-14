import './Detail.scss'
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { addLocations } from '../../redux/actions/location/location';
import Image from "../../components/Image";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Detail = () => {
    const { data } = useParams();
    const [character, setCharacter] = useState(JSON.parse(data));
    const [inputLocation, setInputLocation] = useState('');
    const {data: characterRedux, loading} = useSelector(state => state.character);

    const dispatch = useDispatch();

    const handleChange = (e) => {
      e.preventDefault()
      setInputLocation(e.target.value);
    }

    const handleClick = (e) => {
      e.preventDefault()
      const cek = {
          "id": characterRedux.length + 1,
          "name": inputLocation,
          "type": "Planet",
          "residents": [character.url],
          "dimension": "Dimension C-137",
          "url": "https://rickandmortyapi.com/api/location/1",
          "created": "2017-11-10T12:42:04.162Z"
      }
      
      dispatch(addLocations(cek));
    }
    

  return (
    <div className="detail">
        <div className="detail__image">
            <Image src={character.image} />
        </div>
        <div className="detail__detail">
            <p className="detail__year">Status : {character.status}</p>
            <p className="detail__type">Gender : {character.gender}</p>
            <h1 className="detail__title">Name : {character.name}</h1>
        </div>
        <Link style={{color: 'white'}} to={'/'}>Back</Link>
        <input type ="text" value={inputLocation} onChange={handleChange} />
        <button onClick={handleClick}>add location</button>
    </div>
  )
}

export default Detail