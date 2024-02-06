import { Colors } from "@/theme/colors";
import { Backdrop, Box, Button, Fade, IconButton, List, ListItem, Modal } from "@mui/material";
import React, { forwardRef, useImperativeHandle } from "react";
import Link from "next/link";
import { TypographyStyled } from "@/styles/Typography.style";
import { Add, Close, CloseOutlined, Delete, Remove } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { CartListData, addToCart, removeFromCart, fullRemoveFromCart, updateCartQuantity } from "@/store/modules/productSlice";
import Image from "next/legacy/image";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "510px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  outline: "none",
  // height: "100%",
  overflow: "auto",
  // p: 4,
};

interface Ref {
  show: () => void
}

interface ModalProps {
  children?: React.ReactNode
}

const CartModal = forwardRef<Ref, ModalProps>(({ children }: ModalProps, ref) => {
  useImperativeHandle(ref, () => ({
    show() {
      setOpen(true)
    }
  }))
  const cartListItem = useSelector((state: RootState) => state.product.cartList)
  const dispatch = useDispatch();
  const [cartProducts, setCartProducts] = React.useState<Array<CartListData>>([
    {
      brand: "",
      category: "",
      description: "",
      discountPercentage: 0,
      id: 0,
      images: [],
      price: 0,
      rating: 0,
      stock: 0,
      thumbnail: "",
      title: "",
      quantity: 0,
      totalPrice: 0
    }
  ]);
  const [totalCartAmount, setTotalCartAmount] = React.useState<number>(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRemoveFromCart = (productId: number) => {
    let product = cartProducts.find(data => data.id === productId);
    if (product) {
      dispatch(fullRemoveFromCart(productId))
    }
  }

  const handleDecrementQuantity = (productId: number) => {
    let product = cartProducts.find(data => data.id === productId);
    if (product) {
      dispatch(removeFromCart(productId))
    }
  }

  const handleIncrementQuantity = (productId: number) => {
    let product = cartProducts.find(data => data.id === productId);
    if (product) {
      dispatch(addToCart(product))
    }
  }

  const handleChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>, productId: number) => {
    const { value } = event.target;
    let newValue = Number(value.replace(/\D/g, ""));
    dispatch(updateCartQuantity({ productId: productId, quantity: newValue }))
  }

  React.useEffect(() => {
    setCartProducts(cartListItem);
    setTotalCartAmount(() => {
      const total = cartListItem.reduce((sum, item) => {
        return item.totalPrice + sum
      }, 0)
      console.log('total', total)
      return total
    })
  }, [cartListItem])

  const getFormattedPrice = (price: number) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      currencyDisplay: "symbol",
    });
  
    return formatter.format(price)
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      // open={true}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
      {/* <Fade in={true}> */}
        <Box sx={(theme) => ({
          ...style,
          position: "relative",
          [theme.breakpoints.down("sm")]: {
            width: "100%"
          }
        })}>
          {/* <IconButton 
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "0",
              right: "0",
              zIndex: "1",
              background: Colors.danger,
              color: Colors.white,
              borderRadius: "0"
            }}
          >
            <CloseOutlined />
          </IconButton> */}
          <List
            sx={{
              padding: "0",
              background: "#efecec",
              height: "calc(100vh - 130px)",
              overflow: "auto",
            }}
          >
            <ListItem sx={{
              background: "white",
              justifyContent: "end"
            }}>
              <Button startIcon={<Close />}
                onClick={handleClose}
              >
                Close
              </Button>
            </ListItem>
            {cartProducts.map((product, key) => (
              <ListItem
                sx={{
                  padding: "0",
                  margin: "15px 0",
                  background: Colors.white,
                }}
                key={key}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "15px",
                    padding: "15px 25px",
                  }}
                >
                  <Box
                    sx={{
                      width: "90px",
                      height: "90px",
                    }}
                  >
                    <Link href="#">
                      <Image
                        src={product.thumbnail}
                        alt=""
                        loading="lazy"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        width={100}
                        height={100}
                        loader={({ src }) => src}
                      />
                    </Link>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "321px",
                    }}
                  >
                    <Link
                      href="#"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "14px",
                        color: "#000",
                        lineHeight: "18px",
                        textDecoration: "none",
                      }}
                    >
                      <TypographyStyled
                        variant="body1"
                        sx={{
                          flex: "1",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          fontWeight: 400,
                        }}
                      >
                        {product.title}
                      </TypographyStyled>
                    </Link>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* <Box>
                        <TypographyStyled
                          variant="body1"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                          }}
                        >
                          
                        </TypographyStyled>
                      </Box> */}
                      <Box>
                        <ul
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            listStyle: "none",
                            alignItems: "center",
                            padding: "0"
                          }}
                        >
                          <li>
                            <IconButton size="small"
                              onClick={() => handleDecrementQuantity(product.id)}
                            >
                              <Remove fontSize="small" />
                            </IconButton>
                          </li>
                          <li>
                            <input
                              type="text"
                              style={{
                                width: "35px",
                                padding: "2px 5px 3px 5px",
                                fontWeight: "bold",
                                outline: "none",
                                textAlign: "center",
                              }}
                              value={product.quantity}
                              onChange={(event) => handleChangeQuantity(event, product.id)}
                            />
                          </li>
                          <li>
                            <IconButton size="small"
                              onClick={() => handleIncrementQuantity(product.id)}
                            >
                              <Add fontSize="small" />
                            </IconButton>
                          </li>
                        </ul>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "15px",
                      }}
                    >
                      <Box>
                        <TypographyStyled
                          variant="body1"
                          sx={{
                            fontWeight: "bold",
                            color: Colors.danger,
                            fontSize: "15px",
                          }}
                        >
                          { getFormattedPrice(product.totalPrice) }
                        </TypographyStyled>
                      </Box>
                      <Box>
                        <IconButton size="small"
                          onClick={() => handleRemoveFromCart(product.id)}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
            ))}
          </List>

          <Box
            sx={{
              padding: "15px 20px",
            }}
          >
            <TypographyStyled
              variant="body1"
              sx={{
                display: "flex",
                gap: "10px",
                justifyContent: "end",
                paddingBottom: "15px",
              }}
            >
              Total
              <span
                style={{
                  fontSize: "18px",
                }}
              >
                {getFormattedPrice(totalCartAmount)}
              </span>
            </TypographyStyled>

            <Button
              variant="contained"
              sx={{
                borderRadius: "0",
                padding: "15px 20px",
                width: "100%",
                background: Colors.default_color,
              }}
            >
              Checkout
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
})

CartModal.displayName = 'CartModal';

export default CartModal;
