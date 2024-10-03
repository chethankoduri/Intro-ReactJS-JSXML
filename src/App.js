import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className= 'Body'>
      </div>
      <h1 className="mainHeading">React</h1>
      <p>The library for web and native user interfaces</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"></img>
       <form>
        <div>
          <label htmlFor="Email Input"> Email </label>
         <input id="Email Input"/>
         <label htmlFor="Password Input"> Password </label>
         <input id="Password Input"/>

        </div>
       </form>
    </div>


  );
}

export default App;
