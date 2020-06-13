import React, { useState } from 'react';
import PostForm from 'src/components/organisms/PostForm/PostForm';

const ModalHandler = () => {
  const [show] = useState(true);

  return <PostForm show={show} />;
};

export default ModalHandler;
