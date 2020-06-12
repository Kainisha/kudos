import React from 'react';
import UserAvatar from 'src/components/atoms/UserAvatar/UserAvatar';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrin, faPaperclip, faImage } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './CommentInput.scss';

library.add(faGrin, faPaperclip, faImage);

const CommentInput = () => {
  return (
    <div className="commnet__input">
      <UserAvatar src="src/images/pikatchu.png" />
      <InputGroup size="sm">
        <FormControl placeholder="Napisz komentarz" aria-label="Napisz komentarz" />
        <InputGroup.Append>
          <Button variant="outline-secondary">
            <FontAwesomeIcon icon={faGrin} size="xs" />
          </Button>
          <Button variant="outline-secondary">
            <FontAwesomeIcon icon={faPaperclip} size="xs" />
          </Button>
          <Button variant="outline-secondary">
            <FontAwesomeIcon icon={faImage} size="xs" />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default CommentInput;
