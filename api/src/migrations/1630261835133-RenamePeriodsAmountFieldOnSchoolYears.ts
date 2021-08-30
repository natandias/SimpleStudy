import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenamePeriodsAmountFieldOnSchoolYears1630261835133
  implements MigrationInterface
{
  name = 'RenamePeriodsAmountFieldOnSchoolYears1630261835133';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`school_year\` CHANGE \`periods_amount\` \`periodsAmount\` int NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`school_year\` CHANGE \`periodsAmount\` \`periods_amount\` int NOT NULL`,
    );
  }
}
