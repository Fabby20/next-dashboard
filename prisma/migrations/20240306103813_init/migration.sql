-- CreateTable
CREATE TABLE "invest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "invest_pkey" PRIMARY KEY ("id")
);
