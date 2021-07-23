import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableCharacter1626915854586 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        create table characters (
            id serial,	
            name varchar ( 255 ),
            village_id  int,
            created_at timestamp NOT NULL DEFAULT NOW() ,
            updated_at timestamp NOT NULL DEFAULT NOW() ,
            
            constraint pk_characters primary key(id),
            constraint fk_characters_village_id foreign key(village_id) references villages(id) on delete cascade
          );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`drop table characters`)

    }

}
