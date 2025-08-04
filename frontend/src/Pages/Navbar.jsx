import React from "react";
import {
  Flex,
  Box,
  Input,
  Button,
  IconButton,
  useBreakpointValue,
  Text,
  Link,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  useToast, // <-- Import useToast hook
} from "@chakra-ui/react";
import { FaSearch, FaBars } from "react-icons/fa";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { NavBarDrawer } from "../components/NavBarDrawer"; // <-- Correct import (named export)

// Assuming showToast is defined elsewhere, if not, you might need to import or define it.
// const showToast = ({ toast, message, color }) => {
//   toast({
//     title: message,
//     status: color,
//     duration: 3000,
//     isClosable: true,
//   });
// };

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast(); // <-- Initialize useToast

  const navigate = useNavigate();
  const location = useLocation();

  const [showSearchBar, setShowSearchBar] = React.useState(false);

  // --- All useColorModeValue calls UNCONDITIONALLY at the top ---
  const navBg = useColorModeValue("#f5f5f5", "gray.800");
  const textColor = useColorModeValue("#333333", "whiteAlpha.900");
  const linkHoverColor = useColorModeValue("#003e9c", "#90CDF4");
  const inputBg = useColorModeValue("white", "gray.700");
  const inputPlaceholderColor = useColorModeValue("#555454", "gray.400");
  const iconButtonBgHover = useColorModeValue("gray.200", "whiteAlpha.300");
  const searchButtonHoverBg = useColorModeValue("#003e9c", "#555555");
  const mobileSearchIconBg = useColorModeValue("#333333", "gray.600");
  const primaryButtonBg = useColorModeValue("#333333", "blue.600");
  const primaryButtonColor = useColorModeValue("white", "white");
  const primaryButtonHoverBg = useColorModeValue("#003e9c", "blue.700");
  const desktopSearchButtonHover = useColorModeValue("#0288D1", "blue.700");

  function signup() {
    navigate("/signup");
  }

  function home() {
    navigate("/");
  }

  function handleShowSearchBar() {
    setShowSearchBar(!showSearchBar);
    if (showSearchBar && location.pathname === "/home") {
      toast({ // Direct Chakra UI toast call
        title: `Below is your search Result`,
        status: "success", // Changed color to status for Chakra toast
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
        bg={navBg}
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        position="fixed"
        width="100%"
        zIndex={12}
      >
        <Flex align="center">
          <Box>
            <Text
              fontSize={30}
              fontWeight="extrabold"
              color={textColor}
              onClick={home}
              _hover={{ cursor: "pointer" }}
            >
              LAVISH - LEARNS
            </Text>
          </Box>
        </Flex>

        {!isMobile ? (
          <Flex width="40%">
            <Input
              type="text"
              variant="filled"
              border="1px solid black"
              fontSize="0.9rem"
              color={textColor}
              placeholder="What do you want to learn?"
              borderRadius="0px"
              _placeholder={{ color: inputPlaceholderColor, letterSpacing: "1px" }}
              flex="1"
              mr="-1px"
              bg={inputBg}
            />
            <IconButton
              aria-label="Search"
              icon={<FaSearch />}
              bg={primaryButtonBg}
              color={primaryButtonColor}
              borderRadius="0px"
              _hover={{ background: desktopSearchButtonHover }}
            />
          </Flex>
        ) : (
          <Flex align="center">
            <IconButton
              aria-label="Menu"
              icon={<FaBars />}
              bg="transparent"
              color={textColor}
              onClick={onOpen}
              fontSize="2xl"
              mr={2}
            />
          </Flex>
        )}

        {/* Mobile search icon (always visible on mobile unless search bar is active) */}
        {isMobile && !showSearchBar && location.pathname === "/home" && (
          <IconButton
            aria-label="Search"
            icon={<FaSearch />}
            color={textColor}
            borderRadius="7px"
            bg={mobileSearchIconBg}
            _hover={{ backgroundColor: searchButtonHoverBg, color: "white" }}
            onClick={handleShowSearchBar}
          />
        )}

        {/* Mobile search bar (conditionally rendered when showSearchBar is true) */}
        {isMobile && showSearchBar && location.pathname === "/home" && (
          <Flex align="center" width="70vw">
            <Input
              type="text"
              variant="filled"
              border="1px solid black"
              fontSize="1rem"
              color={textColor}
              placeholder="Find your new Skill!"
              borderRadius="0px"
              _placeholder={{
                color: inputPlaceholderColor,
                letterSpacing: "0.5px",
              }}
              flex="1"
              mr="-1px"
              bg={inputBg}
            />
            <IconButton
              aria-label="Search"
              icon={<FaSearch />}
              bg={primaryButtonBg}
              color={primaryButtonColor}
              borderRadius="0px"
              _hover={{ bg: searchButtonHoverBg }}
              onClick={handleShowSearchBar}
            />
          </Flex>
        )}

        {/* Right side navigation for desktop */}
        {!isMobile && (
          <Flex align="center" gap={5}> {/* Use gap for consistent spacing */}
            {/* Theme Toggle Button */}
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              color={textColor}
              _hover={{ bg: iconButtonBgHover }}
            />

            {/* Links (ensure they have content or remove if not needed) */}
            <Box>
              <Link
                _hover={{ color: linkHoverColor, textDecoration: "underline" }}
                href="#"
                color={textColor}
              >
                Categories
              </Link>
            </Box>
            <Box>
              <Link
                _hover={{ color: linkHoverColor, textDecoration: "underline" }}
                href="#"
                color={textColor}
              >
                For Business
              </Link>
            </Box>
            <Box>
              {/* Corrected placement of href and color attributes */}
              <Link
                href="/Teachme"
                color={textColor}
                _hover={{ color: linkHoverColor, textDecoration: "underline" }}
              >
                Teach
              </Link>
            </Box>
            <Box>
              <Link textDecoration="none" color={textColor} href="/login">
                Login
              </Link>
            </Box>

            {/* Join for Free Button */}
            <Button
              bg={primaryButtonBg}
              color={primaryButtonColor}
              borderRadius="5px"
              _hover={{ bg: primaryButtonHoverBg }}
              onClick={signup}
            >
              Join for free
            </Button>
          </Flex>
        )}
      </Flex>
      <NavBarDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  );
};

export default Navbar;