import React from "react";
import InputWithIcon from "./InputWithIcon";
import PersonIcon from "@material-ui/icons/Person";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const LoginForm = ({ formik }) => {

  return (
    <div className="my-20 w-5/6 self-center max-w-sm">
      <InputWithIcon
        onChange={formik.handleChange}
        value={formik.values.email}
        Icon={PersonIcon}
        label="Email"
        type="text"
        name="email"
      />
      {formik.errors.email && <p className="pl-8 text-red-600 font-bold text-sm">{formik.errors.email}</p>}
      <InputWithIcon
        onChange={formik.handleChange}
        value={formik.values.password}
        Icon={VpnKeyIcon}
        label="Password"
        type="password"
        name="password"
      />
      {formik.errors.password && <p className="pl-8 text-red-600 font-bold text-sm">{formik.errors.password}</p>}

    </div>
  );
};

export default LoginForm;
