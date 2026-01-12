import { Link } from '@tanstack/react-router'
import { Button } from '../ui/button'

type WhatsAppShareButtonProps = {
  children?: React.ReactNode
}

export function WhatsAppShareButton({ children }: WhatsAppShareButtonProps) {
  return (
    <Button
      className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition"
      size="sm"
      asChild
    >
      <Link to={`/share/whatsapp`}>{children}</Link>
    </Button>
  )
}
