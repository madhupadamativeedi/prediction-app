import React, { useEffect, useState } from "react";

const Green = () => {
    const [colorChange, setColorchange] = useState(false);
    const [colorChange1, setColorchange1] = useState(false);
    const [colorChange2, setColorchange2] = useState(false);
    const [colorChange3, setColorchange3] = useState(false);
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(1);
    const [amount, setAmount] = useState(10);
    const [totalamount, setTotalamount] = useState(1);
    const greenColorHandeler = () => {
        setShow(true);
    };

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

    useEffect(
        () => {
            countcall();
        },
        count,
        totalamount
    );
    const closeboxhandeler = () => {
        setShow(false);
    };
    const conformHandeler = () => {
        alert(`your order is palced ${amount * count}`)
        setShow(false);

    }
    return (
        <>
            <p className="colorjoin" onClick={greenColorHandeler}>
                Join Green
            </p>
            {show ? (
                <div className="container_box">
                    <h3 className="colortitle">Join green</h3>
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
                        <button onClick={conformHandeler}>CONFORM</button>
                    </div>
                </div>
            ) : (
                ""
            )}{" "}
        </>
    );
};

const Red = () => {
    const [colorChange, setColorchange] = useState(false);
    const [colorChange1, setColorchange1] = useState(false);
    const [colorChange2, setColorchange2] = useState(false);
    const [colorChange3, setColorchange3] = useState(false);
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(1);
    const [amount, setAmount] = useState(10);
    const [totalamount, setTotalamount] = useState(1);
    const greenColorHandeler = () => {
        setShow(true);
    };

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

    useEffect(
        () => {
            countcall();
        },
        count,
        totalamount
    );
    const closeboxhandeler = () => {
        setShow(false);
    };
    const conformHandeler = () => {
        alert(`your order is palced ${amount * count}`)
        setShow(false);

    }
    return (
        <>
            <p className="redcolors" onClick={greenColorHandeler}>
                Join Red
            </p>
            {show ? (
                <div className="container_box">
                    <h3 className="colortitlered">Join Red</h3>
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
                        <button onClick={conformHandeler}>CONFORM</button>
                    </div>
                </div>
            ) : (
                ""
            )}{" "}
        </>
    );
};
const Violet = () => {
    const [colorChange, setColorchange] = useState(false);
    const [colorChange1, setColorchange1] = useState(false);
    const [colorChange2, setColorchange2] = useState(false);
    const [colorChange3, setColorchange3] = useState(false);
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(1);
    const [amount, setAmount] = useState(10);
    const [totalamount, setTotalamount] = useState(1);
    const greenColorHandeler = () => {
        setShow(true);
    };

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

    useEffect(
        () => {
            countcall();
        },
        count,
        totalamount
    );
    const closeboxhandeler = () => {
        setShow(false);
    };

    const conformHandeler = () => {
        alert(`your order is palced ${amount * count}`)
        setShow(false);

    }
    return (
        <>
            <p className="violetcolors" onClick={greenColorHandeler}>
                Join Red
            </p>
            {show ? (
                <div className="container_box">
                    <h3 className="colortitleViolet">Join Violet</h3>
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
                        <button onClick={conformHandeler}>CONFORM</button>
                    </div>
                </div>
            ) : (
                ""
            )}{" "}
        </>
    );
};

export { Green, Violet, Red };
