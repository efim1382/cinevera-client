export default {
  email: [
    {
      validator: "required",
      message: "Email is required",
    },

    {
      validator: "minLength",
      param: 11,
      message: "Email should be length more then 10",
    },

    {
      validator: "email",
      message: "Invalid email",
    },
  ],

  password: [
    {
      validator: "required",
      message: "Password is required",
    },

    {
      validator: "minLength",
      param: 8,
      message: "Password should be length more or equal 8",
    },
  ],
};
