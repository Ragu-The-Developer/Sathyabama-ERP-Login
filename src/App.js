
import './style.css';
import Logo from '../src/Logo/sist-logo.png';


function App() {
  return (
    <div className="container">
      <form className='form-container' method='POST'>
        
        <img src={ Logo } className='logo'/>
        
        <p>Enter Your RegNo and DOB to access student panel</p>
        


        <label>
          <input placeholder='Register Number'></input>
          <input placeholder='Password'><~/input>
          
            <button>LOG IN</button>
        </label>
      
      </form>
          
    </div>

    
  );
}

export default App;
