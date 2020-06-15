import React from 'react';
import UserAvatar from 'src/components/atoms/UserAvatar/UserAvatar';
import { InputGroup, FormControl, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrin, faPaperclip, faImage } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './CommentInput.scss';

library.add(faGrin, faPaperclip, faImage);

const CommentInput = () => {
  return (
    <div className="commnet-input">
      <UserAvatar src="src/images/pikatchu.png" alt="user avatar" />
      <InputGroup size="sm">
        <FormControl placeholder="Napisz komentarz" aria-label="Napisz komentarz" />
        <InputGroup.Append>
          <OverlayTrigger placement="top" delay="300" overlay={<Tooltip>Wstaw obrazek</Tooltip>}>
            <Button variant="outline-secondary">
              <FontAwesomeIcon icon={faImage} size="xs" />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger placement="top" delay="300" overlay={<Tooltip>Wstaw emotkę</Tooltip>}>
            <Button variant="outline-secondary">
              <FontAwesomeIcon icon={faGrin} size="xs" />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger placement="top" delay="300" overlay={<Tooltip>Wstaw załącznik</Tooltip>}>
            <Button variant="outline-secondary">
              <FontAwesomeIcon icon={faPaperclip} size="xs" />
            </Button>
          </OverlayTrigger>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default CommentInput;
