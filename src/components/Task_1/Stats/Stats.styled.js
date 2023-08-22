import styled from 'styled-components';

export const StyledStats = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const StatsEl = styled.li`
  display: flex;
  padding: 12px;
  gap: 4px;
  flex-direction: column;
  align-items: center;
  background-color: gainsboro;
  border: 1px solid darkgray;
`;

export const Label = styled.span`
  font-weight: 700;
  color: darkgrey;
`;