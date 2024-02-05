import { TypographyStyled } from "@/styles/Typography.style";
import { Box, Button, Divider, Grid, IconButton, Rating, Snackbar } from "@mui/material";
import React, { useCallback } from "react";
import DotSolidIcon from "../icons/DotSolidIcon";
import { Colors } from "@/theme/colors";
import BasketDefaultIcon from "../icons/BasketDefaultIcon";
import EyeDefaultIcon from "../icons/EyeDefaultIcon";
import { Close, Favorite, FavoriteBorder, HeartBrokenOutlined } from "@mui/icons-material";
import ProductCarouselCard from "./ProductCarouselCard";
import StarSolidSmIcon from "../icons/StarSolidSmIcon";
import StarOutlinedSmIcon from "../icons/StarOutlinedSmIcon";
import { BoxFlexCenter } from "../Blog/Blog.style";
import { ProductDataInterface } from "../cards/ProductListCard";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishList, removeFromWishList, setCartCounter, setCartId, setCartProducts } from "@/store/modules/productSlice";
import ProductSnackbar from "../cards/ProductSnackbar";
import { RootState } from "@/store";
import { API } from "@/lib/api";

const ProductDetailsCard: React.FC<{ product: ProductDataInterface }> = ({ product }) => {
  const cartId = useSelector((state: RootState) => state.product.cartId)
  const cartList = useSelector((state: RootState) => state.product.cartList)
  const wishList = useSelector((state: RootState) => state.product.wishList)
  const userId = useSelector((state: RootState) => state.auth.id)
  const snackbarRef = React.useRef<{ show: () => void }>(null);
  const dispatch = useDispatch();
  const [rating, setRating] = React.useState<number | null>(0);
  const [snackbarTitle, setSnackbarTitle] = React.useState<string>("");
  const [inWishlist, setInWishlist] = React.useState<boolean>(false);
  const [inCart, setInCart] = React.useState<boolean>(false);
  const getFormattedPrice = useCallback((price: number): string => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      currencyDisplay: "symbol",
    });
  
    return formatter.format(price)
  }, [])

  React.useEffect(() => {
    setRating(product?.rating || 0);
  }, [product?.rating])

  React.useEffect(() => {
    setInWishlist(() => {
      const found = wishList.some((data: ProductDataInterface) => data.id === product.id);
      return found
    })

    setInCart(() => {
      const found = cartList.some((data: ProductDataInterface) => data.id === product.id);
      return found
    })
  }, [wishList, cartList, product])

  const handleAddToCart = async () => {
    dispatch(addToCart(product))
    setSnackbarTitle("Successfully added to basket")
    snackbarRef.current?.show();
    
    // try {
    //   let cartData: any;
    //   let resStatus: number;
    //   if (!cartId) {
    //     const {data, status} = await API.post("/carts/add", {
    //       userId: userId,
    //       products: [
    //         {
    //           id: product.id,
    //           quantity: 1,
    //         },
    //       ]
    //     })
    //     cartData = data;
    //     resStatus = status;
    //   }
    //   else {
    //     const {data, status} = await API.put(`/carts/${cartId}`, {
    //       merge: true,
    //       products: [
    //         {
    //           id: product.id,
    //           quantity: 1,
    //         },
    //       ]
    //     })

    //     cartData = data;
    //     resStatus = status;
    //   }

    //   if ([200,201].includes(resStatus)) {
    //     console.log('cartData', cartData)
    //     const cart = cartData || {};
    //     const products = cart.products || [];
    //     dispatch(setCartCounter(cart?.totalProducts || 0))
    //     dispatch(setCartProducts(products))
    //     if (products.length > 0) {
    //       dispatch(setCartId(cart.id))
    //     }

    //     setSnackbarTitle("Successfully added to basket")
    //     snackbarRef.current?.show();
    //   }
    // } catch (error) {
    //   console.log('error', error)
    // }
  }

  const handleAddToWhishList = () => {
    if (!inWishlist) {
      dispatch(addToWishList(product))
      setSnackbarTitle("Successfully added to whishlist")
      snackbarRef.current?.show();
    }
    else {
      dispatch(removeFromWishList(product.id))
      setSnackbarTitle("Successfully removed from whishlist")
      snackbarRef.current?.show();
    }
  }

  return (
    <BoxFlexCenter
      sx={(theme) => ({
        padding: "24px 100px",
        flexDirection: "column",
        [theme.breakpoints.down("sm")]: {
          padding: "24px 30px",
        },
      })}
    >
      <Grid container>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <ProductCarouselCard 
            images={product?.images || []}
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              padding: {
                xs: "11px 0",
                sm: "11px 0",
                md: "11px 24px",
                lg: "11px 24px",
              },
              marginTop: {
                xs: "30px",
                sm: "0",
              }
            }}
          >
            <TypographyStyled variant="h4"
              color={Colors.default_color}
              fontSize="20px"
              fontWeight={400}
              lineHeight="30px"
            >
              {product?.title}
            </TypographyStyled>
            <BoxFlexCenter sx={{
              gap: "7px",
              margin: "15px 0"
            }}>
              <Rating
                name="simple-controlled"
                value={rating}
                // onChange={(event, newValue) => {
                //   setRating(newValue);
                // }}
                icon={<StarSolidSmIcon />}
                emptyIcon={<StarOutlinedSmIcon />}
                readOnly
              />
              <TypographyStyled variant="h6"
                color={Colors.secondary_text_color}
              >
                {product.rating} Reviews
              </TypographyStyled>
            </BoxFlexCenter>
            <TypographyStyled variant="h4"
              color={Colors.default_color}
              fontSize="24px"
              lineHeight="32px"
              letterSpacing="0.1px"
              margin="5px 0"
            >
              {getFormattedPrice(product?.price || 0)}
            </TypographyStyled>
            <BoxFlexCenter>
              <TypographyStyled variant="h6"
                color={Colors.secondary_text_color}
              >
                Availability :
              </TypographyStyled>
              <TypographyStyled variant="h6"
                color={product.stock ? Colors.primary : Colors.danger}
              >
                { product.stock ? 'In Stock' : 'Sold Out' }
              </TypographyStyled>
            </BoxFlexCenter>

            <Box sx={(theme) => ({ 
              marginTop: "40px",
              [theme.breakpoints.up("md")]: {
                marginTop: "80px",
              }
            })}>
              <TypographyStyled variant="h6"
                color={Colors.secondary_text_color}
                fontWeight={400}
                sx={(theme) => ({
                  [theme.breakpoints.up("md")]: {
                    display: "none"
                  }
                })}
              >
                {product.description}
              </TypographyStyled>
            </Box>

            <Divider sx={{ marginBottom: "25px", marginTop: "15px" }} />

            <BoxFlexCenter sx={{
              display: "inline-flex",
              gap: "10px",
            }}>
              <DotSolidIcon color={Colors.primary} />
              <DotSolidIcon color={Colors.success} />
              <DotSolidIcon color={Colors.warning} />
              <DotSolidIcon color={Colors.default_color} />
            </BoxFlexCenter>

            <Box sx={{
              display: "inline-flex",
              alignItems: "flex-start",
              gap: "10px",
              marginTop: "60px"
            }}>
              <Button variant='contained' style={{
                textTransform: "capitalize",
                background: Colors.primary,
                padding: "10px 20px"
              }}>
                Select Options
              </Button>

              <IconButton 
                style={{
                  borderRadius: "44.786px",
                  border: "1px solid #E8E8E8",
                  background: "#FFF",
                }}
                onClick={handleAddToWhishList}
                disabled={inWishlist}
              >
                {inWishlist && (
                  <Favorite style={{color: "#252B42"}} />
                )}
                {!inWishlist && (
                  <FavoriteBorder style={{color: "#252B42"}} />
                )}
              </IconButton>

              <IconButton 
                style={{
                  borderRadius: "44.786px",
                  border: "1px solid #E8E8E8",
                  background: "#FFF",
                }}
                onClick={handleAddToCart}
                disabled={inCart}
              >
                <BasketDefaultIcon />
              </IconButton>

              <IconButton style={{
                borderRadius: "44.786px",
                border: "1px solid #E8E8E8",
                background: "#FFF",
              }}>
                <EyeDefaultIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <ProductSnackbar 
        headerTitle={snackbarTitle}
        thumbnail={product.thumbnail}
        price={getFormattedPrice(product.price)}
        title={product.title}
        ref={snackbarRef}
      />
    </BoxFlexCenter>
  );
};

export default ProductDetailsCard;
