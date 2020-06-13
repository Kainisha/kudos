import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import PostForm from 'src/components/organisms/PostForm/PostForm';
import modalsContext from 'src/context/modalsContext';

library.add(faTimes);

const PostFormModal = ({ show }) => {
  const { setShowModal } = useContext(modalsContext);

  const handleCloseModal = () => setShowModal(false);

  return (
    <Modal show={show}>
      <Modal.Header>
        Utwórz kudos
        <button type="button" className="modal-close-button" onClick={handleCloseModal}>
          <FontAwesomeIcon icon={faTimes} size="xs" />
        </button>
      </Modal.Header>
      <Modal.Body>
        <PostForm />
      </Modal.Body>
    </Modal>
  );
};

PostFormModal.propTypes = {
  show: PropTypes.bool,
};

PostFormModal.defaultProps = {
  show: true,
};

export default PostFormModal;
