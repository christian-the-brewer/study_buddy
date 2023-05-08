'use client'

import Link from "next/link"
import { ListBulletIcon } from '@heroicons/react/24/outline'

function SideBar() {
    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                {/* Tasks */}
                <div>
                    
                </div>
                {/* Todo */}
                <Link href={'/todo'}>
                <div className='border-gray-700 border sidebar_items'>
                    <ListBulletIcon className="h-8 w-8"/>
                    <p>To-Do</p>
                </div>
                </Link>
                {/* Tasks */}
                
                {/* Timer */}
            </div>
        </div>
    )
}

export default SideBar
