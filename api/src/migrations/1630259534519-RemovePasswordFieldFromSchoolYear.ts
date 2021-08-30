import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemovePasswordFieldFromSchoolYear1630259534519
  implements MigrationInterface
{
  name = 'RemovePasswordFieldFromSchoolYear1630259534519';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`school_year\` DROP COLUMN \`password\``,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`school_year\` ADD \`password\` varchar(255) NOT NULL`,
    );
  }
}
