'use server';

import { prisma } from '@/lib/prisma';

export async function createUser(name: string, email: string, password: string) {
  return await prisma.user.create({
    data: { name, email, password },
  });
}
