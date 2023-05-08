import SideBar from '@/components/SideBar'
import './globals.css'


export const metadata = {
  title: 'Study Buddy',
  description: 'Website to help you focus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className='flex'>
          <div className='bg-[#BC6C25] max-w-xs h-screen overflow-y-scroll md:min-w-[20rem]'>
            <SideBar />
          </div>
          <div className='bg-[#DDA15E] flex-1'>
            {children}
          </div>
        </div>
        
        </body>
    </html>
  )
}
