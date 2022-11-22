-- CreateTable
CREATE TABLE "Community" (
    "Name" TEXT NOT NULL PRIMARY KEY,
    "MembersCount" INTEGER NOT NULL,
    "AverageNewDailyPosts" INTEGER NOT NULL,
    "Language" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Community_Name_key" ON "Community"("Name");
