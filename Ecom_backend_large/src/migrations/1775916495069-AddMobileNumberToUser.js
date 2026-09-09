/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
export class AddMobileNumberToUser1775916495069 {
    name = 'AddMobileNumberToUser1775916495069'

    /**
     * @param {QueryRunner} queryRunner
     */
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "mobileNumber" character varying(10)`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_61dc14c8c49c187f5d08047c985" UNIQUE ("mobileNumber")`);
    }

    /**
     * @param {QueryRunner} queryRunner
     */
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_61dc14c8c49c187f5d08047c985"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "mobileNumber"`);
    }
}
