import Link from "next/link";

export default function Page() {
    return (
        <>
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2x1">New</h1>
            </header>
            <form className="flex flex-col gap-2">
                <input 
                    type="text"
                    name="title"
                    className="border border-slate-400 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                />
                <div className="flex gap-1 justify-end">
                    <Link
                        className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" 
                        href="..">
                        Cancel
                    </Link>
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