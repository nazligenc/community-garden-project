"use client";
import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    Badge,
    VStack,
    HStack,
    Button,
    Avatar,
    AvatarGroup,
    Container,
    useColorModeValue,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    Progress,
} from "@chakra-ui/react";
import { GARDEN_THEME } from "@/constants/campaign";

interface Plot {
    id: string;
    name: string;
    size: string;
    status: "available" | "assigned" | "maintenance";
    volunteers: string[];
    crops: string[];
    lastActivity: string;
    progress: number;
}

interface Volunteer {
    name: string;
    avatar: string;
    plots: string[];
    hoursThisWeek: number;
    specialty: string;
}

const plots: Plot[] = [
    {
        id: "A1",
        name: "Plot A1",
        size: "10x15 ft",
        status: "assigned",
        volunteers: ["Sarah Johnson", "Mike Chen"],
        crops: ["Tomatoes", "Basil", "Peppers"],
        lastActivity: "2 days ago",
        progress: 75,
    },
    {
        id: "A2",
        name: "Plot A2",
        size: "10x15 ft",
        status: "assigned",
        volunteers: ["Maria Garcia"],
        crops: ["Lettuce", "Spinach", "Carrots"],
        lastActivity: "1 day ago",
        progress: 90,
    },
    {
        id: "B1",
        name: "Plot B1",
        size: "10x15 ft",
        status: "assigned",
        volunteers: ["David Kim", "Lisa Wang"],
        crops: ["Cucumbers", "Beans", "Herbs"],
        lastActivity: "3 days ago",
        progress: 60,
    },
    {
        id: "B2",
        name: "Plot B2",
        size: "10x15 ft",
        status: "available",
        volunteers: [],
        crops: [],
        lastActivity: "Never",
        progress: 0,
    },
    {
        id: "C1",
        name: "Plot C1",
        size: "10x15 ft",
        status: "maintenance",
        volunteers: ["Community Team"],
        crops: ["Soil preparation"],
        lastActivity: "Today",
        progress: 25,
    },
    {
        id: "C2",
        name: "Plot C2",
        size: "10x15 ft",
        status: "assigned",
        volunteers: ["Robert Smith", "Emma Davis"],
        crops: ["Potatoes", "Onions", "Garlic"],
        lastActivity: "4 days ago",
        progress: 45,
    },
];

const volunteers: Volunteer[] = [
    {
        name: "Sarah Johnson",
        avatar: "SJ",
        plots: ["A1"],
        hoursThisWeek: 8,
        specialty: "Tomatoes",
    },
    {
        name: "Mike Chen",
        avatar: "MC",
        plots: ["A1"],
        hoursThisWeek: 6,
        specialty: "Herbs",
    },
    {
        name: "Maria Garcia",
        avatar: "MG",
        plots: ["A2"],
        hoursThisWeek: 10,
        specialty: "Leafy Greens",
    },
    {
        name: "David Kim",
        avatar: "DK",
        plots: ["B1"],
        hoursThisWeek: 7,
        specialty: "Cucumbers",
    },
    {
        name: "Lisa Wang",
        avatar: "LW",
        plots: ["B1"],
        hoursThisWeek: 5,
        specialty: "Beans",
    },
    {
        name: "Robert Smith",
        avatar: "RS",
        plots: ["C2"],
        hoursThisWeek: 9,
        specialty: "Root Vegetables",
    },
    {
        name: "Emma Davis",
        avatar: "ED",
        plots: ["C2"],
        hoursThisWeek: 4,
        specialty: "Garlic",
    },
];

const gardenStats = {
    totalPlots: 6,
    assignedPlots: 4,
    availablePlots: 1,
    maintenancePlots: 1,
    totalVolunteers: 7,
    weeklyHours: 49,
    cropsGrowing: 12,
};

