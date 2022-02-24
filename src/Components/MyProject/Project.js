import React,{useState} from "react";
import axios from "axios";
import "./MyProject.css";
import Slider from "react-slick";
import {toast } from 'react-toastify';
import { Oval } from  'react-loader-spinner'
export default function Project() {
const [isLoader,setIsLoader] = useState(false)
const [repoData,setRepoData] = useState([])
React.useEffect(() => {
  setIsLoader(true)
  axios.get(' https://api.github.com/users/govind1530/repos').then((res)=>{
      console.log("my repo res",res?.data)
      setIsLoader(false)
      if(res?.data){
        setRepoData(res?.data)
      }
  }).catch((err)=>{
    setIsLoader(false)
          console.log("err",err);
  })
}, []);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",  }}
        onClick={onClick}
      />
             );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    arrows:true,
  };

  const handleCopyClick = (copyText) => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        cloneUrl()
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return false
    }
  }

  const cloneUrl = () =>{
    toast.info('Clone url is copied', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  return (
    <div class="container">
       {isLoader
       ?
       <div class="container-fluid">
       <Oval color="#00BFFF" height={40} width={40} />
       </div>   
       :

       repoData.length >0?
       <Slider {...settings}>
       { repoData.map((item,index)=>{
           return(
             
             <div key={index} class="r-container">
               <div class="btn-wrapper">
               <button onClick={()=>handleCopyClick(item?.clone_url)} class="btn-container">
                 Clone
               </button>
               </div>
               <div class="repo-name">{item?.name}</div>
             </div>
             
           )
        })}
      </Slider>
       :
      <div class="no-repo-container">
        There is no repo
      </div>
       
       }
 
    
    </div>
  );
}
