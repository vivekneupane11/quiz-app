
import DropdownOptions from '@/components/DropdownOptions'
import InputBox from '@/components/InputBox'
import Button from '@/components/Buttons'
export default function Home() {

  return (
   <section className='flex flex-col justify-center items-center my-10 '>
{/* //from flowbite */}
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to the trivia quiz...</h1>
<section className='p-10 my-10 rounded-lg shadow-xl w-[65%]'>

{/* Flowbite? */}
<InputBox/>

<DropdownOptions/>
<div className=" flex items-center justify-center">
<Button/>
</div>

</section>
   </section>
  )
}
