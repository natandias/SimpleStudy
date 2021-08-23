import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePeriod1629688947960 implements MigrationInterface {
  name = 'CreatePeriod1629688947960';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`simple_study\`.\`period\` (\`id\` char(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`minimumGrade\` double NOT NULL, \`currentGrade\` double NOT NULL, \`color\` varchar(255) NOT NULL, \`teacher\` varchar(255) NOT NULL, \`activitiesPoints\` double NOT NULL, \`avaliationsPoints\` double NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`schoolYearId\` char(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`user\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`school_year\` DROP FOREIGN KEY \`FK_6d1124e321bc58e876eb79d8f8d\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`school_year\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`school_year\` CHANGE \`userId\` \`userId\` char(36) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`school_year\` ADD CONSTRAINT \`FK_6d1124e321bc58e876eb79d8f8d\` FOREIGN KEY (\`userId\`) REFERENCES \`simple_study\`.\`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`period\` ADD CONSTRAINT \`FK_0675bb856b4384af23b43d9bd7e\` FOREIGN KEY (\`schoolYearId\`) REFERENCES \`simple_study\`.\`school_year\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`period\` DROP FOREIGN KEY \`FK_0675bb856b4384af23b43d9bd7e\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`school_year\` DROP FOREIGN KEY \`FK_6d1124e321bc58e876eb79d8f8d\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`school_year\` CHANGE \`userId\` \`userId\` char(36) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`school_year\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`school_year\` ADD CONSTRAINT \`FK_6d1124e321bc58e876eb79d8f8d\` FOREIGN KEY (\`userId\`) REFERENCES \`simple_study\`.\`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`user\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(`DROP TABLE \`simple_study\`.\`period\``);
  }
}
