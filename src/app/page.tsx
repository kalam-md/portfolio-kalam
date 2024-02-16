"use client";

import { MdDownload, MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaLaravel, FaMapMarkedAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from "framer-motion"

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
      description: "I took part in an internship that I got information about on Linkedin in the position of frontend website developer, here I learned and worked using Vue JS and Scrum development methodology.",
      duration: "6 Month Internship at Finplan.ID",
      details: [
        { detail: "Create new features for the finplan.id website using API, Vue JS and Sass such as: stock broker, admin management dashboard, customer service integration." },
        { detail: "Collaborate with the application development team and stakeholders for website needs." },
        { detail: "Participated in sprint planning up to sprint retrospective in the website development stage." },
        { detail: "Attend weekly and monthly sprint meetings regarding website development progress." },
      ],
    },
    {
      title: "Front-End Web Class Manager",
      description: "I took part in this internship not as a developer, but as a mentor or moderator who guides the continuation of the web frontend bootcamp class for 6 months.",
      duration: "7 Month Internship at Dibimbing.ID",
      details: [
        { detail: "Prepare presentation needs, pretest-posttest, feedback forms, modules, online materials, indicators assessments, assessment sheets, monitoring and coordination sheets, and LMS." },
        { detail: "Coordinate daily class implementation and guide 17 members throughout the learning program (Onboarding, Learning journey progress, weekly assignments, monthly projects and final exams)." },
        { detail: "Collaborate with project managers, mentors and learning designers for continuity and smoothness bootcamp for the next 6 months." },
      ],
    },
    {
      title: "Bangkit Academy 2023 Cohort - Cloud Computing",
      description: "I took part in an internship or independent study activity at the Merdeka Campus, taking the cloud computing learning path for 6 months.",
      duration: "6 Month Internship at Bangkit Academy 2023",
      details: [
        { detail: "Learn about the basics of Web Development Programming such as HTML, CSS and Javascript." },
        { detail: "Learn about the basics of Cloud Computing on Google Cloud." },
        { detail: "Create a Capstone Project, namely the Pemasokita application, namely a plant quality scanning application using React Js, Tensorflow Js, Kotlin and Google Cloud." },
      ],
    },
  ]

  const contacts = [
    {
      title: "Location",
      description: "Bandung, Indonesia",
      icon: FaMapMarkedAlt
    },
    {
      title: "Mail",
      description: "kalammahardhika1002@gmail.com",
      icon: MdOutlineEmail
    },
    {
      title: "Linkedin",
      description: "Kalam Mahardhika",
      icon: FaLinkedin
    },
  ]

  const slideUp = {
    init: {
      y: "100%"
    },
    open: (i: any) => ({
      y: "0%", 
      transition: {duration: 1, delay: 0.2 * i}
    })
  }

  const scrollUp = {
    init: {
      opacity: 0,
      y: "100%"
    },
    show: (i: any) => ({
      opacity: 1, 
      y: "0%", 
      transition: {duration: 1, delay: 0.2 * i}
    })
  }

  return (
    <>
      <Head>
        <title>Welcome to my site</title>
        <meta property="og:title" content="Welcome to my site" key="title" />
      </Head>
      
      <section className="flex min-h-screen flex-col justify-center items-center py-8 bg-neutral-100 px-4 sm:px-0">
        <header className="max-w-5xl w-full gap-5 font-body">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 items-center my-10">
              <div className="sm:w-[70%]">
                <div className="overflow-hidden">
                  <motion.h3
                    variants={slideUp}
                    initial={"init"}
                    animate={"open"}
                    custom={1}
                    className="text-lg leading-8 font-medium text-neutral-600 translate-y-[100%]">Hi There👋🏻</motion.h3>
                </div>
                <div className="overflow-hidden">
                  <motion.h1
                    variants={slideUp}
                    initial={"init"}
                    animate={"open"}
                    custom={1}
                    className="text-[3rem] font-bold tracking-tight text-neutral-700 translate-y-[100%]">I&apos;am Kalam Mahardhika</motion.h1>
                </div>
                <div className="overflow-hidden">
                  <motion.h1
                    variants={slideUp}
                    initial={"init"}
                    animate={"open"}
                    custom={2}
                    className="text-[3rem] font-bold tracking-tight text-neutral-700 translate-y-[100%]">Software Engineer</motion.h1>
                </div>

                <div className="mt-5 flex gap-2 overflow-hidden">
                  <Link href="https://drive.google.com/file/d/127XE1YIkCm53vc17tKpV8zd_8UUnZ079/view?usp=sharing" target="_blank">
                    <motion.div
                      variants={slideUp}
                      initial={"init"}
                      animate={"open"}
                      custom={3} 
                      className="translate-y-[100%]">
                      <Button>
                        <MdDownload className="mr-2 h-4 w-4" /> Download CV
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="https://www.linkedin.com/in/kalammd/" target="_blank">
                    <motion.div
                      variants={slideUp}
                      initial={"init"}
                      animate={"open"}
                      custom={4} 
                      className="translate-y-[100%]">
                      <Button variant="linkedin">
                        <FaLinkedin className="mr-2 h-4 w-4" /> Linkedin
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </div>
              <div className="sm:w-[30%] overflow-hidden">
                <motion.p
                  variants={slideUp}
                  initial={"init"}
                  animate={"open"}
                  custom={2} 
                  className="text-sm text-neutral-500 tracking-wide leading-loose translate-y-[100%]">&#34;Solve problems not only with coding, but with other problems too, just ignore the quote haha.&#34;</motion.p>
              </div>
            </div>

            <div className="flex flex-col gap-8 border-t border-neutral-200 py-10">
              <motion.div 
                variants={scrollUp}
                initial={"init"}
                custom={1}
                whileInView={"show"}
                className="max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-neutral-700 sm:text-4xl">My Experience</h2>
                <p className="mt-2 text-lg leading-8 text-neutral-600">
                  Learn how to grow my career at work.
                </p>
              </motion.div>
              {experiences.map((experience, index) => (
                <motion.div 
                  variants={scrollUp}
                  initial={"init"}
                  custom={index}
                  whileInView={"show"}
                  className="translate-y-[100%]" 
                  key={index}>
                  <Card className="border-none shadow-md shadow-neutral-300 bg-neutral-50">
                    <CardHeader className="flex flex-col items-start gap-4 space-y-0">
                      <div className="space-y-1">
                        <p className="font-medium text-neutral-700 text-xl">{experience.title}</p>
                        <CardDescription className="text-neutral-500">
                          {experience.description}
                        </CardDescription>

                        <Accordion type="single" collapsible>
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="text-neutral-700">Click here for more details</AccordionTrigger>
                            <AccordionContent className="text-neutral-500">
                              <ul className="list-disc ml-5">
                                {experience.details.map((detail, index) => (
                                  <li key={index} className="text-sm">{detail.detail}</li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex space-x-4 text-sm text-muted-foreground text-neutral-700">
                        <p>
                          {experience.duration}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-8 border-t border-neutral-200 py-10">
              <motion.div 
                variants={scrollUp}
                initial={"init"}
                custom={1}
                whileInView={"show"}
                className="max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-neutral-700 sm:text-4xl">My Project</h2>
                <p className="mt-2 text-lg leading-8 text-neutral-600">
                  Create this things for grow up my skill.
                </p>
              </motion.div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
                {projects.map((project, index) => (
                  <motion.div 
                    variants={scrollUp}
                    initial={"init"}
                    custom={index}
                    whileInView={"show"}
                    className="translate-y-[100%]"  
                    key={index}>
                    <Card className="border-none shadow-md shadow-neutral-300 bg-neutral-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
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
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8 border-t border-neutral-200 py-10">
              <div className="lg:mx-0 overflow-hidden">
                <motion.h2
                  variants={slideUp}
                  initial={"init"}
                  animate={"open"}
                  custom={3} 
                  className="text-3xl font-bold tracking-tight text-neutral-700 sm:text-4xl translate-y-[100%]">Dont be shy. Hit me up😎</motion.h2>
                <motion.p 
                  variants={slideUp}
                  initial={"init"}
                  animate={"open"}
                  custom={3} 
                  className="mt-2 text-lg leading-8 text-neutral-600 translate-y-[100%]">
                  I&apos;am currently looking for new opportunities, my inbox alwas open. Whether you have question or just want to say hi, i&apos;ll try my best to get back to you!.
                </motion.p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {contacts.map((contact, index) => (
                  <motion.div 
                    variants={scrollUp}
                    initial={"init"}
                    custom={index}
                    whileInView={"show"}
                    key={index} 
                    className="flex items-center gap-4 translate-y-[100%]">
                    <Link href="#" className="flex border shadow-md border-neutral-300 bg-neutral-50 p-4 rounded-full">
                      <contact.icon className="h-8 w-8" />
                    </Link>
                    <div className="flex flex-col">
                      <p className="text-neutral-700 font-semibold">{contact.title}</p>
                      <p className="text-sm">{contact.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  )
}
