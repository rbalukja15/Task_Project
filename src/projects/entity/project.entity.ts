import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Common} from "../../entity/common";

// tslint:disable:variable-name
@Entity("project")
export class ProjectEntity extends Common {

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
    public name: string;

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
}
