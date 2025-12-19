import React from 'react'
import { 
  TbStar, 
  TbAward, 
  TbMapPin, 
  TbWorld, 
  TbFileText, 
  TbPresentation,
  TbCheck,
  TbX,
  TbAlertCircle,
  TbInfoCircle,
  TbUser,
  TbPencil,
  TbNotebook,
  TbBooks,
  TbMail,
  TbBrandGithub,
  TbBrandX,
  TbBrandLinkedin,
  TbBuilding,
  TbSchool
} from 'react-icons/tb'
import { SiOrcid } from 'react-icons/si'
import { FaTwitter } from 'react-icons/fa'

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  ':star:': TbStar,
  ':award:': TbAward,
  ':pin:': TbMapPin,
  ':world:': TbWorld,
  ':file:': TbFileText,
  ':presentation:': TbPresentation,
  ':check:': TbCheck,
  ':alert:': TbAlertCircle,
  ':info:': TbInfoCircle,
  ':person:': TbUser,
  ':memo:': TbPencil,
  ':notebook:': TbNotebook,
  ':books:': TbBooks,
  ':email:': TbMail,
  ':github:': TbBrandGithub,
  ':twitter:': FaTwitter,
  ':twitter-bird:': FaTwitter,
  ':x:': TbBrandX,
  ':linkedin:': TbBrandLinkedin,
  ':orcid:': SiOrcid,
  ':building:': TbBuilding,
  ':school:': TbSchool,
}

export function replaceIconsInText(text: string | React.ReactNode, className: string = "inline h-[1em] w-[1em] align-text-bottom"): React.ReactNode {
  if (typeof text !== 'string') return text
  
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  const regex = /:(star|award|pin|world|file|presentation|check|x|alert|info|person|memo|notebook|books|email|github|twitter|twitter-bird|linkedin|orcid|building|school):/g
  let match: RegExpExecArray | null
  
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index))
    }
    
    const iconKey = match[0] as keyof typeof iconMap
    const Icon = iconMap[iconKey]
    if (Icon) {
      parts.push(<Icon key={match.index} className={className} />)
    }
    
    lastIndex = match.index + match[0].length
  }
  
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }
  
  return parts.length > 0 ? parts : text
}

export function processChildren(children: React.ReactNode): React.ReactNode {
  if (typeof children === 'string') {
    return replaceIconsInText(children)
  }
  
  if (Array.isArray(children)) {
    return children.map((child, index) => {
      if (typeof child === 'string') {
        return <React.Fragment key={index}>{replaceIconsInText(child)}</React.Fragment>
      }
      return child
    })
  }
  
  return children
}
