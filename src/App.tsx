import './App.css';
// import { Button } from './component/Button';
import { Container } from './component/Container';
import { Box } from './component/context/Box';
import {ThemeContextProvider } from './component/context/ThemeContext';
import { UserContextProvider } from './component/context/UserContext';
import { Greet } from './component/Greet';
import { Heading } from './component/Heading';
import { Input } from './component/Input';
import { Oscar } from './component/Oscar';
import { Person } from './component/Person';
import { PersonList } from './component/PersonList';
// import { User } from './component/state/User';
import { User } from './component/context/User';
import { Status } from './component/Status';
import {Counter} from './component/class/Counter';
import {CustomButton} from './component/html/Button'

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

       {/* <ThemeContextProvider>
         <Box/>
       </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User/>
      </UserContextProvider> */}

      {/* <Counter message="The count value : " /> */}

      <CustomButton variant='primary' onClick = {()=> console.log('Clicked')}>
        Primary Button
      </CustomButton>

    </div>
  );
}

export default App;
