import React, { useState, useEffect } from 'react';

interface Props {
  imageUrl: string;
}

const FoodImage: React.FC<Props> = ({ imageUrl }) => {
  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Food" style={{ maxWidth: '100%', height: '85%' }} />}
    </div>
  );
};

export default FoodImage;
