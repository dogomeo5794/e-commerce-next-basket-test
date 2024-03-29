import { Colors } from "@/theme/colors";
import { Backdrop, Box, Button, Fade, Grid, IconButton, List, ListItem, Modal } from "@mui/material";
import React, { forwardRef, useImperativeHandle } from "react";
import Link from "next/link";
import { TypographyStyled } from "@/styles/Typography.style";
import { Close, CloseOutlined, Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { CartListData, removeFromWishList } from "@/store/modules/productSlice";
import Image from "next/legacy/image";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "500px",
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

const WishlistModal = forwardRef<Ref, ModalProps>(({ children }: ModalProps, ref) => {
  useImperativeHandle(ref, () => ({
    show() {
      setOpen(true)
    }
  }))
  const wishListItem = useSelector((state: RootState) => state.product.wishList)
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
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const handleRemoveFromWishlist = (productId: number) => {
    let product = cartProducts.find(data => data.id === productId);
    if (product) {
      dispatch(removeFromWishList(productId))
    }
  }

  const getFormattedPrice = (price: number) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      currencyDisplay: "symbol",
    });
  
    return formatter.format(price)
  }

  React.useEffect(() => {
    setCartProducts(wishListItem);
  }, [wishListItem])

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
              height: "100vh",
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
                        objectFit="cover"
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
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
                          { getFormattedPrice(product.price) }
                        </TypographyStyled>
                      </Box>
                      <Box>
                        <IconButton size="small"
                          onClick={() => handleRemoveFromWishlist(product.id)}
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
        </Box>
      </Fade>
    </Modal>
  );
})

WishlistModal.displayName = 'WishlistModal';

export default WishlistModal;
