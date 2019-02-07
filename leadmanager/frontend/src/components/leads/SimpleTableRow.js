import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

const SimpleTableRow = props => {
  const { lead } = props;

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {lead.id}
      </TableCell>
      <TableCell align="right">{lead.name}</TableCell>
      <TableCell align="right">{lead.email}</TableCell>
      <TableCell align="right">{lead.message}</TableCell>
      <TableCell align="right">
        <Button
          variant="contained"
          color="secondary"
          onClick={props.handleDelete.bind(this, lead.id)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default SimpleTableRow;
