import PropTypes from 'prop-types';
import css from './Notificstion.module.css';

export const Notification = ({ message }) => {
  return <p className={css.p}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
