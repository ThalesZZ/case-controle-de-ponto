-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "authCod" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_authCod_key" ON "users"("authCod");
