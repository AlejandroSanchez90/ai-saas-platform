import { auth } from '@clerk/nextjs';
import prismadb from './prismadb';
import { MAX_FREE_COUNTS } from '@/constants';
import { Prisma } from '@prisma/client';

export const increaseApiLimit = async () => {
  const { userId } = auth();

  if (!userId) return;

  const userApiLimits = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (userApiLimits) {
    await prismadb.userApiLimit.update({
      where: { userId: userId },
      data: {
        count: userApiLimits.count + 1,
      },
    });
  } else {
    await prismadb.userApiLimit.create({
      data: { userId: userId, count: 1 },
    });
  }
};

export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) return false;

  const userApiLimits = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimits || userApiLimits.count < MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
};

export const getApiLimitCount = async () => {
  const { userId } = auth();

  if (!userId) return 0;

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimit) {
    return 0;
  }

  return userApiLimit.count;
};
