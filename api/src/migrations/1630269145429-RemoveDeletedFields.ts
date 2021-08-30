import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveDeletedFields1630269145429 implements MigrationInterface {
  name = 'RemoveDeletedFields1630269145429';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`user\` DROP COLUMN \`deleted\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`school_year\` DROP COLUMN \`deleted\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`subject\` DROP COLUMN \`deleted\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`subject_period\` DROP COLUMN \`deleted\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`period_activity\` DROP COLUMN \`deleted\``,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`period_activity\` ADD \`deleted\` tinyint NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`subject_period\` ADD \`deleted\` tinyint NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`subject\` ADD \`deleted\` tinyint NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`school_year\` ADD \`deleted\` tinyint NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`user\` ADD \`deleted\` tinyint NOT NULL DEFAULT '0'`,
    );
  }
}
