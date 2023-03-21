import { PrismaClient } from "@prisma/client";

export abstract class Controller {
	protected readonly prisma = new PrismaClient()
}