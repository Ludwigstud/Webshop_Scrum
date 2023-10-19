import { useContext, createContext } from "react";



const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
  };

export const AuthProvider = ({children}) => {
    const url = "https://localhost:7042/api/auth";


    const signUp = async (signUpSchema, setSuccess) => {
        const res = await fetch(`${url}/signup`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signUpSchema),
        });
        if (res.status === 201) {
          setSuccess(true)
        }
      };

    const signIn = async (signInSchema, setLoginChecker, loginChecker) => {
        const res = await fetch(`${url}/signin`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signInSchema),
        });
    
        if (res.status === 200) {
          const data = await res.text();
          if(signInSchema.rememberMe === true){
            localStorage.setItem("accessToken", data);
          }
          else{
            sessionStorage.setItem("accessToken", data);
          }
          setLoginChecker(null);
          return loginChecker;
        }
        if(res.status === 400){
          setLoginChecker(true);
          return loginChecker;
        }
        if(res.status === 500){
          setLoginChecker(false);
          return loginChecker;
        }
      };

      const signout = () => {
        localStorage.removeItem("accessToken");
        sessionStorage.removeItem("accessToken");
      }

    return <AuthContext.Provider value={{signIn, signUp, signout}}>
        {children}
    </AuthContext.Provider>
}