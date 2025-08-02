"use client";
import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    Progress,
    VStack,
    HStack,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    Badge,
    Container,
    useColorModeValue,
} from "@chakra-ui/react";
import { GARDEN_THEME } from "@/constants/campaign";

interface NutritionInfo {
    name: string;
    icon: string;
    calories: number;
    protein: number;
    fiber: number;
    vitamins: string[];
    servingSize: string;
    color: string;
}

const nutritionData: NutritionInfo[] = [
    {
        name: "Tomatoes",
        icon: "🍅",
        calories: 22,
        protein: 1.1,
        fiber: 1.2,
        vitamins: ["C", "K", "A"],
        servingSize: "1 medium tomato",
        color: "red.500",
    },
    {
        name: "Carrots",
        icon: "🥕",
        calories: 41,
        protein: 0.9,
        fiber: 2.8,
        vitamins: ["A", "K", "C"],
        servingSize: "1 medium carrot",
        color: "orange.500",
    },
    {
        name: "Spinach",
        icon: "🥬",
        calories: 23,
        protein: 2.9,
        fiber: 2.2,
        vitamins: ["K", "A", "C", "Iron"],
        servingSize: "1 cup raw",
        color: "green.500",
    },
    {
        name: "Bell Peppers",
        icon: "🫑",
        calories: 31,
        protein: 1.0,
        fiber: 2.1,
        vitamins: ["C", "A", "B6"],
        servingSize: "1 medium pepper",
        color: "green.400",
    },
    {
        name: "Cucumbers",
        icon: "🥒",
        calories: 16,
        protein: 0.7,
        fiber: 0.5,
        vitamins: ["K", "C"],
        servingSize: "1 medium cucumber",
        color: "green.300",
    },
    {
        name: "Broccoli",
        icon: "🥦",
        calories: 55,
        protein: 3.7,
        fiber: 5.2,
        vitamins: ["C", "K", "A"],
        servingSize: "1 cup chopped",
        color: "green.600",
    },
];

const communityGoals = {
    dailyServings: 5,
    currentServings: 3.2,
    weeklyHarvest: 150, // lbs
    familiesServed: 45,
    nutritionEducation: 85, // percentage
};

