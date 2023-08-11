import PropTypes from 'prop-types';

export const Titlefeedback = ({title}) => {
    return (
        <div>
            <hi>{title}</hi>           
        </div>
    )
}

Titlefeedback.propTypes = {
      title: PropTypes.string.isRequired 
}