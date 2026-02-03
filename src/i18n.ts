import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      br: {
        translation : {
            header: {
                OEvento: "O Evento",
                Programacao: "Programação",
                ComprarIngresso : "Comprar Ingressos!",
                menu : {
                inicio : "INÍCIO",
                oEvento : "O EVENTO",
                programacao : "PROGRAMAÇÃO",
                guiaDaCidade: "GUIA DA CIDADE",
                patrocinadores : "PATROCINADORES",
                contato : "CONTATO",
                ComprarIngresso : "Comprar Ingressos!",
                planoDePatrocinio : "Plano de Patrocínio",
                fechar : "Fechar"
              }
            },
            footer : {
                site : 'Site',
                inicio : "Início",
                oEvento : "O evento",
                programacao : "Programação",
                guiaDaCidade : "Guia da cidade",
                patrocinadores : "Patrocinadores",
                contato : "Contato",
                inscrevaSe : "Inscreva-se",
                nossasRedes : "Nossas redes",
                linksDaAPyB : "Links da APyB",
                codigoDeConduta : "Código de conduta",
                formulario : "Formulário para relatos do Código de conduta",
                comprarIngressos : "Comprar Ingressos!",
                planoDePatrocinio : "Plano de Patrocínio",
                politicasDePrivacidade : "Politicas de privacidade"
            },
            carrossel : {
                pelaComunidade : "pela comunidade",
                paraComunidade : "para comunidade"
            },
            buttonPrincipal : {
                ingressos : "ingressos",
                planoDePatrocinio : "Plano de Patrocínio",
                linkPlanoDePatrocinio : "https://www.canva.com/design/DAG4CpYjEEA/80Fj01pDqqpzqmK7rWSCIg/view?utlId=h48bf80d827"
            },
            painelDaProgramacao : {
                filtrarPor : "Filtrar por:",
                todos : "Todos",
                palestras : "Palestras",
                tutoriais : "Tutoriais",
                debates : "Debates",
            },
            home : {
                section2 : {
                    paragrafo1 : "A <1>Python Brasil 2026</1> é a maior conferência sobre linguagem de programação Python do Brasil e da América Latina.",
                    paragrafo2 : "Serão 5 dias de imersão com atividades que vão desde contribuir para projetos de software livre, participar de treinamentos e adquirir novos conhecimentos com profissionais renomados da comunidade.",
                    paragrafo3 : "A edição de 2026 está sendo organizada pela comunidade Python de <1>Florianópolis/SC</1> com o apoio da APyB (Associação Python Brasil)"
                },
                section3 : {},
                section4 : {
                    submissaoDeAtividades : "Submissão de Atividades",
                    enviarAtividade : "Enviar Atividade",
                    regulamento : "Regulamento",
                    paragrafo1 : "Acompanhe as novidades nas nossas redes sociais"
                },
                section5 : {
                    guiaDaCidade : "Guia da Cidade",
                    paragrafo1 : "Em outubro, em Florianópolis, você pode aproveitar as praias (ainda não tão cheias), fazer trilhas, explorar o centro histórico, visitar o Projeto Tamar, relaxar em parques, curtir a gastronomia local e aproveitar ao máximo a Python Brasil 2026 com um clima fresco.",
                    paragrafo2 : "A cidade está na primavera, com um clima que combina dias quentes e ensolarados com possibilidade de chuvas e dias nublados.",
                    paragrafo3 : "Preparamos um guia do que fazer nas proximidades do evento e também passeios pela cidade, conheça:"
                },
                section6 : {
                    localizacao : "Localização",
                    palestras : "Palestras",
                    palestrasData : "14 a 19 de Outubro",
                    paragrafo1 : "Dias principais do evento, espaços para job fair, network, palestras de diversos temas acontecendo simultaneamente.",
                    plantaDoEvento : "Planta do Evento",
                    verNoMapa : "Ver no mapa",
                    tutoriais : "Tutoriais",
                    aDefinir : "A definir"
                },
                section7 : {
                    patrocinadores : "Patrocinadores",
                    ouro : "Ouro",
                    prata : "Prata",
                    bronze : "Bronze",
                    apoiador : "Apoiador",
                    comunidade : "Comunidade"
                }
            },
            faq : {
                perguntasFrequentes : "Perguntas frequentes",
                perguntas : [
                    {
                        pergunta : "Qual a programação do evento?",
                        resposta : "A Python Brasil 2025 é o maior encontro da comunidade Python do Brasil. O evento reúne pessoas desenvolvedoras, entusiastas, pesquisadoras e empresas para compartilhar conhecimento, experiências e fortalecer a comunidade."
                    },
                    {
                        pergunta: "Ganho certificado por participar da Python Brasil 2025?",
                        resposta: "A Python Brasil 2025 é o maior encontro da comunidade Python do Brasil. O evento reúne pessoas desenvolvedoras, entusiastas, pesquisadoras e empresas para compartilhar conhecimento, experiências e fortalecer a comunidade."
                    },
                    {
                        pergunta: "Quem organiza a Python Brasil?",
                        resposta: "A Python Brasil 2025 é o maior encontro da comunidade Python do Brasil. O evento reúne pessoas desenvolvedoras, entusiastas, pesquisadoras e empresas para compartilhar conhecimento, experiências e fortalecer a comunidade."
                    },
                    {
                        pergunta: "Quais as condições para adquirir um ingresso de meia entrada?",
                        resposta: "A Python Brasil 2025 é o maior encontro da comunidade Python do Brasil. O evento reúne pessoas desenvolvedoras, entusiastas, pesquisadoras e empresas para compartilhar conhecimento, experiências e fortalecer a comunidade."
                    },
                ]
            }
        }
      },
      en: {
        translation : {
            header: {
                OEvento: "The event",
                Programacao: "Schedule",
                ComprarIngresso : "Buy Tickets!",
                menu: {
                  inicio: "HOME",
                  oEvento: "THE EVENT",
                  programacao: "SCHEDULE",
                  guiaDaCidade: "CITY GUIDE",
                  patrocinadores: "SPONSORS",
                  contato: "CONTACT",
                  ComprarIngresso: "Buy Tickets!",
                  planoDePatrocinio: "Sponsorship Plan",
                  fechar : "Close"
                }
            },
            footer: {
                site: "Website",
                inicio: "Home",
                oEvento: "The Event",
                programacao: "Schedule",
                guiaDaCidade: "City Guide",
                patrocinadores: "Sponsors",
                contato: "Contact",
                inscrevaSe: "Sign Up",
                nossasRedes: "Our Social Media",
                linksDaAPyB: "APyB Links",
                codigoDeConduta: "Code of Conduct",
                formulario: "Code of Conduct Report Form",
                comprarIngressos: "Buy Tickets!",
                planoDePatrocinio: "Sponsorship Plan",
                politicasDePrivacidade: "Privacy Policy"
            },
            carrossel: {
              pelaComunidade: "by the community",
              paraComunidade: "for the community"
            },
            buttonPrincipal : {
                ingressos : "Tickets!",
                planoDePatrocinio : "Sponsorship Plan",
                linkPlanoDePatrocinio : "https://www.canva.com/design/DAG4Csp6jow/oHUHIyoYvfHk2yE_s2Y_DQ/view?utlId=hc697b2b93b"
            },
            painelDaProgramacao: {
                filtrarPor: "Filter by:",
                todos: "All",
                palestras: "Talks",
                tutoriais: "Tutorials",
                debates: "Debates",
            },
            home : {
                section2: {
                  paragrafo1: "The <1>Python Brazil 2026</1> is the largest conference focused on the Python programming language in Brazil and Latin America.",
                  paragrafo2: "There will be 5 days of immersion with activities ranging from contributing to open source projects, participating in training sessions, and gaining new knowledge from renowned professionals in the community.",
                  paragrafo3: "The 2026 edition is being organized by the Python community of <1>Florianópolis/SC</1> with the support of APyB (Python Brazil Association)."
                },
                section3 : {},
                section4: {
                    submissaoDeAtividades: "Activity Submission",
                    enviarAtividade: "Submit Activity",
                    regulamento: "Regulations",
                    paragrafo1: "Follow the latest updates on our social media"
                },
                section5: {
                    guiaDaCidade: "City Guide",
                    paragrafo1: "In October, in Florianópolis, you can enjoy the beaches (not too crowded yet), go hiking, explore the historic center, visit Projeto Tamar, relax in parks, enjoy the local cuisine, and make the most of Python Brasil 2026 with cool weather.",
                    paragrafo2: "The city is in spring, with a climate that combines warm, sunny days with the possibility of rain and cloudy days.",
                    paragrafo3: "We have prepared a guide on what to do near the event as well as tours around the city. Discover:"
                },
                section6: {
                    localizacao: "Location",
                    palestras: "Talks",
                    palestrasData: "October 14–19",
                    paragrafo1: "Main days of the event, with spaces for the job fair, networking, and talks on various topics happening simultaneously.",
                    plantaDoEvento: "Event Map",
                    verNoMapa: "View on map",
                    tutoriais: "Tutorial Sessions",
                    aDefinir: "To be defined"
                },
                section7: {
                    patrocinadores: "Sponsors",
                    ouro: "Gold",
                    prata: "Silver",
                    bronze: "Bronze",
                    apoiador: "Supporter",
                    comunidade: "Community"
                }
            },
            faq: {
                perguntasFrequentes: "Frequently Asked Questions",
                perguntas: [
                    {
                        pergunta : "What is the event schedule?",
                        resposta : "Python Brasil 2025 is the largest gathering of the Python community in Brazil. The event brings together developers, enthusiasts, researchers, and companies to share knowledge, experiences, and strengthen the community."
                    },
                    {
                        pergunta : "Do I receive a certificate for participating in Python Brasil 2025?",
                        resposta : "Python Brasil 2025 is the largest gathering of the Python community in Brazil. The event brings together developers, enthusiasts, researchers, and companies to share knowledge, experiences, and strengthen the community."
                    },
                    {
                        pergunta : "Who organizes Python Brasil?",
                        resposta : "Python Brasil 2025 is the largest gathering of the Python community in Brazil. The event brings together developers, enthusiasts, researchers, and companies to share knowledge, experiences, and strengthen the community."
                    },
                    {
                        pergunta : "What are the conditions to purchase a discounted (half-price) ticket?",
                        resposta : "Python Brasil 2025 is the largest gathering of the Python community in Brazil. The event brings together developers, enthusiasts, researchers, and companies to share knowledge, experiences, and strengthen the community."
                    }
                ]
            }
        }
      },
      es: {
        translation : {
            header: {
                OEvento: "El evento",
                Programacao: "Cronograma",
                ComprarIngresso : "¡Compra entradas!",
                menu: {
                  inicio: "INICIO",
                  oEvento: "EL EVENTO",
                  programacao: "PROGRAMACIÓN",
                  guiaDaCidade: "GUÍA DE LA CIUDAD",
                  patrocinadores: "PATROCINADORES",
                  contato: "CONTACTO",
                  ComprarIngresso: "¡Comprar Entradas!",
                  planoDePatrocinio: "Plan de Patrocinio",
                  fechar : "Cerrar"
                }
            },
            footer: {
                site: "Sitio",
                inicio: "Inicio",
                oEvento: "El Evento",
                programacao: "Programación",
                guiaDaCidade: "Guía de la ciudad",
                patrocinadores: "Patrocinadores",
                contato: "Contacto",
                inscrevaSe: "Inscríbete",
                nossasRedes: "Nuestras redes",
                linksDaAPyB: "Enlaces de APyB",
                codigoDeConduta: "Código de conducta",
                formulario: "Formulario para reportes del Código de conducta",
                comprarIngressos: "¡Comprar Entradas!",
                planoDePatrocinio: "Plan de Patrocinio",
                politicasDePrivacidade: "Políticas de privacidad"
            },
            carrossel: {
              pelaComunidade: "por la comunidad",
              paraComunidade: "para la comunidad"
            },
            buttonPrincipal : {
                ingressos : "!Entradas!",
                planoDePatrocinio : "Plan de Patrocinio",
                linkPlanoDePatrocinio : "https://www.canva.com/design/DAG4CpYjEEA/80Fj01pDqqpzqmK7rWSCIg/view?utlId=h48bf80d827"
            },
            painelDaProgramacao: {
                filtrarPor: "Filtrar por:",
                todos: "Todos",
                palestras: "Charlas",
                tutoriais: "Tutoriales",
                debates: "Debates",
            },
            home : {
                section2: {
                  paragrafo1: "La <1>Python Brasil 2026</1> es la mayor conferencia sobre el lenguaje de programación Python en Brasil y América Latina.",
                  paragrafo2: "Serán 5 días de inmersión con actividades que van desde contribuir a proyectos de software libre, participar en capacitaciones y adquirir nuevos conocimientos con profesionales reconocidos de la comunidad.",
                  paragrafo3: "La edición de 2026 está siendo organizada por la comunidad Python de <1>Florianópolis/SC</1> con el apoyo de la APyB (Asociación Python Brasil)."
                },
                section3 : {},
                section4: {
                    submissaoDeAtividades: "Envío de Actividades",
                    enviarAtividade: "Enviar Actividad",
                    regulamento: "Reglamento",
                    paragrafo1: "Sigue las novedades en nuestras redes sociales"
                },
                section5: {
                    guiaDaCidade: "Guía de la Ciudad",
                    paragrafo1: "En octubre, en Florianópolis, puedes disfrutar de las playas (aún no tan llenas), hacer senderismo, explorar el centro histórico, visitar el Proyecto Tamar, relajarte en parques, disfrutar de la gastronomía local y aprovechar al máximo Python Brasil 2026 con un clima fresco.",
                    paragrafo2: "La ciudad está en primavera, con un clima que combina días cálidos y soleados con posibilidad de lluvias y días nublados.",
                    paragrafo3: "Hemos preparado una guía de qué hacer cerca del evento y también paseos por la ciudad. Descubre:"
                },
                section6: {
                    localizacao: "Ubicación",
                    palestras: "Charlas",
                    palestrasData: "14 al 19 de octubre",
                    paragrafo1: "Días principales del evento, con espacios para feria de empleo, networking y charlas sobre diversos temas que ocurren simultáneamente.",
                    plantaDoEvento: "Plano del Evento",
                    verNoMapa: "Ver en el mapa",
                    tutoriais: "Talleres",
                    aDefinir: "Por definir"
                },
                section7: {
                    patrocinadores: "Patrocinadores",
                    ouro: "Oro",
                    prata: "Plata",
                    bronze: "Bronce",
                    apoiador: "Colaborador",
                    comunidade: "Comunidad"
                }
            },
            faq: {
                perguntasFrequentes: "Preguntas frecuentes",
                perguntas: [
                    {
                        pergunta : "¿Cuál es la programación del evento?",
                        resposta : "Python Brasil 2025 es el mayor encuentro de la comunidad Python en Brasil. El evento reúne a desarrolladores, entusiastas, investigadores y empresas para compartir conocimientos, experiencias y fortalecer la comunidad."
                    },
                    {
                        pergunta : "¿Obtengo un certificado por participar en Python Brasil 2025?",
                        resposta : "Python Brasil 2025 es el mayor encuentro de la comunidad Python en Brasil. El evento reúne a desarrolladores, entusiastas, investigadores y empresas para compartir conocimientos, experiencias y fortalecer la comunidad."
                    },
                    {
                        pergunta : "¿Quién organiza Python Brasil?",
                        resposta : "Python Brasil 2025 es el mayor encuentro de la comunidad Python en Brasil. El evento reúne a desarrolladores, entusiastas, investigadores y empresas para compartir conocimientos, experiencias y fortalecer la comunidad."
                    },
                    {
                        pergunta : "¿Cuáles son las condiciones para adquirir una entrada de media tarifa?",
                        resposta : "Python Brasil 2025 es el mayor encuentro de la comunidad Python en Brasil. El evento reúne a desarrolladores, entusiastas, investigadores y empresas para compartir conocimientos, experiencias y fortalecer la comunidad."
                    }
                ]
            }
        }
      }
    },
    lng: "br",
    fallbackLng: "br",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
