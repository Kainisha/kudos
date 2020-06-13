import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';
import Kudos from 'src/components/molecules/Kudos/Kudos';
import Select from 'src/components/organisms/Select/Select';
import './PostForm.scss';

const PostForm = ({ show, kudoses, users, groups }) => {
  const [selectedKudos, setSelectedKudos] = useState(1);
  const [selectedUser, setSelectedUser] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [selectedGroup, setSelectedGroup] = useState(1);

  const handleSelectKudos = (value) => setSelectedKudos(value);
  const getUserFullName = ({ first_name: firstName, last_name: lastName }) =>
    `${firstName} ${lastName}`;
  const groupsOptions = groups.map(({ id, name }) => {
    return { value: id, label: name };
  });
  const handleSelectGroup = (groupId) => setSelectedGroup(groupId);

  return (
    <Modal show={show}>
      <Modal.Body>
        <div className="post__form">
          <div className="post__form__note">
            <label htmlFor="post__form__note">Treść posta nad kudosem</label>
            <textarea id="post__form__note" />
          </div>
          <div className="post__form__user">
            <label>Wybier osobę, której przyznajesz kudos</label>
            <Autocomplete
              getItemValue={(item) => getUserFullName(item)}
              items={users}
              renderItem={(item, isHighlighted) => (
                <div
                  style={{ background: isHighlighted ? 'lightgray' : 'white' }}
                  key={`automplete-${item.id}`}
                >
                  {getUserFullName(item)}
                </div>
              )}
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              onSelect={(val) => setSelectedUser(val)}
            />
          </div>
          <div className="post__form__kudoses">
            {kudoses.map(({ type }) => (
              <Kudos
                type={type}
                form
                isSelected={type === selectedKudos}
                onClick={handleSelectKudos}
                key={`form-kudos-${type}`}
              />
            ))}
          </div>
          <div className="post__form__group">
            <div>
              <Select options={groupsOptions} onSelect={handleSelectGroup} />
            </div>
            <div className="post__form__button">
              <button type="button" className="post__form__publish">
                Opublikuj
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

PostForm.propTypes = {
  show: PropTypes.bool,
  kudoses: PropTypes.array,
  users: PropTypes.array,
  groups: PropTypes.array,
};

PostForm.defaultProps = {
  show: false,
  kudoses: [],
  users: [],
  groups: [],
};

const mapStateToProps = (state) => {
  const { kudoses, users, groups } = state;
  return { kudoses, users, groups };
};

export default connect(mapStateToProps)(PostForm);
