import { MdDownload, MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaLinkedin, FaGithub, FaLaravel } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
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
      {/* <section className="flex min-h-screen flex-col justify-center items-center py-8 bg-neutral-900 sm:px-0 px-4">
        <header className="max-w-5xl w-full gap-5 font-mono">
          <div className="flex flex-col items-center">
            <div className="text-white flex flex-col gap-2 text-center">
              <h1 className="text-3xl">Hi There👋🏻</h1>
              <h3>I am Kalam Mahardhika as <span className="text-sky-400">Computer Science Student & Software Developer</span></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, incidunt error? Ad, harum quis ab voluptas repellat quos architecto voluptatibus labore delectus. Distinctio velit tempore odit et quas ex totam labore odio! Deleniti ducimus qui assumenda iste, inventore quo commodi.</p>
            </div>
            <div className="flex gap-4">
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
      </section> */}

      <section className="flex min-h-screen flex-col  items-center py-8 bg-neutral-900 sm:px-0 px-4">
        <header className="max-w-5xl w-full flex flex-col gap-5 font-mono mt-10">
          <h1 className="text-4xl text-white text-center">Hi There I am Kalam Mahardhika👋🏻</h1>
          <div className="relative w-full h-[45vh] rounded-sm flex justify-center">
            <Image
              src="/hero.jpg"
              width={700}
              height={700}
              alt="Hero"
              className="rounded-sm w-full h-full bg-center object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-700 opacity-85 rounded-sm"></div>
          </div>
          <h1 className="text-md text-white text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minus repellat laudantium ipsum porro dolores quisquam quibusdam omnis quia velit ullam animi autem inventore delectus numquam rem eos, nihil cumque!</h1>
        </header>
        <MdKeyboardDoubleArrowDown className="h-[2rem] w-[2rem] text-white text-center absolute bottom-10 animate-bounce"/>
      </section>

      <section className="flex min-h-screen flex-col justify-center items-center py-8 bg-neutral-900 sm:px-0 px-4">
        <main className="max-w-5xl w-full flex flex-col gap-y-10 font-mono">
          <div className="flex flex-col text-center gap-3">
            <h1 className="text-3xl text-white">My Projects</h1>
            <p className="text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas, quis assumenda velit tempore ducimus!</p>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
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

      <section className="flex min-h-screen flex-col justify-center items-center py-8 bg-neutral-900 sm:px-0 px-4">
        <main className="max-w-5xl w-full flex flex-col gap-y-10 font-mono">
          <div className="flex flex-col text-center gap-3">
            <h1 className="text-3xl text-white">My Experience</h1>
            <p className="text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas, quis assumenda velit tempore ducimus!</p>
          </div>
          <div className="flex flex-col gap-4">
            <Card className="border-none shadow-sm shadow-sky-600 bg-neutral-800">
              <CardHeader className="flex flex-col items-start gap-4 space-y-0">
                <div className="space-y-1">
                  <p className="font-medium text-white text-xl">Intern 1</p>
                  <CardDescription className="text-neutral-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corporis eaque error minima hic molestias neque magni vitae nihil unde, quia odio harum laudantium aliquid ipsa repellat illo maxime incidunt eligendi eveniet quae sed consequuntur sint quis. Odit, vero amet!
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 text-sm text-muted-foreground text-white">
                  <p>
                    6 Month Internship
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </section>

      <section className="flex min-h-screen flex-col justify-center items-center py-8 bg-neutral-900 sm:px-0 px-4">
        <main className="max-w-5xl w-full flex flex-col gap-y-10 font-mono">
          <div className="flex flex-col text-center gap-3">
            <h1 className="text-3xl text-white">My Galery</h1>
            <p className="text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas, quis assumenda velit tempore ducimus!</p>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
            <Image
              src="/exa1.jpg"
              width={700}
              height={700}
              alt="Hero"
              className="rounded-sm w-[20rem] aspect-[3/4] bg-cover object-cover hover:opacity-80 hover:scale-105 hover:-translate-y-1 transition ease-in-out delay-150 duration-300"
            />
            <Image
              src="/exa1.jpg"
              width={700}
              height={700}
              alt="Hero"
              className="rounded-sm w-[20rem] aspect-[3/4] bg-cover object-cover hover:opacity-80 hover:scale-105 hover:-translate-y-1 transition ease-in-out delay-150 duration-300"
            />
            <Image
              src="/exa1.jpg"
              width={700}
              height={700}
              alt="Hero"
              className="rounded-sm w-[20rem] aspect-[3/4] bg-cover object-cover hover:opacity-80 hover:scale-105 hover:-translate-y-1 transition ease-in-out delay-150 duration-300"
            />
          </div>
        </main>
      </section>

      <section className="flex flex-col justify-center items-center py-8 bg-neutral-900 sm:px-0 px-4">
        <p className="text-white font-mono">Made with random inspiration🐲</p>
      </section>
    </>
  )
}
