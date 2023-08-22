import {StatsEl, Label} from '../Stats/Stats.styled';

export const Views = ({views}) => {
    return (
        <StatsEl>
          <Label>Views</Label>
          <span>{views}</span>
        </StatsEl> 
    )
}

