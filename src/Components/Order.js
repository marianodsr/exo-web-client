import React, { useState } from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import BlockIcon from "@material-ui/icons/Block";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import OrderContent from "./OrderContent";

const STATES = {
  PENDING: "pending",
  CANCELLED: "cancelled",
  FULFILLED: "fulfilled",
};

const Order = ({ data }) => {
    const [active, setActive] = useState(false)

  const renderIcon = () => {
    switch (data.state) {
      case STATES.PENDING:
        return (
          <div className="flex w-1/3 flex-col items-center text-center">
            <span className="text-blue-400">
              <AccessTimeIcon fontSize="large" />
            </span>
            <small>{data.state}</small>
          </div>
        );
      case STATES.CANCELLED:
        return (
          <div className="flex w-1/3 flex-col items-center text-center">
            <span className="text-red-400">
              <BlockIcon fontSize="large" />
            </span>
            <small>{data.state}</small>
          </div>
        );
      case STATES.FULFILLED:
        return (
          <div className="flex w-1/3 flex-col items-center text-center">
            <span className="text-green-400">
              <CheckCircleOutlineIcon fontSize="large" />
            </span>
            <small>{data.state}</small>
          </div>
        );
      default:
        return;
    }
  };

  return (
    <>
      <div
        onClick={()=> setActive(prev => !prev)}
        className={`flex space-x-8 justify-start py-2 px-2 bg-gray-50 items-center ${active && 'bg-gray-100'}`}
      >
        {renderIcon()}
        <h3 className="w-1/3">{data.customer}</h3>
        <h3 className="w-1/3">{data.due_date}</h3>
        <h3 className={`${active && 'transform rotate-90'} text-secondary rounded`}><ArrowRightIcon /></h3>
      </div>
      {active && <OrderContent order={data} />}
    </>
  );
};

export default Order;
