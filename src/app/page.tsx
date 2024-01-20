import { MdDownload, MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaLinkedin, FaGithub, FaLaravel } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader} from "@/components/ui/card"
import Image from 'next/image'

export default function Home() {
  const projects = [
    {
      imageSrc: "/project1.png",
      title: "Project 1",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta consequuntur consectetur at beatae aspernatur veniam.",
      icons: [
        { icon: FaGithub, className: "h-7 w-7 hover:text-neutral-200" },
        { icon: SiNextdotjs, className: "h-7 w-7 hover:text-neutral-200" },
        { icon: SiTailwindcss, className: "h-7 w-7 hover:text-neutral-200" },
      ],
    },
    {
      imageSrc: "/project1.png",
      title: "Project 2",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta consequuntur consectetur at beatae aspernatur veniam.",
      icons: [
        { icon: FaGithub, className: "h-7 w-7 hover:text-neutral-200" },
        { icon: SiNextdotjs, className: "h-7 w-7 hover:text-neutral-200" },
        { icon: SiTailwindcss, className: "h-7 w-7 hover:text-neutral-200" },
        { icon: FaLaravel, className: "h-7 w-7 hover:text-neutral-200" },
      ],
    },
    {
      imageSrc: "/project1.png",
      title: "Project 3",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta consequuntur consectetur at beatae aspernatur veniam.",
      icons: [
        { icon: FaGithub, className: "h-7 w-7 hover:text-neutral-200" },
        { icon: SiTailwindcss, className: "h-7 w-7 hover:text-neutral-200" },
        { icon: FaLaravel, className: "h-7 w-7 hover:text-neutral-200" },
      ],
    },
  ];

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
        <MdKeyboardDoubleArrowDown className="h-[2rem] w-[2rem] text-white text-center absolute bottom-10 animate-bounce"/>
      </section>

      <section className="flex min-h-screen flex-col justify-center items-center py-8 bg-neutral-900">
        <main className="max-w-5xl w-full flex flex-col gap-y-10 font-mono">
          <div className="flex flex-col text-center gap-3">
            <h1 className="text-3xl text-white">My Projects</h1>
            <p className="text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas, quis assumenda velit tempore ducimus!</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <Card key={index} className="border-none shadow-sm shadow-sky-600 bg-neutral-800">
                <CardHeader>
                  <Image
                    src={project.imageSrc}
                    width={700}
                    height={700}
                    alt="Picture of the author"
                    className="rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
                  />
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-white text-xl">{project.title}</p>
                  <CardDescription className="text-neutral-400">{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <div className="text-white flex gap-2">
                  {project.icons.map((iconObject, index) => (
                    <iconObject.icon key={index} className={iconObject.className} />
                  ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </section>
    </>
  )
}
