
import './App.css'

function App() {
  

  return (
    <>
     
      <h1>Vite + React</h1>
   <Person></Person>
    <Sports></Sports>
    <Student></Student>
    <Student></Student>
    <Developer></Developer>
    </>
  )
}
function Person(){
  const age=45;
  return(
    <p>i am imran nazir {age}</p>
  )
}
function Sports(){
  return(
   <div>
     <h2>Cricket</h2>
    <ul>
      <li>mango</li>
      <li>banana</li>
    </ul>
   </div>
  )
}
function Student(){
  return(
  <div className="student">
    <p>name:</p>
    <p>Dept.</p>
  </div>
  )
}

function Developer(){
  return(
<div style={{
  border:'2px solid green',
}}>
  <h3>DEveloper</h3>
  <p>Technology</p>
</div>
  )
}
export default App
