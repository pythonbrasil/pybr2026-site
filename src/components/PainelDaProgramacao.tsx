import './styles/PainelDaProgramacao.css'
import { useState } from "react";
import dot1 from '/img/components/painelDaProgramacao/dot1.png'
import dot2 from '/img/components/painelDaProgramacao/dot2.png'
import { useTranslation } from "react-i18next";

const datas = [
  {'data' : {'br' : 'Qua, 14', 'en' : 'Wed, 14', 'es' : 'Mié, 14'},
   'info' : [
      {
         'id' : 1,
         'horario' : '7:00',
         'duracao' : '3:00',
         'nivel' : {
              'br' : 'Iniciante',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
          },
         'atividade' : {
              'br' : 'Tutorial',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
         },
         'titulo' : {
              'br' : 'Python para Finanças: Primeiros Passos',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
          }
          ,
         'descricao' : {
              'br' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
              'en' : 'Em ingles',
              'es' : 'Em espanhol',
          },
         'palestrante' : [
           {
             'nome' : 'Ana Silva',
             'foto' : dot1
           },
           {
             'nome' : 'Carlos Mendes',
             'foto' : dot2
           },
         ]
      },
      {
         'id' : 2,
         'horario' : '7:00',
         'duracao' : '3:00',
         'nivel' : {
              'br' : 'Iniciante',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
          },
         'atividade' : {
              'br' : 'Debate',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
         },
         'titulo' : {
              'br' : 'Python para Finanças: Primeiros Passos',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
          }
          ,
         'descricao' : {
              'br' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
              'en' : 'Em ingles',
              'es' : 'Em espanhol',
          },
         'palestrante' : [
           {
             'nome' : 'Carlos Mendes',
             'foto' : dot2
           },
         ]
      },
      {
         'id' : 3,
         'horario' : '7:00',
         'duracao' : '3:00',
         'nivel' : {
              'br' : 'Iniciante',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
          },
         'atividade' : {
              'br' : 'Palestra',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
         },
         'titulo' : {
              'br' : 'Python para Finanças: Primeiros Passos',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
          }
          ,
         'descricao' : {
              'br' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
              'en' : 'Em ingles',
              'es' : 'Em espanhol',
          },
         'palestrante' : [
           {
             'nome' : 'Ana Silva',
             'foto' : dot1
           },
           {
             'nome' : 'Carlos Mendes',
             'foto' : dot2
           },
         ]
      },
      {
         'id' : 4,
         'horario' : '7:00',
         'duracao' : '3:00',
         'nivel' : {
              'br' : 'Iniciante',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
          },
         'atividade' : {
              'br' : 'Tutorial',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
         },
         'titulo' : {
              'br' : 'Python para Finanças: Primeiros Passos',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
          }
          ,
         'descricao' : {
              'br' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
              'en' : 'Em ingles',
              'es' : 'Em espanhol',
          },
         'palestrante' : [
           {
             'nome' : 'Ana Silva',
             'foto' : dot1
           },
         ]
      },
    ]
  },
  {'data' : {'br' : 'Qua, 14', 'en' : 'Wed, 14', 'es' : 'Mié, 14'},
   'info' : 
   [
    {
      'id' : 4,
      'horario' : 'n/a',
      'duracao' : 'n/a',
      'nivel' : {
              'br' : 'Iniciante',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
          },
         'atividade' : {
              'br' : 'Tutorial',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
         },
      'titulo' : {
              'br' : 'Python para Finanças: Primeiros Passos dia15',
              'en' : 'Em ingles',
              'es' : 'Em espanhol'
          }
          ,
      'descricao' : {
          'br' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
          'en' : 'Em ingles',
          'es' : 'Em espanhol',
        },
      'palestrante' : [
        {
          'nome' : 'n/a',
          'foto' : "n/a"
        },
        {
          'nome' : 'n/a',
          'foto' : 'n/a'
        },
      ]
    }
   ]
  },
  {'data' : {'br' : 'Qua, 14', 'en' : 'Wed, 14', 'es' : 'Mié, 14'},
   'info' : 
   [
    {
      'id' : 4,
      'horario' : 'n/a',
      'duracao' : 'n/a',
      'nivel' : {
           'br' : 'Iniciante',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
      },
      'atividade' : {
           'br' : 'Tutorial',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
      },
      'titulo' : {
           'br' : 'Python para Finanças: Primeiros Passos dia16',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
       },
      'descricao' : {
           'br' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
           'en' : 'Em ingles',
           'es' : 'Em espanhol',
       },
      'palestrante' : [
        {
          'nome' : 'n/a',
          'foto' : "n/a"
        },
        {
          'nome' : 'n/a',
          'foto' : 'n/a'
        },
      ]
    }
   ]
  },
  {'data' : {'br' : 'Qua, 14', 'en' : 'Wed, 14', 'es' : 'Mié, 14'},
   'info' : 
   [
    {
      'id' : 4,
      'horario' : 'n/a',
      'duracao' : 'n/a',
      'nivel' : {
           'br' : 'Iniciante',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
       },
      'atividade' : {
           'br' : 'Tutorial',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
      },
      'titulo' : {
           'br' : 'Python para Finanças: Primeiros Passos dia17',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
       },
      'descricao' : {
           'br' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
           'en' : 'Em ingles',
           'es' : 'Em espanhol',
       },
      'palestrante' : [
        {
          'nome' : 'n/a',
          'foto' : "n/a"
        },
        {
          'nome' : 'n/a',
          'foto' : 'n/a'
        },
      ]
    }
   ]
  },
  {'data' : {'br' : 'Qua, 14', 'en' : 'Wed, 14', 'es' : 'Mié, 14'},
   'info' : 
   [
    {
      'id' : 4,
      'horario' : 'n/a',
      'duracao' : 'n/a',
      'nivel' : {
           'br' : 'Iniciante',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
       },
      'atividade' : {
           'br' : 'Tutorial',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
      },
      'titulo' : {
           'br' : 'Python para Finanças: Primeiros Passos dia18',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
       },
      'descricao' : {
           'br' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
           'en' : 'Em ingles',
           'es' : 'Em espanhol',
       },
      'palestrante' : [
        {
          'nome' : 'n/a',
          'foto' : "n/a"
        },
        {
          'nome' : 'n/a',
          'foto' : 'n/a'
        },
      ]
    }
   ]
  },
  {'data' : {'br' : 'Qua, 14', 'en' : 'Wed, 14', 'es' : 'Mié, 14'},
   'info' : 
   [
    {
      'id' : 4,
      'horario' : 'n/a',
      'duracao' : 'n/a',
      'nivel' : {
           'br' : 'Iniciante',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
       },
      'atividade' : {
           'br' : 'Tutorial',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
      },
      'titulo' : {
           'br' : 'Python para Finanças: Primeiros Passos dia19',
           'en' : 'Em ingles',
           'es' : 'Em espanhol'
       },
      'descricao' : {
           'br' : 'Introdução prática ao uso de Python para analisar dados financeiros básicos, criar gráficos e calcular indicadores com Pandas.',
           'en' : 'Em ingles',
           'es' : 'Em espanhol',
       },
      'palestrante' : [
        {
          'nome' : 'n/a',
          'foto' : "n/a"
        },
        {
          'nome' : 'n/a',
          'foto' : 'n/a'
        },
      ]
    }
   ]
  },
]

