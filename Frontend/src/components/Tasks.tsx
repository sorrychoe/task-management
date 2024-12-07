import { Filter } from "./Filter";
import { useState, useEffect } from "react";
import { Task } from "./Task";
import React from "react";

type TaskType = {
  id: number;
  title: string;
  time: string;
  description?: string;
};

export function Tasks(): JSX.Element {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(savedTasks);
  }, []);

  return <div>
    <Filter index={filter} onFilterChange={function(index) { setFilter(index) }} />
    {tasks.map((task) => <Task key={task.id} title={task.title} time={task.time} />)}
  </div>;
}
