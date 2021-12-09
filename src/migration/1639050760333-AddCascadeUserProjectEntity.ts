import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCascadeUserProjectEntity1639050760333 implements MigrationInterface {
    name = 'AddCascadeUserProjectEntity1639050760333'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_project\` DROP FOREIGN KEY \`FK_9f6abe80cbe92430eaa7a720c26\``);
        await queryRunner.query(`ALTER TABLE \`user_project\` DROP FOREIGN KEY \`FK_dd66dc6a11849a786759c225537\``);
        await queryRunner.query(`ALTER TABLE \`user_project\` ADD CONSTRAINT \`FK_dd66dc6a11849a786759c225537\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_project\` ADD CONSTRAINT \`FK_9f6abe80cbe92430eaa7a720c26\` FOREIGN KEY (\`project_id\`) REFERENCES \`project\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_project\` DROP FOREIGN KEY \`FK_9f6abe80cbe92430eaa7a720c26\``);
        await queryRunner.query(`ALTER TABLE \`user_project\` DROP FOREIGN KEY \`FK_dd66dc6a11849a786759c225537\``);
        await queryRunner.query(`ALTER TABLE \`user_project\` ADD CONSTRAINT \`FK_dd66dc6a11849a786759c225537\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_project\` ADD CONSTRAINT \`FK_9f6abe80cbe92430eaa7a720c26\` FOREIGN KEY (\`project_id\`) REFERENCES \`project\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
