/*
 ! reducer

 * store'un nasıl değişeceğine karar verir.
 * reducer, normal bir fonksiyondur.
 * 2 parametre alır:
 >> state: store'da tutulan verinin son durumunu verir bize. en son değeri neyse onu verir.
 >> action: verilerin nasıl değişeceğini belirten obje

 ** state, tanımsız olduğu zaman redux hata verir. bu hatanın önüne geçmek için
 state'e bir başlangıç değeri vermeliyiz.
 ** bu başlangıç değeri, biz state'i güncelleyene kadar aktif olur.

 ? Önemli: REDUCER FONKSİYONUNDAN RETURN EDİLEN VERİ, STORE'UN SON HALİİİ olur.

*/
import { ActionTypes } from "../actionTypes/actionTypes";

const initialState = {
  todos: [],
}

// state=initialState şu demek: state başlangıçta bu değere(initialState'e) sahip olsun.
// state bizim tuttuğumuz verinin son değeri. başlangıçta bu son değer tanımsız. sadece state yazarken yani. zaten hata aldık. başlangıç değerini böyle belirtmek gerek.
// uygulama başladığı anda bu state'in son değerini tanımlamamız lazım. o yüzden initialState'i kullandık.
// yani dedik ki: başlangıç aşamasında state, bu değere(initialState'e) sahip olsun.
// uygulama çalıştıkça, biz state'i güncelledikçe zaten son değere evrilecek.
const todoReducer = (state=initialState, action) => {
  console.log(action)
  switch (action.type) {
    // type'ı ADD_TODO olan aksiyon tetiklenirse
    case ActionTypes.ADD:
      // yeni eklenen todoyu(action.payload), daha önceki todoların(state.todos) arasına ekle
      const tempTodos = state.todos.concat(action.payload)
      // STATE'İ GÜNCELLE, todos diye bir dizi var onun güncel halini return edeceğiz. güncel hali de tempTodos.
      return {
        todos: tempTodos,
      }

    // type'ı DELETE olan aksiyon tetiklenirse
    case ActionTypes.DELETE:
      // diziden silinecek olanı kaldır.
      const filtred = state.todos.filter((todo)=> todo.id !== action.payload) 
      // REDUCER'DA TUTULAN VERİNİN SON DEĞERİNİ BELİRLE, EĞER STATE'IN İÇİNDE TODOS DİZİSİ DIŞINDA BAŞKA VERİ VARSA O ZAMAN ...state DE YAPMAMIZ GEREKECEKTİ.
      return { todos: filtred }

    // type'ı UPDATE olan aksiyon tetiklenirse
    case ActionTypes.UPDATE:
      // 1) dizideki eski todo ile, aksiyonun payload'ı ile gelen todo'yu yer değiştir.
      //** map yeni bir dizi oluşturur. yeni oluşturacağım dizide, döndüğüm dizinin id'si ile aksiyonun payload'ı ile gelen objenin id'si eşitse aksiyonun payloadı ile gelen objeyi koy. değilse döndüğüm diziyi koy. **/
      const updated = state.todos.map((item)=> item.id === action.payload.id ? action.payload : item)
      // 2) reducer'da tutulan reducer'ı güncelle
      return { todos: updated }

    // type'ı SET olan aksiyon tetiklenirse
    case ActionTypes.SET:
      // api'den alınan veriler ekrana gelmiş oldu.
      return {todos: action.payload}

    // var olan state'i koru,değiştirme 
    default:
      return state;
  }
};

export default todoReducer
//kullanmak için de export etmemiz gerekiyor.