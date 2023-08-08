import { ChakraProvider, Heading, useColorMode } from "@chakra-ui/react";
import './App.css';
import React from "react";
import Darkbtn from "./components/Darkbtn";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
function App() {

  const [todos, setTodos] = useState(

    () => JSON.parse(localStorage.getItem('todos')) || []
    //getting todo stored in localstorage or getting empty obj if not stroed
  );
  useEffect(
    () => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]
  )//adding todos to localstorage todos every time todos obj gat change
  function deleteBtn(id) {
    const newTodo = todos.filter(
      h => {
        return h.id !== id;
        //if id match then no return if not match then return
      }//so only unmatched case will be returned
    )
    setTodos(newTodo);

  }
  function addTodo(todo) {//this is for adding in list this will be called as props from addTodo component
    setTodos([...todos, todo]);//here we are taking todo as value 
    //and adding to todos
  }
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ChakraProvider>
      <Darkbtn colorMode={colorMode} toggleColorMode={toggleColorMode} />
      <VStack p={4}>
        {/*
      <IconButton icon={<FaSun />} isRound='true' size='lg' alignSelf='flex-end' />
        */}
        <Heading
          mb='8' fontWeight='extrabold'
          size='2xl' bgGradient='linear(to-r, pink.300, pink.500)'
          bgClip='text'
        >
          MY LIST
        </Heading>
        <TodoList todos={todos} deleteBtn={deleteBtn} />
        <AddTodo addTodo={addTodo} />
      </VStack>


    </ChakraProvider>
  );
}

export default App;
