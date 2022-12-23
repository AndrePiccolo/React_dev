import ContractItem from './contractItem';

const ContractTable = ({ contracts = [], like = f => f }) => {

    return (<div className="container-md mt-4">
        <table className="table table-light table-hover table-bordered mt-1 table-striped">
            <thead className="table-dark">
                <tr>
                    <th scope="col">Dog Name</th>
                    <th scope="col">Breed</th>
                    <th scope="col">Rent Date</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {contracts.map(contract => <ContractItem key={contract._id}
                    contractInfo={contract}
                    checkLike={like}
                />
                )}
            </tbody>
        </table>
    </div>);
}

export default ContractTable;