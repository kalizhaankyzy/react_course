import PropTypes from 'prop-types'

const Button = ({color, title, onClick}) => {
    return (
        <button 
            className="btn"
            style={{backgroundColor:color}} 
            onClick={onClick}>
            {title}
        </button>
    )
}

Button.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}
export default Button
