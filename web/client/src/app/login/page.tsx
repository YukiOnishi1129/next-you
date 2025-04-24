"use client"

import { useAuth } from "@/features/auth/providers/AuthProvider"
import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/ui/form"
import { Input } from "@/shared/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Brain, Loader2, Sparkles } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod";

// Define the login form schema with zod
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
})

// Define the form values type from the schema
type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const { login, isLoading } = useAuth()

  // Initialize the form with react-hook-form and zod resolver
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // Form submission handler
  const onSubmit = async (data: LoginFormValues) => {
    try {
      setError(null)
      await login(data.email, data.password)
    } catch (error) {
      setError("Invalid email or password. Please try again.")
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-rose-500" />
            <span className="font-bold">NextYou</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>Sign in to your account to start your self-analysis</CardDescription>
          </CardHeader>
          <CardContent>
            {error && <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md mb-4">{error}</div>}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>Password</FormLabel>
                        <Link href="/forgot-password" className="text-sm text-rose-500 hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
              </form>
            </Form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or</span>
              </div>
            </div>

            <Button variant="outline" className="w-full" asChild>
              <Link href="/login/guest">
                <Sparkles className="mr-2 h-4 w-4" />
                Continue as Guest
              </Link>
            </Button>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-center text-sm">
              Don't have an account?
              <Link href="/register" className="text-rose-500 hover:underline ml-1">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
