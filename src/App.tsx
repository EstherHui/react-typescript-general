import './App.css';
import { Button } from './component/Button';
import { Container } from './component/Container';
import { Greet } from './component/Greet';
import { Heading } from './component/Heading';
import { Input } from './component/Input';
import { Oscar } from './component/Oscar';
import { Status } from './component/Status';

function App() {
  return (
    <div className="App">
      {/* <Status status='loading' />
      <Heading>Placeholder text</Heading>
      <Oscar>
         <Heading>Oscar goes to Leonardo Dicpario ! </Heading>
      </Oscar>
      <Greet name ='GoodBai' isLoggedIn={true}/> */}

      {/* <Button
        handleClick={(e, id) =>{
          console.log('Button clicked',e, id)
        }} /> */}


        {/* <Input value='' handleChange={(e) => console.log(e)}  /> */}

        {/* <Container style={{border:'15px solid skyblue', padding:'5rem', background:'yellow'}} /> */}
        

    </div>
  );
}

export default App;
