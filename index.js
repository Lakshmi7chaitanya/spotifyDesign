let header=document.querySelector('header');
let navBar=document.querySelector('.navBar');
let menu=document.querySelector('.menu');
let burger=document.querySelector('.burger')
let menuList=document.querySelector('.menu-list')
burger.addEventListener('click',()=>
{
 burger.classList.toggle('toggle')
 menuList.classList.toggle('menu-active')
})

let about=document.querySelector('.about');
let cardImg=document.querySelectorAll('.cardImg')

let cards=document.querySelectorAll('.cards');
let card1=document.querySelector('#card1');
let card2=document.querySelector('#card2');
let card3=document.querySelector('#card3');

cardImg.forEach(card => {
    card.addEventListener('mouseover',()=>
    {
        card.classList.add('scale')
        cardImg.forEach(otherCard => {
            if (otherCard !== card)
            {
             otherCard.classList.add('blur')

            }
            else {
                otherCard.classList.remove('blur'); // Ensure no blur on the hovered card
            }
        })
    })
})
cardImg.forEach(card=>{
    card.addEventListener('mouseout',()=>
    {
        card.classList.remove('scale')
        cardImg.forEach(othercard=>
        {
           if(othercard!==card)
           {
            othercard.classList.remove('blur')
           }
        })
    })
})

let accordian=document.querySelector('.accordian')
let accordianContainer=document.querySelector('.accordian-container')
let accordianHead=document.querySelector('.accordian-head')
let accordianBody=document.querySelector('.accordian-body')
let arrow=document.querySelector('.arrow')

let question=document.querySelector('.question')
let answer=document.querySelector('.answer')

    arrow.addEventListener("click",()=>
        {
            
            result(answer)

    });
   
    
function result(answerElement )
{
    if(answerElement.style.height==='auto'){
      answerElement.style.height = '0vh'
      arrow.style.transform="rotate(0deg)"
      
        }
    else
    {
        answerElement.style.height = 'auto'
     arrow.style.transform="rotate(180deg)"
  
    }
}
function updateTime() {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

    // UK (London) Time
    const ukTime = new Intl.DateTimeFormat('en-GB', { ...options, timeZone: 'Europe/London' }).format(new Date());
    document.getElementById('uk-time').textContent = `UK Time: ${ukTime}`;

    // US (New York) Time
    const usTime = new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/New_York' }).format(new Date());
    document.getElementById('us-time').textContent = `US Time: ${usTime}`;

    // Sweden (Stockholm) Time
    const seTime = new Intl.DateTimeFormat('sv-SE', { ...options, timeZone: 'Europe/Stockholm' }).format(new Date());
    document.getElementById('se-time').textContent = `Sweden Time: ${seTime}`;
  }

  // Update the time every second
  setInterval(updateTime, 1000);

  // Initial call
  updateTime();


// carosel
  const images = document.querySelector('.carousel-images');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  
  let currentIndex = 0;

  // Function to update carousel position
  function updateCarousel() {
    images.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Event listener for next button
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.children.length; // Loop back to the start
    updateCarousel();
  });

  // Event listener for previous button
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.children.length) % images.children.length; // Loop back to the end
    updateCarousel();
  });