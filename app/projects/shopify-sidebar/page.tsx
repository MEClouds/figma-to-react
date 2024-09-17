"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Home,
  ShoppingBag,
  Tag,
  Users,
  Image,
  BarChart2,
  Megaphone,
  Percent,
  ChevronRight,
  CornerDownRight,
} from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Sidebar({ className }: SidebarProps) {
  const [activeItem, setActiveItem] = React.useState("Collections")
  const [openAccordion, setOpenAccordion] = React.useState<string | undefined>(
    "products"
  )

  const handleAccordionChange = (value: string) => {
    setOpenAccordion(value === openAccordion ? undefined : value)
  }

  return (
    <div className={cn("flex flex-col h-screen bg-[#f6f6f7]", className)}>
      <div className="bg-[#1a1c20] p-4">
        <svg className="w-32" viewBox="0 0 100 30">
          <path
            fill="#fff"
            d="M25.46,14.35c-.46-.25-.69-.72-.69-1.41V9.51c0-1.29-.98-2.15-2.42-2.15-1.68,0-2.66,.72-2.95,2.15l1.65,.36c.16-.75,.6-1.12,1.3-1.12,.69,0,1.04,.37,1.04,1.12v.51l-1.62,.1c-1.46,.09-2.27,.84-2.27,2.11,0,1.29,.81,2.13,2.07,2.13,.84,0,1.49-.34,1.95-1.02,.13,.67,.55,1.02,1.27,1.02,.36,0,.69-.09,1.02-.27l-.36-1.09Zm-2.11-1.74c0,.63-.55,1.12-1.3,1.12-.55,0-.87-.28-.87-.84,0-.54,.3-.84,.9-.87l1.27-.07v.67Zm6.32,2.86c1.71,0,2.86-1.32,2.86-3.28s-1.15-3.28-2.86-3.28-2.86,1.32-2.86,3.28,1.15,3.28,2.86,3.28Zm0-1.41c-.78,0-1.27-.75-1.27-1.87s.49-1.87,1.27-1.87,1.27,.75,1.27,1.87-.49,1.87-1.27,1.87Zm6.12,1.41c1.71,0,2.86-1.32,2.86-3.28s-1.15-3.28-2.86-3.28-2.86,1.32-2.86,3.28,1.15,3.28,2.86,3.28Zm0-1.41c-.78,0-1.27-.75-1.27-1.87s.49-1.87,1.27-1.87,1.27,.75,1.27,1.87-.49,1.87-1.27,1.87Zm5.84,1.41c.72,0,1.35-.25,1.87-.75l-.09,1.62v2.42h1.59v-9.62h-1.52l-.07,.75c-.52-.57-1.15-.87-1.87-.87-1.59,0-2.66,1.32-2.66,3.23s1.07,3.23,2.75,3.23Zm.36-1.41c-.81,0-1.35-.75-1.35-1.82s.54-1.82,1.35-1.82,1.35,.75,1.35,1.82-.54,1.82-1.35,1.82Zm8.38,1.29v-4.64c0-1.29-.87-2.07-2.39-2.07-1.65,0-2.6,.78-2.83,2.33l1.59,.21c.1-.72,.52-1.07,1.24-1.07,.72,0,1.07,.35,1.07,1.04v.45l-1.85,.11c-1.41,.09-2.15,.81-2.15,2.07,0,1.24,.78,2.04,1.98,2.04,.87,0,1.57-.37,2.04-1.1,.15,.72,.6,1.1,1.35,1.1,.33,0,.63-.07,.93-.21l-.3-1.07c-.13,.04-.22,.06-.28,.06-.25,0-.37-.16-.37-.48Zm-1.62-1.82c0,.63-.54,1.1-1.27,1.1-.52,0-.84-.28-.84-.81,0-.51,.3-.81,.87-.84l1.24-.07v.63Zm4.35,1.94h1.59v-6.6h-1.59v6.6Zm-.13,2.39c0,.54,.43,.96,.96,.96s.96-.43,.96-.96-.43-.96-.96-.96-.96,.43-.96,.96Zm4.93-2.39h1.59v-9.62h-1.59v9.62Zm6.4,.12c1.71,0,2.86-1.32,2.86-3.28s-1.15-3.28-2.86-3.28-2.86,1.32-2.86,3.28,1.15,3.28,2.86,3.28Zm0-1.41c-.78,0-1.27-.75-1.27-1.87s.49-1.87,1.27-1.87,1.27,.75,1.27,1.87-.49,1.87-1.27,1.87Zm6.64,1.41c1.43,0,2.48-.72,2.71-1.85l-1.49-.21c-.15,.54-.6,.84-1.21,.84-.84,0-1.38-.67-1.38-1.71v-.13h4v-.6c0-2.04-1.21-3.36-2.83-3.36s-2.89,1.35-2.89,3.28,1.24,3.33,3.08,3.33Zm-1.38-4.22c.07-.97,.6-1.52,1.32-1.52s1.21,.52,1.24,1.52h-2.57Zm6.76,4.1h1.62l1.74-6.6h-1.62l-.99,4.4-1.1-4.4h-1.57l-1.1,4.4-.99-4.4h-1.62l1.74,6.6h1.62l1.13-4.13,1.13,4.13Z"
          />
        </svg>
      </div>
      <ScrollArea className="flex-1">
        <div className="py-2">
          <nav className="space-y-1 px-2">
            <button className="flex items-center w-full px-2 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
              <Home className="mr-3 h-6 w-6 text-gray-400" />
              Home
            </button>
            <Accordion
              type="single"
              collapsible
              value={openAccordion}
              onValueChange={handleAccordionChange}
              className="w-full border-none"
            >
              <AccordionItem value="orders" className="border-none">
                <AccordionTrigger className="flex items-center w-full px-2 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
                  <div className="flex items-center flex-1">
                    <ShoppingBag className="mr-3 h-6 w-6 text-gray-400" />
                    Orders
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-2 m-0 p-0">
                    {["Drafts", "Abandoned checkouts"].map((item) => (
                      <div key={item} className="flex items-stretch">
                        <div className="flex justify-center bg-green-400 w-7 items-stretch relative">
                          <div className=" w-[2px] border-l-2 border-black absolute top-0 ">
                            {" "}
                          </div>
                          <CornerDownRight className="ml-3 h-full bg-red-600 " />
                        </div>
                        <button className="flex items-center w-full px-2 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
                          {item}
                        </button>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="products" className="border-none">
                <AccordionTrigger className="flex items-center w-full px-2 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100">
                  <div className="flex items-center flex-1">
                    <Tag className="mr-3 h-6 w-6 text-gray-400" />
                    Products
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-11 space-y-1">
                    {[
                      "Collections",
                      "Inventory",
                      "Purchase orders",
                      "Transfers",
                      "Gift cards",
                    ].map((item) => (
                      <button
                        key={item}
                        className={cn(
                          "flex items-center w-full px-2 py-2 text-sm font-medium rounded-lg",
                          activeItem === item
                            ? "bg-white text-[#1a1c20]"
                            : "text-gray-600 hover:bg-gray-100"
                        )}
                        onClick={() => setActiveItem(item)}
                      >
                        {activeItem === item && (
                          <ChevronRight className="mr-2 h-4 w-4" />
                        )}
                        {item}
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {[
              { icon: Users, label: "Customers" },
              { icon: Image, label: "Content" },
              { icon: BarChart2, label: "Analytics" },
              { icon: Megaphone, label: "Marketing" },
              { icon: Percent, label: "Discounts" },
            ].map((item) => (
              <button
                key={item.label}
                className="flex items-center w-full px-2 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100"
              >
                <item.icon className="mr-3 h-6 w-6 text-gray-400" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </ScrollArea>
    </div>
  )
}
