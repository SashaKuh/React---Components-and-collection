import styled from 'styled-components';

export const CustomFriendStatus = ({ isOnline, ...props }) => {
  return <span {...props} />;
};

export const FriendItem = styled.li`
  display: flex;
  gap: 8px;
  padding: 8px;
  align-items: center;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const FriendStatus = styled.span`
  border-radius: 50%;
  width: 16px;
  height: 16px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 700;
`;