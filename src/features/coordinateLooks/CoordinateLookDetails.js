import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectSelectedStylePointId } from "../../reducers/stylePointsSlice";

function StylePointDetails() {
  const [coordinateLooks, setCoordinateLooks] = useState([]);
  const selectedStylePointId = useSelector(selectSelectedStylePointId);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCoordinateLooks = async () => {
      try {
        const response = await axios.get(`/admin/coordinate-looks/style-points/${selectedStylePointId}`);
        setCoordinateLooks(response.data.data);
      } catch (error) {
        console.error("Error fetching coordinate looks:", error);
      }
    };

    if (selectedStylePointId) {
      fetchCoordinateLooks();
    }
  }, [selectedStylePointId]);

  const handleCreateCoordinateLook = () => {
    navigate("/coordinatelook/create");
  };

  const handleUpdateCoordinateLook = (id) => {
    navigate(`/coordinatelook/${id}/update`);
  };

  const handleDeleteCoordinateLook = async (id) => {
    try {
      await axios.delete(`/admin/coordinate-looks/${id}`);
      const updatedCoordinateLooks = coordinateLooks.filter(coordinateLook => coordinateLook.id !== id);
      setCoordinateLooks(updatedCoordinateLooks);
    } catch (error) {
      console.error("Error deleting coordinate look:", error);
    }
  };

  if (!selectedStylePointId) {
    return <div>Please select a style point first.</div>;
  }

  return (
    <div>
      <h2>Coordinate Looks</h2>
      <button onClick={handleCreateCoordinateLook}>Create Coordinate Look</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Coordinate Look Image</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {coordinateLooks.map((coordinateLook) => (
            <tr key={coordinateLook.id}>
              <td>{coordinateLook.id}</td>
              <td>{coordinateLook.title}</td>
              <td>
                <img src={coordinateLook.coordinate_look_image_url} alt={coordinateLook.title} style={{ width: '50px', height: 'auto' }} />
              </td>
              <td>
                <button onClick={() => handleUpdateCoordinateLook(coordinateLook.id)}>Update</button>
              </td>
              <td>
                <button onClick={() => handleDeleteCoordinateLook(coordinateLook.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StylePointDetails;
