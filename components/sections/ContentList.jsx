// Dependencies
import styled from 'styled-components'
import ContentListCard from 'components/sections/ContentListCard'
import { useEffect, useState, useRef, useContext } from 'react'
import { GlobalContext } from 'components/global/Layout'

const ContentList = ({className, id, fields}) => {
  const { heading, artist } = fields
  const [ active, setActive ] = useState(0)
  const [ transformDistance, setTransformDistance ] = useState(0)
  const activeRef = useRef(null)
  const { artists } = useContext(GlobalContext)

  const handleClick = (i) => {
    setActive(i)
  }

  const calcTransform = () => {
    const edgeSpace = (window.innerWidth / 2) - (activeRef.current.clientWidth / 2)
    setTransformDistance(edgeSpace - ((activeRef.current.clientWidth) * active) )
  }

  useEffect(() => {
    calcTransform()
    const resize = window.addEventListener('resize', () => calcTransform())
    return () => window.removeEventListener('resize', resize)
  }, [active])

  return (
    <section id={id} className={`${className} ss-sm md:ss-md lg:ss-lg`}>
      <div className="container max-w-screen-lg mb-5 md:mb-11 text-center">
        <h2 className="text-center">{heading}</h2>

        <select id="seriesSelector" class="text-accent bg-transparent pr-10 uppercase tracking-widest border-b border-accent mt-5 md:mt-11 text-tiny">
          <option value="1">Series 1</option>
          {/* <option value="2">Series 2</option> */}
        </select>
      </div>
      
      <div className="overflow-hidden pb-10 -mb-10">
        <div 
          className="flex transition duration-700 items-center" 
          style={{ transform: "translateX(" + transformDistance + "px)" }}
        >
          { artists.map((item, i) => {
            return (
              <div
                onClick={() => handleClick(i)}
                className={`card transition duration-700 w-9/12 md:w-8/12 lg:w-full max-w-screen-md flex-shrink-0${i === active ? ' active max-w-screen-md' : ''} `}
                ref={i === active ? activeRef : null}
              >
                <ContentListCard 
                  data={item.fields} 
                  key={item.sys.id}
                />
              </div>
            )
          })}
        </div>
      </div>

      <div className="ss-sm md:ss-md lg:ss-lg flex space-x-3 justify-center">
        { artists.map((item, i) => {
          return (
            <button 
              className={`focus:outline-none ${i === active ? ' active' : ''}`} 
              onClick={() => handleClick(i)}
            >
              <span 
                className={`w-3 h-3 ${i === active ? 'bg-accent transform scale-125' : 'bg-grey'} block rounded-full`}
              />
            </button>
          )
        })} 
      </div>
    </section>
  )
}

export default styled(ContentList)`
& {
  .card:not(.active) {
    transform: scale(0.8);
    opacity: 0.5;
    cursor: pointer;

    @media (min-width: 768px) {
      /* transform: scale(0.8); */
    }
  }

  .card.active {
    &:hover {
      .content {
        opacity: 1;
      }
    }
  }
}
`