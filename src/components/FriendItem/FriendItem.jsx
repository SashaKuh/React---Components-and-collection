import PropTypes from 'prop-types';
import {CustomFriendStatus, FriendItem, FriendStatus, FriendName} from './FriendItem.styled';

export const FriendItems = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendStatus as={CustomFriendStatus} isOnline={isOnline} />
      <img src={avatar} alt={name} width="48" height="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendItems.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};


