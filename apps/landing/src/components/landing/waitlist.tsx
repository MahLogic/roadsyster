import { useServerFn } from '@tanstack/react-start'
import { useState } from 'react'
import { AlertCircle, Check, Loader2, Mail } from 'lucide-react'
import { WhatsAppShareButton } from './whatsapp-share-btn'
import type React from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { joinWaitlist } from '@/server/waitlist'

interface WaitlistDialogProps {
  children: React.ReactNode
}

type FormState = 'idle' | 'loading' | 'success' | 'error'

function WaitlistDialog({ children }: WaitlistDialogProps) {
  const [formState, setFormState] = useState<FormState>('idle')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState<string | undefined>(undefined)

  const joinWaitlistServer = useServerFn(joinWaitlist)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')

    const { success, message: msg } = await joinWaitlistServer({
      data: { email },
    })
    if (success) {
      setFormState('success')
      setEmail('')
    } else {
      setFormState('error')
    }

    setMessage(msg)
  }

  const resetForm = () => {
    setFormState('idle')
    setEmail('')
  }

  return (
    <Dialog onOpenChange={(open) => !open && setTimeout(resetForm, 300)}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <div className="mb-2 flex flex-col items-center gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
            aria-hidden="true"
          >
            {formState === 'success' ? (
              <Check className="text-green-600 dark:text-green-500" size={20} />
            ) : formState === 'error' ? (
              <AlertCircle
                className="text-orange-600 dark:text-orange-500"
                size={20}
              />
            ) : (
              <svg
                className="stroke-foreground"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 18L18 6" />
                <path d="M8 6h10v10" />
              </svg>
            )}
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center">
              {formState === 'success'
                ? (message ?? "You're on the list!")
                : formState === 'error'
                  ? (message ?? 'Something went wrong')
                  : 'Get early access'}
            </DialogTitle>
            <DialogDescription className="sm:text-center">
              {formState === 'success'
                ? "We'll reach out with updates."
                : formState === 'error'
                  ? 'Please try again in a moment.'
                  : 'Built for freelancers and solo consultants.'}
            </DialogDescription>
          </DialogHeader>
        </div>

        {formState === 'idle' || formState === 'loading' ? (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <div className="relative">
                <Input
                  id="dialog-subscribe"
                  className="peer ps-9"
                  placeholder="you@example.com"
                  type="email"
                  aria-label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={formState === 'loading'}
                  required
                />
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                  <Mail size={16} strokeWidth={2} aria-hidden="true" />
                </div>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={formState === 'loading'}
            >
              {formState === 'loading' ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Joining waitlist...
                </>
              ) : (
                'Join waitlist'
              )}
            </Button>
          </form>
        ) : formState === 'error' ? (
          <Button onClick={resetForm} className="w-full">
            Try again
          </Button>
        ) : (
          <WhatsAppShareButton>Share on WhatsApp</WhatsAppShareButton>
        )}

        {formState === 'idle' && (
          <p className="text-center text-xs text-muted-foreground">
            No spam. Built by{' '}
            <span className="font-medium text-foreground">
              MahLogic Solutions
            </span>
            .
          </p>
        )}
      </DialogContent>
    </Dialog>
  )
}

export { WaitlistDialog }
