import './App.css';
import { Button } from './component/Button';
import { Container } from './component/Container';
import { Greet } from './component/Greet';
import { Heading } from './component/Heading';
import { Input } from './component/Input';
import { Oscar } from './component/Oscar';
import { Person } from './component/Person';
import { PersonList } from './component/PersonList';
import { User } from './component/state/User';
import { Status } from './component/Status';

function App() {

  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]


  return (
    <div className="App">

     {/* <Person name = {personName}/> */}
     {/* <PersonList names = {nameList} /> */}


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
