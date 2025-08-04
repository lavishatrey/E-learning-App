import React from "react";
import { Box, Grid, Heading, Link, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react"; // Import useColorModeValue

const Footer = () => {
  // Define colors based on color mode at the top of the component
  const footerBg = useColorModeValue("#f5f5f5", "gray.900"); // Light: original, Dark: a darker gray
  const headingColor = useColorModeValue("black", "whiteAlpha.900"); // Light: black, Dark: near white
  const linkColor = useColorModeValue("black", "gray.300"); // Light: black, Dark: a light gray for links
  const copyrightTextColor = useColorModeValue("black", "gray.400"); // Light: black, Dark: a slightly darker gray for copyright
  const borderColor = useColorModeValue("#c9c9c9", "gray.700"); // Light: original border, Dark: a dark gray border

  return (
    <Flex
      bg={footerBg} // Use dynamic background
      p={5}
      paddingBottom={{
        sm: "60px",
        md: "60px",
        lg: "20px",
      }}
      fontFamily="Source Sans 3"
      pt="60px"
      direction="column"
    >
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
      >
        <Box
          pl={{ lg: "25px", md: "15px", sm: "10px" }}
          pr={{ lg: "35px", md: "15px", sm: "10px" }}
        >
          <Heading as="h6" size="md" fontWeight="bold" color={headingColor}> {/* Dynamic color */}
            Learn Something New
          </Heading>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Learn a Language</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Learn Accounting</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Learn Coding</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Learn Copywriting</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Learn HR</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Learn Public Relations</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Boulder MS Data Science</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Illinois iMBA</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Illinois MS Computer Science</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>UMich MS in Applied Data Science</Link> {/* Dynamic color */}
        </Box>

        <Box
          pl={{ lg: "25px", md: "15px", sm: "10px" }}
          pr={{ lg: "35px", md: "15px", sm: "10px" }}
        >
          <Heading as="h6" size="md" fontWeight="bold" color={headingColor}> {/* Dynamic color */}
            Popular Topics
          </Heading>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Accounting</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Cybersecurity</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Data Analysis</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Data Science</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Excel</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Google</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Machine Learning</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Project Management</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Python</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>SQL</Link> {/* Dynamic color */}
        </Box>

        <Box
          pl={{ lg: "25px", md: "15px", sm: "10px" }}
          pr={{ lg: "35px", md: "15px", sm: "10px" }}
        >
          <Heading as="h6" size="md" fontWeight="bold" color={headingColor}> {/* Dynamic color */}
            Popular Certificates
          </Heading>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Google Data Analytics</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Google Digital Marketing & Ecommerce</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Google IT Automation with Python</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Google IT Support</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Google Project Management</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Google UX Design</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>IBM Data Analyst</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>IBM Data Science</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Intuit Bookkeeping</Link> {/* Dynamic color */}
          <br />
          <Link fontSize="13.5px" color={linkColor}>Meta Front-End Developer</Link> {/* Dynamic color */}
        </Box>

        <Box
          pl={{ lg: "25px", md: "15px", sm: "10px" }}
          pr={{ lg: "35px", md: "15px", sm: "10px" }}
        >
          <Heading as="h6" size="md" fontWeight="bold" color={headingColor}> {/* Dynamic color */}
            Featured Articles
          </Heading>
          <br />
          <Link fontSize="13.5px" color={linkColor}>
            A Comprehensive Guide to Becoming a Data Analyst
          </Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>
            Advance Your Career With A Cybersecurity Certification
          </Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Get Your Data Analytics Certification</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>
            How to Break into the Field of Data Analysis
          </Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>
            Jumpstart Your Data Career with a SQL Certification
          </Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Learn How to Become PMP Certified</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>
            Start Your Career with CAPM Certification
          </Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>
            Understanding the Role and Responsibilities of a Scrum Master
          </Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>
            Unlock Your Potential with a PMI Certification
          </Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>
            What You Should Know About CompTIA A+ Certification
          </Link>
        </Box>

        <Box
          pl={{ lg: "25px", md: "15px", sm: "10px" }}
          pr={{ lg: "35px", md: "15px", sm: "10px" }}
        >
          <Heading as="h6" size="md" fontWeight="bold" color={headingColor}> {/* Dynamic color */}
            Coursera
          </Heading>
          <br />
          <Link fontSize="13.5px" color={linkColor}>About</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>What We Offer</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Leadership</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Careers</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Catalog</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Coursera Plus</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Professional Certificates</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>MasterTrack® Certificates</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Degrees</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>For Enterprise</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>For Government</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>For Campus</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Become a Partner</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Coronavirus Response</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Free Courses</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>All Courses</Link>
        </Box>

        <Box
          pl={{ lg: "25px", md: "15px", sm: "10px" }}
          pr={{ lg: "35px", md: "15px", sm: "10px" }}
        >
          <Heading as="h6" size="md" fontWeight="bold" color={headingColor}> {/* Dynamic color */}
            Community
          </Heading>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Learners</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Partners</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Beta Testers</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Translators</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Blog</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Tech Blog</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Teaching Center</Link>
        </Box>

        <Box
          pl={{ lg: "25px", md: "15px", sm: "10px" }}
          pr={{ lg: "35px", md: "15px", sm: "10px" }}
        >
          <Heading as="h6" size="md" fontWeight="bold" color={headingColor}> {/* Dynamic color */}
            More
          </Heading>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Press</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Investors</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Terms</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Privacy</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Help</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Accessibility</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Contact</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Articles</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Directory</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Affiliates</Link>
          <br />
          <Link fontSize="13.5px" color={linkColor}>Modern Slavery Statement</Link>
        </Box>

        <Box
          pl={{ lg: "25px", md: "15px", sm: "10px" }}
          pr={{ lg: "35px", md: "15px", sm: "10px" }}
        >
          <Flex
            direction="column"
            justifyContent="space-around"
            alignContent="space-between"
            h={{ lg: "100%", sm: "100%" }}
          >
            <Image
              width={{ base: "35%", sm: "20%", md: "35%", lg: "45%" }}
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_en.svg?auto=format%2Ccompress&dpr=1&w=152&h=45&q=40"
              alt="AppleStoreLogo"
            />

            <Image
              width={{ base: "35%", sm: "20%", md: "35%", lg: "45%" }}
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/en_generic_rgb_wo_45.png?auto=format%2Ccompress&dpr=1&w=152&h=45&q=40"
              alt="Google_Play"
            />
            <Image
              width={{ base: "15%", sm: "15%", md: "25%", lg: "35%" }}
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/2018-B-Corp-Logo-Black-S.png?auto=format%2Ccompress&dpr=1&w=151&h=120&q=40"
              alt="Certified"
            />
          </Flex>
        </Box>
      </Grid>
      <Flex
        mt={15}
        gap={7}
        borderTop={`1px solid ${borderColor}`} // Dynamic border color
        direction={{
          sm: "column",
          md: "row",
          lg: "row",
        }}
        justifyContent={{
          lg: "space-between",
        }}
        alignItems="center"
        padding={{
          sm: "10px",
          md: "35px",
          lg: "55px",
        }}
      >
        <Box>
          <Text fontSize="13.5px" color={copyrightTextColor}> {/* Dynamic copyright text color */}
            © 2025 LAVISH - LEARNS Inc. All rights reserved.
          </Text>
        </Box>
        <Flex spacing={4} overflow="hidden">
          {/* Social Media Icons - These are images, so they won't directly change color unless you have dark mode specific versions or tint them */}
          <Image
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/facebook.png?auto=format%2Ccompress&dpr=1&w=28&h=28&q=40"
            alt="Facebook"
            mr={4}
          />

          <Image
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/linkedin.png?auto=format%2Ccompress&dpr=1&w=28&h=28&q=40"
            alt="LinkedIn"
            mr={4}
          />
          <Image
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/twitter.png?auto=format%2Ccompress&dpr=1&w=28&h=28&q=40"
            alt="Twitter"
            mr={4}
          />
          <Image
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/youtube.png?auto=format%2Ccompress&dpr=1&w=28&h=28&q=40"
            alt="YouTube"
            mr={4}
          />
          <Image
            display={{ base: "none", sm: "block" }}
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/instagram.png?auto=format%2Ccompress&dpr=1&w=28&h=28&q=40"
            alt="Instagram"
            mr={4}
          />
          <Image
            display={{ base: "none", sm: "block" }}
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/9b7e964107839c77644d7e7d15035b73.png?auto=format%2Ccompress&dpr=1&w=28&h=28&q=40"
            alt="Another Social Icon" // Changed alt text for clarity
            mr={4}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;