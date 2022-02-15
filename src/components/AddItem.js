import { useState } from "react";
import useInput from "../hooks/use-input";

const AddItem = (props) => {
    const [colA, setColA] = useState([]);

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

    const submitHandler = (e) => {
        e.preventDefault();
        const data = [
            ...colA,
            {
                _id: Math.random().toString(),
                picture: enteredPic,
                age: enteredAge,
                itemColor: enteredItemColor,
                itemName: enteredItemName,
                phone: enteredPhoneNumber,
                about: enteredAbout,
            },
        ];

        setColA(data);
        props.onAddItem(data);
    };

    return (
        <div>
            <h3>Add Item</h3>
            <form onSubmit={submitHandler} style={{ width: "200px" }}>
                <label>picture</label>
                <input type='url' onChange={picChangeHandler} />
                <br />
                <br />
                <label>age </label>
                <input type='text' onChange={ageChangeHandler} />
                <br />
                <br />
                <label>itemColor</label>
                <input type='color' onChange={itemColorChangeHandler} />
                <br />
                <br />
                <label>itemName </label>
                <input type='text' onChange={itemNameChangeHandler} />
                <br />
                <br />
                <label>phone</label>
                <input type='text' onChange={phoneNumberChangeHandler} />
                <br />
                <br />
                <label>about</label>
                <input type='text' onChange={aboutChangeHandler} />
                <br />
                <br />
                <button type='submit'>submit</button>
            </form>
        </div>
    );
};

export default AddItem;
