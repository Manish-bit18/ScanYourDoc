import { BookOpen } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
      <div className="flex items-center gap-2">
        <BookOpen size={30} className="text-blue-600" />
        <h1 className="text-xl font-semibold text-black">ScanYourDoc</h1>
      </div>

       <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 md:px-5 md:text-base">
        Scan Documents
      </button>
    </nav>
  )
}