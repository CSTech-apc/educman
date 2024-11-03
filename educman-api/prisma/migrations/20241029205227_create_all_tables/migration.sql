-- CreateTable
CREATE TABLE `periods` (
    `pkPer` VARCHAR(191) NOT NULL,
    `year` DATE NOT NULL,

    PRIMARY KEY (`pkPer`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `licenses` (
    `pkLic` VARCHAR(191) NOT NULL,
    `university` VARCHAR(255) NOT NULL,
    `nrle` VARCHAR(14) NOT NULL,
    `nisr` VARCHAR(8) NOT NULL,
    `initDate` DATE NOT NULL,
    `finDate` DATE NOT NULL,
    `status` CHAR(3) NOT NULL DEFAULT 'ACT',
    `fkPer` VARCHAR(191) NULL,

    UNIQUE INDEX `licenses_nrle_key`(`nrle`),
    UNIQUE INDEX `licenses_nisr_key`(`nisr`),
    FULLTEXT INDEX `licenses_university_idx`(`university`),
    FULLTEXT INDEX `licenses_nrle_idx`(`nrle`),
    FULLTEXT INDEX `licenses_nisr_idx`(`nisr`),
    PRIMARY KEY (`pkLic`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `checks` (
    `checkInst` BOOLEAN NOT NULL DEFAULT false,
    `checkUser` BOOLEAN NOT NULL DEFAULT false,
    `checkCalend` BOOLEAN NOT NULL DEFAULT false,
    `checkFreq` BOOLEAN NOT NULL DEFAULT false,
    `checkEval` BOOLEAN NOT NULL DEFAULT false,
    `checkCour` BOOLEAN NOT NULL DEFAULT false,
    `checkMatrix` BOOLEAN NOT NULL DEFAULT false,
    `checkDisc` BOOLEAN NOT NULL DEFAULT false,
    `checkClass` BOOLEAN NOT NULL DEFAULT false,
    `checkTSheet` BOOLEAN NOT NULL DEFAULT false,
    `checkStudeReg` BOOLEAN NOT NULL DEFAULT false,
    `checkDiar` BOOLEAN NOT NULL DEFAULT false,
    `fkLic` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `checks_fkLic_key`(`fkLic`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `institutes` (
    `country` VARCHAR(80) NULL,
    `state` VARCHAR(80) NULL,
    `cityCountry` VARCHAR(80) NULL,
    `burgh` VARCHAR(80) NULL,
    `addressCode` CHAR(8) NULL,
    `street` VARCHAR(80) NULL,
    `homeNumber` VARCHAR(9) NULL,
    `instEmail` VARCHAR(80) NULL,
    `instPhone` VARCHAR(10) NULL,
    `instCell` VARCHAR(11) NULL,
    `childEdu` BOOLEAN NOT NULL DEFAULT false,
    `elementSchoolA` BOOLEAN NOT NULL DEFAULT false,
    `elementSchoolB` BOOLEAN NOT NULL DEFAULT false,
    `highSchool` BOOLEAN NOT NULL DEFAULT false,
    `eduYoungAdult` BOOLEAN NOT NULL DEFAULT false,
    `collegeEdu` BOOLEAN NOT NULL DEFAULT false,
    `morning` BOOLEAN NOT NULL DEFAULT false,
    `afternoon` BOOLEAN NOT NULL DEFAULT false,
    `night` BOOLEAN NOT NULL DEFAULT false,
    `fkLic` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `institutes_fkLic_key`(`fkLic`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `pkUser` VARCHAR(191) NOT NULL,
    `name` VARCHAR(60) NOT NULL,
    `surname` VARCHAR(30) NOT NULL,
    `nri` VARCHAR(11) NOT NULL,
    `profile` CHAR(3) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `fkPer` VARCHAR(191) NULL,
    `fkLic` VARCHAR(191) NULL,

    UNIQUE INDEX `users_nri_key`(`nri`),
    FULLTEXT INDEX `users_name_idx`(`name`),
    FULLTEXT INDEX `users_nri_idx`(`nri`),
    PRIMARY KEY (`pkUser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permissions` (
    `permPeriod` BOOLEAN NOT NULL DEFAULT false,
    `permLicense` BOOLEAN NOT NULL DEFAULT false,
    `permInst` BOOLEAN NOT NULL DEFAULT false,
    `permUser` BOOLEAN NOT NULL DEFAULT false,
    `permCalend` BOOLEAN NOT NULL DEFAULT false,
    `permFreq` BOOLEAN NOT NULL DEFAULT false,
    `permEval` BOOLEAN NOT NULL DEFAULT false,
    `permCour` BOOLEAN NOT NULL DEFAULT false,
    `permMatrix` BOOLEAN NOT NULL DEFAULT false,
    `permDisc` BOOLEAN NOT NULL DEFAULT false,
    `permClass` BOOLEAN NOT NULL DEFAULT false,
    `permTSheet` BOOLEAN NOT NULL DEFAULT false,
    `permStudeReg` BOOLEAN NOT NULL DEFAULT false,
    `permDiar` BOOLEAN NOT NULL DEFAULT false,
    `fkUser` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `permissions_fkUser_key`(`fkUser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `licenses` ADD CONSTRAINT `licenses_fkPer_fkey` FOREIGN KEY (`fkPer`) REFERENCES `periods`(`pkPer`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `checks` ADD CONSTRAINT `checks_fkLic_fkey` FOREIGN KEY (`fkLic`) REFERENCES `licenses`(`pkLic`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `institutes` ADD CONSTRAINT `institutes_fkLic_fkey` FOREIGN KEY (`fkLic`) REFERENCES `licenses`(`pkLic`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_fkPer_fkey` FOREIGN KEY (`fkPer`) REFERENCES `periods`(`pkPer`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_fkLic_fkey` FOREIGN KEY (`fkLic`) REFERENCES `licenses`(`pkLic`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `permissions` ADD CONSTRAINT `permissions_fkUser_fkey` FOREIGN KEY (`fkUser`) REFERENCES `users`(`pkUser`) ON DELETE CASCADE ON UPDATE CASCADE;
