# Data Engineer

## Summary
Data Engineer with 3+ years of experience in designing and implementing large scale data pipelines processing TB-scale datasets and building cost-efficient data architectures. Experienced in ETL/ELT pipelines, data modelling, medallion architecture and distributed systems with mid-level expertise in **Databricks, Python, Apache Spark, SQL, AWS, Azure DevOps, Scala**.

## Technical Skills
**Languages:** Python | SQL | Scala | CPP \
**Big Data & Processing:** Apache Spark | PySpark | Delta Lake | Unity Catalog | Batch Processing | Data Modelling \
**DevOps & Cloud:** Azure DevOps | Pipelines (YAML) | AWS (S3, EMR, EC2, Lambda, Step Function) \
**Databases & Platforms:** SQL Server | PostgreSQL (PostGIS) | SQL Server | Databricks \
**Concepts:** Data Warehousing | Incremental Processing | CDC | Data Quality | Git | REST APIs | Docker | Confluence | Agile

## Work Experience

**Data Engineer (Software Developer 2) @ S&P Global (_Oct 2025 – Present_)**
- **Optimized data conversion time from 110 hours to 16 hours (~85% faster)** by designing and building an automated Spark based Databricks workflow to convert large geospatial CSV datasets into optimized, partitioned Parquet files, replacing the earlier CSV-to-PostgreSQL transformation flow, while significantly lowering compute costs
- **Accelerated processing time from 8 hours to 8 minutes** (~60x performance improvement) and **Minimized storage footprint from 24 TB to 1.4 TB** (~94% reduction) by architecting multi-layer partition aware retrieval framework **leveraging partition pruning** to dynamically read only required data
- Architected dynamic tracking table logic for transformation workflows of Databricks leveraging **Apache Spark, Unity Catalog** and **Delta Lake** for efficient big data ingestion into Postgres(PostGIS); enabled intelligent, file-level reprocessing and eliminated manual rework, **cutting operational effort by over 90%**

**Data Engineer (Software Engineer) @ S&P Global (_Aug 2022 – Sept 2025_)**
- Engineered end to end ingestion pipelines onboarding multiple **geospatial datasets (nearly 200 GB+)** fetched via REST APIs, transformed in Databricks, loaded tables (Delta, Parquet, Iceberg) in databases with high reliability and throughput
- **Improved pipeline performance by 82%** by optimizing Databricks clusters and workflows through **Spark execution tuning, Multi-threaded data processing**, caching strategies and spatial indexing & H3 optimizations
- Performed **CDC based data ingestion into Production SQL Server** using stored procedures and controlled batch processing while performing strict backfilling data and maintaining high standard data quality governance
- Worked on building a **scalable ETL framework in Scala** delivering **curated data subsets** to multiple downstream with minimal rework, partnering with cross-functional teams to align faster delivery with stakeholder requirements
- Crafted **Apache Sedona enabled EMR on EC2** environment to perform complex geospatial transformations and expanded data ecosystem by onboarding new data sources into calculation engines using **EMR Serverless**
- **Reduced compute cost by 30%** using Spark UI analysis, appropriate **cluster sizing**, modular orchestration strategies, migrating to Graviton cluster wherever possible
- Built **Azure YAML pipelines** for Python and Scala projects, including **Wheel packaging and Maven-based Scala deployments**. Addressed critical/high vulnerabilities from centralized ArmorCode **achieving a 60% reduction** on overall security findings

**Tools used:** Spark UI, Dbeaver, Postman, Sharepoint, JDBC, Splunk, Maven, SonarQube, Fortify, Mend, ArmorCode

## Projects

**[Operation Dark Water](https://github.com/pranavkapale/operation-dark-water) | Scala, Apache Spark, Sedona, H3, Delta Lake, MinIO**
- Created end to end forensics geospatial data pipeline using Apache Spark and Sedona that detects vessels disabling AIS transponders by analysing NOAA datasets with H3 spatial indexing and Delta Lake.

**[Smart City Traffic Optimizer](https://github.com/pranavkapale/smart-city-traffic-optimizer) | Python, PostgreSQL + PostGIS, Dagster, dbt core, MinIO**
- Designed a geospatial ELT pipeline that fetch real time NYC traffic speed data from NYC Open Data API, performs geospatial aggregation with PostGIS, and produces borough-level congestion datasets ready for analytics visualization.

**[Global Logistics Hot Zone Optimiser](https://github.com/pranavkapale/Global-Logistics-Hot-Zone-Optimiser) | Python, Apache Spark, Airflow, Sedona, H3**
- Architected a high-performance spatial data pipeline leveraging a medallion architecture that processes massive GPS trajectory data with Apache Spark and Uber H3 indexing to identify logistics hot-zones for fleet optimization.

## Achievements & Certifications
- **Publication:** [IoT Based Automated Paralysis Healthcare System](https://ieeexplore.ieee.org/document/9907604)
- **Certifications:** [AI for Everyone](https://badges.spglobal.com/170f4e8a-68f0-43c5-b864-5c86d0f5f69f), [EssentialTECH Foundations](https://badges.spglobal.com/131e1e56-e306-47f5-b4c9-184923baf2d9)

## Education
- **Walchand College of Engineering, Sangli** \
  B.TECH in Electronics Engineering (_Aug 2018 – Aug 2022_) | **CGPA: 7.41/10**

## Languages
English (Professional) | Marathi (Native) | Hindi (Professional)