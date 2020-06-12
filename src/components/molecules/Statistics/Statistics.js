import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Statistics.scss';
import LikesCounter from 'src/components/atoms/LikesCounter/LikesCounter';
import CommentsCounter from 'src/components/atoms/CommentsCounter/CommentsCounter';
import Options from 'src/components/atoms/Options/Options';
import GroupIcon from 'src/components/atoms/GroupIcon/GroupIcon';

const Statistics = ({ likes, groupId, groups }) => {
  const [group, setGroup] = useState({});
  const options = [{ label: 'edycja' }, { label: 'share' }];

  useEffect(() => {
    const selectedGroup = groups.find((item) => item.id === groupId);
    if (typeof selectedGroup === 'undefined') {
      return;
    }
    setGroup(selectedGroup);
  }, []);

  return (
    <div className="statistics">
      <div className="group">
        <GroupIcon type={group.type} /> {group.name}
      </div>
      <LikesCounter initCounter={likes} />
      <CommentsCounter />
      <Options options={options} />
    </div>
  );
};

Statistics.propTypes = {
  likes: PropTypes.number,
  groupId: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  groups: PropTypes.array.isRequired,
};

Statistics.defaultProps = {
  likes: 0,
};

const mapStateToProps = (state) => {
  const { groups } = state;
  return {
    groups,
  };
};

export default connect(mapStateToProps)(Statistics);
