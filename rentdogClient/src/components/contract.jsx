import NavBar from "./navBar";
import '../styles/styles.css';
import ContractTable from "./contractTable";

const Contract = ({ user, contracts = [], contractlike = f => f }) => {

    return (<section className='allPageList'>
        <NavBar admin={user.isAdmin} />
        <ContractTable contracts={contracts.filter(contract => contract.userId === user._id)}
            like={contractlike} />
    </section>);
}

export default Contract;