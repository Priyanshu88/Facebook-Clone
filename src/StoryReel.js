import React from 'react'
import Story from './Story';
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
        <Story image="https://preview.redd.it/vh980x71bo311.jpg?auto=webp&s=922c5776e7ea9e5ed30e14abfbf6e99e5bff60eb"
        profileSrc="https://im.rediff.com/getahead/2017/feb/24agnishwar-jayaprakash1.jpg"
        title="Jai Shekhar"
        
        /> 
        <Story image="http://www.dumpaday.com/wp-content/uploads/2017/02/the-random-pictures-31.jpg"
        profileSrc="https://www.k2tv.co.uk/wp-content/uploads/2016/10/Murtaza-Talpur.jpg"
        title="Agnishwar Jayprakash"
        
        /> 
        <Story image="https://windows10spotlight.com/wp-content/uploads/2020/03/813c4e52566a3fcd782927bb304208c4.jpg"
        profileSrc="http://www.hairstylescut.com/images/members/m53.jpg"
        title="Indrajeet Kalia"
        
        /> 
        <Story image="http://images1.fanpop.com/images/image_uploads/Funny-Things-random-967927_650_750.jpg"
        profileSrc="https://internethelpline.in/wp-content/uploads/2021/04/265.jpg"
        title="Saurabh Chaubey"
        
        /> 
        <Story image="http://images5.fanpop.com/image/photos/31300000/Cool-random-31384067-449-500.jpg"
        profileSrc="https://i.pinimg.com/originals/d7/e8/3f/d7e83fb47b012b0e1156f71f36fb9e4d.jpg"
        title="Aanand Singh"
        
        /> 
    </div>
  )
}

export default StoryReel