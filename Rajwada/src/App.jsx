import { useState } from 'react'


import plot from './assets/plot.jpg';
import location from './assets/location.png';
import camera from './assets/camera.png';
import text from './assets/text.png';
import cam3 from './assets/cam3.png';
import bed from './assets/bed room.jpg';
import balcony from './assets/balcony.jpg';
import living from './assets/living room.jpg';
import './App.css'


    

function handleCam(){
    const log = document.getElementById('opencam');
    // camDialog.classList.toggle('hidden');
    if(log.style.display === "block"){
      log.style.display = "none";
    }else{
      log.style.display = "block";
    }
}

function handleBed(){
  const bid = document.getElementById('bed');
  if(bid.style.display === "block"){
    bid.style.display = "none";
  }else{
    bid.style.display = "block";
  }
}
 
function handleBalcony(){
  const balcony = document.getElementById('balcony');
  if(balcony.style.display === "block"){
    balcony.style.display = "none";
  }else{
    balcony.style.display = "block";
  }
}

function handleLiving(){
  const living = document.getElementById('living');
  if(living.style.display === "block"){
    living.style.display = "none";
  }else{
    living.style.display = "block";
  }
}

function handleLocation(){
  const location = document.getElementById('miniLocation');
  if(location.style.display === "block"){
    location.style.display = "none";
  }else{
    location.style.display = "block";
  }
}

function handleForm(){
  const form = document.getElementById('form');
  if(form.style.display === "block"){
    form.style.display = "none";
  }else{
    form.style.display = "block";
  }
}




function App() {
  

  return (
    <>
    {/* ----------heading-------- */}
    <div className='p-5 flex flex-col justify-center items-center '>
      <h1 className='bg-green-400 p-4 mb-5 font-bold'>Plot Plan</h1>
      {/* ------------Plot plan--------- */}
      <img className='h-[440px] w-[630px]' src={plot} alt="plot plan" />
      {/* ---------------Sidebar----------- */}
      </div>
      <div className="  fixed flex flex-col flex-wrap justify-center items-center left-20 inset-y-12 pt-5 ">
        <div className=" flex flex-col flex-wrap justify-center items-center gap-3 shadow-lg bg-slate-200">
          <img onClick={handleLocation} className="h-12 w-9" src={location} alt="location png" />
          <img onClick={handleForm} className="h-12 w-12" src={text} alt="text image" />
          <img id='maincam'onClick={handleCam} className="h-16 w-22" src={camera} alt="camera image" />      
        </div>
      </div>
      {/* ---------Hidden Camera------ */}
      <div id="opencam" className=" hidden" >
      <img onClick={handleBed} className="h-5 w-5 fixed translate-x-[420px] -translate-y-[150px] z-10" src={cam3} alt="camera image" />
      <img onClick={handleBalcony} className="h-5 fixed w-5 translate-x-[680px] -translate-y-[150px] z-10" src={cam3} alt="camera image" />
      <img onClick={handleLiving} className="h-5 fixed w-5 translate-x-[570px] -translate-y-[210px] z-10" src={cam3} alt="camera image" />
      </div>
       {/* ------------main Images--------- */}
       <div><img id='bed' className="fixed hidden -translate-y-[600px] translate-x-[100px]" src={bed} alt="bed room image" />
      <img id='balcony' className="fixed hidden -translate-y-[600px] translate-x-[710px]" src={living} alt="living room image" />
      <img id='living' className="fixed hidden -translate-y-[600px] translate-x-[410px]" src={balcony} alt="balcony image" />
      </div>

      {/* --------location icon-------- */}

      <div id='miniLocation' className="hidden">
        <div className="h-[28px] w-[25px] translate-x-[400px] -translate-y-[190px] z-10 bg-orange-500 rounded-full border border-orange-700 text-white">BR</div>
        <div className="h-[28px] w-[25px] translate-x-[680px] -translate-y-[260px] z-10 bg-orange-500 rounded-full border border-orange-700 text-white">BA</div>
        <div className="h-[28px] w-[25px] translate-x-[570px] -translate-y-[230px] z-10 bg-orange-500 rounded-full border border-orange-700 text-white">LI</div>
      </div>
      
      {/* -------Task Bar-------- */}

      <form id='form'className="hidden">
        <div className="  fixed flex flex-wrap justify-center items-center right-20 inset-y-12 pt-5 ">
        <div className=" flex flex-col flex-wrap justify-center items-center gap-3 shadow-lg bg-slate-200">

          <h1 className=" text-3xl">Task</h1>

          <div className="h-[1px] border border-black w-full"></div>

          <div><div className="h-[28px] w-[25px]  bg-orange-500 rounded-full border border-orange-700 text-white">BR</div>
          <span><input type="text"  /></span>
          </div>
          
          <div><div className="h-[28px] w-[25px]  bg-orange-500 rounded-full border border-orange-700 text-white">BA</div>
          <span><input type="text" /></span>
          </div>

          <div><div className="h-[28px] w-[25px]  bg-orange-500 rounded-full border border-orange-700 text-white">LI</div>
          <span><input type="text"  /></span>
          </div>

          
          <div><button type="submit" className="hover:bg-green-400 hover:border border-black rounded-lg p-2">Submit</button></div>

        </div>
      </div>
      </form>


    </>
    
  )
}

export default App
