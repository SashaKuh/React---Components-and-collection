import PropTypes from 'prop-types';
import { Wrapper } from './Profile.styled';
import { Description } from '../Description/Description';
import { Stats } from '../Stats/Stats';

export const Profile = ({ user }) => {
  return (
    <Wrapper>
      <Description items={user} />
      <Stats stats={user.stats} />
    </Wrapper>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
