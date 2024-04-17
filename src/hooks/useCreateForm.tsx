import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
const useCreateForm = (schema: any, defaultValues:any = null) => {
 
    const form = useForm({
        defaultValues: defaultValues,
        resolver: zodResolver(schema),
        reValidateMode: "onChange",
        mode: "onTouched",
        criteriaMode: "firstError"
    })

    return form
}

export default useCreateForm