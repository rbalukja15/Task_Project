import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Common} from "../../entity/common";

@Entity("task")
export class TaskEntity extends Common {

    @PrimaryGeneratedColumn({
        name: "id",
        type: "int",
    })
    public id: number;

    @Column("varchar", {
        length: 256,
        name: "title",
        nullable: false,
    })
    public title: string;

    @Column("text", {
        name: "description",
        nullable: true,
    })
    public description: string;

    @Column("int", {
        name: "duration",
        nullable: true,
    })
    public duration: number;

    @Column("tinyint", {
        name: "is_complete",
        nullable: true,
        default: 0,
    })
    public is_complete: boolean;
}
