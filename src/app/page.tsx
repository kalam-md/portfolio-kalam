import { MdDownload, MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaLinkedin, FaGithub, FaLaravel } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import Image from 'next/image'

export default function Home() {
  const projects = [
    {
      imageSrc: "/project1.png",
      title: "Project 1",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta consequuntur consectetur at beatae aspernatur veniam.",
      icons: [
        { icon: FaGithub, className: "h-7 w-7 hover:text-neutral-700" },
        { icon: SiNextdotjs, className: "h-7 w-7 hover:text-neutral-700" },
        { icon: SiTailwindcss, className: "h-7 w-7 hover:text-neutral-700" },
      ],
    },
    {
      imageSrc: "/project1.png",
      title: "Project 2",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta consequuntur consectetur at beatae aspernatur veniam.",
      icons: [
        { icon: FaGithub, className: "h-7 w-7 hover:text-neutral-700" },
        { icon: SiNextdotjs, className: "h-7 w-7 hover:text-neutral-700" },
        { icon: SiTailwindcss, className: "h-7 w-7 hover:text-neutral-700" },
        { icon: FaLaravel, className: "h-7 w-7 hover:text-neutral-700" },
      ],
    },
    {
      imageSrc: "/project1.png",
      title: "Project 3",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta consequuntur consectetur at beatae aspernatur veniam.",
      icons: [
        { icon: FaGithub, className: "h-7 w-7 hover:text-neutral-700" },
        { icon: SiTailwindcss, className: "h-7 w-7 hover:text-neutral-700" },
        { icon: FaLaravel, className: "h-7 w-7 hover:text-neutral-700" },
      ],
    },
  ]

  const experiences = [
    {
      title: "Front-End Developer",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo laborum impedit fugiat tempore aliquam, reprehenderit saepe iste omnis ipsa unde modi, eveniet cumque accusamus tempora dicta quas vel earum aliquid!",
      duration: "6 Month Internship",
      details: [
        { detail: "Create new features for the finplan.id website using API, Vue JS and Sass such as: stock broker, admin management dashboard, customer service integration." },
        { detail: "Collaborate with the application development team and stakeholders for website needs." },
        { detail: "Participated in sprint planning up to sprint retrospective in the website development stage." },
        { detail: "Attend weekly and monthly sprint meetings regarding website development progress." },
      ],
    },
    {
      title: "Front-End Web Class Manager",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo laborum impedit fugiat tempore aliquam, reprehenderit saepe iste omnis ipsa unde modi, eveniet cumque accusamus tempora dicta quas vel earum aliquid!",
      duration: "7 Month Internship",
      details: [
        { detail: "Prepare presentation needs, pretest-posttest, feedback forms, modules, online materials, indicators assessments, assessment sheets, monitoring and coordination sheets, and LMS." },
        { detail: "Coordinate daily class implementation and guide 17 members throughout the learning program (Onboarding, Learning journey progress, weekly assignments, monthly projects and final exams)." },
        { detail: "Collaborate with project managers, mentors and learning designers for continuity and smoothness bootcamp for the next 6 months." },
      ],
    },
    {
      title: "Bangkit Academy 2023 Cohort - Cloud Computing",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo laborum impedit fugiat tempore aliquam, reprehenderit saepe iste omnis ipsa unde modi, eveniet cumque accusamus tempora dicta quas vel earum aliquid!",
      duration: "6 Month Internship",
      details: [
        { detail: "Learn about the basics of Web Development Programming such as HTML, CSS and Javascript." },
        { detail: "Learn about the basics of Cloud Computing on Google Cloud." },
        { detail: "Create a Capstone Project, namely the Pemasokita application, namely a plant quality scanning application using React Js, Tensorflow Js, Kotlin and Google Cloud." },
      ],
    },
  ]

  return (
    <>
      <section className="flex min-h-screen flex-col justify-center items-center py-8 bg-neutral-100">
        <header className="max-w-5xl w-full gap-5 font-body">
          <div className="flex flex-col gap-8">
            {/* <div className="flex flex-col text-center">
              <h1 className="text-3xl font-bold text-neutral-700">Hi I&apos;am Kalam Mahardhika</h1>
              <h3 className="text-lg font-medium text-neutral-500">Software Developer Enthusiast</h3>
            </div> */}
            <div className="flex items-center my-10">
              <div className="w-[70%]">
                <h3 className="text-2xl font-medium text-neutral-500">Hi There👋🏻</h3>
                <h1 className="text-[3rem] font-bold text-neutral-700">I&apos;am Kalam Mahardhika</h1>
                <h1 className="text-[3rem] font-bold text-neutral-700">Software Engineer</h1>
              </div>
              <div className="w-[30%]">
                <p className="text-sm text-neutral-500 tracking-wide leading-loose">&#34;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus sapiente exercitationem deserunt eos omnis pariatur quisquam commodi, libero alias quaerat.&#34;</p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {experiences.map((experience, index) => (
                <Card key={index} className="border-none shadow-md shadow-neutral-300 bg-neutral-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                  <CardHeader className="flex flex-col items-start gap-4 space-y-0">
                    <div className="space-y-1">
                      <p className="font-medium text-neutral-700 text-xl">{ experience.title }</p>
                      <CardDescription className="text-neutral-500">
                        { experience.description }
                      </CardDescription>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-neutral-700">Click here for more details</AccordionTrigger>
                          <AccordionContent className="text-neutral-500">
                            <ul className="list-disc ml-5">
                              { experience.details.map((detail, index) => (
                                <li key={index} className="text-sm">{ detail.detail }</li>
                              )) }
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4 text-sm text-muted-foreground text-neutral-700">
                      <p>
                        { experience.duration }
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="border-none shadow-md shadow-neutral-300 bg-neutral-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                  <CardHeader>
                    <Image
                      src={project.imageSrc}
                      width={700}
                      height={700}
                      alt="Picture of the author"
                      className="rounded-sm shadow-neutral-300 shadow-sm"
                    />
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-neutral-700 text-xl">{project.title}</p>
                    <CardDescription className="text-neutral-500">{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <div className="text-neutral-500 flex gap-2">
                    {project.icons.map((iconObject, index) => (
                      <iconObject.icon key={index} className={iconObject.className} />
                    ))}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </header>
      </section>
    </>
  )
}
