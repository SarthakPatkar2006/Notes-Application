export function Delete_Note(task,deleteIndex){
    const updated_task=[...task];
    updated_task.splice(deleteIndex,1);
    return updated_task;
};