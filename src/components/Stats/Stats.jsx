import PropTypes from 'prop-types';
import { StyledStats, StatsEl, Label } from './Stats.styled';

export const Stats = ({ stats: { followers, views, likes } }) => {
  const statItems = [
    { label: 'Followers', value: followers },
    { label: 'Views', value: views },
    { label: 'Likes', value: likes },
  ];

  return (
    <StyledStats>
      {statItems.map(({ label, value }) => (
        <StatsEl key={label}>
          <Label>{label}</Label>
          <span>{value}</span>
        </StatsEl>
      ))}
    </StyledStats>
  );
};

Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
