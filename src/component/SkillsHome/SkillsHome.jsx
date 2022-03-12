import React from 'react'
import './style/SkillsHome.css'

function SkillsHome() {


  const hoverHandler = () => {
  
    console.log("onMouseEnter")
  }
  const outHandler = () => {

    console.log("onMouseLeave")
  } 

  
  return (
    <div>
      <div className='skills-home'>
        <div className='skills-title-tech'>
          <h1 className='h1-title-tag'  
            onMouseOver={hoverHandler}
            onMouseOut={outHandler}>
              Tech Skills
          </h1>
          <div className='tech-skills'>
            <svg className='skills-home-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>
            <svg className='skills-home-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
            <svg className='skills-home-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"/></svg>
            <svg className='skills-home-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>
            <svg className='skills-home-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>
            <svg className='skills-home-icon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" role="img" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"></path></svg>
            <svg className='skills-home-icon' stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M11.146 0h3.924v18.165c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.001 2.65-6.6 6.753-6.6.637 0 1.121.051 1.707.204V0zm0 9.143a3.894 3.894 0 0 0-1.325-.204c-1.988 0-3.134 1.223-3.134 3.364 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.097c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.529 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39V.021z"></path></svg>
            <svg className='skills-home-icon' stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M16.405 5.676c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.87h-.927c-.03-1.562-.123-3.03-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01c-.103 1.323-.168 2.793-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008L4.25 13.34h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.79h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483h.88zM22.112 18.87h-2.63v-5.53h.885v4.85h1.745zM18.792 19.005l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.763c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zM13.842 17.338c0 .47-.172.856-.516 1.156s-.803.45-1.384.45c-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22.188-.147.3-.354.3-.615 0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476c-.36-.152-.715-.23-1.064-.23-.283 0-.502.068-.654.206-.153.136-.248.31-.248.524 0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zM23.224 11.486c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193-.194-.26-.435-.487-.695-.675-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395-.34-.295-.717-.582-1.104-.823-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514-.192-.368-.38-.775-.547-1.163-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133-.12-.12-.255-.267-.35-.4-.28-.377-.527-.79-.747-1.218-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303-.087-.124-.18-.285-.24-.427-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46.876.556 1.596 1.345 2.085 2.286.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"></path></svg>
            <svg className='skills-home-icon' stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"></path></svg>
            <img className='skills-home-icon' src="https://img.icons8.com/windows/128/ffffff/dungeons-and-dragons--v1.png"/>
            {/* <svg className='skills-home-icon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 23.906a134.338 134.338 0 0 0-3.395 4.314l-19.029 146.516c5.906 4.289 14.005 6.869 22.424 6.869 8.419 0 16.518-2.58 22.424-6.87L259.394 28.22A134.338 134.338 0 0 0 256 23.906zM52.197 82.993c2.633 4.83 5.372 10.094 8.059 15.832 9.706 20.733 19.502 45.58 12.256 66.7-4.893 14.26-18.833 21.828-30.762 27.916-4.115 2.1-7.915 3.778-11.395 5.244 2.888 3.986 6.193 8.714 9.625 14.222 8.46 13.576 17.636 29.8 17.012 46.043-.763 19.865-13.95 39.996-26.19 56.64-1.306 1.777-2.539 3.276-3.827 4.95 14.02-4.176 27.872-7.632 41.064-8.894 16.829-1.61 33.403.825 46.463 10.033a32.098 32.098 0 0 1 4.508-4.094c.01-9.985.11-22.057 1.045-35.396-11.958-1.312-21.933-1.398-32.496 6.494l-7.21 5.387-10.77-14.418 7.208-5.387c11.648-8.702 23.651-10.752 34.836-10.611.746.009 1.489.029 2.227.056 2.72.102 5.365.332 7.96.596 1.037-8.072 2.45-16.309 4.395-24.494-14.211-9.95-35.149-20.405-54.865-20.914l-8.996-.23.465-17.993 8.996.23c22.807.59 43.924 10.096 59.771 20.536 2.512-7.092 5.556-14.02 9.235-20.586-13.379-16.006-31.274-34.787-44.903-42.313l-7.879-4.35 8.701-15.755 7.877 4.35c16.791 9.271 33.688 26.7 46.89 42.447 3.375-4.048 7.1-7.842 11.241-11.293.482-.401.983-.783 1.475-1.174-28.886-34.842-70.211-71.854-112.016-89.774zm407.606 0c-41.805 17.92-83.13 54.932-112.016 89.774.492.391.993.773 1.475 1.174 4.14 3.45 7.866 7.244 11.242 11.29 13.202-15.745 30.098-33.173 46.889-42.445l7.877-4.35 8.7 15.757-7.878 4.35c-13.629 7.525-31.524 26.306-44.903 42.312 3.68 6.567 6.723 13.494 9.235 20.586 15.847-10.44 36.964-19.947 59.771-20.535l8.996-.23.465 17.991-8.996.23c-19.716.51-40.654 10.965-54.865 20.915 1.945 8.185 3.358 16.423 4.394 24.494 2.596-.264 5.24-.494 7.961-.596a89.93 89.93 0 0 1 2.227-.056c11.185-.14 23.188 1.909 34.836 10.61l7.209 5.388-10.772 14.418-7.209-5.387c-10.563-7.892-20.538-7.806-32.496-6.494.935 13.339 1.035 25.411 1.045 35.396a32.098 32.098 0 0 1 4.508 4.094c13.06-9.208 29.634-11.644 46.463-10.033 13.192 1.262 27.044 4.718 41.064 8.894-1.288-1.674-2.52-3.173-3.828-4.95-12.238-16.643-25.426-36.775-26.19-56.64-.623-16.244 8.552-32.467 17.013-46.042 3.432-5.509 6.737-10.237 9.625-14.223-3.48-1.466-7.28-3.144-11.395-5.244-11.929-6.088-25.869-13.655-30.762-27.916-7.246-21.12 2.55-45.967 12.256-66.7 2.687-5.738 5.426-11.002 8.059-15.832zm-234.217 13.53c-1.177 2.384-2.353 4.77-3.56 7.152-10.007 19.736-20.462 38.716-30.81 54.79 8.155-2.615 17.135-4.239 26.936-4.706zm60.828 0l7.434 57.236c9.801.467 18.78 2.09 26.935 4.705-10.347-16.073-20.802-35.053-30.808-54.789-1.208-2.382-2.384-4.768-3.56-7.152zm-70.62 75.386c-17.966 1.358-31.163 7.219-41.532 15.86-11.888 9.907-20.144 23.874-25.776 39.83-9.606 27.217-11.13 59.203-11.379 82.982a46.752 46.752 0 0 1 6.19-.47c6.381-.049 12.665 1.167 18.584 3.21 11.837 4.088 22.782 11.155 33.53 18.495 21.493 14.678 42.256 29.789 60.589 29.789s39.096-15.11 60.59-29.79c10.747-7.339 21.692-14.406 33.53-18.493 7.825-2.703 16.288-3.941 24.773-2.74-.25-23.78-1.773-55.766-11.38-82.983-5.63-15.956-13.887-29.923-25.775-39.83-10.369-8.641-23.566-14.502-41.533-15.86l1.29 9.928-3.132 3.131C284.243 195.089 270 199.605 256 199.605s-28.242-4.516-38.363-14.637l-3.131-3.13zm-27.628 45.28c.574-.008 1.155.006 1.744.04 1.346.082 2.731.281 4.158.618 18.589 4.388 30.298 22.616 39.467 38.57 9.17 15.954 14.875 30.985 14.875 30.985l3.203 8.408-16.322 6.219a775.756 775.756 0 0 1 4.709 4.576c-16 16-64 0-80-16 0-16 0-32 16-32 12.758 0 45.503 30.193 58.395 42.56l-2.805-7.357s-5.318-13.907-13.66-28.422c-8.343-14.515-20.634-28.285-27.998-30.023-.192-.046-7.454 1.83-13.31 5.714-5.858 3.884-10.532 8.155-10.532 8.155l-6.627 6.088-12.178-13.252 6.625-6.09s5.523-5.1 12.764-9.9c5.94-3.94 12.886-8.769 21.492-8.89zm135.668 0c8.606.12 15.552 4.95 21.492 8.888 7.241 4.802 12.764 9.9 12.764 9.9l6.625 6.09-12.178 13.253-6.627-6.088s-4.674-4.27-10.531-8.155c-5.857-3.883-13.12-5.76-13.31-5.714-7.365 1.738-19.656 15.508-27.999 30.023-8.342 14.515-13.66 28.422-13.66 28.422l-2.805 7.357c12.892-12.367 45.637-42.56 58.395-42.56 16 0 16 16 16 32-16 16-64 32-80 16 0 0 1.99-1.955 4.709-4.576l-16.322-6.22 3.203-8.407s5.705-15.03 14.875-30.985c9.17-15.954 20.878-34.182 39.467-38.57a24.473 24.473 0 0 1 4.158-.617c.589-.036 1.17-.05 1.744-.041zM240 316.605v22h-16zm32 0l16 22h-16zm-128.42 11.351c-3.928.01-7.735.878-11.705 2.772-4.352 2.076-7.826 7.184-9.83 14.672-2.004 7.487-2.22 16.729-1.147 23.867 6.332 42.105 37.42 85.884 75.22 105.336 34.955 17.989 84.809 17.989 119.765 0 37.799-19.452 68.887-63.23 75.219-105.336 1.073-7.138.857-16.38-1.147-23.867-2.004-7.488-5.478-12.596-9.83-14.672-7.94-3.788-15.232-3.468-24.13-.395-8.9 3.073-18.839 9.233-29.255 16.346-20.832 14.227-43.505 32.926-70.74 32.926-27.235 0-49.908-18.7-70.74-32.926-10.416-7.113-20.356-13.273-29.254-16.346-4.45-1.536-8.498-2.386-12.426-2.377zm7.42 28.088l11.975 5.987L176 394.55l15.96-18.196c5.902 2.85 11.374 5.433 16.405 7.693l11.465 18.557 6.395-11.205c11.472 4.172 20.813 6.205 29.775 6.205s18.303-2.033 29.775-6.205l6.395 11.205 11.465-18.557c5.03-2.26 10.503-4.843 16.404-7.693L336 394.55l13.025-32.52L361 356.045v14.56c0 11-4.744 23.841-13.512 36.993a105.125 105.125 0 0 1-19.896 22.191L320 414.605l-21.594 32.39a120.352 120.352 0 0 1-14.775 4.88l-6.166-21.27-13.844 24.572c-5.079.36-10.163.36-15.242 0l-13.844-24.572-6.166 21.27a120.352 120.352 0 0 1-14.775-4.88L192 414.605l-7.592 15.183a105.125 105.125 0 0 1-19.896-22.191C155.744 394.445 151 381.604 151 370.605z"></path></svg> */}
          </div>
        </div>
        <div className='skills-title-learn'>
          <h1 className='h1-title-tag'>Learning</h1>
          <div className='leaning-skills'>
            <svg className='skills-home-icon' stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M1.3 24l11.3-11.5L24 24zM0 0h12L0 12.5zM13.4 0L0 14v10l12-12L24 0z"></path></svg>
            <svg className='skills-home-icon' stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12 0C6.0697 0 1.254 4.8158 1.254 10.746c0 3.29 1.4819 6.237 3.8144 8.209l4.5097-7.7987-.3926-.3907c-.115-.1151-.173-.2124-.1757-.3027a.2386.2386 0 010-.0293H9V7.875c0-.6155.5095-1.123 1.125-1.123h.6348V4.7383H13.25V6.752h.625c.6253 0 1.125.5075 1.1348 1.1328v2.539H15v.0098h-.002c-.0032.0868-.0511.1996-.1738.3223l-.0097.0097-.3907.3907 1.9336 3.3417c.8695-1.016 1.3965-2.3255 1.3965-3.752h2.004c0 2.1788-.9096 4.1538-2.3556 5.5606l1.5293 2.6504c2.333-1.9721 3.8145-4.9207 3.8145-8.211C22.7559 4.806 17.94 0 12 0zm6.9316 18.957a10.7911 10.7911 0 01-1.6523 1.1504l1.5195 2.627a.5687.5687 0 00.1973.205L20.5 23.9649c.0586.0391.127.0391.1855.0098.0587-.039.088-.0976.088-.166l-.1563-1.8066c-.0098-.0977-.039-.1856-.0879-.2735l-1.5977-2.7715zm-1.6523 1.1504l-1.498-2.5898a7.6932 7.6932 0 01-3.7715.9863 7.6932 7.6932 0 01-3.7715-.9863l-1.5 2.5976c1.556.8767 3.3504 1.379 5.2617 1.379 1.9182 0 3.7195-.5042 5.2793-1.3868zm-10.541.0078a10.788 10.788 0 01-1.67-1.1601l-1.5976 2.7636c-.0488.088-.0781.1758-.0879.2735l-.1367 1.8164c-.0098.0684.0293.127.0879.166.0586.039.127.0293.1855-.0098l1.504-1.0156c.0781-.0586.1464-.1269.1952-.205l1.5196-2.629zM12 7.7285v.0195c-.8288 0-1.4915.6622-1.4941 1.5.0026.8283.675 1.498 1.4941 1.498h.0098c.819-.0097 1.4914-.6699 1.4941-1.498-.0026-.8281-.675-1.4902-1.4941-1.5L12 7.7285zm-.9473 4.9043l-1.8183 3.1465A5.7067 5.7067 0 0012 16.4922c1.0063 0 1.9547-.2537 2.7559-.7031l-1.8145-3.1504-.375.375c-.1465.1563-.3515.2343-.5566.2343h-.0196c-.1954 0-.4003-.078-.5566-.2343l-.3809-.3809Z"></path></svg>
            <svg className='skills-home-icon' stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M19.9 19.2L15.6 12l4.3-7.2L22 12l-2.1 7.2zm-9.5-.7L5 13.2h8.6l4.3 7.2-7.5-1.9zm0-13.1l7.5-1.9-4.3 7.2H4.9c0 .1 5.5-5.3 5.5-5.3zm11-5.4l-9.8 2.5L10.1 5H7.2L0 12l7.2 7h2.9l1.4 2.5 9.8 2.5 2.6-9.5-1.4-2.5L24 9.5 21.4 0z"></path></svg>
            <svg className='skills-home-icon' stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M11.999 0C5.427 0 .1 5.373.1 12c0 6.628 5.327 12 11.899 12 6.571 0 11.899-5.372 11.899-12 0-6.627-5.328-12-11.9-12zm0 .528c3.038 0 5.895 1.194 8.043 3.36A11.446 11.446 0 0 1 23.374 12c0 3.064-1.183 5.945-3.332 8.112A11.254 11.254 0 0 1 12 23.472a11.253 11.253 0 0 1-8.044-3.36A11.447 11.447 0 0 1 .623 12c0-3.064 1.184-5.945 3.332-8.112A11.252 11.252 0 0 1 12 .528zm-.595 4.223c-1.938.52-3.732 1.516-6.123 4.258-2.392 2.742-1.938 5.006-1.938 5.006s.66-1.558 2.247-3.199c.752-.777 1.314-1.037 1.698-1.038a.598.598 0 0 1 .632.602v5.567c0 .55-.354.669-.68.663-.279-.005-.537-.102-.537-.102 1.63 2.368 5.526 2.7 5.526 2.7l1.711-1.828.04.035 1.568 1.336c2.866-1.703 4.248-4.86 4.248-4.86-1.279 1.353-2.094 1.669-2.578 1.667-.429-.003-.597-.255-.597-.255-.023-.117-.063-1.81-.078-3.505-.014-1.756-.001-3.513.087-3.518.494-.929 2.073-2.802 2.073-2.802-2.948.581-4.556 2.513-4.556 2.513-.475-.374-1.444-.311-1.444-.311.454.25.907.976.907 1.578v5.92s-.99.873-1.752.873c-.451 0-.729-.247-.881-.449a1.182 1.182 0 0 1-.15-.258V8.033a.634.634 0 0 1-.363.123c-.162 0-.33-.082-.444-.32-.086-.18-.141-.45-.141-.842 0-1.35 1.525-2.243 1.525-2.243z"></path></svg>
            <svg className='skills-home-icon' stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM5.07089 13C5.55612 16.3923 8.47353 19 12 19C15.5265 19 18.4439 16.3923 18.9291 13H14.8293C14.4174 14.1652 13.3062 15 12 15C10.6938 15 9.58251 14.1652 9.17068 13H5.07089ZM18.9291 11C18.4439 7.60771 15.5265 5 12 5C8.47353 5 5.55612 7.60771 5.07089 11H9.17068C9.58251 9.83481 10.6938 9 12 9C13.3062 9 14.4174 9.83481 14.8293 11H18.9291ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"></path></svg>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default SkillsHome