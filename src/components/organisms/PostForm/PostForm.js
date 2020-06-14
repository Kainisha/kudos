import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Kudos from 'src/components/molecules/Kudos/Kudos';
import GroupsSelect from 'src/components/organisms/Select/Select';
import './PostForm.scss';
import { addPost as addPostAction } from 'src/actions';
import modalsContext from 'src/context/modalsContext';
import moment from 'moment';
import Select from 'react-select';

const PostForm = ({ kudoses, users, groups, addPost }) => {
  const { setShowModal } = useContext(modalsContext);
  const [selectedKudos, setSelectedKudos] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [note, setNote] = useState('');

  const handleSelectKudos = (value) => setSelectedKudos(value);
  const getUserFullName = ({ first_name: firstName, last_name: lastName }) =>
    `${firstName} ${lastName}`;
  const groupsOptions = groups.map(({ id, name }) => {
    return { value: id, label: name };
  });
  const usersOptions = users.map((user) => {
    const { id } = user;
    return {
      value: id,
      label: getUserFullName(user),
    };
  });
  const handleSelectGroup = (groupId) => setSelectedGroup(groupId);

  const handleAddPost = () => {
    const user = users.find((item) => getUserFullName(item) === selectedUser);
    const createdOn = moment().format('YYYY-MM-DD hh:mm:ss');
    addPost({ note, selectedKudos, selectedGroup, selectedUserId: user.id, createdOn });
    setShowModal(false);
  };

  const handleSelectUser = ({ value }) => setSelectedUser(value);

  return (
    <div className="post-form">
      <div className="post-form-note">
        <label htmlFor="post-form-note">Treść posta nad kudosem</label>
        <textarea id="post-form-note" />
      </div>
      <div className="post-form-user">
        <label>Wybier osobę, której przyznajesz kudos</label>
        <Select options={usersOptions} onChange={handleSelectUser} placeholder="Wybierz osobę" />
      </div>
      <div className="post-form-kudoses">
        <label>Wybierz kudos</label>
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
      <div className="post-form-group">
        <div>
          <label>Wybierz grupę</label>
          <GroupsSelect options={groupsOptions} onSelect={handleSelectGroup} />
        </div>
        <div className="post-form-button">
          <button type="button" className="post-form-publish" onClick={handleAddPost}>
            Opublikuj
          </button>
        </div>
      </div>
    </div>
  );
};

PostForm.propTypes = {
  kudoses: PropTypes.array,
  users: PropTypes.array,
  groups: PropTypes.array,
  addPost: PropTypes.func.isRequired,
};

PostForm.defaultProps = {
  kudoses: [],
  users: [],
  groups: [],
};

const mapStateToProps = (state) => {
  const { kudoses, users, groups } = state;
  return { kudoses, users, groups };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: ({ note, selectedKudos, selectedGroup, selectedUserId, createdOn }) =>
      dispatch(addPostAction(note, selectedKudos, selectedGroup, selectedUserId, createdOn)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
