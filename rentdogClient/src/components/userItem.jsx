import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import React, { useState } from 'react'

const UserItem = ({ user, changeAdmin = f => f }) => {

    const [admin, setAdmin] = useState(user.isAdmin);

    let colorAdmin
    let colorNotAdmin

    if (admin) {
        colorAdmin = 'green'
        colorNotAdmin = 'gray'
    } else {
        colorAdmin = 'gray'
        colorNotAdmin = 'red'
    }

    const checkAdmin = () => {
        setAdmin(true)
        changeAdmin(user._id, true)
    }

    const checkNotAdmin = () => {
        setAdmin(false)
        changeAdmin(user._id, false)
    }

    return (<tr>
        <td>{user._id}</td>
        <td>{user.name}</td>
        <td><AiFillCheckCircle onClick={checkAdmin}
            color={colorAdmin}
            size={35}
        /><AiFillCloseCircle
                onClick={checkNotAdmin}
                color={colorNotAdmin}
                size={35}
            /></td>
    </tr>);
}

export default UserItem;