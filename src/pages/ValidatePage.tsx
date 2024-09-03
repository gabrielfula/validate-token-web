import { ShieldCheckIcon } from "lucide-react";
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import "../styles/validate-page.css"

export default function ValidatePage() {
  const { hash } = useParams();

  const handleOpenApp = () => {
    const appUrl = 'yourapp://';
    const fallbackUrl = 'https://apps.apple.com/app/apple-store/id6468493949';
    // const fallbackUrl = 'https://play.google.com/store/apps/details?id=br.com.eldoradoprime.app';
  
    window.location.href = appUrl;
  
    setTimeout(() => {
      window.location.href = fallbackUrl;
    }, 1000);
  };
  

  useEffect(() => {
    //fazer requisiçao para a api
  }, [hash])

  return (
    <>
    <div className="container">
    <div className="header"></div>
      <div className="content-text">
        <div className="image">
          <img src="../../../public/images/logo-absalao.png" alt="logo" />
        </div>
        <div className="content">
          <div className="content-title">
            <ShieldCheckIcon /><h1>Conta verificada</h1>
          </div>
          <div>
            Confirmamos com sucesso o seu e-mail. Você está agora habilitado(a) a explorar todas as funcionalidades do aplicativo. Por favor, retorne ao aplicativo para dar início à sua jornada.
          </div> 
        </div>
        <div className="button-content">
          <a href="{url}/{token}" className="button-link">Ir para o app</a>
        </div>
        <div>
          <p>Se você não solicitou essa validação, por favor, ignore este e-mail.</p>
          <p>Atenciosamente,<br />Equipe ABSalão</p>
        </div>
        
      </div>
    </div>

    <div className="footer">
      <div>
        <div className="icons-content">
          <a href="http://">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </div>
      </div>
      <div>
        <div className="icons-content">
          <a href="http://">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}
