import React, { useEffect, useState } from "react";



const Numbermatch = ({ data, onClose, onConformm}) => {
    const [colorChange, setColorchange] = useState(false);
    const [colorChange1, setColorchange1] = useState(false);
    const [colorChange2, setColorchange2] = useState(false);
    const [colorChange3, setColorchange3] = useState(false);
    const [count, setCount] = useState(1);
    const [amount, setAmount] = useState(10);
    const [totalamount, setTotalamount] = useState(1);
    const [hide, setHide] = useState(false);


 
    const priceHandler = () => {
        setColorchange(true);
        setColorchange1(false);
        setColorchange2(false);
        setColorchange3(false);
        setAmount(10);
    };
    const priceHandler1 = () => {
        setColorchange(false);
        setColorchange1(true);
        setColorchange2(false);
        setColorchange3(false);
        setAmount(100);
    };
    const priceHandler2 = () => {
        setColorchange(false);
        setColorchange1(false);
        setColorchange2(true);
        setColorchange3(false);
        setAmount(1000);
    };
    const priceHandler3 = () => {
        setColorchange(false);
        setColorchange1(false);
        setColorchange2(false);
        setColorchange3(true);
        setAmount(1000);
    };
    const counthandelerdes = () => {
        if (count < 1) {
            setCount(count - 1);
        } else {
            setCount(1);
        }
    };
    const counthandelerinc = () => {
        setCount(count + 1);
    };
    const countcall = () => {
        setTotalamount(amount * count);
    };

    const closeboxhandeler = () => {
        onClose();
      };
    const onConformhandler = () => {

        alert(`your order is placed = ${amount * count}`)
        onConformm();
    }
    
      useEffect(() => {
        countcall();
      }, [count, totalamount, data]);
    
    
  return (
    <>
         <div className="container_box">
         <h3 className="colortitlenumber">Select {data.value}</h3>
         <p className="money_titel">Contract Money</p>
         <div className="money">
             <p
                 className={colorChange ? "moneyvalue" : ""}
                 onClick={() => priceHandler()}
             >
                 10
             </p>
             <p
                 className={colorChange1 ? "moneyvalue" : ""}
                 onClick={() => priceHandler1()}
             >
                 100
             </p>
             <p
                 className={colorChange2 ? "moneyvalue" : ""}
                 onClick={() => {
                     priceHandler2();
                 }}
             >
                 1000
             </p>
             <p
                 className={colorChange3 ? "moneyvalue" : ""}
                 onClick={() => {
                     priceHandler3();
                 }}
             >
                 10000
             </p>
         </div>
         <div className="countprice">
             <p>Number</p>

             <span className="count_inc_dec">
                 <span onClick={counthandelerdes}>-</span>
                 <span>{count}</span>
                 <span onClick={counthandelerinc}>+</span>
             </span>
         </div>

         <div>
             <p className="moneycal">
                 Total contract money is <span>{amount * count}</span>
             </p>
         </div>
         <div className="agerement">
             <input type="checkbox" />
             <p>
                 I agree <span className="rules">PRESALE RULE</span>
             </p>
         </div>
         <div className="butts">
         <button onClick={closeboxhandeler}>CLOSE</button>
            <button onClick={onConformhandler}>CONFORM</button>
         </div>
     </div>
      
    
</>
);
};

export default Numbermatch;
