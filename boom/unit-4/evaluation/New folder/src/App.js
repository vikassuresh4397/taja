import './App.css';
import { Button, Stack } from "@chakra-ui/react";
import Form from './Components/Form/Form';
import Dashboard from './Components/Dashboard/Dashboard';
import { useState } from 'react';


function App() {
  const [showForm, setShowForm] = useState(false);
  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <Stack>
        <Button
          width="200px"
          margin="auto"
          className="toggleForm"
          onClick={handleToggleForm}
        >
          Toggle Form
        </Button>
        {showForm ? <Form /> : <Dashboard />}
      </Stack>
    </div>
  );
}

export default App;
