import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  border-radius: 5px;
  overflow: hidden;
`;

export const TransactionTableHead = styled.thead`
  background-color: #66B2FF;
`;

export const HeadTr = styled.tr`
  color: white;

  th {
    text-transform: uppercase;
    padding: 12px;
  }

  th:not(:last-child) {
    border-right: 1px solid white;
  }
`;

export const TableBody = styled.tbody`
  td {
    text-align: center;
    padding: 8px;
  }
  tr:nth-of-type(even) {
    background-color: lightgray;
  }
  tr td:first-of-type::first-letter {
    text-transform: uppercase;
  }
`;
