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
      "Nueva EPS has a large number of members living in rural areas of Colombia, where communities are dispersed and connectivity can be limited. In municipalities with fewer than 10,000 members, opening a physical service office is not cost-effective, so Promotores Integrales de Salud (PIS) play a key role in connecting members with the insurer’s services.",
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
        flowModel: "offline-first-authorisation",
      },
      {
        title: "Outcome",
        offlineOutcome: true,
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
        architectureVariant: "app-information-architecture",
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
        title: "Key Flows",
        blocks: [
          {
            homeFlow: true,
          },
          {
            approvalFlow: true,
          },
          {
            medicalLeaveFlow: true,
          },
          {
            networkFlow: true,
          },
        ],
      },
      {
        title: "Outcome",
        appOutcome: true,
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
        title: "Conversational flow design",
        paragraphs: [
          "I mapped the WhatsApp experience as a rule-based conversation with shared checks and four appointment tasks: schedule, check, cancel and modify. The challenge was to keep the conversation simple while accounting for plan type, provider integration, identity verification, live appointment availability and recovery paths.",
        ],
        conversationFlow: true,
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
        ],
      },
      {
        title: "Results",
        whatsappResults: true,
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
        headingLayout: "flow-overview",
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
        indicatorTitle: "WhatsApp navigation flow",
        hideTitle: true,
        maternalWhatsappFlow: true,
      },
      {
        title: "Outcome",
        maternalOutcome: true,
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
  const layoutClass =
    images.length === 3 ? " card-sorting-matrices--three" : "";

  return `
    <div class="card-sorting-matrices${layoutClass}" aria-label="Offline-first field tool interfaces">
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

function renderOfflineOutcome(shouldRender = false) {
  if (!shouldRender) return "";

  const metrics = [
    {
      kicker: "Reach",
      value: "70K+",
      label: "People in rural areas supported during 2025–2026.",
      modifier: "offline-outcome-card--primary",
    },
    {
      kicker: "Processing",
      value: "4× faster",
      label: "Reduced approval request processing time from around 20 minutes to 5 minutes.",
      modifier: "offline-outcome-card--system",
    },
    {
      kicker: "Continuity",
      value: "Offline",
      label: "Allowed PIS to capture, store and synchronise requests when connection returned.",
      modifier: "offline-outcome-card--offline",
    },
    {
      kicker: "Data handling",
      value: "Less paper",
      label: "Reduced the need to carry or photocopy physical medical documents.",
      modifier: "offline-outcome-card--online",
    },
  ];

  return `
    <div class="offline-outcome" aria-label="Offline-first field tool outcome">
      <div class="offline-outcome-heading">
        <h3>Outcome</h3>
        <p>
          The tool was implemented to support healthcare field operations in rural areas
          of Colombia, helping PIS submit healthcare service approval requests even in
          low-connectivity contexts.
        </p>
      </div>

      <div class="offline-outcome-grid" aria-label="Project impact metrics">
        ${metrics
          .map(
            (metric) => `
              <article class="offline-outcome-card ${metric.modifier}">
                <div>
                  <p class="offline-outcome-card-kicker">${metric.kicker}</p>
                  <p class="offline-outcome-card-value">${metric.value}</p>
                </div>

                <p class="offline-outcome-card-label">${metric.label}</p>
              </article>
            `
          )
          .join("")}
      </div>

      <div class="offline-outcome-story">
        <article class="offline-outcome-story-panel">
          <h4>From field constraint to service continuity</h4>
          <p>
            By allowing PIS to capture, store and synchronise requests in an offline-first
            solution, the experience supported work in rural contexts where connectivity
            could be unstable or unavailable.
          </p>
        </article>

        <article class="offline-outcome-story-panel offline-outcome-story-panel--impact">
          <h4>Operational and data protection impact</h4>
          <ul class="offline-outcome-impact-list">
            <li>
              <span>01</span>
              <p>
                Helped lower the risk of losing personal information and special category
                health data.
              </p>
            </li>

            <li>
              <span>02</span>
              <p>Reduced dependency on physical paperwork during field visits.</p>
            </li>

            <li>
              <span>03</span>
              <p>Made healthcare access more reliable for members in low-connectivity areas.</p>
            </li>
          </ul>
        </article>
      </div>

      <div class="offline-outcome-quote">
        <p>
          Beyond improving an internal process, the project helped make healthcare access
          more reliable for members in dispersed rural communities.
        </p>
      </div>
    </div>
  `;
}

function renderMaternalOutcome(shouldRender = false) {
  if (!shouldRender) return "";

  const metrics = [
    {
      kicker: "Reach",
      value: "500",
      label:
        "Women affiliated with Nueva EPS in Antioquia supported through the final flow.",
      modifier: "maternal-outcome-card--primary",
    },
    {
      kicker: "Programme",
      value: "Telemedicine",
      label:
        "Implemented as part of a broader programme using telemedicine to expand access to healthcare.",
      modifier: "maternal-outcome-card--programme",
      textValue: true,
    },
    {
      kicker: "Access",
      value: "WhatsApp",
      label:
        "Brought maternal health guidance into a practical and familiar channel for users.",
      modifier: "maternal-outcome-card--channel",
      textValue: true,
    },
  ];

  return `
    <div class="maternal-outcome" aria-label="Maternal Health Support outcome">
      <div class="maternal-outcome-heading">
        <h3>Outcome</h3>
      </div>

      <div class="maternal-outcome-grid" aria-label="Maternal Health Support outcome highlights">
        ${metrics
          .map(
            (metric) => `
              <article class="maternal-outcome-card ${metric.modifier}">
                <div>
                  <p class="maternal-outcome-card-kicker">${metric.kicker}</p>
                  <p class="maternal-outcome-card-value${metric.textValue ? " maternal-outcome-card-value--text" : ""}">${metric.value}</p>
                </div>

                <p class="maternal-outcome-card-label">${metric.label}</p>
              </article>
            `
          )
          .join("")}
      </div>

      <div class="maternal-outcome-story">
        <article class="maternal-outcome-story-panel">
          <h4>Experience impact</h4>
          <ul class="maternal-outcome-impact-list">
            <li>
              <span>01</span>
              <p>Supported maternal health guidance through a familiar messaging channel.</p>
            </li>

            <li>
              <span>02</span>
              <p>Connected pregnancy follow-up, symptom support and healthcare access in one flow.</p>
            </li>

            <li>
              <span>03</span>
              <p>Helped extend telemedicine support to women affiliated with Nueva EPS in Antioquia.</p>
            </li>
          </ul>
        </article>
      </div>
    </div>
  `;
}

function renderConversationFlow(shouldRender = false) {
  if (!shouldRender) return "";

  const summaryCards = [
    {
      className: "conversation-flow__summary-card--schedule",
      kicker: "Task 01",
      title: "Schedule",
      text: "Users could find available appointments by earliest date or by doctor, then confirm a selected slot.",
    },
    {
      className: "conversation-flow__summary-card--check",
      kicker: "Task 02",
      title: "Check",
      text: "The bot retrieved future appointments and displayed the next action depending on whether users had one or several bookings.",
    },
    {
      className: "conversation-flow__summary-card--cancel",
      kicker: "Task 03",
      title: "Cancel",
      text: "Users selected a scheduled appointment, confirmed the cancellation and received a cancellation code.",
    },
    {
      className: "conversation-flow__summary-card--modify",
      kicker: "Task 04",
      title: "Modify",
      text: "Users selected an existing appointment, searched for a replacement slot and confirmed the new booking.",
    },
  ];

  const lanes = [
    {
      label: "Shared entry",
      className: "conversation-flow__lane--shared",
      steps: [
        {
          step: "Step 01",
          title: "Main menu",
          text: "The user starts from the WhatsApp menu and selects Medical Appointments.",
        },
        {
          step: "Step 02",
          title: "Eligibility check",
          text: "The system validates assigned provider, provider integration and plan type.",
        },
        {
          step: "Step 03",
          title: "Identity check",
          text: "The bot protects medical information through challenge questions before continuing.",
        },
        {
          step: "Step 04",
          title: "Agenda menu",
          text: "Users choose whether to schedule, check, cancel or modify an appointment.",
        },
      ],
    },
    {
      label: "Schedule path",
      className: "conversation-flow__lane--schedule",
      steps: [
        {
          step: "Step 01",
          title: "Confirm contact",
          text: "The user confirms or updates the phone number used for appointment messages.",
        },
        {
          step: "Step 02",
          title: "Choose service",
          text: "The bot asks for the type of medical appointment the user wants to book.",
        },
        {
          step: "Step 03",
          title: "Filter options",
          text: "Users browse available slots by earliest date or by doctor.",
        },
        {
          step: "Step 04",
          title: "Confirm booking",
          text: "The selected slot is confirmed only after the user reviews the appointment details.",
        },
      ],
    },
    {
      label: "Check path",
      className: "conversation-flow__lane--check",
      trackClass: "conversation-flow__track--two",
      steps: [
        {
          step: "Step 01",
          title: "Query bookings",
          text: "The system checks future appointments linked to the member.",
        },
        {
          step: "Step 02",
          title: "Show appointment",
          text: "The bot displays date, time, specialty, doctor, provider, address and modality.",
        },
      ],
    },
    {
      label: "Cancel path",
      className: "conversation-flow__lane--cancel",
      steps: [
        {
          step: "Step 01",
          title: "List appointments",
          text: "The bot shows cancellable appointments and reminds users about the time limit.",
        },
        {
          step: "Step 02",
          title: "Select appointment",
          text: "The user writes the number of the appointment they want to cancel.",
        },
        {
          step: "Step 03",
          title: "Confirm cancellation",
          text: "The bot asks for confirmation before executing the cancellation.",
        },
        {
          step: "Step 04",
          title: "Give reference",
          text: "The user receives a cancellation confirmation or an already-cancelled notice with a code.",
        },
      ],
    },
    {
      label: "Modify path",
      className: "conversation-flow__lane--modify",
      steps: [
        {
          step: "Step 01",
          title: "Select current booking",
          text: "The user chooses the appointment they want to change.",
        },
        {
          step: "Step 02",
          title: "Find new slot",
          text: "The bot reuses the scheduling pattern to search by date or doctor.",
        },
        {
          step: "Step 03",
          title: "Confirm change",
          text: "The user reviews the new appointment before confirming the modification.",
        },
        {
          step: "Step 04",
          title: "Close loop",
          text: "The bot confirms the new appointment and provides the cancellation reference for the previous one.",
        },
      ],
    },
  ];

  const logicCards = [
    {
      title: "Shared entry, separate tasks",
      text: "All appointment actions start from the same agenda menu, but each task has its own decision path.",
    },
    {
      title: "Reuse patterns",
      text: "Scheduling and modification share the same doctor/date filtering pattern to reduce relearning.",
    },
    {
      title: "Confirm before committing",
      text: "Booking, cancellation and modification all include confirmation steps before changing an appointment.",
    },
    {
      title: "Design for failure",
      text: "Provider limitations, unavailable slots, failed services and privacy checks were handled as expected paths.",
    },
  ];

  return `
    <div class="conversation-flow" aria-label="Conversational flow design">
      <div class="conversation-flow__summary" aria-label="Appointment task overview">
        ${summaryCards
          .map(
            (card) => `
              <article class="conversation-flow__summary-card ${card.className}">
                <div>
                  <span>${card.kicker}</span>
                  <h3>${card.title}</h3>
                </div>
                <p>${card.text}</p>
              </article>
            `
          )
          .join("")}
      </div>

      <div class="conversation-flow__map" aria-label="WhatsApp appointment conversational flow map">
        ${lanes
          .map(
            (lane) => `
              <div class="conversation-flow__lane ${lane.className}">
                <div class="conversation-flow__lane-label">${lane.label}</div>
                <div class="conversation-flow__track ${lane.trackClass || ""}">
                  ${lane.steps
                    .map(
                      (step) => `
                        <article class="conversation-flow__node">
                          <span>${step.step}</span>
                          <h3>${step.title}</h3>
                          <p>${step.text}</p>
                        </article>
                      `
                    )
                    .join("")}
                </div>
              </div>
            `
          )
          .join("")}
      </div>

      <article class="conversation-flow__recovery">
        <h3>Recovery and edge cases</h3>
        <p>The flow needed to avoid dead ends. If the provider was not integrated, the bot redirected users to the IPS or medical directory. If the web service failed, it showed a contingency message. If a selected appointment was no longer available, the bot returned users to the closest available options. If identity verification failed, the conversation stopped for privacy and safety.</p>
      </article>

      <div class="conversation-flow__logic-section">
        <div class="conversation-flow__logic-heading">
          <span>Design decisions</span>
        </div>
        <div class="conversation-flow__logic" aria-label="Conversational flow design decisions">
          ${logicCards
            .map(
              (card) => `
                <article class="conversation-flow__logic-card">
                  <h3>${card.title}</h3>
                  <p>${card.text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
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

function renderHomeFlow() {
  const screens = [
    {
      src: "assets/images/projects/app-redesign-home-flow/home-access-screen.png",
      alt: "Access screen mockup",
    },
    {
      src: "assets/images/projects/app-redesign-home-flow/home-biometric-setup.png",
      alt: "Biometric setup mockup",
    },
    {
      src: "assets/images/projects/app-redesign-home-flow/home-hub.png",
      alt: "Home hub mockup",
    },
  ];

  const steps = [
    {
      label: "Step 01",
      title: "Access check",
      text: "Password, first-time biometrics, collaborator entry and account validation.",
    },
    {
      label: "Step 02",
      title: "First visit",
      text: "Short onboarding explains the new app structure before Home.",
    },
    {
      label: "Step 03",
      title: "Home hub",
      text: "Recent features, notifications and frequent healthcare tasks.",
    },
    {
      label: "Step 04",
      title: "Next route",
      text: "Users continue to Health, Certificates, Support or Network.",
    },
  ];

  const decisions = [
    {
      title: "Reduce choices before login",
      text: "The first screen focused on access. Secondary actions moved into clearer routes.",
    },
    {
      title: "Show recent interactions",
      text: "Home let members see the latest features they had used, so they could return faster.",
    },
    {
      title: "Add useful notifications",
      text: "Notifications included medical appointment reminders and confirmations for healthcare service approvals.",
    },
  ];

  return `
    <section class="home-flow" aria-labelledby="home-flow-title">
      <div class="home-flow__intro">
        <h2 id="home-flow-title">Home and access logic</h2>
        <p>I treated Home as the app’s entry layer. With the redesign, biometric access was added for the first time. Home also helped members return to recent features, check notifications, and reach key services.</p>
      </div>

      <div class="home-flow__screens" aria-label="Selected Home flow screens">
        ${screens
          .map(
            (screen) => `
              <figure class="home-flow__screen">
                <img src="${screen.src}" alt="${screen.alt}" loading="lazy" />
              </figure>
            `.trim()
          )
          .join("")}
      </div>

      <div class="home-flow__map" aria-label="Home flow logic map">
        <div class="home-flow__lane">
          <div class="home-flow__lane-label">Main path</div>
          <div class="home-flow__track">
            ${steps
              .map(
                (step) => `
                  <article class="home-flow__node">
                    <span>${step.label}</span>
                    <h3>${step.title}</h3>
                    <p>${step.text}</p>
                  </article>
                `.trim()
              )
              .join("")}
          </div>
        </div>
      </div>

      <div class="home-flow__logic-section">
        <div class="home-flow__logic-heading">
          <span>Design decisions</span>
        </div>
        <div class="home-flow__logic" aria-label="Design decisions">
          ${decisions
            .map(
              (decision) => `
                <article class="home-flow__logic-card">
                  <h3>${decision.title}</h3>
                  <p>${decision.text}</p>
                </article>
              `.trim()
            )
            .join("")}
        </div>
      </div>
    </section>
  `.trim();
}

function renderApprovalFlow() {
  const lanes = [
    {
      label: "Request path",
      steps: [
        {
          label: "Step 01",
          title: "Choose action",
          text: "Users enter Authorisations and choose between requesting or checking.",
        },
        {
          label: "Step 02",
          title: "Select member",
          text: "The request can be made for the user or someone in their family group.",
        },
        {
          label: "Step 03",
          title: "Upload documents",
          text: "Users add the medical order and supporting clinical history if needed.",
        },
        {
          label: "Step 04",
          title: "Review and send",
          text: "The final step lets users check documents and observations before submission.",
        },
      ],
    },
    {
      label: "Follow-up path",
      steps: [
        {
          label: "Step 01",
          title: "Confirm phone",
          text: "The app checks the phone number used for status updates.",
        },
        {
          label: "Step 02",
          title: "Validate input",
          text: "Users are guided if the phone number, file size or file format is wrong.",
        },
        {
          label: "Step 03",
          title: "Track status",
          text: "Users can consult the request instead of starting a new one.",
        },
        {
          label: "Step 04",
          title: "Receive result",
          text: "The app keeps users informed when the approval number is ready.",
        },
      ],
    },
  ];

  const decisions = [
    {
      title: "Separate request and consult",
      text: "The flow split new submissions from status checks to reduce repeated work.",
    },
    {
      title: "Support family-group use",
      text: "Members could request approvals for themselves or another person in their group.",
    },
    {
      title: "Control document quality",
      text: "The upload step handled camera, gallery and PDF files, with size and format checks.",
    },
  ];

  return `
    <section class="approval-flow" aria-labelledby="approval-flow-title">
      <div class="approval-flow__intro">
        <h2 id="approval-flow-title">Healthcare service approvals</h2>
        <p>I treated this flow as a guided submission and follow-up process. Members needed to request an approval, upload the right documents, confirm their contact details, and check the status without calling support.</p>
      </div>

      <figure class="approval-flow__screen">
        <img src="assets/images/projects/app-redesign-approval-flow/healthcare-service-approvals-mockup.png" alt="Healthcare service approvals mockup" loading="lazy" />
      </figure>

      <div class="approval-flow__map" aria-label="Healthcare service approvals flow map">
        ${lanes
          .map(
            (lane) => `
              <div class="approval-flow__lane">
                <div class="approval-flow__lane-label">${lane.label}</div>
                <div class="approval-flow__track">
                  ${lane.steps
                    .map(
                      (step) => `
                        <article class="approval-flow__node">
                          <span>${step.label}</span>
                          <h3>${step.title}</h3>
                          <p>${step.text}</p>
                        </article>
                      `.trim()
                    )
                    .join("")}
                </div>
              </div>
            `.trim()
          )
          .join("")}
      </div>

      <div class="approval-flow__logic-section">
        <div class="approval-flow__logic-heading">
          <span>Design decisions</span>
        </div>
        <div class="approval-flow__logic" aria-label="Design decisions">
          ${decisions
            .map(
              (decision) => `
                <article class="approval-flow__logic-card">
                  <h3>${decision.title}</h3>
                  <p>${decision.text}</p>
                </article>
              `.trim()
            )
            .join("")}
        </div>
      </div>
    </section>
  `.trim();
}

function renderMedicalLeaveFlow() {
  const screens = [
    {
      src: "assets/images/projects/app-redesign-medical-leave-flow/medical-leave-incapacities-hub.png",
      alt: "Incapacities hub mockup",
    },
    {
      src: "assets/images/projects/app-redesign-medical-leave-flow/medical-leave-recipient-email.png",
      alt: "Recipient and email mockup",
    },
    {
      src: "assets/images/projects/app-redesign-medical-leave-flow/medical-leave-upload-terms.png",
      alt: "Upload and terms mockup",
    },
  ];

  const lanes = [
    {
      label: "Entry path",
      steps: [
        {
          label: "Step 01",
          title: "Open certificates",
          text: "Users enter Certificates and Incapacities from the bottom navigation.",
        },
        {
          label: "Step 02",
          title: "Choose Incapacities",
          text: "The section groups certificate download, transcription and payment status.",
        },
        {
          label: "Step 03",
          title: "Pick the task",
          text: "Users choose whether they want a certificate, a transcription or payment status.",
        },
        {
          label: "Step 04",
          title: "Follow route",
          text: "Each route asks only for the information needed to complete that task.",
        },
      ],
    },
    {
      label: "Certificate path",
      steps: [
        {
          label: "Step 01",
          title: "Define recipient",
          text: "If there is a family group, users choose who the certificate is for.",
        },
        {
          label: "Step 02",
          title: "Add email",
          text: "The app asks where to send a copy before showing available records.",
        },
        {
          label: "Step 03",
          title: "Select record",
          text: "Users choose the medical leave record they want to download.",
        },
        {
          label: "Step 04",
          title: "Download",
          text: "The PDF is downloaded to the device and also sent by email.",
        },
      ],
    },
    {
      label: "Transcription path",
      steps: [
        {
          label: "Step 01",
          title: "Add contact and date",
          text: "Users enter email or phone and select the medical leave start date.",
        },
        {
          label: "Step 02",
          title: "Upload documents",
          text: "The app accepts camera, gallery or PDF uploads with format and size checks.",
        },
        {
          label: "Step 03",
          title: "Accept terms",
          text: "Users review and accept the conditions before submitting the request.",
        },
        {
          label: "Step 04",
          title: "Receive case number",
          text: "A confirmation message gives the request number and expected response time.",
        },
      ],
    },
    {
      label: "Payment status path",
      steps: [
        {
          label: "Step 01",
          title: "Choose query",
          text: "Users check all records or filter by a date range.",
        },
        {
          label: "Step 02",
          title: "Select incapacity",
          text: "The app shows eligible medical leaves so users can open one record.",
        },
        {
          label: "Step 03",
          title: "Read status",
          text: "The detail explains the payment state, amount, method and key dates.",
        },
        {
          label: "Step 04",
          title: "Next action",
          text: "Depending on the status, users continue, contact support or reissue payment.",
        },
      ],
    },
  ];

  const decisions = [
    {
      title: "Separate three jobs",
      text: "The Incapacities hub keeps download, transcription and payment status from competing in one path.",
    },
    {
      title: "Adapt to family groups",
      text: "The certificate path changes when users need a document for someone linked to their account.",
    },
  ];

  return `
    <section class="medical-leave-flow" aria-labelledby="medical-leave-flow-title">
      <div class="medical-leave-flow__intro">
        <h2 id="medical-leave-flow-title">Medical leave services</h2>
        <p>I treated Incapacities as a service hub with three different jobs: downloading an existing medical leave certificate, submitting a transcription request, and checking payment status. The flow had to separate those tasks while keeping each path short, clear and recoverable.</p>
      </div>

      <div class="medical-leave-flow__screens" aria-label="Selected Medical leave services screens">
        ${screens
          .map(
            (screen) => `
              <figure class="medical-leave-flow__screen">
                <img src="${screen.src}" alt="${screen.alt}" loading="lazy" />
              </figure>
            `.trim()
          )
          .join("")}
      </div>

      <div class="medical-leave-flow__map" aria-label="Medical leave services flow map">
        ${lanes
          .map(
            (lane) => `
              <div class="medical-leave-flow__lane">
                <div class="medical-leave-flow__lane-label">${lane.label}</div>
                <div class="medical-leave-flow__track">
                  ${lane.steps
                    .map(
                      (step) => `
                        <article class="medical-leave-flow__node">
                          <span>${step.label}</span>
                          <h3>${step.title}</h3>
                          <p>${step.text}</p>
                        </article>
                      `.trim()
                    )
                    .join("")}
                </div>
              </div>
            `.trim()
          )
          .join("")}
      </div>

      <div class="medical-leave-flow__logic-section">
        <div class="medical-leave-flow__logic-heading">
          <span>Design decisions</span>
        </div>
        <div class="medical-leave-flow__logic" aria-label="Design decisions">
          ${decisions
            .map(
              (decision) => `
                <article class="medical-leave-flow__logic-card">
                  <h3>${decision.title}</h3>
                  <p>${decision.text}</p>
                </article>
              `.trim()
            )
            .join("")}
        </div>
      </div>
    </section>
  `.trim();
}

function renderNetworkFlow() {
  const screens = [
    {
      src: "assets/images/projects/app-redesign-network-flow/healthcare-network-service-menu.png",
      alt: "Service menu mockup",
    },
    {
      src: "assets/images/projects/app-redesign-network-flow/healthcare-network-location-filters.png",
      alt: "Location filters mockup",
    },
    {
      src: "assets/images/projects/app-redesign-network-flow/healthcare-network-provider-results.png",
      alt: "Provider results mockup",
    },
  ];

  const lanes = [
    {
      label: "Entry path",
      variant: "three",
      steps: [
        {
          label: "Step 01",
          title: "Open network",
          text: "Users enter Healthcare Network from the bottom navigation.",
        },
        {
          label: "Step 02",
          title: "Select plan",
          text: "They choose contributive, subsidised or complementary care plan.",
        },
        {
          label: "Step 03",
          title: "Continue",
          text: "The main service menu appears once the plan route is selected.",
        },
      ],
    },
    {
      label: "Service path",
      steps: [
        {
          label: "Step 01",
          title: "Choose category",
          text: "Users choose urgent care, primary care, pharmacies or offices.",
        },
        {
          label: "Step 02",
          title: "Choose urgency type",
          text: "Urgent care is split into obstetric, pediatric, psychiatric, adult and dental.",
        },
        {
          label: "Step 03",
          title: "Use same pattern",
          text: "Each category keeps the same department and municipality search structure.",
        },
        {
          label: "Step 04",
          title: "Reduce relearning",
          text: "The same interaction model works across clinics, pharmacies and offices.",
        },
      ],
    },
    {
      label: "Location path",
      steps: [
        {
          label: "Step 01",
          title: "Select department",
          text: "The user opens the department field and chooses from the available list.",
        },
        {
          label: "Step 02",
          title: "Select municipality",
          text: "The second field narrows the search to the selected municipality.",
        },
        {
          label: "Step 03",
          title: "Enable search",
          text: "The next button activates only after both location fields are complete.",
        },
        {
          label: "Step 04",
          title: "Show results",
          text: "The app then shows matching providers for the selected service and location.",
        },
      ],
    },
    {
      label: "Results path",
      steps: [
        {
          label: "Step 01",
          title: "Browse list",
          text: "Users review provider cards with address, phone, opening hours and details.",
        },
        {
          label: "Step 02",
          title: "Search within results",
          text: "A search field helps users find a specific provider faster.",
        },
        {
          label: "Step 03",
          title: "Open map",
          text: "The map view shows the selected provider and keeps contact information close.",
        },
        {
          label: "Step 04",
          title: "Call provider",
          text: "Users can continue by calling the provider directly from the result detail.",
        },
      ],
    },
  ];

  const decisions = [
    {
      title: "Standardise search",
      text: "The same department and municipality pattern works across all network categories.",
    },
    {
      title: "Separate service types",
      text: "Urgencies, primary care, pharmacies, offices and Vive Digital points remain easy to scan.",
    },
    {
      title: "Support decision making",
      text: "List, map, contact details and call actions help users choose where to go next.",
    },
  ];

  return `
    <section class="network-flow" aria-labelledby="network-flow-title">
      <div class="network-flow__intro">
        <h2 id="network-flow-title">Healthcare network search</h2>
        <p>I treated the healthcare network as a guided search flow. Members needed to choose their plan, select the type of care or service, filter by location, and compare providers through list and map views before deciding where to go or who to call.</p>
      </div>

      <div class="network-flow__screens" aria-label="Selected Healthcare network search screens">
        ${screens
          .map(
            (screen) => `
              <figure class="network-flow__screen">
                <img src="${screen.src}" alt="${screen.alt}" loading="lazy" />
              </figure>
            `.trim()
          )
          .join("")}
      </div>

      <div class="network-flow__map" aria-label="Healthcare network search flow map">
        ${lanes
          .map(
            (lane) => `
              <div class="network-flow__lane">
                <div class="network-flow__lane-label">${lane.label}</div>
                <div class="network-flow__track${lane.variant === "three" ? " network-flow__track--three" : ""}">
                  ${lane.steps
                    .map(
                      (step) => `
                        <article class="network-flow__node">
                          <span>${step.label}</span>
                          <h3>${step.title}</h3>
                          <p>${step.text}</p>
                        </article>
                      `.trim()
                    )
                    .join("")}
                </div>
              </div>
            `.trim()
          )
          .join("")}
      </div>

      <div class="network-flow__logic-section">
        <div class="network-flow__logic-heading">
          <span>Design decisions</span>
        </div>
        <div class="network-flow__logic" aria-label="Design decisions">
          ${decisions
            .map(
              (decision) => `
                <article class="network-flow__logic-card">
                  <h3>${decision.title}</h3>
                  <p>${decision.text}</p>
                </article>
              `.trim()
            )
            .join("")}
        </div>
      </div>
    </section>
  `.trim();
}

function renderArchitecture(columns = [], title = "", variant = "") {
  if (!columns.length) return "";

  if (variant === "maternal-information-architecture") {
    const renderMaternalItems = (items = []) =>
      items
        .map((item) => {
          if (typeof item === "string") {
            return `
              <article class="maternal-ia__node">
                <h4>${item}</h4>
              </article>
            `.trim();
          }

          return `
            <article class="maternal-ia__node maternal-ia__node--parent">
              <h4>${item.label}</h4>
              <div class="maternal-ia__subnodes">
                ${item.items
                  .map(
                    (child) => `
                      <div class="maternal-ia__subnode">${child}</div>
                    `.trim()
                  )
                  .join("")}
              </div>
            </article>
          `.trim();
        })
        .join("");

    return `
      <div
        class="architecture-diagram maternal-ia architecture-diagram--maternal-information-architecture"
        aria-label="Information architecture diagram"
      >
        <div class="maternal-ia__columns">
          ${columns
            .map(
              (column, index) => `
                <section class="maternal-ia__tree" style="--architecture-index: ${index}">
                  <article class="maternal-ia__root">
                    <h3>${column.heading}</h3>
                  </article>
                  <div class="maternal-ia__branch">
                    ${renderMaternalItems(column.items)}
                  </div>
                </section>
              `.trim()
            )
            .join("")}
        </div>
      </div>
    `.trim();
  }

  if (variant === "app-information-architecture") {
    const cards = columns
      .map(
        (column) => `
          <article class="ia-category">
            <h3>${column.heading}</h3>
            <ul>
              ${column.items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </article>
        `.trim()
      )
      .join("");

    return `
      <div class="ia-diagram" aria-label="Information architecture diagram">
        <div class="ia-diagram__canvas" aria-label="Redesigned app information architecture">
          <div class="ia-categories" aria-label="Primary content areas">${cards}</div>
        </div>
      </div>
    `.trim();
  }

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

function renderOfflineFirstFlowModel(type = "") {
  if (type !== "offline-first-authorisation") return "";

  return `
    <div class="offline-flow" aria-label="Offline-first authorisation interaction model">
      <section aria-labelledby="offline-flow-overview-title">
        <div class="offline-flow-heading">
          <h3 id="offline-flow-overview-title">End-to-end flow overview</h3>
          <p>
            The system had to branch depending on connectivity, member status, file upload
            validity and synchronisation results. This simplified model turns the full
            documentation into a readable interaction model.
          </p>
        </div>

        <div class="offline-flow-legend" aria-label="Legend">
          <div class="offline-flow-legend-item">
            <span class="offline-flow-dot offline-flow-dot--online"></span>
            Online path
          </div>
          <div class="offline-flow-legend-item">
            <span class="offline-flow-dot offline-flow-dot--offline"></span>
            Offline path
          </div>
          <div class="offline-flow-legend-item">
            <span class="offline-flow-dot offline-flow-dot--system"></span>
            System process
          </div>
          <div class="offline-flow-legend-item">
            <span class="offline-flow-dot offline-flow-dot--error"></span>
            Error or recovery
          </div>
        </div>

        <div class="offline-flow-map">
          <div class="offline-flow-row">
            <div class="offline-flow-lane-label">Access and routing</div>
            <div class="offline-flow-lane-track">
              <article class="offline-flow-node offline-flow-node--system">
                <h4>Open tool</h4>
                <p>PIS enters document type and document number.</p>
              </article>
              <article class="offline-flow-node offline-flow-node--system">
                <h4>Validate user</h4>
                <p>The system checks whether the PIS is authorised.</p>
              </article>
              <article class="offline-flow-node">
                <h4>Home</h4>
                <p>PIS chooses between Radicar ordenamientos and Sincronizar.</p>
              </article>
              <article class="offline-flow-node offline-flow-node--system">
                <h4>Check connection</h4>
                <p>The tool decides whether the request can continue online or offline.</p>
              </article>
            </div>
          </div>

          <div class="offline-flow-row">
            <div class="offline-flow-lane-label">Online request</div>
            <div class="offline-flow-lane-track">
              <article class="offline-flow-node offline-flow-node--online">
                <h4>Search member</h4>
                <p>PIS enters the member’s document information.</p>
              </article>
              <article class="offline-flow-node offline-flow-node--online">
                <h4>Validate member</h4>
                <p>The system checks whether the member exists and is active.</p>
              </article>
              <article class="offline-flow-node offline-flow-node--online">
                <h4>Confirm phone</h4>
                <p>PIS confirms or updates the member’s phone number.</p>
              </article>
              <article class="offline-flow-node offline-flow-node--online">
                <h4>Submit request</h4>
                <p>PIS attaches files and submits the authorisation request.</p>
              </article>
            </div>
          </div>

          <div class="offline-flow-row">
            <div class="offline-flow-lane-label">Offline request</div>
            <div class="offline-flow-lane-track">
              <article class="offline-flow-node offline-flow-node--offline">
                <h4>Open offline form</h4>
                <p>The tool displays only the fields needed to save the request safely.</p>
              </article>
              <article class="offline-flow-node offline-flow-node--offline">
                <h4>Add information</h4>
                <p>PIS enters member details, phone number and optional observations.</p>
              </article>
              <article class="offline-flow-node offline-flow-node--offline">
                <h4>Attach supports</h4>
                <p>PIS adds files from camera, gallery or PDF upload.</p>
              </article>
              <article class="offline-flow-node offline-flow-node--offline">
                <h4>Save locally</h4>
                <p>The request is stored locally for later synchronisation.</p>
              </article>
            </div>
          </div>

          <div class="offline-flow-row">
            <div class="offline-flow-lane-label">Sync and recovery</div>
            <div class="offline-flow-lane-track">
              <article class="offline-flow-node offline-flow-node--system">
                <h4>Connection returns</h4>
                <p>Automatic synchronisation starts when pending requests exist.</p>
              </article>
              <article class="offline-flow-node offline-flow-node--system">
                <h4>Process queue</h4>
                <p>The system synchronises requests one by one and shows progress.</p>
              </article>
              <article class="offline-flow-node offline-flow-node--error">
                <h4>Handle issues</h4>
                <p>Requests with validation issues move to No Sincronizadas.</p>
              </article>
              <article class="offline-flow-node offline-flow-node--online">
                <h4>Complete</h4>
                <p>Successful requests move to Sincronizadas.</p>
              </article>
            </div>
          </div>
        </div>

        <div class="interaction-model__mockups" aria-label="Selected tablet mockups">
          <figure class="interaction-model__mockup-card">
            <span class="interaction-model__mockup-label">Online request</span>
            <div class="interaction-model__mockup-frame">
              <img src="/assets/images/projects/rural-healthcare/radicar-online.png" alt="Online request tablet mockup" loading="lazy" />
            </div>
          </figure>

          <figure class="interaction-model__mockup-card">
            <span class="interaction-model__mockup-label">Offline request</span>
            <div class="interaction-model__mockup-frame">
              <img src="/assets/images/projects/rural-healthcare/radicar-offline.png" alt="Offline request tablet mockup" loading="lazy" />
            </div>
          </figure>

          <figure class="interaction-model__mockup-card">
            <span class="interaction-model__mockup-label">Sync in progress</span>
            <div class="interaction-model__mockup-frame">
              <img src="/assets/images/projects/rural-healthcare/sincronizar.png" alt="Synchronisation in progress tablet mockup" loading="lazy" />
            </div>
          </figure>

          <figure class="interaction-model__mockup-card">
            <span class="interaction-model__mockup-label">Failed sync recovery</span>
            <div class="interaction-model__mockup-frame">
              <img src="/assets/images/projects/rural-healthcare/sincronizar-no-sincronizadas.png" alt="Failed synchronisation recovery tablet mockup" loading="lazy" />
            </div>
          </figure>
        </div>
      </section>

      <section aria-labelledby="offline-flow-scenarios-title">
        <div class="offline-flow-heading">
          <h3 id="offline-flow-scenarios-title">Scenario breakdown</h3>
          <p>
            The flow was designed to help PIS continue their work without losing progress,
            while still supporting validation, traceability and correction when the system
            recovered connectivity.
          </p>
        </div>

        <div class="offline-flow-scenario-grid">
          <article class="offline-flow-scenario-card">
            <h4>1. Login and access</h4>
            <ol>
              <li>PIS opens the tool.</li>
              <li>PIS enters document type and document number.</li>
              <li>The system checks whether the user is authorised.</li>
              <li>If the user is authorised, PIS enters Home.</li>
              <li>If the user is not recognised, the system displays an error message.</li>
              <li>If the allowed number of attempts is exceeded, access is blocked temporarily.</li>
            </ol>
          </article>

          <article class="offline-flow-scenario-card">
            <h4>2. Home and routing</h4>
            <ol>
              <li>PIS lands on Home.</li>
              <li>PIS can select Radicar ordenamientos to create a request.</li>
              <li>PIS can select Sincronizar to manage requests saved offline.</li>
              <li>If pending requests exist and connection is available, automatic synchronisation can start.</li>
            </ol>
          </article>

          <article class="offline-flow-scenario-card">
            <h4>3. Online request</h4>
            <ol>
              <li>PIS enters the member’s document information.</li>
              <li>The system searches for the member in Nueva EPS systems.</li>
              <li>If the member is not found, the system asks PIS to review the document number.</li>
              <li>If the member is not active, the system stops the request.</li>
              <li>If the member is active, PIS confirms or updates the phone number.</li>
              <li>PIS attaches supporting files and submits the request.</li>
            </ol>
          </article>

          <article class="offline-flow-scenario-card">
            <h4>4. Offline request</h4>
            <ol>
              <li>If there is no internet connection, the tool displays an offline form.</li>
              <li>PIS enters the member’s name, document type, document number and phone number.</li>
              <li>PIS attaches supporting files and adds optional observations.</li>
              <li>The submit action remains inactive until required fields are complete.</li>
              <li>The request is saved locally.</li>
              <li>The system confirms that it will synchronise the request when service is available.</li>
            </ol>
          </article>
        </div>
      </section>

      <section aria-labelledby="offline-flow-statuses-title">
        <div class="offline-flow-heading">
          <h3 id="offline-flow-statuses-title">Synchronisation statuses</h3>
          <p>
            The Sincronizar section gave PIS visibility over the status of requests saved
            offline, so they could understand what was waiting, what had been completed and
            what needed correction.
          </p>
        </div>

        <div class="offline-flow-status-board">
          <article class="offline-flow-status-card">
            <h4>Pendientes</h4>
            <p>
              Requests saved offline and waiting to be synchronised. When synchronisation
              is running, the system displays progress until all pending requests are processed.
            </p>
          </article>

          <article class="offline-flow-status-card">
            <h4>Sincronizadas</h4>
            <p>
              Requests that were successfully synchronised. PIS can review submitted records,
              including member details, submission date and authorisation information.
            </p>
          </article>

          <article class="offline-flow-status-card">
            <h4>No Sincronizadas</h4>
            <p>
              Requests that could not be synchronised because of validation issues or missing
              information. PIS can open them, correct them and prepare them for another attempt.
            </p>
          </article>
        </div>
      </section>

      <section aria-labelledby="offline-flow-recovery-title">
        <div class="offline-flow-heading">
          <h3 id="offline-flow-recovery-title">Failed synchronisation<br />recovery</h3>
          <p>
            The recovery path was important because failed requests could represent real
            healthcare needs. The tool allowed PIS to correct issues instead of losing the
            request or starting over.
          </p>
        </div>

        <div class="offline-flow-recovery-flow">
          <article class="offline-flow-recovery-step">
            <span>01</span>
            <div>
              <h4>Open No Sincronizadas</h4>
              <p>PIS reviews the list of requests that could not be submitted successfully.</p>
            </div>
          </article>

          <article class="offline-flow-recovery-step">
            <span>02</span>
            <div>
              <h4>Edit the request</h4>
              <p>
                PIS opens a failed request, reviews the stored information and edits what needs
                to be corrected.
              </p>
            </div>
          </article>

          <article class="offline-flow-recovery-step">
            <span>03</span>
            <div>
              <h4>Manage supporting files</h4>
              <p>
                PIS can preview files, add more supports, remove incorrect files or upload a
                smaller file if the previous one exceeded the allowed size.
              </p>
            </div>
          </article>

          <article class="offline-flow-recovery-step">
            <span>04</span>
            <div>
              <h4>Save locally again</h4>
              <p>
                Corrections are saved in the local table so the request can be included in a
                future synchronisation attempt.
              </p>
            </div>
          </article>

          <article class="offline-flow-recovery-step">
            <span>05</span>
            <div>
              <h4>Delete when needed</h4>
              <p>
                If the request should no longer continue, PIS can delete it after confirming the
                action and selecting a reason.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  `;
}

function renderAppOutcome(shouldRender = false) {
  if (!shouldRender) return "";

  return `
    <section class="app-outcome" aria-label="App Redesign outcome">
      <div class="app-outcome-heading">
        <h3>Outcome</h3>
      </div>

      <div class="app-outcome-grid" aria-label="App redesign impact metrics">
        <article class="app-outcome-card app-outcome-card--primary">
          <div>
            <p class="app-outcome-card-kicker">Reach</p>
            <p class="app-outcome-card-value">1M+</p>
          </div>
          <p class="app-outcome-card-label">Members used the redesigned app each month.</p>
        </article>

        <article class="app-outcome-card app-outcome-card--ia">
          <div>
            <p class="app-outcome-card-kicker">Navigation</p>
            <p class="app-outcome-card-value app-outcome-card-value--text">Clearer IA</p>
          </div>
          <p class="app-outcome-card-label">Grouped services around healthcare tasks instead of internal feature labels.</p>
        </article>

        <article class="app-outcome-card app-outcome-card--access">
          <div>
            <p class="app-outcome-card-kicker">Access</p>
            <p class="app-outcome-card-value app-outcome-card-value--text">Less friction</p>
          </div>
          <p class="app-outcome-card-label">Gave login, registration, password recovery and biometric access clearer places in the flow.</p>
        </article>
      </div>

      <div class="app-outcome-story">
        <article class="app-outcome-story-panel">
          <h4>From feature overload to task-based navigation</h4>
          <p>
            Instead of exposing services as a long list of disconnected features, the redesign
            organised the app around the actions members were trying to complete: accessing
            the app, checking healthcare services, downloading documents and finding care.
          </p>
        </article>

        <article class="app-outcome-story-panel">
          <h4>Design impact</h4>

          <ul class="app-outcome-impact-list">
            <li>
              <span>01</span>
              <p>Reduced ambiguity by giving each core task a clearer entry point.</p>
            </li>

            <li>
              <span>02</span>
              <p>Made repeated interaction patterns easier to recognise across services.</p>
            </li>

            <li>
              <span>03</span>
              <p>Created a stronger foundation for future healthcare self-service journeys.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  `;
}

function renderWhatsappResults(shouldRender = false) {
  if (!shouldRender) return "";

  return `
    <section class="whatsapp-results" aria-label="WhatsApp Medical Appointments results">
      <div class="whatsapp-results-heading">
        <h3>Results</h3>
        <p>
          The WhatsApp appointment service turned a complex set of healthcare tasks into
          a familiar self-service flow. Members could schedule, check, cancel and modify
          appointments from a channel they already used every day.
        </p>
      </div>

      <div class="whatsapp-results-grid" aria-label="WhatsApp appointment service results">
        <article class="whatsapp-results-card whatsapp-results-card--primary">
          <div>
            <p class="whatsapp-results-card-kicker">Reach</p>
            <p class="whatsapp-results-card-value">1.8M</p>
          </div>

          <p class="whatsapp-results-card-label">People used the service monthly within the first six months after launch.</p>
        </article>

        <article class="whatsapp-results-card whatsapp-results-card--completion">
          <div>
            <p class="whatsapp-results-card-kicker">Completion</p>
            <p class="whatsapp-results-card-value whatsapp-results-card-value--text">1 in 3</p>
          </div>

          <p class="whatsapp-results-card-label">Users who started the scheduling flow successfully completed an appointment booking.</p>
        </article>

        <article class="whatsapp-results-card whatsapp-results-card--satisfaction">
          <div>
            <p class="whatsapp-results-card-kicker">Satisfaction</p>
            <p class="whatsapp-results-card-value">97%</p>
          </div>

          <p class="whatsapp-results-card-label">Users who completed the satisfaction survey reported being happy with the service.</p>
        </article>
      </div>

      <div class="whatsapp-results-story">
        <article class="whatsapp-results-story-panel">
          <h4>From service complexity to guided self-service</h4>
          <p>
            The final flow helped members complete appointment-related tasks without learning
            a new app or relying only on assisted channels. The rule-based structure gave each
            task a clear path while keeping privacy checks, provider limitations and recovery
            states inside the conversation.
          </p>
        </article>

        <article class="whatsapp-results-story-panel">
          <h4>Experience impact</h4>

          <ul class="whatsapp-results-impact-list">
            <li>
              <span>01</span>
              <p>Used WhatsApp as a familiar access point for healthcare appointment self-service.</p>
            </li>

            <li>
              <span>02</span>
              <p>Supported the full appointment cycle: schedule, check, cancel and modify.</p>
            </li>

            <li>
              <span>03</span>
              <p>Combined clear prompts, confirmation steps and recovery paths to build trust.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
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

function renderMaternalWhatsappFlow(enabled = false) {
  if (!enabled) return "";

  const pregnancyLanes = [
    {
      label: "Shared entry",
      nodes: [
        {
          step: "Step 01",
          title: "Welcome message",
          text: "The bot greets the user and asks for the type and number of identification document.",
        },
        {
          step: "Step 02",
          title: "Main menu",
          text: "Users choose between reporting symptoms, accessing services, receiving guidance, sending documents, or describing another request.",
        },
        {
          step: "Step 03",
          title: "Route selection",
          text: "The selected option sends the user into a specific support path, reducing ambiguity before collecting more information.",
        },
        {
          step: "Step 04",
          title: "Close loop",
          text: "Each path closes with guidance, a confirmation message, or a clear handoff to the healthcare team.",
        },
      ],
    },
    {
      label: "Symptoms path",
      nodes: [
        {
          step: "Step 01",
          title: "Report discomfort",
          text: "Users enter the symptoms or discomfort they are experiencing in their own words.",
        },
        {
          step: "Step 02",
          title: "Confirm context",
          text: "The bot asks for key information to understand whether the situation needs immediate attention.",
        },
        {
          step: "Step 03",
          title: "Validate contact",
          text: "The user provides or confirms a phone number so the healthcare team can follow up.",
        },
        {
          step: "Step 04",
          title: "Route response",
          text: "The user receives urgent care guidance, team follow-up, or a request for more detail.",
        },
      ],
    },
    {
      label: "Health services path",
      nodes: [
        {
          step: "Step 01",
          title: "Access service",
          text: "Users choose whether they need appointments, medications, authorisations, referrals, or lab tests.",
        },
        {
          step: "Step 02",
          title: "Select category",
          text: "The bot separates common healthcare requests before asking for documents or additional details.",
        },
        {
          step: "Step 03",
          title: "Capture request",
          text: "The interaction gathers the minimum information needed for the team to understand the case.",
        },
        {
          step: "Step 04",
          title: "Confirm follow-up",
          text: "The system confirms that the request was received and explains what will happen next.",
        },
      ],
    },
    {
      label: "Support paths",
      nodes: [
        {
          step: "Step 01",
          title: "Guidance",
          text: "Users can request pregnancy-related guidance or family planning guidance without entering a clinical flow first.",
        },
        {
          step: "Step 02",
          title: "Documents",
          text: "If the user needs to send documents, the bot opens a dedicated upload path.",
        },
        {
          step: "Step 03",
          title: "Other services",
          text: "The user can describe a request that does not fit the predefined options.",
        },
        {
          step: "Step 04",
          title: "Human follow-up",
          text: "The flow closes by setting expectations and routing the request to the healthcare team.",
        },
      ],
    },
  ];

  const morbidityLanes = [
    {
      label: "Initial check-in",
      nodes: [
        {
          step: "Step 01",
          title: "Ask wellbeing",
          text: "The bot asks whether the user currently needs support or feels well enough to continue.",
        },
        {
          step: "Step 02",
          title: "Identify need",
          text: "If the user needs help, the flow asks what kind of support is required before screening symptoms.",
        },
        {
          step: "Step 03",
          title: "Choose support",
          text: "The user can request urgent help, describe symptoms, or receive guidance from the care team.",
        },
        {
          step: "Step 04",
          title: "Exit safely",
          text: "When the user does not need help, the interaction closes with a clear support message.",
        },
      ],
    },
    {
      label: "Symptom screening",
      variant: "three",
      nodes: [
        {
          step: "Step 01",
          title: "High-priority symptoms",
          text: "The flow checks for symptoms that require immediate attention, such as bleeding or severe pain.",
        },
        {
          step: "Step 02",
          title: "Additional symptoms",
          text: "The bot asks about warning signs that may still require timely follow-up from the healthcare team.",
        },
        {
          step: "Step 03",
          title: "Lower-priority symptoms",
          text: "If no urgent signs are present, the user can describe what they are feeling in more detail.",
        },
      ],
    },
    {
      label: "Response paths",
      nodes: [
        {
          step: "Path 01",
          title: "Recommend urgent care",
          text: "High-priority symptoms trigger a message encouraging the user to seek urgent care.",
        },
        {
          step: "Path 02",
          title: "Healthcare team contacts user",
          text: "When follow-up is needed, the flow explains that the care team will contact the user.",
        },
        {
          step: "Path 03",
          title: "User describes symptoms",
          text: "If the case is less urgent, the user can provide more information for review.",
        },
        {
          step: "Path 04",
          title: "End with guidance",
          text: "The interaction ends with clear expectations and avoids alarming or bureaucratic language.",
        },
      ],
    },
  ];

  const renderLane = (lane) => `
    <div class="maternas-flow__lane">
      <div class="maternas-flow__lane-label">${lane.label}</div>
      <div class="maternas-flow__track${lane.variant === "three" ? " maternas-flow__track--three" : ""}">
        ${lane.nodes
          .map(
            (node) => `
              <article class="maternas-flow__node">
                <span>${node.step}</span>
                <h3>${node.title}</h3>
                <p>${node.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;

  return `
    <div class="maternas-flow" aria-label="Maternal WhatsApp navigation flow">
      <div class="maternas-flow__intro">
        <h2>WhatsApp navigation flow overview</h2>
        <p>I structured the maternal WhatsApp experience as two connected navigation systems: a general pregnancy follow-up path for common needs, and a maternal morbidity path for check-ins, symptom screening and escalation.</p>
      </div>

      <div class="maternas-flow__summary" aria-label="Flow overview">
        <article class="maternas-flow__summary-card">
          <span>Flow 01</span>
          <div>
            <h2>Pregnancy Follow-up</h2>
            <p>A menu-based path routes users to symptoms, healthcare services, pregnancy guidance, family planning guidance, document upload or other support requests.</p>
          </div>
        </article>

        <article class="maternas-flow__summary-card">
          <span>Flow 02</span>
          <div>
            <h2>Maternal Morbidity</h2>
            <p>A check-in path asks how the user feels, screens symptoms by priority and routes the interaction to urgent care, team follow-up or guidance.</p>
          </div>
        </article>
      </div>

      <section class="maternas-flow__section" aria-labelledby="pregnancy-follow-up-title">
        <div class="maternas-flow__section-heading">
          <h2 id="pregnancy-follow-up-title">Pregnancy Follow-up flow</h2>
          <p>This flow starts with a broad menu and separates user intent before asking for details. The structure keeps service requests, symptoms, guidance and document submission in different paths.</p>
        </div>

        <div class="maternas-flow__map" aria-label="Pregnancy Follow-up flow map">
          ${pregnancyLanes.map(renderLane).join("")}
        </div>
      </section>

      <section class="maternas-flow__section" aria-labelledby="maternal-morbidity-title">
        <div class="maternas-flow__section-heading">
          <h2 id="maternal-morbidity-title">Maternal Morbidity flow</h2>
          <p>This flow works as a triage-oriented conversation. It starts with a wellbeing check, identifies whether the user needs support, and screens symptoms before deciding the response path.</p>
        </div>

        <div class="maternas-flow__map" aria-label="Maternal Morbidity flow map">
          ${morbidityLanes.map(renderLane).join("")}
        </div>
      </section>

      <div class="maternas-flow__logic-section">
        <div class="maternas-flow__logic-heading">
          <span>Design decisions</span>
        </div>

        <div class="maternas-flow__logic" aria-label="Design decisions">
          <article class="maternas-flow__logic-card">
            <h3>Separate intent first</h3>
            <p>The main menu avoids mixing routine service requests with symptom reporting, making the conversation easier to follow.</p>
          </article>

          <article class="maternas-flow__logic-card">
            <h3>Escalate by severity</h3>
            <p>The morbidity flow checks for warning signs before asking for open-ended descriptions, supporting faster triage.</p>
          </article>

          <article class="maternas-flow__logic-card">
            <h3>Keep follow-up visible</h3>
            <p>Most non-immediate paths close by explaining that the healthcare team will contact the user, reducing uncertainty.</p>
          </article>
        </div>
      </div>
    </div>
  `;
}

function renderSection(section, isAfterPainPoints = false) {
  const blocks = (section.blocks || [])
    .map(
      (block) => {
        if (block.homeFlow) return renderHomeFlow();
        if (block.approvalFlow) return renderApprovalFlow();
        if (block.medicalLeaveFlow) return renderMedicalLeaveFlow();
        if (block.networkFlow) return renderNetworkFlow();
        return `<h3>${block.heading}</h3><p>${block.text}</p>${renderFullBleedMedia(block.fullBleedMedia)}`;
      }
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
  if (section.title === "Interaction Model") {
    sectionClasses.push("case-section--interaction-model");
  }
  if (section.title === "Key Flows") {
    sectionClasses.push("case-section--key-flows");
  }
  const hasFlowOverviewHeading = section.headingLayout === "flow-overview";
  if (hasFlowOverviewHeading) {
    sectionClasses.push("case-section--flow-overview-heading");
  }
  const hasSplitHeading =
    section.title === "Conversational flow design" ||
    section.title === "Tone of Voice" ||
    section.title === "Experience Measurement";

  if (hasSplitHeading) {
    sectionClasses.push("case-section--split-heading");
  }
  if (
    section.offlineOutcome ||
    section.appOutcome ||
    section.whatsappResults ||
    section.maternalOutcome
  ) {
    sectionClasses.push("case-section--offline-outcome");
  }

  const sectionParagraphs = renderSectionParagraphs(section);
  const sectionIndicatorTitle = section.indicatorTitle || section.title;
  const sectionHeading = section.hideTitle ? "" : `<h2>${section.title}</h2>`;

  if (hasFlowOverviewHeading) {
    return `
    <section class="${sectionClasses.join(" ")}" data-section-title="${sectionIndicatorTitle}">
      <div class="case-section-flow-overview-heading">
        ${sectionHeading}
        <div class="case-section-flow-overview-copy rich-copy">
          ${sectionParagraphs}
        </div>
      </div>
      <div class="case-section-content rich-copy">
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
        ${renderOfflineFirstFlowModel(section.flowModel)}
        ${renderOfflineOutcome(section.offlineOutcome)}
        ${renderAppOutcome(section.appOutcome)}
        ${renderWhatsappResults(section.whatsappResults)}
        ${renderMaternalOutcome(section.maternalOutcome)}
        ${renderConversationFlow(section.conversationFlow)}
        ${renderMaternalWhatsappFlow(section.maternalWhatsappFlow)}
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

  if (hasSplitHeading) {
    return `
    <section class="${sectionClasses.join(" ")}" data-section-title="${sectionIndicatorTitle}">
      <div class="case-section-split-heading">
        ${sectionHeading}
        <div class="case-section-split-copy rich-copy">
          ${sectionParagraphs}
        </div>
      </div>
      <div class="case-section-content rich-copy">
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
        ${renderOfflineFirstFlowModel(section.flowModel)}
        ${renderOfflineOutcome(section.offlineOutcome)}
        ${renderAppOutcome(section.appOutcome)}
        ${renderWhatsappResults(section.whatsappResults)}
        ${renderMaternalOutcome(section.maternalOutcome)}
        ${renderConversationFlow(section.conversationFlow)}
        ${renderMaternalWhatsappFlow(section.maternalWhatsappFlow)}
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

  return `
    <section class="${sectionClasses.join(" ")}" data-section-title="${sectionIndicatorTitle}">
      ${sectionHeading}
      <div class="case-section-content rich-copy">
        ${sectionParagraphs}
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
        ${renderOfflineFirstFlowModel(section.flowModel)}
        ${renderOfflineOutcome(section.offlineOutcome)}
        ${renderAppOutcome(section.appOutcome)}
        ${renderWhatsappResults(section.whatsappResults)}
        ${renderMaternalOutcome(section.maternalOutcome)}
        ${renderConversationFlow(section.conversationFlow)}
        ${renderMaternalWhatsappFlow(section.maternalWhatsappFlow)}
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

function getCaseSectionActiveThreshold() {
  return getCaseSectionIndicatorThreshold() + window.innerHeight * 0.24;
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
    const activationLine = getCaseSectionActiveThreshold();
    let activeSection = null;

    sections.forEach((item) => {
      if (item.section.getBoundingClientRect().top <= activationLine) {
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

const projectUrls = Object.fromEntries(
  projectOrder.map((id) => [id, `/projects/${id}/`])
);

function getProjectIdFromPath(pathname) {
  const match = pathname.match(/\/projects\/([^/]+)\/?$/);
  return match && projects[match[1]] ? match[1] : "";
}

const params = new URLSearchParams(window.location.search);
const requestedId = params.get("id");
const pathProjectId = getProjectIdFromPath(window.location.pathname);

if (
  requestedId &&
  projects[requestedId] &&
  window.location.pathname.endsWith("/project.html")
) {
  window.location.replace(`${projectUrls[requestedId]}${window.location.hash}`);
}

const projectId = pathProjectId || (projects[requestedId] ? requestedId : projectOrder[0]);
const project = projects[projectId];
const nextId =
  projectOrder[(projectOrder.indexOf(projectId) + 1) % projectOrder.length];
const nextProject = projects[nextId];
const caseStudy = document.querySelector("#case-study");
const isPrerenderedProject =
  document.body?.dataset.staticProject === "true" ||
  caseStudy?.dataset.prerendered === "true";

function renderProjectDom() {
  document.title = `${project.title} — Diego Cárdenas Mora`;
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

function initialiseCaseLogoScrollRotation() {
  const logo = document.querySelector(".case-logo img");

  if (!logo) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let ticking = false;

  const update = () => {
    if (reducedMotion.matches) {
      logo.style.setProperty("--case-logo-scroll-rotation", "0deg");
      ticking = false;
      return;
    }

    const maxScroll = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );
    const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));

    logo.style.setProperty(
      "--case-logo-scroll-rotation",
      `${(progress * 360).toFixed(2)}deg`
    );
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
  reducedMotion.addEventListener("change", update);
}

function initialiseCaseNameGreeting() {
  const caseName = document.querySelector(".case-name");

  if (!caseName?.querySelector(".site-name-greet")) return;

  const touchPointer = window.matchMedia("(hover: none)");

  caseName.addEventListener("click", (event) => {
    if (!touchPointer.matches) return;

    event.preventDefault();
    caseName.classList.toggle("is-greeting");
  });
}

if (!isPrerenderedProject) {
  renderProjectDom();
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
initialiseCaseLogoScrollRotation();
initialiseCaseNameGreeting();

document.querySelector("#next-project").href = projectUrls[nextId];
document.querySelector("#next-project-title").textContent = nextProject.title;
