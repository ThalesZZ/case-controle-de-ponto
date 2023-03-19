import { PrismaClient, User } from "@prisma/client";

export class UserController {
	private prisma: PrismaClient;

	constructor() {
		this.prisma = new PrismaClient();
	}

	async createDefaultUser(authCod: string) {
		try {
			const defaultUser = await this.create({ authCod });
			console.log("Created DEFAULT_USER with authCod: " + authCod);

			return defaultUser;
		} catch (e) {
			try {
				const defaultUser = await this.getByAuthCod(authCod);
				console.log("DEFAULT_USER's authCod: " + authCod);

				return defaultUser;
			} catch (e) {
				console.error(e);
				return e;
			}
		}
	}

	async create(data: Omit<User, "id">) {
		try {
			return this.prisma.user.create({ data });
		} catch (e) {
			console.error(e);
			return e;
		}
	}

	async getByAuthCod(authCod: string) {
		return this.prisma.user.findFirstOrThrow({ where: { authCod } });
	}
}
