import PropTypes from 'prop-types';

export const Titlestatistic = ({title}) => {
    return (
        <div>
            <hi>{title}</hi>           
        </div>
    )
}

Titlestatistic.propTypes = {
      title: PropTypes.string.isRequired 
}