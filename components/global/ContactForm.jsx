// Dependencies
import styled from 'styled-components'
import FormRenderer from 'components/helpers/FormRenderer'
import { useState } from 'react'
import { PrimaryButton } from 'components/global'

const ContactForm = ({className, fields}) => {
  const [ formData, setFormData ] = useState({})
  const {
    formFields = [],
    name = "",
    from = "",
    sendTo = [],
    subject = "",
    submitText = "Submit"
  } = fields  

  // on form submit
  const handleSubmit = (e) => {
    e.preventDefault()

    // add constants to form data
    const data = {
      ...formData,
      FROM: from,
      SENDTO: sendTo,
      SUBJECT: subject,
    }

    // perform front end validation
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => console.log(data));

    // update success 
    console.log('submit')
  }

  return (
    <div>
      <div className="errors"></div>
      <form 
        id={name} 
        className={`${className}`} 
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap space-y-4">
          {
            formFields.map(item => {
              return (
                <FormRenderer
                  key={item.sys.id}
                  item={item}
                  formData={formData}
                  setFormData={setFormData}
                />
              )
            })
          }
        </div>
        <div className="text-center mt-10">
          <PrimaryButton color="primary" type="submit">
            {submitText}
          </PrimaryButton>
        </div>
      </form>
    </div> 
  )
}

// export
export default styled(ContactForm)`
  // unique styles here
  input,
  textarea {
    outline: none;
    border: transparent 1px solid;
    transition: border 0.3s;

    ~ span svg {
      transition: fill 0.3s;
      fill: var(--color-grey);
    }

    &::placeholder {
      transition: color 0.3s;
    }

    &:focus {
      outline: none;
      border: var(--color-accent) 1px solid;

      &::placeholder {
        color: white;
      }

      & ~ span svg {
        fill: white;
      }
    }
  }
`