// Dependencies
import styled from 'styled-components'
import FormRenderer from 'components/helpers/FormRenderer'
import { useState } from 'react'
import { PrimaryButton, Modal } from 'components/global'
import SVG from 'react-inlinesvg'

const ContactForm = ({className, fields}) => {
  const [ formData, setFormData ] = useState({})
  const [ formState, setFormState ] = useState('')
  const [ errors, setErrors ] = useState({})
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
      formData,
      FROM: from,
      SENDTO: sendTo,
      SUBJECT: subject,
    }

    console.log(formData)

    // validations
    for (const field in formData) {
      switch (field) {
        case 'Subject':
          setErrors({
            ...errors, 
            [field]: formData[field].length < 5
              ? 'Full Name must be 5 characters long!'
              : ''
          })
          break;
        case 'email': 
          errors.email = 
            validEmailRegex.test(value)
              ? ''
              : 'Email is not valid!';
          break;
        default: break;
      }
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
      .then(data => {
        console.log(data)
        if (data.success) setFormState('success')
        if (!data.success) setFormState('error')
      })
      .catch((error) => setFormState('error'))

    // update success 
    console.log('submit')
  }

  return (
    <div className="relative">
      <div className="errors"></div>
      
        <Modal 
          isOpen={formState !== ''} 
          setIsOpen={() => setFormState('')}
        >
          {
            formState === 'success' && (
              <div className="w-80">
                <div className="aspect-w-9 aspect-h-12 z-10 ">
                  <div className="h-full flex flex-col rounded-lg overflow-hidden ">
                    <div className="bg-light flex-1 flex items-center justify-center">
                      <span className="icon text-center w-20">
                        <SVG src="/svg/check-circle-regular.svg" className="w-full" />
                      </span>
                    </div>
                    <div className="bg-white flex-1 flex items-center justify-center">
                      <div className="text-center p-10">
                        <p class="mb-6">Thanks for reaching out. <br/>We will be in touch shortly!</p>
                        <PrimaryButton onClick={() => setFormState('')}>
                          Continue
                        </PrimaryButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          {
            formState === 'error' && (
              <div className="w-80">
                <div className="aspect-w-9 aspect-h-12 z-10 ">
                  <div className="h-full flex flex-col rounded-lg overflow-hidden ">
                    <div className="bg-light flex-1 flex items-center justify-center">
                      <span className="icon text-center w-20">
                        <SVG src="/svg/times-circle-regular.svg" className="w-full" />
                      </span>
                    </div>
                    <div className="bg-white flex-1 flex items-center justify-center">
                      <div className="text-center p-10">
                        <p class="mb-6">Error. Please fill out all fields.</p>
                        <PrimaryButton onClick={() => setFormState('')}>
                          Continue
                        </PrimaryButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          
        </Modal>
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