import { useEffect } from "react";
import {collection, doc, getDoc, getDocs,addDoc, getFirestore, query, where, limit} from "firebase/firestore"
// Llama al documento de productos sin id
import productos from "../api/productAPIsinid"

/* ------------------------------------------------------------------------------------------------- */
/* ----------------------------- Importación desde Firebase ---------------------------------------- */
/* ------------------------------------------------------------------------------------------------- */


/* ----------------------------- Importación por documento ----------------------------------------- */

//Un solo item (documento es un item)
function Firebase(){
    useEffect(() =>{
        const db = getFirestore();

        const prodRef=doc(db,"items", "TRdzPIPPgqeY5Wwb1UAN" ); // 3 parámetros: conexión, nombre de la colección e id
        getDoc(prodRef).then((snapshot)=>{
            if(snapshot.exists()){
                console.log({id: snapshot.id, ...snapshot.data()});
                // setProduct
            }
        })
    },[]);

    return <div> Firebase </div>
}
export default Firebase

/* ----------------------------- Importación por colección ----------------------------------------- */

// Llama a una colección --> Devuelve un array de documentos
// function AuxComponent(){
//     useEffect(() =>{
//    const db = getFirestore(); //fetch
//         const itemCollection = collection(db,"items" ); // 2 parámetros: conexión y nombre de la colección
//         // getDocs en plural ya que traerá todo
//         getDocs(itemCollection).then((snapshot)=>{
//             if(snapshot.size === 0)console.log('No hay productos'); // Estado
//             console.log(snapshot.docs.map(doc=>({id:doc.id, ...doc.data()})));

//         })
//     },[]);
//     return <div> Firebase </div>
// }
// export default Firebase

/* ----------------------------- Importación por query --------------------------------------------- */

// Consulta de colección con filtros
// function AuxComponent(){
//         useEffect(() =>{
//             const db = getFirestore(); //fetch
//             const q = query(
//                 collection(db, "items"), 
//                 where("price", ">",1000),
//                 where("category","==", "Laptop"),
//                 limit(1) //Para una paginación de máxima cantidad a mostrar
//             );
//             // getDocs en plural ya que traerá todo
//             getDocs(q).then((snapshot)=>{
//                 if(snapshot.size === 0){
//                     console.log('No hay productos');
//                 } // Estado
//                 console.log(snapshot.docs.map(doc=>({id:doc.id, ...doc.data()})));
    
//             })
//         },[]);
//         return <div> Firebase </div>
//     }
    // export default Firebase

/* ------------------------------------------------------------------------------------------ */
/* --------------------------- Exportación a Firebase --------------------------------------- */
/* ------------------------------------------------------------------------------------------ */
        // Función auxiliar para cargar datos a firebase
        // Hacer un llamado a un componente para que cargue en el Appy descomentar la función para que renderice y envíe a Firebase 
        async function addProductsToFirebase(){
            const db = getFirestore();
            const productCollection = collection(db, 'items');
            try {
                const promises = productos.map((prod) => {
                    addDoc(productCollection, prod)
                });
                await Promise.all(promises);
                console.log("Productos agregados")
            } catch (error) {
                console.log(error)
            }
        }
        // Descomentar para enviar a Firebase
        // addProductsToFirebase()