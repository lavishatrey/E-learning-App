import React from 'react';
import { Box, Flex, Grid, Text, Heading, useColorModeValue } from "@chakra-ui/react";
import TeacherNavTop from "./TeacherNavTop";

// Import Chart.js components and register them once
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components (only needs to be done once in your app)
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const TeacherDashboard = () => {
  // Dummy data for courses and enrolled users
  const courses = [
    { id: 1, title: "Introduction to React Hooks", enrolledUsers: 20 },
    { id: 2, title: "Advanced CSS & Animations", enrolledUsers: 15 },
    { id: 3, title: "Node.js Backend Development", enrolledUsers: 30 },
    { id: 4, title: "Database Management with SQL", enrolledUsers: 25 },
    { id: 5, title: "Python for Data Science", enrolledUsers: 18 },
    { id: 6, title: "Machine Learning Fundamentals", enrolledUsers: 40 },
  ];

  // Colors for dark/light mode
  const bg = useColorModeValue("gray.50", "gray.800"); // Main background
  const cardBg = useColorModeValue("white", "gray.700"); // Card background
  const borderColor = useColorModeValue("gray.200", "gray.600"); // Border for cards
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900"); // General text color
  const headingColor = useColorModeValue("black", "whiteAlpha.900"); // Heading color
  const enrolledUsersNumberColor = useColorModeValue("blue.600", "blue.300"); // Color for the big numbers

  // Data for the Bar Chart
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Active Students',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: useColorModeValue('rgba(75, 192, 192, 0.6)', 'rgba(129, 230, 217, 0.7)'), // Dynamic color
        borderColor: useColorModeValue('rgba(75, 192, 192, 1)', 'rgba(129, 230, 217, 1)'), // Dynamic color
        borderWidth: 1,
      },
    ],
  };

  // Options for the Bar Chart
  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { // Add plugins for title/legend/tooltip styling
      title: {
        display: false, // Title is handled by Chakra UI Heading
      },
      legend: {
        labels: {
          color: textColor, // Dynamic legend label color
        },
      },
      tooltip: {
        bodyColor: textColor, // Dynamic tooltip body color
        titleColor: headingColor, // Dynamic tooltip title color
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: textColor }, // Dynamic x-axis label color
        title: { display: false }
      },
      y: {
        beginAtZero: true,
        ticks: { color: textColor }, // Dynamic y-axis label color
        grid: {
            color: borderColor // Dynamic grid line color
        },
        title: { display: false }
      },
    },
  };

  // Data for the Pie Chart
  const pieChartData = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [
      {
        data: [70, 20, 10],
        backgroundColor: useColorModeValue(
            ['#48BB78', '#ECC94B', '#FC8181'], // Light mode colors
            ['#68D391', '#F6E05E', '#FEB2B2']  // Dark mode colors (lighter shades)
        ),
        hoverBackgroundColor: useColorModeValue(
            ['#38A169', '#D69E2E', '#E53E3E'], // Light mode hover
            ['#5EEAD4', '#FCD34D', '#FCA5A5']  // Dark mode hover
        ),
      },
    ],
  };

  // Options for the Pie Chart
  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { // Add plugins for title/legend/tooltip styling
      title: {
        display: false, // Title is handled by Chakra UI Heading
      },
      legend: {
        position: 'top',
        labels: {
          color: textColor, // Dynamic legend label color
        },
      },
      tooltip: {
        bodyColor: textColor, // Dynamic tooltip body color
        titleColor: headingColor, // Dynamic tooltip title color
      }
    },
  };

  return (
    <Box bg={bg} minH="100vh">
      <TeacherNavTop />

      <Box pt={{ base: '90px', md: '100px', lg: '110px' }} px={{ base: 4, md: 8, lg: 10 }}>
        <Heading as="h1" size="xl" mb={8} color={headingColor} textAlign="center">
          Teacher Dashboard 📊
        </Heading>

        <Box p={5} bgColor={cardBg} boxShadow="lg" rounded="lg">
          <Heading as="h2" size="lg" mb={6} color={headingColor}>
            Your Courses 📚
          </Heading>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={{ base: 4, md: 6, lg: 8 }}
          >
            {courses.map(course => (
              <Box
                key={course.id}
                border={`1px solid ${borderColor}`}
                borderRadius="lg"
                p={6}
                boxShadow="sm"
                _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
                transition="all 0.2s ease-in-out"
                bg={cardBg}
                color={textColor}
              >
                <Text fontSize="xl" fontWeight="semibold" mb={2}>
                  {course.title}
                </Text>
                <Flex mt={3} justify="space-between" align="center">
                  <Text fontSize="md">Enrolled Users:</Text>
                  <Text
                    fontSize="2xl"
                    fontWeight="extrabold"
                    color={enrolledUsersNumberColor}
                  >
                    {course.enrolledUsers}
                  </Text>
                </Flex>
              </Box>
            ))}
          </Grid>
        </Box>

        {/* Bar graph section */}
        <Box mt={10} p={5} bgColor={cardBg} boxShadow="lg" rounded="lg" color={textColor}>
          <Heading as="h2" size="lg" mb={6} color={headingColor}>
            Student Progress Over Time 📈
          </Heading>
          <Flex minH="300px" justify="center" align="center" p={4} rounded="md">
            {/* The Bar component will take up the space here */}
            <Bar data={barChartData} options={barChartOptions} />
          </Flex>
        </Box>

        {/* Pie graph section */}
        <Box mt={10} p={5} mb={10} bgColor={cardBg} boxShadow="lg" rounded="lg" color={textColor}>
          <Heading as="h2" size="lg" mb={6} color={headingColor}>
            Course Completion Rates 📊
          </Heading>
          <Flex minH="300px" justify="center" align="center" p={4} rounded="md">
            {/* The Pie component will take up the space here */}
            <Pie data={pieChartData} options={pieChartOptions} />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default TeacherDashboard;