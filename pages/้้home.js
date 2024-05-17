import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-[#FFF0F5] to-[#FFFACD] overflow-hidden">
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <HeartIcon className="text-[#FF69B4] w-6 h-6" />
        <div className="text-3xl font-bold text-[#FF69B4]">TindoiX</div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-4xl font-bold text-[#FF69B4]">Welcome to TindoiX</div>
        <div className="my-6 text-2xl italic text-[#FF69B4]">Love is a game, and Iam the player.</div>
        <Button className="bg-[#FF69B4] text-white hover:bg-[#FF1493] transition-colors">Find Your Heart</Button>
      </div>
      <div className="absolute top-6 right-6 flex items-center gap-4">
        <Link className="flex items-center gap-2 text-[#FF69B4] hover:underline" href="#">
          <HomeIcon className="w-5 h-5" />
          Home
        </Link>
        <Link className="flex items-center gap-2 text-[#FF69B4] hover:underline" href="#">
          <UserIcon className="w-5 h-5" />
          Profile
        </Link>
        <Link className="flex items-center gap-2 text-[#FF69B4] hover:underline" href="#">
          <MessagesSquareIcon className="w-5 h-5" />
          Messages
        </Link>
        <Link className="flex items-center gap-2 text-[#FF69B4] hover:underline" href="#">
          <SettingsIcon className="w-5 h-5" />
          Settings
        </Link>
        <Link className="flex items-center gap-2 text-[#FF69B4] hover:underline" href="#">
          <LogOutIcon className="w-5 h-5" />
          Logout
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#FFF0F5] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#FFFACD] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#FFF0F5] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#FFFACD] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#FFF0F5] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#FFFACD] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#FFF0F5] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#FFFACD] to-transparent" />
    </div>
  )
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


function MessagesSquareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}