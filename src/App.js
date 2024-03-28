
import './App.css';
import React,{useState,useCallback,useEffect,useRef} from 'react'


function App() {   //   style={{height:'50px'}}

       let [length,setLength]=useState(4);

       let [numberAllowed,setNumberAllowed]=useState(false);

       let [charaterAllowed,setCharacterAllowed]=useState(false);

       let [password,setPassword]=useState("");

       const passwordGen= useCallback(() => {
        
        let pass="";

        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghizklmnopqrstuvwxyz";

        
        if(numberAllowed){
           str=str+"0123456789"
        }

        if(charaterAllowed){
           str=str+"?^&*()#@!%$"
        }

        for (let  i=1 ; i <=length; i++) {
          
          const char=Math.floor(Math.random()*str.length+1);
          
          pass=pass+str.charAt(char);
        }
        setPassword(pass);

      }, [length,numberAllowed,charaterAllowed]);//This hook is use to optimize or memorize the code.

      useEffect(passwordGen, [length,charaterAllowed,numberAllowed,passwordGen])//This hook is use to run the actual method. This hook runs first time when our page loads and again runs when there is any change in respective dependencies.
                
     
      const passwordRef =useRef(null);
      //useRef  hook is use to take reference of any element in the document and then we can use that reffered element according to requirements.


     const  copyToClipBoard=()=>{

      passwordRef.current?.select();//to ensure that password is copied
      window.navigator.clipboard.writeText(password);
     }
   

  return (
    <>
      <div className="container border  border-dark  rounded rounded-3"
        style={{ height: '150px', width: '60%', margin: '15%', backgroundColor: 'rgb(20, 37, 123)' }} >

        <div className="conatainer">
          <div className="input-group mb-3 mt-4">
            <input type="text" className="form-control" placeholder="Password" aria-label="Recipient's username"
              aria-describedby="button-addon2" value={password} ref={passwordRef} />
            <button className="btn btn-primary" type="button" id="button-addon2" onClick={copyToClipBoard}>Copy</button>
          </div>
        </div>

        <div className="container d-flex  ">

          <input type="range" className="form-range" id="customRange1" min={0} max={100} value={length}  onChange={(event)=>{setLength(event.target.value)}}
            style={{ width: '120px', height: '10px', marginTop: '30px' }} />
          <h5>
            <label    style={{ color: ' rgb(234, 155, 59)', marginTop: '20px', marginLeft: '10px' } }>Length:{length}</label>
          </h5>

          <div className="form-check d-flex">
            <input className="form-check-input" type="checkbox" value={numberAllowed} id="flexCheckDefault1 "
              style={{ marginTop: '25px', marginLeft: '10px' }} defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
            <h5><label className="form-check-label" for="flexCheckDefault1"
              style={{ color: 'rgb(234, 155, 59)', marginTop: '20px', marginLeft: '10px' }}>
              Numbers
            </label>
            </h5>
          </div>

          <div className="form-check d-flex">
            <input className="form-check-input" type="checkbox" defaultChecked={charaterAllowed} value={charaterAllowed} id="flexCheckDefault2 "
              style={{ marginTop: '25px', marginLeft: '10px' }}  onChange={()=>{setCharacterAllowed((prev)=>!prev)}} />
            <h5><label className="form-check-label" for="flexCheckDefault2"
              style={{ color: 'rgb(234, 155, 59)', marginTop: '20px', marginLeft: '10px' }}>
              Characters
            </label>
            </h5>
          </div>
        </div>

      </div>


    </>
  );
}

export default App;





//setNumberAlowed((prev)=>!prev)

//onChange={()=>{setCharactersAllowed((prev)=>!prev)}}

//passwordRef.current?.select();


// When we  use <input> tag then we must  provide 'value'(must) and  onChange={} fxn (if required).


// When we  use <button> tag then we must  use  onClick={} fxn .
