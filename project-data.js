const projects = {
  "rural-healthcare": {
    number: "01",
    title: "Field Tool for Rural Healthcare Access",
    skills:
      "UX Design · Service Design · Interaction Design · User Flow Design · UX Writing · Offline-First Design",
    tools: "Figma · FigJam",
    media: {
      type: "image",
      src: "assets/images/projects/rural-healthcare/home.png",
      alt: "Nueva EPS field healthcare worker with two children in a rural community",
      caption:
        "PIS are community health promoters who support members during field visits, helping them access insurer services and submit healthcare service approval requests.",
    },
    overview: [
      "Nueva EPS has a large number of members living in rural areas of Colombia, where communities are dispersed and connectivity can be limited. In municipalities with fewer than 1,000 members, opening a physical service office is not cost-effective, so Promotores Integrales de Salud (PIS) play a key role in connecting members with the insurer’s services.",
      "PIS support members during field visits, including administrative tasks such as submitting healthcare service approval requests. However, the existing mobile and web app depended on internet connectivity, which created friction in rural areas with unstable or unavailable signal. When connectivity failed, PIS sometimes had to carry members’ medical documents until they could submit the request later, increasing the risk of document loss and exposure of sensitive health information.",
      "The project aimed to design a responsive, offline-first tool that allowed PIS to submit approval requests with or without internet connection, store pending requests locally, and synchronise them automatically once the service became available.",
    ],
    sections: [
      {
        title: "My Role",
        paragraphs: [
          "My role was to lead the UX and service experience definition for a new offline-first tool designed to support healthcare field operations in rural areas.",
          "I worked closely with healthcare professionals, project managers, developers, and business stakeholders from the areas involved in the process to translate an initial idea into a feasible digital solution. This required understanding the operational needs of PIS, aligning business requirements, negotiating decisions with multiple stakeholders, and defining how the tool should work across online and offline scenarios.",
          "I was responsible for structuring the experience, mapping the user flows, defining interaction rules, documenting screen states, and writing the UX copy for key moments such as authentication, offline submission, file upload, synchronisation, errors, and confirmation messages.",
          "I worked on making a complex administrative process easier to complete in the field, while supporting the organisation’s need to protect sensitive health information and improve service delivery in low-connectivity territories.",
        ],
      },
      {
        title: "The Problem",
        paragraphs: [
          "PIS were responsible for supporting members with healthcare service approval requests during field visits. These requests could involve medical orders, clinical history documents, member identification, contact information, and administrative validation.",
          "The existing process was difficult because the tools available to PIS depended on internet connection. When connectivity was unavailable during field visits, PIS could not always submit approval requests at the point of service. Instead, they sometimes had to carry members’ medical documents until they reached a place with connectivity or until their regional route allowed them to return the documents to the members.",
          "This could take days, as PIS travelled across dispersed rural communities. During that time, sensitive health documents remained in their custody, increasing the risk of loss, data exposure, and reputational damage for the organisation.",
          "Some PIS also had to make photocopies of members’ documents using their own money. Given the volume of requests they handled and the fact that many PIS earned close to the minimum wage in Colombia, this represented a meaningful personal expense and added further friction to their work.",
          "The design challenge was to create a tool that worked in the reality of rural field work: unstable internet, sensitive documents, administrative complexity, and a need for fast, reliable service.",
        ],
        painPoints: [
          "Unstable connectivity prevented PIS from submitting requests during field visits.",
          "PIS had to carry sensitive medical documents until they could reconnect.",
          "Medical documents could be lost or expose sensitive health information.",
          "Returning documents could take days due to long rural routes.",
          "Some PIS paid for photocopies with their own money, which could be costly.",
        ],
      },
      {
        title: "Requirements Gathering",
        paragraphs: [
          "After several meetings with business stakeholders, healthcare professionals, project managers, developers, and PIS working in the field, we identified that the tool needed to support two operating conditions: online work and offline work.",
          "When PIS had internet connection, the system needed to validate the member’s information in real time, confirm whether the member was active, update contact details if needed, and submit the healthcare service approval request immediately.",
          "When PIS did not have internet connection, the tool needed to collect only the essential information required to save the request safely: member details, contact information, supporting documents, and optional observations. The experience also needed to make clear what was being stored locally, what would happen when the connection returned, and how the PIS could track whether each request had been successfully synchronised.",
          "These requirements helped define the core structure of the tool: a simple home screen with two main actions, one for submitting approval requests and another for managing synchronisation.",
        ],
      },
      {
        title: "Interaction Model",
        blocks: [
          {
            heading: "Submit requests",
            text: "Used by PIS to create healthcare service approval requests in online or offline mode.",
          },
          {
            heading: "Synchronise requests",
            text: "Used to review pending, synchronised, and non-synchronised requests once connection was available.",
          },
        ],
        paragraphs: [
          "This reduced the experience to the two actions that mattered most in the field: capturing requests safely and making sure they were processed later.",
        ],
        imagePair: [
          {
            src: "assets/images/projects/rural-healthcare/synchronise-requests.png",
            alt: "Synchronise requests interface displayed on a tablet",
          },
          {
            src: "assets/images/projects/rural-healthcare/submit-request-offline.png",
            alt: "Offline healthcare service approval request interface displayed on a tablet",
          },
        ],
        architectureTitle: "Offline-First Field Tool",
        architecture: [
          {
            heading: "Submit requests",
            items: ["Online submission", "Offline submission"],
          },
          {
            heading: "Synchronise requests",
            items: ["Pending", "Synchronised", "Not synchronised"],
          },
        ],
      },
      {
        title: "Offline-First Authorisation Flow",
        paragraphs: [
          "This flow was designed to adapt depending on connectivity.",
          "If the PIS had internet connection, the tool could validate the member’s information against Nueva EPS systems and submit the request immediately.",
          "If the PIS did not have connection, the tool displayed an offline form where the PIS could enter the member’s name, document type, document number, phone number, supporting files, and optional observations. The request was then stored locally and prepared for automatic synchronisation once the connection returned.",
        ],
        fullBleedMedia: {
          src: "assets/images/projects/rural-healthcare/offline-authorisation-flow.png",
          alt: "Offline-first healthcare service authorisation flow",
          color: true,
        },
      },
      {
        title: "Synchronisation Flow",
        paragraphs: [
          "The synchronisation flow was designed to give PIS visibility and control over requests saved offline. The Sincronizar section was organised into three tabs.",
        ],
        blocks: [
          {
            heading: "Pendientes",
            text: "Requests saved offline and waiting to be synchronised.",
          },
          {
            heading: "Sincronizadas",
            text: "Requests that had already been successfully synchronised.",
          },
          {
            heading: "No sincronizadas",
            text: "Requests that could not be synchronised because of a validation issue. These requests could be edited and corrected.",
          },
        ],
        trailing:
          "The flow also included automatic synchronisation when internet connection became available, a progress indicator, notifications for requests with issues, search by member name or document number, and filters by date.",
        fullBleedMedia: {
          src: "assets/images/projects/rural-healthcare/synchronisation-flow.png",
          alt: "Offline-first request synchronisation flow",
          color: true,
        },
      },
      {
        title: "Outcome",
        paragraphs: [
          "The tool was implemented to support healthcare field operations in rural areas of Colombia, helping PIS submit healthcare service approval requests even in low-connectivity contexts.",
          "During 2025–2026, the solution supported care for more than 70,000 people in rural areas, while reducing the time required to process approval requests. By allowing PIS to capture, store, and synchronise requests in an offline-first solution, the tool also reduced the need to carry or photocopy physical medical documents, helping lower the risk of losing personal information and special category health data.",
          "Beyond improving an internal process, the project helped make healthcare access more reliable for members in dispersed rural communities.",
        ],
      },
    ],
  },
  "app-redesign": {
    number: "02",
    title: "App Redesign for Nueva EPS",
    skills:
      "UX Research · UX Design · Information Architecture · Interaction Design · Usability Testing · UX Writing",
    tools: "Figma · FigJam · Optimal Workshop",
    media: {
      type: "video",
      src: "assets/videos/nuevaepsapp-web.mp4",
      caption: "Nueva EPS app redesign.",
    },
    overview: [
      "Nueva EPS needed to redesign its mobile app to improve how members accessed digital healthcare services. The previous version of the app had grown over time, but its navigation, login experience, and service structure had become difficult to understand.",
      "The project focused on redesigning the app’s information architecture, access flow, and key self-service journeys, including medical service approvals, certificates, medical leave certificates and payment status, and healthcare network search.",
    ],
    sections: [
      {
        title: "My Role",
        paragraphs: [
          "My role was to lead the redesign of the mobile app experience, from research and information architecture to user flows and wireframes.",
          "I worked on understanding how users expected the app’s content to be organised, redesigning the navigation structure, simplifying the login experience, and creating key screens for the main healthcare services.",
          "My contribution included conducting a card sorting exercise, testing alternative login flows and defining the new app structure.",
        ],
      },
      {
        title: "The Problem",
        paragraphs: [
          "The previous version of the app did not have a clear information architecture. New features had been added over time, but they were not organised around how users naturally searched for healthcare services.",
          "This created a cluttered experience where users could struggle to understand where to go, especially when trying to complete important tasks such as checking appointments, downloading certificates, consulting authorisations, or finding healthcare providers.",
          "Another key issue was the login flow. The previous version aimed to reduce the number of clicks, but the screen included too many options at once. This made the experience visually overloaded and confusing, especially for users who were not sure whether they already had an account or needed to register.",
        ],
        painPoints: [
          "The app had grown without a clear information architecture.",
          "Key services were hidden in an overloaded hamburger menu.",
          "The login screen showed too many options at once.",
          "Navigation was organised around features, not users’ mental models.",
        ],
      },
      {
        title: "Research and Discovery",
        paragraphs: [
          "To understand how users expected the app content to be organised, I conducted an open card sorting exercise with 10 participants. The goal was to identify how users naturally grouped app features and which labels made the most sense to them.",
          "Participants organised key app features into four predefined categories: Health, Certificates, Customer Support, and Settings. After the sessions, I analysed the results using a matrix that showed how many times each feature was placed under each category, as well as a percentage-based matrix to identify stronger and weaker classification patterns.",
          "This gave the redesign a clearer structure and moved the app away from an overloaded hamburger menu. Instead, the new navigation used a bottom tab bar based on the categories identified through the card sorting exercise.",
        ],
        galleryAfterParagraph: 0,
        gallery: [
          "assets/images/projects/app-card-sorting/session-01.png",
          "assets/images/projects/app-card-sorting/session-02.png",
          "assets/images/projects/app-card-sorting/session-03.png",
          "assets/images/projects/app-card-sorting/session-04.png",
          "assets/images/projects/app-card-sorting/session-05.png",
          "assets/images/projects/app-card-sorting/session-06.png",
          "assets/images/projects/app-card-sorting/session-07.png",
          "assets/images/projects/app-card-sorting/session-08.png",
          "assets/images/projects/app-card-sorting/session-09.png",
          "assets/images/projects/app-card-sorting/session-10.png",
        ],
        matricesAfterParagraph: 1,
        matrices: [
          {
            src: "assets/images/projects/app-card-sorting/matrices/count-matrix.png",
            alt: "Card sorting matrix showing how many participants placed each feature in each category",
          },
          {
            src: "assets/images/projects/app-card-sorting/matrices/percentage-matrix.png",
            alt: "Percentage-based card sorting matrix showing classification patterns",
          },
        ],
      },
      {
        title: "Information Architecture",
        paragraphs: [
          "Based on the card sorting results, I reorganised the app around clearer content areas that reflected how users expected to find services.",
          "The new structure prioritised healthcare tasks and separated them from account settings and general customer service actions. This helped reduce ambiguity and made the app easier to scan.",
        ],
        architecture: [
          {
            heading: "Health",
            items: [
              "Medications",
              "Medical appointments",
              "Healthcare service approvals",
            ],
          },
          {
            heading: "Certificates",
            items: [
              "Membership card",
              "Medical leave certificates",
              "Affiliation certificate",
            ],
          },
          {
            heading: "Customer Support",
            items: [
              "Rights and duties charter",
              "Change of primary healthcare provider",
              "News",
              "Rates",
            ],
          },
          {
            heading: "Settings",
            items: [
              "Change password",
              "Biometric access",
              "Log out",
              "Suspend account",
              "About the app",
              "Rate the app",
              "Update personal data",
              "Data protection policy",
            ],
          },
        ],
      },
      {
        title: "Login and Access Flow",
        paragraphs: [
          "One of the most important parts of the redesign was the login experience. In the previous app, the access screen tried to expose multiple actions at the same time, including login, registration, password recovery, and biometric access.",
          "I tested alternative login flows to understand which version felt clearer and more comfortable. The redesigned approach reduced the number of elements on the screen and gave each action a more defined place.",
        ],
      },
      {
        title: "Key Flows",
        blocks: [
          {
            heading: "Home",
            text: "The redesigned home screen prioritised frequently used services and gave users quick access to recent items, notifications, and key healthcare actions.",
            fullBleedMedia: {
              src: "assets/images/projects/app-redesign-home-wireflow.png",
              alt: "Home screen wireflow for the Nueva EPS app redesign",
              color: true,
            },
          },
          {
            heading: "Healthcare Service Approvals",
            text: "This flow allowed users to submit, consult, and download documents related to healthcare service approvals, clearly explaining what users needed to provide and what would happen next.",
            fullBleedMedia: {
              src: "assets/images/projects/app-redesign-authorisations-flow.png",
              alt: "Healthcare service approvals wireflow for the Nueva EPS app redesign",
              color: true,
            },
          },
          {
            heading: "Medical leave certificates",
            text: "This flow allowed users to check whether their medical leave payment had been processed and track the status of the payment request.",
            fullBleedMedia: {
              src: "assets/images/projects/app-redesign-medical-leave-flow.png",
              alt: "Medical leave certificates wireflow for the Nueva EPS app redesign",
              color: true,
            },
          },
          {
            heading: "Healthcare Network Search",
            text: "Using form fields, filters, and result lists, the flow helped users find healthcare providers according to their health plan, location, and type of care.",
            fullBleedMedia: {
              src: "assets/images/projects/app-redesign-healthcare-network-flow.png",
              alt: "Healthcare network search wireflow for the Nueva EPS app redesign",
              color: true,
            },
          },
        ],
      },
      {
        title: "Outcome",
        paragraphs: [
          "The redesign has been used by more than 1 million members monthly. The project delivered a clearer information architecture and a redesigned access experience for key healthcare self-service journeys.",
          "My work helped move the app away from an overloaded feature-based structure towards a more intuitive experience organised around users’ needs.",
        ],
      },
    ],
  },
  "whatsapp-appointments": {
    number: "03",
    title: "WhatsApp Medical Appointments",
    skills:
      "Service Design · UX Design · Conversational Design · Interaction Design · UX Writing · Experience Measurement",
    tools: "Figma · FigJam",
    media: {
      type: "image",
      src: "assets/images/projects/whatsapp-project-photo.png",
      alt: "Healthcare professional standing beside a patient",
      caption: "",
    },
    overview: [
      "Nueva EPS is the main health insurance provider in Colombia, with more than 9 million members. However, users did not have a centralised way to schedule medical appointments, as appointment management depended on the systems used by each healthcare provider.",
      "As part of Nueva EPS’s digital transformation strategy, the project aimed to allow members to schedule, reschedule, cancel, and check medical appointments through a WhatsApp chatbot. This channel was relevant because many members were digital adopters with low digital literacy.",
      "Due to budget constraints, the solution had to be designed as a rule-based chatbot rather than an AI-powered experience. This meant that the interaction needed carefully structured decision paths, simple language, and helpful guidance at each step.",
    ],
    sections: [
      {
        title: "My Role",
        paragraphs: [
          "My role was to design the interactive experience and craft the UX writing for all appointment-related features within the WhatsApp chatbot.",
          "I worked closely with project managers, engineers, and healthcare professionals to define the flows and ensure that the experience was clear, conversational, and easy to use.",
        ],
      },
      {
        title: "The Problem",
        blocks: [
          {
            heading: "User problem",
            text: "Members needed a simple and reliable way to manage the full cycle of their medical appointments. Information and processes were fragmented across providers and systems, making it difficult to offer a clear and centralised experience.",
          },
          {
            heading: "Service and organisational problem",
            text: "Members sometimes called channels that were not enabled for scheduling, congesting service lines. The experience also varied depending on the provider, channel, and each user’s knowledge of the system.",
          },
          {
            heading: "Measurement gap",
            text: "The organisation relied mainly on a general satisfaction survey and could not identify precisely where friction or abandonment occurred.",
          },
        ],
        trailing:
          "The design challenge was to create an accessible conversational experience that reduced uncertainty, made the service more consistent, and enabled more precise measurement.",
        painPoints: [
          "Appointment information was fragmented across providers and systems.",
          "Members lacked a centralised way to manage their appointments.",
          "Users contacted channels that could not handle scheduling requests.",
          "The experience varied depending on the provider and channel used.",
          "Members faced uncertainty when trying to secure appointments.",
          "The organisation could not identify where users abandoned the flow.",
          "Measurement relied mainly on general satisfaction scores.",
        ],
      },
      {
        title: "Main User Groups",
        stackUserGroups: true,
        userGroups: [
          {
            image: "assets/images/projects/whatsapp-user-low-digital-literacy.png",
            alt: "Illustrated portrait of a member with low digital literacy",
            title: "Members with low digital literacy",
            text: "Users familiar with WhatsApp but uncomfortable with complex apps needed simple language, clear options, and step-by-step guidance.",
          },
          {
            image: "assets/images/projects/whatsapp-user-rural-areas.png",
            alt: "Illustrated portrait of a member in a rural or peripheral area",
            title: "Members in rural or peripheral areas",
            text: "The experience needed to reduce unnecessary travel by helping users confirm availability before visiting a provider.",
          },
          {
            image: "assets/images/projects/whatsapp-user-assisted-channels.png",
            alt: "Illustrated portrait of a member who relies on assisted channels",
            title: "Members who rely on assisted channels",
            text: "The service required communication that positioned WhatsApp as the preferred appointment channel.",
          },
          {
            image: "assets/images/projects/whatsapp-user-relative.png",
            alt: "Illustrated portrait of a member who relies on a relative",
            title: "Members who rely on a relative",
            text: "The chatbot needed to support assisted use while protecting personal and medical information.",
          },
        ],
      },
      {
        title: "Service Blueprint",
        paragraphs: [
          "I created a service blueprint to map the people, processes, channels, and technologies involved in delivering the appointment management service, from the first WhatsApp request to validations, provider systems, SMS notifications, and operational rules.",
          "The blueprint connected user-facing interactions such as identity verification, service selection, doctor and date selection, confirmations, reminders, and surveys with backstage processes including plan validation, provider identification, availability checks, and system integrations.",
          "It revealed that scheduling, checking, rescheduling, and cancelling appointments each required a distinct decision tree, with outcomes affected by age, gender, insurance plan, assigned provider, and service availability.",
          "Because users could not be transferred to a contact centre agent, the chatbot had to be self-contained and resilient. The blueprint identified breakdowns, guidance needs, confirmation points, and measurement opportunities.",
        ],
        imagePair: [
          {
            src: "assets/images/projects/whatsapp-service-blueprint-01.png",
            alt: "Service blueprint covering appointment scheduling flows and supporting systems",
          },
          {
            src: "assets/images/projects/whatsapp-service-blueprint-02.png",
            alt: "Service blueprint covering appointment management and alert flows",
          },
        ],
        revealImagePair: true,
      },
      {
        title: "Conversational Flow Design",
        paragraphs: [
          "Because the chatbot was rule-based, every user action, system response, validation, error state, and exit point needed to be anticipated before implementation.",
          "The chatbot handled scenarios based on health plan, provider, medical service, appointment modality, and real-time availability. Users could browse by earliest date or doctor while the system validated whether a selected appointment remained available.",
          "I defined fallback paths for invalid phone numbers, failed identity verification, unavailable appointments, interruptions, non-integrated providers, and appointments that became unavailable after selection.",
        ],
      },
      {
        title: "Tone of Voice",
        paragraphs: [
          "I used the Four Dimensions of Tone of Voice to define how the chatbot should communicate. It needed to be mostly serious, slightly casual, highly respectful, and warm without becoming overly enthusiastic.",
          "These guidelines helped avoid bureaucratic and medicalised language while producing messages that were clear, empathetic, and actionable.",
        ],
        toneVoice: [
          {
            start: "Funny",
            end: "Serious",
            description:
              "Mostly serious. Healthcare interactions required trust and clarity.",
            position: 95,
          },
          {
            start: "Formal",
            end: "Casual",
            description:
              "Slightly casual. WhatsApp needed to feel familiar and conversational.",
            position: 60,
          },
          {
            start: "Respectful",
            end: "Irreverent",
            description:
              "Highly respectful. Users could be handling sensitive medical information.",
            position: 2,
          },
          {
            start: "Enthusiastic",
            end: "Matter-of-fact",
            description:
              "Balanced. Messages needed warmth without sounding exaggerated.",
            position: 26,
          },
        ],
      },
      {
        title: "Sample Messages",
        paragraphs: [
          "Here are a few examples of the original Spanish UX copy translated into English for portfolio purposes.",
        ],
        sampleMessages: true,
      },
      {
        title: "Experience Measurement",
        paragraphs: [
          "After designing the flows, I used the Google HEART Framework to define how the experience could be measured beyond a general satisfaction survey. I translated Happiness, Engagement, Adoption, Retention, and Task Success into objectives, signals, and metrics tied to specific moments in the journey.",
        ],
        heartTable: [
          {
            dimension: "Happiness",
            goal: "Ensure users feel satisfied with the WhatsApp appointment scheduling experience.",
            signals: "Experience measurement and perceived ease of use.",
            metrics:
              "Satisfaction score, positive/negative survey responses, clarity of information, perceived ease of scheduling, reasons for dissatisfaction such as unavailable times or distant appointment dates.",
          },
          {
            dimension: "Engagement",
            goal: "Understand how users interact with the appointment scheduling flow.",
            signals:
              "Bounce rate, exit screens, interaction depth, demographic segmentation, cohort segmentation.",
            metrics:
              "First-message abandonment, messages where users leave the flow, average number of tasks completed per session, usage by demographic or health cohort.",
          },
          {
            dimension: "Adoption",
            goal: "Measure whether users start using WhatsApp as an appointment scheduling channel.",
            signals:
              "New users, growth rate, conversion rate, adoption by feature.",
            metrics:
              "Monthly new users, new user growth, percentage of new users who complete a key action, usage share of each feature such as scheduling, cancelling, rescheduling, or checking appointments.",
          },
          {
            dimension: "Retention",
            goal: "Understand whether users continue using the WhatsApp appointment service over time.",
            signals:
              "Active users, frequency of use, sessions per user, churn rate, retention by feature.",
            metrics:
              "Number and percentage of active users, average return frequency, churn rate, new user churn, segmented churn, retention by specific chatbot functionality.",
          },
          {
            dimension: "Task Success",
            goal: "Measure whether users can complete appointment-related tasks easily and quickly.",
            signals:
              "Task completion, time on task, abandonment, number of attempts, crash rate, success levels.",
            metrics:
              "Task completion rate, average completion time, task abandonment rate, number of attempts, technical error rate, Wald Method success levels.",
          },
          {
            dimension: "Dead ends / failure points",
            goal: "Identify where the experience could break or stop.",
            signals:
              "Points where users cannot continue or where the system cannot complete the request.",
            metrics:
              "No assigned provider, failed identity challenge questions, provider not included, web service failure, exceeded contact-number attempts, existing appointment conflict, no appointments available, selected appointment no longer available.",
          },
        ],
      },
      {
        title: "Results",
        paragraphs: [
          "Within the first six months after launch, approximately 1.8 million people used the service monthly.",
          "One in three users who started the scheduling flow successfully completed an appointment booking.",
          "97% of users who completed the satisfaction survey reported being happy with the service.",
        ],
      },
    ],
  },
  "maternal-health": {
    number: "04",
    title: "Maternal Health Support",
    skills:
      "Conversational Design · Information Architecture · UX Writing · UX Design · Content Audit",
    tools: "FigJam",
    media: {
      type: "image",
      src: "assets/images/projects/maternal-project-photo.png",
      alt: "Pregnant woman smiling and wearing a yellow dress",
      caption: "",
    },
    overview: [
      "Nueva EPS teamed up with LivingLab Telesalud, a telemedicine project led by the University of Antioquia, to support a small group of approximately 500 pregnant women affiliated with Nueva EPS in Antioquia through WhatsApp.",
      "The initial idea was to use WhatsApp as a support channel for pregnancy follow-up and high-risk pregnancy cases, also referred to as maternal morbidity. Because the service addressed sensitive health topics, the experience needed to be emotionally careful and easy to understand.",
    ],
    sections: [
      {
        title: "My Role",
        paragraphs: [
          "My role was to help turn an initial service idea into a structured conversational experience. I co-created the flows with healthcare professionals, interpreting clinical and operational needs into a WhatsApp interaction.",
          "I proposed the information architecture, designed the user flows, and wrote the UX copy. My work focused on making the experience easier to navigate and ensuring that sensitive moments were handled with clarity, warmth, and care.",
        ],
      },
      {
        title: "The Problem",
        paragraphs: [
          "The main challenge was to structure a rule-based chatbot for a sensitive healthcare context. Users needed to understand where to go depending on their situation, while the healthcare team needed the flow to identify when a user required guidance, follow-up, or urgent care.",
          "Some users could be reporting symptoms such as vaginal bleeding, contractions, pain, loss of fluid, or reduced baby movement. The chatbot had to avoid bureaucratic language and guide users towards the right next step without creating confusion or alarm.",
        ],
        painPoints: [
          "Users needed clear guidance in a sensitive maternal health context.",
          "The healthcare team needed to identify when follow-up or urgent care was required.",
          "Users could report symptoms that required timely attention.",
          "The flow needed to avoid bureaucratic or alarming language.",
        ],
      },
      {
        title: "Main User Groups",
        stackUserGroups: true,
        userGroups: [
          {
            image: "assets/images/projects/maternal-user-follow-up.png",
            alt: "Illustrated portrait of a pregnant member receiving follow-up",
            title: "Pregnant members receiving follow-up",
            text: "The chatbot needed to provide a warm, clear, and supportive experience that helped users report how they were feeling, request support, access services, and understand when the healthcare team would contact them.",
          },
          {
            image: "assets/images/projects/maternal-user-high-risk.png",
            alt: "Illustrated portrait of a member with a high-risk pregnancy",
            title: "Members with high-risk pregnancy",
            text: "The flow needed to help users identify and report symptoms clearly, balancing empathetic language with direct guidance in situations that could require timely attention.",
          },
        ],
      },
      {
        title: "Information Architecture",
        architectureVariant: "maternal-information-architecture",
        paragraphs: [
          "I conducted a content audit to review how information was organised, identify unclear labels, and detect categories that were too administrative or grouped together unrelated needs.",
          "The pregnancy follow-up flow used a needs-based menu. The maternal morbidity flow required a guided triage structure, asking how the user was feeling and whether she was experiencing specific symptoms before recommending urgent care or follow-up.",
        ],
        architecture: [
          {
            heading: "Pregnancy Follow-up",
            items: [
              "Symptoms or discomfort",
              {
                label: "Access to health services",
                items: [
                  "Medical appointments",
                  "Medications",
                  "Authorisations",
                  "Referrals",
                  "Lab tests",
                ],
              },
              "Pregnancy-related guidance",
              "Family planning guidance",
              "Send documents",
              "Other services",
            ],
          },
          {
            heading: "Maternal Morbidity",
            items: [
              "Initial check-in",
              "Need for support",
              {
                label: "Symptom screening",
                items: [
                  "High-priority symptoms",
                  "Additional warning symptoms",
                  "Lower-priority symptoms",
                ],
              },
              {
                label: "Response paths",
                items: [
                  "Recommend urgent care",
                  "Healthcare team contacts user",
                  "User describes symptoms",
                  "End interaction with guidance",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Conversational Flow Design",
        paragraphs: [
          "After defining the information architecture, I translated it into two rule-based conversational flows with different interaction models.",
          "The pregnancy follow-up flow worked as a guided support menu, helping users choose between reporting symptoms, accessing health services, requesting guidance, sending documents, or describing another request.",
          "The maternal morbidity flow worked as a guided screening experience. Based on users’ answers, the chatbot could recommend urgent care, request more information, or explain that the healthcare team would contact them.",
        ],
        fullBleedMedia: {
          src: "assets/images/projects/maternal-conversational-flow.png",
          alt: "Maternal health WhatsApp conversational flow diagram",
        },
      },
      {
        title: "Outcome",
        paragraphs: [
          "The final flow was implemented as part of the telemedicine programme, supporting approximately 500 women affiliated with Nueva EPS in Antioquia.",
          "Aligned with LivingLab Telesalud’s broader use of telemedicine to expand access to healthcare, the experience brought maternal health guidance into WhatsApp, a practical and familiar channel.",
        ],
      },
    ],
  },
};

const projectOrder = [
  "rural-healthcare",
  "app-redesign",
  "whatsapp-appointments",
  "maternal-health",
];

function renderParagraphs(paragraphs = []) {
  return paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

function renderGallery(images = []) {
  return `
    <div class="card-sorting-collage" aria-label="Card sorting sessions with ten participants">
      ${images
        .map(
          (image, index) => `
            <figure>
              <img
                src="${image}"
                alt="Card sorting result from participant ${index + 1}"
                loading="lazy"
              />
            </figure>
          `
        )
        .join("")}
    </div>
  `;
}

function renderMatrices(images = []) {
  return `
    <div class="card-sorting-matrices" aria-label="Card sorting analysis matrices">
      ${images
        .map(
          (image) => `
            <figure class="media-sweep-reveal">
              <img src="${image.src}" alt="${image.alt}" loading="lazy" />
            </figure>
          `
        )
        .join("")}
    </div>
  `;
}

function renderStaticImagePair(images = [], reveal = false) {
  if (!images.length) return "";

  return `
    <div class="card-sorting-matrices" aria-label="Offline-first field tool interfaces">
      ${images
        .map(
          (image) => `
            <figure${reveal ? ' class="media-sweep-reveal"' : ""}>
              <img src="${image.src}" alt="${image.alt}" loading="lazy" />
            </figure>
          `
        )
        .join("")}
    </div>
  `;
}

function renderSectionParagraphs(section) {
  return (section.paragraphs || [])
    .map((paragraph, index) => {
      const gallery =
        section.gallery && section.galleryAfterParagraph === index
          ? renderGallery(section.gallery)
          : "";
      const matrices =
        section.matrices && section.matricesAfterParagraph === index
          ? renderMatrices(section.matrices)
          : "";
      return `<p>${paragraph}</p>${gallery}${matrices}`;
    })
    .join("");
}

function renderPainPoints(items) {
  if (!items?.length) return "";

  const cards = items
    .map(
      (item, index) => `
        <article class="pain-point-card">
          <div class="pain-point-letter" aria-hidden="true">
            ${String.fromCharCode(65 + index)}
          </div>
          <p>${item}</p>
        </article>
      `
    )
    .join("");

  return `
    <div class="pain-points-scroll" data-horizontal-scroll>
      <div class="pain-points-sticky">
        <div class="pain-points-track">
          <article class="pain-points-cover">
            <strong>User</strong>
            <h3>Pain points</h3>
            <img src="assets/pain-points-arrow.svg" alt="" aria-hidden="true" />
          </article>
          ${cards}
          <article class="pain-points-end" aria-hidden="true">!</article>
        </div>
      </div>
    </div>
  `;
}

function renderInlineMedia(media) {
  if (!media || media.type !== "image") return "";

  return `
    <figure class="inline-media has-image">
      <img src="${media.src}" alt="${media.alt || ""}" />
    </figure>
  `;
}

function renderFullBleedMedia(media) {
  if (!media?.src) return "";

  return `
    <figure class="case-full-bleed-media${media.color ? " case-full-bleed-media--color" : ""}" data-full-bleed-parallax>
      <img src="${media.src}" alt="${media.alt || ""}" loading="lazy" />
    </figure>
  `;
}

function renderToneVoice(items = []) {
  if (!items.length) return "";

  return `
    <div class="tone-voice-diagram" data-tone-voice>
      ${items
        .map(
          (item) => `
            <article class="tone-voice-row">
              <div class="tone-voice-scale">
                <strong>${item.start}</strong>
                <div class="tone-voice-track" aria-hidden="true">
                  <span
                    class="tone-voice-marker"
                    style="--tone-position: ${item.position}%"
                  ></span>
                </div>
                <strong>${item.end}</strong>
              </div>
              <p>${item.description}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderHeartTable(rows = []) {
  if (!rows.length) return "";

  return `
    <div class="heart-table" role="table" aria-label="Google HEART Framework measurement summary">
      <div class="heart-table-header" role="row">
        <span role="columnheader">HEART dimension</span>
        <span role="columnheader">Goal</span>
        <span role="columnheader">Key signals</span>
        <span role="columnheader">Most relevant metrics</span>
      </div>
      ${rows
        .map(
          (row) => `
            <article class="heart-table-row" role="row">
              <h3 class="heart-dimension" role="rowheader">${row.dimension}</h3>
              <p role="cell">${row.goal}</p>
              <p role="cell">${row.signals}</p>
              <p role="cell">${row.metrics}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderArchitecture(columns = [], title = "", variant = "") {
  if (!columns.length) return "";

  const renderArchitectureItems = (items = []) => `
    <ul>
      ${items
        .map((item) => {
          if (typeof item === "string") return `<li>${item}</li>`;
          return `
            <li>
              ${item.label}
              ${renderArchitectureItems(item.items)}
            </li>
          `;
        })
        .join("")}
    </ul>
  `;

  return `
    <div
      class="architecture-diagram${variant ? ` architecture-diagram--${variant}` : ""}"
      style="--architecture-columns: ${columns.length}"
      aria-label="Information architecture diagram"
    >
      ${title ? `<h3 class="architecture-root">${title}</h3>` : ""}
      <div class="architecture-line" aria-hidden="true"></div>
      ${columns
        .map(
          (column, index) => `
            <section class="architecture-column" style="--architecture-index: ${index}">
              <h3>${column.heading}</h3>
              ${renderArchitectureItems(column.items)}
            </section>
          `
        )
        .join("")}
    </div>
  `;
}

function renderUserGroups(groups = [], stacked = false) {
  if (!groups.length) return "";

  return `
    <div class="user-groups-diagram${stacked ? " user-groups-diagram--stacked" : ""}" aria-label="Main user groups">
      ${groups
        .map(
          (group, index) => `
            <article class="user-group-row" style="--user-group-index: ${index}">
              <img src="${group.image}" alt="${group.alt}" />
              <div>
                <h3>${group.title}</h3>
                <p>${group.text}</p>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderSampleMessages(enabled = false) {
  if (!enabled) return "";

  const screens = [
    {
      title: "Selecting the Service",
      src: "assets/images/projects/whatsapp-selecting-service.svg",
      alt: "WhatsApp screen for selecting an appointment service",
    },
    {
      title: "Selecting the type of appointment",
      src: "assets/images/projects/whatsapp-type-of-appointment.svg",
      alt: "WhatsApp screen for selecting the type of appointment",
    },
    {
      title: "Viewing appointment availability",
      src: "assets/images/projects/whatsapp-appointment-availability.svg",
      alt: "WhatsApp screen showing available medical appointments",
    },
  ];

  return `
    <div class="sample-messages" aria-label="Translated WhatsApp UX copy examples">
      ${screens
        .map(
          (screen) => `
            <article class="sample-message-card">
              <h3>${screen.title}</h3>
              <img
                class="sample-message-screen"
                src="${screen.src}"
                alt="${screen.alt}"
                loading="lazy"
              />
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderSection(section, isAfterPainPoints = false) {
  const blocks = (section.blocks || [])
    .map(
      (block) =>
        `<h3>${block.heading}</h3><p>${block.text}</p>${renderFullBleedMedia(block.fullBleedMedia)}`
    )
    .join("");
  const tree = section.tree
    ? `<pre class="case-tree">${section.tree}</pre>`
    : "";
  const trailing = section.trailing ? `<p>${section.trailing}</p>` : "";
  const sectionClasses = ["case-section"];
  if (isAfterPainPoints) {
    sectionClasses.push("case-section--after-pain-points");
  }
  if (section.stackUserGroups) {
    sectionClasses.push("case-section--stacked-user-groups");
  }
  if (section.architecture?.length) {
    sectionClasses.push("case-section--has-architecture");
  }

  return `
    <section class="${sectionClasses.join(" ")}" data-section-title="${section.title}">
      <h2>${section.title}</h2>
      <div class="case-section-content rich-copy">
        ${renderSectionParagraphs(section)}
        ${blocks}
        ${renderStaticImagePair(section.imagePair, section.revealImagePair)}
        ${trailing}
        ${tree}
        ${renderHeartTable(section.heartTable)}
        ${renderArchitecture(
          section.architecture,
          section.architectureTitle,
          section.architectureVariant ||
            (section.title === "Interaction Model" ? "interaction-model" : "")
        )}
        ${renderUserGroups(section.userGroups, section.stackUserGroups)}
        ${renderToneVoice(section.toneVoice)}
        ${renderSampleMessages(section.sampleMessages)}
      </div>
      ${renderPainPoints(section.painPoints)}
      ${renderInlineMedia(section.media)}
      ${renderFullBleedMedia(section.fullBleedMedia)}
    </section>
  `;
}

function initialiseHorizontalScroll() {
  const scenes = document.querySelectorAll("[data-horizontal-scroll]");
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  scenes.forEach((scene) => {
    const sticky = scene.querySelector(".pain-points-sticky");
    const track = scene.querySelector(".pain-points-track");
    let travel = 0;
    let ticking = false;

    const measure = () => {
      if (reducedMotion) return;
      travel = Math.max(0, track.scrollWidth - sticky.clientWidth);
      scene.style.height = `${window.innerHeight + travel}px`;
      update();
    };

    const update = () => {
      if (reducedMotion) return;
      const rect = scene.getBoundingClientRect();
      const available = Math.max(1, scene.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / available));
      track.style.transform = `translate3d(${-travel * progress}px, 0, 0)`;
      ticking = false;
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", requestUpdate, { passive: true });
  });
}

function getCaseSectionIndicatorThreshold() {
  return document.querySelector(".case-header")?.offsetHeight || 52;
}

function initialiseSectionIndicator() {
  const indicator = document.querySelector("#case-section-indicator");
  const projectTitle = document.querySelector("#indicator-project-title");
  const currentLabel = document.querySelector("#indicator-section-current");
  const nextLabel = document.querySelector("#indicator-section-next");
  const sections = [...document.querySelectorAll("[data-section-title]")].map(
    (section) => ({
      section,
      heading: section.querySelector("h2"),
      title: section.dataset.sectionTitle,
    })
  );
  let activeTitle = "";
  let ticking = false;
  let transitionTimer;

  projectTitle.textContent = project.title;

  const changeLabel = (title) => {
    if (title === activeTitle) return;
    window.clearTimeout(transitionTimer);

    if (!activeTitle) {
      currentLabel.textContent = title;
      activeTitle = title;
      return;
    }

    nextLabel.textContent = title;
    currentLabel.classList.add("is-leaving");
    nextLabel.classList.add("is-entering");

    transitionTimer = window.setTimeout(() => {
      currentLabel.textContent = title;
      currentLabel.classList.remove("is-leaving");
      nextLabel.classList.remove("is-entering");
      nextLabel.textContent = "";
    }, 520);

    activeTitle = title;
  };

  const update = () => {
    const headerHeight = getCaseSectionIndicatorThreshold();
    let activeSection = null;

    sections.forEach((item) => {
      if (item.section.getBoundingClientRect().top <= headerHeight) {
        activeSection = item;
      }
    });

    const isVisible = Boolean(activeSection);
    indicator.classList.toggle("is-visible", isVisible);
    indicator.setAttribute("aria-hidden", String(!isVisible));
    document.body.classList.toggle("has-section-indicator", isVisible);

    if (activeSection) changeLabel(activeSection.title);
    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}

function initialiseReadingProgress() {
  const progressBar = document.querySelector("#case-reading-progress-bar");
  const caseStudy = document.querySelector("#case-study");
  const overview = document.querySelector(
    '[data-section-title="Project Overview"]'
  );
  let ticking = false;

  const update = () => {
    const start = overview.offsetTop;
    const end = Math.max(
      start + 1,
      caseStudy.offsetTop + caseStudy.offsetHeight - window.innerHeight
    );
    const progress = Math.min(
      1,
      Math.max(0, (window.scrollY - start) / (end - start))
    );

    progressBar.style.transform = `scaleX(${progress})`;
    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}

function initialiseStickyMeta() {
  const meta = document.querySelector(".case-meta");
  const main = document.querySelector("#case-study");
  const summary = document.querySelector(".case-summary");
  const media = document.querySelector("#project-media");
  const originalParent = meta?.parentElement;
  const originalNextSibling = meta?.nextElementSibling;
  const problemSection = document.querySelector(
    '[data-section-title="The Problem"]'
  );
  const mobileQuery = window.matchMedia("(max-width: 760px)");
  let rail = null;
  let updateFrame = 0;

  if (!meta || !problemSection) return;

  const restoreMeta = () => {
    const currentRail = meta.parentElement?.classList.contains("case-meta-rail")
      ? meta.parentElement
      : null;

    if (originalNextSibling) {
      originalParent.insertBefore(meta, originalNextSibling);
    } else {
      originalParent.appendChild(meta);
    }

    currentRail?.remove();
    rail = null;
  };

  const updateRailEnd = () => {
    if (!rail || mobileQuery.matches) return;

    const mainTop = main.getBoundingClientRect().top + window.scrollY;
    const railTop = mainTop + Number.parseFloat(rail.style.top || "0");
    const problemDividerTop =
      problemSection.getBoundingClientRect().top + window.scrollY;
    const metaHeight = meta.getBoundingClientRect().height;

    rail.style.height = `${Math.max(
      metaHeight,
      problemDividerTop - railTop + metaHeight
    )}px`;
  };

  const scheduleRailUpdate = () => {
    window.cancelAnimationFrame(updateFrame);
    updateFrame = window.requestAnimationFrame(updateRailEnd);
  };

  const buildRail = () => {
    restoreMeta();
    if (mobileQuery.matches) return;

    const metaRect = meta.getBoundingClientRect();
    const mainRect = main.getBoundingClientRect();
    const naturalTop = metaRect.top + window.scrollY;
    rail = document.createElement("div");

    rail.className = "case-meta-rail";
    rail.style.top = `${naturalTop - (mainRect.top + window.scrollY)}px`;
    rail.style.left = `${metaRect.left - mainRect.left}px`;
    rail.style.width = `${metaRect.width}px`;

    main.appendChild(rail);
    rail.appendChild(meta);
    updateRailEnd();
  };

  buildRail();
  window.addEventListener("resize", buildRail);
  window.addEventListener("load", scheduleRailUpdate);
  mobileQuery.addEventListener("change", buildRail);

  document.fonts?.ready.then(scheduleRailUpdate);

  document.querySelectorAll("img").forEach((image) => {
    if (!image.complete) image.addEventListener("load", scheduleRailUpdate);
  });

  document.querySelectorAll("video").forEach((video) => {
    video.addEventListener("loadedmetadata", scheduleRailUpdate);
  });

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(scheduleRailUpdate);
    if (summary) observer.observe(summary);
    if (media) observer.observe(media);
  }
}

const params = new URLSearchParams(window.location.search);
const requestedId = params.get("id");
const projectId = projects[requestedId] ? requestedId : projectOrder[0];
const project = projects[projectId];
const nextId =
  projectOrder[(projectOrder.indexOf(projectId) + 1) % projectOrder.length];
const nextProject = projects[nextId];

document.title = `${project.title} — Diego Cárdenas Mora`;
document.querySelector("#project-number").textContent = project.number;
document.querySelector("#project-title").textContent = project.title;
document.querySelector("#project-skills").textContent = project.skills;
document.querySelector("#project-tools").textContent = project.tools;
document.querySelector("#project-overview").className = "rich-copy";
document.querySelector("#project-overview").innerHTML = renderParagraphs(
  project.overview
);

const mediaFigure = document.querySelector("#project-media");
const mediaContent = document.querySelector("#project-media-content");
const mediaCaption = document.querySelector("#project-media-caption");

if (project.media?.type === "video") {
  mediaFigure.classList.add("has-video");
  mediaContent.classList.add("case-video");
  mediaContent.innerHTML = `
    <video autoplay muted loop playsinline preload="metadata" aria-label="${project.media.caption}">
      <source src="${project.media.src}" type="video/mp4">
      Your browser does not support HTML video.
    </video>
  `;
  mediaCaption.remove();
} else if (project.media?.type === "image") {
  mediaFigure.classList.add("has-image");
  mediaContent.classList.add("case-image");
  if (
    projectId === "rural-healthcare" ||
    projectId === "maternal-health" ||
    projectId === "whatsapp-appointments"
  ) {
    mediaFigure.classList.add("case-media--closer-to-overview");
  }
  if (
    projectId === "rural-healthcare" ||
    projectId === "maternal-health" ||
    projectId === "whatsapp-appointments"
  ) {
    mediaContent.classList.add("case-image--scroll-reveal");
  }
  mediaContent.innerHTML = `
    <img src="${project.media.src}" alt="${project.media.alt}">
  `;
  if (project.media.caption) {
    mediaCaption.textContent = project.media.caption;
  } else {
    mediaCaption.remove();
  }
}

function initialiseMediaReveals() {
  const mediaReveals = document.querySelectorAll(
    ".case-image--scroll-reveal, .media-sweep-reveal"
  );
  if (!mediaReveals.length) return;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    mediaReveals.forEach((media) => media.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -18% 0px",
      threshold: 0.2,
    }
  );

  mediaReveals.forEach((media) => observer.observe(media));
}

function initialiseFullBleedParallax() {
  const mediaItems = document.querySelectorAll("[data-full-bleed-parallax]");
  if (!mediaItems.length) return;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  let frame = 0;

  const update = () => {
    mediaItems.forEach((media) => {
      if (reducedMotion) {
        media.style.setProperty("--parallax-offset", "0px");
        return;
      }

      const rect = media.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const mediaCenter = rect.top + rect.height / 2;
      const distance = (mediaCenter - viewportCenter) / window.innerHeight;
      const offset = Math.max(-46, Math.min(46, distance * -46));

      media.style.setProperty("--parallax-offset", `${offset}px`);
    });

    frame = 0;
  };

  const requestUpdate = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}

function initialiseHeartTable() {
  const rows = document.querySelectorAll(".heart-table-row");
  if (!rows.length) return;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    rows.forEach((row) => row.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    },
    {
      rootMargin: "-12% 0px -12% 0px",
      threshold: 0.25,
    }
  );

  rows.forEach((row) => observer.observe(row));
}

function initialiseToneVoice() {
  const diagram = document.querySelector("[data-tone-voice]");
  if (!diagram) return;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    diagram.classList.add("is-visible");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      diagram.classList.add("is-visible");
      observer.disconnect();
    },
    {
      rootMargin: "0px 0px -16% 0px",
      threshold: 0.3,
    }
  );

  observer.observe(diagram);
}

function initialiseArchitectureDiagram() {
  const diagram = document.querySelector(".architecture-diagram");
  if (!diagram) return;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    diagram.classList.add("is-visible");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      diagram.classList.add("is-visible");
      observer.disconnect();
    },
    {
      rootMargin: "0px 0px -18% 0px",
      threshold: 0.18,
    }
  );

  observer.observe(diagram);
}

const painPointsSectionIndex = project.sections.findIndex(
  (section) => section.painPoints?.length
);

document.querySelector("#project-sections").innerHTML = project.sections
  .map((section, index) =>
    renderSection(
      section,
      painPointsSectionIndex >= 0 && index > painPointsSectionIndex
    )
  )
  .join("");

function initialiseStackedUserGroups() {
  const sections = [
    ...document.querySelectorAll(".case-section--stacked-user-groups"),
  ];

  if (!sections.length) return;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  const mobileLayout = window.matchMedia("(max-width: 339px)");

  sections.forEach((section) => {
    const heading =
      section.querySelector(":scope > h2") ||
      section.querySelector(":scope > .user-groups-pin > h2");

    const content =
      section.querySelector(":scope > .case-section-content") ||
      section.querySelector(
        ":scope > .user-groups-pin > .case-section-content"
      );

    const diagram = section.querySelector(".user-groups-diagram--stacked");

    if (!heading || !content || !diagram) return;

    let pin = section.querySelector(":scope > .user-groups-pin");

    if (!pin) {
      pin = document.createElement("div");
      pin.className = "user-groups-pin";

      section.insertBefore(pin, heading);
      pin.appendChild(heading);
      pin.appendChild(content);
    }

    const cards = [...diagram.querySelectorAll(".user-group-row")];

    if (cards.length < 2) return;

    let stickyTop = 103;
    let cardHeight = 199;
    let cardGap = 120;
    let scrollDistance = 1;
    let indicatorThreshold = 52;
    let exitHold = 120;
    let ticking = false;
    const nextSection = section.nextElementSibling;

    if (nextSection?.classList.contains("case-section")) {
      nextSection.classList.add("case-section--stacked-followup");
    }

    const getNumberFromCssVariable = (element, variableName, fallback) => {
      const value = window
        .getComputedStyle(element)
        .getPropertyValue(variableName)
        .trim();

      const number = Number.parseFloat(value);

      return Number.isNaN(number) ? fallback : number;
    };

    const setCardPositions = (progress) => {
      cards.forEach((card, index) => {
        const offset = Math.max(0, (index - progress) * cardGap);

        card.style.zIndex = String(index + 1);
        card.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };

    const reset = () => {
      section.style.height = "";
      diagram.style.height = "";
      section.style.setProperty("--user-groups-content-opacity", "1");
      nextSection?.classList.add("is-visible");

      cards.forEach((card, index) => {
        card.style.zIndex = String(index + 1);
        card.style.transform = "";
      });
    };

    const measure = () => {
      if (reducedMotion.matches || mobileLayout.matches) {
        reset();
        return;
      }

      stickyTop = getNumberFromCssVariable(
        section,
        "--user-groups-sticky-top",
        103
      );

      cardHeight = getNumberFromCssVariable(
        section,
        "--user-groups-card-height",
        199
      );

      const cardPeekGap = getNumberFromCssVariable(
        section,
        "--user-groups-card-peek-gap",
        8
      );

      cardGap = Math.max(1, cardHeight + cardPeekGap);

      scrollDistance = Math.max(
        1,
        (cards.length - 1) * cardGap
      );

      const pinHeight = Math.max(
        1,
        window.innerHeight - stickyTop
      );

      exitHold = getNumberFromCssVariable(
        section,
        "--user-groups-exit-hold",
        120
      );

      indicatorThreshold = getCaseSectionIndicatorThreshold();

      section.style.height = `${Math.max(
        pinHeight,
        pinHeight + scrollDistance + exitHold - indicatorThreshold
      )}px`;

      diagram.style.height = `${
        cardHeight + (cards.length - 1) * cardGap
      }px`;

      setCardPositions(0);
      update();
    };

    const update = () => {
      if (reducedMotion.matches || mobileLayout.matches) {
        ticking = false;
        return;
      }

      indicatorThreshold = getCaseSectionIndicatorThreshold();

      const currentScroll =
        indicatorThreshold - section.getBoundingClientRect().top;

      const progress = Math.min(
        cards.length - 1,
        Math.max(0, currentScroll / cardGap)
      );

      const fadeProgress = Math.min(
        1,
        Math.max(0, (currentScroll - scrollDistance) / exitHold)
      );

      const contentOpacity = 1 - fadeProgress;

      setCardPositions(progress);

      section.style.setProperty(
        "--user-groups-content-opacity",
        contentOpacity.toFixed(4)
      );

      nextSection?.classList.toggle("is-visible", fadeProgress >= 0.98);

      ticking = false;
    };

    const requestUpdate = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(update);
    };

    if (!nextSection || reducedMotion.matches || mobileLayout.matches) {
      nextSection?.classList.add("is-visible");
    }

    setCardPositions(0);
    window.requestAnimationFrame(measure);

    window.addEventListener("resize", measure);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    reducedMotion.addEventListener("change", measure);
    mobileLayout.addEventListener("change", measure);
  });
}

initialiseHorizontalScroll();
initialiseSectionIndicator();
initialiseReadingProgress();
initialiseStickyMeta();
initialiseMediaReveals();
initialiseFullBleedParallax();
initialiseHeartTable();
initialiseToneVoice();
initialiseArchitectureDiagram();
initialiseStackedUserGroups();

document.querySelector("#next-project").href = `project.html?id=${nextId}`;
document.querySelector("#next-project-title").textContent = nextProject.title;
