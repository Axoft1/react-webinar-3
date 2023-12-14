import PropTypes from "prop-types";
import './style.css'

function Title({ text, variant }) {
    const Tag = variant || 'h1'
    return (
        <Tag className="Title">{text}</Tag>
    )
}

Title.propTypes = {
    text: PropTypes.string,
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
}

Title.defaultProps = {
    variant: 'h1'
}

export default Title