"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Menu,
  X,
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  GraduationCap,
  Code,
  Brain,
  Heart,
  Lightbulb,
  Calendar,
  Award,
  Send,
  ChevronDown,
  Star,
  BookOpen,
  Cpu,
  Database,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "projects", "skills", "languages", "timeline", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projects = [
    {
      title: "Bus Tracking Management System",
      description:
        "Real-time bus tracking solution with GPS integration and user-friendly interface for efficient public transportation management.",
      tech: ["Java", "GPS Integration", "Database Management"],
      role: "Full Stack Developer",
    },
    {
      title: "Farm to Table AI Platform",
      description:
        "AI-powered platform connecting farmers directly with consumers, optimizing supply chain and reducing food waste.",
      tech: ["Python", "AI/ML", "Data Analytics"],
      role: "AI Developer",
    },
    {
      title: "Smart Jacket (Emotion Sensing Wearable)",
      description:
        "Innovative wearable technology that senses emotions and provides real-time feedback for mental health monitoring.",
      tech: ["IoT", "Sensors", "Machine Learning"],
      role: "Hardware & Software Integration",
    },
  ]

  const skills = {
    technical: [
      { name: "Java (Core)", level: 85 },
      { name: "Python (Core)", level: 80 },
      { name: "AI/ML", level: 75 },
      { name: "Data Science", level: 70 },
      { name: "Database Management", level: 75 },
    ],
    soft: [
      { name: "Time Management", level: 90 },
      { name: "Leadership", level: 85 },
      { name: "Communication", level: 88 },
      { name: "Critical Thinking", level: 92 },
    ],
  }

  const languages = [
    { name: "English", level: "Fluent", flag: "🇺🇸" },
    { name: "Tamil", level: "Fluent", flag: "🇮🇳" },
    { name: "French", level: "Basics", flag: "🇫🇷" },
  ]

  const timelineEvents = [
    {
      year: "2021",
      title: "SSLC Achievement",
      description: "Scored 91.4% in SSLC examinations",
      type: "education",
    },
    {
      year: "2023",
      title: "HSC Excellence",
      description: "Achieved 88% in HSC examinations",
      type: "education",
    },
    {
      year: "2024-2028",
      title: "B.Tech in AI & Data Science",
      description: "Currently pursuing with 9.17/10.0 GPA",
      type: "education",
    },
    {
      year: "Future",
      title: "AI Innovation",
      description: "Aspiring to contribute to meaningful AI projects",
      type: "goal",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Priyanka
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Education", "Projects", "Skills", "Languages", "Timeline", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-blue-100">
            <div className="px-4 py-2 space-y-2">
              {["Home", "About", "Education", "Projects", "Skills", "Languages", "Timeline", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Priyanka
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                "Inquisitive AI Enthusiast | Turning Ideas into Intelligent Solutions"
              </p>
              <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
                B.Tech AI & Data Science student with a passion for creating meaningful technology that bridges the gap
                between human needs and intelligent solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                <Code className="mr-2 h-5 w-5" />
                View My Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
              >
                <Heart className="mr-2 h-5 w-5" />
                Explore My Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          <div className="mt-16 text-center">
            <ChevronDown className="mx-auto h-8 w-8 text-blue-600 animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Inquisitive Explorer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by curiosity and powered by empathy, I'm on a mission to create AI solutions that make a real
              difference in people's lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why I Chose AI & Data Science</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                My journey into AI began with a simple question: "How can technology understand and respond to human
                emotions?" This curiosity led me to develop the Smart Jacket project, where I realized the incredible
                potential of AI to create empathetic solutions that truly serve humanity.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Every project I undertake is driven by the desire to bridge the gap between complex technology and
                real-world problems, making AI accessible and beneficial for everyone.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">9.17</div>
                  <div className="text-sm text-gray-600">Current GPA</div>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-lg">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">3+</div>
                  <div className="text-sm text-gray-600">Major Projects</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Values & Passions</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Lightbulb className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Curiosity</h4>
                    <p className="text-gray-600">Always asking "what if?" and "how can we make this better?"</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <Brain className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
                    <p className="text-gray-600">Turning creative ideas into practical, intelligent solutions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Empathy</h4>
                    <p className="text-gray-600">Creating technology that understands and serves human needs</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <div className="flex items-center space-x-4 text-gray-700">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Based in India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Learning Path</h2>
            <p className="text-xl text-gray-600">A journey of continuous growth and academic excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">SSLC</CardTitle>
                <CardDescription>Secondary School</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">91.4%</div>
                <p className="text-gray-600">Strong foundation in core subjects</p>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="text-indigo-900">HSC</CardTitle>
                <CardDescription>Higher Secondary</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">88%</div>
                <p className="text-gray-600">Specialized in Science stream</p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-900">B.Tech AI & DS</CardTitle>
                <CardDescription>2024-2028</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">9.17/10</div>
                <p className="text-gray-600">Current GPA in AI & Data Science</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Certifications & Continuous Learning
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Microsoft Learn</h4>
                <p className="text-sm text-gray-600">Cloud & AI Fundamentals</p>
              </div>

              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Brain className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">HP Life</h4>
                <p className="text-sm text-gray-600">AI for Beginners</p>
              </div>

              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <Code className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">TopSkilled</h4>
                <p className="text-sm text-gray-600">Python & Java</p>
              </div>

              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Star className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">LeetCode</h4>
                <p className="text-sm text-gray-600">50-day Badge Journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ideas Brought to Life</h2>
            <p className="text-xl text-gray-600">Showcasing hands-on experience and innovative problem-solving</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-gray-200">
                <CardHeader>
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-blue-100 text-blue-800">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Role:</h4>
                    <p className="text-gray-600 text-sm">{project.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Bring to the Table</h2>
            <p className="text-xl text-gray-600">A blend of technical expertise and essential soft skills</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Database className="h-6 w-6 text-blue-600 mr-3" />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.technical.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-3" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Heart className="h-6 w-6 text-pink-600 mr-3" />
                Soft Skills
              </h3>
              <div className="space-y-6">
                {skills.soft.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-3" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">I Speak More Than Code</h2>
            <p className="text-xl text-gray-600">Multilingual communication for global collaboration</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {languages.map((language, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-6xl mb-4">{language.flag}</div>
                  <CardTitle className="text-xl text-gray-900">{language.name}</CardTitle>
                  <CardDescription className="text-lg font-medium text-blue-600">{language.level}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Past • Present • Future</h2>
            <p className="text-xl text-gray-600">An interactive journey through my growth and aspirations</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <CardTitle className="text-lg text-blue-600">{event.year}</CardTitle>
                      </div>
                      <CardDescription className="text-xl font-semibold text-gray-900">{event.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{event.description}</p>
                      <Badge
                        variant="secondary"
                        className={`mt-2 ${
                          event.type === "education"
                            ? "bg-blue-100 text-blue-800"
                            : event.type === "project"
                              ? "bg-green-100 text-green-800"
                              : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {event.type}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-600">Ready to collaborate on the next big AI innovation?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">priyanka@example.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Connect on Social Media</h4>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-600 hover:bg-gray-50 bg-transparent"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea id="message" rows={4} placeholder="Tell me about your project or just say hello!" />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Priyanka
          </div>
          <p className="text-gray-400 mb-6">"Inquisitive AI Enthusiast | Turning Ideas into Intelligent Solutions"</p>
          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-gray-500 text-sm">© 2024 Priyanka. Built with passion for AI and innovation.</p>
        </div>
      </footer>
    </div>
  )
}
