import ShopCardItem from "@/components/ShopHeader/Shop/ShopCardItem";
import React from "react";
import { ShopItemLabel } from "./Shop.style";
import { Colors } from "@/theme/colors";

interface ShopCardData {
  maxWidth?: string
  height?: string
  bgImage?: string
  itemLabel?: string
  title?: string
}

const ShopCard: React.FC<ShopCardData> = ({
  maxWidth,
  height,
  bgImage,
  itemLabel,
  title
}) => {
  return (
    <ShopCardItem
      maxWidth={maxWidth}
      height={height}
      bgImage={bgImage}
    >
      <ShopItemLabel
        variant="h6"
        color={Colors.success}
        fontSize="14px"
        lineHeight="24px"
      >
        {itemLabel}
      </ShopItemLabel>
      <ShopItemLabel
        variant="h6"
        color={Colors.default_color}
        fontSize="40px"
        lineHeight="50px"
      >
        {title}
      </ShopItemLabel>
      <ShopItemLabel
        variant="h6"
        color={Colors.default_color}
        fontSize="14px"
        lineHeight="24px"
      >
        Read More
      </ShopItemLabel>
    </ShopCardItem>
  );
}

export default ShopCard;
