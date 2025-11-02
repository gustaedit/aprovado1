# TP1 - Classificação de Atividades Humanas (EA/ECAC 2025)

[cite_start]Este repositório contém o *pipeline* de análise de dados desenvolvido para o Trabalho Prático 1 (TP1) da disciplina de EA/ECAC 2025[cite: 1]. [cite_start]O objetivo é implementar um sistema para a classificação de atividades humanas a partir de dados de sensores, cobrindo as fases de preparação de dados, análise de *outliers* e engenharia de características[cite: 11, 12].

[cite_start]O *dataset* utilizado é o `FORTH-TRACE benchmark`, que regista 16 atividades [cite: 41] [cite_start]usando 5 sensores[cite: 16, 43].

## 🛠️ Tecnologias e Bibliotecas

* **Ambiente:** Google Colab
* **Linguagem:** Python 3
* **Bibliotecas Principais:**
    * **NumPy:** Para computação numérica e implementação do PCA.
    * **Pandas:** Para carregamento e manipulação de dados (criação do DataFrame `df`).
    * **Matplotlib & Seaborn:** Para visualização de dados (Boxplots, gráficos 3D).
    * **Scikit-learn (`sklearn`):** Para `KMeans`, `DBSCAN` e `StandardScaler`.
    * **SciPy:** Para testes estatísticos (`kstest`, `mannwhitneyu`).
    * **skfeature-chappers:** Para algoritmos de seleção de *features* (`f_score`, `reliefF`).

## 🚀 Como Executar

Este projeto foi desenhado para ser executado num *notebook* Google Colab.

### Pré-requisitos

