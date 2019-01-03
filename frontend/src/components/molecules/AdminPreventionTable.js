import React from 'react';
import {Heading} from "../atoms/Heading";
import {Button} from "../atoms/Button/Button";
import {FontIcon} from "../atoms/FontIcon";
import history from '../../history.js';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

class AdminPreventionTableRaw extends React.Component {
  constructor () {
      super();
      this.state = {
        showModal: false,
        prevence: null
      };

      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }

  handleOpenModal = (e) => {
    console.log(e);
    this.setState({ showModal: true, prevence: e });

  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

    openEditForm = (e) => {
      history.push(this.props.location.pathname + "/formular/" + e)
    }


      openAlert = (e) => {
        alert('Preventívni vyšetření ' + e + ' úspěšně odstraněno.')
      }

  render() {
    const { prevence } = this.props;

    return (
          <table className="table table-bordered">
            <thead className="blue">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Název</th>
                <th scope="col" colSpan="2">Akce</th>
              </tr>
            </thead>
            <tbody className="orange">
              {
                prevence.map(prevence => {
                    const { id, nazevPrevence } = prevence;
                  return (
                    <tr>
                      <th scope="row">{id}</th>
                      <td>{nazevPrevence}</td>
                      <td>
                          <FontIcon
                            style={{ cursor: "pointer"}}
                            onClick={e => this.openEditForm(id)}
                            icon={"edit"}
                          />
                      </td>
                      <td>
                      <FontIcon
                        style={{ cursor: "pointer"}}
                        onClick={e => this.handleOpenModal(nazevPrevence)}
                        icon={"trash"}
                      />
                        <ReactModal
                          isOpen={this.state.showModal}
                          contentLabel={this.state.prevence}
                          className="Modal"
                          overlayClassName="Overlay"
                          shouldCloseOnEsc={true}
                          shouldReturnFocusAfterClose={true}
                        >
                          <Button
                            onClick={this.handleCloseModal}
                            variant="admin"
                            type="submit"
                          >
                            <FontIcon  icon={"times"}/>
                          </Button>
                          <Heading level={1} className={"pb-3"}></Heading>
                          <Heading level={3} className={"pb-3"}>{this.state.prevence}</Heading>
                          <Heading level={6} className={"pb-3"}>Naozaj si prajete odstrániť preventívni vyšetření?</Heading>
                          <Heading level={6} className={"pb-3"}></Heading>
                          <Button
                            variant="admin"
                            className="float-right"
                            onClick={this.handleCloseModal}>
                            Odstrániť
                          </Button>
                        </ReactModal>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
    )
  }
}

const Page = props => <AdminPreventionTableRaw {...props} />

export const AdminPreventionTable = compose(withRouter)(Page)
