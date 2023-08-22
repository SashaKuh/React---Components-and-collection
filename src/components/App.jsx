import { Layout, ProfileAndStatisticsWrapper } from './Layout/Layout.styled';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <Layout>
      <ProfileAndStatisticsWrapper>
        <Profile user={user} />
        <Statistics title="Upload stats" stats={data} />
        <FriendsList friends={friends}/>
        <TransactionHistory items={transactions}/>
      </ProfileAndStatisticsWrapper>
    </Layout>
  );
};
