import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export function RouteGuard({ children }: { children: any }) {
  const router = useRouter();
  const [render, setRender] = useState(true);

  useEffect(() => {
    authCheck(router.asPath);

    const userLogged = !!sessionStorage.getItem("at");

    const hideContent = () => setRender(false);
    const showContent = () => {
      const url = router.asPath;
      if (userLogged) {
        setRender(url === "/home" && userLogged);
      } else {
        setRender(url === "/login" && !userLogged);
      }
    };

    router.events.on("routeChangeStart", hideContent);
    router.events.on("routeChangeComplete", showContent);

    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", showContent);
    };
  }, []);

  function authCheck(url: string) {
    const userLogged = !!sessionStorage.getItem("at");

    if (userLogged) {
      router.push({
        pathname: "/home",
      });
    } else {
      router.push({
        pathname: "/login",
      });
    }
  }

  return children;
}
