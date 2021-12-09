import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn} from "typeorm";
import {Common} from "../../entity/common";
import { UserEntity } from "./user.entity";
import {ProjectEntity} from "../../projects/entity/project.entity";

@Entity("user_project")
export class UserProjectEntity extends Common {

    @PrimaryGeneratedColumn({
        name: "id",
        type: "int",
    })
    public id: number;

    @Column('int', {
        name: "user_id",
    })
    public user_id: number;

    @Column("int", {
        name: "project_id",
    })
    public project_id: number;

    @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    public user: UserEntity;

    @ManyToOne(() => ProjectEntity,{ onDelete: 'CASCADE' })
    @JoinColumn({ name: 'project_id' })
    public project: ProjectEntity;
}
