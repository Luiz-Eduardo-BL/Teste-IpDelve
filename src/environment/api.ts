import axios, { AxiosResponse } from "axios";

const token = "Bearer " + localStorage.getItem("token");

const defaultHeader = {
  accept: "application/json",
  "Content-Type": "application/json",
  Authorization: token,
};

export const postMethod = async (
  url: string,
  obj: any,
  headersParameter = defaultHeader
) => {
  let response;
  await axios
    .post(url, obj, {
      headers: headersParameter,
    })
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      response = err.response;
    });
  return response;
};

export const getMethod = async (
  url: string,
  headersParameter = defaultHeader
) => {
  let response;
  await axios
    .get(url, {
      headers: headersParameter,
    })
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      response = err.response;
    });
  return response;
};

export const putMethod = async (
  url: string,
  obj: any,
  headersParameter = defaultHeader
) => {
  let response;
  await axios
    .put(url, obj, {
      headers: headersParameter,
    })
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      response = err.response;
    });
  return response;
};

export const deleteMethod = async (
  url: string,
  headersParameter = defaultHeader
) => {
  let response;
  await axios
    .delete(url, {
      headers: headersParameter,
    })
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      response = err.response;
    });
  return response;
};

export const createUser = async (userData: any) => {
  const url = "http://localhost:8000/auth/users/";
  return await postMethod(url, userData);
};

export const verifyAccount = async (activationData: any) => {
  const url = "http://localhost:8000/auth/users/activation/";
  return await postMethod(url, activationData);
};

export const getJWT = async (loginData: any) => {
  const url = "http://localhost:8000/auth/jwt/create/";
  return await postMethod(url, loginData);
};

export const refreshAccessToken = async () => {
  const url = "http://localhost:8000/auth/jwt/refresh/";
  return await postMethod(url, {});
};

export const requestNewPassword = async (emailData: any) => {
  const url = "http://localhost:8000/auth/users/reset_password/";
  return await postMethod(url, emailData);
};

export const resetPassword = async (resetData: any) => {
  const url = "http://localhost:8000/auth/users/reset_password_confirm/";
  return await postMethod(url, resetData);
};

export const isVerify = async (uid: any, token: any) => {
  const url = "http://localhost:8000/auth/users/activation/";
  return await postMethod(url, {uid, token});
};

export const checkEmailExists = async (email: string) => {
  const url = "http://localhost:8000/auth/check-email/?email=${encodeURIComponent(email)}";
  return await getMethod(url);
};

export const accessToken = async (loginData: any) => {
  const url = "http://localhost:8000/auth/token/";
  return await postMethod(url, loginData);
}

export const logout = async () => {
  const url = "http://localhost:8000/auth/token/logout/";
  return await postMethod(url, {});
}