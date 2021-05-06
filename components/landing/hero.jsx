// Dependencies
import styled from 'styled-components'
import Link from 'next/link'

const LandingHero = ({className, fields}) => {
  console.log(fields)
  
  return (
    <header className={className}>
      <div className="content-wrapper">
        <h1>{fields.header}</h1>
        <h2>{fields.subheader}</h2>
      </div>

      <Link href={fields.ctaLink}>
        <a className="link">{fields.ctaText}</a>
      </Link>
    </header>
  )
}

// export
export default styled(LandingHero)`
  height: 100vh;
  background: orange;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  position: relative;

  .content-wrapper {
    max-width: 1000px;
  }

  h1 {
    margin: 0;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 6.2rem;
    font-weight: 300;
  }

  h2 {
    color: white;
    text-align: center;
  }

  .link {
    position: absolute;
    bottom: 3.4rem;
    left: 3.4rem;
  }
`