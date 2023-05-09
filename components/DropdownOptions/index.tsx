"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useQuizConfig } from "@/store";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
type CategoryType = {
  id:number,
  name:string
}
export default function DropdownOptions() {
  const [categories,setCategories] = useState<CategoryType[]>([])

  const config = useQuizConfig((state:any) => state.config);
  const addCategory = useQuizConfig((state:any) => state.addCategory);
  const addLevel = useQuizConfig((state:any) => state.addLevel);
  const addType = useQuizConfig((state:any) => state.addType);

  useEffect(()=>{
    async function fetchCategory(){
      const {trivia_categories} = await(await fetch('https://opentdb.com/api_category.php')).json()
      
      setCategories([...trivia_categories])    }
    fetchCategory()
  },[]) 
  
  return (
    <>
      <section className="flex justify-evenly items-center py-5">
        {/* Shadcdn */}
        <div className="px-7 py-4 border-gray-100 border-2 rounded-xl w-1/3 mx-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex outline-none justify-between w-full">
              {config.category.name ? config.category.name : "SELECT CATEGORY"}{" "}
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="overflow-y-scroll">
              <DropdownMenuLabel>{config.category.name ? config.category.name : "SELECT CATEGORY"}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {
                categories.map(category=>{
                  return      <DropdownMenuItem key={category.name} onClick={() => addCategory(category.id,category.name)}>
                  {category.name}
                </DropdownMenuItem>
                })
              }
         
            
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* Shadcdn */}
        <div className="px-7 py-4 border-gray-100 border-2 rounded-xl w-1/3 mx-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex outline-none justify-between w-full">
              {config.level ? config.level : "SELECT LEVEL"} <ChevronDown />{" "}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel> {config.level ? config.level : "SELECT LEVEL"}</DropdownMenuLabel>
              <DropdownMenuSeparator />
             {
              ['easy','medium','hard'].map(e=>{
                return  <DropdownMenuItem key={e} onClick={() => addLevel(e)}>
                  {e}
              </DropdownMenuItem>
              })
             }
            
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* Shadcdn */}
        <div className="px-7 py-4 border-gray-100 border-2 rounded-xl w-1/3 mx-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex outline-none justify-between w-full">
              {config.type ? config.type : "SELECT TYPE"} <ChevronDown />{" "}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{config.type ? config.type : "SELECT TYPE"}</DropdownMenuLabel>
              <DropdownMenuSeparator />
             {
              ['boolean','multiple'].map(e=>{
               return <DropdownMenuItem key={e} onClick={() => addType(e)}>
                {e}
              </DropdownMenuItem>
              })
             }
          
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
    </>
  );
}
