import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMessagesEntity1737717235560 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "message" ("id" BIGSERIAL NOT NULL, "name" text, "message" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now())`,
          );
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "message"`);
    }

}
