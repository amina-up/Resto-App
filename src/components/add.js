import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddPlate extends React.Component {
    state = {
        modal : false,
    };
  
    toggle = () => {
        this.setState({ modal: !this.state.modal });
      };
    render(){
  return (
   <div>
      <Button color="danger" onClick={this.toggle}>Add</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className="">
        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
        <ModalBody>
         <p>Image <input type="text" placeholder="Enter ur URL" id = "image" onChange = {this.props.change}/></p>
          <input type="text" placeholder="Enter ur plate's title" id = "name" onChange = {this.props.change}/>
          <input type="text" placeholder="Enter ur price " id = "price" onChange = {this.props.change}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.addplate}>Do Something</Button>
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </div>
  )
}
}

export default AddPlate;