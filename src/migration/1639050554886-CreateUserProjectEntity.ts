import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUserProjectEntity1639050554886 implements MigrationInterface {
    name = 'CreateUserProjectEntity1639050554886'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user_project\` (\`deleted\` tinyint(1) NOT NULL DEFAULT '0', \`id\` int NOT NULL AUTO_INCREMENT, \`ts_created\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`ts_last_modified\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`user_id\` int NOT NULL, \`project_id\` int NOT NULL, INDEX \`IDX_791e663dfa3f274d22b18f8b56\` (\`deleted\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user_project\` ADD CONSTRAINT \`FK_dd66dc6a11849a786759c225537\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_project\` ADD CONSTRAINT \`FK_9f6abe80cbe92430eaa7a720c26\` FOREIGN KEY (\`project_id\`) REFERENCES \`project\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_project\` DROP FOREIGN KEY \`FK_9f6abe80cbe92430eaa7a720c26\``);
        await queryRunner.query(`ALTER TABLE \`user_project\` DROP FOREIGN KEY \`FK_dd66dc6a11849a786759c225537\``);
        await queryRunner.query(`DROP INDEX \`IDX_791e663dfa3f274d22b18f8b56\` ON \`user_project\``);
        await queryRunner.query(`DROP TABLE \`user_project\``);
    }

}
