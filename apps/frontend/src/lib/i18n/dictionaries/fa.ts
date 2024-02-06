const dictionary = {
  posts: "پست‌ها",
  general: {
    email: "ایمیل",
    password: "رمز عبور",
    firstName: "نام",
    lastName: "نام خانوادگی",
    submit: "ارسال",
  },
  validations: {
    required: "الزامی است",
    emailInvalid: "لطفاً یک آدرس ایمیل معتبر وارد کنید",
    passwordInvalid: "رمز عبور باید حداقل 8 کاراکتر داشته باشد و شامل حروف کوچک، حروف بزرگ و عدد باشد",
    minLength: "باید حداقل {minLength} کاراکتر باشد",
    maxLength: "نباید بیشتر از {maxLength} کاراکتر باشد",
    userExists: "کاربر از قبل وجود دارد",
  },
  httpError: {
    400: "درخواست نامعتبر",
    401: "غیرمجاز",
    403: "ممنوع",
    404: "یافت نشد",
    409: "تضاد",
    429: "تعداد درخواست‌های زیاد",
    500: "خطای سرور",
    unknown: "خطای ناشناخته",
  },
};
export default dictionary;
