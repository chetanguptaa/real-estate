"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Card,
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import React from 'react'
import axios from 'axios'
import { useRouter } from "next/navigation"

const SignupPage = () => {
    const router = useRouter();
    const [userDetails, setUserDetails] = React.useState({
      email: "",
      password: ""
    })
    const [loading, setLoading] = React.useState(false);
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", userDetails);
            console.log("successfully signed up", response.data);
            router.push("/profile");
        } catch (error:any) {
            console.log("Signup failed", error.message);
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
            <CardTitle className="text-2xl text-center">{loading ? "Processing": "Sign up"}</CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to signup
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
          </CardContent>
          <CardFooter className="flex flex-col">
          {buttonDisabled ? <Button disabled className="w-full">Signup</Button> : <Button className="w-full" onClick={onSignup}>Signup</Button>}
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
            Already have an account?{" "}
            <span className=" text-blue-600 hover:underline">Sign In</span>
          </p>
        </Card>
      </div>
    </div>
  )
}

export default SignupPage;