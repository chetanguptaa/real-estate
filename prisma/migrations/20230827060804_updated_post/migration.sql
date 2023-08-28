-- AlterTable
ALTER TABLE "Image" ALTER COLUMN "id" SET DEFAULT concat('img_', replace(cast(gen_random_uuid() as text), '-', ''));

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "id" SET DEFAULT concat('pos_', replace(cast(gen_random_uuid() as text), '-', ''));

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "id" SET DEFAULT concat('usr_', replace(cast(gen_random_uuid() as text), '-', ''));
