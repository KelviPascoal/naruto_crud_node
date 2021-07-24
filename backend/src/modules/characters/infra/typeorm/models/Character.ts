import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Village } from '../../../../vilages/infra/typeorm/models/Village';

@Entity('characters')
class Character {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("int4", {name: "village_id"})
    village_id: number;


    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Village , {eager: true})
    @JoinColumn({name: 'village_id'})
    village: Village;
}

export { Character };