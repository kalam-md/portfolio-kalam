import { MdDownload } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen flex-col justify-center items-center py-8 bg-neutral-900">
        <header className="max-w-5xl w-full gap-5 font-mono">
          <div className="flex flex-col items-center">
            <div className="text-white flex flex-col gap-2 text-center">
              <h1 className="text-3xl">Hi There👋🏻</h1>
              <h3>I am Kalam Mahardhika as <span className="text-sky-400">Computer Science Student & Software Developer</span></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, incidunt error? Ad, harum quis ab voluptas repellat quos architecto voluptatibus labore delectus. Distinctio velit tempore odit et quas ex totam labore odio! Deleniti ducimus qui assumenda iste, inventore quo commodi.</p>
            </div>
            <div className=" flex gap-4">
              <Button className="mt-4" variant="outline">
                <MdDownload className="h-4 w-4 mr-2" /> Download CV
              </Button>
              <Button className="mt-4 bg-sky-600 hover:bg-sky-700">
                <FaLinkedin className="h-4 w-4 mr-2" /> Go to Linkedin
              </Button>
            </div>
          </div>
        </header>
      </section>

      <section className="flex min-h-screen flex-col justify-center items-center py-8 bg-neutral-900">
        <main className="max-w-5xl w-full gap-5 font-mono">
          <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <Image
                src="/project1.png"
                width={700}
                height={700}
                alt="Picture of the author"
              />
            </CardHeader>
            <CardContent>
              <p className="font-medium">Project 1</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Image
                src="/project1.png"
                width={700}
                height={700}
                alt="Picture of the author"
              />
            </CardHeader>
            <CardContent>
              <p className="font-medium">Project 1</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Image
                src="/project1.png"
                width={700}
                height={700}
                alt="Picture of the author"
              />
            </CardHeader>
            <CardContent>
              <p className="font-medium">Project 1</p>
            </CardContent>
          </Card>
          </div>
        </main>
      </section>
    </>
  )
}
