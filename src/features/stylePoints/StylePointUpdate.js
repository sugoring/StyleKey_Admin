import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const StylePointUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [stylePoint, setStylePoint] = useState(null);

  useEffect(() => {
    const fetchStylePoint = async () => {
      try {
        const response = await axios.get(`/admin/style-points/${id}`);
        setStylePoint(response.data);
      } catch (error) {
        console.error("Error fetching style point:", error);
      }
    };
    fetchStylePoint();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`/admin/style-points/${id}`, stylePoint);
      if (
        response.status === 500 ||
        response.data.code === 500 ||
        response.code === 500
      ) {
        alert("서버 내부 오류가 발생하였습니다.");
      } else {
        navigate(`/stylepoint/${id}`);
      }
    } catch (error) {
      console.error("Error updating style point:", error);
      alert("Failed to update style point. Please try again later.");
    }
  };

  if (!stylePoint) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Update Style Point</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Title</td>
              <td>
                <input
                  type="text"
                  value={stylePoint.title}
                  onChange={(e) =>
                    setStylePoint({ ...stylePoint, title: e.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Description</td>
              <td>
                <textarea
                  value={stylePoint.description}
                  onChange={(e) =>
                    setStylePoint({
                      ...stylePoint,
                      description: e.target.value,
                    })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Image</td>
              <td>
                {stylePoint.image && (
                  <img src={stylePoint.image} alt="Style Point" />
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default StylePointUpdate;
