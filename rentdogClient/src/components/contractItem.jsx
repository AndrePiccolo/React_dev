import { CgSmileSad, CgSmile } from 'react-icons/cg';
import React, { useState } from 'react'

const ContractItem = ({ contractInfo, checkLike = f => f }) => {

    const [like, setlike] = useState(contractInfo.like);

    let colorSad
    let colorSmile

    if (contractInfo.like == 2) {
        colorSmile = 'green'
        colorSad = 'gray'
    } else if (contractInfo.like == 1) {
        colorSmile = 'gray'
        colorSad = 'red'
    } else {
        colorSmile = 'gray'
        colorSad = 'gray'
    }

    const checkSad = () => {
        contractInfo.like = 1;
        setlike(1)
        checkLike(contractInfo)
    }

    const checkSmile = () => {
        contractInfo.like = 2;
        setlike(2)
        checkLike(contractInfo)
    }

    return (<tr>
        <td>{contractInfo.dogName}</td>
        <td>{contractInfo.dogBreed}</td>
        <td>{contractInfo.date}</td>
        <td><CgSmileSad onClick={checkSad}
            color={colorSad}
            size={35}
        /><CgSmile
                onClick={checkSmile}
                color={colorSmile}
                size={35}
            /></td>
    </tr>);
}

export default ContractItem;