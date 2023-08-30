import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const user = prisma.user.create({ data: { email: 'test@test.com' } });
  console.log('user', user);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
