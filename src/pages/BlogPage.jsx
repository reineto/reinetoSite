// src/pages/BlogPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CustomCursor from '../components/CustomCursor';
import ArticleModal from '../components/ArticleModal';

const BlogPage = () => {
    const [visibleCount, setVisibleCount] = useState(6);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const articles = [
        { id: 1, title: "Quanto Custa um Vídeo Institucional em Sorocaba?", category: "DECISÃO DE COMPRA", image: "https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 2, title: "5 Dicas de Fotografia de Produto para Lojas de Sorocaba", category: "E-COMMERCE", image: "https://images.pexels.com/photos/5989933/pexels-photo-5989933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 3, title: "Filmagem com Drone em Sorocaba: Como Valorizar seu Imóvel", category: "ALTO VALOR", image: "https://images.pexels.com/photos/7772635/pexels-photo-7772635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 4, title: "Case de Sucesso: Engajamento com Vídeos para Redes Sociais", category: "RESULTADOS", image: "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 5, title: "7 Locais Incríveis para Filmagens Externas em Sorocaba", category: "PRODUÇÃO LOCAL", image: "https://images.pexels.com/photos/161284/piazza-grande-modena-italy-161284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 6, title: "Fotografia Corporativa: A Imagem da sua Equipe em Sorocaba", category: "IMAGEM DE MARCA", image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 7, title: "Guia Completo: Como Planejar seu Primeiro Vídeo Institucional", category: "PLANEJAMENTO", image: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 8, title: "Reels vs. TikTok: Onde Empresas de Sorocaba Devem Investir?", category: "MARKETING DIGITAL", image: "https://images.pexels.com/photos/7648332/pexels-photo-7648332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 9, title: "Vídeo Marketing para Indústrias em Sorocaba", category: "INDÚSTRIA B2B", image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 10, title: "Tendências de Videomarketing para 2025 em Sorocaba", category: "INOVAÇÃO", image: "https://images.pexels.com/photos/5439477/pexels-photo-5439477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 11, title: "Vídeos para Clínicas e Médicos em Sorocaba: Como Atrair Pacientes", category: "SAÚDE", image: "https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { id: 12, title: "Bastidores da Produção: Como Criamos um Vídeo de Sucesso", category: "PROCESSO", image: "https://images.pexels.com/photos/853875/pexels-photo-853875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ];

    const articlesData = {
        1: {
            title: "Quanto Custa um Vídeo Institucional em Sorocaba?",
            content: `<p>Você já se perguntou qual o real investimento para criar um vídeo institucional de alto impacto para sua empresa aqui em Sorocaba? A resposta não é um valor fixo, mas uma composição de fatores que define a qualidade e o alcance do seu projeto. Neste guia completo, vamos desmistificar os custos envolvidos na produção de um vídeo corporativo.</p><h3>O que realmente define o preço de um vídeo?</h3><p>O investimento é definido pela complexidade da produção. Vamos detalhar os principais pilares:</p><h3>1. Pré-Produção: A Base de Tudo</h3><ul><li><strong>Roteiro e Storyboard:</strong> A criação da narrativa.</li><li><strong>Planejamento e Logística:</strong> Visitas técnicas e agendamentos.</li></ul><h3>2. Produção: O Dia da Gravação</h3><ul><li><strong>Tamanho da Equipe:</strong> De um videomaker solo a uma equipe completa.</li><li><strong>Equipamentos:</strong> Câmeras de cinema, drones e iluminação.</li></ul><h3>3. Pós-Produção: A Mágica Acontece Aqui</h3><p>Inclui edição, color grading, motion graphics e trilha sonora.</p><p><strong>Pronto para transformar a comunicação da sua empresa em Sorocaba?</strong> Receba um orçamento personalizado.</p>`
        },
        2: {
            title: "5 Dicas de Fotografia de Produto para Lojas de Sorocaba",
            content: `<p>Para um e-commerce em Sorocaba, a fotografia do seu produto é a primeira impressão. Imagens de baixa qualidade afastam clientes, enquanto fotos profissionais transmitem confiança.</p><h3>1. A Iluminação é Tudo</h3><p>Use luz natural sempre que possível para um resultado suave e profissional.</p><h3>2. Fundo Limpo e Consistente</h3><p>O foco deve ser 100% no seu produto. O fundo branco é um clássico infalível.</p><h3>3. Mostre Todos os Ângulos</h3><p>O cliente online não pode tocar no produto. Fotografe-o de vários ângulos e inclua closes em detalhes.</p><h3>4. Contextualize o Uso</h3><p>Crie fotos de lifestyle que mostrem o produto em uso para gerar conexão emocional.</p><h3>5. Edição Profissional</h3><p>Ajuste brilho, contraste e cores para garantir que as imagens sejam fiéis à realidade.</p><p><strong>Quer fotos que realmente vendem?</strong> Fale conosco.</p>`
        },
        3: {
            title: "Filmagem com Drone em Sorocaba: Como Valorizar seu Imóvel",
            content: `<p>A filmagem com drone revolucionou o mercado audiovisual, oferecendo perspectivas antes impossíveis.</p><h3>Para o Mercado Imobiliário</h3><p>Um drone pode mostrar a arquitetura completa, o paisagismo e o contexto da vizinhança, que são grandes argumentos de venda.</p><h3>Para Eventos Corporativos</h3><p>Capture a escala e a energia do seu evento com planos de abertura impactantes e imagens incríveis de toda a equipe.</p><h3>Para a Indústria</h3><p>Demonstre a capacidade e a modernidade de uma planta industrial, mostrando a dimensão completa da sua fábrica e a eficiência da sua logística.</p><p><strong>Pronto para levar seu projeto a um novo patamar?</strong> Fale com nossa equipe de pilotos certificados.</p>`
        },
        4: {
            title: "Case de Sucesso: Engajamento com Vídeos para Redes Sociais",
            content: `<h3>O Desafio</h3><p>Uma marca de moda local em Sorocaba precisava aumentar seu alcance e engajamento no Instagram, que estavam estagnados.</p><h3>A Solução</h3><p>Desenvolvemos uma campanha de 8 vídeos curtos (Reels) focados nas tendências do momento, mostrando os produtos de forma dinâmica e autêntica. A produção foi rápida, otimizada para consumo vertical.</p><h3>Os Resultados</h3><p>Em 30 dias, a conta obteve um aumento de 300% no alcance, 150% em novas visitas ao perfil e um crescimento significativo nas vendas diretas pelo Instagram. Isso prova que conteúdo em vídeo estratégico é um investimento com retorno claro.</p><p><strong>Quer resultados como este?</strong> Vamos conversar!</p>`
        },
        5: {
            title: "7 Locais Incríveis para Filmagens Externas em Sorocaba",
            content: `<p>Conhecer os melhores cenários é parte do nosso trabalho. Se você busca o local perfeito para sua próxima produção em Sorocaba, aqui estão algumas sugestões:</p><ul><li><strong>Parque da Biquinha:</strong> Natureza exuberante e um ambiente tranquilo.</li><li><strong>Jardim Botânico Irmãos Villas-Bôas:</strong> Arquitetura moderna misturada com a natureza.</li><li><strong>Centro Histórico:</strong> Prédios antigos e ruas de paralelepípedo para um toque clássico.</li><li><strong>Parque das Águas:</strong> Amplo espaço, ideal para eventos e tomadas abertas.</li><li><strong>Estrada de Ferro Sorocabana:</strong> Trilhos e estações antigas para uma estética industrial e vintage.</li><li><strong>Parque Tecnológico de Sorocaba:</strong> Linhas modernas e um visual corporativo.</li><li><strong>Floresta Nacional de Ipanema:</strong> Cenários históricos e natureza selvagem em uma única locação.</li></ul><p><strong>Conhecemos os melhores ângulos da cidade.</strong> Vamos produzir seu próximo vídeo juntos.</p>`
        },
        6: {
            title: "Fotografia Corporativa: A Imagem da sua Equipe em Sorocaba",
            content: `<p>Em um mundo digital, a primeira apresentação da sua equipe acontece online. Fotos amadoras no LinkedIn ou no site da sua empresa podem transmitir uma imagem de desleixo.</p><h3>Por que investir em Fotografia Corporativa?</h3><ul><li><strong>Profissionalismo:</strong> Demonstra que sua empresa se preocupa com os detalhes.</li><li><strong>Confiança:</strong> Um rosto amigável e profissional gera mais confiança do que uma imagem genérica.</li><li><strong>Humanização:</strong> Conecta seus clientes com as pessoas por trás da marca.</li><li><strong>Consistência:</strong> Padroniza a imagem da sua equipe em todas as plataformas.</li></ul><p><strong>Renove a imagem da sua equipe.</strong> Agende uma sessão de fotografia corporativa conosco.</p>`
        },
        7: {
            title: "Guia Completo: Como Planejar seu Primeiro Vídeo Institucional",
            content: `<p>Um vídeo institucional de sucesso começa muito antes da câmera ligar. Siga este guia:</p><h3>Passo 1: O Briefing</h3><p>Defina claramente: Qual o objetivo do vídeo? Quem é seu público? Qual é a mensagem principal?</p><h3>Passo 2: Definição do Roteiro</h3><p>Crie uma história que conecte com seu público. Decida se terá narração, entrevistas ou apenas texto.</p><h3>Passo 3: Planejamento (Pré-Produção)</h3><p>Escolha os locais de gravação, os entrevistados e defina um cronograma realista.</p><h3>Passo 4: Produção</h3><p>É a fase da gravação. Confie na equipe contratada para capturar as melhores imagens.</p><h3>Passo 5: Pós-Produção e Distribuição</h3><p>A edição dará vida ao vídeo. Depois de pronto, planeje onde ele será divulgado: site, redes sociais, eventos.</p><p><strong>Precisa de ajuda para planejar?</strong> Nossa consultoria pode te guiar.</p>`
        },
        8: {
            title: "Reels vs. TikTok: Onde Empresas de Sorocaba Devem Investir?",
            content: `<p>Ambas as plataformas são poderosas, mas têm públicos e linguagens diferentes.</p><h3>Instagram Reels</h3><p><strong>Ideal para:</strong> Marcas com forte apelo visual (moda, gastronomia, estética). O público é mais amplo e a integração com o resto do ecossistema do Instagram (loja, DMs) é uma grande vantagem para negócios locais.</p><h3>TikTok</h3><p><strong>Ideal para:</strong> Marcas que querem alcançar um público mais jovem (Geração Z) através de humor, tendências e conteúdo autêntico. O potencial de viralização é enorme, mas exige uma linguagem mais descontraída.</p><h3>A Resposta?</h3><p>Para a maioria das empresas em Sorocaba, começar com Reels é mais estratégico devido à base de usuários locais já consolidada. No entanto, se seu público é muito jovem, o TikTok não pode ser ignorado.</p><p><strong>Produzimos conteúdo otimizado para todas as plataformas.</strong> Fale conosco.</p>`
        },
        9: {
            title: "Vídeo Marketing para Indústrias em Sorocaba",
            content: `<p>O polo industrial de Sorocaba é um dos mais fortes do país, mas muitas indústrias ainda não exploram o poder do vídeo.</p><h3>Como o Vídeo Ajuda a Indústria?</h3><ul><li><strong>Vídeos de Processo:</strong> Demonstram sua capacidade produtiva e tecnologia para clientes B2B.</li><li><strong>Vídeos de Segurança e Treinamento:</strong> Padronizam a comunicação interna e reduzem acidentes.</li><li><strong>Vídeos para Feiras e Eventos:</strong> Capturam a atenção em estandes e apresentam sua empresa de forma moderna.</li><li><strong>Vídeos de Recrutamento:</strong> Atraem os melhores talentos mostrando a cultura e a estrutura da sua empresa.</li></ul><p><strong>Sua indústria tem uma história para contar.</strong> Nós podemos produzi-la.</p>`
        },
        10: {
            title: "Tendências de Videomarketing para 2025 em Sorocaba",
            content: `<p>O mundo do vídeo muda rapidamente. Ficar à frente das tendências é crucial.</p><h3>O que esperar para 2025?</h3><ul><li><strong>Autenticidade Extrema:</strong> Conteúdo menos produzido e mais "real" continuará em alta. Bastidores e depoimentos genuínos geram mais conexão.</li><li><strong>Vídeos Verticais Dominantes:</strong> O formato de celular não é mais uma opção, é o padrão para consumo rápido de conteúdo.</li><li><strong>Conteúdo Interativo:</strong> Vídeos com enquetes, links clicáveis e outras formas de engajamento direto serão mais comuns.</li><li><strong>Uso de IA:</strong> A inteligência artificial ajudará na criação de roteiros, legendas e até mesmo na edição, agilizando processos.</li></ul><p><strong>Sua marca está preparada para o futuro?</strong> Vamos inovar juntos.</p>`
        },
        11: {
            title: "Vídeos para Clínicas e Médicos em Sorocaba: Como Atrair Pacientes",
            content: `<p>Na área da saúde, confiança é tudo. Vídeos são a ferramenta mais poderosa para humanizar sua prática e conectar-se com pacientes antes mesmo da primeira consulta.</p><h3>Tipos de Vídeo que Funcionam para a Área da Saúde:</h3><ul><li><strong>Vídeo de Apresentação da Clínica:</strong> Mostre sua estrutura, tecnologia e o ambiente acolhedor. Apresente sua equipe.</li><li><strong>Vídeos Educacionais:</strong> Explique procedimentos e tire dúvidas comuns. Isso posiciona você como uma autoridade e tranquiliza o paciente.</li><li><strong>Depoimentos de Pacientes:</strong> A prova social é extremamente eficaz. Histórias reais de pacientes satisfeitos geram uma conexão imediata.</li></ul><p><strong>Construa confiança antes da consulta.</strong> Vamos criar vídeos que atraem e educam seus futuros pacientes em Sorocaba.</p>`
        },
        12: {
            title: "Bastidores da Produção: Como Criamos um Vídeo de Sucesso",
            content: `<p>Muitos clientes se perguntam como uma ideia se transforma em um vídeo finalizado. Nosso processo é colaborativo e focado em resultados.</p><h3>Etapa 1: Imersão e Briefing</h3><p>Nossa primeira conversa é para mergulhar no seu negócio. Entendemos seus objetivos, seu público e sua mensagem.</p><h3>Etapa 2: Roteiro e Planejamento</h3><p>Criamos um roteiro que conta sua história de forma eficaz. Planejamos cada detalhe da gravação para otimizar o tempo e garantir a qualidade.</p><h3>Etapa 3: Produção (Gravação)</h3><p>Com equipamentos de ponta e uma equipe experiente, capturamos as imagens que darão vida ao seu projeto.</p><h3>Etapa 4: Pós-Produção</h3><p>É aqui que a mágica acontece. Editamos, corrigimos as cores, adicionamos trilha sonora e finalizamos o vídeo para que ele tenha um acabamento cinematográfico.</p><p><strong>Quer ver seu projeto ganhar vida?</strong> Conheça nosso processo de perto.</p>`
        }
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigate = () => {
        // Função vazia para compatibilidade com Header
    };
    
    const handleArticleSelect = (articleId) => {
        setSelectedArticle(articlesData[articleId]);
    };

    const handleCloseModal = () => {
        setSelectedArticle(null);
    };

    return (
        <>
            <CustomCursor />
            <Header onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} onNavigate={handleNavigate} />
            <ArticleModal article={selectedArticle} onClose={handleCloseModal} />
            
            <div className="min-h-screen bg-black text-white pt-24">
                {/* Hero Section do Blog */}
                <section className="h-auto min-h-[50vh] w-screen flex items-center justify-center px-6 py-16">
                    <div className="container mx-auto text-center">
                        <Link to="/" className="inline-block mb-8 text-violet-400 hover:text-violet-300 transition-colors">
                            ← Voltar para Home
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8">Blog & Insights</h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Dicas, tendências e insights sobre produção audiovisual em Sorocaba
                        </p>
                    </div>
                </section>

                {/* Grid de Artigos */}
                <section className="px-6 py-16">
                    <div className="container mx-auto">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {articles.slice(0, visibleCount).map(article => (
                                <div key={article.id} className="block group text-left cursor-pointer" onClick={() => handleArticleSelect(article.id)}>
                                    <div className="overflow-hidden rounded-lg bg-zinc-900 aspect-video">
                                        <img src={article.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={article.title} />
                                    </div>
                                    <p className="text-sm text-violet-400 mt-4">{article.category}</p>
                                    <h3 className="text-xl font-bold mt-1 group-hover:text-violet-400 transition-colors">{article.title}</h3>
                                    <p className="font-semibold mt-2">Ler artigo</p>
                                </div>
                            ))}
                        </div>
                        
                        {/* Botões de Ver Mais / Recolher */}
                        <div className="text-center mt-16">
                            {visibleCount < articles.length && (
                                <button 
                                    onClick={() => setVisibleCount(articles.length)}
                                    className="bg-violet-600 text-white font-bold py-3 px-8 rounded-full hover:bg-violet-700 transition-all duration-300 transform hover:scale-105"
                                >
                                    Ver mais artigos
                                </button>
                            )}
                            {visibleCount === articles.length && (
                                <button 
                                    onClick={() => setVisibleCount(6)}
                                    className="bg-gray-700 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                                >
                                    Recolher artigos
                                </button>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default BlogPage;