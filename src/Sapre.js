import { ImTrophy } from "react-icons/im";
import React, { useState, useEffect } from "react";
import { FaBackwardStep } from "react-icons/fa6";
import { FaForwardStep } from "react-icons/fa6";
import { Green, Red, Violet } from "./Colorhandeler";
import Numbermatch from "./Numbermatch";
import useLocalStorage from "use-local-storage";

const Sapre = () => {
  const [numberlist, setNumberlist] = useState([]);
  const [timerr, setTimerr] = useLocalStorage("timerrr", 60);
  const [randomNumberss, setRandomNumber] = useState("");
  const [periodnumbersa, setPeriodnumber] = useLocalStorage("periodnumbersa");
  const [currentDate, setCurrentDate] = useState("");
  const [count, setcount] = useState("000");
  const [randomNumbers, setRandomNumbers] = useState("");
  const [numbers, setNumbers] = useState("");
  const [dataaa, setDataaa] = useLocalStorage("dataaa", []);

  const [currentPage, setCurrentPage] = useState(1);
  const [hidecontatent, setHidecontatent] = useState(false);
  const [datashare, setDatashare] = useState({ value: "", randomNumberss: "" });
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
    if (randomNumberss > 0 && randomNumberss % 2 === 0) {
      return "result_red";
    } else if (randomNumberss == 5) {
      return "result_greenvot";
    } else if (randomNumberss === 0) {
      return "result_redvot";
    } else {
      return "result_green";
    }
  };
  const colors = () => {
    if (randomNumberss % 2 === 0) {
      return "redcolor";
    } else {
      return "greencolor";
    }
  };

  // pagination

  const ITEMS_PER_PAGE = 10;

  const totalItems = dataaa.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentDataaa = dataaa.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  //   pagination complete

  // Formatted date and  timmer here

  useEffect(() => {
    setCurrentDate(getFormattedDate());
   

    const randomNumbers = Math.floor(Math.random(3000) * (3999 + 1));

    const interval = setInterval(() => {
      setTimerr((prevTimerr) => prevTimerr - 1);
      
      if (timerr === 60){
        setHidecontatent(false)
      
      }
      if (timerr === 60) {
        

        const numericCount = parseInt(count + 1, 10);
        if (count < 10) {
          setNumbers("00");
        } else if (count >= 9 && count < 100) {
          setNumbers("0");
        } else {
          setNumbers("");
        }
        setcount(numericCount);

        setPeriodnumber(currentDate + numbers + count);
      }

      if (timerr === 10) {
        setRandomNumbers(randomNumbers); // Generate a new random number when the timerr reaches 5 seconds
        const newRandomNumber = Math.floor(Math.random() * 10);
        setRandomNumber(newRandomNumber);
        setHidecontatent(true)
      }
    }, 1000);
    if (timerr === 0) {
      setTimerr(60);

      setDataaa((prevDataaa) => [
        {
          dataaaperiods: periodnumbersa,
          dataaanumbers: randomNumbers,
          dataaanumber: randomNumberss,
          dataaacolor: getColorClass(),
          dataaanumbercolor: colors(),
        },
        ...prevDataaa,
      ]);
    }

    return () => clearInterval(interval);
  }, [timerr]);

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


    return () => {
      window.removeEventListener('resize', updateWidth);
    };   
  }, []);

  const numberhandeler = (index, value) => {
    setDatashare({ value: value, randomNumberss: randomNumberss, show: true });
    setShow(true);
  };
  
  const resetHandler = ()=>{
    setDataaa((prevDataaa) => [
      {
        dataaaperiods: periodnumbersa ,
        dataaanumbers: randomNumbers,
        dataaanumber: randomNumberss,
        dataaacolor: getColorClass(),
        dataaanumbercolor: colors(),
      }
    ]);
  }
  const closeNumbermatch = () => {
    setShow(false);
  };
  const conformHandeler = () => {
    setShow(false);
  };
  //   Dataaa names

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
            <p className="period_number">{periodnumbersa}</p>
          </div>
        
          <div className="timmer">
            <h4>Count Down</h4>

            <span>
              {Math.floor(timerr / 60)
                .toString()
                .padStart(2, "0")}
              :{(timerr % 60).toString().padStart(2, "0")}
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
     
      {show ? <Numbermatch data={datashare} onClose={closeNumbermatch}  onConformm ={conformHandeler}/>:" "}

      <div>
        <div className="parityRecord">
          <ImTrophy className="paritytrophy" /> <span> sapre Record</span>
        </div>
      </div>
      <div className="reacords">
        {reacords.map((reacords, index) => {
          return <div className="records_list">{reacords}</div>;
        })}
      </div>
      <div>
        {dataaa &&
          currentDataaa.map((dataaaItem, i) => (
            <div className="listRecords" key={i}>
              <span className="period">{dataaaItem.dataaaperiods}</span>
              <span className="price">{`${dataaaItem.dataaanumbers}${dataaaItem.dataaanumber}`}</span>
              <span id="number" className={dataaaItem.dataaanumbercolor}>
                {dataaaItem.dataaanumber}
              </span>
              <span id="results" className={dataaaItem.dataaacolor}></span>
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
          {Math.ceil(dataaa.length / 10)} <span>Pages</span>
        </div>

        <div
          className="right"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FaForwardStep style={{cursor:"pointer"}} />
        </div>
        <div onClick={resetHandler}>reset</div>
      </div>
    </div>
  );
};

export default Sapre;
