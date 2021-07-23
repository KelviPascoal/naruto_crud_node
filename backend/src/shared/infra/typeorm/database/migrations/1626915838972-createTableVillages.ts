import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableVillages1626915838972 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.query(`
       create table villages (
        id serial,
        name varchar(50) not null,
        country varchar(50),
        created_at timestamp NOT NULL DEFAULT NOW() ,
        updated_at timestamp NOT NULL DEFAULT NOW() ,
              
        constraint pk_villages primary key(id),
        constraint uc_villages_name unique(name)
        );
       `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`drop table villages`)
    }

}
