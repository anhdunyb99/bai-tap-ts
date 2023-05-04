export default interface ITask {
    userId: number,
    projectId: number,
    typeId: number,
    priorityId: number,
    statusId: number,
    name: string,
    order: number,
    start_date: Date,
    end_date: Date,

}