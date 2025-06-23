# Curso teste performance com K6 - Bonus AWS e Github Actions
Aula bônus do curso de testes de performance com k6📚.

Esse repositorio deve ser utilizando como referência para as aula bonus do curso de testes de performance com k6: 
* Execução no AWS Code Build[branch master]
* Execução no Github Actions[branch action-config]

## 📊 Teste de Carga com k6 - Comparativo Local x AWS

Realizamos dois testes de carga utilizando o k6: um executado localmente e outro rodando na AWS.

---

### ✅ Configuração dos Testes

- **Duração:** 1 minuto
- **VUs (Usuários Virtuais):** 100
- **Endpoint:** `/usuarios`
- **Objetivo:** Avaliar desempenho local versus execução na nuvem (AWS)

---

### 📍 Resultados Comparativos

| Métrica                         | Ambiente Local             | AWS (Cloud)               |
|---------------------------------|----------------------------|---------------------------|
| Total de Iterações              | 55.098                     | 523.502                   |
| Total de Requisições HTTP       | 110.196                    | 1.060.504                 |
| Média de Tempo de Resposta (avg)| 53.91ms                    | **5.57ms**                |
| P95 (95% das requisições)       | 111.02ms                   | **14.47ms**               |
| Erros HTTP                      | 0%                         | 0%                        |
| Dados Recebidos                 | 173MB                      | 1.7GB                     |
| Dados Enviados                  | 5.1MB                      | 48MB                      |
| Requisições por Segundo (RPS)   | ~1.833/s                   | **~17.730/s**             |

---

### 🎯 Observações

- A execução na **AWS apresentou desempenho muito superior**, com tempos de resposta significativamente menores e maior taxa de requisições por segundo.
- Esse ganho de performance é esperado, considerando que o ambiente AWS está **próximo (ou na mesma rede)** do servidor de destino.
- Ambos os testes tiveram **0% de erros**, indicando estabilidade da aplicação sob carga.

---

### 🚀 Conclusão

Rodar testes de carga próximo ao ambiente de produção (como na AWS) pode oferecer métricas de desempenho mais realistas e com menor latência de rede externa.

  Local:
![image](https://github.com/user-attachments/assets/5daa45ba-5bd1-494e-8fba-599ed6b0f9ca)


  AWS:
![image](https://github.com/user-attachments/assets/78b5d698-c830-4155-a1f4-58bedec659e9)

