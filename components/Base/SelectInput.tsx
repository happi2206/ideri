import React, { useId } from 'react';
import Select from 'react-select';
interface Props {
  label?: string;
}
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const style = {
  control: (base: {}) => ({
    ...base,
    border: '0 !important',
    boxShadow: '0 !important',
    '&:hover': {
      border: '0 !important',
    },
  }),
};
const SelectInput = ({ label }: Props) => {
  return (
    <div className="space-y-2">
      <label className="mb-2 text-sm md:text-base text-primary">{label}</label>
      <Select
        instanceId={useId()}
        options={options}
        styles={style}
        isMulti
        className="reactselect"
      />
    </div>
  );
};

export default SelectInput;