export default function NutritionTracker() {
    const bgColor = useColorModeValue("white", "gray.800");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    const getVitaminColor = (vitamin: string) => {
        switch (vitamin) {
            case "A":
                return "orange";
            case "C":
                return "green";
            case "K":
                return "purple";
            case "Iron":
                return "red";
            case "B6":
                return "blue";
            default:
                return "gray";
        }
    };

    return (
        <Container maxW="container.xl" py="8">
            <VStack spacing={8} align="stretch">
                <Box textAlign="center">
                    <Heading color={GARDEN_THEME.primary} mb={2}>
                        🥕 Nutrition Tracker
                    </Heading>
                    <Text color="gray.600" fontSize="lg">
                        Track the nutritional value of our community garden harvests
                    </Text>
                </Box>

                {/* Community Nutrition Goals */}
                <Box
                    bg={bgColor}
                    p={6}
                    borderRadius="lg"
                    borderWidth="1px"
                    borderColor={borderColor}
                    boxShadow="sm"
                >
                    <Heading size="md" color={GARDEN_THEME.primary} mb={4}>
                        🌟 Community Nutrition Goals
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                        <Stat>
                            <StatLabel>Daily Vegetable Servings</StatLabel>
                            <StatNumber color={GARDEN_THEME.primary}>
                                {communityGoals.currentServings}/{communityGoals.dailyServings}
                            </StatNumber>
                            <StatHelpText>
                                <Progress
                                    value={(communityGoals.currentServings / communityGoals.dailyServings) * 100}
                                    colorScheme="green"
                                    size="sm"
                                    mt={2}
                                />
                            </StatHelpText>
                        </Stat>
                        <Stat>
                            <StatLabel>Weekly Harvest</StatLabel>
                            <StatNumber color={GARDEN_THEME.accent}>
                                {communityGoals.weeklyHarvest} lbs
                            </StatNumber>
                            <StatHelpText>Fresh produce distributed</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatLabel>Families Served</StatLabel>
                            <StatNumber color={GARDEN_THEME.secondary}>
                                {communityGoals.familiesServed}
                            </StatNumber>
                            <StatHelpText>Community members reached</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatLabel>Nutrition Education</StatLabel>
                            <StatNumber color={GARDEN_THEME.success}>
                                {communityGoals.nutritionEducation}%
                            </StatNumber>
                            <StatHelpText>Members with nutrition training</StatHelpText>
                        </Stat>
                    </SimpleGrid>
                </Box>

                {/* Vegetable Nutrition Cards */}
                <Box>
                    <Heading size="md" color={GARDEN_THEME.primary} mb={4}>
                        🥬 Garden Vegetable Nutrition
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                        {nutritionData.map((vegetable) => (
                            <Box
                                key={vegetable.name}
                                bg={bgColor}
                                p={6}
                                borderRadius="lg"
                                borderWidth="1px"
                                borderColor={borderColor}
                                boxShadow="sm"
                                _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
                                transition="all 0.2s"
                            >
                                <HStack mb={4}>
                                    <Text fontSize="2xl">{vegetable.icon}</Text>
                                    <VStack align="start" spacing={0}>
                                        <Heading size="sm" color={GARDEN_THEME.primary}>
                                            {vegetable.name}
                                        </Heading>
                                        <Text fontSize="xs" color="gray.500">
                                            {vegetable.servingSize}
                                        </Text>
                                    </VStack>
                                </HStack>

                                <VStack spacing={3} align="stretch">
                                    <HStack justify="space-between">
                                        <Text fontSize="sm" fontWeight="medium">
                                            Calories:
                                        </Text>
                                        <Text fontSize="sm" color={GARDEN_THEME.accent}>
                                            {vegetable.calories} kcal
                                        </Text>
                                    </HStack>
                                    <HStack justify="space-between">
                                        <Text fontSize="sm" fontWeight="medium">
                                            Protein:
                                        </Text>
                                        <Text fontSize="sm" color={GARDEN_THEME.primary}>
                                            {vegetable.protein}g
                                        </Text>
                                    </HStack>
                                    <HStack justify="space-between">
                                        <Text fontSize="sm" fontWeight="medium">
                                            Fiber:
                                        </Text>
                                        <Text fontSize="sm" color={GARDEN_THEME.secondary}>
                                            {vegetable.fiber}g
                                        </Text>
                                    </HStack>

                                    <Box>
                                        <Text fontSize="sm" fontWeight="medium" mb={2}>
                                            Key Vitamins:
                                        </Text>
                                        <HStack spacing={2}>
                                            {vegetable.vitamins.map((vitamin) => (
                                                <Badge
                                                    key={vitamin}
                                                    colorScheme={getVitaminColor(vitamin)}
                                                    variant="subtle"
                                                    size="sm"
                                                >
                                                    {vitamin}
                                                </Badge>
                                            ))}
                                        </HStack>
                                    </Box>
                                </VStack>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>

                {/* Nutrition Tips */}
                <Box
                    bg={GARDEN_THEME.accent}
                    color="white"
                    p={6}
                    borderRadius="lg"
                    textAlign="center"
                >
                    <Heading size="md" mb={3}>
                        💚 Nutrition Tips
                    </Heading>
                    <Text fontSize="sm" mb={3}>
                        Eating a variety of colorful vegetables ensures you get a wide range of
                        nutrients. Our community garden provides fresh, organic produce that's
                        harvested at peak ripeness for maximum nutritional value.
                    </Text>
                    <Text fontSize="xs">
                        Join our nutrition workshops to learn more about healthy eating and
                        food preparation techniques!
                    </Text>
                </Box>
            </VStack>
        </Container>
    );
} 