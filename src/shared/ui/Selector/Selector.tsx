import { FC, useEffect, useMemo } from "react";

import Select from "react-select";
import { WindowedMenuList } from "react-windowed-select";
import { FixedSizeList as List } from "react-window";
import { FieldErrors } from "react-hook-form";
type Option = {
  label: string;
  value: string;
};

interface ISelectProps {
  options: Option[];
  placeholder: string;
  className?: string;
  name: string;
  defaultValue?: Option;
  value?: any;
  onChange?: any;
  errors?: FieldErrors;
  onInputChange?: (e: any) => void;
}

const MenuList = (props: any) => {
  const { options, children, maxHeight = "100px", getValue } = props;
  const [value] = getValue();
  const initialOffset = options.indexOf(value) * 40;

  return (
    //@ts-ignore
    <List
      style={{ zIndex: "100", height: "fit-content", maxHeight: "300px" }}
      height={maxHeight}
      itemCount={children.length}
      itemSize={40}
      initialScrollOffset={initialOffset}
    >
      {({ index, style }) => <div style={style}>{children[index]}</div>}
    </List>
  );
};

export const Selector: FC<ISelectProps> = ({
  options,
  placeholder,
  className,
  name,
  defaultValue,
  value,
  onChange,
  errors,
  onInputChange,
}) => {
  const selectClass = `select ${className ? className : ""} ${
    errors && errors[name] ? "error" : ""
  }`;

  return (
    <Select
      onInputChange={onInputChange}
      components={{ MenuList }}
      isClearable={false}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      options={options}
      className={selectClass}
      classNamePrefix="select"
      value={value}
    />
  );
};
