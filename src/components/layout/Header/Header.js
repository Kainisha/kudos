import React, { useContext } from 'react';
import modalsContext from 'src/context/modalsContext';
import './Header.scss';

const Header = () => {
  const { setShowModal } = useContext(modalsContext);
  const handleShowModal = () => setShowModal(true);

  return (
    <div className="header">
      <button type="button" className="header-add-post" onClick={handleShowModal}>
        Dodaj post
      </button>
    </div>
  );
};

export default Header;
