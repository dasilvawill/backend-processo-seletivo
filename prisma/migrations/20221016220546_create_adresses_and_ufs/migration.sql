-- AlterTable
ALTER TABLE "people" ADD COLUMN     "address_id" INTEGER;

-- CreateTable
CREATE TABLE "adresses" (
    "address_id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "postal_code" TEXT NOT NULL,
    "complement" TEXT,
    "uf_id" INTEGER NOT NULL,

    CONSTRAINT "adresses_pkey" PRIMARY KEY ("address_id")
);

-- CreateTable
CREATE TABLE "ufs" (
    "uf_id" SERIAL NOT NULL,
    "uf" TEXT NOT NULL,
    "federation_unity" TEXT NOT NULL,

    CONSTRAINT "ufs_pkey" PRIMARY KEY ("uf_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ufs_uf_key" ON "ufs"("uf");

-- CreateIndex
CREATE UNIQUE INDEX "ufs_federation_unity_key" ON "ufs"("federation_unity");

-- AddForeignKey
ALTER TABLE "people" ADD CONSTRAINT "people_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "adresses"("address_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adresses" ADD CONSTRAINT "adresses_uf_id_fkey" FOREIGN KEY ("uf_id") REFERENCES "ufs"("uf_id") ON DELETE RESTRICT ON UPDATE CASCADE;
