import UserItem from "./userItem";

const UserTable = ({ activeUser, userList = [], updateAdmin = f => f }) => {
    return (<div className="container-md mt-4">
        <table className="table table-light table-hover table-bordered mt-1 table-striped">
            <thead className="table-dark">
                <tr>
                    <th scope="col">User ID</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Admin</th>
                </tr>
            </thead>
            <tbody>
                {userList.map(user => {
                    if (user.email !== activeUser.email) {
                        return <UserItem key={user._id}
                            user={user}
                            changeAdmin={updateAdmin}
                        />
                    }
                }
                )}
            </tbody>
        </table>
    </div>);
}

export default UserTable;