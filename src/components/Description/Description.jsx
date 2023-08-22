import PropTypes from 'prop-types';
import {StyledDescription, StyledAvatar, StyledName, StyledText } from './Description.styled';

export const Description = ( { items: { username, tag, location, avatar } } ) => {
    return (
        <StyledDescription >
            <StyledAvatar src={avatar} alt={username}></StyledAvatar>
            <StyledName>{username}</StyledName>  
            <StyledText>@{tag}</StyledText>  
            <StyledText>{location}</StyledText> 
        </StyledDescription>
    );
};

Description.propTypes = {
    items: PropTypes.shape({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
  };
  