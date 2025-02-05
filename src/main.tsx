import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import CadastroProduto from './componentes/cadastroproduto/CadastroProduto';
import AlterarProduto from './componentes/alterarproduto/AlterarProduto';
import Header from './componentes/header/Header.tsx';
import ListagemLojas from './componentes/listagemlojas/ListagemLojas.tsx';

import './index.css'
const router = createBrowserRouter([
    {
        path: "/",
        element: <><Header/><App /></>,
      },
      {
        path: "/cadastro-produto",
        element: <><Header/><CadastroProduto/></>,
      },
      {
        path: "/alterar-produto/:id",
        element: <><Header/><AlterarProduto/></>,
      },
      {
        path: "/listagem-lojas",
        element: <><Header/><ListagemLojas/></>,
      }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)