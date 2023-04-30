-- CreateTable
CREATE TABLE "POC" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "POC_pkey" PRIMARY KEY ("id","email")
);

-- CreateIndex
CREATE UNIQUE INDEX "POC_id_key" ON "POC"("id");

-- CreateIndex
CREATE UNIQUE INDEX "POC_email_key" ON "POC"("email");
