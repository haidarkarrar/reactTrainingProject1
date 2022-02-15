import "./App.css";
import AddItem from "./components/AddItem";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import EditItem from "./components/EditItem";
import SwapItems from "./components/SwapItems";
import { useState } from "react";

function App() {
    const [colAData, setColAData] = useState([]);
    const getItemDataHandler = (newItems) => {
        setColAData(newItems);
    };

    return (
        <div>
            <Navbar />
            <Routes>
                <Route
                    path='/add'
                    element={<AddItem onAddItem={getItemDataHandler} />}
                />
                <Route path='/edit' element={<EditItem />} />
                <Route
                    path='/swap'
                    element={<SwapItems colAData={colAData} />}
                />
            </Routes>
        </div>
    );
}

export default App;
