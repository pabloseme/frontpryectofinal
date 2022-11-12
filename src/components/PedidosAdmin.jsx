import React, { useEffect, useState } from 'react'
import { getPedidos,postPedidos,putPedidos,deletePedidos} from "../helpers/fetchApiPedidos";
import {Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap'


const PedidosAdmin = () => {
    const [pedidos, setPedidos] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [modalUpdate, setModalUpdate] = useState(false) //para mostrar y actualizar el estado del pedido
    const [modaldelete, setModaldelete] = useState(false) //para mostrar o no el modal de eliminacion    
    const [pedidoselecc, setPedidoselecc] = useState({
      _id: "",
      fecha: "",
      cant : 0,
      preciounit: "",
      estado:"",
      usuario:"",
      activo: true,
    })
    

    ///funciones
    const administracionped=(pedidosel,accion)=>{        
        // console.log(pedidosel);
        setPedidoselecc({      
            _id: pedidosel._id,
            fecha: pedidosel.fecha,
            menu: pedidosel.menu,
            cant : pedidosel.cant,
            preciounit: pedidosel.preciounit,
            estado:pedidosel.estado,
            usuario:pedidosel.usuario,
            activo: pedidosel.activo,            
        });

        accion==='actualizar'? setModalUpdate(!modalUpdate): setModaldelete(!modaldelete)
       
    }   
    
    
    const eliminar=(id)=>{
        deletePedidos(id).then((respuesta) => {
          setPedidoselecc({
            _id: "",
            fecha: "",
            cant : 0,
            preciounit: "",
            estado:"",
            usuario:"",
            activo: true,             
             });     
             
             setModaldelete(!modaldelete);
        });              
      }    

      const cambiarestado=(dato,id)=>{
        putPedidos(dato,id).then((respuesta) => {
          setPedidoselecc({
            _id: "",
            fecha: "",
            cant : 0,
            preciounit: "",
            estado:"",
            usuario:"",
            activo: true,             
             });     

             setModalUpdate(!modalUpdate)
             
        });              
      }


    //use efectt
    useEffect(() => {
        getPedidos().then((respuesta) => {
            // console.log(respuesta.pedidos);
            let arreglo = [];

            respuesta.pedidos.forEach((element) => {
                const {fecha,menu,cant,preciounit,estado,activo,_id,usuario } = element;                
                arreglo.push({fecha,menu,cant,preciounit,estado,activo,_id,usuario});                
              });
        
              setPedidos([...arreglo]);
              setLoading(false);

        });
                        
    }, []);
    
  return (
    <>

            <h1 className='text-white' >Administración de Pedidos</h1>
            <div className="row">
            <div className="col text-white">
                {loading?
                    (
                        <div className="col-6 offset-3">
                        <h3 className="text-white text-center">Cargando...</h3>
                        </div>
                    ) :
                    (
                        <table className="table text-white">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">fecha</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Cant</th>
                                <th scope="col">Precio/Unit</th>                                
                                <th scope="col">Estado</th>                                
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="table_body">                                            
                          {pedidos.map((pedido, index) => (
                            <tr key={index}>
                            <th scope="row" >{index + 1}</th> 
                            <td>{pedido.fecha}</td>
                            <td>{pedido.menu}</td>
                            <td>{pedido.cant}</td>
                            <td>{pedido.preciounit}</td>                            
                            <td>{pedido.estado}</td>                               
                            <td><button className="btn btn-warning" onClick={()=>administracionped(pedido,'actualizar')}>Finalizar</button></td>                        
                            <td><button className="btn btn-danger" onClick={()=>administracionped(pedido,'eliminar')}>Eliminar</button></td>
                            </tr>                                              
                          ))
                         }
                        </tbody>
                    </table>
                    )
                }
               
            </div>
        </div>     
        
        
         ///modales
        //modal para Cerrar pedido
        <Modal  isOpen={modalUpdate}>
             <ModalHeader>
                   <h3>Esta por Cambiar Estado del Pedido a Realizado, del Usuario : ???</h3>
             </ModalHeader>

             <ModalBody>       
                {pedidoselecc.usuario}, Detalle de Menu : {pedidoselecc.menu} , con Cantidad {pedidoselecc.cant}
             </ModalBody>

             <ModalFooter>
                 <button  className='btn btn-success' onClick={()=>cambiarestado(pedidoselecc._id)}>Aceptar</button>
                 <button className='btn btn-danger' onClick={()=>setModaldelete(!modaldelete)}>Cancelar</button>
             </ModalFooter>
        </Modal>              

         
        //modal eliminacion
        <Modal  isOpen={modaldelete}>
             <ModalHeader>
                   <h3>Esta seguro de Eliminar el Pedido del Usuario : ???</h3>
             </ModalHeader>

             <ModalBody>       
                {pedidoselecc.usuario}, Detalle de Menu : {pedidoselecc.menu} , con Cantidad {pedidoselecc.cant}
             </ModalBody>

             <ModalFooter>
                 <button  className='btn btn-success' onClick={()=>eliminar(pedidoselecc._id)}>Aceptar</button>
                 <button className='btn btn-danger' onClick={()=>setModaldelete(!modaldelete)}>Cancelar</button>
             </ModalFooter>
        </Modal>              

    </>
  )
}

export default PedidosAdmin