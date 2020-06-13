import React, { useContext } from 'react';
import modalsContext from 'src/context/modalsContext';
import PostFormModal from './PostFormModal';
import './Modals.scss';

const Modals = () => {
  const { showModal } = useContext(modalsContext);

  return <PostFormModal show={showModal} />;
};

export default Modals;
