'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Send, Bot, User, Trash2, Clock, Download, ExternalLink, ThumbsUp, ThumbsDown, Square, Play } from 'lucide-react'

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
  reactions?: { thumbsUp: number; thumbsDown: number }
}

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hello! I'm Shua, Josh's AI assistant. I have comprehensive knowledge about his platform engineering expertise, professional achievements, and personal interests. Ask me about his technical skills, career impact, projects, or anything else you'd like to know!",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [typingText, setTypingText] = useState('')
  const [showContactPrompt, setShowContactPrompt] = useState(false)
  const [isChatStopped, setIsChatStopped] = useState(false)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isLoading, isTyping])

  // Cleanup timeouts on component unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current)
      }
    }
  }, [])

  const clearChat = () => {
    // Clear any running timeouts
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
      typingTimeoutRef.current = null
    }
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current)
      loadingTimeoutRef.current = null
    }
    
    setMessages([
      {
        id: Date.now(),
        text: "👋 Hello! I'm Shua, Josh's AI assistant. I have comprehensive knowledge about his platform engineering expertise, professional achievements, and personal interests. Ask me about his technical skills, career impact, projects, or anything else you'd like to know!",
        isUser: false,
        timestamp: new Date()
      }
    ])
    setIsChatStopped(false)
    setShowContactPrompt(false)
    setIsLoading(false)
    setIsTyping(false)
    setTypingText('')
  }

  const toggleChat = () => {
    if (!isChatStopped) {
      // Pausing chat - clear any running timeouts
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
        typingTimeoutRef.current = null
      }
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current)
        loadingTimeoutRef.current = null
      }
      setIsTyping(false)
      setTypingText('')
      setIsLoading(false)
    }
    setIsChatStopped(!isChatStopped)
  }

  const handleSend = async () => {
    if (!input.trim() || isChatStopped || isLoading || isTyping) return

    // Clear any existing timeouts
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
      typingTimeoutRef.current = null
    }
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current)
      loadingTimeoutRef.current = null
    }

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Enhanced AI response based on input with typing animation
    loadingTimeoutRef.current = setTimeout(() => {
      const aiResponse = generateAIResponse(input)
      setIsLoading(false)
      typeResponse(aiResponse)
    }, 1000)
  }

  const typeResponse = (text: string) => {
    // Clear any existing typing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
      typingTimeoutRef.current = null
    }
    
    setIsTyping(true)
    setTypingText('')
    let index = 0
    
    // More realistic typing speed with slight variations
    const getTypingSpeed = () => {
      const baseSpeed = 25
      const variation = Math.random() * 15 + 5 // 5-20ms variation
      return baseSpeed + variation
    }
    
    const typeNextChar = () => {
      // Check if chat is stopped before continuing
      if (isChatStopped) {
        setIsTyping(false)
        setTypingText('')
        return
      }
      
      if (index < text.length) {
        setTypingText(text.substring(0, index + 1))
        index++
        
        // Add slight pause for punctuation (like ChatGPT)
        const currentChar = text[index - 1]
        const pauseTime = ['.', '!', '?', ','].includes(currentChar) ? 150 : 0
        
        typingTimeoutRef.current = setTimeout(() => {
          typeNextChar()
        }, getTypingSpeed() + pauseTime)
      } else {
        setIsTyping(false)
        setTypingText('')
        // Add the complete message to messages
        const aiMessage: Message = {
          id: Date.now() + 1,
          text: text,
          isUser: false,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, aiMessage])
      }
    }
    
    // Start typing after a brief delay
    typingTimeoutRef.current = setTimeout(typeNextChar, 200)
  }

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    if (input.includes('kubernetes') || input.includes('k8s') || input.includes('container')) {
      return "Oh man, Josh absolutely loves Kubernetes! 😄 He's been deep in the container orchestration game for a while now and honestly, he's gotten pretty good at it. He's worked with OKD clusters and actually managed to cut deployment times by 20% - that's no small feat! Plus he built some really cool observability stuff on top of K8s. The guy knows his stuff when it comes to containers."
    }
    
    if (input.includes('aws') || input.includes('cloud') || input.includes('amazon')) {
      return "Josh is like... seriously good with AWS. Like, he's worked with everything - EC2, S3, RDS, VPC, IAM, Lambda, API Gateway, CloudFormation... you name it, he's probably touched it. The coolest part? He actually saved his company 10% on AWS costs through some smart automation. That's the kind of thing that makes CFOs happy, you know? He also built this secure software distribution platform that the whole team uses now."
    }
    
    if (input.includes('basketball') || input.includes('sports') || input.includes('nba') || input.includes('gym')) {
      return "Dude, Josh is super into sports! 🏀 He's a huge basketball fan and loves playing too. NBA games? He's all over that. But get this - he's also getting into soccer and has been dabbling in golf and chess. The guy's always trying new things! When he's not coding, you'll find him at the gym working on muscle development and health stuff. He's even learning French and Spanish in his spare time. Talk about well-rounded!"
    }
    
    if (input.includes('birthday') || input.includes('age') || input.includes('july') || input.includes('2001')) {
      return "Josh was born on July 22nd, 2001, so he's currently 24! 🎂 He's got that perfect mix of being young enough to be super energetic and curious, but mature enough to handle serious platform engineering work. Being a July baby, he's got that summer energy all year round!"
    }
    
    if (input.includes('new york') || input.includes('nyc') || input.includes('location') || input.includes('where')) {
      return "Josh lives in New York and absolutely loves New York City! 🗽 The energy, the diversity, the constant buzz - it totally matches his adventurous and curious personality. Living in NYC probably fuels his love for trying new things and exploring different cultures. Plus, there's always something new happening in the city, which is perfect for someone as curious as Josh!"
    }
    
    if (input.includes('personality') || input.includes('like') || input.includes('fun') || input.includes('adventurous') || input.includes('curious')) {
      return "Josh is such a fun, adventurous, and curious person! 🎯 He's always up for trying new things - whether it's learning new languages, exploring different sports, or diving into new technologies. His curiosity drives him to constantly learn and grow. He's the kind of person who sees every challenge as an adventure and every problem as a puzzle to solve. Super positive energy and always looking for the next exciting thing to explore!"
    }
    
    if (input.includes('language') || input.includes('french') || input.includes('spanish') || input.includes('multilingual')) {
      return "This is actually pretty cool - Josh is learning French and Spanish right now! 🇫🇷🇪🇸 I think it's awesome that someone so technical also invests time in learning languages. It really shows he's not just a one-dimensional tech person, you know? He values communication and cultural growth, which honestly makes him a better engineer and teammate."
    }
    
    if (input.includes('creative') || input.includes('design') || input.includes('application') || input.includes('side project')) {
      return "Josh has some really neat creative outlets! He designs AI functional applications in his spare time - how cool is that? It's not just DevOps 24/7 for him. He also enjoys cooking, which is such a great creative outlet. Plus he's into movies and business content. I love that he balances the technical side with these creative pursuits."
    }
    
    if (input.includes('career') || input.includes('advice') || input.includes('transition') || input.includes('full stack')) {
      return "Josh's career journey is actually pretty inspiring! He started as a full-stack engineer and then pivoted to platform engineering, focusing on building tools that make teams more efficient with AI. His advice? Get your hands dirty with real projects, not just certifications. He's all about continuous learning and practical experience. The guy walks the walk, you know?"
    }
    
    if (input.includes('education') || input.includes('computer science') || input.includes('cs') || input.includes('university') || input.includes('degree')) {
      return "Josh has a really solid educational foundation! He completed his Bachelor of Science in Computer Engineering at University of Hartford with a major emphasis on Computer Science and even got a Computer Science minor. That's a pretty impressive combination - it shows he's got both the hardware understanding from Computer Engineering and the deep software knowledge from his CS focus. His education really shows in how he approaches problems with strong algorithmic thinking and software engineering principles."
    }
    
    if (input.includes('resume') || input.includes('cv') || input.includes('experience') || input.includes('background')) {
      return "Josh's resume showcases impressive career progression! He started as a System Support Engineer at Nectar Services Corp in November 2023, where he maintained 99.9% uptime for VoIP platforms and resolved 95% of incidents within SLA. His advancement to DevOps Engineer in February 2024 demonstrates his technical expertise and ability to deliver results. His resume highlights measurable achievements: 20% faster deployments, 40% faster incident detection, and 25% reduction in manual processes. The resume emphasizes his platform engineering transformation work, advanced observability implementations, and his comprehensive technical stack including AWS, Kubernetes, Terraform, and Datadog."
    }
    
    if (input.includes('devops') || input.includes('dev ops') || input.includes('platform engineering') || input.includes('infrastructure')) {
      return "Josh's DevOps expertise is really impressive! He's not just doing traditional DevOps - he's leading Platform Engineering transformations. At Nectar Services Corp, he championed the shift from traditional DevOps to Platform Engineering, which is a huge cultural and technical change. He's built self-service capabilities that let developers move faster, implemented comprehensive observability with OpenTelemetry and Datadog, and automated infrastructure provisioning with Terraform. His approach combines technical depth with strategic thinking - he's not just fixing problems, he's preventing them and enabling teams to scale. The results speak for themselves: 20% faster deployments, 40% faster incident detection, and 25% reduction in manual processes."
    }
    
    if (input.includes('platform') || input.includes('engineering') || input.includes('internal tools')) {
      return "Josh is legit a Platform Engineering leader! He led this massive transformation from traditional DevOps to Platform Engineering at his company. That's not easy - it's a huge cultural shift. But he made it work by building self-service capabilities and streamlining developer workflows. The platforms he built let developers move way faster. It's the kind of work that makes everyone's life easier."
    }
    
    if (input.includes('project') || input.includes('work') || input.includes('experience')) {
      return "Josh has worked on some seriously impressive projects! His Platform Engineering Transformation project involved leading the organizational shift from traditional DevOps to Platform Engineering at Nectar Services Corp. He built self-service capabilities and streamlined developer workflows, resulting in 20% faster deployments. His Advanced Observability Platform implemented comprehensive monitoring using OpenTelemetry, Datadog, and Prometheus, reducing incident detection time by 40%. The Secure Software Distribution Platform automated the entire software delivery process, eliminating manual processes and reducing distribution time from hours to minutes. Each project demonstrates his ability to solve real business problems with measurable impact."
    }
    
    if (input.includes('platform engineering transformation') || input.includes('transformation')) {
      return "Josh's Platform Engineering Transformation project was a game-changer! He led the complete organizational shift from traditional DevOps to Platform Engineering at Nectar Services Corp. This involved building self-service capabilities that let developers deploy faster, implementing golden paths for application deployment, and creating developer-friendly APIs. The transformation resulted in 20% faster deployments and a 25% reduction in manual processes. He abstracted away infrastructure complexity, allowing developers to focus on delivering business value instead of managing infrastructure. This project showcases his leadership skills and ability to drive cultural change within engineering organizations."
    }
    
    if (input.includes('observability') || input.includes('monitoring') || input.includes('datadog')) {
      return "Josh's Advanced Observability Platform is really impressive! He implemented a comprehensive observability strategy using OpenTelemetry, Datadog RUM/synthetic monitoring, and managed container orchestration on Kubernetes. The platform provides real-time visibility into application performance, infrastructure health, and user experience. He set up centralized logging with the ELK Stack, distributed tracing with Jaeger, and robust monitoring dashboards with Grafana. The result? 40% faster incident detection and 35% reduction in Mean Time To Resolution (MTTR). He also created effective alerting strategies to notify teams of critical issues before they impact users, ensuring high availability and performance."
    }
    
    if (input.includes('software distribution') || input.includes('distribution platform')) {
      return "Josh's Secure Software Distribution Platform was a massive automation win! He engineered a secure software distribution platform on AWS that completely eliminated manual processes. The platform automated the entire software delivery lifecycle, from code commit to production deployment. It integrated automated testing, security scanning, and artifact management. The impact was incredible - distribution time went from hours to minutes! He also implemented strategies for continuous integration and continuous delivery, enabling teams to release software faster and more reliably. This project demonstrates his expertise in building scalable, automated solutions that directly improve business efficiency."
    }
    
    if (input.includes('personal') || input.includes('hobby') || input.includes('interest') || input.includes('outside')) {
      return "Outside of work, Josh is a really well-rounded person! He's super into sports - basketball is his main passion, and he loves watching NBA games. He's also getting into soccer and has been exploring golf and chess. When he's not coding, you'll find him at the gym working on muscle development and health. He's even learning French and Spanish in his spare time! His creative outlets include designing AI functional applications, cooking, and watching movies. He's also interested in business and entrepreneurship. Living in NYC, he loves exploring the city's culture and energy. He's the kind of person who sees every challenge as a learning opportunity and is always growing both personally and professionally."
    }
    
    if (input.includes('everything') || input.includes('tell me everything') || input.includes('complete picture') || input.includes('all about')) {
      return "Josh M is a 24-year-old Strategic Platform Engineer from NYC who's making serious waves in the tech industry! Born July 22nd, 2001, he has a Computer Science background with a CS minor from University of Hartford. His career journey is impressive - he started as a System Support Engineer at Nectar Services Corp in November 2023, maintaining 99.9% uptime for VoIP platforms, then rapidly advanced to DevOps Engineer in February 2024. He's delivered incredible business impact: 20% faster deployments, 40% faster incident detection, and 25% reduction in manual processes. His expertise spans AWS, Kubernetes, Terraform, CI/CD, and observability solutions. Beyond work, he's passionate about basketball, learning French and Spanish, exploring NYC culture, and designing AI applications. He's fun, adventurous, curious, and brings a perfect blend of technical excellence and collaborative energy to any team!"
    }
    
    if (input.includes('skills') || input.includes('technologies') || input.includes('tech stack')) {
      return "Josh's technical skills are comprehensive and impressive! His core expertise includes AWS (EC2, S3, RDS, VPC, IAM, Lambda, API Gateway, CloudFormation), Kubernetes with OKD experience, Docker containerization, and Infrastructure as Code with Terraform. He's proficient in CI/CD pipelines using GitLab CI, Jenkins, and GitHub Actions. For observability, he excels with Datadog (APM, RUM, Synthetics, AppSec), OpenTelemetry, Prometheus, Grafana, and the ELK Stack. His programming skills include Python, Bash, and Go for automation. He's also experienced with PostgreSQL, MySQL, Linux systems, rsyslog, and various DevOps tools like Helm, ArgoCD, Istio, and Consul. His Computer Science background gives him strong algorithmic thinking and software engineering principles."
    }
    
    if (input.includes('company') || input.includes('nectar') || input.includes('workplace')) {
      return "Josh works at Nectar Services Corp, a company where he's made significant impact! He started as a System Support Engineer in November 2023, providing backend support for VoIP platforms and maintaining 99.9% uptime. His rapid advancement to DevOps Engineer in February 2024 shows his exceptional performance and adaptability. At Nectar, he's led major initiatives including the Platform Engineering transformation, built the Advanced Observability Platform, and created the Secure Software Distribution Platform. He's resolved 95% of incidents within SLA and delivered measurable business impact including 20% faster deployments, 40% faster incident detection, and 25% reduction in manual processes. His work has enabled the entire engineering team to move faster and more reliably."
    }
    
    if (input.includes('future') || input.includes('goals') || input.includes('aspirations') || input.includes('career goals')) {
      return "Josh's future goals are exciting and ambitious! He's passionate about continuing to drive Platform Engineering transformations and building internal developer platforms that scale engineering teams. He wants to lead more organizational changes that enable teams to deliver faster and more reliably. His aspirations include becoming a Platform Engineering leader who bridges the gap between development and operations, creating robust, scalable, and secure platforms. He's committed to continuous learning, staying current with emerging technologies, and pursuing advanced certifications. He also wants to mentor more team members and contribute to technical communities. His goal is to be a strategic technology leader who combines deep technical expertise with business acumen to drive organizational transformation and deliver measurable business impact."
    }
    
    if (input.includes('challenges') || input.includes('difficult') || input.includes('problems') || input.includes('obstacles')) {
      return "Josh has overcome some significant challenges in his career! One major challenge was leading the Platform Engineering transformation at Nectar Services Corp - this involved a huge cultural shift from traditional DevOps to Platform Engineering, which required convincing teams to adopt new workflows and self-service capabilities. Another challenge was building the Advanced Observability Platform while maintaining system stability and ensuring zero downtime during implementation. He also faced the challenge of rapidly advancing from System Support Engineer to DevOps Engineer in just 3 months, requiring him to quickly master new technologies and take on leadership responsibilities. His approach to challenges is methodical - he breaks down complex problems, researches best practices, and implements solutions incrementally while maintaining system reliability. His Computer Science background helps him approach problems with strong algorithmic thinking."
    }
    
    if (input.includes('team') || input.includes('collaboration') || input.includes('leadership') || input.includes('mentoring')) {
      return "Josh is an excellent team player and collaborator! He's passionate about mentoring team members and sharing knowledge through technical documentation. His leadership style combines technical depth with strategic thinking - he doesn't just solve problems, he enables others to solve them too. He's built self-service capabilities that let developers work more autonomously, and he's created comprehensive documentation that accelerates team productivity. His collaborative approach involves working closely with development teams to understand their needs and building platforms that truly serve them. He's also active in technical communities and loves knowledge sharing. His ability to bridge the gap between development and operations makes him a valuable team member who can facilitate communication and drive organizational change. He believes in fostering a culture of continuous learning and innovation."
    }
    
    if (input.includes('achievements') || input.includes('accomplishments') || input.includes('success')) {
      return "Josh's achievements are really impressive! Career-wise, he rapidly progressed from System Support Engineer to DevOps Engineer in just 3 months, demonstrating exceptional adaptability. He led a complete Platform Engineering transformation, built an Advanced Observability Platform, and created a Secure Software Distribution Platform. His measurable business impact includes 20% faster deployments, 40% faster incident detection, 25% reduction in manual processes, and 10% AWS cost savings. He maintained 99.9% uptime for VoIP platforms and resolved 95% of incidents within SLA. Personally, he's learning two new languages (French and Spanish), actively pursuing health and fitness goals, and exploring multiple sports. His combination of rapid career growth, technical excellence, and personal development shows he's someone who consistently delivers results and never stops learning."
    }
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! 👋 I'm Shua, Josh's AI assistant. It's great to meet you! I have comprehensive knowledge about Josh's platform engineering expertise, professional achievements, and personal interests. What would you like to know about his technical skills or career journey?"
    }
    
    if (input.includes('who') || input.includes('what') || input.includes('tell me about')) {
      return "Josh is a 24-year-old Strategic Platform Engineer from NYC who specializes in driving organizational transformation through infrastructure automation! 🗽 With a Computer Science background and CS minor, he's delivered measurable business impact: 20% faster deployments, 40% faster incident detection, and 25% reduction in manual processes. Beyond his technical expertise in AWS and Kubernetes, he's passionate about basketball, learning French and Spanish, and exploring new technologies. He brings a perfect blend of technical excellence and collaborative energy to any team."
    }
    
    if (input.includes('summary') || input.includes('overview') || input.includes('about')) {
      return "Josh M is a 24-year-old Strategic Platform Engineer based in NYC, born July 22nd, 2001. With a Computer Science background and CS minor from University of Hartford, he's delivered significant business impact through platform engineering transformations: 20% faster deployments, 40% faster incident detection, and 25% reduction in manual processes. His expertise spans AWS, Kubernetes, Terraform, and observability solutions. Beyond technical skills, he's passionate about basketball, learning French and Spanish, and exploring emerging technologies. His career progression from System Support to DevOps Engineer demonstrates his technical expertise and ability to deliver measurable results."
    }
    
    return "Josh is a Strategic Platform Engineer with proven expertise in AWS, Kubernetes, Terraform, and observability solutions. He's delivered measurable business impact through platform engineering transformations and has a track record of driving organizational change. His technical depth combined with collaborative approach makes him an ideal candidate for engineering leadership roles. What specific aspect of his expertise would you like to explore?"
  }

  return (
    <Card className="max-w-4xl mx-auto bg-white/80 dark:bg-neutral-800/80 backdrop-blur-lg border-2 border-primary-200/50 dark:border-primary-700/50 shadow-xl transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-primary-600/10 to-accent-600/10 dark:from-primary-600/20 dark:to-accent-600/20 rounded-t-xl p-6">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xl">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-md border-2 border-primary-200 dark:border-primary-700 animate-pulse-slow">
              <Image
                src="/profile-screenshot.png"
                alt="Josh M"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="gradient-text font-bold">Shua - Josh's AI Assistant</span>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={toggleChat}
              variant="ghost"
              size="sm"
              className={`transition-colors duration-200 ${
                isChatStopped 
                  ? 'text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20' 
                  : 'text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/20'
              }`}
              title={isChatStopped ? "Resume chat" : "Stop chat"}
            >
              {isChatStopped ? <Play className="h-4 w-4" /> : <Square className="h-4 w-4" />}
            </Button>
            <Button
              onClick={() => {
                const conversation = `Conversation with Josh M - Platform Engineer
Generated on: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
Portfolio: https://joshmenzies.dev

${'='.repeat(50)}

${messages.map((msg, index) => 
  `${index + 1}. ${msg.isUser ? 'You' : 'Shua (Josh\'s AI)'}: ${msg.text}\n   Time: ${msg.timestamp.toLocaleString()}`
).join('\n\n')}

${'='.repeat(50)}

About Josh:
- DevOps Engineer specializing in Platform Engineering
- Education: BS Computer Engineering with CS emphasis + CS minor (University of Hartford)
- Expertise: AWS, Kubernetes, Terraform, CI/CD, Observability
- Location: New York City
- Contact: https://linkedin.com/in/joshmenzies

This conversation was generated by Shua, Josh's AI assistant, 
which has comprehensive knowledge about his technical expertise, 
projects, and professional achievements.`
                
                const blob = new Blob([conversation], { type: 'text/plain' })
                const url = URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = url
                a.download = `Josh-Menzies-Conversation-${new Date().toISOString().split('T')[0]}.txt`
                a.click()
                URL.revokeObjectURL(url)
              }}
              variant="ghost"
              size="sm"
              className="text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200"
              title="Download conversation with Josh's info"
            >
              <Download className="h-4 w-4" />
            </Button>
            <Button
              onClick={clearChat}
              variant="ghost"
              size="sm"
              className="text-neutral-500 hover:text-red-600 dark:text-neutral-400 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
              title="Clear chat"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div ref={messagesContainerRef} className="space-y-4 mb-6 max-h-96 overflow-y-auto scroll-smooth overscroll-contain scrollbar-thin">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              {!message.isUser && (
                <div className="w-10 h-10 rounded-full overflow-hidden shadow-md border-2 border-primary-200 dark:border-primary-700">
                  <Image
                    src="/profile-screenshot.png"
                    alt="Josh M"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div
                className={`max-w-md px-4 py-3 rounded-xl shadow-sm ${
                  message.isUser
                    ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white ml-auto'
                    : 'bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-700 dark:to-neutral-800 text-neutral-900 dark:text-neutral-100'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1 text-xs opacity-70">
                    <Clock className="h-3 w-3" />
                    <span>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                  {!message.isUser && (
                    <div className="flex items-center gap-1">
                      <button className="p-1 hover:bg-white/20 rounded transition-colors">
                        <ThumbsUp className="h-3 w-3" />
                      </button>
                      <button className="p-1 hover:bg-white/20 rounded transition-colors">
                        <ThumbsDown className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
              {message.isUser && (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-400 to-neutral-500 flex items-center justify-center shadow-md">
                  <User className="h-5 w-5 text-white" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-md border-2 border-primary-200 dark:border-primary-700">
                <Image
                  src="/IMG_2885.jpg"
                  alt="Josh M"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-700 dark:to-neutral-800 px-4 py-3 rounded-xl shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          )}
          {isTyping && (
            <div className="flex gap-3 justify-start">
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-md border-2 border-primary-200 dark:border-primary-700">
                <Image
                  src="/IMG_2885.jpg"
                  alt="Josh M"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-700 dark:to-neutral-800 px-4 py-3 rounded-xl shadow-sm max-w-md">
                <p className="text-sm leading-relaxed text-neutral-900 dark:text-neutral-100">
                  {typingText}
                  <span className="animate-blink text-primary-600 dark:text-primary-400 font-bold">|</span>
                </p>
              </div>
            </div>
          )}
        </div>
        
        {/* Contact Prompt */}
        {showContactPrompt && (
          <div className="mb-4 p-4 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl border border-primary-200 dark:border-primary-700">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-primary-900 dark:text-primary-100">Interested in connecting?</h4>
                <p className="text-sm text-primary-700 dark:text-primary-300">Josh would love to discuss opportunities with you!</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href="https://linkedin.com/in/joshmenzies" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    LinkedIn
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href="/contact">
                    Contact
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {['Technical Expertise', 'Career Impact', 'Platform Engineering', 'Professional Journey'].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => {
                  setInput(suggestion)
                  if (messages.length > 3) setShowContactPrompt(true)
                }}
                className="px-3 py-1.5 text-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-200"
              >
                {suggestion}
              </button>
            ))}
          </div>
          
          {/* Ask Shua Button */}
          <div className="text-center">
            <Button
              onClick={() => setInput("Tell me about Josh's platform engineering experience")}
              variant="outline"
              className="px-6 py-2 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border-primary-200 dark:border-primary-700 text-primary-700 dark:text-primary-300 hover:from-primary-100 hover:to-accent-100 dark:hover:from-primary-800/30 dark:hover:to-accent-800/30 transition-all duration-200"
            >
              <Bot className="h-4 w-4 mr-2" />
              Ask Shua About Josh
            </Button>
          </div>
          
          <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={
                  isChatStopped 
                    ? "Chat is paused - click play to resume..." 
                    : isLoading || isTyping 
                      ? "Shua is typing..." 
                      : "Ask Shua about Josh's expertise, projects, or anything else..."
                }
                className={`flex-1 px-4 py-3 border rounded-lg backdrop-blur-sm text-base text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 transition-all duration-200 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 ${
                  isChatStopped 
                    ? 'border-orange-200 dark:border-orange-700 bg-orange-50/80 dark:bg-orange-900/20 focus:ring-orange-500 focus:border-orange-500' 
                    : 'border-primary-200 dark:border-primary-700 bg-white/80 dark:bg-neutral-700/80 focus:ring-primary-500 focus:border-primary-500'
                }`}
                disabled={isChatStopped}
              />
            <Button 
              onClick={handleSend} 
              disabled={isLoading || isTyping || !input.trim() || isChatStopped}
              className={`px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${
                isChatStopped 
                  ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                  : 'bg-gradient-to-br from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white'
              }`}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
