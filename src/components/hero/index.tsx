import React, { useEffect, FunctionComponent, useState } from 'react'
import './index.scss'
import { useTranslation } from 'react-i18next'

type Props = {
  hero: Array<{
    path: string
    title: string
    description: string
  }>
}

export const Hero: FunctionComponent<Props> = ({ hero }) => {
  // Original: https://codepen.io/suez/pen/grJONP?editors=1010
  const [currentIndex, setIndex] = useState(0)
  const [direction, setDirection] = useState('right')
  const [isSlidingBlocked, setIsSlidingBlocked] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    let autoplay = () => {
      const autoDirection = direction === 'left' ? -1 : +1
      const resultIndex =
        currentIndex + autoDirection < 0
          ? hero.length - 1
          : currentIndex + autoDirection
      setIndex(resultIndex)
    }
    const autoplayInterval = setInterval(autoplay, 3000)

    if (currentIndex + 1 > hero.length) {
      setIndex(0)
    }

    if (currentIndex < 0) {
      setIndex(hero.length - 1)
    }

    setTimeout(function() {
      setIsSlidingBlocked(false)
    }, 1000)

    return () => clearInterval(autoplayInterval)
  }, [currentIndex, hero.length, direction])

  useEffect(() => {
    console.log('object')
  }, [])

  function handleClick(indexChange: number, newDirection: string) {
    if (isSlidingBlocked && newDirection === direction) return null

    setIsSlidingBlocked(true)
    setIndex(currentIndex + indexChange)
    setDirection(newDirection)
  }

  function ControllerLoading() {
    return (
      <span className='progress progress--thin'>
        <svg height='70' width='70'>
          <circle
            id='outer'
            cx='35'
            cy='35'
            r='25'
            strokeWidth='2'
            fill='none'
            stroke='lightgrey'
          />
          <circle
            id='inner'
            cx='35'
            cy='35'
            r='25'
            strokeWidth='8'
            fill='none'
            stroke='white'
          />
        </svg>
      </span>
    )
  }

  return (
    <>
      <div className='slider relative'>
        <div className='slider__slides relative'>
          {hero.map((banner, index) => {
            const activeClassName =
              index === currentIndex
                ? `s--active ${direction === 'left' ? 's--active-prev' : ''}`
                : ''
            const prevClassName =
              (index + 1 === hero.length && currentIndex === 0) ||
              index === currentIndex - 1
                ? 's--prev'
                : ''
            return (
              <div
                className={`slide slide-${index} ${activeClassName} ${prevClassName}`}
                data-slide={index}
                key={index}
              >
                <div
                  className='slide__inner'
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    backgroundBlendMode: 'multiply',
                    backgroundImage: `url(${banner.path}&w=${window.innerWidth *
                      window.devicePixelRatio}&fit=crop&h=510)`,
                  }}
                >
                  <div className='slide__content'>
                    <h1 className='slide__heading leading-none font-semibold'>
                      {t(banner.title)}
                    </h1>
                    <p className='slide__text'>{t(banner.description)}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div
          className='slider__control slider__control--left'
          onClick={() => handleClick(-1, 'left')}
        >
          {direction === 'left' && <ControllerLoading />}
        </div>
        <div
          className='slider__control slider__control--right m--right'
          onClick={() => handleClick(+1, 'right')}
        >
          {direction === 'right' && <ControllerLoading />}
        </div>
      </div>
    </>
  )
}
