/*
  Warnings:

  - Added the required column `email` to the `people` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "people" ADD COLUMN     "email" TEXT NOT NULL;
