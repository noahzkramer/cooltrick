import { FormFieldTypes } from 'lib/constants'
import { useState } from 'react'
import SVG from 'react-inlinesvg'

// create possible fields
const TextArea = ({fields, setFormData, formData}) => {
  const [ internalValue, setInternalValue ] = useState('')
  const handleChange = (e) => {
    setInternalValue(e.target.value)
    setFormData({...formData, [fields.name]: e.target.value})
  }

  return (
    <div className="w-full shadow-lg relative flex">
      <textarea 
        className="w-full p-4 pl-12 bg-light rounded-sm"
        value={internalValue}
        onChange={handleChange}
        placeholder={fields.placeholder}
        required={fields.required}
        rows="10"
      />
      <span className="absolute top-6 left-4">
        <SVG src={`/svg/${fields.icon}.svg`} />
      </span>
    </div>
  )
}

const Text = ({fields, setFormData, formData}) => {
  const [ internalValue, setInternalValue ] = useState('')
  const handleChange = (e) => {
    setInternalValue(e.target.value)
    setFormData({...formData, [fields.name]: e.target.value})
  }

  return (
    <div className="w-full shadow-lg relative">
    <input 
      className="w-full p-4 pl-12 bg-light rounded-sm"
      value={internalValue}
      onChange={handleChange}
      placeholder={fields.placeholder}
      required={fields.required}
      type={fields.type}
    />
      <span className="absolute top-6 left-4">
        <SVG src={`/svg/${fields.icon}.svg`} />
      </span>
    </div>
  )
}


const FormRenderer = ({ item, setFormData, formData }) => {
  // map the components to constants
  const FormFieldMap = {
    [FormFieldTypes.TextArea]: TextArea,
    [FormFieldTypes.Text]: Text,
    [FormFieldTypes.Email]: Text,
  };

  const contentTypeId = item.fields.type;
  const Component = FormFieldMap[contentTypeId];

  if (!Component) {
    console.warn(`${contentTypeId} can not be handled`);
    return null;
  }

  const { id } = item.sys;

  const componentProps = {
    ...item, // field data from item
    setFormData, // function to set form data
    formData // existing form data to duplicate
  };

  return <Component key={`${contentTypeId}-${id}`} {...componentProps} />;
};

export default FormRenderer