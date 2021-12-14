import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Common} from "../../entity/common";
import {ProjectEntity} from "./project.entity";
import {TaskEntity} from "../../tasks/entity/task.entity";

@Entity("project_task")
export class ProjectTaskEntity extends Common {

    @PrimaryGeneratedColumn({
        name: "id",
        type: "int",
    })
    public id: number;

    @Column("int", {
        name: "project_id",
        nullable: false,
    })
    public project_id: number;

    @Column("int", {
        name: "task_id",
        nullable: false,
    })
    public task_id: number;

    @ManyToOne(() => ProjectEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'project_id' })
    public project: ProjectEntity;

    @ManyToOne(() => TaskEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'task_id' })
    public task: TaskEntity;
}
