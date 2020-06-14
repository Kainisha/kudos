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
import { MentionsInput, Mention } from 'react-mentions';
import { queryEmojis, hashTags } from './noteUtilities';

const MAX_CHARACTERS = 300;

const PostForm = ({ kudoses, users, groups, addPost }) => {
  const { setShowModal } = useContext(modalsContext);
  const [selectedKudos, setSelectedKudos] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(1);
  const [note, setNote] = useState('');
  const [error, setError] = useState('');

  const getUserFullName = ({ first_name: firstName, last_name: lastName }) =>
    `${firstName} ${lastName}`;

  const countCharacters = () => note.length;

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

  const usersSugestions = users.map((user) => {
    const { id } = user;
    return {
      id,
      display: getUserFullName(user),
    };
  });

  const handleSelectKudos = (value) => setSelectedKudos(value);
  const handleSelectUser = ({ value }) => setSelectedUser(value);
  const handleSelectGroup = (groupId) => setSelectedGroup(groupId);

  const validate = () => {
    setError('');

    if (selectedUser === null) {
      setError('Musisz wybrać odbiorcę');
      return false;
    }

    if (note.trim() === '') {
      setError('Treść posta nie może być pusta');
      return false;
    }

    return false;
  };

  const isError = () => error.trim() !== '';

  const handleAddPost = () => {
    if (!validate()) {
      return;
    }

    const createdOn = moment().format('YYYY-MM-DD hh:mm:ss');
    addPost({ note, selectedKudos, selectedGroup, selectedUserId: selectedUser, createdOn });
    setShowModal(false);
  };

  const handleChangeNote = (event) => {
    const { value } = event.target;

    if (value.length < MAX_CHARACTERS) {
      setNote(value);
    }

    setNote(value.substring(0, MAX_CHARACTERS));
  };

  return (
    <div className="post-form">
      {isError() && (
        <div className="post-form-error alert alert-danger">
          <span>{error}</span>
        </div>
      )}
      <div className="post-form-note">
        <label htmlFor="post-form-note-input">Treść posta nad kudosem</label>
        <MentionsInput
          value={note}
          onChange={handleChangeNote}
          className="post-form-note-input"
          id="post-form-note-input"
        >
          <Mention
            className="post-note-suggestions"
            trigger="@"
            displayTransform={(id, display) => `@${display}`}
            data={usersSugestions}
            renderSuggestion={(suggestion, search, highlightedDisplay, index, focused) => (
              <div className={`user ${focused ? 'focused' : ''}`}>{highlightedDisplay}</div>
            )}
          />
          <Mention
            className="post-note-hashtags"
            markup="#[__display__](hashtag:__id__)"
            trigger="#"
            displayTransform={(id, display) => `#${display}`}
            data={hashTags}
            renderSuggestion={(suggestion, search, highlightedDisplay, index, focused) => (
              <div className={`user ${focused ? 'focused' : ''}`}>{highlightedDisplay}</div>
            )}
          />
          <Mention trigger=":" markup="__id__" data={queryEmojis} regex={/($a)/} />
        </MentionsInput>
        <div className="post-form-note-counter">
          <span>
            Użyte znaki: {countCharacters()} / {MAX_CHARACTERS}
          </span>
        </div>
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
