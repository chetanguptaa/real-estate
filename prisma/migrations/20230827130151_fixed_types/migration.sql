/*
  Warnings:

  - The values [RENT,SELL] on the enum `PostType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PostType_new" AS ENUM ('rent', 'sell');
ALTER TABLE "Post" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "Post" ALTER COLUMN "type" TYPE "PostType_new" USING ("type"::text::"PostType_new");
ALTER TYPE "PostType" RENAME TO "PostType_old";
ALTER TYPE "PostType_new" RENAME TO "PostType";
DROP TYPE "PostType_old";
ALTER TABLE "Post" ALTER COLUMN "type" SET DEFAULT 'rent';
COMMIT;

-- AlterTable
ALTER TABLE "Image" ALTER COLUMN "id" SET DEFAULT concat('img_', replace(cast(gen_random_uuid() as text), '-', ''));

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "id" SET DEFAULT concat('pos_', replace(cast(gen_random_uuid() as text), '-', '')),
ALTER COLUMN "type" SET DEFAULT 'rent',
ALTER COLUMN "pricePerSqFeet" SET DATA TYPE TEXT,
ALTER COLUMN "pricePerMonth" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "id" SET DEFAULT concat('usr_', replace(cast(gen_random_uuid() as text), '-', ''));
