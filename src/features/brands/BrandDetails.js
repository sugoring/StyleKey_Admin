import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedBrandId } from "../../reducers/brandsSlice";
import { selectSelectedStylePointId } from "../../reducers/stylePointsSlice";

function BrandDetails() {
  const [brands, setBrands] = useState([]);
  const selectedStylePointId = useSelector(selectSelectedStylePointId); // Access the selected style point ID from Redux state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get(`/admin/brands/style-points/${selectedStylePointId}`);
        setBrands(response.data.data); // Adjust according to actual API response structure
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    if (selectedStylePointId) {
      fetchBrands();
    }
  }, [selectedStylePointId]);

  const handleCreateBrand = () => {
    navigate("/brand/create");
  };

  const handleUpdateBrand = (brandId) => {
    dispatch(setSelectedBrandId(brandId));
    navigate(`/brand/${brandId}/update`);
  };

  const handleDeleteBrand = async (brandId) => {
    try {
      // Perform the DELETE request to delete the brand
      await axios.delete(`/admin/brands/${brandId}`);
      // Filter out the deleted brand from the brands state
      const updatedBrands = brands.filter(brand => brand.id !== brandId);
      setBrands(updatedBrands);
      // Optionally, show a success message or handle further UI updates
    } catch (error) {
      console.error("Error deleting brand:", error);
      // Optionally, handle error (e.g., showing an error message)
    }
  };

  // Handling the case where selectedStylePointId is not set (e.g., direct navigation to the component without going through a selection process)
  if (!selectedStylePointId) {
    return <div>Please select a style point first.</div>;
  }

  return (
    <div>
  
      <h2>Brand</h2>
      <button onClick={handleCreateBrand}>Create Brand</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Title (Eng)</th>
            <th>Website</th>
            <th>Brand Image</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <tr key={brand.id}>
              <td>{brand.id}</td>
              <td>{brand.title}</td>
              <td>{brand.title_eng}</td>
              <td><a href={brand.site_url} target="_blank" rel="noopener noreferrer">Website</a></td>
              <td>
                <img src={brand.brand_image_url} alt={brand.title} style={{ width: '50px', height: 'auto' }} />
              </td>
              <td>
                <button onClick={() => handleUpdateBrand(brand.id)}>Update</button>
              </td>
              <td>
                <button onClick={() => handleDeleteBrand(brand.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BrandDetails;
