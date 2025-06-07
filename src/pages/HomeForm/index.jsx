import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../../formSchema";
import ReactInputMask from "react-input-mask";
import { useState } from "react";
import Input from "../../components/Input";

function HomeForm() {

    const [telefone, setTelefone] = useState("")

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data) => {
        if (!telefone || !/^\(\d{2}\) \d{5}-\d{4}$/.test(telefone)) {
            alert("Telefone inválido. Use o formato (99) 99999-9999");
            return;
        }

        try {
            const newData = { ...data, telefone };

            const members = JSON.parse(localStorage.getItem("members")) || [];
            members.push(newData);
            localStorage.setItem("members", JSON.stringify(members));

            alert("Cadastro realizado com sucesso!");
            reset();
            setTelefone("");
        }
        catch (error) {
            console.error("Erro ao salvar:", error);
            alert("Falha ao cadastrar. Verifique os dados.");
        }
    };

    return (
        <>
            <div className="flex justify-center items-center gap-40 px-[10px]">

                <img src="/home-img.svg" alt="home-img" className="h-[390px] tablet:hidden" />

                <form onSubmit={handleSubmit(onSubmit)} className="bg-[#fff] p-11 max-w-lg mx-auto space-y-4 rounded-[10px] shadow-md mobile:p-7">

                    <h2 className="font-bold text-[1.8rem]">Cadastro</h2>

                    <Input 
                        name="nome"
                        register={register}
                        error={errors.nome}
                        placeholder="Nome completo"
                    />

                    <Input
                        name="email"
                        register={register}
                        error={errors.email}
                        placeholder="E-mail"
                    />

                    <ReactInputMask mask="(99) 99999-9999" value={telefone} onChange={(e) => setTelefone(e.target.value)}>
                        {(inputProps) => (
                            <input {...inputProps} placeholder="Telefone" className="w-full p-2 border rounded-[7px] mobile:text-[14px]" />
                        )}
                    </ReactInputMask>
                    {errors.telefone && <p className="text-red-500">{errors.telefone.message}</p>}

                    <select {...register("cargo")} className="w-full p-2 border rounded-[7px] mobile:text-[14px]">
                        <option value="">Selecione um cargo</option>
                        <option>Desenvolvedor Frontend</option>
                        <option>Desenvolvedor Backend</option>
                        <option>Desenvolvedor Full Stack</option>
                        <option>Desenvolvedor Mobile</option>
                        <option>Desenvolvedor de Software</option>
                        <option>Engenheiro de Software</option>
                        <option>Arquiteto de Software</option>
                        <option>UI/UX Designer</option>
                        <option>Analista de Sistemas</option>
                        <option>Analista Programador</option>
                        <option>DevOps Engineer</option>
                        <option>Engenheiro de Dados</option>
                        <option>QA Engineer</option>
                        <option>Scrum Master</option>
                        <option>Product Owner</option>
                    </select>
                    {errors.cargo && <p className="text-red-500">{errors.cargo.message}</p>}

                    <Input
                        name="linkedin"
                        register={register}
                        error={errors.linkedin}
                        placeholder="LinkedIn (opcional)"
                    />

                    <Input
                        name="github"
                        register={register}
                        error={errors.github}
                        placeholder="GitHub (opcional)"
                    />

                    <button type="submit" className="w-full bg-[#6D0FF2] text-white py-3 rounded-[7px]">Cadastrar</button>

                </form>

            </div>
        </>
    )
}

export default HomeForm
