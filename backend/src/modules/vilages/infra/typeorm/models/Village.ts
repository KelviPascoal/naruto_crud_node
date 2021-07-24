import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('villages')
class Village {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    country: string;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;

}

export { Village };
