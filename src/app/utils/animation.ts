import { Variants } from "framer-motion"

export const sectionAnimate: Variants = {
    hidden: {
        opacity: '0',
        translateY: '8rem'
    },
    visible: {
        opacity: '1',
        translateY: '0',
        transition: {
            type: 'spring',
            stiffness: '120',
            duration: '0.5'
        }
    }
}