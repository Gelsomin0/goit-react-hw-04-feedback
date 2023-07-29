import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    return (
        <div className={css.container}>
            <h1>{title}</h1>
            <div>{ children }</div>
        </div>
    );
}

Section.propTypes = {
  title: PropTypes.string,
}