import {StatsEl, Label} from '../Stats/Stats.styled';

export const Likes = ({likes}) => {
    return (
        <StatsEl>
          <Label>Likes</Label>
          <span>{likes}</span>
        </StatsEl>
    )
}

