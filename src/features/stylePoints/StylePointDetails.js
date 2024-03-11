import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStylePointDetails } from '../../reducers/stylePointsSlice';

const StylePointDetails = ({ stylePointId }) => {
  const dispatch = useDispatch();
  const { details, loading, error } = useSelector((state) => state.stylePoints);
  const stylePointDetails = details[stylePointId] || { coordinateLooks: [], brands: [] };

  useEffect(() => {
    if (stylePointId) {
      dispatch(fetchStylePointDetails(stylePointId));
    }
  }, [dispatch, stylePointId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Style Point Details</h2>
      <h3>Coordinate Looks</h3>
      {stylePointDetails.coordinateLooks.length > 0 ? (
        <ul>
          {stylePointDetails.coordinateLooks.map((look) => (
            <li key={look.id}>{look.title} - {look.description}</li>
          ))}
        </ul>
      ) : (
        <p>No coordinate looks found for this style point.</p>
      )}
      
      <h3>Brands</h3>
      {stylePointDetails.brands.length > 0 ? (
        <ul>
          {stylePointDetails.brands.map((brand) => (
            <li key={brand.id}>{brand.title} - {brand.site_url}</li>
          ))}
        </ul>
      ) : (
        <p>No brands found for this style point.</p>
      )}
    </div>
  );
};

export default StylePointDetails;
