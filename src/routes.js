import Inicio from './pages/Inicio';
import Metodologia from './pages/Metodologia';
import ConceitoApontamento from './pages/ConceitoApontamento';
import LevantamentoDados from './pages/LevantamentoDados';
import RelatorioApontamentos2024 from './pages/RelatorioApontamentos2024';
import RelatorioApontamentos2023 from './pages/RelatorioApontamentos2023';
import PontosControle from './pages/PontosControle';

export const routes = [
  { title: 'Início', url: '/', component: Inicio },
  { title: 'Metodologia', url: '/metodologia', component: Metodologia },
  { title: 'Conceito Apontamento', url: '/conceito-apontamento', component: ConceitoApontamento },
  { title: 'Levantamento Dados', url: '/levantamento-dados', component: LevantamentoDados },
  { title: 'Relatório de Apontamentos 2024', url: '/relatorio-apontamentos-2024', component: RelatorioApontamentos2024 },
  { title: 'Relatório de Apontamentos 2023', url: '/relatorio-apontamentos-2023', component: RelatorioApontamentos2023 },
  { title: 'Pontos de Controle', url: '/pontos-controle', component: PontosControle },
];
