import { Button } from "@/components/ui/button"
import Link from "next/link"

const LandingPage = () => {
  return (
    <div>
      Landing Page (Unprotected)
      <div>
        <Link href="/log-in">
          <Button>Log In</Button>
        </Link>
        <Link href="/register">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
