import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUniqueOnUsersUsernameAndEmail1630263304886
  implements MigrationInterface
{
  name = 'AddUniqueOnUsersUsernameAndEmail1630263304886';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`user\` ADD UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`user\` ADD UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`user\` DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`user\` DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\``,
    );
  }
}
