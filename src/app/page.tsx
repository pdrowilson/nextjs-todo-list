import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany()
}

async function togleTodo(id:string, complete:boolean) {
  "use server"

  await prisma.todo.update({where: {id}, data: {complete}})
}
async function deleteTodo(id:string) {
  "use server"

  await prisma.todo.delete({where: {id}})
}

export default async function Home() {
  // fake add todo item
  // await prisma.todo.create({data: {title:"test", complete: false}})
  
  const todos =  await getTodos()
  
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2x1">Todos</h1>
        <Link 
          className="boder border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" 
          href={"/new"}
        >
          Add a todo
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map(todo => {
          return (
            <TodoItem key={todo.id} {...todo} togleTodo={togleTodo} deleteTodo={deleteTodo}/>
          );
        })}
      </ul>
    </>
  )
}