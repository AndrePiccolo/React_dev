import UserTable from "./userTable";
import NavBar from "./navBar";

const HomeAdmin = ({ user, userlist = [], changeAdmin = f => f }) => {
    return (<section className='allPage'>
        <NavBar admin={user.isAdmin} />
        <UserTable activeUser={user}
            userList={userlist}
            updateAdmin={changeAdmin}
        />
    </section>);
}

export default HomeAdmin;