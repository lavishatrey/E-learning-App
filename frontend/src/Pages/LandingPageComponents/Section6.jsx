import { Button, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react"; // Import useColorModeValue
import React from "react";
import sectionImage from "../../asset/sectionImage.png";
import { useNavigate } from "react-router-dom";

const Section6 = () => {
  const navigate = useNavigate();

  // Define colors based on color mode at the top of the component
  const sectionBg = useColorModeValue("#ebf3ff", "gray.700"); // Light: original light blue, Dark: a darker gray
  const mainTextColor = useColorModeValue("black", "whiteAlpha.900"); // Light: black, Dark: near white
  const boldTextColor = useColorModeValue("#333333", "blue.300"); // Light: original dark gray, Dark: a vibrant blue
  const buttonBg = useColorModeValue("#333333", "blue.600"); // Light: original dark gray, Dark: a blue for contrast
  const buttonHoverBg = useColorModeValue("#03357b", "blue.700"); // Light: original hover, Dark: darker blue on hover
  const buttonTextColor = useColorModeValue("white", "white"); // Button text remains white

  return (
    <Flex
      bgColor={sectionBg} // Use dynamic background color
      gap={{
        sm: "20px",
        md: "35px",
        lg: "45px",
      }}
      p={{
        base: "10px",
        sm: "0px 20px",
        md: "0px 40px",
        lg: "0px 60px",
      }}
      direction={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
      }}
      color={mainTextColor} // Apply general text color to the container
    >
      <Flex minW={"40%"}>
        <Image src={sectionImage} objectFit="contain" />
      </Flex>
      <Flex
        direction={"column"}
        padding={{
          base: "40px 0px",
          sm: "20px 10px",
          md: "30px 15px",
          lg: "40px 20px",
        }}
        gap={{
          sm: "15px",
          md: "25px",
        }}
        justifyContent={{
          lg: "space-evenly",
        }}
      >
        <Text
          fontSize={{
            sm: "25px",
            md: "35px",
            lg: "45px", // Corrected '45 px' to '45px'
          }}
        >
          Learner outcomes on{" "}
          <b style={{ color: boldTextColor }}>LAVISH - LEARNS</b> {/* Use dynamic color */}
        </Text>
        <Text
          fontFamily={"poppins"}
          fontSize={{
            sm: "12px",
            md: "14px",
            lg: "16px",
          }}
        >
          According to the latest findings from LAVISH - LEARNS's 2025 report,{" "}
          <span>
            <b style={{ color: boldTextColor }}> {/* Use dynamic color */}
              an impressive 87% of learners have reported tangible career
              benefits.
            </b>
          </span>{" "}
          These include promotions, enhanced job performance, successful job
          transitions, increased employability, and skill development. LAVISH -
          LEARNS's extensive curriculum and industry-recognized certifications
          have played a pivotal role in facilitating the professional growth of
          learners, equipping them to thrive in today's fiercely competitive job
          landscape."
        </Text>
        <Flex mt="15px">
          <Button
            bgColor={buttonBg} // Use dynamic button background
            _hover={{ backgroundColor: buttonHoverBg }} // Use dynamic hover background
            color={buttonTextColor} // Use dynamic button text color
            p={{
              sm: "10px 20px",
              md: "15px 30px",
              lg: "25px 45px",
            }}
            onClick={() => navigate("/signup")}
          >
            Join for Free
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Section6;