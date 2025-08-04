import React, { useState } from "react";
import {
  Flex,
  Box,
  Input,
  IconButton,
  useBreakpointValue,
  Text,
  Link,
  useDisclosure,
  useToast, // <-- Keep useToast for toasts
  useColorMode, // <-- Import useColorMode
  useColorModeValue, // <-- Import useColorModeValue
  Button
} from "@chakra-ui/react";
import { FaSearch, FaBars } from "react-icons/fa";
import { SunIcon, MoonIcon } from "@chakra-ui/icons"; // <-- Import icons for theme toggle
import Dropdown from "./Dropdown"; // Assuming Dropdown handles its own dark mode
import { useLocation, useNavigate } from "react-router-dom";
import { NavBarDrawer } from "../NavBarDrawer"; // Assuming NavBarDrawer handles its own dark mode

// If showToast is a custom utility, ensure it is defined or adjust this logic.
// For simplicity, I'll integrate Chakra UI's useToast directly where it's called.
// import { showToast } from "../SignUp"; // If still used, make sure it's defined/imported

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const navigate = useNavigate();
  const location = useLocation(); // Needed for conditional mobile search bar

  const user = JSON.parse(localStorage.getItem("user")); // User data for conditional link rendering

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const toast = useToast(); // <-- Initialize useToast
  const { colorMode, toggleColorMode } = useColorMode(); // <-- Initialize useColorMode

  // <-- Define all color mode values UNCONDITIONALLY at the top -->
  const navBg = useColorModeValue("#f5f5f5", "gray.800"); // Navbar background
  const textColor = useColorModeValue("#333333", "whiteAlpha.900"); // General text color (logo, menu icon, links)
  const linkHoverColor = useColorModeValue("#003e9c", "#90CDF4"); // Link hover color
  const inputBorderColor = useColorModeValue("black", "gray.500"); // Search input border
  const inputBg = useColorModeValue("white", "gray.700"); // Search input background
  const inputTextColor = useColorModeValue("black", "whiteAlpha.900"); // Search input text color
  const inputPlaceholderColor = useColorModeValue("#555454", "gray.400"); // Search input placeholder
  const searchButtonBg = useColorModeValue("#333333", "blue.600"); // Search button background
  const searchButtonColor = useColorModeValue("white", "white"); // Search button text/icon color
  const searchButtonHoverBg = useColorModeValue("#555555", "blue.700"); // Search button hover background (desktop)
  const mobileSearchButtonHoverBg = useColorModeValue("#003e9c", "blue.700"); // Mobile search button hover (different initial style)
  const mobileSearchIconBg = useColorModeValue("#333333", "gray.600"); // Mobile search icon background when not active

  // Theme toggle related colors
  const themeToggleHoverBg = useColorModeValue("gray.200", "whiteAlpha.300");
  const themeToggleIcon = colorMode === "light" ? <MoonIcon /> : <SunIcon />; // Predefine icon

  function home() {
    navigate("/"); // Changed from /home to / as per typical home route
  }

  function handleShowSearchBar() {
    setShowSearchBar(!showSearchBar);
    if (showSearchBar && location.pathname === "/home") {
      toast({ // Direct Chakra UI toast call
        title: `Below is your search Result`,
        status: "success", // 'color' is usually 'status' in Chakra toast
        duration: 3000,
        isClosable: true,
      });
    }
  }

  return (
    <Box>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        p={4}
        bg={navBg} // Apply dynamic background
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        position="fixed"
        width="100vw"
        zIndex={12}
        top={0}
      >
        <Flex align="center">
          <Box>
            {/* Logo */}
            <Text
              fontSize={30}
              fontWeight="extrabold"
              color={textColor} // Apply dynamic color
              _hover={{ cursor: "pointer" }}
              onClick={home}
            >
              LAVISH - LEARNS
            </Text>
          </Box>
        </Flex>

        {!isMobile ? (
          <Flex align="center" width="40%">
            {/* Search Bar for Desktop */}
            <Input
              type="text"
              variant="filled"
              border={`1px solid ${inputBorderColor}`} // Apply dynamic border color
              fontSize="0.9rem" // Adjusted from 0.7rem for better readability
              color={inputTextColor} // Apply dynamic text color
              placeholder="What do you want to learn?"
              borderRadius="0px"
              _placeholder={{ color: inputPlaceholderColor, letterSpacing: "1px" }} // Apply dynamic placeholder color
              flex="1"
              mr="-1px"
              bg={inputBg} // Apply dynamic background
            />
            <IconButton
              aria-label="Search"
              icon={<FaSearch />}
              bg={searchButtonBg} // Apply dynamic background
              color={searchButtonColor} // Apply dynamic color
              borderRadius="0px"
              _hover={{ bg: searchButtonHoverBg }} // Apply dynamic hover background
            />
          </Flex>
        ) : (
          <Flex align="center" gap={2}> {/* Added gap for mobile icons */}
            {/* Mobile Menu Icon */}
            <IconButton
              aria-label="Menu"
              icon={<FaBars />}
              bg="transparent"
              color={textColor} // Apply dynamic color
              fontSize="2xl"
              onClick={onOpen}
            />
            {/* Mobile Theme Toggle Button */}
            <IconButton
              aria-label="Toggle color mode"
              icon={themeToggleIcon}
              onClick={toggleColorMode}
              variant="ghost"
              color={textColor}
              fontSize="xl"
              _hover={{ bg: themeToggleHoverBg }}
            />
          </Flex>
        )}
        {/* small screen search bar and icon  */}
        {isMobile && location.pathname === "/home" && (
          <Box>
            {showSearchBar ? (
              <Flex align="center" width="70vw">
                {/* Search Bar for Mobile */}
                <Input
                  type="text"
                  variant="filled"
                  border={`1px solid ${inputBorderColor}`} // Apply dynamic border color
                  fontSize="1rem" // Adjusted from 0.8rem for better readability
                  color={inputTextColor} // Apply dynamic text color
                  placeholder="Find your new Skill!"
                  borderRadius="0px"
                  _placeholder={{
                    color: inputPlaceholderColor,
                    letterSpacing: "0.5px",
                  }}
                  flex="1"
                  mr="-1px"
                  bg={inputBg} // Apply dynamic background
                />
                <IconButton
                  aria-label="Search"
                  icon={<FaSearch />}
                  bg={searchButtonBg}
                  onClick={handleShowSearchBar}
                  color={searchButtonColor}
                  borderRadius="0px"
                  _hover={{ bg: searchButtonHoverBg }}
                />
              </Flex>
            ) : (
              <IconButton
                aria-label="Search"
                icon={<FaSearch />}
                color={searchButtonColor}
                borderRadius="7px"
                bg={mobileSearchIconBg}
                onClick={handleShowSearchBar}
                _hover={{ backgroundColor: mobileSearchButtonHoverBg, color: "white" }}
              />
            )}
          </Box>
        )}

        {/* Right side navigation for desktop */}
        {!isMobile && (
          <Flex align="center" gap={5}> {/* Use gap for consistent spacing */}
            {/* Theme Toggle Button (Placed here for desktop) */}
            <IconButton
              aria-label="Toggle color mode"
              icon={themeToggleIcon}
              onClick={toggleColorMode}
              variant="ghost"
              color={textColor}
              fontSize="xl"
              _hover={{ bg: themeToggleHoverBg }}
            />

            {/* "Teach On LAVISH - LEARNS" Link */}
            {user && user.role !== "teacher" && user.role !== "admin" && (
              <Link
                _hover={{ color: linkHoverColor, textDecoration: "underline" }}
                href="/Teachme"
                color={textColor}
              >
                Teach On LAVISH - LEARNS
              </Link>
            )}

            {/* Dropdown for user actions/profile */}
            <Box>
              <Dropdown /> {/* Assuming Dropdown handles its own dark mode styling */}
            </Box>

            {/* Login Link (if user is not logged in) */}
            {!user && (
              <Link textDecoration="none" color={textColor} href="/login">
                Login
              </Link>
            )}

            {/* Join for Free Button (if user is not logged in) */}
            {!user && (
              <Button
                bg={searchButtonBg}
                color={searchButtonColor}
                borderRadius="5px"
                _hover={{ bg: searchButtonHoverBg }}
                onClick={() => navigate("/signup")}
              >
                Join for free
              </Button>
            )}
          </Flex>
        )}
      </Flex>
      {/* NavBarDrawer is part of the overall layout, assuming it adapts to color mode internally */}
      <NavBarDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  );
};

export default Navbar;