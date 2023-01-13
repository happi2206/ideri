import React, { useId } from 'react';
import Select, { ActionMeta, MultiValue } from 'react-select';
interface Props {
  label?: string;
  onChange?: (
    newValue: MultiValue<{
      value: string;
      label: string;
    }>,
    actionMeta: ActionMeta<{
      value: string;
      label: string;
    }>
  ) => void;
}
const options = [
  { value: 'Pop', label: 'Pop' },
  { value: 'Lofi', label: 'Lofi' },
  { value: 'Rap', label: 'Rap' },
  { value: 'Rock', label: 'Rock' },
  { value: 'Indie Pop', label: 'Indie Pop' },
  { value: 'Nigerian Pop', label: 'Nigerian Pop' },
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
const SelectInput = ({ label, onChange }: Props) => {
  return (
    <div className="space-y-2">
      <label className="mb-2 text-sm md:text-base text-primary">{label}</label>
      <Select
        instanceId={useId()}
        options={options}
        styles={style}
        isMulti
        className="reactselect"
        onChange={onChange}
      />
    </div>
  );
};

export default SelectInput;
