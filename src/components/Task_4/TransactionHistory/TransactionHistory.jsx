import PropTypes from 'prop-types';
import { HeadTr, TableBody, TransactionHistoryTable, TransactionTableHead }  from './TransactionHistory.styled';
import { TableItem } from '../TableItem/TableItem';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <TransactionTableHead>
        <HeadTr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </HeadTr>
      </TransactionTableHead>
      <TableBody>
        <TableItem info={items}/>
      </TableBody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};