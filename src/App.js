import './App.css';

function App() {
  console.log("app rendered")

  const submitForm = (e) => {
    e.preventDefault()
    console.log("form submitted")
  }

  const RedSquare =()=>{
    return (
      <div style={{width:75,height: 75, backgroundColor:'yellow'}}></div>
    )
  }

  return (
    <div className="App">
      
      <header className="App-header">
        <RedSquare/>
        <div>
          <form action="" onSubmit={submitForm}>
            <input type="text" placeholder='name' /> <br/>
            <input type="submit"/>
          </form>
          
        </div>
      </header>
    </div>
  );
}

export default App;
