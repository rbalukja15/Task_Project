import {BeforeUpdate, Column, PrimaryGeneratedColumn} from "typeorm";
import {SoftDelete} from "./soft.delete";

// tslint:disable:variable-name
export abstract class Common extends SoftDelete {

    @PrimaryGeneratedColumn({
        name: "id",
        type: "int",
    })
    public id: number;

    @Column("timestamp", {
        default: () => "CURRENT_TIMESTAMP",
        name: "ts_created",
        nullable: false,
    })
    public ts_created: Date;

    @Column("timestamp", {
        default: () => "CURRENT_TIMESTAMP",
        name: "ts_last_modified",
        nullable: false,
    })
    public ts_last_modified: Date;

    @BeforeUpdate()
    public addLastModified() {
        this.ts_last_modified = new Date();
    }
}
