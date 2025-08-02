import CampaignDetails from "@/components/CampaignDetails";
import HarvestCalendar from "@/components/HarvestCalendar";
import NutritionTracker from "@/components/NutritionTracker";
import VolunteerPlots from "@/components/VolunteerPlots";
import { promises as fs } from "fs";
import path from "path";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Button,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { GARDEN_THEME } from "@/constants/campaign";

async function getData() {
  const campaignDir = path.join(process.cwd(), "public/campaign");
  const imageFiles = await fs.readdir(campaignDir);
  const images = imageFiles.map((file) => `/campaign/${file}`);

  const markdownPath = path.join(process.cwd(), "public/campaign-details.md");
  const markdownContent = await fs.readFile(markdownPath, "utf8");

  return { images, markdownContent };
}

export default async function Home() {
  const { images, markdownContent } = await getData();

  return (
    <Box>
      {/* Main Campaign Section */}
      <CampaignDetails images={images} markdownContent={markdownContent} />

      <Divider my={12} />

      {/* Garden Features Section */}
      <Container maxW="container.xl" py={12}>
        <VStack spacing={12}>
          {/* Garden Features Overview */}
          <Box textAlign="center" maxW="4xl">
            <Heading color={GARDEN_THEME.primary} mb={4}>
              🌱 Our Community Garden Features
            </Heading>
            <Text color="gray.600" fontSize="lg" mb={8}>
              Discover the innovative tools and systems that make our community garden
              more than just a place to grow food - it's a hub for learning, connection, and sustainability.
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
              <Box
                p={6}
                bg="white"
                borderRadius="lg"
                borderWidth="1px"
                borderColor="gray.200"
                textAlign="center"
                _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
                transition="all 0.3s"
              >
                <Text fontSize="3xl" mb={3}>📅</Text>
                <Heading size="md" color={GARDEN_THEME.primary} mb={2}>
                  Harvest Calendar
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  Seasonal planting and harvesting schedules to maximize your garden's potential
                </Text>
              </Box>

              <Box
                p={6}
                bg="white"
                borderRadius="lg"
                borderWidth="1px"
                borderColor="gray.200"
                textAlign="center"
                _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
                transition="all 0.3s"
              >
                <Text fontSize="3xl" mb={3}>🥕</Text>
                <Heading size="md" color={GARDEN_THEME.primary} mb={2}>
                  Nutrition Tracker
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  Monitor the nutritional value of harvested produce and community health goals
                </Text>
              </Box>

              <Box
                p={6}
                bg="white"
                borderRadius="lg"
                borderWidth="1px"
                borderColor="gray.200"
                textAlign="center"
                _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
                transition="all 0.3s"
              >
                <Text fontSize="3xl" mb={3}>👥</Text>
                <Heading size="md" color={GARDEN_THEME.primary} mb={2}>
                  Volunteer Plots
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  Community plot assignment and management system for collaborative gardening
                </Text>
              </Box>

              <Box
                p={6}
                bg="white"
                borderRadius="lg"
                borderWidth="1px"
                borderColor="gray.200"
                textAlign="center"
                _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
                transition="all 0.3s"
              >
                <Text fontSize="3xl" mb={3}>📚</Text>
                <Heading size="md" color={GARDEN_THEME.primary} mb={2}>
                  Education
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  Workshops and resources for sustainable gardening and nutrition education
                </Text>
              </Box>
            </SimpleGrid>
          </Box>

          {/* Call to Action */}
          <Box
            bg={GARDEN_THEME.accent}
            color="white"
            p={8}
            borderRadius="xl"
            textAlign="center"
            maxW="4xl"
            w="full"
          >
            <Heading size="lg" mb={4}>
              🌱 Ready to Join Our Growing Community?
            </Heading>
            <Text fontSize="lg" mb={6}>
              Your contribution helps us build a sustainable community garden that will provide
              fresh, healthy food and educational opportunities for our entire neighborhood.
            </Text>
            <Button
              size="lg"
              bg="white"
              color={GARDEN_THEME.accent}
              _hover={{ bg: "gray.100" }}
              px={8}
            >
              🌿 Contribute Now
            </Button>
          </Box>
        </VStack>
      </Container>

      <Divider my={12} />

      {/* Interactive Garden Components */}
      <Box bg="gray.50" py={12}>
        <Container maxW="container.xl">
          <VStack spacing={16}>
            <Box textAlign="center">
              <Heading color={GARDEN_THEME.primary} mb={4}>
                🛠️ Garden Management Tools
              </Heading>
              <Text color="gray.600" fontSize="lg">
                Explore our digital tools designed to make community gardening more effective and engaging
              </Text>
            </Box>

            {/* Harvest Calendar Component */}
            <Box w="full">
              <HarvestCalendar />
            </Box>

            <Divider />

            {/* Nutrition Tracker Component */}
            <Box w="full">
              <NutritionTracker />
            </Box>

            <Divider />

            {/* Volunteer Plots Component */}
            <Box w="full">
              <VolunteerPlots />
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Final Call to Action */}
      <Box bg={GARDEN_THEME.primary} color="white" py={16}>
        <Container maxW="container.xl" textAlign="center">
          <VStack spacing={6}>
            <Heading size="2xl">
              🌱 Together, We Can Grow a Healthier Community
            </Heading>
            <Text fontSize="xl" maxW="2xl">
              Every contribution brings us closer to our goal of creating a sustainable
              community garden that will provide fresh food, education, and connection
              for generations to come.
            </Text>
            <Button
              size="lg"
              bg={GARDEN_THEME.accent}
              color="white"
              _hover={{ bg: GARDEN_THEME.warning }}
              px={12}
              py={6}
              fontSize="lg"
            >
              🌿 Support Our Community Garden
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
