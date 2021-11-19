import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.css";

export default function Search({ onClick }) {
  const schema = yup.object().shape({
    repo: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  function handleSubmitNosso(data) {
    onClick(data.repo);
  }

  const { errors } = formState;
  console.log(errors);

  return (
    <div className="search">
      <form onSubmit={handleSubmit(handleSubmitNosso)}>
        <input type="text" placeholder="Repositório " {...register("repo")} />
        <button type="submit">Pesquisar</button>
        <div className="empty">{errors.repo?.message}</div>
      </form>
    </div>
  );
}
