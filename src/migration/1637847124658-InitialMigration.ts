import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1637847124658 implements MigrationInterface {
    name = 'InitialMigration1637847124658'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`deleted\` tinyint(1) NOT NULL DEFAULT '0', \`id\` int NOT NULL AUTO_INCREMENT, \`ts_created\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`ts_last_modified\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`facebook_id\` bigint NULL, \`username\` varchar(256) NOT NULL, \`password\` varchar(256) NULL, \`name\` varchar(256) NOT NULL, \`surname\` varchar(256) NOT NULL, \`description\` text NULL, \`email\` varchar(256) NOT NULL, \`profile_picture\` varchar(256) NOT NULL, \`role\` varchar(256) NOT NULL, \`verified\` tinyint(1) NOT NULL DEFAULT '0', \`phone_number\` varchar(30) NULL, \`street_name\` varchar(256) NULL, \`postal_code\` varchar(30) NULL, \`city\` varchar(50) NULL, \`birthday\` date NULL, INDEX \`IDX_b2a33d7f394763e171ef11acc5\` (\`deleted\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_b2a33d7f394763e171ef11acc5\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
