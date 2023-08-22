import PropTypes from 'prop-types';
import { randomColor } from "Utils/randomColor";
import { Item, Label, Percentage, SectionStatistics, StatList, Title } from './Statistics.styled';
import { StyleSheetManager } from 'styled-components';

export const Statistics = ({ title, stats }) => {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'backgroundColor'}>
      <SectionStatistics>
      {title && <Title>{title}</Title>}
        <StatList>
          {stats.map((el, _, arr) => {
            return (
              <Item
                backgroundColor={randomColor()}
                quantity={arr.length}
                key={el.id}
              >
                <Label>{el.label}</Label>
                <Percentage>{el.percentage}%</Percentage>
              </Item>
            );
          })}
        </StatList>
      </SectionStatistics>
    </StyleSheetManager>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
