import {Column, Index} from "typeorm";

export abstract class SoftDelete {

    @Column("tinyint", {
        default: () => "'0'",
        name: "deleted",
        nullable: false,
        width: 1,
    })
    @Index()
    public deleted: boolean;
}
