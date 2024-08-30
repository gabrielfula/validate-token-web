import { ShieldCheckIcon } from "lucide-react";
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import "../styles/validate-page.css"

export default function ValidatePage() {
  const { hash } = useParams();

  const handleOpenApp = () => {
    const appUrl = 'yourapp://';
    const fallbackUrl = 'https://play.google.com/store/apps/details?id=com.example.yourapp';
  
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
        <div className="title-content">
          <div>
            <ShieldCheckIcon />
            <h1>Conta verificada</h1>
          </div>
          <div className="content">
            <p>Parabéns! Seu e-mail foi confirmado com sucesso. Agora você está pronto para explorar todas as funcionalidades do nosso aplicativo. Volte para o aplicativo e inicie sua jornada!</p>
            <button onClick={handleOpenApp} className="open-app-button">
              Abrir Aplicativo
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