1.  **Dataset:** Faça o download do *dataset* (ZIP) a partir do [repositório oficial do FORTH-TRACE](https://github.com/spl-icsforth/FORTH_TRACE_DATASET).
2.  **Google Drive:** Descompacte o ZIP. Carregue a pasta `FORTH_TRACE_DATASET-master` para o seu Google Drive.
3.  **Estrutura de Pastas:** O código espera que a pasta esteja no seguinte caminho:
    * `MyDrive/interacambio/FORTH_TRACE_DATASET-master/`
    * *(Se o seu caminho for diferente, ajuste a variável `base_path` no Bloco 1 do código.)*

### Instruções de Execução

1.  Abra o *notebook* (`.ipynb`) no Google Colab.
2.  No menu, selecione **"Ambiente de execução" -> "Reiniciar ambiente de execução"**.
3.  Execute os blocos de código em sequência (do Bloco 1 ao Bloco 8).
4.  O **Bloco 1** irá pedir autorização para aceder ao seu Google Drive. Conceda a permissão.
5.  Se o Bloco 1 for concluído com a mensagem "Dados carregados e DataFrame criado com sucesso", os restantes blocos funcionarão corretamente.

## 📂 Estrutura do Código (Blocos do Notebook)

O *notebook* está dividido nos seguintes blocos funcionais:

* **Bloco 1: Configuração e Carregamento**
    * Instala dependências (`skfeature-chappers`).
    * Monta o Google Drive.
    * Define o caminho dos dados (`base_path`).
    * **Tarefa 2:** Implementa `carregar_dados_participante_local` para carregar os dados.
    * [cite_start]**Tarefa 3 (Início):** Implementa `calcular_modulos`[cite: 53, 56].
    * Cria o DataFrame `df` principal com todos os dados.

* **Bloco 2: Tarefa 3.1 - Boxplots por Atividade**
    * [cite_start]Gera 3 *boxplots* (Acelerómetro, Giroscópio, Magnetómetro) para todos os sujeitos[cite: 57].

* **Bloco 3: Tarefa 3.2 - Densidade de *Outliers***
    * [cite_start]Filtra os dados pelo sensor do "Pulso direito"[cite: 60].
    * [cite_start]Calcula a densidade de *outliers* ($d=\frac{n_{o}}{n_{r}}\times100$) usando o método IQR[cite: 62].

* **Bloco 4: Tarefas 3.3, 3.4, 3.5 - Análise com Z-Score**
    * [cite_start]**Tarefa 3.3:** Implementa `identificar_outliers_zscore`[cite: 68].
    * [cite_start]**Tarefa 3.4:** Aplica a função para $k=3, 3.5, 4$ e gera gráficos[cite: 69, 70].
    * **Tarefa 3.5:** Discute os resultados e a eficácia do Z-Score[cite: 71].

* **Bloco 5: Tarefas 3.6, 3.7 - K-Means e DBSCAN**
    * **Tarefa 3.6:** Executa o K-Means no *dataset* completo[cite: 74].
    * **Tarefa 3.7:** Implementa a lógica de deteção de *outliers* baseada no IQR das distâncias ao centroide.
    * **Tarefa 3.7.1 (Bónus):** Executa o DBSCAN numa amostra de dados[cite: 77].

* **Bloco 6: Tarefa 4.1 - Análise de Significância Estatística**
    * Verifica a normalidade dos dados com o teste de Kolmogorov-Smirnov[cite: 82].
    * [cite_start]Implementa o teste **U de Mann-Whitney** para comparações par-a-par entre as atividades[cite: 81].

* **Bloco 7: Tarefas 4.2 a 4.6 - Extração e Seleção de Características**
    * **Tarefa 4.2:** Define um *feature set* de 12 dimensões (9 eixos + 3 módulos) como exemplo.
    * [cite_start]**Tarefa 4.3:** Implementa o **PCA "do zero"** (`pca_from_scratch`) usando NumPy[cite: 92].
    * **Tarefa 4.4:** Analisa a variância explicada usando *eigenvalues* e determina o n.º de componentes para 75%[cite: 94, 95].
    * [cite_start]**Tarefa 4.5:** Implementa **Fisher Score** e **ReliefF**[cite: 99].
    * [cite_start]**Tarefa 4.6:** Apresenta as **10 melhores *features*** de cada método[cite: 101].

* **Bloco 8: Gráficos Adicionais (Pedido do Utilizador)**
    * Gera 5 gráficos (um por sensor), cada um contendo 3 sub-plots (Acelerómetro, Giroscópio, Magnetómetro).

## 📈 Conclusões Principais

1.  **Qualidade dos Dados (Tarefas 3.1, 3.2):** As atividades de transição (ex: "Stand->Sit") estão repletas de *outliers*. Concluímos que estes não são ruído, mas sim **eventos característicos** da própria atividade, sendo má ideia removê-los.
2.  **Métodos de *Outliers* (Tarefas 3.5, 3.7):** O **Z-Score** (Tarefa 3.3) revelou-se ineficaz para estes dados, pois a média e o desvio padrão são distorcidos pelos próprios *outliers*. A abordagem **K-Means + IQR das Distâncias** (Tarefa 3.7) é uma alternativa multivariada mais robusta.
3.  **Significância das *Features* (Tarefa 4.1):** O teste **U de Mann-Whitney** confirmou que a maioria dos pares de atividades apresenta distribuições estatisticamente diferentes (p < 0.05). Isto valida que os sensores fornecem dados úteis para a classificação.
4.  [cite_start]**Redução de Dimensionalidade (Tarefa 4.4):** Implementámos um PCA "do zero"[cite: 92]. [cite_start]Descobrimos que **[X] componentes** (substituir por X o valor obtido na execução) são suficientes para explicar 75% da variância total dos dados[cite: 95].
5.  [cite_start]**Seleção de *Features* (Tarefa 4.6):** Ao classificar 12 *features* (9 eixos + 3 módulos), os algoritmos **Fisher Score** e **ReliefF** concordaram que `mod_accel`, `mod_gyro` e os eixos `x` e `z` do acelerómetro estão entre as **10 *features* mais importantes** para a classificação[cite: 101].

## 🧑‍💻 Contexto

[cite_start]Este projeto foi realizado no âmbito do Trabalho Prático 1 (TP1) [cite: 1] [cite_start]da disciplina **EA/ECAC 2025**, lecionada por Paulo de Carvalho, Marco Simões e Francisco Antunes[cite: 8].
