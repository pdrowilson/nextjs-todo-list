import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany()
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
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map(todo => {
          return (
            <TodoItem key={todo.id} {...todo} />
          );
        })}
      </ul>
    </>
  )
}