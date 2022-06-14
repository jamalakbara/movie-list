import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Locations = () => {
    const {data: location, loading: loadingLocation} = useSelector(state => state.location);
    
  return (
    <div>
        <div style={
            {
                display: 'flex',
                flexDirection: 'column',
            }
        }>
            {location ? location.map((item, index) => (
                <Link className='' to={`/location/${encodeURIComponent(JSON.stringify(item.id))}`} key={item.id} style={{
                    color: '#fff',
                }}>
                    {item.name}
                </Link>
            )) : (
                <div>Loading...</div>
            )}
        </div>
    </div>
  )
}

export default Locations