import { Task } from "@/app/api/tasks/route";
import SubTaskPage from "./subtask/page";

const getTasks = async () => {
  const response = await fetch('http://localhost:3000/api/tasks',{
    method: 'GET',
    cache: 'no-store',
  });

  return await response.json();
}

const TaskPage = async () => {
  const tasks = (await getTasks()).tasks as Task[];

  return (
    <>
      <div>TaskPage</div>
      <div>
        {tasks.map(task => (
          <div key={task.id}>{task.name}</div>
        ))}
      </div>
      <SubTaskPage />
    </>
  )
}

export default TaskPage