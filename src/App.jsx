import './App.css'
import Header from './My Components/Header';
import { Todos } from './My Components/Todos';
import { Footer } from './My Components/Footer';
import { AddTodo } from './My Components/AddTodo';
// import Video from './Video';
import React, { useState } from 'react';

function App() {

  // const onDone = (todo) => {
  //   setTodos(todos.map(t =>
  //     t === todo ? { ...t, done: true } : t
  //   ));
  // }

  const onDelete = (todo) => {

    setTodos(todos.filter((e) => {
      return e !== todo
    }))
  }

  const addTodo = (title, desc) => {
    const sno = todos.length > 0 ? todos[0].sno + 1 : 1;

    const myTodo = {
      title: title,
      desc: desc,
      sno: sno
    };

    setTodos([myTodo, ...todos]); //Adds the new task at sno 0
    console.log(myTodo);
  };


  // const addTodo = (title, desc) => {     adds task as sno +1
  //   let sno;
  //   if (todos.length == 0) {
  //     sno = 0;
  //   } else {
  //     sno = todos[todos.length - 1].sno + 1;
  //   }

  //   const myTodo = {
  //     title: title,
  //     desc: desc,
  //     sno: sno
  //   }
  //   setTodos([...todos, myTodo])
  //   console.log(myTodo);
  // }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Demo Task 1",
      desc: "desc for task 1"
    },
    {
      sno: 2,
      title: "Demo Task 2",
      desc: "desc for task 2"
    },
    {
      sno: 3,
      title: "Demo Task 3",
      desc: "desc for task 3"
    }
  ])

  return (
    <>
      <Header title="My 1st app" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
      {/* <p>Hello</p>
<Video banner="video1" bgColor= "blue"  channel="Channel1" views="9999" ></Video>
<Video banner="video2"  bgColor="#a07979d7"  channel="Channel2" views="999"></Video>
 <Greeting name="Rai"/>
 <Greeting name="Nemi" /> */}
    </>
  )
}

export default App;
