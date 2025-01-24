import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    message: string;

    @CreateDateColumn()
    createdAt: Date;
}