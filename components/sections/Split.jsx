import { camelSentence } from 'helpers'

const Split = ({className, fields}) => {
  const {
    name
  } = fields

  return (
    <section id={camelSentence(name)} className={`section-spacing-lg`}>
      Split
    </section>
  )
}

export default Split