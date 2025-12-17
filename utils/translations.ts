
export type Language = 'en' | 'pt';

export const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('en-GB'); // DD/MM/YYYY
  } catch (e) {
    return dateString;
  }
};

export const translations = {
  en: {
    common: {
      vulcan: 'VULCAN',
      all: 'All',
      search: 'Search...',
      rowsPerPage: 'Rows per page:',
      page: 'Page',
      of: 'of',
      name: 'Name',
      id: 'ID',
      company: 'Company',
      department: 'Department',
      jobTitle: 'Job Title',
      role: 'Role',
      actions: 'Actions',
      cancel: 'Cancel',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      view: 'View',
      print: 'Print',
      download: 'Download',
      import: 'Import',
      template: 'Template',
      yes: 'Yes',
      no: 'No',
      time: 'Time',
      status: 'Status',
      recordsFound: 'records found',
      completed: 'Completed',
      timeLeft: 'left',
      passed: 'Passed',
      failed: 'Failed',
      pending: 'Pending',
      complianceRate: 'Compliance Rate',
      testsProcessed: 'Tests Processed',
      stats: {
        totalRecords: 'Total Records',
        passRate: 'Pass Rate',
        passed: 'Passed',
        failed: 'Failed',
        totalUsers: 'Total Users',
        active: 'Active',
        admins: 'Admins'
      },
      operationalMatrix: 'Operational Matrix',
      owner: 'Owner',
      sending: 'Sending...',
      smsBlast: 'SMS Blast',
      simulateRole: 'Simulate Role',
      superuser: 'Superuser Access',
      restricted: 'Restricted Access',
      enterpriseView: 'Enterprise View',
      exitFullScreen: 'Exit Full Screen',
      fullScreen: 'Full Screen',
      notifications: 'Notifications',
      noNotifications: 'No notifications',
      clearAll: 'Clear All'
    },
    publicHome: {
      nav: {
        portfolio: 'Portfolio',
        about: 'About',
        vision: 'Vision',
        partners: 'Partners',
        contact: 'Contact',
        enterHub: 'Enter Client Hub'
      },
      hero: {
        badge: 'Innovating Tomorrow',
        title1: 'Architecting',
        title2: 'Enterprise Future',
        desc: 'DigiSols delivers a unified software ecosystem for industry titans. From heavy industry safety to real-time financial orchestration.',
        btnExplore: 'Explore Ecosystem',
        btnEnter: 'Enter Client Hub'
      },
      about: {
        title: 'The DigiSols Standard',
        subtitle: 'We don\'t just build apps; we engineer Unified Operating Systems for businesses.',
        cards: {
          cars: 'The gold standard in heavy industry safety compliance.',
          edudesk: 'Complete digitization for school campus orchestration.',
          h365: 'Secure, high-fidelity healthcare management.',
          microfin: 'Automated lending and portfolio analytics.'
        }
      },
      vision: {
        title: 'Our Vision',
        headline: 'A future where Software is Seamless.',
        desc: 'We aim to eliminate data silos. By creating a unified hub for all client software, DigiSols provides a central cockpit for enterprise leadership.',
        mission: 'Our Mission',
        missionHeadline: 'Delivering Excellence',
        goals: [
          'Develop software that adapts to human behavior, not vice versa.',
          'Zero-Tolerance for security vulnerabilities.',
          'Continuous optimization through AI-driven insights.'
        ]
      },
      contact: {
        title: 'Let\'s Integrate',
        desc: 'Ready for the next step? Request a consultation for your specific industry.',
        emailLabel: 'Email Us',
        callLabel: 'Call Us',
        form: {
          name: 'Full Name',
          email: 'work@email.com',
          details: 'Project details...',
          btn: 'Send Request'
        }
      }
    },
    portfolio: {
      hero: {
        badge: 'Proven Solutions',
        title: 'Our Portfolio',
        desc: 'DigiSols delivers robust, scalable software tailored to industry needs. From safety compliance in heavy industry to education SaaS, our products drive efficiency.'
      },
      btnCaseStudy: 'View Case Study',
      back: 'Back to Home',
      labels: {
        flagship: 'Enterprise Flagship',
        ready: 'Production Ready'
      },
      items: {
        cars: {
          category: 'Critical Activity Compliance',
          desc: 'The flagship "Critical Activity Requirements System" designed specifically for heavy industry. It automates safety compliance, training management, and real-time operational access control. Tailored for Mining, Oil & Gas, Ports, Manufacturing, and Logistics.'
        },
        edudesk: {
          category: 'Education SaaS',
          desc: 'A comprehensive School Management System designed to streamline administration, student tracking, and parent communication. Features include gradebooks, attendance monitoring, fee management, and e-learning modules.'
        },
        h365: {
          category: 'Healthcare SaaS',
          desc: 'Hospital Management System tailored for clinics and hospitals. Manages patient records (EMR), appointment scheduling, pharmacy inventory, and doctor workflows, ensuring compliant and efficient healthcare delivery.'
        },
        microfin: {
          category: 'Finance SaaS',
          desc: 'Microfinance Management System built for small and medium lending institutions. Automates loan origination, repayment tracking, interest calculations, and portfolio reporting.'
        },
        jactrac: {
          category: 'Industrial IoT',
          desc: 'Specialized Web App for tracking Mine Equipment Hose Installations. Provides real-time asset visibility, maintenance scheduling, and lifecycle analysis for critical mining infrastructure.'
        },
        swiftpos: {
          category: 'Retail Solution',
          desc: 'Integrated Point of Sale system featuring advanced modules for Camera surveillance integration, Alarm systems, Warehousing, and Financial reconciliation. A complete solution for modern retail security and operations.'
        }
      }
    },
    caseStudies: {
      labels: {
        challenge: 'The Challenge',
        solution: 'The Solution',
        techFeatures: 'Technical Features',
        stack: 'Technology Stack',
        buildLaunch: 'Build & Launch',
        ready: 'Project Ready?',
        readyDesc: 'Our engineering team is ready to scale your next digital transformation.',
        contact: 'Contact Us Today',
        previewPending: 'Preview Pending',
        sandboxAccess: 'Public Sandbox Access',
        stagingDesc: "This application is currently in internal staging. The preview link will be active once deployment is finalized.",
        standardsDesc: "This application follows DigiSols' high standards for security, offline-first reliability, and mobile responsiveness."
      },
      cars: {
        subtitle: 'Critical Activity Requirements for Heavy Industry',
        challenge: 'Enterprise-scale heavy industries (Mining, Oil & Gas) struggled with fragmented safety data. Expired certifications and lack of real-time visibility created life-threatening compliance risks at operation gates. Manual spreadsheets were unable to keep pace with a workforce of 10,000+.',
        solution: 'DigiSols engineered a high-security SaaS platform featuring a custom-built boolean logic compliance engine. We integrated nightly middleware to sync multiple legacy HR systems (SAP, Oracle), normalizing data into a single "Source of Truth" for site-wide access control. The system includes robotic self-healing to prevent state corruption during heavy concurrent usage.',
        features: [
          'Multi-tenant cloud architecture supporting 5+ global enterprises.',
          'Robotic self-healing state protocols for 99.9% availability.',
          'Digital QR "Passports" for real-time verification in offline remote areas.',
          'IoT Alcohol control integration for automated turnstile lockout.',
          'Predictive renewal queue that auto-slots employees into sessions.'
        ],
        impact: [
          { label: 'Compliance Rate', desc: 'Site-wide safety adherence.' },
          { label: 'Unauthorized Access', desc: 'Since system implementation.' },
          { label: 'Admin Overhead', desc: 'Through automated renewal queues.' }
        ]
      },
      edudesk: {
        subtitle: 'Unified School Management Ecosystem',
        challenge: 'A growing private school network with 15 campuses was crippled by siloed administration. Gradebooks were manual, fee tracking was inconsistent, and parents had no real-time visibility into student performance, leading to a 15% decline in enrollment.',
        solution: 'We engineered a comprehensive SaaS that centralizes the student lifecycle. The architecture utilizes a real-time data sync layer between administrative dashboards and parent-facing mobile apps. We implemented a dynamic GPA engine that recalculates standing instantly upon grade entry, alongside an automated financial ledger.',
        features: [
          'Multi-campus management with centralized billing.',
          'Dynamic gradebook system with customizable GPA logic.',
          'Integrated e-learning portal with secure asset hosting.',
          'Real-time attendance tracking via NFC-ready student IDs.',
          'Automated SMS & push notifications for fee reminders.'
        ],
        impact: [
          { label: 'Enrollment Growth', desc: 'Improved parent satisfaction.' },
          { label: 'Admin Efficiency', desc: 'Reduction in manual data entry.' },
          { label: 'Financial Delinquency', desc: 'Due to automated reminders.' }
        ]
      },
      h365: {
        subtitle: 'High-Fidelity Healthcare Orchestration',
        challenge: 'Regional hospitals faced critical delays in patient care due to the lack of an integrated Electronic Medical Record (EMR) system. Clinicians were spending 40% of their shifts searching for physical charts, and medication errors were on the rise due to illegible prescriptions.',
        solution: 'DigiSols built an intuitive Hospital Management System (HMS) with a focus on compliant EMR vaulting. We optimized doctor-to-patient scheduling logic using a proprietary throughput algorithm that identifies bottlenecks in real-time. The system includes an AI-driven pharmacy module that monitors interactions between prescribed drugs.',
        features: [
          'Secure EMR vault with HL7 and HIPAA standards compliance.',
          'Intelligent appointment scheduling with auto-reminders.',
          'Pharmacy inventory tracking with low-stock AI predictive alerts.',
          'Integrated laboratory results portal with digital signature.',
          'Tele-health module with end-to-end encrypted video streaming.'
        ],
        impact: [
          { label: 'Patient Wait Time', desc: 'Average reduction per visit.' },
          { label: 'Medication Errors', desc: 'Via digital prescription checks.' },
          { label: 'Record Retrieval', desc: 'Digital lookup in under 2 seconds.' }
        ]
      },
      microfin: {
        subtitle: 'Enterprise Microfinance Orchestration',
        challenge: 'A leading micro-lender was suffering from high Non-Performing Loan (NPL) ratios. Their legacy system lacked robust credit scoring and real-time portfolio tracking, making it impossible to identify high-risk borrowers before default.',
        solution: 'A specialized finance SaaS that automates the entire loan lifecycle. We developed a custom credit scoring engine that analyzes historical behavior and external risk markers. The platform features automated repayment schedules and a "Collection Command Center" for field officers.',
        features: [
          'Custom credit scoring engine with machine learning hooks.',
          'Automated repayment schedules and multi-currency aging reports.',
          'Secure KYC (Know Your Customer) encrypted document storage.',
          'Financial reconciliation tools for daily balance auditing.',
          'Mobile collection app for offline loan repayments.'
        ],
        impact: [
          { label: 'NPL Reduction', desc: 'Decrease in non-performing loans.' },
          { label: 'Origination Speed', desc: 'Down from 2 days processing.' },
          { label: 'Portfolio Growth', desc: 'Scalability increased via automation.' }
        ]
      },
      jactrac: {
        subtitle: 'Industrial IoT Asset Tracking',
        challenge: 'A major coal mine was losing $100k per hour due to unplanned hydraulic hose failures on excavators. Tracking the age and usage of thousands of unique components across a fleet of 50 machines was impossible via manual logs.',
        solution: 'We built a specialized Industrial IoT app that tracks installation life-cycles via ruggedized QR/NFC tags. JacTrac utilizes edge computing to calculate component fatigue and triggers maintenance alerts *before* failures occur.',
        features: [
          'Real-time component life-cycle tracking with NFC scanning.',
          'Predictive maintenance alerts based on machine usage hours.',
          'Asset registry with high-resolution photo audit logging.',
          'Mobile-first field entry designed for high-glare environments.',
          'Offline-first data sync for remote mine pits.'
        ],
        impact: [
          { label: 'Mine Downtime', desc: 'Saved via preventing hose bursts.' },
          { label: 'Asset Life', desc: 'Extended through timely service.' },
          { label: 'Maintenance Cost', desc: 'Via optimized parts inventory.' }
        ]
      },
      swiftpos: {
        subtitle: 'The Future of Secure Retail',
        challenge: 'A national supermarket chain suffered from 5% inventory shrinkage. Management had no way to correlate sales records with physical surveillance, allowing fraudulent "no-sale" transactions to go undetected at the point of purchase.',
        solution: 'SwiftPOS is a "Security-First" POS. We integrated live ONVIF CCTV feeds directly into the sales terminal interface. Every transaction is time-stamped and linked to a specific video segment. We also integrated store-wide alarm sensors into the manager dashboard for total store visibility.',
        features: [
          'Cloud-syncing multi-store inventory with SKU tracking.',
          'Direct CCTV feed integration with transactional overlays.',
          'Alarm status monitoring for fire and motion sensors.',
          'Financial reconciliation with blockchain-ready audit logs.',
          'Customer loyalty module with facial recognition support.'
        ],
        impact: [
          { label: 'Inventory Shrinkage', desc: 'Reduction in internal theft.' },
          { label: 'Stock Accuracy', desc: 'Real-time multi-node sync.' },
          { label: 'Audit Time', desc: 'Immediate incident footage retrieval.' }
        ]
      }
    },
    launchpad: {
      title: 'Client Launchpad',
      welcome: 'Welcome back, {name}. Select a workspace to begin management.',
      btnLaunch: 'Launch App',
      btnExplore: 'Explore Specs',
      status: {
        active: 'Active Subscription',
        access: 'Access Available',
        trial: 'Trial Active'
      },
      footer: {
        title: 'Need a Unified Integration?',
        desc: 'DigiSols provides cross-app data synchronization for enterprise clients.',
        btn: 'Contact Solutions Architect'
      },
      globalStatus: 'Global Status: Operational'
    },
    nav: {
      dashboard: 'Dashboard',
      booking: 'Booking',
      records: 'Records',
      database: 'Database',
      reports: 'Reports',
      enterpriseDashboard: 'Enterprise',
      alcohol: 'Alcohol Control',
      requestCards: 'Request Cards',
      communications: 'Communications',
      schedule: 'Schedule',
      siteGovernance: 'Governance',
      trainerInput: 'Trainer Input',
      users: 'Users',
      settings: 'Settings',
      logs: 'Logs',
      manuals: 'Manuals',
      feedbackAdmin: 'Feedback',
      adminGuide: 'Admin Guide',
      presentation: 'Presentation',
      proposal: 'Proposal'
    },
    auth: {
      login: 'Login',
      logout: 'Logout'
    },
    dashboard: {
      title: 'Dashboard',
      subtitle: 'Overview',
      upcoming: {
        title: 'Upcoming Sessions',
        viewSchedule: 'View Schedule',
        date: 'Date',
        session: 'Session',
        capacity: 'Capacity',
        status: 'Status'
      },
      booked: {
        title: 'Booked Employees',
        tableEmployee: 'Employee',
        tableRac: 'RAC',
        tableDate: 'Date',
        tableRoom: 'Room',
        tableTrainer: 'Trainer',
        noData: 'No bookings found'
      },
      kpi: {
        adherence: 'Adherence',
        certifications: 'Certifications',
        pending: 'Pending',
        expiring: 'Expiring',
        scheduled: 'Scheduled'
      },
      charts: {
        compliant: 'Compliant',
        nonCompliant: 'Non-Compliant',
        complianceTitle: 'Compliance Overview',
        complianceSubtitle: 'By RAC Type',
        accessTitle: 'Access Status',
        missing: 'Missing Requirements'
      },
      renewal: {
        title: 'Renewal Alerts',
        message: 'employees with training expiring within 30 days.',
        button: 'Process Renewals'
      },
      autoBooking: {
        title: 'Auto-Booking Triggered',
        subPart1: 'Employees with Critical expiry',
        subPart2: 'have been auto-booked.'
      }
    },
    booking: {
      title: 'New Booking',
      selfServiceTitle: 'Self Service Booking',
      selfServiceDesc: 'Book your own training session.',
      secureMode: 'Secure Mode Active',
      manageSchedule: 'Manage Schedule',
      success: 'Booking Submitted Successfully',
      selectSession: 'Select Session',
      chooseSession: 'Choose a session...',
      dlRequired: 'Driver License details are required for this module.',
      addRow: 'Add Employee',
      submitBooking: 'Submit Booking'
    },
    results: {
      searchPlaceholder: 'Search by Name or ID...',
      passport: 'My Passport',
      export: 'Export CSV',
      table: {
        employee: 'Employee',
        session: 'Session',
        date: 'Date',
        trainer: 'Trainer',
        theory: 'Theory',
        status: 'Status',
        expiry: 'Expiry'
      }
    },
    database: {
      title: 'Database',
      subtitle: 'Master Records',
      mappingTitle: 'Import Mapping',
      mappingSubtitle: 'Map CSV columns to system fields',
      preview: 'File Preview',
      coreData: 'Core Data',
      complianceTrain: 'Compliance & Training',
      sourceCol: 'Source Column',
      processImport: 'Process Import',
      importSuccess: 'Import Successful',
      active: 'Active',
      granted: 'Granted',
      blocked: 'Blocked',
      accessStatus: 'Access Status',
      aso: 'ASO Expiry',
      opsMatrix: 'OPS Matrix',
      cardBack: 'Card Back Preview',
      contactInfo: 'Contact Info',
      cell: 'Cell Phone',
      dlDetails: 'Driver License Details',
      number: 'Number',
      class: 'Class',
      editModal: 'Edit Employee',
      confirmDelete: 'Confirm Delete',
      confirmDeleteMsg: 'Are you sure you want to delete this record? This action cannot be undone.',
      confirmDeactivate: 'Deactivate User',
      confirmDeactivateMsg: 'Are you sure you want to deactivate this user? They will lose system access.',
      massQr: 'Mass QR Download',
      zipping: 'Zipping...',
      exportDb: 'Export DB',
      wizard: 'Import Wizard',
      importCsv: 'Import CSV',
      ops: {
          EMI_PTS: 'Emi-PTS',
          APR_ART: 'Apr-ART',
          DONO_AREA_PTS: 'Dono-Area',
          EXEC: 'Exec'
      },
      bulkQrMessage: 'This will generate and download {count} QR codes. Continue?'
    },
    reports: {
      title: 'Reports & Analytics',
      subtitle: 'Performance Metrics',
      executiveAnalysis: 'Executive AI Analysis',
      analyzing: 'Analyzing...',
      generate: 'Generate Report',
      leaderboard: 'Trainer Leaderboard',
      noShowsTitle: 'No Shows Alert',
      filters: {
        period: 'Period',
        startDate: 'Start Date',
        endDate: 'End Date',
        department: 'Department',
        racType: 'RAC Type'
      },
      periods: {
        weekly: 'Weekly',
        monthly: 'Monthly',
        ytd: 'Year to Date',
        custom: 'Custom Range'
      },
      stats: {
        totalTrained: 'Total Trained',
        passRate: 'Pass Rate',
        attendance: 'Attendance Rate',
        noShows: 'No Shows'
      },
      charts: {
        performance: 'Performance by Module',
        breakdownTitle: 'Pass vs Fail Breakdown',
        distributionTitle: 'Overall Distribution',
        distributionSubtitle: 'Global Pass/Fail Ratio',
        aiSubtitle: 'Powered by Gemini 2.5'
      },
      trainerMetrics: {
        students: 'Students',
        avgTheory: 'Avg Theory'
      },
      printReport: 'Print Report'
    },
    schedule: {
      title: 'Training Schedule',
      subtitle: 'Manage Sessions',
      newSession: 'New Session',
      modal: {
        title: 'Schedule Session',
        racType: 'RAC Type',
        date: 'Date',
        startTime: 'Start Time',
        location: 'Location',
        capacity: 'Capacity',
        instructor: 'Instructor',
        language: 'Language',
        portuguese: 'Portuguese',
        english: 'English',
        saveSession: 'Save Session'
      }
    },
    trainer: {
      title: 'Trainer Input',
      loggedInAs: 'Logged in as',
      noSessions: 'No pending sessions found.',
      selectSession: 'Select Session to Grade',
      chooseSession: 'Choose a session...',
      saveResults: 'Save Results'
    },
    users: {
      title: 'User Management',
      subtitle: 'Manage system access and roles',
      addUser: 'Add User',
      table: {
        user: 'User',
        role: 'Role',
        status: 'Status',
        actions: 'Actions'
      },
      modal: {
        title: 'Add New User',
        name: 'Full Name',
        email: 'Email Address',
        createUser: 'Create User'
      }
    },
    settings: {
      title: 'System Settings',
      globalConfig: 'Global Configuration',
      localConfig: 'Local Configuration',
      feedbackConfig: 'Feedback Widget Configuration',
      tabs: {
        general: 'General',
        trainers: 'Trainers',
        racs: 'RAC Definitions',
        sites: 'Sites',
        companies: 'Companies',
        integration: 'Integration'
      },
      rooms: {
        title: 'Training Rooms',
        new: 'New Room',
        name: 'Room Name',
        capacity: 'Capacity'
      },
      trainers: {
        title: 'Qualified Trainers',
        name: 'Trainer Name',
        new: 'New Trainer'
      },
      racs: {
        title: 'RAC Standards',
        code: 'Code',
        description: 'Description'
      },
      integrationPage: {
        title: 'Data Integration',
        sourceA: 'Source A',
        sourceB: 'Source B',
        middleware: 'Status do Middleware',
        processing: 'Processing...',
        syncNow: 'Sync Now',
        waiting: 'Waiting for sync command...'
      },
      saving: 'Saving...',
      saveAll: 'Save All Changes'
    },
    cards: {
      title: 'Card Printing',
      requestButton: 'Request Cards',
      sending: 'Sending Request...',
      eligibility: {
        failedTitle: 'Not Eligible',
        failedMsg: 'You do not meet the requirements for a card.',
        checkReqs: 'Check Requirements'
      }
    },
    verification: {
      title: 'Verification',
      notFound: 'Record Not Found',
      verified: 'VERIFIED',
      notVerified: 'NOT VERIFIED',
      scanTime: 'Scan Time',
      asoStatus: 'ASO Status',
      dlStatus: 'DL Status'
    },
    manuals: {
      title: 'User Manuals',
      subtitle: 'System Documentation & Guides',
      sysAdmin: {
        title: 'System Admin Manual',
        subtitle: 'Complete System Control',
        configTitle: 'System Configuration',
        configDesc: 'Setting up the foundational data.',
        rooms: 'Configure Rooms',
        trainers: 'Manage Trainers',
        racs: 'Define RACs',
        dbTitle: 'Database Management',
        dbDesc: 'Managing employee records.',
        restrictionWarning: 'Note: Matrix restrictions apply.',
        csv: 'Supports CSV Import.',
        active: 'Ensure active status.'
      },
      racAdmin: {
        title: 'RAC Admin Manual',
        subtitle: 'Training Operations',
        schedTitle: 'Scheduling',
        schedDesc: 'Creating training calendars.',
        create: 'Create Session',
        lang: 'Set Language',
        autoTitle: 'Auto-Booking',
        autoDesc: 'Handling automated bookings.',
        approve: 'Approve or Reject pending bookings.',
        renewTitle: 'Renewals',
        renewDesc: 'Process renewal queues.'
      },
      racTrainer: {
        title: 'Trainer Manual',
        subtitle: 'Grading & Attendance',
        inputTitle: 'Result Input',
        inputDesc: 'Entering session results.',
        grading: 'Mark attendance and scores.',
        rac02: 'Special Rule: RAC 02 requires DL verification.',
        save: 'Save and finalize.'
      },
      deptAdmin: {
        title: 'Dept Admin Manual',
        subtitle: 'Department Oversight',
        reqTitle: 'Card Requests',
        reqDesc: 'Managing card issuance.',
        search: 'Search for employees.',
        print: 'Select and Print.',
        repTitle: 'Reports',
        repDesc: 'View department analytics.'
      },
      user: {
        title: 'User Manual',
        subtitle: 'Employee Self-Service',
        statusTitle: 'Checking Status',
        statusDesc: 'Understanding your dashboard.',
        filterAlert: 'Use filters to find specific records.',
        green: 'Green means Compliant.',
        red: 'Red means Attention Needed.',
        qr: 'Digital QR Passport.'
      }
    },
    feedback: {
      title: 'Feedback',
      subtitle: 'Help us improve',
      typeLabel: 'Feedback Type',
      types: {
        Bug: 'Bug Report',
        Improvement: 'Feature Request',
        General: 'General Comment'
      },
      messageLabel: 'Message',
      msgPlaceholder: 'Describe your issue or idea...',
      button: 'Send Feedback',
      adminTitle: 'Feedback Administration',
      manage: 'Manage User Feedback',
      status: {
        New: 'New',
        InProgress: 'In Progress',
        Resolved: 'Resolved',
        Dismissed: 'Dismissed'
      },
      actionable: 'Actionable',
      noSelection: 'No feedback selected',
      selectPrompt: 'Select a feedback item to view details',
      submittedBy: 'Submitted By',
      internalNotes: 'Internal Notes',
      visibleAdmin: 'Visible to Admins Only',
      deleteRecord: 'Delete Record',
      markedActionable: 'Marked Actionable',
      markActionable: 'Mark as Actionable',
      workflow: 'Status do Fluxo de Trabalho',
      priority: 'Prioridade'
    },
    communications: {
      title: 'Communications',
      subtitle: 'Message Log',
      clear: 'Clear Log',
      search: 'Search messages...',
      empty: 'No messages found',
      select: 'Select a message to view details',
      sms: 'SMS Notification',
      gateway: 'Sent via Gateway',
      to: 'To',
      automated: 'This is an automated system message.'
    },
    alcohol: {
      dashboard: {
        title: 'Alcohol Control',
        subtitle: 'IoT Monitoring Dashboard',
        live: 'LIVE FEED',
        backToLive: 'Back to Live',
        specs: 'Tech Specs',
        kpi: {
          total: 'Total Tests',
          violations: 'Violations',
          health: 'System Health'
        },
        online: 'Online',
        hourlyTrend: 'Hourly Trend',
        dailyTrend: 'Daily Trend',
        deviceLoad: 'Device Load',
        complianceRatio: 'Compliance Ratio',
        liveStream: 'Real-time Stream',
        mqtt: 'MQTT Protocol',
        deviceHealth: 'Device Fleet Health',
        alert: {
          title: 'ALCOHOL DETECTED',
          desc: 'Positive reading detected at gate.',
          measured: 'Measured BAC'
        },
        actions: 'Automated Actions',
        actionLog: {
          locked: 'Turnstile Locked',
          generating: 'Generating Incident Report...',
          logged: 'Incident Logged',
          contacting: 'Contacting Supervisor...',
          sent: 'Alert Sent'
        },
        close: 'Dismiss Alert'
      },
      protocol: {
        title: 'Safety Protocol',
        positiveTitle: 'Positive Test (> 0.000)',
        positiveDesc: 'Immediate turnstile lockout. Supervisor notified.',
        resetTitle: 'System Reset',
        resetDesc: 'Manual reset required by HSE officer.'
      },
      features: {
        title: 'System Features',
        iotTitle: 'IoT Integration',
        iotDesc: 'Real-time synchronization with breathalyzers.',
        accessTitle: 'Access Control',
        accessDesc: 'Physical barrier integration.',
        complianceTitle: 'Zero Tolerance',
        complianceDesc: 'Strict compliance enforcement.'
      }
    },
    logs: {
      title: 'System Logs',
      levels: {
        all: 'All Levels',
        info: 'Info',
        warn: 'Warning',
        error: 'Error',
        audit: 'Audit'
      },
      table: {
        level: 'Level',
        timestamp: 'Timestamp',
        user: 'User',
        message: 'Message'
      }
    },
    adminManual: {
      title: 'Admin Manual',
      subtitle: 'Comprehensive System Guide',
      slides: {
        intro: '1. Introduction',
        logic: '2. Logic Engine',
        dashboard: '3. Dashboard',
        workflows: '4. Workflows',
        advanced: '5. Advanced Config',
        robotics: '7. Robotic Protocols',
        troubleshoot: '8. Troubleshooting',
        architecture: '6. System Architecture'
      },
      content: {
        confidential: 'CONFIDENTIAL',
        production: 'PRODUCTION SYSTEM',
        logic: {
          title: 'Compliance Logic',
          desc: 'The system uses a boolean matrix to determine access.',
          active: 'Active Status',
          aso: 'ASO Validity',
          racs: 'RAC Certifications',
          result: 'ACCESS STATUS'
        },
        dashboard: {
          operational: {
            title: 'Operational Dashboard',
            kpi: 'Real-time KPIs',
            renewal: 'Renewal Tracking',
            auto: 'Auto-Booking Engine'
          },
          enterprise: {
            title: 'Enterprise Dashboard',
            global: 'Global Overview',
            risk: 'Risk Heatmaps',
            ai: 'AI Insights'
          }
        },
        workflows: {
          a: { title: 'Data Ingestion', steps: ['Source A (SAP)', 'Source B (Contractor)', 'Middleware Sync'] },
          b: { title: 'Processing', steps: ['ID Normalization', 'Conflict Resolution', 'Status Calculation'] },
          c: { title: 'Analytics', steps: ['Compliance Rate', 'Trend Analysis', 'AI Reporting'] },
          d: { title: 'Output', steps: ['Dashboard KPI', 'Access Control', 'Notifications'] }
        },
        advanced: {
          gov: { title: 'Site Governance', desc: 'Define mandatory RACs per site.' },
          alcohol: { title: 'Alcohol IoT', desc: 'Integration with breathalyzer turnstiles.' }
        },
        troubleshoot: {
          0: { issue: 'Login Failed', solution: 'Check network connection and credentials.' },
          1: { issue: 'Sync Error', solution: 'Check Middleware logs in Settings > Integration.' },
          2: { issue: 'Slow Dashboard', solution: 'Clear browser cache or check internet speed.' },
          3: { issue: 'Mobile Layout', solution: 'Rotate device to landscape for tables.' },
          4: { issue: 'Other Issues', solution: 'Contact System Support.' }
        },
        architecture: {
          ui: '[ USER INTERFACE ]',
          gate: '[ PERMISSION GATE ]',
          gateDesc: 'Checks User Role (System Admin vs User)',
          logic: '[ LOGIC ENGINE ]',
          checkCap: 'Check Capacity',
          checkMatrix: 'Check Matrix Lock',
          checkDl: 'Check DL Validity',
          dbState: '[ DATABASE STATE ]',
          updateRecord: 'Updates Booking / Employee Record',
          automation: '[ AUTOMATION ]',
          emailTrig: '📧 Email/SMS Trigger',
          printTrig: '🖨️ Auto-Print Register',
          aiTrig: '🤖 AI Analysis Update'
        },
        robotics: {
          title: 'Robotic Self-Healing Protocols',
          subtitle: 'Automated resilience and diagnostic systems.',
          crash: {
            title: 'Auto-Recovery Engine',
            desc: 'The system utilizes a React Error Boundary wrapper. If a critical runtime error occurs (e.g., memory leak or unhandled exception), the "RoboTech" protocol intercepts the crash, displays a diagnostic visualization to the user, and attempts a soft-reload of the state to prevent a hard browser crash.'
          },
          diagnostics: {
            title: 'Active Diagnostics',
            desc: 'System Admins can manually trigger the "RoboTech Healer Protocol" from the Settings page. This runs a background thread that scans for database latency, optimizes memory shards, and verifies API integrity without interrupting active users.'
          }
        }
      }
    },
    proposal: {
      aboutMe: {
        title: 'About the Developer',
        name: 'Pita Domingos',
        preferred: 'Pita',
        cert: 'Full Stack Developer',
        role: 'Lead Architect',
        bio: 'Experienced developer specializing in enterprise safety systems and digital transformation.'
      },
      execSummary: {
        title: 'Executive Summary',
        text: 'A comprehensive solution to digitize and automate safety compliance.',
        quote: '"Safety is not just a priority, it is a value."'
      },
      objectives: {
        title: 'Project Objectives',
        problemTitle: 'The Problem',
        problemText: 'Manual processes, fragmented data, and compliance risks.',
        solutionTitle: 'The Solution',
        goals: ['Centralized Data', 'Automated Compliance', 'Real-time Reporting']
      },
      organogram: {
        title: 'Technical Organogram',
        tech1: 'Frontend Architecture',
        tech2: 'Backend Services'
      },
      timeline: {
        title: 'Implementation Timeline',
        phase1: 'Phase 1: Discovery',
        phase1desc: 'Requirements gathering',
        phase2: 'Phase 2: Development',
        phase2desc: 'Core system build',
        phase3: 'Phase 3: Testing',
        phase3desc: 'UAT & Bug fixes',
        phase4: 'Phase 4: Deployment',
        phase4desc: 'Go Live',
        phase5: 'Phase 5: Support',
        phase5desc: 'Maintenance'
      },
      techStack: {
        title: 'Technology Stack',
        frontendTitle: 'Frontend',
        frontend: 'React, TypeScript, Tailwind',
        backendTitle: 'Backend',
        backend: 'Node.js, Express',
        databaseTitle: 'Database',
        database: 'PostgreSQL / Supabase',
        securityTitle: 'Security',
        security: 'JWT, Role-Based Access'
      },
      financials: {
        title: 'Financial Proposal',
        items: [
          { name: 'Initial Development', type: 'One-time', cost: '$15,000.00' },
          { name: 'Development & Setup', type: 'One-time', cost: '$3,000.00' },
          { name: 'Cloud Infrastructure', type: 'Monthly', cost: '$3,500.00' },
          { name: 'Training & Documentation', type: 'One-time', cost: '$2,500.00' },
          { name: 'Maintenance & Support', type: 'Monthly', cost: '$3,000.00' }
        ]
      },
      roadmap: {
        title: 'Strategic Roadmap',
        auth: 'Authentication',
        authDesc: 'SSO Integration',
        db: 'Database',
        dbDesc: 'Cloud Migration',
        email: 'Notifications',
        emailDesc: 'Email/SMS Gateway',
        hosting: 'Hosting',
        hostingDesc: 'Scalable Cloud'
      },
      aiFeatures: {
        title: 'AI Integration',
        chatbot: 'Safety Advisor Chatbot',
        reporting: 'Automated Insight Reports'
      },
      futureUpdates: {
        title: 'Future Modules',
        moduleA: 'Module A - ERP Integration',
        moduleB: 'Module B - Biometric Hardware'
      },
      enhancedCaps: {
        title: 'Enhanced Capabilities',
        mobileVerify: { desc: 'Mobile Verification App' },
        autoBooking: { desc: 'Automated Booking Engine' },
        massData: { desc: 'Big Data Analytics' }
      },
      conclusion: {
        title: 'Conclusion',
        text: 'This system represents a significant leap forward in safety management efficiency and compliance.'
      },
      thankYou: {
        title: 'Thank You',
        contact: 'pita.domingos@zd044.onmicrosoft.com',
        phone: '+258 84 547 9481'
      },
      digitalTrans: 'Digital Transformation Initiative'
    },
    ai: {
      systemPromptAdvice: 'You are a safety expert. Provide advice on {rac} in {language}.',
      systemPromptReport: 'You are a safety data analyst. Generate a report in {language}.'
    },
    advisor: {
      button: 'Safety Advisor',
      title: 'Gemini Safety Advisor',
      sender: 'Gemini',
      emptyState: 'How can I help you with safety standards today?',
      placeholder: 'Ask about RACs, procedures...'
    },
    enterprise: {
      systemTitle: 'Enterprise Command Center',
      systemSubtitle: 'Multi-Tenant SaaS Administration',
      title: 'Enterprise Dashboard',
      subtitle: 'Global Operations Overview',
      siteName: 'Site',
      globalHealth: 'Global Health Score',
      totalWorkforce: 'Total Workforce',
      topPerformer: 'Top Performing Site',
      needsAttention: 'Needs Attention',
      noData: 'No data available',
      tenantMatrix: 'Tenant Performance Matrix',
      systemView: 'System View',
      siteComparison: 'Site Comparison',
      riskHeatmap: 'Department Risk Heatmap',
      selectPrompt: 'Select "All Sites" to view comparison',
      aiAuditor: 'AI System Auditor',
      aiDirector: 'AI Safety Director',
      systemIntelligence: 'Platform-wide Intelligence',
      companyIntelligence: 'Intelligence for',
      aiPrompt: 'Generating AI Insights...',
      aiPromptSystem: 'Analyzing multi-tenant risk vectors across all enterprises.',
      aiPromptEnterprise: 'Analyzing site-specific compliance trends and bottlenecks.',
      bottlenecks: 'Training Bottlenecks',
      failure: 'Fail Rate'
    },
    racDefs: {
        RAC01: 'RAC 01 - Working at Height',
        RAC02: 'RAC 02 - Vehicles and Mobile Equipment',
        RAC03: 'RAC 03 - Mobile Equipment Lockout',
        RAC04: 'RAC 04 - Machine Guarding',
        RAC05: 'RAC 05 - Confined Space',
        RAC06: 'RAC 06 - Lifting Operations',
        RAC07: 'RAC 07 - Ground Stability',
        RAC08: 'RAC 08 - Electricity',
        RAC09: 'RAC 09 - Explosives',
        RAC10: 'RAC 10 - Liquid Metal',
        RAC11: 'RAC 11 - Mine Traffic',
        PTS: 'PTS - Permissão de Trabalho Seguro',
        ART: 'ART - Análise de Risco da Tarefa',
        LIB_OPS: 'LIB-OPS - Liberação Operacional',
        LIB_MOV: 'LIB-MOV - Liberação de Movimentação'
    },
    notifications: {
        capacityTitle: 'Capacity Warning',
        capacityMsg: 'Some bookings were auto-moved to the next available session on'
    }
  },
  pt: {
    common: {
      vulcan: 'VULCAN',
      all: 'Todos',
      search: 'Pesquisar...',
      rowsPerPage: 'Linhas por página:',
      page: 'Página',
      of: 'de',
      name: 'Nome',
      id: 'ID',
      company: 'Empresa',
      department: 'Departamento',
      jobTitle: 'Cargo',
      role: 'Função',
      actions: 'Ações',
      cancel: 'Cancelar',
      save: 'Salvar',
      delete: 'Excluir',
      edit: 'Editar',
      view: 'Ver',
      print: 'Imprimir',
      download: 'Baixar',
      import: 'Importar',
      template: 'Modelo',
      yes: 'Sim',
      no: 'Não',
      time: 'Hora',
      status: 'Status',
      recordsFound: 'registros encontrados',
      completed: 'Concluído',
      timeLeft: 'restante',
      passed: 'Aprovado',
      failed: 'Reprovado',
      pending: 'Pendente',
      complianceRate: 'Taxa de Conformidade',
      testsProcessed: 'Testes Processados',
      stats: {
        totalRecords: 'Total de Registros',
        passRate: 'Taxa de Aprovação',
        passed: 'Aprovados',
        failed: 'Reprovados',
        totalUsers: 'Total de Usuários',
        active: 'Ativos',
        admins: 'Admins'
      },
      operationalMatrix: 'Matriz Operacional',
      owner: 'Proprietário',
      sending: 'Enviando...',
      smsBlast: 'Disparo de SMS',
      simulateRole: 'Simular Função',
      superuser: 'Acesso Superusuário',
      restricted: 'Acesso Restrito',
      enterpriseView: 'Visão Empresarial',
      exitFullScreen: 'Sair da Tela Cheia',
      fullScreen: 'Tela Cheia',
      notifications: 'Notificações',
      noNotifications: 'Sem notificações',
      clearAll: 'Limpar Tudo'
    },
    publicHome: {
      nav: {
        portfolio: 'Portfólio',
        about: 'Sobre',
        vision: 'Visão',
        partners: 'Parceiros',
        contact: 'Contato',
        enterHub: 'Central do Cliente'
      },
      hero: {
        badge: 'Inovando o Amanhã',
        title1: 'Arquitetando o',
        title2: 'Futuro Empresarial',
        desc: 'DigiSols entrega um ecossistema de software unificado para gigantes da indústria. Da segurança na indústria pesada à orquestração financeira em tempo real.',
        btnExplore: 'Explorar Ecossistema',
        btnEnter: 'Entrar na Central'
      },
      about: {
        title: 'O Padrão DigiSols',
        subtitle: 'Não apenas criamos apps; engenheiramos Sistemas Operacionais Unificados para negócios.',
        cards: {
          cars: 'O padrão ouro em conformidade de segurança industrial.',
          edudesk: 'Digitalização completa para orquestração de campi escolares.',
          h365: 'Gestão de saúde segura e de alta fidelidade.',
          microfin: 'Empréstimos automatizados e análise de portfólio.'
        }
      },
      vision: {
        title: 'Nossa Visão',
        headline: 'Um futuro onde o Software é Fluído.',
        desc: 'Nosso objetivo é eliminar silos de dados. Ao criar uma central unificada, a DigiSols fornece um cockpit central para a liderança empresarial.',
        mission: 'Nossa Missão',
        missionHeadline: 'Entregando Excelência',
        goals: [
          'Desenvolver software que se adapta ao comportamento humano, não o contrário.',
          'Tolerância Zero para vulnerabilidades de segurança.',
          'Otimização contínua através de insights orientados por IA.'
        ]
      },
      contact: {
        title: 'Vamos Integrar',
        desc: 'Pronto para o próximo passo? Solicite uma consulta para sua indústria específica.',
        emailLabel: 'E-mail',
        callLabel: 'Ligar',
        form: {
          name: 'Nome Completo',
          email: 'trabalho@email.com',
          details: 'Detalhes do projeto...',
          btn: 'Enviar Solicitação'
        }
      }
    },
    portfolio: {
      hero: {
        badge: 'Soluções Comprovadas',
        title: 'Nosso Portfólio',
        desc: 'A DigiSols entrega software robusto e escalável adaptado às necessidades da indústria. Da conformidade de segurança ao SaaS educacional.'
      },
      btnCaseStudy: 'Ver Estudo de Caso',
      back: 'Voltar ao Início',
      labels: {
        flagship: 'Principal Enterprise',
        ready: 'Pronto para Produção'
      },
      items: {
        cars: {
          category: 'Conformidade de Atividades Críticas',
          desc: 'O sistema principal de conformidade para indústrias pesadas. Automatiza segurança, gestão de treinamento e controle de acesso operacional.'
        },
        edudesk: {
          category: 'SaaS Educacional',
          desc: 'Sistema abrangente de gestão escolar para administração, acompanhamento de alunos e comunicação com pais.'
        },
        h365: {
          category: 'SaaS de Saúde',
          desc: 'Gestão hospitalar para clínicas e hospitais. Prontuários eletrônicos (EMR), agendamentos e fluxos médicos eficientes.'
        },
        microfin: {
          category: 'SaaS Financeiro',
          desc: 'Sistema de gestão para instituições de microfinanças. Automatiza empréstimos, pagamentos e relatórios de portfólio.'
        },
        jactrac: {
          category: 'IoT Industrial',
          desc: 'App especializado para rastreio de instalações críticas em minas. Visibilidade em tempo real e manutenção preditiva.'
        },
        swiftpos: {
          category: 'Solução de Retalho',
          desc: 'PDV integrado com vigilância por câmeras, alarmes e reconciliação financeira para operações seguras.'
        }
      }
    },
    caseStudies: {
      labels: {
        challenge: 'O Desafio',
        solution: 'A Solução',
        techFeatures: 'Recursos Técnicos',
        stack: 'Pilha Tecnológica',
        buildLaunch: 'Construção e Lançamento',
        ready: 'Projeto Pronto?',
        readyDesc: 'Nossa equipe de engenharia está pronta para escalar sua próxima transformação digital.',
        contact: 'Contate-nos Hoje',
        previewPending: 'Prévia Pendente',
        sandboxAccess: 'Acesso Sandbox Público',
        stagingDesc: "Este aplicativo está atualmente em fase de teste interno. O link de pré-visualização estará ativo assim que a implantação for finalizada.",
        standardsDesc: "Este aplicativo segue os altos padrões da DigiSols para segurança, confiabilidade offline e capacidade de resposta móvel."
      },
      cars: {
        subtitle: 'Requisitos de Atividade Crítica para Indústria Pesada',
        challenge: 'Indústrias pesadas de escala empresarial (Mineração, Petróleo e Gás) lutavam com dados de segurança fragmentados. Certificações expiradas e falta de visibilidade em tempo real criavam riscos de conformidade fatais nos portões de operação. Planilhas manuais eram incapazes de acompanhar uma força de trabalho de mais de 10.000 pessoas.',
        solution: 'A DigiSols desenvolveu uma plataforma SaaS de alta segurança com um motor de conformidade lógica booleana personalizado. Integramos um middleware para sincronizar múltiplos sistemas de RH legados (SAP, Oracle), normalizando os dados em uma única "Fonte da Verdade" para o controle de acesso em todo o site. O sistema inclui auto-recuperação robótica para evitar a corrupção de estado durante o uso intenso simultâneo.',
        features: [
          'Arquitetura em nuvem multi-inquilino suportando mais de 5 empresas globais.',
          'Protocolos de estado de auto-recuperação robótica para 99,9% de disponibilidade.',
          'Passaportes QR digitais para verificação em tempo real em áreas remotas offline.',
          'Integração de controle de álcool IoT para bloqueio automatizado de catracas.',
          'Fila de renovação preditiva que aloca funcionários automaticamente em sessões.'
        ],
        impact: [
          { label: 'Taxa de Conformidade', desc: 'Aderência à segurança em todo o local.' },
          { label: 'Acesso Não Autorizado', desc: 'Desde a implementação do sistema.' },
          { label: 'Sobrecarga Administrativa', desc: 'Através de filas de renovação automatizadas.' }
        ]
      },
      edudesk: {
        subtitle: 'Ecossistema Unificado de Gestão Escolar',
        challenge: 'Uma rede de escolas particulares em crescimento, com 15 campi, estava paralisada por uma administração isolada. As cadernetas eram manuais, o rastreamento de taxas era inconsistente e os pais não tinham visibilidade em tempo real do desempenho dos alunos, levando a uma queda de 15% nas matrículas.',
        solution: 'Desenvolvemos um SaaS abrangente que centraliza o ciclo de vida do aluno. A arquitetura utiliza uma camada de sincronização de dados em tempo real entre painéis administrativos e aplicativos móveis voltados para os pais. Implementamos um motor de média dinâmica que recalcula a posição instantaneamente após a entrada da nota, junto com um livro-razão financeiro automatizado.',
        features: [
          'Gestão de múltiplos campi com faturação centralizada.',
          'Sistema de notas dinâmico com lógica de média personalizável.',
          'Portal de e-learning integrado com hospedagem segura de ativos.',
          'Rastreamento de presença em tempo real via IDs de alunos prontos para NFC.',
          'Notificações automáticas de SMS e push para lembretes de propinas.'
        ],
        impact: [
          { label: 'Crescimento de Matrículas', desc: 'Melhoria na satisfação dos pais.' },
          { label: 'Eficiência Administrativa', desc: 'Redução na entrada manual de dados.' },
          { label: 'Inadimplência Financeira', desc: 'Devido a lembretes automatizados.' }
        ]
      },
      h365: {
        subtitle: 'Orquestração de Saúde de Alta Fidelidade',
        challenge: 'Hospitais regionais enfrentavam atrasos críticos no atendimento ao paciente devido à falta de um sistema integrado de Prontuário Eletrônico (PEP). Os médicos passavam 40% de seus turnos procurando prontuários físicos, e os erros de medicação estavam aumentando devido a prescrições ilegíveis.',
        solution: 'A DigiSols construiu um Sistema de Gestão Hospitalar (SGH) intuitivo com foco no armazenamento compatível de PEP. Otimizamos a lógica de agendamento de médico para paciente usando um algoritmo de fluxo proprietário que identifica gargalos em tempo real. O sistema inclui um módulo de farmácia impulsionado por IA que monitoriza interações entre medicamentos prescritos.',
        features: [
          'Cofre de PEP seguro com conformidade com os padrões HL7 e HIPAA.',
          'Agendamento inteligente de consultas com lembretes automáticos.',
          'Rastreamento de estoque de farmácia com alertas preditivos de IA para estoque baixo.',
          'Portal de resultados laboratoriais integrado com assinatura digital.',
          'Módulo de tele-saúde com transmissão de vídeo encriptada de ponta a ponta.'
        ],
        impact: [
          { label: 'Tempo de Espera', desc: 'Redução média por visita.' },
          { label: 'Erros de Medicação', desc: 'Através de verificações de prescrição digital.' },
          { label: 'Recuperação de Registros', desc: 'Pesquisa digital em menos de 2 segundos.' }
        ]
      },
      microfin: {
        subtitle: 'Orquestração de Microfinanças Empresariais',
        challenge: 'Um importante micro-emprestador estava a sofrer com elevados rácios de Crédito Malparado (NPL). O seu sistema legado carecia de pontuação de crédito robusta e acompanhamento de carteira em tempo real, tornando impossível identificar mutuários de alto risco antes do incumprimento.',
        solution: 'Um SaaS financeiro especializado que automatiza todo o ciclo de vida do empréstimo. Desenvolvemos um motor de pontuação de crédito personalizado que analisa o comportamento histórico e os marcadores de risco externos. A plataforma apresenta calendários de reembolso automatizados e um "Centro de Comando de Cobrança" para os agentes de campo.',
        features: [
          'Motor de pontuação de crédito personalizado com ganchos de aprendizagem automática.',
          'Calendários de reembolso automatizados e relatórios de envelhecimento em várias moedas.',
          'Armazenamento seguro de documentos encriptados de KYC (Conheça o Seu Cliente).',
          'Ferramentas de reconciliação financeira para auditoria de balanço diário.',
          'App de cobrança móvel para reembolsos de empréstimos offline.'
        ],
        impact: [
          { label: 'Redução de NPL', desc: 'Diminuição nos empréstimos não produtivos.' },
          { label: 'Velocidade de Origem', desc: 'Reduzido de 2 dias de processamento para 4 minutos.' },
          { label: 'Crescimento da Carteira', desc: 'Escalabilidade aumentada através da automação.' }
        ]
      },
      jactrac: {
        subtitle: 'Rastreamento de Ativos IoT Industriais',
        challenge: 'Uma grande mina de carvão perdia 100 mil dólares por hora devido a falhas imprevistas em mangueiras hidráulicas de escavadoras. Rastrear a idade e o uso de milhares de componentes únicos numa frota de 50 máquinas era impossível através de registos manuais.',
        solution: 'Construímos uma app especializada de IoT Industrial que rastreia os ciclos de vida das instalações através de etiquetas QR/NFC robustas. O JacTrac utiliza computação de borda para calcular a fadiga dos componentes e dispara alertas de manutenção antes que as falhas ocorram.',
        features: [
          'Rastreio do ciclo de vida dos componentes em tempo real com leitura NFC.',
          'Alertas de manutenção preditiva baseados nas horas de uso da máquina.',
          'Registo de ativos com registo de auditoria fotográfica de alta resolução.',
          'Entrada de campo mobile-first desenhada para ambientes de alto brilho.',
          'Sincronização de dados offline-first para poços de minas remotos.'
        ],
        impact: [
          { label: 'Tempo de Inatividade', desc: 'Poupado ao evitar rebentamentos de mangueiras.' },
          { label: 'Vida do Ativo', desc: 'Estendida através de um serviço oportuno.' },
          { label: 'Custo de Manutenção', desc: 'Através do inventário de peças otimizado.' }
        ]
      },
      swiftpos: {
        subtitle: 'O Futuro do Retalho Seguro',
        challenge: 'Uma cadeia nacional de supermercados sofria com uma quebra de inventário de 5%. A gerência não tinha forma de correlacionar os registos de vendas com a vigilância física, permitindo que transações fraudulentas de "não venda" passassem despercebidas no ponto de compra.',
        solution: 'O SwiftPOS é um PDV com foco na segurança. Integrámos transmissões de CCTV ONVIF em direto diretamente na interface do terminal de vendas. Cada transação tem um carimbo de data/hora e está ligada a um segmento de vídeo específico. Também integrámos sensores de alarme em toda a loja no painel do gerente para visibilidade total.',
        features: [
          'Inventário multi-loja sincronizado na nuvem com rastreio de SKU.',
          'Integração direta de feed de CCTV com sobreposições transacionais.',
          'Monitorização do estado do alarme para sensores de incêndio e movimento.',
          'Reconciliação financeira com registos de auditoria prontos para blockchain.',
          'Módulo de fidelização de clientes com suporte de reconhecimento facial.'
        ],
        impact: [
          { label: 'Quebra de Inventário', desc: 'Redução no furto interno.' },
          { label: 'Precisão de Stock', desc: 'Sincronização multi-nó em tempo real.' },
          { label: 'Tempo de Auditoria', desc: 'Recuperação imediata das imagens do incidente.' }
        ]
      }
    },
    launchpad: {
      title: 'Central do Cliente',
      welcome: 'Bem-vindo de volta, {name}. Selecione um workspace para iniciar a gestão.',
      btnLaunch: 'Abrir App',
      btnExplore: 'Ver Especificações',
      status: {
        active: 'Assinatura Ativa',
        access: 'Acesso Disponível',
        trial: 'Teste Ativo'
      },
      footer: {
        title: 'Precisa de uma Integração Unificada?',
        desc: 'A DigiSols fornece sincronização de dados entre aplicativos para clientes enterprise.',
        btn: 'Contatar Arquiteto de Soluções'
      },
      globalStatus: 'Status Global: Operacional'
    },
    nav: {
      dashboard: 'Painel',
      booking: 'Agendamento',
      records: 'Registros',
      database: 'Banco de Dados',
      reports: 'Relatórios',
      enterpriseDashboard: 'Empresa',
      alcohol: 'Controle de Álcool',
      requestCards: 'Solicitar Cartões',
      communications: 'Comunicações',
      schedule: 'Cronograma',
      siteGovernance: 'Governança',
      trainerInput: 'Input do Formador',
      users: 'Usuários',
      settings: 'Configurações',
      logs: 'Logs',
      manuals: 'Manuais',
      feedbackAdmin: 'Feedback',
      adminGuide: 'Guia do Admin',
      presentation: 'Apresentação',
      proposal: 'Proposta'
    },
    auth: {
      login: 'Entrar',
      logout: 'Sair'
    },
    dashboard: {
      title: 'Painel',
      subtitle: 'Visão Geral',
      upcoming: {
        title: 'Sessões Futuras',
        viewSchedule: 'Ver Cronograma',
        date: 'Data',
        session: 'Sessão',
        capacity: 'Capacidade',
        status: 'Status'
      },
      booked: {
        title: 'Funcionários Agendados',
        tableEmployee: 'Funcionário',
        tableRac: 'RAC',
        tableDate: 'Data',
        tableRoom: 'Sala',
        tableTrainer: 'Formador',
        noData: 'Nenhum agendamento encontrado'
      },
      kpi: {
        adherence: 'Aderência',
        certifications: 'Certificações',
        pending: 'Pendente',
        expiring: 'Expirando',
        scheduled: 'Agendado'
      },
      charts: {
        compliant: 'Conforme',
        nonCompliant: 'Não Conforme',
        complianceTitle: 'Visão Geral de Conformidade',
        complianceSubtitle: 'Por Tipo de RAC',
        accessTitle: 'Status de Acesso',
        missing: 'Requisitos Ausentes'
      },
      renewal: {
        title: 'Alertas de Renovação',
        message: 'funcionários com treinamento expirando em 30 dias.',
        button: 'Processar Renovações'
      },
      autoBooking: {
        title: 'Auto-Agendamento Acionado',
        subPart1: 'Funcionários com validade Crítica',
        subPart2: 'foram agendados automaticamente.'
      }
    },
    booking: {
      title: 'Novo Agendamento',
      selfServiceTitle: 'Autoatendimento',
      selfServiceDesc: 'Agende sua própria sessão de treinamento.',
      secureMode: 'Modo Seguro Ativo',
      manageSchedule: 'Gerenciar Cronograma',
      success: 'Agendamento Enviado com Sucesso',
      selectSession: 'Selecionar Sessão',
      chooseSession: 'Escolha uma sessão...',
      dlRequired: 'Detalhes da Carta de Condução são obrigatórios para este módulo.',
      addRow: 'Adicionar Funcionário',
      submitBooking: 'Enviar Agendamento'
    },
    results: {
      searchPlaceholder: 'Pesquisar por Nome ou ID...',
      passport: 'Meu Passaporte',
      export: 'Exportar CSV',
      table: {
        employee: 'Funcionário',
        session: 'Sessão',
        date: 'Data',
        trainer: 'Formador',
        theory: 'Teoria',
        status: 'Status',
        expiry: 'Validade'
      }
    },
    database: {
      title: 'Banco de Dados',
      subtitle: 'Registros Mestres',
      mappingTitle: 'Mapeamento de Importação',
      mappingSubtitle: 'Mapear colunas CSV para campos do sistema',
      preview: 'Pré-visualização do Arquivo',
      coreData: 'Dados Principais',
      complianceTrain: 'Conformidade e Treinamento',
      sourceCol: 'Coluna de Origem',
      processImport: 'Processar Importação',
      importSuccess: 'Importação Bem-sucedida',
      active: 'Ativo',
      granted: 'Concedido',
      blocked: 'Bloqueado',
      accessStatus: 'Status de Acesso',
      aso: 'Validade ASO',
      opsMatrix: 'Matriz OPS',
      cardBack: 'Pré-visualização do Verso do Cartão',
      contactInfo: 'Informações de Contato',
      cell: 'Celular',
      dlDetails: 'Detalhes da Carta de Condução',
      number: 'Número',
      class: 'Classe',
      editModal: 'Editar Funcionário',
      confirmDelete: 'Confirmar Exclusão',
      confirmDeleteMsg: 'Tem certeza de que deseja excluir este registro? Esta ação não pode ser desfeita.',
      confirmDeactivate: 'Desativar Usuário',
      confirmDeactivateMsg: 'Tem certeza de que deseja desativar este usuário? Ele perderá o acesso ao sistema.',
      massQr: 'Baixar QR em Massa',
      zipping: 'Compactando...',
      exportDb: 'Exportar BD',
      wizard: 'Assistente de Importação',
      importCsv: 'Importar CSV',
      ops: {
          EMI_PTS: 'Emi-PTS',
          APR_ART: 'Apr-ART',
          DONO_AREA_PTS: 'Dono-Area',
          EXEC: 'Exec'
      },
      bulkQrMessage: 'Isso irá gerar e baixar {count} códigos QR. Continuar?'
    },
    reports: {
      title: 'Relatórios e Análises',
      subtitle: 'Métricas de Desempenho',
      executiveAnalysis: 'Análise Executiva IA',
      analyzing: 'Analisando...',
      generate: 'Gerar Relatório',
      leaderboard: 'Classificação de Formadores',
      noShowsTitle: 'Análise de No-Shows',
      filters: {
        period: 'Período',
        startDate: 'Data de Início',
        endDate: 'Data de Término',
        department: 'Departamento',
        racType: 'Tipo de RAC'
      },
      periods: {
        weekly: 'Semanal',
        monthly: 'Mensal',
        ytd: 'Ano até a Data',
        custom: 'Personalizado'
      },
      stats: {
        totalTrained: 'Total Treinado',
        passRate: 'Taxa de Aprovação',
        attendance: 'Taxa de Presença',
        noShows: 'No-Shows'
      },
      charts: {
        performance: 'Desempenho por RAC',
        breakdownTitle: 'Distribuição de Resultados',
        distributionTitle: 'Aderência Global',
        distributionSubtitle: 'Proporção de Conformidade',
        aiSubtitle: 'Insights Gerados por IA'
      },
      trainerMetrics: {
        students: 'Alunos',
        avgTheory: 'Média Teoria'
      },
      printReport: 'Imprimir Relatório'
    },
    schedule: {
      title: 'Cronograma',
      subtitle: 'Gestão de Sessões',
      newSession: 'Nova Sessão',
      modal: {
        title: 'Agendar Treinamento',
        racType: 'Tipo de RAC',
        date: 'Data',
        startTime: 'Hora de Início',
        location: 'Local',
        capacity: 'Capacidade',
        instructor: 'Formador',
        language: 'Idioma',
        portuguese: 'Português',
        english: 'Inglês',
        saveSession: 'Salvar Sessão'
      }
    },
    trainer: {
      title: 'Input do Formador',
      loggedInAs: 'Logado como',
      noSessions: 'Nenhuma sessão pendente.',
      selectSession: 'Selecionar Sessão para Avaliação',
      chooseSession: 'Escolha uma sessão...',
      saveResults: 'Salvar Resultados'
    },
    users: {
      title: 'Gestão de Usuários',
      subtitle: 'Administrar acessos e funções',
      addUser: 'Adicionar Usuário',
      table: {
        user: 'Usuário',
        role: 'Função',
        status: 'Status',
        actions: 'Ações'
      },
      modal: {
        title: 'Novo Perfil de Usuário',
        name: 'Nome Completo',
        email: 'E-mail',
        createUser: 'Criar Acesso'
      }
    },
    settings: {
      title: 'Configurações',
      globalConfig: 'Configurações do Sistema',
      localConfig: 'Configurações Locais',
      feedbackConfig: 'Configurações de Feedback',
      tabs: {
        general: 'Geral',
        trainers: 'Formadores',
        racs: 'Definições RAC',
        sites: 'Locais',
        companies: 'Empresas',
        integration: 'Integração'
      },
      rooms: {
        title: 'Salas de Treinamento',
        new: 'Nova Sala',
        name: 'Nome da Sala',
        capacity: 'Capacidade'
      },
      trainers: {
        title: 'Formadores Qualificados',
        name: 'Nome do Formador',
        new: 'Novo Formador'
      },
      racs: {
        title: 'Padrões de RAC',
        code: 'Código',
        description: 'Descrição'
      },
      integrationPage: {
        title: 'Integração de Dados',
        sourceA: 'Fonte A',
        sourceB: 'Fonte B',
        middleware: 'Status do Middleware',
        processing: 'Processing...',
        syncNow: 'Sincronizar Agora',
        waiting: 'Aguardando comando...'
      },
      saving: 'Salvando...',
      saveAll: 'Salvar Tudo'
    },
    cards: {
      title: 'Impressão de Cartões',
      requestButton: 'Solicitar Impressão',
      sending: 'Processando...',
      eligibility: {
        failedTitle: 'Não Elegível',
        failedMsg: 'Você ainda não possui todos os requisitos para a emissão do cartão.',
        checkReqs: 'Ver Requisitos'
      }
    },
    verification: {
      title: 'Verificação',
      notFound: 'Registro não encontrado',
      verified: 'VERIFICADO',
      notVerified: 'BLOQUEADO',
      scanTime: 'Hora da Leitura',
      asoStatus: 'Status de ASO',
      dlStatus: 'Status de Carta'
    },
    manuals: {
      title: 'Manuais',
      subtitle: 'Documentação e Guias',
      sysAdmin: {
        title: 'Manual de Admin do Sistema',
        subtitle: 'Controle Total',
        configTitle: 'Configuração Inicial',
        configDesc: 'Definição dos parâmetros base.',
        rooms: 'Configurar Salas',
        trainers: 'Gerir Formadores',
        racs: 'Definir RACs',
        dbTitle: 'Gestão de Base de Dados',
        dbDesc: 'Administração de registros.',
        restrictionWarning: 'Atenção: Restrições de matriz aplicáveis.',
        csv: 'Suporte para importação CSV.',
        active: 'Garantir status ativo.'
      },
      racAdmin: {
        title: 'Manual de Admin RAC',
        subtitle: 'Operações de Treino',
        schedTitle: 'Agendamento',
        schedDesc: 'Gestão de calendários.',
        create: 'Criar Sessão',
        lang: 'Definir Idioma',
        autoTitle: 'Auto-Agendamento',
        autoDesc: 'Gestão de reservas automáticas.',
        approve: 'Aprovar ou Rejeitar.',
        renewTitle: 'Renovações',
        renewDesc: 'Filas de expiração.'
      },
      racTrainer: {
        title: 'Manual do Formador',
        subtitle: 'Avaliação e Presença',
        inputTitle: 'Input de Resultados',
        inputDesc: 'Lançamento de notas.',
        grading: 'Presenças e avaliações.',
        rac02: 'Regra RAC 02: Validar Carta.',
        save: 'Finalizar e salvar.'
      },
      deptAdmin: {
        title: 'Manual Admin Depto',
        subtitle: 'Supervisão Setorial',
        reqTitle: 'Pedido de Cartões',
        reqDesc: 'Gestão de emissões.',
        search: 'Pesquisa de staff.',
        print: 'Selecionar e Imprimir.',
        repTitle: 'Relatórios',
        repDesc: 'Análise de desempenho.'
      },
      user: {
        title: 'Manual do Usuário',
        subtitle: 'Self-Service de Funcionário',
        statusTitle: 'Consultar Status',
        statusDesc: 'Entender seu painel.',
        filterAlert: 'Use os filtros para pesquisar.',
        green: 'Verde: Conforme.',
        red: 'Vermelho: Pendente.',
        qr: 'Passaporte Digital QR.'
      }
    },
    feedback: {
      title: 'Feedback',
      subtitle: 'Ajude-nos a melhorar',
      typeLabel: 'Tipo de Feedback',
      types: {
        Bug: 'Relatar Bug',
        Improvement: 'Sugestão',
        General: 'Comentário Geral'
      },
      messageLabel: 'Mensagem',
      msgPlaceholder: 'Descreva sua ideia ou problema...',
      button: 'Enviar Feedback',
      adminTitle: 'Gestão de Feedback',
      manage: 'Administrar Sugestões',
      status: {
        New: 'Novo',
        InProgress: 'Em Progresso',
        Resolved: 'Resolvido',
        Dismissed: 'Arquivado'
      },
      actionable: 'Ação Necessária',
      noSelection: 'Nenhum selecionado',
      selectPrompt: 'Selecione para ver detalhes',
      submittedBy: 'Enviado por',
      internalNotes: 'Notas Internas',
      visibleAdmin: 'Apenas visível para Admins',
      deleteRecord: 'Excluir Registro',
      markedActionable: 'Marcado como Ação',
      markActionable: 'Marcar Ação',
      workflow: 'Fluxo de Trabalho',
      priority: 'Prioridade'
    },
    communications: {
      title: 'Comunicações',
      subtitle: 'Log de Mensagens',
      clear: 'Limpar Log',
      search: 'Pesquisar...',
      empty: 'Sem mensagens registradas.',
      select: 'Selecione para ver o conteúdo',
      sms: 'Notificação SMS',
      gateway: 'Enviado via Gateway',
      to: 'Para',
      automated: 'Mensagem automática do sistema.'
    },
    alcohol: {
      dashboard: {
        title: 'Controle de Álcool',
        subtitle: 'Monitoramento IoT em Tempo Real',
        live: 'EM VIVO',
        backToLive: 'Voltar ao Vivo',
        specs: 'Especificações',
        kpi: {
          total: 'Total de Testes',
          violations: 'Violações',
          health: 'Saúde do Sistema'
        },
        online: 'Online',
        hourlyTrend: 'Tendência Horária',
        dailyTrend: 'Tendência Diária',
        deviceLoad: 'Carga por Dispositivo',
        complianceRatio: 'Taxa de Conformidade',
        liveStream: 'Stream em Tempo Real',
        mqtt: 'Protocolo MQTT',
        deviceHealth: 'Saúde dos Dispositivos',
        alert: {
          title: 'ÁLCOOL DETECTADO',
          desc: 'Leitura positiva na portaria.',
          measured: 'BAC Medido'
        },
        actions: 'Ações Automáticas',
        actionLog: {
          locked: 'Catraca Bloqueada',
          generating: 'Gerando Relatório...',
          logged: 'Incidente Registrado',
          contacting: 'Notificando Supervisor...',
          sent: 'Alerta Enviado'
        },
        close: 'Fechar Alerta'
      },
      protocol: {
        title: 'Protocolo de Segurança',
        positiveTitle: 'Teste Positivo (> 0.000)',
        positiveDesc: 'Bloqueio imediato. Notificação automática.',
        resetTitle: 'Reset do Sistema',
        resetDesc: 'Reset manual exigido por HSE.'
      },
      features: {
        title: 'Recursos do Sistema',
        iotTitle: 'Integração IoT',
        iotDesc: 'Sincronização live com bafômetros.',
        accessTitle: 'Controle de Acesso',
        accessDesc: 'Integração física em barreiras.',
        complianceTitle: 'Tolerância Zero',
        complianceDesc: 'Aplicação estrita de regras.'
      }
    },
    logs: {
      title: 'Logs do Sistema',
      levels: {
        all: 'Todos os Níveis',
        info: 'Info',
        warn: 'Aviso',
        error: 'Erro',
        audit: 'Auditoria'
      },
      table: {
        level: 'Nível',
        timestamp: 'Data/Hora',
        user: 'Usuário',
        message: 'Mensagem'
      }
    },
    adminManual: {
      title: 'Manual Administrativo',
      subtitle: 'Guia Completo do Sistema',
      slides: {
        intro: '1. Introdução',
        logic: '2. Motor Lógico',
        dashboard: '3. Painel',
        workflows: '4. Fluxos de Trabalho',
        advanced: '5. Config Avançada',
        robotics: '7. Protocolos Robóticos',
        troubleshoot: '8. Solução de Problemas',
        architecture: '6. Arquitetura'
      },
      content: {
        confidential: 'CONFIDENCIAL',
        production: 'SISTEMA DE PRODUÇÃO',
        logic: {
          title: 'Lógica de Conformidade',
          desc: 'O sistema utiliza uma matriz booleana para controle de acesso.',
          active: 'Status Ativo',
          aso: 'Validade ASO',
          racs: 'Certificações RAC',
          result: 'STATUS DE ACESSO'
        },
        dashboard: {
          operational: {
            title: 'Painel Operacional',
            kpi: 'KPIs Live',
            renewal: 'Alertas de Renovação',
            auto: 'Motor de Agendamento'
          },
          enterprise: {
            title: 'Painel Enterprise',
            global: 'Visão Global',
            risk: 'Mapa de Calor de Risco',
            ai: 'Insights de IA'
          }
        },
        workflows: {
          a: { title: 'Ingestão de Dados', steps: ['Fonte A (SAP)', 'Fonte B (Empreiteiro)', 'Sincronização'] },
          b: { title: 'Processamento', steps: ['Normalização de ID', 'Resolução de Conflitos', 'Cálculo de Status'] },
          c: { title: 'Análise', steps: ['Taxa de Conformidade', 'Tendências', 'Relatórios IA'] },
          d: { title: 'Saída', steps: ['KPIs de Painel', 'Controle de Acesso', 'Notificações'] }
        },
        advanced: {
          gov: { title: 'Governança por Site', desc: 'Definição de RACs obrigatórias por local.' },
          alcohol: { title: 'IoT de Álcool', desc: 'Integração com bafômetros eletrônicos.' }
        },
        troubleshoot: {
          0: { issue: 'Falha no Login', solution: 'Verificar rede e credenciais.' },
          1: { issue: 'Erro de Sincronia', solution: 'Verificar logs de Middleware em Integração.' },
          2: { issue: 'Sistema Lento', solution: 'Limpar cache do navegador ou verificar velocidade da internet.' },
          3: { issue: 'Layout Mobile', solution: 'Usar dispositivo em modo paisagem para tabelas.' },
          4: { issue: 'Outros Problemas', solution: 'Contatar Suporte do Sistema.' }
        },
        architecture: {
          ui: '[ INTERFACE DE USUÁRIO ]',
          gate: '[ PERMISSION GATE ]',
          gateDesc: 'Verifica RBAC (Admin vs User)',
          logic: '[ MOTOR LÓGICO ]',
          checkCap: 'Checar Capacidade',
          checkMatrix: 'Checar Matrix Lock',
          checkDl: 'Checar Validade Carta',
          dbState: '[ ESTADO DA DB ]',
          updateRecord: 'Atualiza Registros',
          automation: '[ AUTOMAÇÃO ]',
          emailTrig: '📧 Gatilho SMS/Email',
          printTrig: '🖨️ Auto-Impressão',
          aiTrig: '🤖 Análise Gemini AI'
        },
        robotics: {
          title: 'Protocolos de Auto-Cura',
          subtitle: 'Resiliência automatizada e diagnósticos.',
          crash: {
            title: 'Motor de Auto-Recuperação',
            desc: 'O sistema usa Error Boundaries para interceptar crashes e realizar rollbacks de estado automáticos para evitar travamentos do navegador.'
          },
          diagnostics: {
            title: 'Diagnósticos Ativos',
            desc: 'Admins podem disparar o protocolo RoboTech para otimizar memória e validar integridade de dados live sem interromper usuários ativos.'
          }
        }
      }
    },
    proposal: {
      aboutMe: {
        title: 'Sobre o Desenvolvedor',
        name: 'Pita Domingos',
        preferred: 'Pita',
        cert: 'Desenvolvedor Full Stack',
        role: 'Arquiteto Líder',
        bio: 'Desenvolvedor experiente especializado em sistemas de segurança empresarial e transformação digital.'
      },
      execSummary: {
        title: 'Resumo Executivo',
        text: 'Uma solução abrangente para digitalizar e automatizar a conformidade de segurança.',
        quote: '"Segurança não é apenas uma prioridade, é um valor."'
      },
      objectives: {
        title: 'Objetivos do Projeto',
        problemTitle: 'O Problema',
        problemText: 'Processos manuais, dados fragmentados e riscos de conformidade.',
        solutionTitle: 'A Solução',
        goals: ['Dados Centralizados', 'Conformidade Automatizada', 'Real-time Reporting']
      },
      organogram: {
        title: 'Organograma Técnico',
        tech1: 'Arquitetura Frontend',
        tech2: 'Serviços Backend'
      },
      timeline: {
        title: 'Cronograma de Implementação',
        phase1: 'Fase 1: Descoberta',
        phase1desc: 'Levantamento de requisitos',
        phase2: 'Fase 2: Desenvolvimento',
        phase2desc: 'Construção do sistema principal',
        phase3: 'Fase 3: Testes',
        phase3desc: 'UAT e correções de bugs',
        phase4: 'Fase 4: Implantação',
        phase4desc: 'Entrada em operação',
        phase5: 'Fase 5: Suporte',
        phase5desc: 'Manutenção'
      },
      techStack: {
        title: 'Pilha Tecnológica',
        frontendTitle: 'Frontend',
        frontend: 'React, TypeScript, Tailwind',
        backendTitle: 'Backend',
        backend: 'Node.js, Express',
        databaseTitle: 'Banco de Dados',
        database: 'PostgreSQL / Supabase',
        securityTitle: 'Segurança',
        security: 'JWT, Acesso Baseado em Função'
      },
      financials: {
        title: 'Proposta Financeira',
        items: [
          { name: 'Desenvolvimento Inicial', type: 'Pagamento Único', cost: '$15,000.00' },
          { name: 'Desenvolvimento e Configuração', type: 'Pagamento Único', cost: '$3,000.00' },
          { name: 'Infraestrutura em Nuvem', type: 'Mensal', cost: '$3,500.00' },
          { name: 'Treinamento e Documentação', type: 'Pagamento Único', cost: '$2,500.00' },
          { name: 'Manutenção e Suporte', type: 'Mensal', cost: '$3,000.00' }
        ]
      },
      roadmap: {
        title: 'Roteiro Estratégico',
        auth: 'Autenticação',
        authDesc: 'Integração SSO',
        db: 'Banco de Dados',
        dbDesc: 'Migração para Nuvem',
        email: 'Notificações',
        emailDesc: 'Gateway de Email/SMS',
        hosting: 'Hospedagem',
        hostingDesc: 'Nuvem Escalável'
      },
      aiFeatures: {
        title: 'Integração IA',
        chatbot: 'Chatbot Consultor de Segurança',
        reporting: 'Relatórios de Insights Automatizados'
      },
      futureUpdates: {
        title: 'Módulos Futuros',
        moduleA: 'Módulo A - Integração ERP',
        moduleB: 'Módulo B - Hardware Biométrico'
      },
      enhancedCaps: {
        title: 'Capacidades Aprimoradas',
        mobileVerify: { desc: 'App de Verificação Móvel' },
        autoBooking: { desc: 'Motor de Agendamento Automático' },
        massData: { desc: 'Análise de Big Data' }
      },
      conclusion: {
        title: 'Conclusão',
        text: 'Este sistema representa um salto significativo na eficiência e conformidade do gerenciamento de segurança.'
      },
      thankYou: {
        title: 'Obrigado',
        contact: 'pita.domingos@zd044.onmicrosoft.com',
        phone: '+258 84 547 9481'
      },
      digitalTrans: 'Iniciativa de Transformação Digital'
    },
    ai: {
      systemPromptAdvice: 'Você é um especialista em segurança. Forneça conselhos sobre {rac} em {language}.',
      systemPromptReport: 'Você é um analista de dados de segurança. Gere um relatório em {language}.'
    },
    advisor: {
      button: 'Consultor de Segurança',
      title: 'Consultor de Segurança Gemini',
      sender: 'Gemini',
      emptyState: 'Como posso ajudar com padrões de segurança hoje?',
      placeholder: 'Pergunte sobre RACs, procedimentos...'
    },
    enterprise: {
      systemTitle: 'Centro de Comando Empresarial',
      systemSubtitle: 'Administração SaaS Multi-Locatário',
      title: 'Painel Empresarial',
      subtitle: 'Visão Geral das Operações Globais',
      siteName: 'Local',
      globalHealth: 'Pontuação Global de Saúde',
      totalWorkforce: 'Força de Trabalho Total',
      topPerformer: 'Local com Melhor Desempenho',
      needsAttention: 'Precisa de Atenção',
      noData: 'Sem dados disponíveis',
      tenantMatrix: 'Matriz de Desempenho do Locatário',
      systemView: 'Visão do Sistema',
      siteComparison: 'Comparação de Locais',
      riskHeatmap: 'Mapa de Calor de Risco do Departamento',
      selectPrompt: 'Selecione "Todos os Locais" para ver a comparação',
      aiAuditor: 'Auditor de Sistema IA',
      aiDirector: 'Diretor de Segurança IA',
      systemIntelligence: 'Inteligência em Toda a Plataforma',
      companyIntelligence: 'Inteligência para',
      aiPrompt: 'Gerando Insights de IA...',
      aiPromptSystem: 'Analisando vetores de risco multi-locatário em todas as empresas.',
      aiPromptEnterprise: 'Analisando tendências de conformidade específicas do local e gargalos.',
      bottlenecks: 'Gargalos de Treinamento',
      failure: 'Taxa de Reprovação'
    },
    racDefs: {
        RAC01: 'RAC 01 - Trabalho em Altura',
        RAC02: 'RAC 02 - Veículos e Equipamentos Móveis',
        RAC03: 'RAC 03 - Bloqueio de Equipamentos Móveis',
        RAC04: 'RAC 04 - Proteção de Máquinas',
        RAC05: 'RAC 05 - Espaço Confinado',
        RAC06: 'RAC 06 - Operações de Içamento',
        RAC07: 'RAC 07 - Estabilidade do Solo',
        RAC08: 'RAC 08 - Eletricidade',
        RAC09: 'RAC 09 - Explosivos',
        RAC10: 'RAC 10 - Metal Líquido',
        RAC11: 'RAC 11 - Tráfego de Mina',
        PTS: 'PTS - Permissão de Trabalho Seguro',
        ART: 'ART - Análise de Risco da Tarefa',
        LIB_OPS: 'LIB-OPS - Liberação Operacional',
        LIB_MOV: 'LIB-MOV - Liberação de Movimentação'
    },
    notifications: {
        capacityTitle: 'Aviso de Capacidade',
        capacityMsg: 'Alguns agendamentos foram movidos automaticamente para a próxima sessão disponível em'
    }
  }
};
