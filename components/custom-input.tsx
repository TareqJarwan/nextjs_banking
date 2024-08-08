'use client';

import { Control, FieldPath } from "react-hook-form";

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { authFormSchema } from "@/lib/utils";
import { z } from "zod";

const formSchema = authFormSchema('sign-up')

interface CustomInputProps {
    type?: "text" | "email" | "password";
    label: string;
    placeholder: string;
    name: FieldPath<z.infer<typeof formSchema>>;
    control: Control<z.infer<typeof formSchema>>
}

const CustomInput: React.FC<CustomInputProps> = ({
    type = "text",
    label,
    name,
    placeholder,
    control
}) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <div className="form-item">
                        <FormLabel className="form-label">
                            {label}
                        </FormLabel>
                        <div className="w-full flex flex-col">
                            <FormControl>
                                <Input
                                    type={type}
                                    placeholder={placeholder}
                                    className="input-class"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="form-message mt-2" />
                        </div>
                    </div>
                </FormItem>
            )}
        />
    );
}

export default CustomInput;