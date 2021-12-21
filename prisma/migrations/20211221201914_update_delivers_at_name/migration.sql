/*
  Warnings:

  - You are about to drop the column `DeliversAt` on the `deliveries` table. All the data in the column will be lost.
  - Added the required column `deliversAt` to the `deliveries` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_deliveries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customer_id" TEXT NOT NULL,
    "driver_id" TEXT NOT NULL,
    "items" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "deliversAt" DATETIME NOT NULL,
    CONSTRAINT "deliveries_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "deliveries_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_deliveries" ("createdAt", "customer_id", "driver_id", "id", "items") SELECT "createdAt", "customer_id", "driver_id", "id", "items" FROM "deliveries";
DROP TABLE "deliveries";
ALTER TABLE "new_deliveries" RENAME TO "deliveries";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
