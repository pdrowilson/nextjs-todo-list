import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data:FormData) {
  "use server"
   
  const title = data.get("title")?.valueOf()

  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid title!")
  }
  
  await prisma.todo.create({data: {title, complete: false }})

  redirect("/")
}

export default function Page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2x1">Create a todo</h1>
        <Link 
          className="boder border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" 
          href={".."}
        >
          Back to Todos
        </Link>
      </header>
      <form action={createTodo} className="flex flex-col gap-2">
        <input 
          type="text"
          name="title"
          className="border border-slate-400 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <button 
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" 
            type="submit">
            Create
          </button>
        </div>
      </form>
    </>
  )
}