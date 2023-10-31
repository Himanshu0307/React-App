import { memo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../Assets/sssurf.svg";

import { TextButton, TextField } from "../../Component/FormComp";
import { SpinnerContext } from "../../Store/SpinnerProvider";
import { useForm } from "react-hook-form";
import { makeGetRequest } from "../../Network/Request";
import { Authenticate } from "../../Network/Auth.service";

const Login = memo(() => {
  const [_, setShowSpinner] = SpinnerContext();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onSubmit" });

  const navigate = useNavigate();

  const onSubmit = async function (data) {
    const request = {
      login: data.username,
      password: data.password,
      ip: "192.89.89.8",
      geolocation: "sdfsdfsdfsdf",
    };
    var data = Authenticate(request);
    if (data) {
      navigate("/");
    }
  };

  return (
    <div
      className="h-full"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <form className="h-full flex" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-3/12 outline outline-offset-2 outline-gray-400 m-auto  place-content-center gap-4 p-4 rounded-lg">
          <TextField
            placeholder="Enter Username"
            {...register("username", {
              required: { value: true, message: "Username is required!" },
              validate: {
                notEmpty: (value) => !!value.trim() || "Username is required!",
              },
            })}
            errors={errors?.username}
          ></TextField>

          <TextField
            type="password"
            placeholder="Enter Password"
            {...register("password", {
              required: { value: true, message: "Password is required!" },
              validate: {
                required: (value) => !!value.trim() || "Password is required!",
              },
            })}
            errors={errors?.password}
          ></TextField>
          <TextButton text="Login" type="submit"></TextButton>
        </div>
      </form>
    </div>
  );
});

export default Login;
