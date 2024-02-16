/***
 * Aksiyon Objesi Oluşturan Fonksiyon *
 
 payload değeri dinamik olacağından, payload'ı parametre olarak aldık. 
 Bu fonksiyon sonuç olarak aldığı payload'a göre bir aksiyon döndürecek !!!
 bunu da obje şeklinde döndürecek..! 
***/
import { ActionTypes } from "../actionTypes/actionTypes"

// eklemek için ayrı fonksiyon, silmek için ayrı, editlemek için ayrı fonksiyon yazıyoruz.
export const addTodo = (payload)=>({
    type: ActionTypes.ADD,
    payload,
})

export const deleteTodo = (payload)=>({
    type: ActionTypes.DELETE,
    payload,
})

export const updateTodo = (payload)=>({
    type: ActionTypes.UPDATE,
    payload,
})

export const setTodo = (payload)=>({
    type: ActionTypes.SET,
    payload,
})
