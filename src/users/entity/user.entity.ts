import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Common} from "../../entity/common";

// tslint:disable:variable-name
@Entity("user")
export class UserEntity extends Common {

    @PrimaryGeneratedColumn({
        name: "id",
        type: "int",
    })
    public id: number;

    @Column("bigint", {
        name: "facebook_id",
        nullable: true,
    })
    public facebook_id: bigint | null;

    @Column("varchar", {
        length: 256,
        name: "username",
        nullable: false,
    })
    public username: string;

    @Column("varchar", {
        length: 256,
        name: "password",
        nullable: true,
    })
    public password: string | null;

    @Column("varchar", {
        length: 256,
        name: "name",
        nullable: false,
    })
    public name: string;

    @Column("varchar", {
        length: 256,
        name: "surname",
        nullable: false,
    })
    public surname: string;

    @Column("text", {
        name: "description",
        nullable: true,
    })
    public description: string;

    @Column("varchar", {
        length: 256,
        name: "email",
        nullable: false,
    })
    public email: string;

    @Column("varchar", {
        length: 256,
        name: "profile_picture",
        nullable: false,
    })
    public profile_picture: string;

    @Column("varchar", {
        length: 256,
        name: "role",
        nullable: false,
    })
    public role: string;

    @Column("tinyint", {
        default: () => "'0'",
        name: "verified",
        nullable: false,
        width: 1,
    })
    public verified: boolean;

    @Column("varchar", {
        length: "30",
        name: "phone_number",
        nullable: true,
    })
    public phone_number: string | null;

    @Column("varchar", {
        length: "256",
        name: "street_name",
        nullable: true,
    })
    public street_name: string | null;

    @Column("varchar", {
        length: "30",
        name: "postal_code",
        nullable: true,
    })
    public postal_code: string | null;

    @Column("varchar", {
        length: "50",
        name: "city",
        nullable: true,
    })
    public city: string | null;

    @Column("date", {
        name: "birthday",
        nullable: true,
    })
    public birthday: Date | null;
}
