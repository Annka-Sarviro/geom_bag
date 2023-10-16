import FieldProps from './FronInput.props';

function FormInput(props: FieldProps) {
  const { data, reg, errors, options } = props;
  const { type, name, label, value1, value2 } = data;

  return (
    <div className="relative">
      <label htmlFor={`formField${name}`} className="hidden ">
        {label}
      </label>
      {type === 'select' ? (
        <select
          className={` py-2.5 px-7  mb-2 w-[100%] bg-white_gray text-dark border border-dark valid:!bg-white ${
            errors[name] ? 'border-error border border-style:solid' : 'border bg-white'
          }`}
          {...reg(name, options)}
          name={name}
          placeholder={label}
          aria-label={label}
          defaultValue={value1}
        >
          <option value={value1} defaultChecked className={` `}>
            {value1}
          </option>
          <option value={value2}>{value2}</option>
        </select>
      ) : (
        <input
          id={`formField${name}`}
          className={`relative py-2.5 px-7  mb-2  w-[100%] placeholder-shown:bg-white_gray text-dark border border-dark bg-white ${
            errors[name] ? 'border-error border border-style:solid' : 'border'
          }`}
          type={type}
          {...reg(name, options)}
          name={name}
          placeholder={label}
          aria-label={label}
        />
      )}

      <div
        className={` z-10 absolute right-0 text-error text-xs max-[346px]:text-[10px] bottom-[-14px]
        `}
      >
        {errors[name] && <p>{...Object.values(errors[name].message)}</p>}
      </div>
    </div>
  );
}

export default FormInput;
