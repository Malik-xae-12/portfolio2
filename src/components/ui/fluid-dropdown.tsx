"use client"

import * as React from "react"
import { motion, AnimatePresence, MotionConfig } from "framer-motion"
import { ChevronDown, Shirt, Briefcase, Smartphone, Home, Layers } from "lucide-react"

// Utility function for className merging
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ")
}

// Custom hook for click outside detection
function useClickAway(
  ref: React.RefObject<HTMLElement | null>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  React.useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}

// Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline"
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          variant === "outline" && "border border-neutral-700 bg-transparent",
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

// Types
export interface Category {
  id: string
  label: string
  icon: React.ElementType
  color: string
}

export const defaultCategories: Category[] = [
  { id: "all", label: "All Services", icon: Layers, color: "#A06CD5" },
  { id: "arch", label: "Technical Architecture", icon: Briefcase, color: "#4ECDC4" },
  { id: "cloud", label: "Cloud & DevOps (Azure/GCP)", icon: Smartphone, color: "#45B7D1" },
  { id: "fullstack", label: "Full-Stack Development", icon: Shirt, color: "#FF6B6B" },
  { id: "data", label: "Data Engineering & Fabric", icon: Home, color: "#F9C74F" },
]

// Icon wrapper with animation
const IconWrapper = ({
  icon: Icon,
  isHovered,
  color,
}: { icon: React.ElementType; isHovered: boolean; color: string }) => (
  <motion.div 
    className="w-4 h-4 mr-2 relative shrink-0" 
    initial={false} 
    animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
  >
    <Icon className="w-4 h-4" />
    {isHovered && (
      <motion.div
        className="absolute inset-0"
        style={{ color }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Icon className="w-4 h-4" strokeWidth={2} />
      </motion.div>
    )}
  </motion.div>
)

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
}

export interface FluidDropdownProps {
  categories?: Category[];
  value?: string;
  onChange?: (category: Category) => void;
  className?: string;
  theme?: "light" | "dark";
}

// Main component
export function Component({
  categories = defaultCategories,
  value,
  onChange,
  className = "",
  theme = "light",
}: FluidDropdownProps = {}) {
  const [isOpen, setIsOpen] = React.useState(false)
  
  const initialSelected = React.useMemo(() => {
    if (value) {
      const match = categories.find((c) => c.id === value || c.label === value)
      if (match) return match
    }
    return categories[0]
  }, [categories, value])

  const [selectedCategory, setSelectedCategory] = React.useState<Category>(initialSelected)
  const [hoveredCategory, setHoveredCategory] = React.useState<string | null>(null)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (value) {
      const match = categories.find((c) => c.id === value || c.label === value)
      if (match) setSelectedCategory(match)
    }
  }, [value, categories])

  useClickAway(dropdownRef, () => setIsOpen(false))

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false)
    }
  }

  const activeIdx = Math.max(
    0,
    categories.findIndex((c) => (hoveredCategory || selectedCategory.id) === c.id)
  )

  const instanceId = React.useId()
  const isLight = theme === "light"

  return (
    <MotionConfig reducedMotion="user">
      <div
        className={cn("w-full relative", className)}
        ref={dropdownRef}
      >
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full justify-between transition-all duration-200 ease-in-out",
            "h-12 px-4 rounded-xl text-sm font-sans shadow-xs cursor-pointer",
            isLight
              ? "bg-[#F6F6F6] text-[#0A0A0A] border border-black/10 hover:border-black/25 focus:border-black"
              : "bg-neutral-900 text-neutral-200 border border-neutral-700/60 hover:bg-neutral-800 hover:text-white",
            isOpen && (isLight ? "bg-white border-black" : "bg-neutral-800 text-white border-neutral-500"),
          )}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span className="flex items-center truncate">
            <IconWrapper 
              icon={selectedCategory.icon} 
              isHovered={false} 
              color={selectedCategory.color} 
            />
            <span className={cn("truncate font-medium", isLight ? "text-[#0A0A0A]" : "text-neutral-100")}>
              {selectedCategory.label}
            </span>
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className={cn("flex items-center justify-center w-5 h-5 shrink-0 ml-2", isLight ? "text-[#555555]" : "text-neutral-400")}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </Button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 1, y: 0, height: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                height: "auto",
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  mass: 1,
                },
              }}
              exit={{
                opacity: 0,
                y: 0,
                height: 0,
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  mass: 1,
                },
              }}
              className="absolute left-0 right-0 top-full mt-2 z-50"
              onKeyDown={handleKeyDown}
            >
              <motion.div
                className={cn(
                  "w-full rounded-2xl p-1.5 shadow-2xl backdrop-blur-xl border",
                  isLight
                    ? "bg-white/95 border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] text-[#0A0A0A]"
                    : "bg-neutral-950/95 border-neutral-800 text-neutral-100"
                )}
                initial={{ borderRadius: 8 }}
                animate={{
                  borderRadius: 16,
                  transition: { duration: 0.2 },
                }}
                style={{ transformOrigin: "top" }}
              >
                <motion.div 
                  className="py-1 relative" 
                  variants={containerVariants} 
                  initial="hidden" 
                  animate="visible"
                >
                  <motion.div
                    layoutId={`hover-highlight-${instanceId}`}
                    className={cn(
                      "absolute inset-x-1 rounded-xl",
                      isLight ? "bg-black/5" : "bg-neutral-800/80"
                    )}
                    animate={{
                      y: activeIdx * 42 + (activeIdx > 0 ? 14 : 0),
                      height: 42,
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.15,
                      duration: 0.45,
                    }}
                  />
                  {categories.map((category, index) => (
                    <React.Fragment key={category.id}>
                      {index === 1 && (
                        <motion.div 
                          className={cn("mx-3 my-2 border-t", isLight ? "border-black/10" : "border-neutral-800")} 
                          variants={itemVariants} 
                        />
                      )}
                      <motion.button
                        type="button"
                        onClick={() => {
                          setSelectedCategory(category)
                          setIsOpen(false)
                          onChange?.(category)
                        }}
                        onHoverStart={() => setHoveredCategory(category.id)}
                        onHoverEnd={() => setHoveredCategory(null)}
                        className={cn(
                          "relative flex w-full items-center px-3.5 py-2.5 text-sm rounded-xl",
                          "transition-colors duration-150 cursor-pointer text-left",
                          "focus:outline-none",
                          selectedCategory.id === category.id || hoveredCategory === category.id
                            ? (isLight ? "text-black font-bold" : "text-white font-medium")
                            : (isLight ? "text-[#555555] hover:text-black font-medium" : "text-neutral-400 hover:text-neutral-200"),
                        )}
                        whileTap={{ scale: 0.98 }}
                        variants={itemVariants}
                      >
                        <IconWrapper
                          icon={category.icon}
                          isHovered={hoveredCategory === category.id}
                          color={category.color}
                        />
                        <span className="truncate">{category.label}</span>
                      </motion.button>
                    </React.Fragment>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  )
}

export { Component as FluidDropdown }
