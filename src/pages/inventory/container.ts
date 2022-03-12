import React, { useCallback, useState } from "react";
import produce from "immer";
import { useApi } from "src/hooks";
import { ApiMethods } from "src/model";
import toast from "react-hot-toast";
interface RfpFormState {
  productName: string;
  quantity: number;
  unitPrice: number;
}

const useInventoryContainer = () => {
  const [rfpFormState, setRfpFormState] = useState<RfpFormState>({
    productName: "",
    quantity: 0,
    unitPrice: 0,
  });
  const [createRfp, createRfpState] = useApi();

  const handleOnChange = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ): void => {
    const { name, value } = e.target;
    if (name) {
      setRfpFormState(
        produce((draft: RfpFormState) => {
          draft[name] = value;
        })
      );
    }
  };

  const handleCreateRfp = useCallback(() => {
    createRfp("/rfp", ApiMethods.POST, rfpFormState)
      .then(() => {
        toast.success("RFP Created Successfully");
      })
      .catch(() => {
        toast.error("Error creating RFP");
      });
  }, [rfpFormState]);

  return {
    rfpFormState,
    handleOnChange,
    handleCreateRfp,
    createRfpState,
  };
};

export default useInventoryContainer;
