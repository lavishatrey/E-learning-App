import { Flex, Text, Button, Image, Box } from "@chakra-ui/react";
import teacher from "../../asset/A.png";
import { useNavigate } from "react-router-dom";
const Section1 = () => {
  const navigate = useNavigate();
  return (
    <Flex mt={100} mb={70} gap={50} p="15px" justify="center">
      <Flex
        direction="column"
        w={{
          base: "100%",
          sm: "60%",
          md: "55%",
          lg: "50%",
        }}
        gap={30}
      >
        <Text
          fontSize={{
            base: "70px",
            sm: "30px",
            md: "60px",
            lg: "80px",
          }}
          fontWeight="bold"
          fontFamily="poppins"
        >
          Grow. Learn. Succeed.
        </Text>
        <Text
          fontSize={{
            lg: "18px",
            md: "16px",
            sm: "14px",
            base: "20px",
          }}
          fontWeight="semibold"
        >
          <Text fontSize="2rem" color="#333333" display="inline">
            LAVISH - LEARNS
          </Text>{" "}
         A dynamic online hub where educators and students unite effortlessly. Teachers are equipped with intuitive tools to design and deliver personalized courses spanning a vast array of subjects and academic stages. For students, it's a world of tailored learning, allowing them to explore and acquire courses that perfectly align with their goals and interests. LAVISH - LEARNS empowers both the imparting and the acquiring of knowledge, creating a truly transformative educational experience that redefines what's possible in online learning.
        </Text>
        <Flex
          gap={30}
          direction={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
          }}
        >
          <Button
            bg="#333333"
            color="white"
            size="lg"
            p={{
              lg: "30px 60px",
              md: "25px 50px",
              sm: "20px 40px",
            }}
            border="3px solid #333333"
            _hover={{ background: "#42A5F5", color: "#0D47A1" }}
            onClick={() => navigate("/signup")}
          >
            Join for Free
          </Button>
          <Button
            colorScheme="#333333"
            color="#333333"
            variant="outline"
            size="lg"
            p={{
              lg: "30px 60px",
              md: "25px 50px",
              sm: "20px 40px",
            }}
            border="3px solid #333333"
            onClick={() => navigate("/login")}
          >
            Try LAVISH - LEARNS for Business
          </Button>
        </Flex>
      </Flex>
      <Box
        display={{ base: "none", sm: "none", md: "flex" }}
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={teacher}
          alt="Your Image"
          width={{
            md: "60%",
            lg: "80%",
          }}
          objectFit="contain"
        />
      </Box>
    </Flex>
  );
};

export default Section1;
