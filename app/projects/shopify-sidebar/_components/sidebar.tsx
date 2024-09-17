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
    <div className={cn("flex flex-col h-screen bg-[#1e1e27]", className)}>
      <div className="bg-[#1a1c20] p-4">
        <h2 className="text-white">Shopify</h2>
      </div>
      <ScrollArea className="flex-1">
        <div className="py-2 rounded-2xl min-h-screen bg-white">
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
