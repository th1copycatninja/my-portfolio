import React from "react";
import axios from "axios";
import "./MyProject.css";
import Slider from "react-slick";
import { FaHeart  } from "react-icons/fa";
export default function Project() {
  const data = [
    {
      name: "govind",
      age: 26,
    },
    {
      name: "govind",
      age: 26,
    },
    {
      name: "govind",
      age: 26,
    },
    {
      name: "govind",
      age: 26,
    },
    {
      name: "govind",
      age: 26,
    },
    {
      name: "govind",
      age: 26,
    },
    {
      name: "govind",
      age: 26,
    },
    {
      name: "govind",
      age: 26,
    },
    {
      name: "govind",
      age: 26,
    },
  ];

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
  React.useEffect(() => {
    // axios.get(' https://api.github.com/users/govind1530/repos').then((res)=>{
    //     console.log("my repo res",res?.data)
    // }).catch((err)=>{
    //         console.log("err",err);
    // })
  }, []);

  return (
    <div class="container">
      <div class="container-fluid">
        {/* <div>
       <FaHeart />
       </div>  */}
      <Slider {...settings}>
        { data.map((item,index)=>{
            return(
              <div key={index} class="r-container">
                {item?.name}
              </div>
            )
         })}
       </Slider>
       {/* <div>
       <FaHeart />
       </div> */}
       </div> 
      {/* {data.map((item, index) => {
        return (
          <div key={index} class="r-container">
            {item?.name}
          </div>
        );
      })} */}
    </div>
  );
}
