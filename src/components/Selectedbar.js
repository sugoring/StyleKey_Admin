import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedStylePointId } from './../reducers/stylePointsSlice';

const SelectedBar = () => {
  // useSelector hook을 사용하여 Redux store에서 선택한 스타일 포인트 ID를 가져옵니다.
  const selectedId = useSelector(selectSelectedStylePointId);

  return (
    <div>
      <h2>Selected Style Point</h2>
      <p>ID: {selectedId}</p>
    </div>
  );
};

export default SelectedBar;