type Lang = 'br' | 'en' | 'es'

export default function PainelDaProgramacao() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Lang
  const [indexAtivo, setIndex] = useState(0);
  const [indexAtivoFiltroPalestras, setIndexAtivoFiltroPalestras] = useState("Todos");

  const palestrasFiltradas = datas[indexAtivo]['info'].filter((palestra) => {
    if (indexAtivoFiltroPalestras === "Todos") return true;
    return palestra.atividade.br === indexAtivoFiltroPalestras;
  });

  return (<div className='datas'>
      <div className='painel_das_palestras'>

      <div className='painel_filtro_de_palestras'>
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
          <h6 onClick={() => setIndexAtivoFiltroPalestras("Debate")}
              className={`painel_filtro_de_palestras_opcao ${indexAtivoFiltroPalestras == "Debate" ? "selecionado" : ""}`}>
            {t("painelDaProgramacao.debates")}
          </h6>
        </div>
      </div>

      <div className='painel_de_datas'>
        {datas.map((data, index) => (
          <div  className={`datas_palestras ${index === indexAtivo ? "ativo" : ""}`}
                key={index} onClick={() => setIndex(index)}>
            <h2>{data.data[lang]}</h2>
          </div>
        ))}
      </div>

      <div className='todas_palestras'>
        {palestrasFiltradas.map((data, index) => (
          <div className='card_palestra' key={index}>
            <div className='card_palestra_infos_1'>
              <h6 className='card_palestra_infos_1_horario'>{data['horario']}</h6>
              <h6 className='card_palestra_infos_1_duracao'>{data['duracao']}</h6>
              <h6 className='card_palestra_infos_1_nivel'>{data['nivel'][lang]}</h6>
              <h6 className='card_palestra_infos_1_atividade'>{data['atividade'][lang]}</h6>
            </div>
            <div className='card_palestra_infos_2'>
              <h3 className='card_palestra_infos_2_titulo'>{data['titulo'][lang]}</h3>
              <h3 className='card_palestra_infos_2_descricao'>{data['descricao'][lang]}</h3>
            </div>
            <div className='card_palestra_infos_3'>
              {data.palestrante.length > 1 ? (
                <>
                <div className='card_palestra_infos_3_fotos'>
                {data.palestrante.map ((data_palestrante, index_foto) => (
                  <img key={index_foto} src={data_palestrante['foto']} alt="" />
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
                    <img key={index} src={data.palestrante[0].foto} alt="" />
                    <h3 key={index}>{data.palestrante[0].nome}</h3>
                  </>
                )}
            </div>
          </div>    
        ))}          
      </div>
      </div>
  </div>)
}