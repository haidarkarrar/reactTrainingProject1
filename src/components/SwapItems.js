import { useCallback, useState } from "react";

const SwapItems = (props) => {
    const DUMMY_DATA = [
        {
            _id: "5f293ee62e33303cd33a4e82",
            picture: "http://placehold.it/32x32",
            age: 35,
            itemColor: "#451C13",
            itemName: "Wagner Osborne",
            phone: "+1 (815) 428-3927",
            about: "Dolore culpa do eon non.\r\n",
        },
        {
            _id: "5f293ee6c7a03e66f27d0729",
            picture: "http://placehold.it/32x32",
            age: 34,
            itemColor: "#451C13",
            itemName: "Pearl Roach",
            phone: "+1 (814) 540-2459",
            about: "Labore mollit  culpa dolor.\r\n",
        },
        {
            _id: "5f293ee60218dd23c64d5903",
            picture: "http://placehold.it/32x32",
            age: 27,
            itemColor: "#451C13",
            itemName: "Elise Moran",
            phone: "+1 (945) 486-2478",
            about: "Aliqua st officia.\r\n",
        },
        {
            _id: "5f293ee609429f08d810814b",
            picture: "http://placehold.it/32x32",
            age: 28,
            itemColor: "#451C13",
            itemName: "Kelli Mendez",
            phone: "+1 (833) 417-2348",
            about: "Non non eu ext irure quis ut.\r\n",
        },
        {
            _id: "5f293ee6d886db79945e4a73",
            picture: "http://placehold.it/32x32",
            age: 37,
            itemColor: "#451C13",
            itemName: "Buchanan Graves",
            phone: "+1 (934) 453-2370",
            about: "Ipsum velit excepteurmollit voluptate.\r\n",
        },
    ];
    const [collectionA] = useState([...props.colAData]);
    const [collectionB] = useState([...DUMMY_DATA]);
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const swapItemsHandler = () => {
        let currentColAIndex = collectionA.length,
            randomcolAIndex;

        let currentColBIndex = collectionB.length,
            randomcolBIndex;

        randomcolAIndex = Math.floor(Math.random() * currentColAIndex);
        currentColAIndex--;

        randomcolBIndex = Math.floor(Math.random() * currentColBIndex);
        currentColBIndex--;

        let temp = collectionA[randomcolAIndex];
        collectionA[randomcolAIndex] = collectionB[randomcolBIndex];
        collectionB[randomcolBIndex] = temp;
        forceUpdate();
    };

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <div>
                    <h1>colA</h1>
                    {collectionA.map((val, key) => {
                        return (
                            <ul key={val._id}>
                                <li>{val.picture}</li>
                                <li>{val.age}</li>
                                <li>{val.itemColor}</li>
                                <li>{val.itemName}</li>
                                <li>{val.phone}</li>
                                <li>{val.about}</li>
                            </ul>
                        );
                    })}
                </div>
                <div>
                    <h1>colB</h1>
                    {collectionB.map((val, key) => {
                        return (
                            <ul key={val._id}>
                                <li>{val.picture}</li>
                                <li>{val.age}</li>
                                <li>{val.itemColor}</li>
                                <li>{val.itemName}</li>
                                <li>{val.phone}</li>
                                <li>{val.about}</li>
                            </ul>
                        );
                    })}
                </div>
            </div>
            <div className='text-center py-5 mb-5'>
                <button onClick={swapItemsHandler}>swap 2 random items</button>
            </div>
        </div>
    );
};

export default SwapItems;
