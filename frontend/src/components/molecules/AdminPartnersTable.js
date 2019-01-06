import React from 'react';
import {Heading} from "../atoms/Heading";
import {Button} from "../atoms/Button/Button";
import {FontIcon} from "../atoms/FontIcon";
import history from '../../history.js';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import ReactModal from 'react-modal';
import api from '../../api';

ReactModal.setAppElement('#root');

class AdminPartnersTableRaw extends React.Component {
  constructor () {
      super();
      this.state = {
        showModal: false,
        partner: null
      };

      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }

  handleOpenModal = (e) => {
    this.setState({ showModal: true, partner: e });

  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  openEditForm = (e,p) => {
    history.push(
      this.props.location.pathname + "/formular/" + e, { partner: p }
    )
  }

  openAlert = (e) => {
    alert('Partner ' + e + ' úspěšně odstraněn.')
  }

  handleDeleteAndClose = (e) =>{
    const idToDelete  = e.id;
    api.delete('http://dev.backend.team03.vse.handson.pro/api/partneri', { data: { id: idToDelete } })
        .then(({ data }) => {
          this.handleCloseModal();
          this.setState({ redirectUrl: '/admin/Partneři' });
          window.location.reload();
        })
  }

  render() {
    const { partneri } = this.props;

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
                partneri.map(partneri => {
                    const { id, nazevPartner, popisPartner, kontaktPartner, logoPartner, obrazokPartner } = partneri;

                  return (
                    <tr key={id}>
                      <th scope="row">{id}</th>
                      <td>{nazevPartner}</td>

                      <td>
                          <FontIcon
                            style={{ cursor: "pointer"}}
                            onClick={e => this.openEditForm(id, partneri)}
                            icon={"edit"}
                          />
                      </td>
                      <td>
                      <FontIcon
                        style={{ cursor: "pointer"}}
                        onClick={e => this.handleOpenModal(id, nazevPartner)}
                        icon={"trash"}
                      />
                        <ReactModal
                          isOpen={this.state.showModal}
                          contentLabel={this.state.partner}
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
                          <Heading level={3} className={"pb-3"}>{partneri.nazevPartner}</Heading>
                          <Heading level={6} className={"pb-3"}>Vážně chcete odstranit partnera?</Heading>
                          <Heading level={6} className={"pb-3"}></Heading>
                          <Button
                            variant="admin"
                            className="float-right"
                            onClick={() => {this.handleDeleteAndClose(partneri) }}>
                            Odstránit
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

const Page = props => <AdminPartnersTableRaw {...props} />

export const AdminPartnersTable = compose(withRouter)(Page)
