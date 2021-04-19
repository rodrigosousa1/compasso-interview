import React from 'react';
import Lottie from 'react-lottie';
import loading from '../../assets/lotties/loading.json';

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      height={300}
      width={300}
    />
  );
}

export { Loading };
