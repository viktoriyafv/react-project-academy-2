import styled, { css } from "styled-components";
import { Label } from "/src/components/styled";
import TextInput from "/src/components/ui/text-input/text-input";
import { Swiper } from "swiper/react";
import checkboxSelect from "/src/assets/checkbox.svg";
import Price from "/src/components/ui/price/price";

export const LeftColumn = styled.div`
  width: 353px;
  padding-right: ${(props) => props.theme.indent};
  overflow-y: overlay;
  max-height: 100%;
`;

export const AddressInput = styled(TextInput)`
  margin-bottom: ${(props) => props.theme.indent};
`;

export const PriceLabel = styled(Label)`
  font-size: 14px;
  margin-bottom: 6px;
`;

export const PriceValue = styled(Price)`
  margin-bottom: 30px;
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.backgroundColorGray};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;
