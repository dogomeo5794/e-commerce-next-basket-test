import React from "react";
import { BlogCard, BlogCardMedia, BlogCardTag, BlogCardTagText, BoxFlexCenter } from "./Blog.style";
import { CardContent, CardMedia } from "@mui/material";
import ClockSmIcon from "../icons/ClockSmIcon";
import ChartSmIcon from "../icons/ChartSmIcon";
import { LinkButton } from "@/styles/Button.style";
import ChevronRightSmIcon from "../icons/ChevronRightSmIcon";
import { Colors } from "@/theme/colors";

interface BlogCardItemData {
  image: string
  title: string
  description: string
  date: string
  commentCount: number
}

const BlogCardItem: React.FC<{
  data: BlogCardItemData,
}> = ({
  data
}) => {
  return (
    <BlogCard>
      <BlogCardMedia>
        <CardMedia
          sx={{
            height: "300px",
            alignSelf: "stretch",
          }}
          image={data.image}
          title="green iguana"
        />
        <BlogCardTag>
          <BlogCardTagText 
            variant="body1" 
            fontSize="14px"
            fontWeight="700"
            lineHeight="24px"
            color={Colors.white}
          >
            NEW
          </BlogCardTagText>
        </BlogCardTag>
      </BlogCardMedia>
      <CardContent
        sx={{
          display: "flex",
          padding: "25px 25px 35px 25px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
          alignSelf: "stretch",
        }}
      >
        <BoxFlexCenter>
          <BlogCardTagText
            variant="body1"
            color={Colors.disabled_element_color}
          >
            Google
          </BlogCardTagText>
          <BlogCardTagText
            variant="body1"
            color={Colors.secondary_text_color}
          >
            Trending
          </BlogCardTagText>
          <BlogCardTagText
            variant="body1"
            color={Colors.secondary_text_color}
          >
            New
          </BlogCardTagText>
        </BoxFlexCenter>
        <BlogCardTagText
          variant="h4"
          color={Colors.default_color}
          fontSize="20px"
          lineHeight="30px"
        >
          {data.title}
        </BlogCardTagText>
        <BlogCardTagText
          variant="body1"
          color={Colors.secondary_text_color}
          fontSize="14px"
          lineHeight="20px"
        >
          {data.description}
        </BlogCardTagText>
        <BoxFlexCenter
          padding="15px 0px"
          justifyContent="space-between"
          alignSelf="stretch"
        >
          <BoxFlexCenter>
            <ClockSmIcon />
            <BlogCardTagText
              variant="body1"
              color={Colors.secondary_text_color}
            >
              {data.date}
            </BlogCardTagText>
          </BoxFlexCenter>
          <BoxFlexCenter>
            <ChartSmIcon />
            <BlogCardTagText
              variant="body1"
              color={Colors.secondary_text_color}
            >
              {data.commentCount} comments
            </BlogCardTagText>
          </BoxFlexCenter>
        </BoxFlexCenter>

        <LinkButton href="#">
          <BlogCardTagText
            variant="h6"
            color={Colors.secondary_text_color}
            fontSize="12px"
            fontWeight="700"
            lineHeight="24px"
          >
            Learn More
          </BlogCardTagText>
          <ChevronRightSmIcon />
        </LinkButton>
      </CardContent>
    </BlogCard>
  );
}

export default BlogCardItem;
