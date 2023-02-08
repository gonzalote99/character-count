import React from "react";
import "./style.css";

function App() {
  const [text, setText] = React.useState(0);
  const [maxLength, setMaxLength] = React.useState(120);
  const [textColor, setTextColor] = React.useState({color: 'blue'})
  const charleft = maxLength - (text.length || 0)


  React.useEffect(() => {
    if (charleft == 0) {
      setTextColor({color: 'red'})
    }
  }, [text.length])

   return (
     <section id="content">
       <h1>character count</h1>
       <div>
       <label htmlFor="maxinput">maximum size</label>
       <input 
          type="number"
          onChange={e => setMaxLength(e.target.value)}
          className="inputs"
          id="maxinput"
       ></input>
         </div>
         <div>
           <textarea
           onChange={e => setText(e.target.value)}
           maxLength={maxLength}
           className="inputs"
           autoComplete="off"
           id="textinput"
           placeholder="write your text"
           
           >
             
             </textarea>
           </div>
           <p><span style={{color: 'red'}}>{text.length || 0}</span> characters</p> 
           <p><span style={textColor} >{charleft}</span>characters remaning</p>
       </section>
   )
}

export default App