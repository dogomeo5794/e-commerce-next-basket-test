import { Box, Card, CardContent, CardMedia, Container, Grid, Typography, styled } from "@mui/material";
import React from "react";
import ClockSmIcon from "../icons/ClockSmIcon";
import ChartSmIcon from "../icons/ChartSmIcon";
import ChevronRightSmIcon from "../icons/ChevronRightSmIcon";

const Blog: React.FC = () => {
  const blogPostData = [
    {
      image: "/images/bg/feature-bg-1.jpg",
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "2 April 2021",
      commentCount: 10
    },
    {
      image: "/images/bg/feature-bg-2.jpg",
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "2 April 2021",
      commentCount: 10
    },
    {
      image: "/images/bg/feature-bg-3.jpg",
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "2 April 2021",
      commentCount: 10
    }
  ]

  return (
    <Container>
      <Box>
        <Grid
          container
          sx={{
            flexDirection: "column",
            alignItems: "center",
            gap: 1.25,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#23A6F0",
              fontSize: "14px",
              fontWeight: "700",
              lineHeight: "24px",
              letterSpacing: "0.2px",
              textAlign: "center",
            }}
          >
            Practice Advice
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "#252B42",
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "50px",
              letterSpacing: "0.2px",
            }}
          >
            Featured Posts
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          {blogPostData.map((data, key) => (
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Card
                sx={{
                  boxShadow: "none",
                  borderRadius: "0",
                  background: "#FFF",
                  WebkitBoxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.10)",
                  display: "flex",
                  maxWidth: "348px",
                  // width: "100%",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    height: "238px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    position: "relative"
                  }}
                >
                  <CardMedia
                    sx={{
                      height: "300px",
                      alignSelf: "stretch"
                    }}
                    image={data.image}
                    title="green iguana"
                  />
                  <Box sx={{
                    display: "inline-flex",
                    padding: "0px 10px",
                    alignItems: "center",
                    borderRadius: "3px",
                    background: "#E74040",
                    boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.10)",
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                  }}>
                    <Typography variant="body1"
                      sx={{
                        color: "#FFF",
                        fontWeight: "700",
                        fontSize: "14px",
                        fontStyle: "normal",
                        lineHeight: "24px",
                        letterSpacing: "0.2px",
                      }}
                    >
                      NEW
                    </Typography>
                  </Box>
                </Box>
                <CardContent sx={{
                  "display": "flex",
                  "padding": "25px 25px 35px 25px",
                  "flexDirection": "column",
                  "alignItems": "flex-start",
                  "gap": "10px",
                  "alignSelf": "stretch",
                }}>
                  <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}>
                    <Typography variant="body1"
                      sx={{
                        color: "#8EC2F2",
                        fontWeight: "400",
                        fontSize: "12px",
                        fontStyle: "normal",
                        lineHeight: "16px",
                        letterSpacing: "0.2px",
                      }}
                    >
                      Google
                    </Typography>
                    <Typography variant="body1"
                      sx={{
                        color: "#737373",
                        fontWeight: "400",
                        fontSize: "12px",
                        fontStyle: "normal",
                        lineHeight: "16px",
                        letterSpacing: "0.2px",
                      }}
                    >
                      Trending
                    </Typography>
                    <Typography variant="body1"
                      sx={{
                        color: "#737373",
                        fontWeight: "400",
                        fontSize: "12px",
                        fontStyle: "normal",
                        lineHeight: "16px",
                        letterSpacing: "0.2px",
                      }}
                    >
                      New
                    </Typography>
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#252B42",
                      fontWeight: "400",
                      fontSize: "20px",
                      fontStyle: "normal",
                      lineHeight: "30px",
                      letterSpacing: "0.2px",
                    }}
                  >
                    {data.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#737373",
                      fontWeight: "400",
                      fontSize: "14px",
                      fontStyle: "normal",
                      lineHeight: "20px",
                      letterSpacing: "0.2px",
                    }}
                  >
                    {data.description}
                  </Typography>
                  <Box sx={{
                    display: "flex",
                    padding: "15px 0px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}>
                    <Box sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}>
                      <ClockSmIcon />
                      <Typography variant="body1"
                        sx={{
                          color: "#737373",
                          fontSize: "12px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "16px",
                          letterSpacing: "0.2px"
                        }}
                      >
                        {data.date}
                      </Typography>
                    </Box>
                    <Box sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}>
                      <ChartSmIcon />
                      <Typography variant="body1"
                        sx={{
                          color: "#737373",
                          fontSize: "12px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "16px",
                          letterSpacing: "0.2px"
                        }}
                      >
                        {data.commentCount} comments
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}>
                    <Typography variant="h6"
                      sx={{
                        color: "#737373",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "24px",
                        letterSpacing: "0.2px"
                      }}
                    >
                      Learn More
                    </Typography>
                    <ChevronRightSmIcon />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Blog;
