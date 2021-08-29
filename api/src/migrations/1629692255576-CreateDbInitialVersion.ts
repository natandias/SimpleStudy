import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDbInitialVersion1629692255576 implements MigrationInterface {
  name = 'CreateDbInitialVersion1629692255576';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`simple_study\`.\`user\` (\`id\` char(36) NOT NULL, \`username\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`schooling\` varchar(255) NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`simple_study\`.\`school_year\` (\`id\` char(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`periods_amount\` int NOT NULL, \`password\` varchar(255) NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`userId\` char(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`simple_study\`.\`subject\` (\`id\` char(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`minimumGrade\` double NOT NULL, \`currentGrade\` double NOT NULL, \`color\` varchar(255) NOT NULL, \`teacher\` varchar(255) NOT NULL, \`activitiesPoints\` double NOT NULL, \`avaliationsPoints\` double NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`schoolYearId\` char(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`simple_study\`.\`subject_period\` (\`id\` char(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`minimumGrade\` double NOT NULL, \`currentGrade\` double NOT NULL, \`startDate\` datetime NOT NULL, \`endDate\` datetime NOT NULL, \`activitiesPoints\` double NOT NULL, \`avaliationsPoints\` double NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`subjectId\` char(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`simple_study\`.\`period_activity\` (\`id\` char(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`deadline\` datetime NOT NULL, \`status\` varchar(255) NOT NULL, \`value\` double NOT NULL, \`obtainedValue\` double NOT NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`subjectId\` char(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`school_year\` ADD CONSTRAINT \`FK_6d1124e321bc58e876eb79d8f8d\` FOREIGN KEY (\`userId\`) REFERENCES \`simple_study\`.\`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`subject\` ADD CONSTRAINT \`FK_e17c29fe5096ab2e10c70750e98\` FOREIGN KEY (\`schoolYearId\`) REFERENCES \`simple_study\`.\`school_year\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`subject_period\` ADD CONSTRAINT \`FK_00147eefbc6b36aa82c63647bda\` FOREIGN KEY (\`subjectId\`) REFERENCES \`simple_study\`.\`subject\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`period_activity\` ADD CONSTRAINT \`FK_79cfd0ec47218eecad96b8036cd\` FOREIGN KEY (\`subjectId\`) REFERENCES \`simple_study\`.\`subject_period\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`period_activity\` DROP FOREIGN KEY \`FK_79cfd0ec47218eecad96b8036cd\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`subject_period\` DROP FOREIGN KEY \`FK_00147eefbc6b36aa82c63647bda\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`subject\` DROP FOREIGN KEY \`FK_e17c29fe5096ab2e10c70750e98\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`simple_study\`.\`school_year\` DROP FOREIGN KEY \`FK_6d1124e321bc58e876eb79d8f8d\``,
    );
    await queryRunner.query(`DROP TABLE \`simple_study\`.\`period_activity\``);
    await queryRunner.query(`DROP TABLE \`simple_study\`.\`subject_period\``);
    await queryRunner.query(`DROP TABLE \`simple_study\`.\`subject\``);
    await queryRunner.query(`DROP TABLE \`simple_study\`.\`school_year\``);
    await queryRunner.query(`DROP TABLE \`simple_study\`.\`user\``);
  }
}
