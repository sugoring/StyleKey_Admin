import React from "react";
import { useSelector } from "react-redux";
import { selectSelectedStylePointId } from "./../reducers/stylePointsSlice";
import { selectSelectedBrandId } from "./../reducers/brandsSlice";
import { selectSelectedCoordinateLookId } from "./../reducers/coordinateLooksSlice";

const SelectedBar = () => {
  // useSelector hook을 사용하여 Redux store에서 선택한 스타일 포인트 ID를 가져옵니다.
  const selectedStylePointId = useSelector(selectSelectedStylePointId);
  const selectedBrandId = useSelector(selectSelectedBrandId);
  const selectedCoordinateLookId = useSelector(selectSelectedCoordinateLookId);

  return (
    <div>
      <h2>Selected Style Point ID: {selectedStylePointId}</h2>
      <h2>Selected Brand ID: {selectedBrandId}</h2>
      <h2>Selected Coordinate Look ID: {selectedCoordinateLookId}</h2>
    </div>
  );
};

export default SelectedBar;
