"use client"

type TodoItemProps ={
	id: string
	title: string
	complete: boolean
	togleTodo: (id: string, complete: boolean) => void
	deleteTodo: (id: string) => void
}
export default function TodoItem({id, title, complete, togleTodo, deleteTodo}: TodoItemProps) {
	return (
		<div 
			className="flex justify-between items-center p-3 rounded  hover:bg-slate-900/[.4]">
			<li className="flex gap-2 items-center">
				<input 
					id={id} 
					type="checkbox" 
					className="cursor-pointer peer"
					defaultChecked={complete}
					onChange={e => togleTodo(id, e.target.checked)}
				/>
				<label htmlFor={id} className=" cursor-pointer peer-checked:line-through peer-checked:text-slate-500 ">
					{title}
				</label>
			</li>
			<button 
				className="border border-slate-300 text-slate-300 text-xs my-1 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" 
				onClick={e => deleteTodo(id)}
				>
				Delete
			</button>
		</div>
	)
}