import Yup from "yup";

export let storeUser= Yup.object().shape({
    username: Yup.string()
        .required("نام و نام خانوادگی الزامی می باشد")
        .min(4, "نام و نام خانوادگی نباید کمتر از 4 کاراکتر باشد")
        .max(255, "نام و نام خانوادگی نباید بیشتر از 255 کاراکتر باشد"),
    email: Yup.string()
        .email("ایمیل معتبر نمی باشد")
        .required("ایمیل الزامی می باشد"),
    password: Yup.string()
        .min(4, "کلمه عبور نباید کمتر از 4 کاراکتر باشد")
        .max(255, "کلمه عبور نباید بیشتر از 255 کاراکتر باشد")
        .required("کلمه عبور الزامی می باشد"),
    rePassword: Yup.string()
        .required("تکرار کلمه عبور الزامی می باشد")
        .oneOf([Yup.ref("password"), null] , 'کلمه عبور و تکرار آن برابر نمی باشند .'),
});