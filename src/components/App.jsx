import { Layout, ProfileAndStatisticsWrapper } from './Layout/Layout.styled';
import { Profile } from './Task_1/Profile/Profile';
import { Statistics } from './Task_2/Statistics/Statistics';
import { FriendsList } from './Task_3/FriendList/FriendList';
import { TransactionHistory } from './Task_4/TransactionHistory/TransactionHistory';
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
