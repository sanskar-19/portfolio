import { Button } from "@/components";
import Input from "@/components/Input";
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, formState: { isValid } } = useForm();
    return (<main className="flex mx-auto">
        <form className="mx-auto flex-grow flex flex-col gap-y-8">
            <h2 className="text-white font-semibold text-4xl">Let&apos;s <span className="font-thin">connect</span></h2>
            <Input name="first_name" placeholder="John" type="text" register={register} extraClass="w-full " />
            <Input name="last_name" placeholder="Doe" type="text" register={register} extraClass="w-full " />
            <Input name="email" placeholder="johndoe@example.com" type="email" register={register} extraClass="w-full " />
            <textarea placeholder="Hey Sanskar, greetings. My business name is ABC..." {...register("message")} className="outline-none focus:outline-none border border-white bg-transparent py-2 px-4 rounded-md w-full" rows={4} />
            <Button styleType="primary" label={"Send message"} extraClass={"text-white green-shadow"} disabled={!isValid} />
        </form>
    </main>);
}

export default Contact;