import { Variants } from "framer-motion"

export const sectionAnimate: Variants = {
    hidden: {
        opacity: '0',
        transform: 'translateY(4rem)'
    },
    visible: {
        opacity: '1',
        transform: 'translateY(0)',
        transition: {
            type: 'spring',
            bounce: '0.5',
            duration: '0.4'
        }
    }
}