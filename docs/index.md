---
hide:
  - navigation
---

## Technical Arsenal

| Domain | Core Technologies |
| :--- | :--- |
| **Languages** | `Python` · `Scala` · `SQL` · `C++` · `Bash` |
| **Big Data & Pipelines** | Apache Spark · PySpark · Delta Lake · Unity Catalog · dbt Core |
| **Cloud & DevOps** | AWS (S3, EMR, EC2, Lambda) · Docker · GitHub Actions · Azure DevOps · Airflow · Dagster |
| **Backend & Databases** | FastAPI · Kafka · Avro · PostgreSQL/PostGIS · Databricks · Snowflake · DuckDB |
| **AI & Spatial** | MCP Protocol · Agentic Orchestration · Vector Databases (FAISS) · Apache Sedona · H3 |

---

## Engineering Experience

### S&P Global

!!! note "Software Developer 2 — *Oct 2025 – Present*"

    * **Distributed Pipeline Redesign:** Spearheaded the architectural overhaul of a high-latency PySpark pipeline on Databricks. By stripping out legacy transformations and enforcing strict partitioned Parquet outputs, processing time was slashed from 110 hours down to 16 hours, achieving an 85% performance gain.
    * **Legacy System Modernization:** Led critical initiatives to migrate and future-proof enterprise data pipelines, executing complex version upgrades from Apache Spark 2.3 to modern 3.x/4.0 ecosystems, alongside managing the rigorous compile-time and syntax transition from Scala 2.12 to Scala 3.x.
    * **Partition-Aware Retrieval Architecture:** Designed and implemented a sophisticated multi-layer retrieval framework heavily reliant on partition pruning. This engineering effort condensed the storage footprint by 94% (shrinking 24TB to a highly optimized 1.4TB) while accelerating query resolution times by ~60x (from 8 hours to just 8 minutes).
    * **Intelligent Data Governance:** Engineered dynamic tracking-table logic utilizing Unity Catalog and Delta Lake. This system enabled intelligent, file-level state tracking and automated reprocessing workflows, effectively eliminating over 90% of manual data-rework operations.
    * **AI & Security Integration:** Fortified a Python-driven AI data agent by integrating proprietary internal APIs for seamless, automated data retrieval, completely removing the need for manual CSV handling. Concurrently executed a secure migration to GitHub, implementing stringent vulnerability scanning protocols.

!!! note "Software Engineer — *Aug 2022 – Sept 2025*"

    * **Massive-Scale Geospatial Ingestion:** Engineered robust, end-to-end ELT pipelines capable of absorbing massive geospatial datasets (exceeding 200GB per payload) fetched via complex REST APIs. Data was transformed within Databricks and reliably loaded into Delta and Iceberg tables with zero data loss.
    * **Cluster & Compute Tuning:** Drove an 82% improvement in overall pipeline throughput. This was achieved through meticulous Databricks cluster optimization, advanced Spark configuration tuning, multi-threaded processing, strategic memory caching, and the implementation of spatial H3 indexing.
    * **Scalable ETL Frameworks:** Built a highly scalable, bespoke ETL framework in Scala designed to deliver curated, strictly validated data subsets to multiple downstream consumer teams. Implemented strict CDC-based (Change Data Capture) ingestion directly into production SQL Server via stored procedures, ensuring absolute data consistency during batch processing and backfilling.
    * **Spatial Compute on AWS:** Crafted Apache Sedona-enabled EMR clusters on EC2 instances specifically tailored to execute heavy geospatial transformations on raw datasets. Successfully onboarded new, complex data sources into advanced EMR Serverless calculation engines.
    * **DevOps & Infrastructure:** Authored complex Azure YAML CI/CD pipelines governing both Python wheel packaging and Maven-based Scala deployments. Championed security by integrating ArmorCode, Fortify, and SonarQube, resolving high-severity findings and achieving a 60% reduction in overall system vulnerabilities.

---

## Architecture & Projects

