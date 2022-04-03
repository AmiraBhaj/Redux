import { ADD, DELETE_TODO, DONE, EDIT } from "./Actiontype"

export const add_todo=(newItem)=>{
    return{
        type:ADD,payload:newItem
    };
}
export const delete_todo=(id)=>{
    return {
        type:DELETE_TODO,payload:id
    };
}
export const edit=(id,newTask)=>{
    return {
        type:EDIT,payload:{id,newTask}
    };
}
export const done_todo=(id)=>{
    return {
        type:DONE,payload:id
    };
}