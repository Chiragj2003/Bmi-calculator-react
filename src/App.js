import "./App.css";
import React,{useState} from "react";



function App() {

  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi,setBmi] = useState();
  const [message,setMessage] = useState();
  const [theme, setTheme] = useState("light");  // Add state for theme


// logic of the code 

  let calcBmi = (e) =>{
    e.preventDefault();

    if(weight === 0 || height === 0){
      alert("please enter a valid height and weight")
    }
    else{
      let bmi =(weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      if (bmi<25){
        setMessage("you are under weight ")
      }
      else if(bmi>25 && bmi <30){
        setMessage("you are healthy weight ")
      }
      else{
        setMessage("you are overweight ")
      }

    }
  }


// reload
let reload= () =>{
  window.location.reload()
}

 // Toggle theme function
 const toggleTheme = () => {
  setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
};


  return (
    <div className={`App ${theme}`}>
      <div className="contsiner">
        <h2>BMI calculator</h2>
        <form onSubmit={calcBmi}>

          <div>
            <label>weight (lbs)  </label>
            <input
              type="text"
              placeholder="Enter Weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>height (in)  </label>
            <input
              type="text"
              placeholder="Enter Height value"
              value={height }
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="reload">
              Reload
            </button>
          </div>

          <div className="center">
            <h3>Your BMI is : {bmi}</h3>
            <p>{message }</p>
          </div>

        </form>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
}

export default App;
