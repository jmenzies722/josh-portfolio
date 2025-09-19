'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Send, Bot, User, Trash2 } from 'lucide-react'

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi! I'm Shua, Josh's AI assistant. Ask me about his DevOps experience, AWS, Kubernetes, projects, or anything else!",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages.length])

  const clearChat = useCallback(() => {
    setMessages([
      {
        id: Date.now(),
        text: "👋 Hi! I'm Shua, Josh's AI assistant. Ask me about his DevOps experience, AWS, Kubernetes, projects, or anything else!",
        isUser: false,
        timestamp: new Date()
      }
    ])
  }, [])

  const addAIResponse = (text: string) => {
    const aiMessage: Message = {
      id: Date.now() + 1,
      text: text,
      isUser: false,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, aiMessage])
  }

  const handleSend = useCallback(async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI response (in real implementation, this would call an AI API)
    setTimeout(() => {
      const aiResponse = generateAIResponse(input)
      setIsLoading(false)
      addAIResponse(aiResponse)
    }, 1000)
  }, [input])

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    if (input.includes('kubernetes') || input.includes('k8s') || input.includes('container')) {
      return "Oh, Kubernetes is one of Josh's favorite topics! He's been working with it for a while now and has gotten really good at container orchestration. He's managed OKD clusters and actually reduced deployment times by 20% through some clever CI/CD optimizations. He also built some pretty cool observability solutions using Kubernetes. Pretty impressive stuff!"
    }
    
    if (input.includes('aws') || input.includes('cloud') || input.includes('amazon')) {
      return "Josh is definitely an AWS expert! He's worked with pretty much everything - EC2, S3, RDS, VPC, IAM, Lambda, API Gateway, CloudFormation... the whole suite really. What's really cool is he managed to save the company 10% on AWS costs through some smart automation. He also built this secure software distribution platform that's been really useful for the team."
    }
    
    if (input.includes('terraform') || input.includes('iac') || input.includes('infrastructure')) {
      return "Infrastructure as Code is Josh's bread and butter! He's a Terraform and CloudFormation expert. One of his biggest wins was reducing manual setup time by 25% - that's huge when you're dealing with complex infrastructure. He's really good at standardizing provisioning and making sure everything is consistent across environments. It's the kind of work that saves everyone headaches."
    }
    
    if (input.includes('observability') || input.includes('monitoring') || input.includes('datadog') || input.includes('opentelemetry')) {
      return "Josh is super passionate about observability! He's implemented comprehensive monitoring using OpenTelemetry, Datadog RUM and synthetic monitoring, plus Prometheus and Grafana. The best part? He decreased incident detection time by 40%. That's a game-changer for any organization. His monitoring solutions are really comprehensive and have saved the team a lot of headaches."
    }
    
    if (input.includes('devops') || input.includes('platform') || input.includes('engineering')) {
      return "Josh is a real Platform Engineering leader! He actually led the transformation from traditional DevOps to Platform Engineering at his company. That's not easy - it's a big cultural shift. But he made it work by enabling self-service capabilities and streamlining developer workflows. He built these internal platforms that let developers move much faster. It's the kind of work that makes everyone's job easier."
    }
    
    if (input.includes('project') || input.includes('work') || input.includes('experience')) {
      return "Josh has worked on some really impressive projects! There's his Platform Engineering Transformation, an Advanced Observability Platform, and a Secure Software Distribution Platform. All of them showcase modern DevOps practices and have had real business impact. He's not just doing technical work - he's solving real problems that matter to the business."
    }
    
    if (input.includes('python') || input.includes('bash') || input.includes('go') || input.includes('programming')) {
      return "Josh is pretty versatile with programming languages! He's comfortable with Python, Bash, Go, and SQL. He uses these for automation scripts, infrastructure management, and building scalable solutions. His programming skills really complement his DevOps expertise - it's that combination that makes him so effective at what he does."
    }
    
    if (input.includes('gitlab') || input.includes('ci/cd') || input.includes('pipeline')) {
      return "CI/CD is where Josh really shines! He has extensive experience with GitLab CI/CD pipelines and has built some really sophisticated automated deployment strategies. He's optimized build processes and significantly improved workflows. It's the kind of work that makes development teams much more productive."
    }
    
    if (input.includes('docker') || input.includes('containerization')) {
      return "Josh is really skilled with Docker and containerization! He's containerized applications, optimized Docker images, and integrated everything with Kubernetes for scalable deployments. It's the kind of work that requires both technical skill and strategic thinking - and he's got both."
    }
    
    if (input.includes('cost') || input.includes('optimization') || input.includes('savings')) {
      return "Cost optimization is one of Josh's strengths! He achieved 10% AWS cost savings through automated optimization, resource right-sizing, and intelligent scaling policies. He's always looking for ways to improve efficiency without sacrificing performance. It's the kind of work that makes CFOs happy!"
    }
    
    if (input.includes('personal') || input.includes('hobby') || input.includes('interest') || input.includes('outside') || input.includes('basketball') || input.includes('sports') || input.includes('gym')) {
      return "Josh is super into sports and fitness! He loves playing basketball and is a huge NBA fan. He's also getting into soccer and has been trying out golf and chess - he's always expanding his interests! For creative outlets, he designs AI functional applications in his spare time and enjoys learning to cook. He's really into movies and business content too. To relax, he hits the gym (he's learning about muscle development and health), hangs out with family and friends, and is even learning French and Spanish. He's the kind of person who's always growing both personally and professionally!"
    }
    
    if (input.includes('versatile') || input.includes('adaptable') || input.includes('flexible') || input.includes('any job')) {
      return "Josh is incredibly versatile and adaptable! With his comprehensive DevOps expertise spanning AWS, Kubernetes, Terraform, and observability, he can tackle pretty much any infrastructure challenge. He has a proven track record of driving organizational transformation and achieving measurable results. He's definitely ready for any DevOps, Platform Engineering, or Cloud Infrastructure role. His combination of technical skills and business impact makes him really valuable."
    }
    
    if (input.includes('education') || input.includes('degree') || input.includes('university')) {
      return "Josh has a BS in Computer Engineering from the University of Hartford (2023). His focus was on systems design, automation, and cloud technologies - which explains why he's so good at what he does! He's big on continuous learning and staying current with industry trends. He's the kind of person who's always upskilling and getting certifications."
    }
    
    if (input.includes('company') || input.includes('nectar') || input.includes('current')) {
      return "Josh is currently a DevOps Engineer at Nectar Services Corp (Feb 2024 - Present). He's been leading their platform engineering transformation and has achieved some impressive results - 20% faster deployments and 40% faster incident detection. It's the kind of work that shows real business value."
    }
    
    if (input.includes('skills') || input.includes('technologies') || input.includes('tools')) {
      return "Josh has a really solid technical foundation! On the cloud side, he's strong with AWS (EC2, S3, Lambda, and more). For orchestration, he's skilled with Kubernetes and Docker. His Infrastructure as Code expertise includes Terraform and CloudFormation. For monitoring, he works with Datadog and OpenTelemetry. Programming-wise, he's comfortable with Python, Bash, Go, and SQL. And he's experienced with GitLab CI for CI/CD. It's a really well-rounded skill set!"
    }
    
    if (input.includes('career') || input.includes('advice') || input.includes('tips') || input.includes('how to') || input.includes('transition') || input.includes('full stack')) {
      return "Josh has an amazing career journey! He transitioned from being a full-stack engineer to ultimately focusing on platform engineering to build tools that make teams more efficient with AI. His advice would be to focus on continuous learning and hands-on experience! He believes in getting your hands dirty with real projects, not just certifications. His approach is to start with fundamentals (Linux, networking, scripting) then move to cloud platforms. He's a big advocate for automation and Infrastructure as Code - it's the future of DevOps. He also emphasizes the importance of understanding business impact, not just technical solutions. And networking with the community - that's how he's learned so much!"
    }
    
    if (input.includes('salary') || input.includes('pay') || input.includes('compensation') || input.includes('money')) {
      return "Josh focuses on value creation rather than just salary discussions! His approach is to demonstrate measurable business impact - like the 20% faster deployments and 40% faster incident detection he achieved. He believes that when you solve real problems and save companies money (like his 10% AWS cost savings), compensation follows naturally. His advice is to focus on skills that create value, and the market will reward that expertise appropriately."
    }
    
    if (input.includes('interview') || input.includes('hiring') || input.includes('recruiter')) {
      return "Josh would be a great hire for any DevOps or Platform Engineering role! He brings both technical depth and business acumen. In interviews, he can discuss real-world projects with measurable results. He's experienced with modern tools and practices, has led organizational transformations, and understands the full stack from infrastructure to application delivery. His combination of hands-on experience and strategic thinking makes him valuable for both technical and leadership roles."
    }
    
    if (input.includes('future') || input.includes('trends') || input.includes('industry') || input.includes('next') || input.includes('ai') || input.includes('artificial intelligence')) {
      return "Josh is really excited about the future of DevOps and AI! He loves the culture and transition from being a full-stack engineer to ultimately focusing on platform engineering to build tools that make teams more efficient with AI. He sees Platform Engineering becoming the standard, with more self-service capabilities for developers. He's bullish on AI/ML integration in DevOps workflows, better observability tools, and the continued evolution of cloud-native technologies. He thinks Infrastructure as Code will become even more sophisticated, and there's huge potential in GitOps and progressive delivery. The industry is moving toward more automation and intelligence in operations, and Josh is right at the forefront of that!"
    }
    
    if (input.includes('challenge') || input.includes('problem') || input.includes('difficult') || input.includes('struggle')) {
      return "Josh loves tackling complex challenges! His approach is to break problems down into smaller pieces, understand the root cause, and then build systematic solutions. He's dealt with everything from scaling issues to cost optimization to organizational change management. His philosophy is that every problem is an opportunity to learn and improve. He's particularly good at balancing technical solutions with business needs and team dynamics."
    }
    
    if (input.includes('team') || input.includes('collaboration') || input.includes('leadership') || input.includes('management')) {
      return "Josh is a natural collaborator and leader! He's led platform engineering transformations, which requires both technical expertise and people skills. He's great at mentoring others, sharing knowledge, and building consensus around technical decisions. His approach is to enable teams rather than gatekeep - he builds tools and processes that make everyone more productive. He believes in leading by example and creating an environment where people can do their best work."
    }
    
    if (input.includes('remote') || input.includes('work from home') || input.includes('location') || input.includes('where')) {
      return "Josh is experienced with remote work and distributed teams! He's proven he can deliver results regardless of location through his platform engineering work. He's comfortable with async communication, documentation, and building systems that work well for distributed teams. His infrastructure automation and observability work actually makes remote collaboration easier by providing better visibility and self-service capabilities."
    }
    
    if (input.includes('certification') || input.includes('cert') || input.includes('exam') || input.includes('study')) {
      return "Josh believes in continuous learning and staying current with certifications! He's focused on practical, hands-on experience rather than just exam prep. His approach is to learn through real projects first, then use certifications to validate and deepen that knowledge. He's particularly interested in AWS, Kubernetes, and Terraform certifications since those align with his day-to-day work. He thinks the best way to prepare is to build things and solve real problems."
    }
    
    if (input.includes('startup') || input.includes('scale') || input.includes('growth') || input.includes('small company') || input.includes('culture') || input.includes('team efficiency')) {
      return "Josh would be perfect for startups and scaling companies! His experience with cost optimization (10% AWS savings) and rapid deployment improvements (20% faster) is exactly what growing companies need. He's built platforms that enable rapid development, which is crucial for startups moving fast. His Infrastructure as Code expertise helps companies scale efficiently, and his observability work prevents issues before they become problems. He understands the balance between speed and reliability that startups need. Plus, he loves the culture of building tools that make teams more efficient with AI - that's exactly what growing companies need!"
    }
    
    if (input.includes('language') || input.includes('french') || input.includes('spanish') || input.includes('multilingual')) {
      return "Josh is really into learning languages! He's currently learning French and Spanish, which shows his commitment to continuous learning and cultural growth. It's pretty cool that someone so technical also invests time in language learning - it shows he's well-rounded and values communication skills. This kind of dedication to learning new things probably helps him in his tech work too, since he's always expanding his knowledge base!"
    }
    
    if (input.includes('health') || input.includes('fitness') || input.includes('muscle') || input.includes('gym') || input.includes('workout')) {
      return "Josh is really into health and fitness! He's learning about muscle development for the gym and is generally really into health. He hits the gym to relax and unwind after work, which is a great way to balance the mental intensity of DevOps work with physical activity. It's awesome that he's taking a scientific approach to fitness too - learning about muscle development shows he applies his analytical mindset to everything he does!"
    }
    
    if (input.includes('creative') || input.includes('design') || input.includes('application') || input.includes('side project')) {
      return "Josh has some really cool creative outlets! He designs AI functional applications in his spare time, which is amazing - it shows he's not just doing DevOps at work, but also exploring AI and application design on his own. He also enjoys learning to cook, which is a great creative outlet. Plus he's into movies and business content. It's really cool that he balances his technical work with these creative pursuits!"
    }
    
    return "Hey! Josh is a Strategic DevOps/Platform Engineer with really versatile expertise in AWS, Kubernetes, Terraform, and observability. He's the kind of person who can tackle any infrastructure challenge and drive real organizational success. Feel free to ask me about specific technologies, projects, his experience, career advice, or anything else - I know a lot about his work and can help with all sorts of questions!"
  }

  return (
    <Card className="max-w-4xl mx-auto bg-white/80 dark:bg-neutral-800/80 backdrop-blur-lg border-2 border-primary-200/50 dark:border-primary-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
      <CardHeader className="bg-gradient-to-r from-primary-600/10 to-accent-600/10 dark:from-primary-600/20 dark:to-accent-600/20 rounded-t-xl p-6">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xl">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-md border-2 border-primary-200 dark:border-primary-700 animate-pulse-slow">
              <Image
                src="/IMG_2885.jpg"
                alt="Josh M"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="gradient-text font-bold">Shua - Josh's AI Assistant</span>
          </div>
          <Button
            onClick={clearChat}
            variant="ghost"
            size="sm"
            className="text-neutral-500 hover:text-red-600 dark:text-neutral-400 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
            title="Clear chat"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div 
          ref={messagesContainerRef}
          className="space-y-4 mb-6 max-h-96 overflow-y-auto scrollbar-thin scroll-smooth overscroll-contain"
          style={{ scrollBehavior: 'smooth' }}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              {!message.isUser && (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center shadow-md">
                  <Bot className="h-5 w-5 text-white" />
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
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center shadow-md">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-700 dark:to-neutral-800 px-4 py-3 rounded-xl shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="space-y-4">
          {/* Quick suggestions */}
          <div className="flex flex-wrap gap-2 justify-center">
            {['Career advice', 'Projects', 'Skills', 'Future trends'].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setInput(suggestion)}
                className="px-3 py-1.5 text-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-200"
              >
                {suggestion}
              </button>
            ))}
          </div>
          
          <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask Shua about Josh's experience..."
              className="flex-1 px-4 py-3 border border-primary-200 dark:border-primary-700 rounded-lg bg-white/80 dark:bg-neutral-700/80 backdrop-blur-sm text-base text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 placeholder:text-neutral-500 dark:placeholder:text-neutral-400"
            />
            <Button 
              onClick={handleSend} 
              disabled={isLoading || !input.trim()}
              className="px-6 py-3 bg-gradient-to-br from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <Send className="h-5 w-5" />
          </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
