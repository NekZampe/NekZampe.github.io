import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          // System UI Elements
          ui: {
            welcome: "Hi, I'm Nektarios",
            role: "Software Engineering Student @ Concordia",
            projects_tab: "Projects.exe",
            experience_tab: "Work_History.log",
            about_tab: "User_Profile.usr",
            status_ready: "Status: System Ready",
            location: "Location: Montreal, QC",
          },

          about: {
            heading: "Software Engineer | Test Automation & Backend Systems",
            bio: "Final-year Software Engineering student at Concordia University, graduating in 2026. I specialize in backend engineering with C# and Java, with a strong interest in distributed systems and scalable architecture. I also enjoy software testing and building reliable systems through thoughtful validation and automation practices. Currently leading backend development for my capstone project, SwapStreet. Outside of school, I actively work on my homelab, building and experimenting with infrastructure, networking, and self-hosted systems.",

            education: {
              title: "Education & Leadership",
              school: "Concordia University",
              degree: "Bachelor of Engineering – Software Engineering",
              graduation: "Expected May 2026",
              gdsc_role: "Vice President of Projects, Google Developer Club",
              gdsc_desc:
                "Led multiple development initiatives and coordinated student open-source projects.",
            },

            skills: {
              title: "Technical Specifications",
              languages: "Languages: C#, C++, Java, TypeScript",
              frameworks: "Frameworks: .NET, React, WPF, ASP.NET Core",
              tools: "Developer Tools: Docker, Git, GitHub, Postman",
              spoken: "Human Languages: English, French",
            },

            contact: {
              legend: "Network Links",
              email_label: "Email",
              github_btn: "GitHub.lnk",
              linkedin_btn: "LinkedIn.lnk",
              cv_btn: "View_Resume.pdf",
            },
          },

          projects_data: {
            surveillance: {
              title: "Surveillance_Indexer.bin",
              status: "Verified / Executable",
              tech: "C#, WPF, OpenCV, MVVM",
              github: "https://github.com/NekZampe/SurveillanceIndexer",
              image: null,
              desc: "Desktop Video Management System (VMS) built in C# and WPF to detect and index suspicious events for fast querying. Integrated OpenCV-based object detection and designed a modular MVVM architecture for maintainability and extensibility.",
            },

            kafkaClone: {
              title: "Distributed_Logger.sys",
              status: "In Development",
              tech: "C#, Async TCP, gRPC, Raft, Distributed Systems",
              github: "https://github.com/NekZampe/KafkaClone",
              image: null,
              desc: "Distributed log storage system inspired by Apache Kafka, supporting partitioned append-only logs. Implemented rolling log segments, a custom byte-level TCP protocol with asynchronous concurrent I/O, and Raft consensus over gRPC to ensure fault tolerance, strong consistency, and horizontal scalability.",
            },

            swapstreet: {
              title: "SwapStreet_Capstone",
              status: "Active Deployment",
              tech: "ASP.NET Core, React (TypeScript), PostgreSQL, Docker, Nginx",
              github: "https://github.com/AlimuratDinch/SwapStreet",
              image: null,
              desc: "Lead Backend Developer for a full-stack e-commerce platform. Designed system architecture and built a scalable ASP.NET Core REST API with PostgreSQL, JWT authentication, email verification, secure image storage, and AI virtual try-on. Deployed and self-hosted using Docker, Nginx, and Cloudflare with load testing via k6 and Grafana.",
            },
            readme: {
              title: "README.txt",
              status: "In Progress",
              tech: "Portfolio / Ongoing Work",
              github: "https://github.com/NekZampe",
              image: null,
              desc: "These are a few hand-picked projects I wanted to highlight. I have more projects, experiments, and in-progress work on my GitHub, which you can access by clicking the button below.",
            },
          },

          experience_data: {
            genetec_2025: {
              company: "Genetec",
              role: "System Test Specialist Intern",
              period: "May 2025 – Aug 2025",
              location: "Montreal, QC",
              bullets: [
                "Designed and developed an internal testing tool for a new plugin, streamlining complex API workflows into an intuitive WebApp.",
                "Built the tool using C# .Net WebApi and React/TypeScript, leveraging the Genetec Gelato component library.",
                "Collaborated with development and QA to refine requirements and ensure the tool aligned with internal workflows.",
              ],
            },
            genetec_2024: {
              company: "Genetec",
              role: "System Test Specialist Intern",
              period: "Jan 2024 – Apr 2024",
              location: "Montreal, QC",
              bullets: [
                "Identified, documented, and validated software defects to ensure high-quality releases.",
                "Used SQL to validate test data, including injection scenarios and geographic data verification against Google Earth.",
                "Employed MQTT protocols to test new features by simulating vehicular IoT data streams.",
              ],
            },
          },
        },
      },

      fr: {
        translation: {
          ui: {
            welcome: "Salut, je suis Nektarios",
            role: "Étudiant en génie logiciel @ Concordia",
            projects_tab: "Projets.exe",
            experience_tab: "Historique_Travail.log",
            about_tab: "Profil_Utilisateur.usr",
            status_ready: "Statut : Système Prêt",
            location: "Localisation : Montréal, QC",
          },

          about: {
            heading: "Ingénieur Logiciel | Automatisation des Tests & Systèmes Backend",
            bio: "Étudiant en dernière année de génie logiciel à l’Université Concordia, diplômation prévue en 2026. Je me spécialise en développement backend avec C# et Java, avec un fort intérêt pour les systèmes distribués et les architectures évolutives. J’apprécie également le domaine des tests logiciels et la conception de systèmes fiables grâce à des pratiques rigoureuses de validation et d’automatisation. Je dirige actuellement le développement backend de mon projet de fin d’études, SwapStreet. En dehors de mes études, je développe activement mon homelab, où j’expérimente avec l’infrastructure, le réseautage et les systèmes auto-hébergés.",

            education: {
              title: "Éducation et Leadership",
              school: "Université Concordia",
              degree: "Baccalauréat en génie – Génie logiciel",
              graduation: "Prévu en mai 2026",
              gdsc_role: "Vice-président aux projets, Google Developer Club",
              gdsc_desc:
                "Direction d'initiatives de développement et coordination de projets open-source étudiants.",
            },

            skills: {
              title: "Spécifications Techniques",
              languages: "Langages : C#, C++, Java, TypeScript",
              frameworks: "Frameworks : .NET, React, WPF, ASP.NET Core",
              tools: "Outils : Docker, Git, GitHub, Postman",
              spoken: "Langues : Anglais, Français",
            },

            contact: {
              legend: "Liens Réseau",
              email_label: "Email",
              github_btn: "GitHub.lnk",
              linkedin_btn: "LinkedIn.lnk",
              cv_btn: "Voir_CV.pdf",
            },
          },

          projects_data: {
            surveillance: {
              title: "Surveillance_Indexer.bin",
              status: "Vérifié / Exécutable",
              tech: "C#, WPF, OpenCV, MVVM",
              github: "https://github.com/NekZampe/SurveillanceIndexer",
              image: null,
              desc: "Système de gestion vidéo (VMS) développé en C# et WPF permettant la détection et l’indexation d’événements suspects. Intégration d’OpenCV pour la détection d’objets et conception d’une interface modulaire basée sur le pattern MVVM pour assurer maintenabilité et extensibilité.",
            },

            kafkaClone: {
              title: "Distributed_Logger.sys",
              status: "En Développement",
              tech: "C#, TCP Asynchrone, gRPC, Raft",
              github: "https://github.com/NekZampe",
              image: null,
              desc: "Système de stockage de logs distribué inspiré d’Apache Kafka, supportant des logs partitionnés et append-only. Implémentation de segments rotatifs, d’un protocole TCP personnalisé au niveau byte avec I/O asynchrone concurrente, et intégration de l’algorithme de consensus Raft via gRPC pour assurer tolérance aux pannes et cohérence forte.",
            },

            swapstreet: {
              title: "SwapStreet_Capstone",
              status: "Déploiement Actif",
              tech: "ASP.NET Core, React (TypeScript), PostgreSQL, Docker",
              github: "https://github.com/AlimuratDinch/SwapStreet",
              image: null,
              desc: "Responsable backend pour une plateforme e-commerce full-stack. Conception de l’architecture système, développement d’une API REST scalable avec ASP.NET Core, authentification JWT, stockage sécurisé d’images et intégration d’un module IA. Déploiement auto-hébergé via Docker, Nginx et Cloudflare avec validation par tests de charge (k6, Grafana).",
            },
            readme: {
              title: "README.txt",
              status: "En cours",
              tech: "Portfolio / Travaux en cours",
              github: "https://github.com/NekZampe",
              image: null,
              desc: "Voici une sélection de projets choisis à la main que je souhaitais mettre en avant. J’ai d’autres projets, expérimentations et travaux en cours sur mon GitHub, accessibles en cliquant sur le bouton ci-dessous.",
            },
          },

          experience_data: {
            genetec_2025: {
              company: "Genetec",
              role: "Stagiaire spécialiste en tests de systèmes",
              period: "Mai 2025 – Août 2025",
              location: "Montréal, QC",
              bullets: [
                "Conçu et développé un outil de test interne pour un nouveau plugin, simplifiant les flux de travail API complexes en une application Web intuitive.",
                "Construit l'outil en utilisant C# .Net WebApi et React/TypeScript, en exploitant la bibliothèque de composants Genetec Gelato.",
                "Collaboré avec les équipes de développement et d'assurance qualité pour affiner les exigences et aligner l'outil aux flux de travail internes.",
              ],
            },
            genetec_2024: {
              company: "Genetec",
              role: "Stagiaire spécialiste en tests de systèmes",
              period: "Janvier 2024 – Avril 2024",
              location: "Montréal, QC",
              bullets: [
                "Identifié, documenté et validé les défauts logiciels pour garantir des versions de haute qualité.",
                "Utilisé SQL pour valider les données de test, incluant des scénarios d'injection et la vérification de données géographiques avec Google Earth.",
                "Employé le protocole MQTT pour tester de nouvelles fonctionnalités en simulant des flux de données IoT véhiculaires.",
              ],
            },
          },
        },
      },
    },
  });

export default i18n;
