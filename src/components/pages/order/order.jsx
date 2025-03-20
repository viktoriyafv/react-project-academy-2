import React, { useState } from "react";
import Form from "/src/components/blocks/form/form";
import { StyledOrder } from "./styles";

function Order({ products }) {
  return products && products.length ? (
    <StyledOrder as="form">
      <Form products={products} />
    </StyledOrder>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
}

export default Order;
