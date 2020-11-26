import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,CardImg,Card ,CardTitle,CardSubtitle,CardBody} from 'reactstrap';
import {allorders} from "../action/order"
import {connect} from "react-redux"
import {confirmationAdmin} from "../action/order"
class OrderAdmin extends React.Component {
    state = {
        modal : false,
     
     
    };
  componentDidMount(){
     this.props. getOrders() 
  }
    toggle = () => {
        this.setState({ modal: !this.state.modal });
      };
    render(){
        
      
  return (
   <div>
      <Button color="success" onClick={this.toggle}>See orders</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className="">
        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
        <ModalBody>
        {this.props.orders.map((el) => (
              <Card className="card">
                <CardImg top width="50%" src={el.image} alt="Card image cap" />
                <CardBody>
                  <CardTitle> Name plate:{el.name}</CardTitle>
                  <CardSubtitle>Price:{el.price}dt</CardSubtitle>
             
                  <p>quantity:{el.quantity} </p>
                  <p> status de commande:{el.validation}</p>

                <Button onClick={()=>this.props.confirmationAdmin({
                    
                        name: el.name,
                        image:el.image,
                        price:el.price,
                        id: el._id,
                        validation:"valider"
                     
                })}>accept commande</Button>
                </CardBody>
              </Card>
            ))}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Do Something</Button>
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </div>
  )
}
}

const mapstatetoprops = (state) => ({
  
    orders:state.ordersstore
  
  })
const mapdisptchtopropos = (disptch) => ({
  
    getOrders:()=>disptch(allorders()),
    confirmationAdmin:(el)=>disptch(confirmationAdmin(el))
   
  })
export default connect(mapstatetoprops, mapdisptchtopropos)(OrderAdmin );