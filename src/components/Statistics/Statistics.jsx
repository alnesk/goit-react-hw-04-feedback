import PropTypes from 'prop-types';
import {
  StatisticSection,
  StatisticTotals,
  StatisticsList,
  StatisticsWrap,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticSection>
      <StatisticsList>
        <li>
          Good: <StatisticsWrap>{good}</StatisticsWrap>
        </li>
        <li>
          Neutral: <StatisticsWrap>{neutral}</StatisticsWrap>
        </li>
        <li>
          Bad: <StatisticsWrap>{bad}</StatisticsWrap>
        </li>
      </StatisticsList>
      <StatisticTotals>
        <p>
          Total:<StatisticsWrap>{total}</StatisticsWrap>
        </p>
        <p>
          Positive Feedback:{' '}
          <StatisticsWrap>{positivePercentage}%</StatisticsWrap>
        </p>
      </StatisticTotals>
    </StatisticSection>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
