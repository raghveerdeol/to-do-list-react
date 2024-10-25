import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./AppMain.css";

function AppMain() {
    // use state on list array and input value 
    const [doLIst, setDoList] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isChecked, setIsChecked] = useState([]);


    function addEvent() {
        // ignore if the input value is empty  
        if (inputValue.trim()) {
            // update list with input value 
            setDoList([...doLIst, inputValue]);
            // reset input value 
            setInputValue('');
        }
    }

    function check(value) {
        if (isChecked.includes(value)) {
            setIsChecked(isChecked.filter((i) => i !== value));
        } else {
            // add if not find 
            setIsChecked([...isChecked, value]);
        }
    }

    function deleteItem(index) {
        setDoList(doLIst.filter((_,i) => i !== index));
    }

    return (
        <>
        <main className="App">
            <section className="mainContainer">
                <h1>TO DO LIST</h1>

                <input
                    type="text"
                    placeholder="Add something to do"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => { 
                        if (e.key === "Enter") 
                            addEvent(); 
                    }}
                />
                <button
                    onClick={addEvent}>
                    ADD
                </button>
            </section>
            <section className="list">
                <ul>
                    {doLIst.map((item, index) => (
                        <li key={index}>
                            <span 
                                className={isChecked.includes(item) ? 'checked' : ''}
                                onClick={() => check(item)}
                            >
                                {item}
                            </span>
                            <a className="deleteButton" onClick={() => deleteItem(index)}>
                            <FontAwesomeIcon icon={faTrashCan} />
                            </a>
                        </li>
                    ))}
                    { doLIst.length === 0 ? <li>
                        Your list is empty add something
                    </li> : '' }
                </ul>
            </section>
        </main>
    </>
    )
}

export default AppMain;
