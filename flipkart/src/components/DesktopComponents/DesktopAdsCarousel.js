import React, { useEffect, useRef, useState } from "react";
import "./DesktopAdsCarousel.css";
import arrow from "./../../svgs/blackDropDown.svg";
import Slider from "react-slick";
import { fetchData } from "../../redux-toolkit/dataReducer";
import { useDispatch, useSelector } from "react-redux";

// function DesktopAdsCarousel() {
//   //   const [sliderData, setSliderData] = useState([]);
//   const [sliderIndex, setSliderIndex] = useState(0);
//   const timeoutRef = useRef(null);
//   const [width, setWidth] = useState(window.innerWidth);
//   const delay = 2000;

//   //   useEffect(() => {
//   //     const fetchData = async () => {
//   //       const res = await fetch("./data.json");
//   //       const json = await res.json();
//   //       setSliderData(json.desktopAdsData);
//   //     };
//   //     fetchData();
//   //   }, [setSliderData]);

//   const dispatch = useDispatch();

//   const sliderData = useSelector((state) => {
//     return state.data.data.desktopAdsData;
//   });

//   useEffect(() => {
//     dispatch(fetchData());
//   }, [dispatch]);

//   const setWindowWidth = () => {
//     setWidth(window.innerWidth);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", setWindowWidth);

//     return () => window.removeEventListener("resize", setWindowWidth);
//   }, []);

//   function resetTimeout() {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }

//   useEffect(() => {
//     resetTimeout();

//     timeoutRef.current = setTimeout(
//       () =>
//         setSliderIndex((prevIndex) =>
//           prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [sliderIndex]);

//   function rightHandleClick() {
//     setSliderIndex(sliderIndex + 1);
//     if (sliderIndex >= sliderData.length - 1) {
//       setSliderIndex(0);
//     }
//     if (sliderIndex < 0) {
//       setSliderIndex(sliderData.length - 1);
//     }
//   }
//   function leftHandleClick() {
//     setSliderIndex(sliderIndex - 1);
//     if (sliderIndex > sliderData.length - 1) {
//       setSliderIndex(0);
//     }
//     if (sliderIndex <= 0) {
//       setSliderIndex(sliderData.length - 1);
//     }
//   }

//   return (
//     <div className="desktopAds_container">
//       <div
//         className="desktopAds_slides_container"
//         style={{ transform: `translateX(${-sliderIndex * 25}%)` }}
//       >
//         {sliderData.map((item, indx) => {
//           return <img src={item} key={indx} style={{ width: width - 16 }} />;
//         })}
//       </div>
//       <div className="arrow_btn left" onClick={leftHandleClick}>
//         <button className="btn left_arrow">
//           <img src={arrow} />
//         </button>
//       </div>
//       <div className="arrow_btn right" onClick={rightHandleClick}>
//         <button className="btn right_arrow">
//           <img src={arrow} />
//         </button>
//       </div>
//     </div>
//   );
// }

function Slide() {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./data.json");
      const json = await res.json();
      setSliderData(json.desktopAdsData);
    };
    fetchData();
  }, [setSliderData]);

  //   const dispatch = useDispatch();

  //   const sliderData = useSelector((state) => {
  //     return state.data.data.desktopAdsData;
  //   });
  //   console.log(sliderData);

  //   useEffect(() => {
  //     dispatch(fetchData());
  //   }, [dispatch]);

  return (
    <div>
      <Slider
        autoplay
        autoplaySpeed={2000}
        initialSlide={2}
        infinite
        prevArrow={<Pre />}
        nextArrow={<Next />}
      >
        {sliderData.map((item, index) => {
          return (
            <div key={index}>
              <img
                src={item}
                style={{ width: "100%", height: "280px", objectFit: "cover" }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Slide;

function Pre(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <img src={arrow} />
    </button>
  );
}

function Next(props) {
  const { className, onClick } = props;

  return (
    <button className={className} onClick={onClick}>
      <img src={arrow} />
    </button>
  );
}