!!! abstract "Agentic Data Engineering Assistant"

    **Stack:** `FastAPI` · `LangChain` · `FAISS` · `MCP Protocol` · `LLM Router`

    Built a FastAPI-served RAG assistant routing developer queries between a local vector index and live documentation via the Model Context Protocol (MCP), utilizing an LLM-based intent router. [View on GitHub](#)

!!! abstract "Operation Dark Water"

    **Stack:** `Scala` · `Apache Spark` · `Sedona` · `H3` · `Delta Lake`

    Created an end-to-end forensics geospatial data pipeline using Apache Spark, Sedona, and H3 spatial indexing on Delta Lake. The system detects vessels disabling AIS transponders by analyzing NOAA datasets. [View on GitHub](https://github.com/pranavkapale/operation-dark-water)

!!! abstract "Smart City Traffic Optimizer"

    **Stack:** `Python` · `PostgreSQL/PostGIS` · `Dagster` · `dbt Core` · `MinIO`

    Designed a geospatial ELT pipeline that fetches real-time traffic speed data from the NYC Open Data API, performs spatial aggregation, and produces borough-level congestion datasets for downstream analytics. [View on GitHub](https://github.com/pranavkapale/smart-city-traffic-optimizer)

!!! abstract "Global Logistics Hot-Zone Optimizer"

    **Stack:** `Python` · `Apache Spark` · `Airflow` · `Sedona` · `H3` · `Docker`

    Built a containerized, Apache Airflow-orchestrated PySpark pipeline identifying high-demand logistics zones from GPS trajectory data via H3 spatial indexing. [View on GitHub](https://github.com/pranavkapale/Global-Logistics-Hot-Zone-Optimiser)

!!! abstract "Equities PnL Engine"

    **Stack:** `Java` · `Spring Boot` · `Kafka` · `Avro` · `JUnit`

    Architected a Kafka and Avro-based trade-lifecycle PnL calculation engine for equities transactional systems, purpose-built for messaging-broker and trading-domain depth. [View on GitHub](#)

---

## The Lab: Current Explorations

!!! tip "What's running on my local machine right now?"

    * **Agentic AI & LLM Orchestration:** Moving beyond basic prompts. Building robust agentic workflows utilizing LangChain and LlamaIndex to create autonomous systems that can write, debug, and execute queries against complex data warehouses.
    * **Advanced RAG & Vector Stores:** Deep diving into hybrid search architectures, embedding models, and optimizing retrieval using Vector Databases to make LLMs context-aware of enterprise data structures.
    * **Modern Backend Paradigms:** Exploring the absolute limits of FastAPI and asynchronous Python, alongside event-driven microservices utilizing Kafka for high-throughput, low-latency data streaming.
    * **Next-Gen Data Engineering:** Experimenting with zero-copy cloning, advanced data lakehouse features (Iceberg/Delta), and pushing compute directly to storage layers to minimize data movement.

---

## Domain Expertise

While I am a backend and data engineer by trade, my architecture is heavily informed by deep domain knowledge in two core sectors:

* **Geospatial & Spatial Intelligence:** Extensive experience working with H3 indexing, Apache Sedona, and PostGIS. I specialize in processing massive spatial datasets for logistics routing, urban traffic optimization, and regional real estate/land data mapping across Maharashtra and beyond.
* **Financial Data & P&L Aggregation:** Deep understanding of trade lifecycles, corporate actions, and complex financial data modeling. I have built systems to parse, aggregate, and calculate transactional profit and loss data at scale across multiple sources and brokerages.

---

## Consulting & Contract Engineering

I am available for specialized freelance and contract engagements. I partner with teams to solve complex, high-stakes engineering bottlenecks.

!!! info "Specialized Offerings"
    * **Legacy Pipeline Modernization:** Seamlessly migrating enterprise codebases from Apache Spark 2.3 to 3.x/4.0 and transitioning from Scala 2.12 to Scala 3.x.
    * **Cost & Performance Tuning:** Auditing existing Databricks/AWS architectures to implement partition pruning, caching, and storage footprint reduction (Delta/Iceberg).
    * **Custom AI Agent Workflows:** Building specialized, production-ready RAG applications and agentic workflows using LangChain, FastAPI, and local Vector Databases.

    *Looking for a technical partner? Reach out via [Email](mailto:pranavkapale11@gmail.com) or connect on [Upwork](#).*

---

## Education

**Walchand College of Engineering**
*Bachelor of Technology (B.Tech) in Electronics*
*August 2018 – August 2022*
