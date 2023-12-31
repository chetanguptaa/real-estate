/* eslint-disable react/no-unescaped-entities */
"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import React from 'react'
import { useRouter } from "next/navigation"
import Link  from 'next/link';
import { toast } from 'react-hot-toast';
import { useSession, signIn } from "next-auth/react"

const Login = () => {
    const session = useSession()
    const router = useRouter();
    const [userDetails, setUserDetails] = React.useState({
      email: "",
      password: ""
    })
    const [loading, setLoading] = React.useState(false);
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    React.useEffect(() => {
        if (session?.status === 'authenticated') {
            router.push('/posts') 
        }
    })
    const onLogin = async () => {
        try {
            setLoading(true);
            await signIn('credentials', {...userDetails, redirect: false})
            .then((callback) => {
              if (callback?.error) toast.error(callback.error)
              if(callback?.ok && !callback?.error) {
                toast.success('Logged in successfully!');
                router.push("/posts");
              }
            })
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error("Error logging in!");
        } finally{
            setLoading(false);
        }
    }
    React.useEffect(() => {
      if(userDetails.email.length > 0 && userDetails.password.length > 0) {
          setButtonDisabled(false);
      } else{
          setButtonDisabled(true);
      }
  }, [userDetails]);
    return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full m-auto bg-white lg:max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">{loading ? "Processing": "Sign in"}</CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to login
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
              id="email" 
              type="email" 
              placeholder="me@example.com" 
              onChange={(e) => setUserDetails({
                ...userDetails, email: e.target.value
              })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input 
              id="password" 
              type="password" 
              placeholder="" 
              onChange={(e) => setUserDetails({
                ...userDetails, password: e.target.value
              })}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            {buttonDisabled ? <Button disabled className="w-full">Login</Button> : <Button className="w-full" onClick={onLogin}>Login</Button>}
          </CardFooter>
          <div className="relative mb-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          {/* will add icons later */}
          <div className="grid grid-cols-2 gap-6 m-2">
            <Button variant="outline">
              {/* <Icons.gitHub className="mr-2 h-4 w-4" /> */}
              Google
            </Button>
            <Button variant="outline">
              {/* <Icons.twitter className="mr-2 h-4 w-4" /> */}
              Apple
            </Button>
          </div>
          <p className="mt-2 text-xs text-center text-gray-700 mb-2">
            {" "}
            Don't have an account?{" "}
            <Link href={'/signup'}>
              <span className=" text-blue-600 hover:underline">Sign up</span>
            </Link>
          </p>
        </Card>
      </div>
    </div>
    )
}

export default Login;