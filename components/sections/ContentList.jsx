// Dependencies
import styled from 'styled-components'
import ContentListCard from 'components/sections/ContentListCard'

const ContentList = ({className, id, fields}) => {
  const {
    heading,
    artist,
  } = fields

  return (
    <section id={id} className={`${className} section-spacing-lg`}>
      <div className="container max-w-screen-lg">
        <h2 className="text-center mb-8">{heading}</h2>
        <div>
          { artist.map((item) => <ContentListCard data={item.fields} key={item.sys.id}/>)} 
        </div>
      </div>
    </section>
  )
}

export default styled(ContentList)`
`