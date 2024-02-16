import { useDispatch } from "react-redux";
import { ActionTypes } from "../redux/actionTypes/actionTypes";
import { updateTodo } from "../redux/actions/todoActions";
import axios from "axios";

const Modal = ( {close, todo} ) => {
    const dispatch = useDispatch()


    const handleSubmit = (e)=>{
        e.preventDefault()

        // 1) inputtaki değeri al, 0.elemanda çarpı butonu vardı.
        const text = e.target[1].value

        // 2) todo nesnesinin title değerine, yeni değeri ata, bunun için todo nesnesinin bilgilerine sahip olmamız lazım. bunun için todocard'dan, todo'yu prop olarak yolladık buraya.
        const updated = {...todo, text: text}        

        // 3) api'yi güncelle
        axios.patch(`/todos/${updated.id}`, { text })
        // 4) store'u güncelle
        .then(()=> dispatch(updateTodo(updated)))
        
        /*** zaten daha önce statedeki diziyi güncelleyen bir UPDATE aksiyonu yazmıştık.
         * yine aynısını kullanabiliriz, yenisini yazmaya gerek yok.
         * yine yeni bir eleman göndereceğiz, yine dizideki eski olanı çıkarıp yerine yenisini koyacak. 
         * işleyiş aynı olacak. buradaki payload, bu sayfadaki updated. karışmasın. ***/
        

        // 5) modalı kapat
        close()
    }


  return (
    <div className="modal d-block bg-black bg-opacity-75 text-dark">
      <div className="modal-dialog modal-dialog-centered">
        <form onSubmit={handleSubmit} className="modal-content bg-success-subtle">
          <div className="modal-header">
            <h1 className="modal-title fs-5 fw-bold">Todo'yu Güncelle</h1>
            <button onClick={close} type="button" className="btn-close"></button>
          </div>

          <div className="modal-body">
            <label className="fw-bold">Yeni Todo:</label>
            <input defaultValue={todo.text} className="form-control shadow mt-2" type="text" />
          </div>
          {/* düzenleye basınca inputun içine önceden yazılı olan düzenlemek istediğimiz
          metni görmek için defaultValue'sine todo.text'i verdik. value yazsaydık eğer,
          value, sabir değer ataması yaptığı için yazan şeyi sonra değiştiremezdik. */}
          
          <div className="modal-footer">
            <button onClick={close} type="button" className="btn btn-dark">İptal</button>
            <button type="submit" className="btn btn-warning">Kaydet</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
