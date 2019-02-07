import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { getLeads, deleteLead } from "../../actions/leads";
import SimpleTableRow from "./SimpleTableRow";

class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired
  };
  componentDidMount() {
    this.props.getLeads();
    console.log(this.state);
  }
  render() {
    return (
      <Fragment>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Message</TableCell>
                <TableCell align="right" />
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.leads.map(lead => (
                <SimpleTableRow
                  handleDelete={this.props.deleteLead}
                  key={lead.id}
                  lead={lead}
                />
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  leads: state.leadReducer.leads
});

export default connect(
  mapStateToProps,
  { getLeads, deleteLead }
)(Leads);
