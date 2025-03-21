"use client"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Hint } from "./hint"

interface FloatingIconProps {
    href: string
    src: string
    alt: string
    width?: number
    height?: number
    className?: string
    iconClassName?: string
    label?: string
    external?: boolean
}

export function FloatingIcon({
    href,
    src,
    alt,
    width = 24,
    height = 24,
    className,
    iconClassName,
    label,
    external = true,
}: FloatingIconProps) {
    return (
        <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn(
            "fixed z-50 top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none ",
            className,
        )}
        aria-label={label || alt}
        >
            <Hint label="Try MeetBoard" side="bottom" sideOffset={10}>
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className={cn("h-auto w-auto", iconClassName)}
                />
            </Hint>

        
        </Link>
    )
}

