import './styles/PainelDaProgramacao.css'
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { activities } from '../data/AllActivities';
import { Image } from './Image';
import star from '/star.svg'

type Lang = 'br' | 'en' | 'es'

export const PainelDaProgramacao = (
    {counterCat} : any
) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Lang
  const [indexAtivo, setIndex] = useState(0);
  const [menuDeSalasOpen, setMenuDeSalasOpen] = useState(false);
  const [indexAtivoFiltroPalestras, setIndexAtivoFiltroPalestras] = useState("Todos");
  const [indexAtivoFiltroSala, setIndexAtivoFiltroSala] = useState("Todas");
  const [favoriteActive, setFavoriteActive] = useState(false);
  const [favoritos, setFavoritos] = useState(() => {
    const favoritosSalvos = localStorage.getItem("palestras_favoritas");
    return favoritosSalvos ? JSON.parse(favoritosSalvos) : [];
  });

  const salasDisponiveis = [
    ...new Map(
      activities[indexAtivo].info.map((palestra) => [
        palestra.sala.br,
        palestra.sala,
      ])
    ).values(),
  ];

  const palestrasFiltradas = activities[indexAtivo].info.filter((palestra) => {

    const pertenceAoFiltro =
      indexAtivoFiltroPalestras === "Todos" ||
      palestra.atividade.br === indexAtivoFiltroPalestras;

    const pertenceAoFiltroSala =
      indexAtivoFiltroSala === "Todas" ||
      palestra.sala.br === indexAtivoFiltroSala;

    const eFavorito =
      favoritos.includes(String(palestra.id));

    return (
      pertenceAoFiltro &&
      pertenceAoFiltroSala &&
      (!favoriteActive || eFavorito)
    );
  });

  const adicionarRemoverFavorito = (id: number) => {
    const idString = String(id);

    setFavoritos((favoritosAtuais : any) => {
      if (favoritosAtuais.includes(idString)) {
        return favoritosAtuais.filter((favorito : any) => favorito !== idString);
      }

      return [...favoritosAtuais, idString];
    });
  };

  useEffect(() => {
    localStorage.setItem("palestras_favoritas", JSON.stringify(favoritos));
    console.warn("Se você consegue ler essa mensagem, deve conseguir entender bem o que vou explicar: todo o sistema de salvamento é local, então é por isso que se você salvou no seu celular, o salvamento não passou pro seu computador :D")
  }, [favoritos]);

  return (<div className='datas'>
      <div className='painel_das_palestras'>

      <div className='painel_filtro_de_palestras'>
        <div className='painel_filtro_de_palestras_esquerda'>
          <h5>{t("painelDaProgramacao.filtrarPor")}</h5>
          <div className='painel_filtro_de_palestras_todas_opcoes'>
            <h6 onClick={() => setIndexAtivoFiltroPalestras("Todos")}
                className={`painel_filtro_de_palestras_opcao ${indexAtivoFiltroPalestras == "Todos" ? "selecionado" : ""}`}>
              {t("painelDaProgramacao.todos")}
            </h6>
            <h6 onClick={() => setIndexAtivoFiltroPalestras("Palestra")}
                className={`painel_filtro_de_palestras_opcao ${indexAtivoFiltroPalestras == "Palestra" ? "selecionado" : ""}`}>
              {t("painelDaProgramacao.palestras")}
            </h6>
            <h6 onClick={() => setIndexAtivoFiltroPalestras("Tutorial")}
                className={`painel_filtro_de_palestras_opcao ${indexAtivoFiltroPalestras == "Tutorial" ? "selecionado" : ""}`}>
              {t("painelDaProgramacao.tutoriais")}
            </h6>
            <div 
              className={`painel_filtro_de_palestras_opcao ${indexAtivoFiltroSala == "Todas" ? "" : "selecionado"}`}
              onClick={() => setMenuDeSalasOpen(!menuDeSalasOpen)}
            >
              <h6>
                {indexAtivoFiltroSala === "Todas" ? "Selecionar sala" : indexAtivoFiltroSala}
              </h6>
              <div className={`menu_de_salas ${menuDeSalasOpen ? "ativo" : ""}`}>
                <h6 onClick={() => setIndexAtivoFiltroSala("Todas")}>Todas</h6>
                {salasDisponiveis.map((sala) => (
                  <h6 
                    key={sala.br}
                    onClick={() => setIndexAtivoFiltroSala(sala.br)}
                  >
                    {sala[lang]}
                  </h6>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={`estrela_favorito ${favoriteActive ? "ativado" : ""}`}>
          <img 
            src={star}
            alt="Estrela de marcação de favoritos"
            onClick={() => setFavoriteActive(!favoriteActive)}
          />
        </div>
      </div>

      <div className='painel_de_datas'>
        {activities.map((data, index) => (
          <div  className={`datas_palestras ${index === indexAtivo ? "ativo" : ""}`}
                key={index} onClick={() => setIndex(index)}>
            <h2>{data.data[lang]}</h2>
          </div>
        ))}
      </div>

      <div className='todas_palestras'>
        {palestrasFiltradas.map((data, _index) => (
          <div 
            className='card_palestra' 
            key={data.id} 
            onClick={() => window.open(data.link, '_blank')}
          >
            <div className='card_palestra_infos'>
              <div className='card_palestra_infos_1'>
                <h6 className='card_palestra_infos_1_horario'>{data['horario']}</h6>
                <h6 className='card_palestra_infos_1_duracao'>{data['duracao']}</h6>
                <h6 className='card_palestra_infos_1_nivel'>{data['nivel'][lang]}</h6>
                <h6 className='card_palestra_infos_1_atividade'>{data['atividade'][lang]}</h6>
                <h6 className='card_palestra_infos_1_atividade'>{data['sala'][lang]}</h6>
              </div>
              <div className={`estrela_favorito ${favoritos.includes(String(data.id)) ? "ativado" : ""}`}>
                <img 
                  src={star}
                  alt="Estrela de marcação de favoritos"
                  onClick={(e) => {
                    e.stopPropagation();
                    adicionarRemoverFavorito(data.id);
                  }}
                />
              </div>
            </div>
            <div className='card_palestra_infos_2'>
              <h3 className='card_palestra_infos_2_titulo'>{data['titulo'][lang]}</h3>
              {/* <h3 className='card_palestra_infos_2_descricao'>{data['descricao'][lang]}</h3> */}
            </div>
            <div className='card_palestra_infos_3'>
              {data.palestrante.length > 1 ? (
                <>
                  <div className='card_palestra_infos_3_fotos'>
                    {data.palestrante.map ((data_palestrante, index_foto) => (
                      <Image 
                          key={index_foto}
                          image={data_palestrante['foto']} 
                          alt="foto do palestrante"
                          counterCat={counterCat}
                      />
                    ))}
                  </div>
                  <div className='card_palestra_infos_3_nomes'>
                    {data.palestrante.map ((data_palestrante, index_nome) => (
                        <h3 key={index_nome}>{data_palestrante['nome']}</h3>
                    ))}
                  </div>
                </>
                ) : (
                  <>
                    <Image 
                        image={data.palestrante[0].foto} 
                        alt="foto do palestrante"
                        counterCat={counterCat}
                    />
                    <h3>{data.palestrante[0].nome}</h3>
                  </>
                )}
            </div>
          </div>    
        ))}          
      </div>
      </div>
  </div>)
}