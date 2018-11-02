import React, {Component} from 'react';
import {Label} from '../atoms/Form/Label';
import {FormGroup} from '../atoms/Form/FormGroup';
import {Layout} from "../atoms/Layout";
import {FontIcon} from "../atoms/FontIcon";
import {Input} from "../atoms/Form/Input";
import {Column} from "../atoms/Column";
import {ListInline} from "../atoms/List/ListInline";
import {ListInlineItem} from "../atoms/List/ListInlineItem";

export class MultiSelect extends Component {

  constructor() {
    super();
    this.state = {
      isOpen: false,
      selectedValues: [],
      values: ["Kurak"],
    }
  }

  handleClick = () => {
    const {isOpen} = this.state;
    this.setState(prevState => ({
      isOpen: !isOpen,
    }));
  }


  render() {
    const {id, type, placeholder, label, value, ...rest} = this.props;
    const {isOpen, selectedValues, values} = this.state;

    return (
      <FormGroup>
        <Layout onClick={this.handleClick}>
          <Label id={id} label={label}/>
          <Layout
            id={id}
            className={"form-control pointer"}
          >
            Nevybráno
            <FontIcon icon={"arrow-down"} className={"float-right mt-half"}/>
          </Layout>
          {isOpen === true && (
            <Layout className={"selectbox"}>
              <Layout className="form-group row m-2">
                <Label id="inputBMI" className="col-sm-2 col-form-label pt-1" label={"BMI"}/>
                <Column sm="5">
                  <Input type="number" className="form-control small-form-controll" id="inputBMI" placeholder="21"/>
                </Column>
              </Layout>
              <ListInline className={""}>
                {
                  values.map(value => <ListInlineItem>{value}</ListInlineItem>)
                }
              </ListInline>
            </Layout>
          )}
        </Layout>
      </FormGroup>
    );
  }
}
