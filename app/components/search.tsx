import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"

export function SearchBox() {
  return (
    <div className="relative">
      <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <Input
        type="search"
        placeholder="Search_"
        className="w-64 pl-8 text-sm"
      />
    </div>
  )
}

