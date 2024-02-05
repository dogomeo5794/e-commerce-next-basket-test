import React, { useState } from 'react';
import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { CardMediaStyled } from '@/styles/ProductItem.style';
import ChevronWhiteRight from '../icons/ChevronWhiteRight';
import ChevronWhiteLeft from '../icons/ChevronWhiteLeft';

const ProductCarouselCard: React.FC<{ images?: Array<string> }> = ({ images }) => {
  return (
    <Carousel
      navButtonsAlwaysVisible={true}
      IndicatorIcon={images && images.map((img, key) => <img src={img} key={key} style={{ width: "100px", height: "75px", border: "1px solid #c7c5c5" }} />)}
      indicatorContainerProps={{
        style: {
          display: "inline-flex",
          flexDirection: "row",
          gap: "10px",
          overflow: "auto",
        }
      }}
      NextIcon={<ChevronWhiteRight />}
      PrevIcon={<ChevronWhiteLeft />}
      navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
            backgroundColor: 'transparent',
            borderRadius: 0
        }
      }} 
    >
      {images && images.map( (item: any, i) => (
        <Paper key={i}
          sx={{
            width: "100%",
            height: "500px"
          }}
        >
          <CardMediaStyled
            image={item}
            title={""}
            sx={{
              height: "100%",
              width: "100%",
            }}
          />
        </Paper>
      ))}
    </Carousel>
  );
}

export default ProductCarouselCard;
