import NavBar from "./navBar";
import '../styles/styles.css';
import CardList from "./cardList";
import AddDog from "./addDog";

const Search = ({ dogs = [], newDog = f => f, user, removeDogList = f => f,
    updateDogList = f => f, create = f => f }) => {
    if (user.isAdmin) {
        return (<section className='allPage'>
            <NavBar admin={user.isAdmin} />
            <AddDog addNewDog={newDog} />
            <CardList dogs={dogs} isAdmin={true}
                remove={removeDogList}
                update={updateDogList} />
        </section>);
    } else {
        return (<section className='allPage'>
            <NavBar admin={user.isAdmin} />
            <CardList dogs={dogs}
                isAdmin={false}
                createContract={create} />
        </section>);
    }

}

export default Search;