import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  min-height: 100vh; 
  gap: 16px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 64px 16px;
`;

export const ProfileAndStatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 360px;
`;
