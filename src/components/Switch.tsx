import React from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";

type Props = {
  radioState: string;
  setRadioState: (type: string) => void;
};

export const Switch = ({ radioState, setRadioState }: Props) => {
  const onChange = (e: RadioChangeEvent) => {
    radioState === "Found" ? setRadioState("Lost") : setRadioState("Found");
  };
  return (
    <>
      <Radio.Group onChange={onChange} defaultValue={radioState}>
        <Radio.Button value="Found">Found</Radio.Button>
        <Radio.Button value="Lost">Lost</Radio.Button>
      </Radio.Group>
    </>
  );
};
