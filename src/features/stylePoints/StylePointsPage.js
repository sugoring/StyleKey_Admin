import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllStylePoints } from '../../reducers/stylePointsSlice';
import { Link } from 'react-router-dom';

const StylePointsPage = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.stylePoints);

    useEffect(() => {
        dispatch(fetchAllStylePoints());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Style Points</h1>
            <ul>
                {items.map((stylePoint) => (
                    <li key={stylePoint.id}>
                        <Link to={`/style-points/${stylePoint.id}`}>
                            <div>
                                <img src={stylePoint.image} alt={stylePoint.title} style={{ width: 100, height: 100 }} />
                                <h2>{stylePoint.title}</h2>
                                <p>{stylePoint.description}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StylePointsPage;
