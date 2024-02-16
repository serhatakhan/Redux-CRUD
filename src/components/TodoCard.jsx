import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { ActionTypes } from "../redux/actionTypes/actionTypes";
import { deleteTodo, updateTodo } from "../redux/actions/todoActions";
import axios from "axios";

const TodoCard = ({ todo }) => {
  // modal açık mı onun state'ini tutuyoruz
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  // tamamlandı değeri true ise false'a, false ise true'ya çevir
  const toggleIsdone = () => {
    // todo objesinin is_done değerini tersine çevir
    // obje olduğu için parantezi koyduk, spread operatörü ile objenin tüm değerlerini bu yeni oluşturduğumuz objeye ekledik. ardından değiştirmek istediğimiz değerin adını yazdık.tersine çevirmek istiyorsak da todo'nun var olan değerine erişmek gerek. todo.is_done,, tersi için de önüne !.
    const updated = { ...todo, is_done: !todo.is_done };

    // api'deki todo'yu güncelle
    axios.put(`/todos/${updated.id}`, updated)
    // store'u güncelle
    .then(()=> dispatch(updateTodo(updated)))
  };
  /*** objeyi güncellemek istiyoruz. onun için objnin kimliğini ve yeni değerini payload'a
  vermemiz lazım. zaten updated, içindeki ...todo sayesinde kimliğini barındıryor. orada id var.
  üstüne updated zaten yeni değeri. o yüzden updated'ı göndermek yeterli olacak. ***/

  
  // silme aksiyonunu tetikler.
  const handleDelete = ()=>{
    // api'den sil
    axios.delete(`/todos/${todo.id}`)
    // store'u güncelle
    .then(()=> dispatch(deleteTodo(todo.id)))
  }


  return (
    <div className="border shadow shadow-lg p-4 my-3 rounded-3">
      <h4 className="fw-bold">{todo.text}</h4>
      <h6>{todo.is_done ? "Tamamlandı" : "Devam ediyor..."}</h6>
      <p>{todo.created_at}</p>

      <button onClick={() => setIsOpen(!isOpen)} className="btn btn-success">
        Düzenle
      </button>
      <button onClick={toggleIsdone} className="btn btn-primary mx-3">{todo.is_done ? "Geri Al" : "Tamamla"}</button>
      <button
        onClick={ handleDelete }
        className="btn btn-danger">Sil</button>

        {/* eğer isOpen değeri true ise, ekrana modal bileşenini bas */}
        {/* modalın kapanması için isOpen'ı false'a çekmemiz lazım. Bunun için close isminde bir fonk yazdık. */}
      {isOpen && <Modal close={()=> setIsOpen(false)} todo={todo} />}
    </div>
  );
};

export default TodoCard;
