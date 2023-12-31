import './Filters.css'
import React, { useState } from 'react';
import GridViewIcon from '@mui/icons-material/GridView';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CriarComunidade from '../CriarComunidade/CriarComunidade';
import CriarDiscussao from '../CriarDiscussao/CriarDiscussao';
import UserIcon from '../../../assets/user.svg';
import MenuHamburger from '../../../assets/Hamburger_menu.png';

const Filters = ({ showHeaderCommunity, exibirGenero }: { showHeaderCommunity: boolean, exibirGenero: boolean}) => {

    const [showCriarComunidade, setshowCriarComunidade] = useState(false);

    const openCriarComunidade = () => {
        setshowCriarComunidade(true);
    }

    const closeCriarComunidade = () => {
        setshowCriarComunidade(false);
    }

    const [showCriarDiscussao, setshowCriarDiscussao] = useState(false);


    const openCriarDiscussao = () => {
        setshowCriarDiscussao(true);
    }

    const closeCriarDiscussao = () => {
        setshowCriarDiscussao(false);
    }

    const [selectedItem, setSelectedItemComunidade] = useState('todas');

    const handleSelectItemComunidade = (item: any) => {
        setSelectedItemComunidade(item);
        {/*itemComunidade(item);*/}
    };

    return (
        <aside className="container-filtro">
            <img src={MenuHamburger} className="menu-hamburger" alt="" />
            <div className="box-filtro">

                <div className={showHeaderCommunity ? 'header-comunidades block' : 'header-none'}>
                    <li onClick={() => handleSelectItemComunidade('todas')}>
                        <div className="icons-communities"><GridViewIcon /></div>
                        <p className={selectedItem === "todas" ? "select-comunidades" : ""}>Todas as Comunidades</p>
                    </li>
                    <li onClick={() => handleSelectItemComunidade('minhas')}>
                        <img src={UserIcon} className="icons-communities" />
                        <p className={selectedItem === "minhas" ? "select-comunidades" : ""}>Minhas Comunidades</p>
                    </li>
                    <li onClick={openCriarComunidade}><span className='btn-comunidades'><ChatBubbleOutlineIcon /><button>Criar Comunidade</button></span></li>
                    <li onClick={openCriarDiscussao}><span className='btn-comunidades'><ChatBubbleOutlineIcon /><button>Criar discussão</button></span></li>
                    <CriarComunidade showCriarComunidade={showCriarComunidade} closeCriarComunidade={closeCriarComunidade} />
                    <CriarDiscussao showCriarDiscussao={showCriarDiscussao} closeCriarDiscussao={closeCriarDiscussao}/>
                </div>

                <h3 className="titulos">Filtros</h3>

                <div className="block">
                    <h4 className="tilte-block">Dificuldade</h4>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Iniciante</label>
                    </div>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Intermediário</label>
                    </div>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Avançando</label>
                    </div>
                </div>

                <div className="block">
                    <h4 className="tilte-block">Instrumeto</h4>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Violão/Guitarra</label>
                    </div>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Baixo</label>
                    </div>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Piano</label>
                    </div>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Ukulele</label>
                    </div>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Bateria</label>
                    </div>

                </div>
                <div className={exibirGenero ? "block" : "block-none"}>
                    <h4 className="tilte-block">Genêro</h4>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Rock</label>
                    </div>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Pop</label>
                    </div>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Gospel</label>
                    </div>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Sertanejo</label>
                    </div>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Clássico</label>
                    </div>

                </div>


            </div>


        </aside>
    )
}

export default Filters;