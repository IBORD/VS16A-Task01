import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

interface CardImageProps {
  src: string | StaticImageData
  alt: string
  width?: number
  height?: number
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

interface CardActionsProps {
  children: React.ReactNode
  className?: string
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {children}
    </div>
  )
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CardImage = ({ src, alt }: CardImageProps) => {
  return (
    <div className="relative aspect-video">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAFhQHQwUJVBQAAAABJRU5ErkJggg=="
      />
    </div>
  )
}

const CardContent = ({ children, className = '' }: CardContentProps) => {
  return <div className={`p-4 ${className}`}>{children}</div>
}

const CardTitle = ({ children, className = '' }: CardTitleProps) => {
  return <h3 className={`text-xl font-bold mb-2 ${className}`}>{children}</h3>
}

const CardActions = ({ children, className = '' }: CardActionsProps) => {
  return <div className={`mt-4 flex gap-2 ${className}`}>{children}</div>
}

// Compondo o componente Card
Card.Image = CardImage
Card.Content = CardContent
Card.Title = CardTitle
Card.Actions = CardActions