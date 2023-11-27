import React from "react";
import Select, { components } from "react-select";
import createClass from "create-react-class";

interface SelectProps {
  options: Array<{
    value: string;
    label: string;
  }>;
  name: string
}
const customStyles = {
  input: (base: any) => ({
    ...base,
    "input:focus": {
      boxShadow: "none",
    },
  }),
  option: (base: any) => ({
    ...base,
    backgroundColor: "none",
    color: "black",
    margin: "5px",
  }),
  control: (base: any) => ({
    ...base,
    cursor: "pointer",
    borderRadius: "15px",
    padding: "5px 7px",
    backgroundColor: "#eff1f6",
    border: "none",
  }),
  multiValue: (base: any) => ({
    ...base,
    backgroundColor: "none",
    borderRadius: "4px",
    marginRight: "4px",
  }),
};

const Option = createClass({
  render() {
    return (
      <components.Option {...this.props}>
        <div className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={this.props.isSelected}
            className="p-3 checked:bg-black border-gray-600 rounded-md mr-4"
          />
          <label className="cursor-pointer">{this.props.value} </label>
        </div>
      </components.Option>
    );
  },
});

const SelectDropdown: React.FC<SelectProps> = ({ options,name }) => {
  return (
    <div className="space-y-1">
      <h3>{name}</h3>
      <Select
        isMulti
        styles={customStyles}
        //@ts-expect-error
        components={{ Option, MultiValue }}
        options={options}
        hideSelectedOptions={false}
      />
    </div>
  );
};

const MultiValue = (props: any) => {
  return (
    <components.MultiValue {...props}>
      <span>{props.data.label}</span>
    </components.MultiValue>
  );
};

export default SelectDropdown;
