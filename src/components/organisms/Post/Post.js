import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MentionsInput, Mention } from 'react-mentions';
import PostAuthor from 'src/components/molecules/PostAuthor/PostAuthor';
import Statistics from 'src/components/molecules/Statistics/Statistics';
import CommentInput from 'src/components/molecules/CommentInput/CommentInput';
import Kudos from 'src/components/molecules/Kudos/Kudos';
import { queryEmojis, hashTags } from 'src/components/organisms/PostForm/noteUtilities';
import './Post.scss';

const Post = ({
  note,
  author_id: authorId,
  created_on: createdOn,
  likes,
  group_id: groupId,
  kudos_assigned: kudosAssigned,
  users,
}) => {
  const getUserFullName = ({ first_name: firstName, last_name: lastName }) =>
    `${firstName} ${lastName}`;

  const usersSugestions = users.map((user) => {
    const { id } = user;
    return {
      id,
      display: getUserFullName(user),
    };
  });

  return (
    <div className="post">
      <PostAuthor authorId={authorId} createdOn={createdOn} />
      <div className="note">
        <MentionsInput value={note} className="note-input">
          <Mention
            className="note-suggestions"
            trigger="@"
            displayTransform={(id, display) => `@${display}`}
            data={usersSugestions}
            renderSuggestion={(suggestion, search, highlightedDisplay, index, focused) => (
              <div className={`user ${focused ? 'focused' : ''}`}>{highlightedDisplay}</div>
            )}
          />
          <Mention
            className="note-hashtags"
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
      </div>
      <div className="kudoses">
        {kudosAssigned.map(({ type, user_id: userId, id }) => (
          <Kudos userId={userId} type={type} key={`post-kudos-${id}`} />
        ))}
      </div>
      <Statistics likes={likes} groupId={groupId} />
      <div className="post-footer">
        <CommentInput />
      </div>
    </div>
  );
};

Post.propTypes = {
  note: PropTypes.string.isRequired,
  author_id: PropTypes.number.isRequired,
  created_on: PropTypes.string.isRequired,
  likes: PropTypes.number,
  group_id: PropTypes.number.isRequired,
  kudos_assigned: PropTypes.array.isRequired,
  users: PropTypes.array,
};

Post.defaultProps = {
  likes: 0,
  users: [],
};

const mapStateToProps = (state) => {
  const { users } = state;
  return { users };
};

export default connect(mapStateToProps)(Post);
