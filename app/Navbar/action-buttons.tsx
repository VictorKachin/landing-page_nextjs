import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTrigger,
} from '@/components/ui/sheet'

import { AlignJustify } from 'lucide-react'

import Link from 'next/link'

// 19:20 from
// https://www.youtube.com/watch?v=Z0cn02PTKBQ&ab_channel=iggy

// TODO:
// FIXME:

const ActionButtons = () => {
	return (
		<div>
			<div className='md:hidden'>
				<Sheet>
					<SheetTrigger>
						<AlignJustify />
					</SheetTrigger>
					<SheetContent>
						<SheetDescription>
							<div className='flex flex-col space-y-4 items-start w-full text-lg text-black mt-10'>
								<Link href='//'>Sign in</Link>
								<Link href='//'>Get Started</Link>
								<Link href='//'>Pricing</Link>
								<Link href='//'>Features</Link>
								<Link href='//'>Contacts</Link>
								<Link href='//'>About</Link>
							</div>
						</SheetDescription>
					</SheetContent>
				</Sheet>
			</div>
			<div className='hidden md:flex md:space-x-4'>
				<Button className='text-md' variant='ghost'>
					Sign in
				</Button>
				<Button className='text-md bg-blue-500'>Get Started</Button>
			</div>
		</div>
	)
}

export default ActionButtons
