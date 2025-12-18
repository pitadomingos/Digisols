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
      date: 'Date',
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
      clearAll: 'Clear All',
      legal: 'Legal',
      rights: 'All rights reserved.'
    },
    publicHome: {
      nav: {
        portfolio: 'Portfolio',
        about: 'About',
        vision: 'Vision',
        mission: 'Mission',
        partners: 'Partners',
        contact: 'Contact',
        enterHub: 'Enter Client Hub'
      },
      hero: {
        badge: 'Critical Activity Requisitions',
        title1: 'Architecting',
        title2: 'Enterprise',
        title3: 'Future',
        desc: 'DigiSols delivers a unified software ecosystem for industry titans. From heavy industry safety to real-time financial orchestration.',
        btnExplore: 'Explore Ecosystem',
        btnEnter: 'Enter Client Hub'
      },
      about: {
        title: 'Safety Orchestration',
        subtitle: 'We engineer the digital nervous system for the world\'s most challenging industrial environments, specialized in RAC 01 compliance.',
        cards: {
          cars: 'CARS (RACS) - The enterprise standard for Critical Activity Requirements.',
          edudesk: 'Digital campus management for industrial education centers.',
          h365: 'Compliance-driven healthcare systems for mining sites.',
          microfin: 'Financial orchestration for industrial supply chains.',
          websites: 'Strategic web presence for engineering and logistics firms.'
        }
      },
      vision: {
        title: 'Our Vision',
        headline: 'Intelligent Industrial Compliance.',
        desc: 'Eliminating the gap between field operations and safety oversight through real-time RAC data integrity.',
        mission: 'Our Strategic Mission',
        missionHeadline: 'Safeguarding Lives via Code',
        goals: [
          'Unify fragmented legacy data into actionable safety intelligence.',
          'Deliver real-time validation for RAC 01-11 safety standards.',
          'Automate gate access via digital passports to protect life and assets.'
        ]
      },
      partners: {
        title: 'Global Industrial Partners',
        stats: {
          records: 'Over 12,000+ Safety Credentials Managed',
          reliability: '99.99% Operational Uptime'
        }
      },
      contact: {
        title: 'Architect Your Safety',
        desc: 'Request a consultation for site-specific digital transformation of RAC workflows.',
        emailLabel: 'Direct Email',
        callLabel: 'Operations Line',
        form: {
          name: 'Contact Name',
          email: 'corporate@email.com',
          details: 'Scope of work...',
          btn: 'Send Brief'
        }
      }
    },
    publicMission: {
        hero: {
            badge: 'Strategic Mandate',
            title: 'Digitalizing Safety via RAC 01 Standards',
            desc: 'Our mission is to build the digital infrastructure that keeps industry titans moving safely by mastering Critical Activity Requisitions.'
        },
        manifesto: {
            title: 'The Safety Manifesto',
            text: 'We believe that software in heavy industry must be as rugged as the hardware it manages. To safeguard every life, we rigorously digitalize Critical Activity Requisitions, ensuring every operator is certified, compliant, and empowered by RAC 01 standards.'
        },
        values: {
            title: 'Operational Pillars',
            precision: {
                title: 'Lógica de Conformidade',
                desc: 'Integrating directly with training matrices to automate the validation of critical requisitions.'
            },
            safety: {
                title: 'Automated Shield',
                desc: 'Real-time lockout systems driven by certification validity using RAC 01 protocols.'
            },
            integrity: {
                title: 'Data Sovereignty',
                desc: 'Providing a single immutable record of safety training and personnel health across global sites.'
            }
        }
    },
    portfolio: {
      hero: {
        badge: 'Enterprise Ecosystem',
        title: 'Solutions Portfolio',
        desc: 'Robust, scalable, and mission-critical software designed for the unique demands of the mining and manufacturing sectors.'
      },
      btnCaseStudy: 'View Specs',
      back: 'Return Home',
      labels: {
        flagship: 'Primary Standard',
        ready: 'Production Ready',
        webSolution: 'Corporate Digital',
        iotSolution: 'Advanced Telemetry'
      },
      items: {
        cars: {
          name: 'CARS (RACS)',
          category: 'Critical Requisitions',
          desc: 'The "Critical Activity Requirements System" (designated as RACS in Portuguese). Automates training workflows, digital passports, and turnstile access control for a safer workforce.'
        },
        minesite: {
          name: 'Minesite Vision',
          category: 'IoT Fleet Telemetry',
          desc: 'Advanced IoT monitoring for heavy mining fleets. Tracks Fire Suppression Systems, Lincoln AutoLub performance, and critical EOM parameters from the ECM.'
        },
        amtecheng: {
          name: 'Amtecheng Eng.',
          category: 'Engineering Portal',
          desc: 'A high-conversion corporate ecosystem for leading engineering firms. Focused on lead generation and industrial project showcasing.'
        },
        edudesk: {
          name: 'EduDesk',
          category: 'Industrial Training',
          desc: 'Digitizing the lifecycle of apprentice and operator training programs with gradebooks and attendance modules.'
        },
        h365: {
          name: 'H365 Site Health',
          category: 'Occupational Health',
          desc: 'Medical management for remote operations. Integrated ASO tracking and Electronic Medical Records.'
        },
        microfin: {
          name: 'MicroFin',
          category: 'Financial Control',
          desc: 'Automated lending and payroll orchestration for large-scale industrial contractor workforces.'
        },
        jactrac: {
          name: 'JacTrac Mini',
          category: 'Hydraulic Asset Tracking',
          desc: 'Specialized Industrial IoT for tracking hose installation lifecycles and predicting catastrophic component failure.'
        },
        swiftpos: {
          name: 'SwiftPOS Retail',
          category: 'Inventory Security',
          desc: 'Point of Sale integrated with CCTV and warehouse alarms for total operational visibility.'
        }
      },
      industries: {
        mining: 'Mining',
        oilGas: 'Oil & Gas',
        ports: 'Ports',
        manufacturing: 'Manufacturing',
        education: 'Academic',
        healthcare: 'Clinical',
        finance: 'Banking',
        retail: 'Retail',
        logistics: 'Supply Chain',
        gov: 'Public Sector',
        clinical: 'Medical',
        banking: 'Fintech',
        industry: 'Heavy Industry',
        security: 'Physical Security',
        engineering: 'Engineering'
      },
      tags: {
        iot: 'IoT Enabled',
        saas: 'SaaS',
        security: 'High Security',
        offline: 'Offline Core',
        scalable: 'Auto-Scaling',
        secure: 'Zero-Trust',
        cloud: 'Multi-Region',
        smb: 'SME Ready',
        seo: 'SEO Engine',
        telemetry: 'Real-time Telemetry'
      },
      footer: {
        title: 'Custom Architecture Needed?',
        desc: "We build bespoke software for complex industrial logic. Contact our solutions desk.",
        btn: 'Request Consultation'
      }
    },
    caseStudies: {
      labels: {
        challenge: 'The Challenge',
        solution: 'The Solution',
        techFeatures: 'Technical Features',
        stack: 'Technology Stack',
        buildLaunch: 'Build & Launch',
        ready: 'Deploying Soon?',
        readyDesc: 'Our engineering units are ready to scale your next digital migration.',
        contact: 'Contact Us',
        previewPending: 'Staging Phase',
        sandboxAccess: 'Public Demo Access',
        stagingDesc: "This application is currently in internal staging for client validation.",
        standardsDesc: "This system follows DigiSols' high standards for industrial-grade resilience."
      },
      cars: {
        subtitle: 'Critical Activity Requirements - CARS (RACS)',
        challenge: 'Large-scale mining operations struggled with certification silos. Expired credentials created life-threatening liability at site gates, where 10,000+ employees required individual verification daily.',
        solution: 'CARS (RACS) is a high-security compliance engine. It merges HR records with real-time training results to generate digital QR passports. If a requirement (RACS, ASO, or DL) is expired, access is blocked automatically.',
        features: [
          'Multi-tenant architecture supporting global mining leaders.',
          'Digital QR "Passports" for offline field verification.',
          'Boolean logic engine for complex compliance matrices.',
          'IoT Alcohol Control (breathalyzer) gate integration.',
          'Automated training renewal queues and SMS alerts.'
        ],
        impact: [
          { label: 'Gate Throughput', desc: 'Faster verification time.' },
          { label: 'Safety Adherence', desc: 'Compliance with CARS (RACS).' },
          { label: 'Admin Errors', desc: 'Reduction in manual entry.' }
        ]
      },
      minesite: {
          subtitle: 'Predictive IoT Telemetry',
          challenge: 'Unexpected equipment failure led to millions in lost productivity and safety risks during fire suppression failures.',
          solution: 'Minesite Vision integrates directly with fleet ECMs via MQTT to monitor parameters like engine load, lubrication levels, and fire system status in real-time.',
          features: [
            'Direct CAN-bus parameter extraction.',
            'MQTT real-time telemetry stream.',
            'Automated lubrication failure prediction.',
            'Integrated fire suppression health checks.'
          ],
          impact: [
            { label: 'Downtime', desc: 'Significant reduction in unplanned stops.' },
            { label: 'Safety Incidents', desc: 'Zero failures of protected assets.' },
            { label: 'Data Accuracy', desc: 'Real-time telemetry instead of manual logs.' }
          ]
      },
      amtecheng: {
          subtitle: 'Strategic Engineering Presence',
          challenge: 'Leading engineering firms lacked a unified platform to showcase complex multi-million dollar projects and manage high-intent lead generation.',
          solution: 'A high-conversion corporate ecosystem built with Next.js, featuring a headless CMS for rapid project updates and a custom lead scoring engine.',
          features: [
            'Headless CMS for heavy-asset management.',
            'High-performance SSR for technical SEO.',
            'Integrated lead nurturing funnel.',
            'Interactive 3D project walk-throughs.'
          ],
          impact: [
            { label: 'Lead Volume', desc: 'Substantial increase in monthly RFQs.' },
            { label: 'Page Load', desc: 'Sub-second performance for global project sites.' },
            { label: 'User Rating', desc: 'High scores on technical accessibility.' }
          ]
      },
      edudesk: {
        subtitle: 'Digital Campus Orchestration',
        challenge: 'Legacy paper-based grading in industrial training centers led to certification delays and lack of data transparency.',
        solution: 'EduDesk is a centralized training management system that automates gradebooks, attendance, and certification issuance.',
        features: ['Digital Gradebooks', 'Automated Attendance', 'NFC Integration', 'Real-time Progress Tracking'],
        impact: [
          { label: 'Efficiency', desc: 'Faster grading cycles.' },
          { label: 'Transparency', desc: 'Live access to student data.' },
          { label: 'Paperwork', desc: '90% reduction in physical logs.' }
        ]
      },
      h365: {
        subtitle: 'Occupational Health Platform',
        challenge: 'Remote mining sites lacked integrated medical history and real-time ASO tracking, increasing safety risks.',
        solution: 'H365 provides a comprehensive EMR and occupational health platform with integrated certification tracking.',
        features: ['Electronic Medical Records', 'ASO Auto-Alerts', 'Telemedicine Integration', 'Physical Fitness Tracking'],
        impact: [
          { label: 'Risk Reduction', desc: 'Fewer health-related incidents.' },
          { label: 'Compliance', desc: '100% ASO validity tracking.' },
          { label: 'Access', desc: 'Instant medical data for HSE.' }
        ]
      },
      microfin: {
          subtitle: 'Financial Orchestration for Contractors',
          challenge: 'Managing payroll and small loans for thousands of contractors was a manual, error-prone administrative burden.',
          solution: 'MicroFin automates the lending lifecycle and integrates directly with contractor attendance data.',
          features: ['Automated Lending', 'Payroll Integration', 'Risk Scoring', 'Mobile Disbursement'],
          impact: [
            { label: 'Admin Time', desc: 'Significant reduction in processing.' },
            { label: 'Accuracy', desc: 'Zero manual calculation errors.' },
            { label: 'Velocity', desc: 'Instant disbursement to workers.' }
          ]
      },
      jactrac: {
          subtitle: 'Industrial Asset Lifecycle Tracking',
          challenge: 'Critical hydraulic components failed without warning, causing massive downtime and safety hazards.',
          solution: 'JacTrac uses IoT and lifecycle analytics to predict component failure before it happens.',
          features: ['Component Serialization', 'IoT Failure Prediction', 'Maintenance Scheduling', 'Field Asset Audit'],
          impact: [
            { label: 'Downtime', desc: 'Drastic reduction in failure stops.' },
            { label: 'Safety', desc: 'Prevention of high-pressure bursts.' },
            { label: 'Cost', desc: 'Optimization of inventory spend.' }
          ]
      },
      swiftpos: {
          subtitle: 'High-Security Retail Ecosystem',
          challenge: 'Warehouse inventory leakage and retail fraud required an integrated security and transaction platform.',
          solution: 'SwiftPOS merges point-of-sale logic with CCTV and alarm telemetry for total site security.',
          features: ['Integrated CCTV', 'Real-time Inventory Sync', 'Fraud Detection AI', 'Multi-Store Management'],
          impact: [
            { label: 'Shrinkage', desc: 'Major reduction in inventory loss.' },
            { label: 'Security', desc: 'Instant alert on anomalous sales.' },
            { label: 'Control', desc: 'Unified view across all branches.' }
          ]
      }
    },
    launchpad: {
      title: 'Digital Command Hub',
      welcome: 'Welcome, {name}. Select an industrial workspace.',
      btnLaunch: 'Access Vault',
      btnExplore: 'View Specs',
      status: {
        active: 'Production Active',
        access: 'Standard Access',
        trial: 'Beta Testing'
      },
      footer: {
        title: 'Unified Ecosystem Support',
        desc: 'DigiSols provides cross-app data synchronization for enterprise clients.',
        btn: 'Contact Solutions Architect'
      },
      globalStatus: 'Status: Operational'
    },
    nav: {
      dashboard: 'Dashboard',
      booking: 'Scheduling',
      records: 'Training Records',
      database: 'Master Matrix',
      reports: 'Analytics',
      enterpriseDashboard: 'Corporate View',
      alcohol: 'Alcohol IoT',
      requestCards: 'Issue Passports',
      communications: 'Comms Log',
      schedule: 'Calendar',
      siteGovernance: 'Policy Engine',
      trainerInput: 'Grade Entries',
      users: 'User Access',
      settings: 'System Config',
      logs: 'System Logs',
      manuals: 'Documentation',
      feedbackAdmin: 'Support Tickets',
      adminGuide: 'Admin Slides',
      presentation: 'Proposal',
      proposal: 'Full Spec'
    },
    auth: {
      login: 'Sign In',
      logout: 'Exit Hub'
    },
    dashboard: {
      title: 'Operational Dashboard',
      subtitle: 'Site Overview',
      upcoming: {
        title: 'Upcoming Training',
        viewSchedule: 'Full Calendar',
        date: 'Date',
        session: 'Module',
        capacity: 'Seats',
        status: 'Status'
      },
      booked: {
        title: 'Staff Booked',
        tableEmployee: 'Staff Member',
        tableRac: 'Module',
        tableDate: 'Date',
        tableRoom: 'Venue',
        tableTrainer: 'Instructor',
        noData: 'No current bookings'
      },
      kpi: {
        adherence: 'Compliance',
        certifications: 'Active CARS (RACS)',
        pending: 'In Training',
        expiring: 'Renewal Alert',
        scheduled: 'Sessions'
      },
      charts: {
        compliant: 'Authorized',
        nonCompliant: 'Blocked',
        complianceTitle: 'Adherence Matrix',
        complianceSubtitle: 'By CARS (RACS) Protocol',
        accessTitle: 'Gate Status',
        missing: 'Deficiencies'
      },
      renewal: {
        title: 'Renewal Alerts',
        message: 'staff members requiring renewal within 30 days.',
        button: 'Initiate Renewals'
      },
      autoBooking: {
        title: 'Auto-Reservations',
        subPart1: 'Staff with high-risk expiry',
        subPart2: 'have been auto-reserved.'
      }
    },
    reports: {
      title: 'Reporting & Analytics',
      subtitle: 'Site performance and compliance trends',
      filters: {
        period: 'Report Period',
        startDate: 'Start Date',
        endDate: 'End Date',
        department: 'Department',
        racType: 'RAC Module'
      },
      periods: {
        weekly: 'Last 7 Days',
        monthly: 'Last 30 Days',
        ytd: 'Year to Date',
        custom: 'Custom Range'
      },
      printReport: 'Print Executive Report',
      stats: {
        totalTrained: 'Total Trained',
        passRate: 'Pass Rate',
        attendance: 'Attendance',
        noShows: 'No Shows'
      },
      charts: {
        performance: 'RAC Performance Trend',
        breakdownTitle: 'Success vs Failure by Module',
        distributionTitle: 'Compliance Distribution',
        distributionSubtitle: 'Breakdown of current site population',
        aiSubtitle: 'Strategic Insights'
      },
      executiveAnalysis: 'AI Executive Summary',
      analyzing: 'Analyzing...',
      generate: 'Generate Brief',
      leaderboard: 'Trainer Performance',
      trainerMetrics: {
        students: 'Students',
        avgTheory: 'Avg Theory'
      },
      noShowsTitle: 'No-Show Incident Log'
    },
    database: {
      title: 'Master Compliance Matrix',
      subtitle: 'Workforce Authorization Control',
      granted: 'Granted',
      blocked: 'Blocked',
      active: 'Active',
      accessStatus: 'Access Status',
      aso: 'ASO Expiry',
      opsMatrix: 'Ops Matrix',
      importSuccess: 'Import Successful',
      massQr: 'Bulk QR Download',
      zipping: 'Archiving...',
      wizard: 'Import Wizard',
      exportDb: 'Export Database',
      editModal: 'Edit Employee Profile',
      contactInfo: 'Contact Information',
      cell: 'Mobile Number',
      dlDetails: 'Driver License Details',
      number: 'Number',
      class: 'Class',
      mappingTitle: 'Source Data Mapping',
      mappingSubtitle: 'Connect your legacy CSV columns to CARS fields',
      preview: 'Data Preview',
      coreData: 'Core Identity',
      complianceTrain: 'Compliance & Training',
      sourceCol: 'Source Column',
      cardBack: 'Digital Passport Rear',
      confirmDeactivate: 'Deactivate Employee?',
      confirmDeactivateMsg: 'This will block access and mark the record as inactive.',
      confirmDelete: 'Delete Record?',
      confirmDeleteMsg: 'This will permanently remove the record from the database.',
      bulkQrMessage: 'Are you sure you want to generate {count} QR codes? This might take a moment.',
      processImport: 'Start Import Processing',
      importCsv: 'Import CSV',
      ops: {
          EMI_PTS: 'Emi-PTS',
          APR_ART: 'Apr-ART',
          DONO_AREA_PTS: 'Owner',
          EXEC: 'Exec'
      }
    },
    results: {
      searchPlaceholder: 'Search by Name or ID...',
      passport: 'My Passport',
      export: 'Export Results',
      table: {
        employee: 'Employee',
        session: 'Training',
        date: 'Date',
        trainer: 'Trainer',
        theory: 'Theory',
        status: 'Status',
        expiry: 'Expiry'
      }
    },
    trainer: {
      title: 'Grading Terminal',
      loggedInAs: 'Authenticated Instructor:',
      noSessions: 'No pending sessions found in your queue.',
      selectSession: 'Operational Workflow Selection',
      chooseSession: 'Select a training session to input grades',
      saveResults: 'Commit & Print Register'
    },
    cards: {
      title: 'Passport Studio',
      sending: 'Processing Request...',
      requestButton: 'Request Card Issuance',
      eligibility: {
          failedTitle: 'Eligibility Pending',
          failedMsg: 'You are currently not eligible for a Digital Passport. Ensure your ASO and RAC certifications are valid.',
          checkReqs: 'View Requirements'
      }
    },
    verification: {
      title: 'Asset Authorization',
      notFound: 'Digital Passport Not Found',
      verified: 'ACCESS GRANTED',
      notVerified: 'ACCESS BLOCKED',
      scanTime: 'Verification Time',
      asoStatus: 'Medical Validity',
      dlStatus: 'Driver Authorization'
    },
    communications: {
        title: 'Communication Hub',
        subtitle: 'Outbound Notification Logs',
        clear: 'Clear History',
        search: 'Search messages...',
        empty: 'No message history found.',
        select: 'Select a message to preview simulation',
        sms: 'SMS NOTIFICATION',
        gateway: 'Digital Gateway 04',
        to: 'To',
        automated: 'This is an automated system notification.'
    },
    notifications: {
        capacityTitle: 'Auto-Slotting Active',
        capacityMsg: 'Session reached capacity. Overflow students moved to'
    },
    feedback: {
        title: 'System Feedback',
        subtitle: 'Help us optimize the platform',
        typeLabel: 'Entry Type',
        types: {
            Bug: 'Technical Issue',
            Improvement: 'Feature Request',
            General: 'Platform Comment'
        },
        messageLabel: 'Detailed Description',
        msgPlaceholder: 'Describe your observation...',
        button: 'Submit Brief',
        adminTitle: 'User Experience Auditor',
        manage: 'Manage incoming user feedback and bug reports.',
        status: {
            New: 'Awaiting Review',
            InProgress: 'Investigating',
            Resolved: 'Optimized',
            Dismissed: 'Closed'
        },
        actionable: 'Actionable',
        noSelection: 'No Feedback Selected',
        selectPrompt: 'Select an entry from the list to view technical details.',
        workflow: 'Resolution Workflow',
        priority: 'Strategic Priority',
        markActionable: 'Mark as Actionable',
        markedActionable: 'Actionable Engaged',
        submittedBy: 'Reported by User',
        internalNotes: 'Engineering Analysis Notes',
        visibleAdmin: 'Confidential: Internal Engineering View Only',
        deleteRecord: 'Purge Record'
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
    advisor: {
      button: 'Safety Advisor',
      title: 'Safety Advisor',
      sender: 'CARS (RACS) AI',
      emptyState: 'Ask me about safety protocols.',
      placeholder: 'Type your query...'
    },
    alcohol: {
      dashboard: {
        live: 'Live Stream Active',
        backToLive: 'Back to Monitoring',
        specs: 'Technical Specs',
        title: 'Alcohol Control System',
        subtitle: 'IoT Integration & Live Gate Monitoring',
        kpi: {
          total: 'Total Tests',
          violations: 'Violations',
          health: 'Device Status'
        },
        online: 'Online',
        hourlyTrend: 'Hourly Test Volume',
        dailyTrend: 'Daily Test Volume',
        deviceLoad: 'Device Traffic Distribution',
        complianceRatio: 'Compliance vs Violations',
        liveStream: 'Real-time Event Stream',
        mqtt: 'MQTT Protocol',
        deviceHealth: 'Network Integrity',
        alert: {
          title: 'VIOLATION DETECTED',
          desc: 'Immediate Lockout Initiated',
          measured: 'Measured BAC'
        },
        actions: 'Automated Response Log',
        actionLog: {
          locked: 'Credential Locked in Master Matrix',
          generating: 'Generating Incident Report...',
          logged: 'Incident Logged to Audit Trail',
          contacting: 'Contacting HSE Supervisor...',
          sent: 'Alert Sent via SMS/Email'
        },
        close: 'Acknowledge Alert'
      },
      protocol: {
        title: 'Safety Interlock Protocol',
        positiveTitle: 'Positive BAC Detection',
        positiveDesc: 'The system immediately invalidates the "Access Granted" status for the next 24 hours. The gate turnstile remains locked.',
        resetTitle: 'Manual Override',
        resetDesc: 'Only HSE Managers can reset a blocked status after a formal interview and second manual test.'
      },
      features: {
        title: 'Technical Capabilities',
        iotTitle: 'IoT Gateway',
        iotDesc: 'Low-latency connectivity via ESP32/PLC edge controllers.',
        accessTitle: 'Instant Lockout',
        accessDesc: 'Direct integration with turnstile logic and HR credentials.',
        complianceTitle: 'Audit Trail',
        complianceDesc: 'Tamper-proof logs of every entry attempt with BAC data.'
      }
    },
    enterprise: {
      systemTitle: 'Global Command Hub',
      systemSubtitle: 'Multi-Tenant Management',
      title: 'Enterprise View',
      subtitle: 'Group Performance',
      siteName: 'Site',
      globalHealth: 'Aggregate Compliance',
      totalWorkforce: 'Total Staff',
      topPerformer: 'Top Site',
      needsAttention: 'Risk Area',
      noData: 'No data available',
      tenantMatrix: 'Portfolio Health',
      systemView: 'Master View',
      siteComparison: 'Site Benchmarking',
      riskHeatmap: 'Risk Mapping',
      selectPrompt: 'Adjust filters to view data',
      aiAuditor: 'Platform Auditor',
      aiDirector: 'Safety Director AI',
      systemIntelligence: 'Platform Insights',
      companyIntelligence: 'Enterprise Insights',
      aiPrompt: 'Generating strategic brief...',
      aiPromptSystem: 'Analyzing portfolio risks.',
      aiPromptEnterprise: 'Analyzing local trends.',
      bottlenecks: 'Operational Friction',
      failure: 'Failure Rate'
    },
    schedule: {
      title: 'Training Schedule',
      subtitle: 'Resource and Venue Coordination',
      newSession: 'New Session',
      modal: {
        title: 'Schedule Configuration',
        racType: 'Certification Module',
        date: 'Session Date',
        startTime: 'Start Time',
        location: 'Venue/Room',
        capacity: 'Capacity',
        instructor: 'Certified Instructor',
        language: 'Session Language',
        portuguese: 'Portuguese',
        english: 'English',
        saveSession: 'Commit to Schedule'
      }
    },
    settings: {
      title: 'Global Configuration',
      globalConfig: 'System Master Policy',
      localConfig: 'Site Specific Preferences',
      saveAll: 'Apply All Changes',
      saving: 'Synchronizing...',
      rooms: {
        title: 'Venues & Physical Resources',
        name: 'Room Name',
        capacity: 'Seat Capacity'
      },
      trainers: {
        title: 'Authenticated Instructors',
        new: 'Register New Trainer'
      },
      racs: {
        title: 'Certification Logic Matrix'
      },
      integrationPage: {
        title: 'External Data Bridges',
        sourceA: 'Corporate ERP (SuccessFactors)',
        sourceB: 'Contractor DB (Célula)',
        waiting: 'Middleware Standby',
        processing: 'Data Normalization Active',
        syncNow: 'Trigger Cloud Sync'
      }
    },
    logs: {
        title: 'System Event Logs',
        levels: {
            all: 'All Severity',
            info: 'Informational',
            warn: 'Warnings',
            error: 'Critical Errors',
            audit: 'Security Audits'
        },
        table: {
            level: 'Severity',
            timestamp: 'System Time',
            user: 'Originator',
            message: 'Event Description'
        }
    },
    users: {
        title: 'Credential Management',
        subtitle: 'RBAC (Role Based Access Control)',
        addUser: 'Add Participant',
        table: {
            user: 'Authorized User',
            role: 'Permission Set',
            status: 'Operational Status',
            actions: 'Auth Control'
        },
        modal: {
            title: 'Provision Access',
            name: 'Legal Name',
            email: 'Corporate Email',
            createUser: 'Grant Permissions'
        }
    },
    booking: {
        title: 'Session Reservation',
        selfServiceTitle: 'Self-Enrollment Portal',
        selfServiceDesc: 'Book your mandatory safety training certifications.',
        secureMode: 'Secure Administrative Booking active.',
        manageSchedule: 'Resource Config',
        success: 'Reservations Locked Successfully',
        selectSession: 'Operational Slot',
        chooseSession: 'Select active session',
        dlRequired: 'RAC 02 requires a valid Driver License verification.',
        addRow: 'Add Entry',
        submitBooking: 'Commit Reservations'
    },
    manuals: {
        title: 'Operational Guidelines',
        subtitle: 'System Documentation & Standard Procedures',
        sysAdmin: {
            title: 'SaaS Administrator Guide',
            subtitle: 'Global Tenant & Logic Management',
            configTitle: '1. Resource Provisioning',
            configDesc: 'Before scheduling, ensure all venues and instructors are verified.',
            rooms: 'Map high-capacity rooms to physical venues.',
            trainers: 'Assign certification permissions to trainers.',
            racs: 'Configure global validity months (Standard: 24mo).',
            dbTitle: '2. Data Sovereignty',
            dbDesc: 'The Database uses Unified Logic for Access Control.',
            restrictionWarning: 'CRITICAL: Deactivating a user removes them from gate access immediately.',
            csv: 'Import Wizard supports automated header mapping from HR sources.',
            active: 'Toggle the "Active" column to control physical site access.'
        },
        racAdmin: {
            title: 'Site Administrator Manual',
            subtitle: 'Training & Capacity Management',
            schedTitle: 'Session Coordination',
            schedDesc: 'Schedule training slots to meet department demand.',
            create: 'Create slots with valid Room IDs.',
            lang: 'Select language based on workforce demographic.',
            autoTitle: 'Auto-Booking Protocol',
            autoDesc: 'The system auto-reserves seats for users expiring in < 7 days.',
            approve: 'Admins must manually approve overflow auto-bookings.',
            renewTitle: 'Renewals',
            renewDesc: 'Use the Dashboard Alert widget to batch-book expiring staff.'
        },
        racTrainer: {
            title: 'Instructor Field Guide',
            subtitle: 'Result Entry & Validation',
            inputTitle: 'Grading Terminal',
            inputDesc: 'Input real-time results for your assigned sessions.',
            grading: 'Attendance + Score (70% min) = Pass.',
            rac02: 'RAC 02 RULE: Driver License MUST be visually verified to pass.',
            save: 'Saving results triggers an automated print of the physical register.'
        },
        deptAdmin: {
            title: 'Manager Operations Manual',
            subtitle: 'Department Performance & Compliance',
            reqTitle: 'Staff Requirements',
            reqDesc: 'Verify which RACs your team needs based on task risk.',
            search: 'Search specific matriculas for real-time status.',
            print: 'Export CSV reports for weekly safety meetings.',
            repTitle: 'Strategic Reporting',
            repDesc: 'Generate and analyze department-level safety performance reports.'
        },
        user: {
            title: 'End-User Instructions',
            subtitle: 'Self-Service & Verification',
            statusTitle: 'Access Passport',
            statusDesc: 'Your "Access Status" is calculated from your valid certifications.',
            filterAlert: 'Ensure your ASO (Medical) is valid to prevent site lockout.',
            green: 'Granted: All reqs met.',
            red: 'Blocked: Certification expired.',
            qr: 'Field verification is done via your Digital QR Passport.'
        }
    },
    adminManual: {
        title: 'Strategic Command Guide',
        subtitle: 'Enterprise Safety Orchestration Protocols',
        slides: {
            intro: 'Executive Overview',
            logic: 'The Compliance Engine',
            dashboard: 'Command Centers',
            workflows: 'Standard Operating Procedures',
            advanced: 'Advanced Protocols',
            robotics: 'Robotic Resilience',
            troubleshoot: 'Tactical Support',
            architecture: 'System Blueprints'
        },
        content: {
            confidential: 'Authorized Access Only',
            production: 'Production Stable Environment',
            logic: {
                title: 'Logic Matrix 4.0',
                desc: 'How binary compliance is calculated.',
                active: 'User Context',
                aso: 'Medical Validity',
                racs: 'Skill Validation',
                result: 'GATE ACCESS'
            },
            dashboard: {
                operational: {
                    title: 'Field Level Control',
                    kpi: 'Live KPI Tracking',
                    renewal: 'Expiry Alerts',
                    auto: 'Overflow Control'
                },
                enterprise: {
                    title: 'Corporate Oversight',
                    global: 'Multi-Site Metrics',
                    risk: 'Departmental Heatmaps',
                    ai: 'AI Strategy Reports'
                }
            },
            workflows: {
                a: { title: 'Onboarding', steps: ['Database Import', 'Matrix Mapping', 'ASO Check'] },
                b: { title: 'Planning', steps: ['Schedule Slot', 'Check Venue', 'Assign Trainer'] },
                c: { title: 'Execution', steps: ['Attendance', 'Score Entry', 'Auto-Print'] },
                d: { title: 'Issuance', steps: ['Compliance Pass', 'QR Gen', 'Passport Issue'] }
            },
            advanced: {
                gov: { title: 'Site Governance', desc: 'Push global safety policies to specific remote sites.' },
                alcohol: { title: 'IoT Integration', desc: 'MQTT linked breathalyzers trigger immediate lockout.' }
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
            troubleshoot: {
                denied: { issue: 'Access Denied', solution: 'Verify ASO date in DB.' },
                booking: { issue: 'Booking Locked', solution: 'Check requirement matrix.' },
                failed: { issue: 'Auto-Fail', solution: 'Check Driver License date.' },
                qr: { issue: 'QR Not Found', solution: 'Ensure ID case-sensitivity.' },
                speed: { issue: 'Lag', solution: 'Wait for Cloud Sync log.' }
            }
        }
    },
    proposal: {
        digitalTrans: 'Digital Transformation Proposal',
        aboutMe: {
            title: 'Solutions Architect',
            name: 'Pita Domingos',
            preferred: 'RoboTech Architect',
            bio: 'Expert in designing high-fidelity software ecosystems for industrial giants. Specialized in automating complex logic to safeguard human life.',
            cert: 'Senior System Architect',
            role: 'Lead Project Engineer'
        },
        execSummary: {
            title: 'Executive Summary',
            text: 'DigiSols proposes a unified "Critical Activity Requirements System" (CARS) to replace fragmented legacy datasets with a rugged, real-time safety orchestration platform.',
            quote: 'Transforming industrial uncertainty into binary precision.'
        },
        objectives: {
            title: 'Strategic Objectives',
            problemTitle: 'Current Friction',
            problemText: 'Manual certification tracking creates life-threatening delays and administrative liability.',
            solutionTitle: 'Digital Solution',
            goals: ['Automate Gate Compliance', 'Unify Multi-Tenant Data', 'Digital QR Passport Issuance', 'Real-time AI Risk Analysis']
        },
        organogram: {
            title: 'Project Structure',
            tech1: 'Logic Engineer',
            tech2: 'Infrastructure Lead'
        },
        timeline: {
            title: 'Deployment Roadmap',
            phase1: 'Architecture Design', phase1desc: 'Logic mapping & DB schema.',
            phase2: 'Middleware Sync', phase2desc: 'Legacy system connectivity.',
            phase3: 'Module Buildout', phase3desc: 'UI & Logic implementation.',
            phase4: 'UAT Testing', phase4desc: 'User validation & Hardening.',
            phase5: 'Site Handover', phase5desc: 'Training & Production go-live.'
        },
        techStack: {
            title: 'Technology Ecosystem',
            frontendTitle: 'Web/Mobile', frontend: 'React • TypeScript • Tailwind',
            backendTitle: 'Orchestration', backend: 'Node.js • Cloud Functions',
            databaseTitle: 'Persistence', database: 'PostgreSQL • InfluxDB (IoT)',
            securityTitle: 'Encryption', security: 'OAuth2 • AES-256'
        },
        financials: {
            title: 'Strategic Investment',
            items: [
                { name: 'Initial Environment Provisioning', cost: '$1,500.00', type: 'Setup' },
                { name: 'Core SaaS License (Annual)', cost: '$12,000.00', type: 'Licensing' },
                { name: 'Monthly Cloud Infrastructure', cost: '$450.00', type: 'Hosting' },
                { name: 'Personnel Training & Documentation', cost: '$3,200.00', type: 'Services' },
                { name: 'Maintenance & Support (Monthly)', cost: '$800.00', type: 'Retainer' }
            ]
        },
        roadmap: {
            title: 'Enterprise Scalability',
            auth: 'Identity SSO', authDesc: 'Azure AD Integration.',
            db: 'Global Cluster', dbDesc: 'Multi-region redundancy.',
            email: 'Automated SMTP', emailDesc: 'Transactional reporting.',
            hosting: 'Hybrid Cloud', hostingDesc: 'On-prem + Azure capability.'
        },
        aiFeatures: {
            title: 'Gemini Intelligence',
            chatbot: '24/7 Safety Advisor Chatbot.',
            reporting: 'Automated Executive Summaries.'
        },
        futureUpdates: {
            title: 'Future Capabilities',
            moduleA: 'Module A - Advanced ERP Sync',
            moduleB: 'Module B - IoT Hardware Gateway'
        },
        enhancedCaps: {
            title: 'Enterprise Resilience',
            mobileVerify: { desc: 'Field-ready QR validation via mobile app.' },
            autoBooking: { desc: 'Zero-downtime training renewals.' },
            massData: { desc: 'Import 10k+ records in seconds.' }
        },
        conclusion: {
            title: 'Zero-Harm via Code',
            text: 'Technology is the ultimate safeguard. Let us architect your safety future.'
        },
        thankYou: {
            title: 'Gratitude',
            contact: 'pita.domingos@zd044.onmicrosoft.com',
            phone: '+258 84 547 9481'
        }
    },
    ai: {
        systemPromptAdvice: 'You are a Safety Advisor for CARS. Advise on {rac} in {language}.',
        systemPromptReport: 'You are a Safety Director. Summarize the safety stats in {language}.'
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
      date: 'Data',
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
      rights: 'Todos os direitos reservados.'
    },
    publicHome: {
      nav: {
        portfolio: 'Portfólio',
        about: 'Sobre',
        vision: 'Visão',
        mission: 'Missão',
        partners: 'Parceiros',
        contact: 'Contato',
        enterHub: 'Central do Cliente'
      },
      hero: {
        badge: 'Requisições de Atividades Críticas',
        title1: 'Arquitetando',
        title2: 'Futuro',
        title3: 'Empresarial',
        desc: 'A DigiSols entrega um ecossistema de software unificado para gigantes da indústria. Da segurança na indústria pesada à orquestração financeira em tempo real.',
        btnExplore: 'Explorar Ecossistema',
        btnEnter: 'Central do Cliente'
      },
      about: {
        title: 'Orquestração de Segurança',
        subtitle: 'Projetamos o sistema nervoso digital para os ambientes industriais mais desafiadores do mundo, especializados em RAC 01.',
        cards: {
          cars: 'CARS (RACS) - O padrão para Requisitos de Atividades Críticas.',
          edudesk: 'Gestão de campus para centros de educação industrial.',
          h365: 'Sistemas de saúde para mineração focados em conformidade.',
          microfin: 'Orquestração financeira para cadeias industriais.',
          websites: 'Presença web estratégica para engenharia e logística.'
        }
      }
    },
    publicMission: {
        hero: {
            badge: 'Mandato Estratégico',
            title: 'Digitalizando a Segurança via RAC 01',
            desc: 'Nossa missão é construir a infraestrutura digital que mantém os gigantes da indústria operando com segurança através do domínio de requisições críticas.'
        },
        manifesto: {
            title: 'O Manifesto da Segurança',
            text: 'Acreditamos que o software na indústria pesada deve ser tão robusto quanto o hardware que gere. Para salvaguardar cada vida, digitalizamos rigorosamente as Requisições de Atividades Críticas, garantindo que cada operador seja certificado e conforme aos padrões RAC 01.'
        },
        values: {
            title: 'Pilares Operacionais',
            precision: {
                title: 'Lógica de Conformidade',
                desc: 'Integração direta com matrizes de treinamento para automatizar a validação de requisições críticas.'
            },
            safety: {
                title: 'Escudo Automatizado',
                desc: 'Sistemas de bloqueio em tempo real acionados pela validade de certificações usando protocolos RAC 01.'
            },
            integrity: {
                title: 'Soberania de Dados',
                desc: 'Fornecendo um registro único e imutável de treinamento de segurança e saúde em sites globais.'
            }
        }
    },
    portfolio: {
      items: {
        cars: {
          name: 'CARS (RACS)',
          category: 'Requisições Críticas',
          desc: 'O "Sistema de Requisitos de Atividades Críticas" (CARS, ou RACS em Português). Automatiza conformidade, passaportes digitais e controle de acesso.'
        },
        minesite: {
          name: 'Minesite Vision',
          category: 'Telemetria IoT',
          desc: 'Monitoramento IoT avançado para frotas. Rastreia Sistemas de Supressão de Incêndio, AutoLub e parâmetros EOM via ECM.'
        },
        amtecheng: {
          name: 'Amtecheng Eng.',
          category: 'Portal de Engenharia',
          desc: 'Ecossistema corporativo de alta conversão para firmas de engenharia líderes.'
        },
        edudesk: {
          name: 'EduDesk',
          category: 'Treinamento Industrial',
          desc: 'Digitalizando o ciclo de vida de programas de treinamento de aprendizes e operadores.'
        },
        h365: {
          name: 'H365 Site Health',
          category: 'Saúde Ocupacional',
          desc: 'Gestão médica para operações remotas com rastreamento ASO integrado.'
        },
        microfin: {
          name: 'MicroFin',
          category: 'Controle Financeiro',
          desc: 'Orquestração automatizada de empréstimos e folha de pagamento para empreiteiras.'
        },
        jactrac: {
          name: 'JacTrac Mini',
          category: 'Rastreamento de Ativos',
          desc: 'IoT industrial especializado para rastrear o ciclo de vida de componentes hidráulicos.'
        },
        swiftpos: {
          name: 'SwiftPOS Retail',
          category: 'Segurança de Inventário',
          desc: 'Ponto de Venda integrado com CFTV para visibilidade operacional total.'
        }
      }
    },
    database: {
      title: 'Matriz de Conformidade',
      subtitle: 'Controle de Autorização da Força de Trabalho',
      granted: 'Autorizado',
      blocked: 'Bloqueado',
      active: 'Ativo',
      accessStatus: 'Estado de Acesso',
      aso: 'Validade ASO',
      opsMatrix: 'Matriz Ops',
      importSuccess: 'Importação Concluída',
      massQr: 'Baixar QRs em Massa',
      zipping: 'Arquivando...',
      wizard: 'Assistente de Importação',
      exportDb: 'Exportar Base de Dados',
      editModal: 'Editar Perfil do Colaborador',
      contactInfo: 'Informações de Contacto',
      cell: 'Telemóvel',
      dlDetails: 'Detalhes da Carta de Condução',
      number: 'Número',
      class: 'Classe',
      mappingTitle: 'Mapeamento de Dados',
      mappingSubtitle: 'Conecte as colunas do seu CSV aos campos do CARS',
      preview: 'Pré-visualização',
      coreData: 'Identidade Principal',
      complianceTrain: 'Conformidade e Treino',
      sourceCol: 'Coluna de Origem',
      cardBack: 'Verso do Passaporte Digital',
      confirmDeactivate: 'Desativar Colaborador?',
      confirmDeactivateMsg: 'Isto bloqueará o acesso e marcará o registo como inativo.',
      confirmDelete: 'Excluir Registo?',
      confirmDeleteMsg: 'Isto removerá permanentemente o registo da base de dados.',
      bulkQrMessage: 'Tem a certeza que deseja gerar {count} códigos QR? Isto pode levar algum tempo.',
      processImport: 'Iniciar Processamento',
      importCsv: 'Importar CSV',
      ops: {
          EMI_PTS: 'Emi-PTS',
          APR_ART: 'Apr-ART',
          DONO_AREA_PTS: 'Proprietário',
          EXEC: 'Exec'
      }
    },
    dashboard: {
      title: 'Painel Operacional',
      subtitle: 'Visão Geral do Site',
      kpi: {
        certifications: 'CARS (RACS) Ativos'
      },
      charts: {
        complianceSubtitle: 'Por Protocolo CARS (RACS)'
      }
    },
    racDefs: {
        RAC01: 'RACS 01 - Trabalho em Altura',
        RAC02: 'RACS 02 - Veículos e Equipamentos Móveis',
        RAC03: 'RACS 03 - Bloqueio de Equipamentos Móveis',
        RAC04: 'RACS 04 - Proteção de Máquinas',
        RAC05: 'RACS 05 - Espaço Confinado',
        RAC06: 'RACS 06 - Operações de Içamento',
        RAC07: 'RACS 07 - Estabilidade do Solo',
        RAC08: 'RACS 08 - Eletricidade',
        RAC09: 'RACS 09 - Explosivos',
        RAC10: 'RACS 10 - Metal Líquido',
        RAC11: 'RACS 11 - Tráfego de Mina',
        PTS: 'PTS - Permissão de Trabalho Seguro',
        ART: 'ART - Análise de Risco da Tarefa',
        LIB_OPS: 'LIB-OPS - Liberação Operacional',
        LIB_MOV: 'LIB-MOV - Liberação de Movimentação'
    },
    proposal: {
        digitalTrans: 'Proposta de Transformação Digital',
        aboutMe: {
            title: 'Arquiteto de Soluções',
            name: 'Pita Domingos',
            preferred: 'Arquiteto RoboTech',
            bio: 'Especialista em projetar ecossistemas de software de alta fidelidade para gigantes industriais. Focado em automatizar lógicas complexas para salvaguardar a vida humana.',
            cert: 'Arquiteto de Sistemas Sénior',
            role: 'Engenheiro Líder de Projeto'
        },
        execSummary: {
            title: 'Resumo Executivo',
            text: 'A DigiSols propõe um sistema unificado de "Requisitos de Atividades Críticas" (CARS) para substituir conjuntos de dados legados fragmentados por uma plataforma de orquestração de segurança robusta e em tempo real.',
            quote: 'Transformando incerteza industrial em precisão binária.'
        },
        objectives: {
            title: 'Objetivos Estratégicos',
            problemTitle: 'Fricção Atual',
            problemText: 'O rastreamento manual de certificações cria atrasos fatais e responsabilidade administrativa.',
            solutionTitle: 'Solução Digital',
            goals: ['Automatizar Conformidade de Portaria', 'Unificar Dados Multi-Tenant', 'Emissão de Passaporte QR Digital', 'Análise de Risco por IA']
        },
        financials: {
            title: 'Investimento Estratégico',
            items: [
                { name: 'Provisionamento de Ambiente Inicial', cost: '$1,500.00', type: 'Setup' },
                { name: 'Licença Core SaaS (Anual)', cost: '$12,000.00', type: 'Licensing' },
                { name: 'Infraestrutura Cloud Mensal', cost: '$450.00', type: 'Hosting' },
                { name: 'Treinamento e Documentação', cost: '$3,200.00', type: 'Services' },
                { name: 'Manutenção e Suporte (Mensal)', cost: '$800.00', type: 'Retainer' }
            ]
        },
        thankYou: {
            title: 'Gratidão',
            contact: 'pita.domingos@zd044.onmicrosoft.com',
            phone: '+258 84 547 9481'
        }
    }
  }
};