import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { ActionTypes } from "../redux/actionTypes/actionTypes";
import { addTodo } from "../redux/actions/todoActions";
import axios from "axios";

const AddForm = () => {
  //* 3) dispatch kurulum, dispatch özelliğini kullanmamızı sağlıyor. üstte import. 
  // eşitliğin solundaki dispatch'ı aşağıda, emri reducer'a göndermek için kullandık
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();

    //* 1) store'a kaydedilecek veriyi hazırla
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(), //toLocaleDateString, bugünün tarihini veriyor gg/aa/yyyy
    };

    // 2) veriyi api'ye gönder / api'ye yeni bir veri eklemek istiyorsak post isteği !! 2.parametre olarak ne eklemek istediğimizi yazıyoruz. o da newTodo
    axios.post("/todos", newTodo)
    //* 3) reducer'a, aksiyonu ilet
    .then(()=> dispatch(addTodo(newTodo)))

    /*** eğer istek başarılı olursa, bunu gerçekleştir diyoruz. 
     * BUNLARIN HER ZAMAN BİRBİRİNE BAĞLI OLMASI LAZIM. BAĞLI OLMAZSA MESELA APİ'DE YOĞUNLUK
     * VEYA HATA OLDUĞU SENARYODA, KULLANICI DEĞİŞLİĞİ EKRANDA GÖRÜR AMA VERİ, VERİ TABANINA 
     * GÖNDERİLEMEDİĞİ İÇİN BU İŞLEM ASLA OLMAYACAK. AMA KULLANICIYA İŞLEM OLMUŞ GİBİ EKRANDA
     * GÖSTERDİK. bu gibi durumların önüne geçmek için birbirine bağlı olması lazım. .then() ile ***/


    // formu temizle
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input className="form-control" placeholder="ör: redux projesi" type="text" />
      <button className="btn btn-warning" type="submit"> Ekle </button>
    </form>
  );
};

export default AddForm;
