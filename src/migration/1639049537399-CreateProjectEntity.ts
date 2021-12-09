import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateProjectEntity1639049537399 implements MigrationInterface {
    name = 'CreateProjectEntity1639049537399'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`project\` (\`deleted\` tinyint(1) NOT NULL DEFAULT '0', \`id\` int NOT NULL AUTO_INCREMENT, \`ts_created\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`ts_last_modified\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`title\` varchar(256) NOT NULL, \`description\` text NULL, \`duration\` int NULL, INDEX \`IDX_1eaedd4405ed922021c25d09e2\` (\`deleted\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_1eaedd4405ed922021c25d09e2\` ON \`project\``);
        await queryRunner.query(`DROP TABLE \`project\``);
    }

}
