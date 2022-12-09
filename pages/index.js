import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import Image from "next/image"
import pic from "/Profile.jpg"
import tracmac from "/Tracmac.png"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Kawish Awaan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-yellow-50 px10">
        <section className="">
      <nav className="py-10 mb-12 flex justify-end">
        
        <ul className="flex  ">
          <li>
        
          </li>
          <li><a className="bg-gradient-to-r from-green-900 to-green-600 text-white px-4 py-2 rounded-md ml-8"href="#">Resume</a></li>
        </ul>
      </nav>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-green-900 font-medium"> Kawish Awaan</h2>
        <h3 className="text-2xl py-2 font-medium"> Software Engineer</h3>
        <p className="text-md py-5 leading-8 text-gray-600" >
        I have made the choice to to pursue software engineering, which I think was the best decision of my life! I recently graduated from a bootcamp (General Assembly) which taught me the skills to become a Software Engineer. I never thought I would be able to transition from working on my feet to sitting behind a computer and coding for hours, that isn't a bad thing though because I can say I do enjoy it. I enjoy learning and I will continue to learn and grow in this journey.
        </p>
      </div>
      <div className=" text-5xl flex justify-center  text-gray-600">
        <a href = "https://www.linkedin.com/in/kawishawaan/">
       <AiFillLinkedin  />
       </a>
      </div>
      <div className="relative mx-auto rounded-full w-80 h-80 mt-20"> 
       <Image className="rounded-full" src={pic}  />
      </div>
        </section>
      
      <section>
        <div>
          <h3 className="text-3xl flex justify-center text-green-900 font-medium mt-10" > Projects Made By Me</h3>
          <p className="text-md py-2  mt-5 leading-8 text-gray-600 text-center" > 
           Tracmac is an app which fitness enthusiasts or people who are health conscious
           can use to track their daily macros, that includes the calories, carbs , proteins , and fats. In this app you can edit the field and add the foods you eat and add when you had this meal (Breakfast , Lunch , or Dinner). This project was made by using MERN stack.
          </p>
        </div>
        <div>
          <div>
            <Image className="h-90 w-90 mx-auto relative" src= {tracmac} />
          </div>
        </div>
      </section>


      </main>

     
    </div>
  )
}
