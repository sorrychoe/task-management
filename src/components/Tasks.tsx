import { Filter } from "./Filter";
import { useState } from "react";
import { Task } from "./Task";
import React from "react";

export function Tasks(): JSX.Element {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Project Meeting", time: "9 am to 11 am" }
  ]);

  const [ filter, setFilter ] = useState(0)

  return <div>
    <Filter index={filter} onFilterChange={function(index) { setFilter(index) }} />
    {tasks.map((task) => <Task key={task.id} title={task.title} time={task.time} />)}
  </div>;
}