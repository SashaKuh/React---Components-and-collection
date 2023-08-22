import {StatsEl, Label} from '../Stats/Stats.styled';

export const Followers = ({followers}) => {
    return (
        <StatsEl>
          <Label>Followers</Label>
          <span>{followers}</span>
        </StatsEl>
    )
}

