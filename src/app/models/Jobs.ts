import {
    PrimaryKey,
    Column,
    DataType,
    Model,
    Table,
    CreatedAt,
    UpdatedAt,
    DeletedAt
  } from 'sequelize-typescript';
  
  @Table({timestamps: true, tableName: 'jobs'})
  export class Jobs extends Model<Jobs> {
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number;
  
    @Column(DataType.STRING)
    public name!: string;

    @Column(DataType.STRING)
    public description!: string;

    @Column(DataType.STRING)
    public city!: string;

    @Column(DataType.STRING)
    public latitude!: string;

    @Column(DataType.STRING)
    public longitude!: string;
  
    @Column(DataType.STRING)
    public status!: string;
  
    @CreatedAt
    readonly createdAt!: Date;
  
    @UpdatedAt
    readonly updatedAt!: Date;
  
    @DeletedAt
    readonly deletedAt!: Date;
  }
  