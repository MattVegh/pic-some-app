import { useState, useEffect, useRef } from 'react'

function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    function onEnter() {
        setHovered(true)
    }

    function onLeave() {
        setHovered(false)
    }

    useEffect(() => {
        ref.current.addEventListener('mouseenter', onEnter)
        ref.current.addEventListener('mouseleave', onLeave)

        return () => {
            ref.current.removeEventListener('mouseenter', onEnter)
            ref.current.removeEventListener('mouseleave', onLeave)
        }
    }, [])

    return [ hovered, ref ]
}

export default useHover