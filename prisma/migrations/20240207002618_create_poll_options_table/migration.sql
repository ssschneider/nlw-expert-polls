-- CreateTable
CREATE TABLE "PollOptions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "pollId" TEXT NOT NULL,
    CONSTRAINT "PollOptions_pollId_fkey" FOREIGN KEY ("pollId") REFERENCES "Poll" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
