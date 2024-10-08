'use client'

import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import CustomInput from "@/components/custom-input";

import { authFormSchema } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";
import PlaidLink from "./plaid-link";

const AuthForm: React.FC<AuthFormProps> = ({
    type
}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const formSchema = authFormSchema(type);
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        console.log(data);
        try {
            setIsLoading(true);
            //Sign up with Appwrite & create plaid token

            if (type === 'sign-in') {
                const response = await signIn({
                    email: data.email,
                    password: data.password,
                })

                if (response) router.push('/');
            }

            if (type === 'sign-up') {
                const userData = {
                    firstName: data.firstName!,
                    lastName: data.lastName!,
                    address1: data.address1!,
                    city: data.city!,
                    state: data.state!,
                    postalCode: data.postalCode!,
                    dateOfBirth: data.dateOfBirth!,
                    ssn: data.ssn!,
                    email: data.email,
                    password: data.password
                }

                const newUser = await signUp(userData);

                setUser(newUser);
            }
        } catch (error) {
            console.log("ERROR_AUTH_FORM", error)
        } finally {
            setIsLoading(false);

        }
    }

    return (
        <section className="auth-form">
            <header className="flex flex-col gap-5 md:gap-8">
                <Link
                    href='/'
                    className="cursor-pointer flex items-center gap-1"
                >
                    <Image
                        src='/icons/logo.svg'
                        alt="Horizon Logo"
                        width={34}
                        height={34}
                    />
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                        Horizon
                    </h1>
                </Link>

                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
                        {user ? 'Link Account' :
                            type === 'sign-in' ?
                                'Sign In' :
                                'Sign Up'
                        }
                    </h1>
                    <p className="text-16 font-normal text-gray-600">
                        {user ? 'Link you account to get started' : 'Please enter your details'}
                    </p>
                </div>
            </header>

            {user ? (
                <div className="flex flex-col gap-4">
                    <PlaidLink user={user} variant="primary" />
                </div>
            ) : (
                <>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)} className="space-y-8"
                        >
                            {type === 'sign-up' && (
                                <>
                                    <div className="flex justify-between gap-2">
                                        <CustomInput
                                            control={form.control}
                                            label="First Name"
                                            name="firstName"
                                            placeholder="ex: John"
                                        />

                                        <CustomInput
                                            control={form.control}
                                            label="Last Name"
                                            name="lastName"
                                            placeholder="ex: Doe"
                                        />
                                    </div>

                                    <CustomInput
                                        control={form.control}
                                        label="Address"
                                        name="address1"
                                        placeholder="Enter your specific address"
                                    />

                                    <div className="flex justify-between gap-2">
                                        <CustomInput
                                            control={form.control}
                                            label="State"
                                            name="state"
                                            placeholder="ex: NY"
                                        />

                                        <CustomInput
                                            control={form.control}
                                            label="City"
                                            name="city"
                                            placeholder="ex: Amman"
                                        />

                                        <CustomInput
                                            control={form.control}
                                            label="Postal Code"
                                            name="postalCode"
                                            placeholder="ex: 11101"
                                        />
                                    </div>

                                    <div className="flex gap-4">
                                        <CustomInput
                                            control={form.control}
                                            name='dateOfBirth'
                                            label="Date of Birth"
                                            placeholder='YYYY-MM-DD'
                                        />

                                        <CustomInput
                                            control={form.control}
                                            name='ssn'
                                            label="SSN"
                                            placeholder='Example: 1234'
                                        />
                                    </div>
                                </>
                            )}

                            <CustomInput
                                control={form.control}
                                label="Email"
                                name="email"
                                placeholder="Enter your email"
                                type="email"
                            />

                            <CustomInput
                                control={form.control}
                                label="Password"
                                name="password"
                                placeholder="Enter your password"
                                type="password"
                            />

                            <div className="flex flex-col gap-4">
                                <Button type="submit"
                                    disabled={isLoading}
                                    className="form-btn">
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" /> &nbsp; Loading...
                                        </>
                                    ) : type === 'sign-in' ?
                                        'Sign In' :
                                        'Sign Up'
                                    }
                                </Button>
                            </div>

                        </form>
                    </Form>

                    <footer className="flex justify-center gap-1">
                        <p className="text-14 font-normal text-gray-600">
                            {type === 'sign-in'
                                ? "Don't have an account?"
                                : "Already have an account?"}
                        </p>
                        <Link
                            href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link"
                        >
                            {type === 'sign-in' ? 'Sign up' : 'Sign in'}
                        </Link>
                    </footer>
                </>
            )}
        </section>
    );
}

export default AuthForm;