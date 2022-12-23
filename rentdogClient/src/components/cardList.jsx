import Card from "./card";
import '../styles/styles.css';
import CardAdmin from "./cardAdmin";

const CardList = ({ dogs = [], isAdmin, remove = f => f, update = f => f, createContract = f => f }) => {
    if (dogs.length === 0) {
        return (<></>)
    }

    console.log(dogs)
    if (isAdmin) {
        return (<div id="content" className="row overflow-auto">
            {dogs.map(dog => <CardAdmin key={dog._id} {...dog}
                removeDog={remove}
                updDog={update} />)}
        </div>
        );
    } else {
        return (<div id="content" className="row overflow-auto">
            {dogs.map(dog => <Card key={dog._id}
                {...dog}
                create={createContract} />)}
        </div>
        );
    }
}

export default CardList;