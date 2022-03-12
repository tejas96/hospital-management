import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { Button, HeaderAndDrawer } from "src/common/components";
import useFinanceContainer from "src/pages/finance/container";

const FinanceScreen: React.FC<{}> = () => {
  const { fetchPendingApprovalsState, handleAction, updateRfpState } =
    useFinanceContainer();
  return (
    <>
      <HeaderAndDrawer showHamburgerIcon={false} />
      <Box>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Requested quantity</TableCell>
                <TableCell align="right">Unit price</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fetchPendingApprovalsState.loading ? (
                <CircularProgress className="text-center" />
              ) : (
                fetchPendingApprovalsState.data?.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.qty}</TableCell>
                    <TableCell align="right">$.{row.price}</TableCell>
                    <TableCell align="right">
                      <Box className="flex justify-between items-center w-[200px]">
                        <Button
                          disabled={updateRfpState.loading}
                          onClick={() => handleAction(row.id, "Approved")}
                          label="Accept"
                        />
                        <Button
                          disabled={updateRfpState.loading}
                          onClick={() => handleAction(row.id, "Rejected")}
                          label="Reject"
                          style={{ background: "tomato" }}
                        />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default FinanceScreen;
