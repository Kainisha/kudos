import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Statistics.scss';
import Counter from 'src/components/molecules/Counter/Counter';
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
        <GroupIcon type={group.type} />
        <span>{group.name}</span>
      </div>
      <Counter initCounter={likes} likes count />
      <Counter />
      <Options options={options} />
    </div>
  );
};

Statistics.propTypes = {
  likes: PropTypes.number,
  groupId: PropTypes.number.isRequired,
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
