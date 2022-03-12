export const loginInputHandler = (e) => {
    return {type : "handleLoginInput",payload:e}
}

export const otpInputHandler = (e) => {
    return {type : "handleOtpInput",payload:e}
}

export const otpInputToggle = () => {
    return {type:"toggleOtpBox"}
}
