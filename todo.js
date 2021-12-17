import "./style.css";
import { useState, useRef } from "react";

const Challenges = () => {
  const [numbers, setNumbers] = useState([]);
  const toDoListForm = useRef(null);

  const ClickEvent = () => {
    const newArray = [...numbers];
    const form = toDoListForm.current;
    newArray.push(form["listItem"].value);
    setNumbers(newArray);
  };

  const removeHandler = (index) => {
    const newArray = [...numbers];
    newArray.splice(index, 1);
    setNumbers(newArray);
  };

  return (
    <div className="body">
      <div className="header">WORKS TO BE DONE</div>
      <div className="add">
        <form ref={toDoListForm}>
          <input
            type="text"
            className="input"
            placeholder="What to do"
            name={"listItem"}
          />
        </form>
        <button className="button" onClick={ClickEvent}>
          add
        </button>
      </div>

      <div className="exe">
        <ul>
          {numbers.map((num, index) => {
            return (
              <>
                <h1 key={index}>{num}</h1>
                <button className="button" onClick={() => removeHandler(index)}>
                  remove
                </button>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Challenges;