export default function VolunteerPlots() {
    const bgColor = useColorModeValue("white", "gray.800");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    const getStatusColor = (status: string) => {
        switch (status) {
            case "assigned":
                return "green";
            case "available":
                return "blue";
            case "maintenance":
                return "orange";
            default:
                return "gray";
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case "assigned":
                return "Assigned";
            case "available":
                return "Available";
            case "maintenance":
                return "Maintenance";
            default:
                return "Unknown";
        }
    };

    return (
        <Container maxW="container.xl" py="8">
            <VStack spacing={8} align="stretch">
                <Box textAlign="center">
                    <Heading color={GARDEN_THEME.primary} mb={2}>
                        👥 Volunteer Plot Management
                    </Heading>
                    <Text color="gray.600" fontSize="lg">
                        Manage community garden plots and volunteer assignments
                    </Text>
                </Box>

                {/* Garden Statistics */}
                <Box
                    bg={bgColor}
                    p={6}
                    borderRadius="lg"
                    borderWidth="1px"
                    borderColor={borderColor}
                    boxShadow="sm"
                >
                    <Heading size="md" color={GARDEN_THEME.primary} mb={4}>
                        🌱 Garden Overview
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                        <Stat>
                            <StatLabel>Total Plots</StatLabel>
                            <StatNumber color={GARDEN_THEME.primary}>
                                {gardenStats.totalPlots}
                            </StatNumber>
                            <StatHelpText>
                                {gardenStats.assignedPlots} assigned, {gardenStats.availablePlots} available
                            </StatHelpText>
                        </Stat>
                        <Stat>
                            <StatLabel>Active Volunteers</StatLabel>
                            <StatNumber color={GARDEN_THEME.accent}>
                                {gardenStats.totalVolunteers}
                            </StatNumber>
                            <StatHelpText>{gardenStats.weeklyHours} hours this week</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatLabel>Crops Growing</StatLabel>
                            <StatNumber color={GARDEN_THEME.success}>
                                {gardenStats.cropsGrowing}
                            </StatNumber>
                            <StatHelpText>Different varieties</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatLabel>Plot Utilization</StatLabel>
                            <StatNumber color={GARDEN_THEME.secondary}>
                                {Math.round((gardenStats.assignedPlots / gardenStats.totalPlots) * 100)}%
                            </StatNumber>
                            <StatHelpText>
                                <Progress
                                    value={(gardenStats.assignedPlots / gardenStats.totalPlots) * 100}
                                    colorScheme="green"
                                    size="sm"
                                    mt={2}
                                />
                            </StatHelpText>
                        </Stat>
                    </SimpleGrid>
                </Box>

                {/* Plot Grid */}
                <Box>
                    <Heading size="md" color={GARDEN_THEME.primary} mb={4}>
                        🏡 Garden Plots
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                        {plots.map((plot) => (
                            <Box
                                key={plot.id}
                                bg={bgColor}
                                p={6}
                                borderRadius="lg"
                                borderWidth="1px"
                                borderColor={borderColor}
                                boxShadow="sm"
                                _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
                                transition="all 0.2s"
                            >
                                <HStack justify="space-between" mb={4}>
                                    <Heading size="sm" color={GARDEN_THEME.primary}>
                                        {plot.name}
                                    </Heading>
                                    <Badge colorScheme={getStatusColor(plot.status)}>
                                        {getStatusText(plot.status)}
                                    </Badge>
                                </HStack>

                                <VStack spacing={3} align="stretch">
                                    <Text fontSize="sm" color="gray.600">
                                        Size: {plot.size}
                                    </Text>

                                    {plot.volunteers.length > 0 && (
                                        <Box>
                                            <Text fontSize="sm" fontWeight="medium" mb={2}>
                                                Volunteers:
                                            </Text>
                                            <AvatarGroup size="sm" max={3}>
                                                {plot.volunteers.map((volunteer) => (
                                                    <Avatar
                                                        key={volunteer}
                                                        name={volunteer}
                                                        size="sm"
                                                        bg={GARDEN_THEME.primary}
                                                    />
                                                ))}
                                            </AvatarGroup>
                                        </Box>
                                    )}

                                    {plot.crops.length > 0 && (
                                        <Box>
                                            <Text fontSize="sm" fontWeight="medium" mb={2}>
                                                Crops:
                                            </Text>
                                            <HStack spacing={2} flexWrap="wrap">
                                                {plot.crops.map((crop) => (
                                                    <Badge
                                                        key={crop}
                                                        colorScheme="green"
                                                        variant="subtle"
                                                        size="sm"
                                                    >
                                                        {crop}
                                                    </Badge>
                                                ))}
                                            </HStack>
                                        </Box>
                                    )}

                                    <Box>
                                        <Text fontSize="sm" fontWeight="medium" mb={2}>
                                            Progress:
                                        </Text>
                                        <Progress
                                            value={plot.progress}
                                            colorScheme="green"
                                            size="sm"
                                            borderRadius="full"
                                        />
                                        <Text fontSize="xs" color="gray.500" mt={1}>
                                            {plot.progress}% complete
                                        </Text>
                                    </Box>

                                    <Text fontSize="xs" color="gray.500">
                                        Last activity: {plot.lastActivity}
                                    </Text>

                                    {plot.status === "available" && (
                                        <Button
                                            size="sm"
                                            colorScheme="green"
                                            variant="outline"
                                            mt={2}
                                        >
                                            Request Assignment
                                        </Button>
                                    )}
                                </VStack>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>

                {/* Volunteer Directory */}
                <Box
                    bg={bgColor}
                    p={6}
                    borderRadius="lg"
                    borderWidth="1px"
                    borderColor={borderColor}
                    boxShadow="sm"
                >
                    <Heading size="md" color={GARDEN_THEME.primary} mb={4}>
                        👨‍🌾 Volunteer Directory
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                        {volunteers.map((volunteer) => (
                            <Box
                                key={volunteer.name}
                                p={4}
                                bg="gray.50"
                                borderRadius="md"
                                borderLeft="4px solid"
                                borderLeftColor={GARDEN_THEME.primary}
                            >
                                <HStack mb={3}>
                                    <Avatar
                                        name={volunteer.name}
                                        size="sm"
                                        bg={GARDEN_THEME.primary}
                                    />
                                    <VStack align="start" spacing={0}>
                                        <Text fontWeight="bold" fontSize="sm">
                                            {volunteer.name}
                                        </Text>
                                        <Text fontSize="xs" color="gray.500">
                                            {volunteer.specialty} specialist
                                        </Text>
                                    </VStack>
                                </HStack>
                                <VStack spacing={1} align="stretch">
                                    <Text fontSize="xs">
                                        <strong>Plots:</strong> {volunteer.plots.join(", ")}
                                    </Text>
                                    <Text fontSize="xs">
                                        <strong>Hours this week:</strong> {volunteer.hoursThisWeek}
                                    </Text>
                                </VStack>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>

                {/* Call to Action */}
                <Box
                    bg={GARDEN_THEME.accent}
                    color="white"
                    p={6}
                    borderRadius="lg"
                    textAlign="center"
                >
                    <Heading size="md" mb={3}>
                        🌱 Join Our Garden Community
                    </Heading>
                    <Text fontSize="sm" mb={4}>
                        Interested in volunteering? We have plots available and welcome
                        gardeners of all experience levels. Join us in growing fresh,
                        healthy food for our community!
                    </Text>
                    <Button colorScheme="white" variant="outline" size="lg">
                        Become a Volunteer
                    </Button>
                </Box>
            </VStack>
        </Container>
    );
} 