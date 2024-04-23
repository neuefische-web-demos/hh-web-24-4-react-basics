export default function App() {
  return ( 
  <div>    
    <Button /> 
    <Button /> 
    <Button /> 
  </div>
  );
}

function Button(){
  const buttonText = "Click with React";
  return (<button className="blue" type="button" onClick={() => console.log("Hello React World")}>
  {buttonText}
</button>); 
}