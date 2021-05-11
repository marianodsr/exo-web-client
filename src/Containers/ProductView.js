import React from "react";
import CloudImage from "../Components/CloudImage";
import EditableValueRow from "../Components/EditableValueRow";

// Should get product id as a prop instead of product when backend is done
const ProductView = ({ location: { state: product } }) => {
  return (
    <>
      <div className="flex flex-col items-center mt-16 space-y-4">
        <CloudImage
          src={product.photo}
          alt="product"
          className="w-48 rounded-full"
        />
        <h2 className="font-bold text-secondary text-4xl text-center">
          {product.name}
        </h2>
      </div>
      <div className=" grid-rows-4 text-center  mt-12 font-bold" style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr 1fr"
      }}>
          <EditableValueRow label="In stock:" value="32" />
          <EditableValueRow label="Base cost:" value="1000" pre="$" />
          <EditableValueRow label="Profit margin:" value="50" post="%" />
          <EditableValueRow label="Sell price:" value="1500" pre="$" />
      </div>
    </>
  );
};

export default ProductView;
