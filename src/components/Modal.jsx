import { AnimatePresence, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export default function Modal({ children, open, onClose, isFull }) {
	const { panel, inner, close } = {
		panel: {
			init: { opacity: 0, y: -200 },
			anim: { opacity: 1, y: 0, transition: { duration: 0.5 } },
			exit: { opacity: 0, y: 200, transition: { duration: 0.3, delay: 0.2 } },
		},
		inner: {
			init: { opacity: 0 },
			anim: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
			exit: { opacity: 0, transition: { duration: 0.2, delay: 0 } },
		},
		close: {
			init: { opacity: 0, x: 300 },
			anim: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
			exit: { opacity: 0, x: -300, transition: { duration: 0.2, delay: 0 } },
		},
	};

	return (
		<>
			<AnimatePresence>
				{open && (
					<motion.aside
						initial={panel.init}
						animate={panel.anim}
						exit={panel.exit}
						className={twMerge(
							'fixed w-6/10 h-6/10 top-[0.1vw] left-[0.1vw] translate-x-1/2 translate-y-1/2 bg-[oklch(var(--theme-bg)/0.4)] p-20 z-100  backdrop-blur-md rounded-md shadow-xl',
							isFull && 'w-full h-screen rounded-none shadow-none'
						)}
					>
						<motion.div
							className='size-full'
							initial={inner.init}
							animate={inner.anim}
							exit={inner.exit}
						>
							{children}
						</motion.div>
						<motion.span
							className='absolute top-5 right-10 theme-text font-semibold cursor-pointer opacity-50'
							onClick={onClose}
							initial={close.init}
							animate={close.anim}
							exit={close.exit}
						>
							close
						</motion.span>
					</motion.aside>
				)}
			</AnimatePresence>
		</>
	);
}
