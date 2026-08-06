import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../app/generated/prisma/client";
import { seedDatabase } from "../lib/seedData";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

seedDatabase(prisma)
  .then(({ categories, products }) => {
    console.log(`Seeded ${categories} categories and ${products} products.`);
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
