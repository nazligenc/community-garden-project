"use client";
import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    Badge,
    VStack,
    HStack,
    useColorModeValue,
    Container,
} from "@chakra-ui/react";
import { GARDEN_THEME } from "@/constants/campaign";

interface PlantSchedule {
    name: string;
    plantSeason: string;
    harvestSeason: string;
    growthTime: string;
    icon: string;
}

const plantData: PlantSchedule[] = [
    {
        name: "Tomatoes",
        plantSeason: "Spring",
        harvestSeason: "Summer",
        growthTime: "60-80 days",
        icon: "🍅",
    },
    {
        name: "Carrots",
        plantSeason: "Spring/Fall",
        harvestSeason: "Summer/Winter",
        growthTime: "70-80 days",
        icon: "🥕",
    },
    {
        name: "Lettuce",
        plantSeason: "Spring/Fall",
        harvestSeason: "Spring/Summer",
        growthTime: "45-60 days",
        icon: "🥬",
    },
    {
        name: "Peppers",
        plantSeason: "Spring",
        harvestSeason: "Summer/Fall",
        growthTime: "60-90 days",
        icon: "🌶️",
    },
    {
        name: "Potatoes",
        plantSeason: "Spring",
        harvestSeason: "Fall",
        growthTime: "90-120 days",
        icon: "🥔",
    },
    {
        name: "Spinach",
        plantSeason: "Spring/Fall",
        harvestSeason: "Spring/Summer",
        growthTime: "40-50 days",
        icon: "🥬",
    },
    {
        name: "Cucumbers",
        plantSeason: "Spring",
        harvestSeason: "Summer",
        growthTime: "50-70 days",
        icon: "🥒",
    },
    {
        name: "Beans",
        plantSeason: "Spring",
        harvestSeason: "Summer",
        growthTime: "50-65 days",
        icon: "🫘",
    },
];

const seasons = ["Spring", "Summer", "Fall", "Winter"];

export default function HarvestCalendar() {
    const bgColor = useColorModeValue("white", "gray.800");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    const getSeasonColor = (season: string) => {
        switch (season) {
            case "Spring":
                return "green";
            case "Summer":
                return "orange";
            case "Fall":
                return "yellow";
            case "Winter":
                return "blue";
            default:
                return "gray";
        }
    };

    return (
        <Container maxW="container.xl" py="8">
            <VStack spacing={6} align="stretch">
                <Box textAlign="center">
                    <Heading color={GARDEN_THEME.primary} mb={2}>
                        📅 Harvest Calendar
                    </Heading>
                    <Text color="gray.600" fontSize="lg">
                        Plan your garden with our seasonal planting and harvesting guide
                    </Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                    {seasons.map((season) => (
                        <Box
                            key={season}
                            bg={bgColor}
                            p={6}
                            borderRadius="lg"
                            borderWidth="1px"
                            borderColor={borderColor}
                            boxShadow="sm"
                        >
                            <Heading size="md" color={GARDEN_THEME.primary} mb={4}>
                                {season}
                            </Heading>
                            <VStack spacing={3} align="stretch">
                                {plantData
                                    .filter(
                                        (plant) =>
                                            plant.plantSeason.includes(season) ||
                                            plant.harvestSeason.includes(season)
                                    )
                                    .map((plant) => (
                                        <Box
                                            key={plant.name}
                                            p={3}
                                            bg="gray.50"
                                            borderRadius="md"
                                            borderLeft="4px solid"
                                            borderLeftColor={GARDEN_THEME.primary}
                                        >
                                            <HStack justify="space-between" mb={2}>
                                                <Text fontWeight="bold" fontSize="sm">
                                                    {plant.icon} {plant.name}
                                                </Text>
                                                <Badge
                                                    colorScheme={getSeasonColor(season)}
                                                    variant="subtle"
                                                    fontSize="xs"
                                                >
                                                    {plant.growthTime}
                                                </Badge>
                                            </HStack>
                                            <HStack spacing={2}>
                                                {plant.plantSeason.includes(season) && (
                                                    <Badge colorScheme="green" size="sm">
                                                        Plant
                                                    </Badge>
                                                )}
                                                {plant.harvestSeason.includes(season) && (
                                                    <Badge colorScheme="orange" size="sm">
                                                        Harvest
                                                    </Badge>
                                                )}
                                            </HStack>
                                        </Box>
                                    ))}
                            </VStack>
                        </Box>
                    ))}
                </SimpleGrid>

                <Box
                    bg={GARDEN_THEME.accent}
                    color="white"
                    p={6}
                    borderRadius="lg"
                    textAlign="center"
                >
                    <Heading size="md" mb={2}>
                        🌱 Growing Tips
                    </Heading>
                    <Text fontSize="sm">
                        Remember to rotate your crops each season and practice companion
                        planting for better yields and natural pest control. Our community
                        garden volunteers are here to help you succeed!
                    </Text>
                </Box>
            </VStack>
        </Container>
    );
} 