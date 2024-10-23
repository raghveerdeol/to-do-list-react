import { useState } from "react";
import "./AppMain.css";

function AppMain() {
    // use state on list array and input value 
    const [doLIst, setDoList] = useState([]);
    const [inputValue, setInputValue] = useState('');


    function addEvent() {
        // ignore if the input value is empty  
        if (inputValue.trim()) {
            // update list with input value 
            setDoList([...doLIst, inputValue]);
            // reset input value 
            setInputValue('');
        }
    }

    return (
        <>
        <main className="App">
            <section className="mainContainer">
                <h1>TO DO LIST</h1>
                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <button onClick={addEvent}>Add</button>
            </section>
            <section className="list">
                <ul>
                    {doLIst.map((item, index) => (
                        <li key={index}> {item} </li>
                    ))}
                </ul>
            </section>
        </main>
    </>
    )
}

export default AppMain;
