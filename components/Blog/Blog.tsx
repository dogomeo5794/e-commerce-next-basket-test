import { Container, Grid } from "@mui/material";
import React from "react";
import { BlogCardTagText, BlogContentWrapper } from "./Blog.style";
import BlogCardItem from "./BlogCardItem";
import { Colors } from "@/theme/colors";

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
      <BlogContentWrapper>
        <Grid
          container
          flexDirection="column"
          alignItems="center"
          gap={1.5}
        >
          <BlogCardTagText
            variant="h6"
            color={Colors.primary}
            fontSize="14px"
            fontWeight="700"
            lineHeight="24px"
          >
            Practice Advice
          </BlogCardTagText>
          <BlogCardTagText
            variant="h3"
            color={Colors.default_color}
            fontSize="40px"
            fontWeight="700"
            lineHeight="50px"
          >
            Featured Posts
          </BlogCardTagText>
        </Grid>
        <Grid container spacing={2}>
          {blogPostData.map((data, key) => (
            <Grid item lg={4} md={4} sm={12} xs={12} key={key}>
              <BlogCardItem data={data} />
            </Grid>
          ))}
        </Grid>
      </BlogContentWrapper>
    </Container>
  );
}

export default Blog;
