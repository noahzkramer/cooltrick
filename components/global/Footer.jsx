// Dependencies
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
import { StandardNavigation } from 'components/global'
import { Socials } from 'components/global'

const Footer = ({className, footerData}) => {
  const {
    footerDisclaimer,
    footerNavigation
  } = footerData

  var d = new Date();
  var year = d.getFullYear();

  return (
    <footer className={`${className} flex flex-wrap md:space-x-10 py-8 lg:py-14 px-8 lg:px-24 justify-center`}>
      <div className="w-24 md:w-36">
        <SVG src="/svg/logo.svg" />
      </div>
      <div className="">
        <div className="flex flex-wrap mb-4 justify-center md:justify-start">
          <span className="mr-10 text-tiny text-faded hidden md:block"> © {year} Cooltrick.</span>
          <StandardNavigation data={footerNavigation}/>
        </div>
        <p className="disclaimer text-xs text-faded m-0">{footerDisclaimer}</p>
      </div>
      <div className="flex flex-1 mt-6 justify-between md:justify-end">
        <span className="mr-10 text-tiny text-faded block md:hidden"> © {year} Cooltrick.</span>
        <Socials />
      </div>
    </footer>
  )
}

export default styled(Footer)`
  svg {
    width: 100%;
  }

  & .disclaimer {
    width: 100%;
    max-width: 700px;
  }

  & .socials {
    flex-shrink: 0;
  }

  & .socials ul {
    justify-content: flex-end;
  }
`