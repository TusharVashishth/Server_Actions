-- CreateTable
CREATE TABLE "Thoughts" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(250) NOT NULL,
    "thought" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Thoughts_pkey" PRIMARY KEY ("id")
);