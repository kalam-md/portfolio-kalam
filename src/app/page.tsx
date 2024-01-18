import { Button } from "@/components/ui/button";
import { MdDownload } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center py-8 bg-neutral-900">
      <header className="max-w-5xl w-full gap-5 font-mono text-sm flex justify-between">
        <div className="">
          <div className="text-white flex flex-col gap-2">
            <h1 className="text-3xl">Hi There👋🏻</h1>
            <h3>I am Kalam Mahardhika as <span className="text-emerald-400">Computer Science Student & Software Developer</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, incidunt error? Ad, harum quis ab voluptas repellat quos architecto voluptatibus labore delectus. Distinctio velit tempore odit et quas ex totam labore odio! Deleniti ducimus qui assumenda iste, inventore quo commodi.</p>
          </div>
          <Button className="mt-4" variant="outline">
            <MdDownload className="h-4 w-4 mr-2" /> Download CV
          </Button>
        </div>
      </header>
    </div>
  )
}
