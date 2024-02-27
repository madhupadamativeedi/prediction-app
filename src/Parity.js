import { ImTrophy } from "react-icons/im";
import React, { useState, useEffect } from "react";
import { FaBackwardStep } from "react-icons/fa6";
import { FaForwardStep } from "react-icons/fa6";
import { Green, Red, Violet } from "./Colorhandeler";
import Numbermatch from "./Numbermatch";
import useLocalStorage from "use-local-storage";

const Parity = () => {
  const [numberlist, setNumberlist] = useState([]);
  const [timer, setTimer] = useLocalStorage("timerr", 30);
  const [randomNumber, setRandomNumber] = useState("");
  const [periodnumberpa, setPeriodnumberpar] = useLocalStorage("periodnumberpa");
  const [currentDate, setCurrentDate] = useState("");
  const [count, setcount] = useState("000");
  const [randomNumbers, setRandomNumbers] = useState("");
  const [numbers, setNumbers] = useState("");
  const [data, setData] = useLocalStorage("data", []);

  const [currentPage, setCurrentPage] = useState(1);
  const [hidecontatent, setHidecontatent] = useState(false);
  const [datashare, setDatashare] = useState({ value: "", randomNumber: "" });
  const [show, setShow]= useState(false)
  const [width, setWidth] = useState(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);

  
  const getFormattedDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}${month}${day}`;
  };

  

  const getColorClass = () => {
    if (randomNumber > 0 && randomNumber % 2 === 0) {
      return "result_red";
    } else if (randomNumber == 5) {
      return "result_greenvot";
    } else if (randomNumber === 0) {
      return "result_redvot";
    } else {
      return "result_green";
    }
  };
  const colors = () => {
    if (randomNumber % 2 === 0) {
      return "redcolor";
    } else {
      return "greencolor";
    }
  };

  // pagination

  const ITEMS_PER_PAGE = 10;

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  //   pagination complete

  // Formatted date and  timmer here

  useEffect(() => {
    setCurrentDate(getFormattedDate());
   

    const randomNumbers = Math.floor(Math.random(3000) * (3999 + 1));

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
      
      if (timer === 30){
        setHidecontatent(false)
      
      }
      if (timer === 30) {
        
    setCurrentDate(getFormattedDate());


        const numericCount = parseInt(count + 1, 10);
        if (count < 10) {
          setNumbers("00");
        } else if (count >= 9 && count < 100) {
          setNumbers("0");
        } else {
          setNumbers("");
        }
        setcount(numericCount);

        setPeriodnumberpar(currentDate + numbers + count);
      }

      if (timer === 5) {
        setRandomNumbers(randomNumbers); // Generate a new random number when the timer reaches 5 seconds
        const newRandomNumber = Math.floor(Math.random() * 10);
        setRandomNumber(newRandomNumber);
        setHidecontatent(true)
      }
    }, 1000);
    if (timer === 0) {
      setTimer(30);

      setData((prevData) => [
        {
          dataperiods: periodnumberpa,
          datanumbers: randomNumbers,
          datanumber: randomNumber,
          datacolor: getColorClass(),
          datanumbercolor: colors(),
        },
        ...prevData,
      ]);
    }

    return () => clearInterval(interval);
  }, [timer]);

  //   number list items are generated here

  const numberListHandel = () => {
    let newNumberList = [];

    for (let i = 0; i <= 9; i++) {
      newNumberList.push(i);
    }

    setNumberlist(newNumberList);
  };

  // Call the initialization function when the component mounts
  React.useEffect(() => {
    numberListHandel();
    const updateWidth = () => {
      const newWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      setWidth(newWidth);
    };

    // Initial width update
    updateWidth();

    // Listen for window resize events and update the width
    window.addEventListener('resize', updateWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWidth);
    };   
  }, []);

  const numberhandeler = (index, value) => {
    setDatashare({ value: value, randomNumber: randomNumber, show: true });
    setShow(true);
  };
  
  const closeNumbermatch = () => {
    setShow(false);
  };
  const conformHandeler = () => {
    setShow(false);
  };
  //   Data names

  const reacords = ["Period", "Price", "Number", "Result"];

  return (
    <div>
      <div className="selection_section">
        <div className="timer_period">
          <div>
            <h1 className="period">
              <ImTrophy className="period_icon" />
              <span>Period   {width}</span>
            </h1>
            <p className="period_number">{periodnumberpa}</p>
          </div>
        
          <div className="timmer">
            <h4>Count Down</h4>

            <span>
              {Math.floor(timer / 60)
                .toString()
                .padStart(2, "0")}
              :{(timer % 60).toString().padStart(2, "0")}
            </span>
          </div>
        </div>
        <div className="total_colorsection">
          
        <div className="colour_selection">
          <span className="greencolors">
            <Green />
          </span>
          <span>
            {" "}
            <Violet />
          </span>
          <span>
            <Red />
          </span>
        </div>
        <span className={hidecontatent ? "hide" : " "}></span>
        <div className="number_list">
          {numberlist.map((numbers, index) => {
            return <div className="list" onClick={() => numberhandeler(index, numbers)}>{numbers}</div>;
          })}
        </div>
        </div>
      </div>
     
      {show ? <Numbermatch data={datashare} onClose={closeNumbermatch} onConformm ={conformHandeler}/>:" "}

      <div>
        <div className="parityRecord">
          <ImTrophy className="paritytrophy" /> <span> Parity Record</span>
        </div>
      </div>
      <div className="reacords">
        {reacords.map((reacords, index) => {
          return <div className="records_list">{reacords}</div>;
        })}
      </div>
      <div>
        {data &&
          currentData.map((dataItem, i) => (
            <div className="listRecords" key={i}>
              <span className="period">{dataItem.dataperiods}</span>
              <span className="price">{`${dataItem.datanumbers}${dataItem.datanumber}`}</span>
              <span id="number" className={dataItem.datanumbercolor}>
                {dataItem.datanumber}
              </span>
              <span id="results" className={dataItem.datacolor}></span>
            </div>
          ))}
      </div>
      <div className="paginationbut">
        <div
          className="left"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaBackwardStep style={{cursor:"pointer"}}  />
        </div>
        <div className="numberofperiods">
          {Math.ceil(data.length / 10)} <span>Pages</span>
        </div>

        <div
          className="right"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FaForwardStep style={{cursor:"pointer"}} />
        </div>
      </div>
    </div>
  );
};

export default Parity;
