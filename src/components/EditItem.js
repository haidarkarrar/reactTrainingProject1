import { useState } from "react";
import useInput from "../hooks/use-input";

const EditItem = () => {
    const DUMMY_DATA = [
        {
            _id: "5f293ee62e33303cd33a4e82",
            picture: "http://placehold.it/32x32",
            age: 35,
            itemColor: "#451C13",
            itemName: "Wagner Osborne",
            phone: "+1 (815) 428-3927",
            about: "Dolore culpa do excepteur ut fugiat ad deserunt enim duis incididunt aliquip ad cupidatat eu. Ut enim nisi culpa cupidatat eu pariatur duis. Ut velit nulla sit cillum ad cillum elit consectetur in. Adipisicing adipisicing ipsum excepteur est sint. Eu nisi exercitation amet anim incididunt esse commodo qui quis labore irure mollit. Non voluptate nisi cillum velit nulla non nisi consectetur sint occaecat. Minim qui exercitation non dolore consequat voluptate exercitation non.\r\n",
        },
        {
            _id: "5f293ee6c7a03e66f27d0729",
            picture: "http://placehold.it/32x32",
            age: 34,
            itemColor: "#451C13",
            itemName: "Pearl Roach",
            phone: "+1 (814) 540-2459",
            about: "Labore mollit ipsum laboris mollit. Nulla enim ad minim consequat laboris qui labore commodo ullamco id. Culpa enim eu irure exercitation fugiat consequat consequat reprehenderit ea ex ut culpa dolor.\r\n",
        },
        {
            _id: "5f293ee60218dd23c64d5903",
            picture: "http://placehold.it/32x32",
            age: 27,
            itemColor: "#451C13",
            itemName: "Elise Moran",
            phone: "+1 (945) 486-2478",
            about: "Aliqua proident velit pariatur anim aute do aliqua fugiat ipsum non. Velit duis mollit occaecat reprehenderit est labore ullamco ut. Laborum laborum nisi sit magna culpa qui culpa est officia.\r\n",
        },
        {
            _id: "5f293ee609429f08d810814b",
            picture: "http://placehold.it/32x32",
            age: 28,
            itemColor: "#451C13",
            itemName: "Kelli Mendez",
            phone: "+1 (833) 417-2348",
            about: "Non non eu ex et adipisicing sunt pariatur. Est dolor deserunt eu ipsum sunt anim adipisicing deserunt laboris ex anim. Pariatur culpa esse in voluptate nostrud velit irure quis ut.\r\n",
        },
        {
            _id: "5f293ee6d886db79945e4a73",
            picture: "http://placehold.it/32x32",
            age: 37,
            itemColor: "#451C13",
            itemName: "Buchanan Graves",
            phone: "+1 (934) 453-2370",
            about: "Ipsum velit excepteur anim excepteur laborum fugiat enim occaecat nostrud. Et pariatur sint ut est nostrud aute aliqua. Sint enim adipisicing sint tempor consequat. Ad officia elit esse enim sint minim consequat. Ex quis culpa aliquip ut et cillum proident ullamco veniam adipisicing nulla enim ex fugiat. Labore cillum laboris nisi est mollit qui pariatur id. Anim minim laborum sint id nulla consectetur labore dolor eu mollit voluptate.\r\n",
        },
    ];

    const [searchQuery, setSearchQuery] = useState("");
    const [showItem, setShowItem] = useState(false);
    const [itemToEdit, setItemToEdit] = useState();
    const [colAData, setColAData] = useState([...DUMMY_DATA]);

    const { value: enteredPic, valueChangeHanlder: picChangeHandler } =
        useInput((value) => value.trim() !== "");
    const { value: enteredAge, valueChangeHanlder: ageChangeHandler } =
        useInput((value) => value.trim() !== "");
    const {
        value: enteredItemColor,
        valueChangeHanlder: itemColorChangeHandler,
    } = useInput((value) => value.trim() !== "");
    const {
        value: enteredItemName,
        valueChangeHanlder: itemNameChangeHandler,
    } = useInput((value) => value.trim() !== "");
    const {
        value: enteredPhoneNumber,
        valueChangeHanlder: phoneNumberChangeHandler,
    } = useInput((value) => value.trim() !== "");
    const { value: enteredAbout, valueChangeHanlder: aboutChangeHandler } =
        useInput((value) => value.trim() !== "");

    const searchChangeHandler = (e) => {
        setSearchQuery(e.target.value);
    };

    const submitEditFormHandler = (e) => {
        e.preventDefault();
        DUMMY_DATA.filter((val) => {
            if (val._id === itemToEdit._id) {
                val.picture =
                    enteredPic.trim() === "" ? itemToEdit.picture : enteredPic;
                val.age =
                    enteredAge.trim() === "" ? itemToEdit.age : enteredAge;
                val.itemColor =
                    enteredItemColor.trim() === ""
                        ? itemToEdit.itemColor
                        : enteredItemColor;
                val.itemName =
                    enteredItemName.trim() === ""
                        ? itemToEdit.itemName
                        : enteredItemName;
                val.phone =
                    enteredPhoneNumber.trim() === ""
                        ? itemToEdit.phone
                        : enteredPhoneNumber;
                val.about =
                    enteredAbout.trim() === ""
                        ? itemToEdit.about
                        : enteredAbout;
            }
            return DUMMY_DATA;
        });
    };

    const deleteHandler = () => {
        let colA = colAData;
        for (var i = 0; i < colA.length; i++) {
            if (colA[i]["_id"] === itemToEdit._id) {
                console.log(i);
                colA.splice(i, 1);
                setColAData([...colA]);
            }
        }
        return -1;
    };
    console.log(colAData);

    return (
        <div>
            <form className='w-25 d-flex'>
                <input
                    className='form-control me-2'
                    type='search'
                    placeholder='Search to edit item'
                    aria-label='Search'
                    onChange={searchChangeHandler}
                />
            </form>
            <div>
                {colAData
                    .filter((val) => {
                        if (
                            val.itemName
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase())
                        ) {
                            return val;
                        }
                        return false;
                    })
                    .map((val, key) => {
                        return (
                            <div
                                key={val._id}
                                onClick={() => {
                                    setShowItem(true);
                                    setItemToEdit(val);
                                }}
                            >
                                {val.itemName}
                            </div>
                        );
                    })}
            </div>

            {showItem && (
                <form
                    className='mt-5'
                    style={{ width: "200px" }}
                    onSubmit={submitEditFormHandler}
                >
                    <label>picture</label>
                    <input
                        key={itemToEdit.picture}
                        type='url'
                        defaultValue={itemToEdit.picture}
                        onChange={picChangeHandler}
                    />
                    <br />
                    <br />
                    <label>age </label>
                    <input
                        key={itemToEdit.age}
                        type='text'
                        defaultValue={itemToEdit.age}
                        onChange={ageChangeHandler}
                    />
                    <br />
                    <br />
                    <label>itemColor</label>
                    <input
                        key={itemToEdit.itemColor}
                        type='color'
                        defaultValue={itemToEdit.itemColor}
                        onChange={itemColorChangeHandler}
                    />
                    <br />
                    <br />
                    <label>itemName </label>
                    <input
                        key={itemToEdit.itemName}
                        type='text'
                        defaultValue={itemToEdit.itemName}
                        onChange={itemNameChangeHandler}
                    />
                    <br />
                    <br />
                    <label>phone</label>
                    <input
                        key={itemToEdit.phone}
                        type='text'
                        defaultValue={itemToEdit.phone}
                        onChange={phoneNumberChangeHandler}
                    />
                    <br />
                    <br />
                    <label>about</label>
                    <input
                        key={itemToEdit.about}
                        type='text'
                        defaultValue={itemToEdit.about}
                        onChange={aboutChangeHandler}
                    />
                    <br />
                    <br />
                    <button type='submit'>submit</button>
                    <button onClick={deleteHandler}>delete item</button>
                </form>
            )}
        </div>
    );
};

export default EditItem;
