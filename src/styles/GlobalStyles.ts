import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --cor-roxo-escuro: #503F77;
        --cor-roxo: #6B549F;
        --cor-roxo-claro: #A296C3;
        --cor-rosa: #D662AF;
        --amarelo: #F3E838;
        --cor-branco: #F2F2F2;
        --cor-preto: #0D0D0D;
        --degrade-roxo-rosa: linear-gradient(103.5deg, var(--cor-roxo-escuro) 8%, var(--cor-rosa) 350%);
        --degrade-roxo-rosa2: linear-gradient(145deg, var(--cor-roxo-escuro) 35%, var(--cor-rosa) 100%);
        --degrade-branco-cinza: linear-gradient(90deg, #D7D7D9 0%, var(--cor-branco) 75%);
        --degrade-branco-rosa: linear-gradient(180deg, var(--cor-branco) 0%, var(--cor-rosa) 200%);
        --degrade-roxo-mono: linear-gradient(90deg, var(--cor-roxo) 40%, var(--cor-roxo-claro) 100%);
        --degrade-branco-roxo: linear-gradient(180deg, var(--cor-branco) 0%, var(--cor-roxo-claro) 100%);
        --degrade-roxo-crescente: linear-gradient(180deg, var(--cor-roxo-claro) 0%, var(--cor-roxo) 100%);
        --font-family: 'Nunito', sans-serif;
        --font-logo: 'Inter', sans-serif;
    }
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font-family: var(--font-family);
        vertical-align: baseline;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    #root {
        height: 100vh;
    }
    ul, li {
        list-style: none;
    }
    a {
        color: inherit;
        text-decoration: none;
    }      
    body {
        background-color: var(--cor-branco);
    }
    hr {
        display: block;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        margin-left: auto;
        margin-right: auto;
        height: 3px;
        width: 50%;
        background-color: var(--cor-rosa);
    }

    /* Estilos responsivos para páginas de administração */
    .admin-container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 15px;
        box-sizing: border-box;
    }

    .admin-panel {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .admin-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    .admin-content {
        overflow-x: auto;
    }

    .admin-table {
        width: 100%;
        border-collapse: collapse;
    }

    .admin-table th, 
    .admin-table td {
        padding: 12px 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    .admin-sidebar {
        background-color: #f8f9fa;
        padding: 15px;
        border-radius: 4px;
    }

    .admin-form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        max-width: 800px;
    }

    .admin-form-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .admin-form input, 
    .admin-form select, 
    .admin-form textarea {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
    }

    .admin-form button {
        padding: 10px 15px;
        background-color: var(--cor-roxo);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        align-self: flex-start;
    }

    /* Media Query para tablets (até 720px) */
    @media screen and (max-width: 720px) {
        .admin-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
        }
        
        .admin-header h1 {
            margin-bottom: 10px;
        }
        
        .admin-sidebar {
            margin-bottom: 20px;
        }
        
        .admin-form {
            max-width: 100%;
        }
        
        .admin-table th, 
        .admin-table td {
            padding: 10px 6px;
            font-size: 14px;
        }
        
        .admin-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        
        .admin-actions button {
            padding: 8px 12px;
            font-size: 14px;
        }
    }

    /* Media Query para celulares (até 520px) */
    @media screen and (max-width: 520px) {
        .admin-container {
            padding: 10px;
        }
        
        .admin-header h1 {
            font-size: 1.5rem;
        }
        
        .admin-table {
            font-size: 13px;
        }
        
        .admin-table th, 
        .admin-table td {
            padding: 8px 4px;
        }
        
        .admin-form-group label {
            font-size: 14px;
        }
        
        .admin-form input, 
        .admin-form select, 
        .admin-form textarea {
            padding: 8px;
        }
        
        .admin-form button {
            width: 100%;
        }
        
        /* Converter tabelas para visualização em cards para telas pequenas */
        .admin-table, 
        .admin-table thead, 
        .admin-table tbody, 
        .admin-table th, 
        .admin-table td, 
        .admin-table tr {
            display: block;
        }
        
        .admin-table thead tr {
            position: absolute;
            top: -9999px;
            left: -9999px;
        }
        
        .admin-table tr {
            border: 1px solid #ccc;
            margin-bottom: 15px;
            border-radius: 4px;
        }
        
        .admin-table td {
            border: none;
            border-bottom: 1px solid #eee;
            position: relative;
            padding-left: 50%;
            text-align: right;
        }
        
        .admin-table td:before {
            position: absolute;
            top: 6px;
            left: 6px;
            width: 45%;
            padding-right: 10px;
            white-space: nowrap;
            content: attr(data-column);
            color: var(--cor-preto);
            font-weight: bold;
            text-align: left;
        }
        
        .admin-table td:last-child {
            border-bottom: 0;
        }
        
        /* Ajustes para menus e navegação */
        .admin-nav {
            width: 100%;
        }
        
        .admin-nav ul {
            display: flex;
            flex-direction: column;
            padding: 0;
            margin: 0;
            list-style: none;
        }
        
        .admin-nav li {
            margin-bottom: 8px;
        }
        
        .admin-nav a {
            display: block;
            padding: 10px;
            background-color: #f0f0f0;
            border-radius: 4px;
            text-align: center;
        }
    }
`;
