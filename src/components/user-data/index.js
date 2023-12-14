import Title from "../title";
import PropTypes from "prop-types";
import './style.css'

function UserData(props) {
    return (
        <div className="UserData">
            <Title text={props.heading} variant="h2" />
            <p>{props.name}</p>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    )
}

UserData.propTypes = {
    heading: PropTypes.string,
    name: PropTypes.node,
    phone: PropTypes.node,
    email: PropTypes.node,
}

export default UserData