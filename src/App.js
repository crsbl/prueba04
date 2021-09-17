
import './App.css';
import './App_res.css';
import React, {useState} from 'react';
import react from 'react';
import img00 from './mg/unnamed.jpg'

function App() {
  
  const bd_fvrta = [{

    titulo:"Fight Club",
    year:"1999",
    year00 : "18",
    duracion:"2h 19min",
    rating:"8.8",
    videos:"9 VIDEOS",
    imagenes:"99 + PHOTOS",
    portda:img00,
    tipo:"Drama",
    rate:"36",  
  descripcion:"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
  director:"David Fincher",
  escritor00:"Chuck Palahniuk",
  prmio_escritor00:'(novel)',
  escritor01:"Jim Uhls",
  prmio_escritor01:'(screenplay)',
  stars00:"Brad Pitt  ",
  stars01:"Edward Norton",
  stars02:"Meat Loaf",
  user_reviews:"4k",
  critic:"383",
  metascore:"66"
  
  
} ]
  

const [plc_fv, setplc_fv]= useState(bd_fvrta)
  
  return (
<react.Fragment>


    <div className="d_gnrl00">


    
    <div className='d_gnrl01'>
    {

plc_fv.map((plcl)=>{


return<div className='d_cntr00'>
  
<div className='d_cntr01'>

<div className='d_cntr02'>
<h2 className='h2_ttle00'>{plcl.titulo}</h2>

<div className='d_gp00'>
<h3 className='h3_ttle01'>{plcl.year}</h3>
<h3 className='h3_ttle02'>{plcl.year00}</h3>
<h3 className='h3_ttle03'>{plcl.duracion}</h3>
</div>

</div>


<div className='d_gp01'>

<div className='d_dts00'>
<h3 className='h3_ttle04'>IMDb RATING</h3>

<div className='d_dts00_00'>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipcicon00" viewBox="0 0 24 24" fill="yellow" role="presentation"><path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>
<div className='d_dts00_00_00'>

<div className='d_dts00_00_00_00'>
<h3 className='h3_ttle11'>{plcl.rating}</h3>
<h3 className='h3_ttle12'>/10</h3>
</div>
<div className='d_dts00_00_00_01'>
<h3 className='h3_ttle04'>1.9M</h3>
</div>


</div>

</div>


</div>


<div className='d_dts01'>
<h3 className='h3_ttle04'>YOUR RATING</h3>

<div className='d_dts01_00'>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipcicon00" viewBox="0 0 24 24" fill="rgb(100, 156, 189)" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></svg>
<h3 className='h3_ttle15'>Rate</h3>
</div>
</div>

<div className='d_dts02'>
<h3 className='h3_ttle04'>POPULARTY</h3>
<div className='d_dts02_02'>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipcicon00" viewBox="0 0 24 24" fill="red" role="presentation"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8 0-1.4.4-2.8 1-3.9L8.4 12c.4.4 1 .4 1.4 0l1.4-1.5 2.4 2.6-1.4 1.4c-.3.3-.1.9.4.9h4.3c.3 0 .5-.2.5-.5v-4.3c0-.4-.5-.7-.9-.3L15 11.6l-3.1-3.3c-.4-.4-1-.4-1.4 0L9.2 9.8 6.3 6.4C7.7 4.9 9.7 4 12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8z"></path></svg>
<h3 className='h3_ttle14'>200</h3>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--arrow-drop-down TrendingButton__DirectionIcon-bb3vt8-6 bKMiD" viewBox="0 0 24 24" fill="white" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path></svg>
<h3 className='h3_ttle16'>{plcl.rate}</h3>
</div>
</div>

</div>

</div>


<div className='d_gnrl02'>

  <div className='d_gp02'>
<h3 className='h3_ttle05'>Cast & crew</h3>
<h3 className='h3_ttle05'>User reviews</h3>
<h3 className='h3_ttle05'>Trivia</h3>
<h3 className='h3_ttle05'>IMDbPro</h3>
<div className='d_gp02'>
  
  <div className='d_gp03'>
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--categories ipc-responsive-button__icon" viewBox="0 0 24 24" fill="white" role="presentation"><path d="M12.036 17.153a4.579 4.579 0 0 1 5.117-5.117c1.97.239 3.604 1.802 3.935 3.758a4.576 4.576 0 0 1-1.042 3.76l.197.19h.556L22.5 21.5a.743.743 0 0 1 0 1.049.743.743 0 0 1-1.049 0l-1.708-1.75v-.556l-.19-.197a4.576 4.576 0 0 1-3.759 1.042c-1.956-.331-3.519-1.964-3.758-3.935zm4.54-3.745a3.163 3.163 0 0 0-3.168 3.168 3.163 3.163 0 0 0 3.168 3.167 3.163 3.163 0 0 0 3.167-3.167 3.163 3.163 0 0 0-3.167-3.168zM8.298 11.972c1.47 0 2.73 1.26 2.73 2.73v3.464c0 1.574-1.26 2.834-2.73 2.834H4.834A2.822 2.822 0 0 1 2 18.166v-3.464c0-1.47 1.26-2.73 2.73-2.73h3.568zm0 1.47H4.834c-.735 0-1.26.525-1.26 1.26v3.464c0 .735.525 1.26 1.26 1.26h3.464c.735 0 1.26-.525 1.26-1.26v-3.464c0-.63-.525-1.26-1.26-1.26zM8.298 2c1.47 0 2.73 1.26 2.73 2.73v3.463c0 1.575-1.26 2.73-2.73 2.73H4.834C3.26 10.923 2 9.768 2 8.193V4.73C2 3.26 3.26 2 4.73 2h3.568zm0 1.47H4.834c-.735 0-1.26.524-1.26 1.26v3.463c0 .735.525 1.26 1.26 1.26h3.464c.735 0 1.26-.525 1.26-1.26V4.73c0-.735-.525-1.26-1.26-1.26zM18.27 2C19.74 2 21 3.26 21 4.73v3.463c0 1.575-1.155 2.73-2.73 2.73h-3.463c-1.47 0-2.73-1.26-2.73-2.73V4.73c0-1.47 1.26-2.729 2.73-2.729h3.464zm0 1.47h-3.463c-.735 0-1.26.524-1.26 1.26v3.463c0 .735.525 1.26 1.26 1.26h3.464c.735 0 1.26-.525 1.26-1.26V4.73c0-.735-.525-1.26-1.26-1.26z"></path></svg>
<h3 className='h3_ttle06'>All topics</h3>
</div>
<div className='d_gp04'>
  <div className='d_ipc_icon00'>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--share" viewBox="0 0 24 24" fill="white" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"></path></svg>
</div>
</div>
</div>

  </div>
</div>

<div className='d_centr00'>

<div className='d_centr00_00'  style={{backgroundImage:`url(${plcl.portda})`}}>


</div>

<div className='d_centr00_01'>


<iframe className='frme_00' src="https://www.youtube.com/embed/R7aiJtcJ0AQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



</div>

<div className='d_centr00_02'>
<div className='d_centr00_02_00'>

<div className='d_centr00_02_00_00'>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipcicon01" viewBox="0 0 24 24" fill="white" role="presentation"><path d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1zm17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l5.47 4.1c.27.2.27.6 0 .8L12 14.5z"></path></svg>
<h3 className='h3_ttle13'>{plcl.videos}</h3>
</div>

</div>
<div className='d_centr00_02_00'>
<div className='d_centr00_02_00_00'>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipcicon01" viewBox="0 0 24 24" fill="white" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-10.6-3.47l1.63 2.18 2.58-3.22a.5.5 0 0 1 .78 0l2.96 3.7c.26.33.03.81-.39.81H9a.5.5 0 0 1-.4-.8l2-2.67c.2-.26.6-.26.8 0zM2 7v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1s-1 .45-1 1z"></path></svg>
<h3 className='h3_ttle13'>{plcl.imagenes}</h3>
</div>

</div>
<div className='d_centr00_02_00_01'></div>
</div>

</div>

<div className='d_centr02'>

<div className='d_centr02_00'>

<div className='d_centr02_00_00'>
<h3 className='h3_ttle07'>{plcl.tipo}</h3>
<p className='p_00'>{plcl.descripcion}</p>
</div>

<div className='d_centr02_00_01'>

 
<h3 className='h3_ttle08'>Director</h3>
<a className='a_00'>{plcl.director}</a>
</div>

<div className='d_centr02_00_01'>
<h3 className='h3_ttle08'>Writers</h3>

<a className='a_05'>{plcl.escritor00}</a>
<p className='p_01'>{plcl.prmio_escritor00}</p>

<a className='a_05'>{plcl.escritor01}</a>
<p className='p_01'>{plcl.prmio_escritor01}</p>

</div>

<div className='d_centr02_00_01'>
<h3 className='h3_ttle08'>Star</h3>
<div  className='d_centr02_00_02'>
<a className='a_01'>{plcl.stars00}</a>
<a className='a_02'>{plcl.stars01}</a>
<a className='a_03'>{plcl.stars02}</a>
</div>
<div className='d_ipc00'>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipcicon00 ipc-icon--chevron-right" viewBox="0 0 24 24" fill="white" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path></svg>
</div>
</div>

<div className='d_centr02_00_01'>
<div className='d_lg00'>
<svg class="ipc-logo pro-upsell__logo" width="54" height="14.538461538461538" viewBox="0 0 52 14" xmlns="http://www.w3.org/2000/svg" version="1.1"><g fill="white"><rect x="0" y="1" width="3.21" height="12.34"></rect><path d="M10,1 L9.3,6.76 L8.84,3.63 C8.7,2.62 8.58,1.75 8.45,1 L4.3,1 L4.3,13.34 L7.11,13.34 L7.11,5.19 L8.3,13.34 L10.3,13.34 L11.42,5 L11.42,13.33 L14.22,13.33 L14.22,1 L10,1 Z"></path><path d="M19.24,3.22 C19.3711159,3.29185219 19.4602235,3.42180078 19.48,3.57 C19.5340993,3.92393477 19.554191,4.28223587 19.54,4.64 L19.54,9.42 C19.578852,9.92887392 19.5246327,10.4405682 19.38,10.93 C19.27,11.12 18.99,11.21 18.53,11.21 L18.53,3.11 C18.7718735,3.09406934 19.0142863,3.13162626 19.24,3.22 Z M19.24,13.34 C19.8163127,13.3574057 20.3928505,13.3138302 20.96,13.21 C21.3245396,13.1481159 21.6680909,12.9969533 21.96,12.77 C22.2288287,12.5438006 22.4209712,12.2398661 22.51,11.9 C22.643288,11.1679419 22.6969338,10.4236056 22.67,9.68 L22.67,5.34 C22.6662002,4.55669241 22.6060449,3.77467335 22.49,3 C22.43037,2.59841431 22.260779,2.22116094 22,1.91 C21.6636187,1.56093667 21.2326608,1.317654 20.76,1.21 C19.7709421,1.02848785 18.7647002,0.958050915 17.76,1 L15.32,1 L15.32,13.34 L19.24,13.34 Z"></path><path d="M27.86,10.34 C27.8769902,10.7218086 27.8501483,11.1043064 27.78,11.48 C27.72,11.63 27.46,11.71 27.26,11.71 C27.0954951,11.7299271 26.9386363,11.6349863 26.88,11.48 C26.7930212,11.1542289 26.7592527,10.8165437 26.78,10.48 L26.78,7.18 C26.7626076,6.84408875 26.7929089,6.50740774 26.87,6.18 C26.9317534,6.03447231 27.0833938,5.94840616 27.24,5.97 C27.43,5.97 27.7,6.05 27.76,6.21 C27.8468064,6.53580251 27.8805721,6.87345964 27.86,7.21 L27.86,10.34 Z M23.7,1 L23.7,13.34 L26.58,13.34 L26.78,12.55 C27.0112432,12.8467609 27.3048209,13.0891332 27.64,13.26 C28.0022345,13.4198442 28.394069,13.5016184 28.79,13.5 C29.2588971,13.515288 29.7196211,13.3746089 30.1,13.1 C30.4399329,12.8800058 30.6913549,12.5471372 30.81,12.16 C30.9423503,11.6167622 31.0061799,11.0590937 31,10.5 L31,7 C31.0087531,6.51279482 30.9920637,6.02546488 30.95,5.54 C30.904474,5.28996521 30.801805,5.05382649 30.65,4.85 C30.4742549,4.59691259 30.2270668,4.40194735 29.94,4.29 C29.5869438,4.15031408 29.2096076,4.08232558 28.83,4.09 C28.4361722,4.08961884 28.0458787,4.16428368 27.68,4.31 C27.3513666,4.46911893 27.0587137,4.693713 26.82,4.97 L26.82,1 L23.7,1 Z"></path></g><g fill="#33C5F3"><path d="M32.13,1 L35.32,1 C35.9925574,0.978531332 36.6650118,1.04577677 37.32,1.2 C37.717112,1.29759578 38.0801182,1.50157071 38.37,1.79 C38.6060895,2.05302496 38.7682605,2.37391646 38.84,2.72 C38.935586,3.27463823 38.9757837,3.8374068 38.96,4.4 L38.96,5.46 C38.9916226,6.03689533 38.9100917,6.61440551 38.72,7.16 C38.5402933,7.53432344 38.2260614,7.82713037 37.84,7.98 C37.3049997,8.18709035 36.7332458,8.28238268 36.16,8.26 L35.31,8.26 L35.31,13.16 L32.13,13.16 L32.13,1 Z M35.29,3.08 L35.29,6.18 L35.53,6.18 C35.7515781,6.20532753 35.9725786,6.12797738 36.13,5.97 C36.2717869,5.69610033 36.3308522,5.38687568 36.3,5.08 L36.3,4.08 C36.3390022,3.79579475 36.2713114,3.5072181 36.11,3.27 C35.8671804,3.11299554 35.5771259,3.04578777 35.29,3.08 Z"></path><path d="M42,4.36 L41.89,5.52 C42.28,4.69 43.67,4.42 44.41,4.37 L43.6,7.3 C43.2290559,7.27725357 42.8582004,7.34593052 42.52,7.5 C42.3057075,7.61238438 42.1519927,7.81367763 42.1,8.05 C42.0178205,8.59259006 41.9843538,9.14144496 42,9.69 L42,13.16 L39.34,13.16 L39.34,4.36 L42,4.36 Z"></path><path d="M51.63,9.71 C51.6472876,10.3265292 51.6003682,10.9431837 51.49,11.55 C51.376862,11.9620426 51.1639158,12.3398504 50.87,12.65 C50.5352227,13.001529 50.1148049,13.2599826 49.65,13.4 C49.0994264,13.5686585 48.5257464,13.6496486 47.95,13.64 C47.3333389,13.6524659 46.7178074,13.5818311 46.12,13.43 C45.6996896,13.322764 45.3140099,13.1092627 45,12.81 C44.7275808,12.5275876 44.5254637,12.1850161 44.41,11.81 C44.2627681,11.2181509 44.1921903,10.6098373 44.2,10 L44.2,7.64 C44.1691064,6.9584837 44.2780071,6.27785447 44.52,5.64 C44.7547114,5.12751365 45.1616363,4.71351186 45.67,4.47 C46.3337168,4.13941646 47.0688388,3.97796445 47.81,4 C48.4454888,3.98667568 49.0783958,4.08482705 49.68,4.29 C50.1352004,4.42444561 50.5506052,4.66819552 50.89,5 C51.1535526,5.26601188 51.3550281,5.58700663 51.48,5.94 C51.6001358,6.42708696 51.6506379,6.92874119 51.63,7.43 L51.63,9.71 Z M48.39,6.73 C48.412199,6.42705368 48.3817488,6.12255154 48.3,5.83 C48.2091142,5.71223121 48.0687606,5.64325757 47.92,5.64325757 C47.7712394,5.64325757 47.6308858,5.71223121 47.54,5.83 C47.447616,6.12046452 47.4136298,6.42634058 47.44,6.73 L47.44,10.93 C47.4168299,11.2204468 47.4508034,11.5126191 47.54,11.79 C47.609766,11.9270995 47.7570827,12.0067302 47.91,11.99 C48.0639216,12.0108082 48.2159732,11.9406305 48.3,11.81 C48.3790864,11.5546009 48.4096133,11.2866434 48.39,11.02 L48.39,6.73 Z"></path></g></svg>
</div>

<a className='a_04'>See production, box office & company info </a>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--launch ipc-icon--inline WatchBox__PWO_TitleIcon-sc-1kx3ihk-2 fBAFyx" viewBox="0 0 24 24" fill="white" role="presentation"><path d="M16 16.667H8A.669.669 0 0 1 7.333 16V8c0-.367.3-.667.667-.667h3.333c.367 0 .667-.3.667-.666C12 6.3 11.7 6 11.333 6h-4C6.593 6 6 6.6 6 7.333v9.334C6 17.4 6.6 18 7.333 18h9.334C17.4 18 18 17.4 18 16.667v-4c0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.667V16c0 .367-.3.667-.667.667zm-2.667-10c0 .366.3.666.667.666h1.727L9.64 13.42a.664.664 0 1 0 .94.94l6.087-6.087V10c0 .367.3.667.666.667.367 0 .667-.3.667-.667V6h-4c-.367 0-.667.3-.667.667z"></path></svg>

</div>

</div>

<div className='d_centr02_01'>

  <div className='d_centr02_01_00'>

<div className='d_centr02_01_00_00'>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipcicon02" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M10.8 15.9l4.67-3.5c.27-.2.27-.6 0-.8L10.8 8.1a.5.5 0 0 0-.8.4v7c0 .41.47.65.8.4zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>


<div className='d_centr02_01_00_00_00'>
<h3 className='h3_ttle09'>Watch on Prime Video 
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class=" " viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M16 16.667H8A.669.669 0 0 1 7.333 16V8c0-.367.3-.667.667-.667h3.333c.367 0 .667-.3.667-.666C12 6.3 11.7 6 11.333 6h-4C6.593 6 6 6.6 6 7.333v9.334C6 17.4 6.6 18 7.333 18h9.334C17.4 18 18 17.4 18 16.667v-4c0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.667V16c0 .367-.3.667-.667.667zm-2.667-10c0 .366.3.666.667.666h1.727L9.64 13.42a.664.664 0 1 0 .94.94l6.087-6.087V10c0 .367.3.667.666.667.367 0 .667-.3.667-.667V6h-4c-.367 0-.667.3-.667.667z"></path></svg>

</h3>
<h3 className='h3_ttle10'>included with Prime </h3>
</div>


</div>

<div className='d_centr02_01_00_01'>

<div className='d_centr02_01_00_01_00'>
<h3 className='h3_ttle11'>+ Add to Watchlist </h3>
</div>

<div className='d_centr02_01_00_01_01'>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--arrow ipc-btn__icon" viewBox="0 0 24 24" fill="white" role="presentation"><path opacity=".87" fill="none" d="M24 24H0V0h24v24z"></path><path d="M15.88 9.29L12 13.17 8.12 9.29a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41c-.39-.38-1.03-.39-1.42 0z"></path></svg>
</div>

</div>

<div className='d_centr02_01_00_02'>
<span className='span_00'>{plcl.user_reviews}</span>
  <a className='a_06'>User reviews</a>
  <span className='span_00'>{plcl.critic}</span>
  <a className='a_06'>Critic reviews</a>
  <span className='span_01'>{plcl.metascore}</span>
  <a className='a_06'>Metascore</a>
</div>
  
  
  </div>

  <div className='d_centr02_01_00'></div>

</div>
</div>


</div>
})

}



</div>
   

   
    </div>




    </react.Fragment>

  );
}

export default App;
