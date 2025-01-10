const templates = {
    'business-operations': [
        {
            text: "Outline the key steps in the {{BI and CRM optimization workflow}} and identify {{challenges}} and inefficiencies. Propose measurable {{KPIs}} to evaluate performance, and provide recommendations to improve workflows and align with business objectives.",
            details: {
                "BI and CRM optimization workflow": "Provide a step-by-step description of how the process currently works (e.g., 'Step 1: Extract data from CRM; Step 2: Build reports in BI tool; Step 3: Share reports with stakeholders').",
                "challenges": "Describe specific problems or inefficiencies encountered in the workflow (e.g., 'Data inconsistencies delay report generation').",
                "KPIs": "Define measurable metrics to assess performance (e.g., 'Average time to generate reports, percentage of errors in data extraction')."
            }
        },
        {
            text: "Summarize the current {{Tableau dashboard development process}} and suggest improvements to enhance timeliness, accuracy, and usability. Identify areas prone to delays or {{challenges}}, and highlight specific {{areas for improvement}} to optimize the process.",
            details: {
                "Tableau dashboard development process": "Explain the sequence of steps followed to create dashboards (e.g., 'Gather data requirements, design dashboards, and share for feedback').",
                "challenges": "Point out delays, inefficiencies, or roadblocks in the process (e.g., 'Data refreshes are manual, causing delays; stakeholders find dashboards hard to interpret').",
                "areas for improvement": "List opportunities to improve the process (e.g., 'Automate data refreshes; provide training for better dashboard usage')."
            }
        },
        {
            text: "Evaluate the current {{data QA process}} and design an automated system to improve error detection and resolution. Highlight key {{data sources}}, common {{error types}}, and {{challenges}} that could streamline the process.",
            details: {
                "data QA process": "Detail the current methods for ensuring data quality (e.g., 'Manually check for missing fields or duplicates').",
                "data sources": "List the systems or databases where data originates (e.g., 'Salesforce, financial software, HR system').",
                "error types": "Describe typical data issues encountered (e.g., 'Incorrect formatting, duplicate entries').",
                "challenges": "Mention inefficiencies or obstacles in maintaining data quality (e.g., 'Manual checks are time-consuming; cross-departmental communication delays resolution')."
            }
        },
        {
            text: "Evaluate the {{current Salesforce workflows}} to identify inefficiencies and areas for improvement. Focus on addressing delays, uncovering {{automation opportunities}} to reduce {{manual tasks}}, and incorporating {{user feedback}} to enhance efficiency and user experience.",
            details: {
                "current Salesforce workflows": "Summarize the primary workflows in Salesforce (e.g., 'Lead assignment, opportunity tracking, report generation').",
                "automation opportunities": "List tasks that could benefit from automation (e.g., 'Automatically assign leads to sales reps based on geography').",
                "manual tasks": "Highlight repetitive manual processes (e.g., 'Manual data entry into Salesforce records').",
                "user feedback": "Share common feedback from Salesforce users (e.g., 'Reports are hard to customize; approval workflows are slow')."
            }
        },
        {
            text: "Review the {{sales pipeline reporting process}} by identifying {{issues}} and {{areas prone to inaccuracies or delays}}. Suggest improvements to optimize the process.",
            details: {
                "sales pipeline reporting process": "Outline the steps taken to create pipeline reports (e.g., 'Data export, pipeline segmentation, performance analysis').",
                "issues": "Describe problems faced in the reporting process (e.g., 'Frequent mismatches between stages and actual status').",
                "areas prone to inaccuracies or delays": "Highlight where errors or delays commonly occur (e.g., 'Manual data corrections take too long')."
            }
        },
        {
            text: "Evaluate the {{sales credit reporting process}} by reviewing {{issues}} and {{areas prone to inaccuracies or delays}}. Provide a step-by-step guide with recommendations for improvement.",
            details: {
                "sales credit reporting process": "Describe the process for assigning and reporting sales credits (e.g., 'Track revenue by sales rep, apply credit allocation rules').",
                "issues": "Identify common errors or problems (e.g., 'Duplicate credits assigned; incorrect revenue attribution').",
                "areas prone to inaccuracies/delays": "Pinpoint problem steps (e.g., 'Manual updates delay accurate reporting')."
            }
        }
    ],
    'enterprise-delivery': [
        {
            text: "Develop measurable key performance indicators (KPIs) for evaluating the efficiency of Enterprise Delivery Operations. Include {{scheduling efficiency}} for in-person class training between nursing students and educators, {{effectiveness of matching}} educators to requested training times, accuracy and timeliness in distributing {{training materials}}, and cost and time efficiency in {{travel and expense reimbursements}} for contracted educators. Provide a rationale for each KPI and explain how it supports key processes.",
            details: {
                "scheduling efficiency": "Evaluate the process of scheduling training sessions, focusing on error rates and the time taken to assign educators (e.g., \"Current scheduling is manual, using Excel spreadsheets with an error rate of 10% in matching educators to class times\").",
                "effectiveness of matching": "Assess how well educators' availability matches requested training times, based on feedback or scheduling errors (e.g., \"Educators are matched based on availability, but feedback shows mismatched preferences 25% of the time\").",
                "training materials": "Measure the accuracy and timeliness of material distribution to ensure they reach educators and students on time (e.g., \"Materials are shipped weekly, with a delay rate of 15% for rural areas\").",
                "travel and expense reimbursements": "Evaluate the time and cost efficiency of reimbursement processes (e.g., \"Reimbursements require manual approval, leading to a 3-week processing delay\")."
            }
        },
        {
            text: "Analyze the current {{scheduling process}} and {{challenges}} for in-person class training, including {{tools}} used.",
            details: {
                "scheduling process": "Describe the current scheduling steps, including any reliance on manual or digital tools (e.g., \"Schedulers use email coordination, leading to frequent miscommunications\").",
                "challenges": "Identify bottlenecks or obstacles in the process (e.g., \"Limited availability of educators during weekends causes 20% of class reschedules\").",
                "tools": "List the tools used for scheduling and their limitations (e.g., \"Google Calendar is used for scheduling but lacks advanced features like conflict detection\")."
            }
        },
        {
            text: "Assess the {{scheduling process}} and {{feedback from students}} for contracted nurse educators delivering NCLEX preparation seminars. Include the effectiveness of the original matching process, {{constraints}} in timing, and processes to improve efficiency with educator utilization and matching.",
            details: {
                "scheduling process": "Describe the current steps for assigning educators to seminars (e.g., \"Assignments are based on proximity to schools, but some educators report traveling long distances unnecessarily\").",
                "feedback from students": "Summarize student feedback on scheduling quality (e.g., \"Students rated their seminar scheduling 3.8/5, citing late notifications as a common issue\").",
                "constraints": "List specific limitations affecting scheduling, such as availability or travel requirements (e.g., \"Schools in rural areas face delays due to limited educator availability during weekdays\")."
            }
        },
        {
            text: "Analyze the current {{workflow for distributing training materials}} for NCLEX preparation and HESI. Include criteria for delivery methods for students and educators, {{challenges}} in ensuring materials are received on time, and suggestions to streamline access and reduce inefficiencies.",
            details: {
                "workflow for distributing training materials": "Describe the current steps in the material distribution process (e.g., \"Materials are shipped through a third-party vendor, but tracking updates are often delayed\").",
                "challenges": "List specific delivery issues that hinder timely or accurate material distribution (e.g., \"20% of materials arrive incomplete or after the seminar start date\").",
                "suggestions": "Provide actionable recommendations to improve the process (e.g., \"Introduce real-time tracking and automated notifications for shipments\")."
            }
        },
        {
            text: "Evaluate the {{process for reimbursing travel and expenses}} for contracted nurse educators conducting NCLEX preparation seminars. Include criteria for common delays or {{issues}} during reimbursement, and {{tools}} that could improve claim submission and approval.",
            details: {
                "process for reimbursing travel and expenses": "Describe the current steps for submitting and approving reimbursement claims (e.g., \"Educators submit paper forms, which require manual entry by the finance team\").",
                "issues": "Identify common challenges or inefficiencies in the reimbursement process (e.g., \"50% of educators report delays of over two weeks in receiving reimbursements\").",
                "tools": "Recommend tools or software to streamline the submission and approval process (e.g., \"Use expense management software to automate claim submissions and reduce processing time\")."
            }
        },
        {
            text: "Design a {{data tracking system}} to monitor key processes in delivery operations. Include {{metrics}} for scheduling efficiency, timeliness in material distribution, and {{student feedback}} on training quality.",
            details: {
                "data tracking system": "Describe the system's structure, such as dashboards or reporting tools, to monitor key metrics (e.g., \"Dashboard with visual metrics: percentage of on-time sessions, average material delivery time, and student satisfaction scores\").",
                "metrics": "Define measurable indicators for each key process (e.g., \"Average delay in receiving HESI materials is 3 days; reimbursement requests take 2 weeks for approval\").",
                "student feedback": "Summarize student input on training quality (e.g., \"Students rated seminars 4.5/5 on quality; common feedback includes 'sessions need clearer materials upfront'\")."
            }
        }
    ],
    'enterprise-revenue': [
        {
            text: "Create measurable KPIs for evaluating the efficiency of Enterprise Revenue Operations. Criteria: {{scheduling efficiency}} for in-person class training between nursing students and educators, {{effectiveness of matching}} educators to requested training times, accuracy and timeliness in distributing {{training materials}}, and cost and time efficiency in {{travel and expense reimbursements}} for contracted educators. Provide a rationale for each KPI and explain how it supports key processes.",
            details: {
                "scheduling efficiency": "Describe how efficiently training sessions are scheduled. Include any known issues or successes (e.g., \"Currently scheduled manually with a 10% error rate\").",
                "effectiveness of matching": "Explain how well educators' availability aligns with requested times (e.g., \"Educators are matched manually, with mismatches in 25% of cases\").",
                "training materials": "Provide details on how materials are distributed and any delays or errors (e.g., \"Materials are shipped weekly; rural areas experience a 15% delay\").",
                "travel and expense reimbursements": "Describe how travel reimbursements are handled, including delays or inefficiencies (e.g., \"Manual approvals take 3 weeks to process\")."
            }
        },
        {
            text: "Analyze the current {{Enterprise Revenue Operations metrics}} and {{challenges}} in evaluating operational efficiency, focusing on {{billing accuracy, cohort verification, and inquiry resolution}}. Criteria: Current metrics and alignment with revenue operations goals, and accuracy and timeliness in billing processes.",
            details: {
                "Enterprise Revenue Operations metrics": "List the key metrics currently used to measure revenue operations (e.g., \"Invoice accuracy rate, average inquiry resolution time\").",
                "challenges": "Describe obstacles that make operations less efficient (e.g., \"Cohort verification delays cause billing errors\").",
                "billing accuracy, cohort verification, and inquiry resolution": "Explain how these specific aspects are tracked or could be improved (e.g., \"Billing accuracy is measured by invoice error rate; inquiry resolution takes longer than SLA targets\")."
            }
        },
        {
            text: "Analyze the current {{invoice creation process}} and {{challenges}} to propose more efficient workflows using {{automation and best practices}}. Criteria: Integration with customer expectations and reduction of errors.",
            details: {
                "invoice creation process": "Describe the steps followed to create invoices (e.g., \"Invoices are created manually, often leading to errors\").",
                "challenges": "Identify issues in the process that cause delays or inaccuracies (e.g., \"Incomplete product data causes delays\").",
                "automation and best practices": "Suggest tools or best practices that could streamline the process (e.g., \"Use automated invoicing software to reduce errors\")."
            }
        },
        {
            text: "Analyze the current {{customer billing support process}} and {{challenges}} to design improvements for {{faster resolution times and customer satisfaction}}.",
            details: {
                "customer billing support process": "Outline how billing inquiries are currently handled (e.g., \"Handled manually via email with no prioritization\").",
                "challenges": "Describe common issues that slow down the process or frustrate customers (e.g., \"Delayed responses due to lack of standardized templates\").",
                "faster resolution times and customer satisfaction": "Provide suggestions for improving response times and customer experience (e.g., \"Implement a ticketing system to prioritize issues\")."
            }
        },
        {
            text: "Analyze the current {{cohort verification process}} and {{challenges}} to develop streamlined methods for {{accurate billing and error reduction}}.",
            details: {
                "cohort verification process": "Explain the steps used to verify cohorts (e.g., \"Counts are verified manually, leading to delays\").",
                "challenges": "List common issues or pain points (e.g., \"Frequent miscommunication between departments causes errors\").",
                "accurate billing and error reduction": "Suggest methods to improve accuracy and reduce errors (e.g., \"Standardize tracking systems for cohort data\")."
            }
        }
    ],
    'sales-operations': [
        {
            text: "Create a plain-text guide for {{a sales process}} by breaking it into clear steps. Include helpful tips or warnings where necessary. {{step details}}. Additional Information: {{Tips or warnings}}",
            details: {
                "Sales process": "Provide the name of the process along with a brief description (e.g., \"Order approval process: Steps for approving customer orders\" or \"Submitting a new client order: Instructions for initiating and recording a new sale\").",
                "Step details": "Write each step in simple and clear plain text (e.g., \"Step 1: Sales representative completes the form\" or \"Step 2: Manager reviews and approves the request\").",
                "Tips or warnings": "Include actionable advice or potential risks (e.g., \"Ensure all required fields are completed to avoid delays\" or \"Be cautious about double-checking the customer’s order details\")."
            }
        },
        {
            text: "List the key processes within the {{Sales Operations workflow}} and highlight any {{issues}} prone to delays or inaccuracies. Suggest measurable {{KPIs}} and improvements in plain text.",
            details: {
                "Sales Operations workflow": "Describe the sequence of steps in the workflow (e.g., \"Step 1: Process incentive compensation calculations\" or \"Step 2: Validate sales contracts\").",
                "Identified issues": "Outline common challenges or areas for improvement (e.g., \"Frequent errors in incentive calculations due to missing data\" or \"Delays in contract validation caused by incomplete submissions\").",
                "KPIs": "Provide measurable indicators that align with the processes (e.g., \"Time to complete compensation calculations\" or \"Accuracy of validated contracts\")."
            }
        },
        {
            text: "Summarize the key incentive payout rules for the sales team based on the {{individual sales performance}} and {{team-level achievements}}. Clearly list payout thresholds and explain how bonuses or penalties apply: {{Payout rules}}.",
            details: {
                "Individual sales performance": "Enter relevant metrics for individual performance (e.g., \"Revenue generated: $50,000; Quota: $40,000\" or \"Performance exceeds quota by 10%\").",
                "Team-level achievements": "Provide measurable descriptions of team-level metrics (e.g., \"Upselling rate achieved: 15%; Target rate: 10%\" or \"Team achieved cross-selling goal for Q1\").",
                "Payout rules": "List the rules and thresholds for payouts directly from the policy (e.g., \"Bonus of 5% for exceeding the quota by 10%\" or \"Penalty of 2% for missing the quarterly target by more than 5%\")."
            }
        },
        {
            text: "Draft a basic sales contract using {{client details}} and {{product/service details}}. Include {{key terms}}.",
            details: {
                "Client details": "Provide specific information about the client (e.g., \"Company Name: XYZ Corporation; Contact: Jane Doe, Director of Sales; Industry: Retail\").",
                "Product/service details": "Write clear and precise details about the product or service (e.g., \"Product: Annual subscription to sales software; Cost: $5,000 per year; Includes: Unlimited updates and 24/7 support\").",
                "Key terms": "Include standard legal and business terms (e.g., \"Cancellation policy: Requires 30 days written notice\" or \"Payment terms: Full payment due within 15 days of invoice\")."
            }
        },
        {
            text: "List the key processes within the {{Sales Operations workflow}} and highlight any {{issues}} prone to delays or inaccuracies. Suggest measurable {{KPIs}} and improvements in plain text.",
            details: {
                "Sales Operations workflow": "Describe the sequence of steps in the sales operations workflow, breaking them into logical, clear stages (e.g., \"Step 1: Process incentive compensation calculations\" or \"Step 2: Validate and approve sales contracts\").",
                "Identified issues": "Highlight common challenges or areas prone to errors or delays (e.g., \"Frequent errors in incentive calculations due to incorrect data\" or \"Delays in contract validation caused by missing signatures\").",
                "KPIs": "Define specific, measurable performance indicators to track improvements (e.g., \"Time taken to complete incentive compensation calculations\" or \"Accuracy percentage of validated contracts\")."
            }
        }

    ]

};

// Render Templates
function renderTemplates(tab, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Clear content
    if (templates[tab]) {
        templates[tab].forEach(template => {
            const highlightedText = template.text.replace(/{{(.*?)}}/g, '<span class="highlight">{{$1}}</span>');
            const card = document.createElement("div");
            card.className = "template-card";
            card.innerHTML = `
                <span class="copy-btn" data-text="${template.text}">📋</span>
                <pre>${highlightedText}</pre>
                <div class="details-ribbon" data-details='${JSON.stringify(template.details).replace(/'/g, "&apos;")}'>Details</div>
            `;
            container.appendChild(card);
        });
    }
}

// Initial Render
document.addEventListener("DOMContentLoaded", () => {
    renderTemplates("business-operations", "business-operations-templates");
    renderTemplates("enterprise-delivery", "enterprise-delivery-templates");
    renderTemplates("enterprise-revenue", "enterprise-revenue-templates");
    renderTemplates("sales-operations", "sales-operations-templates");

    // Set up tab switching
    document.querySelectorAll(".tab-button").forEach(button => {
        button.addEventListener("click", () => {
            const tab = button.dataset.tab;

            // Update active tab button
            document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Update active tab content
            document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));
            document.getElementById(tab).classList.add("active");
        });
    });
});

// Copy Functionality
document.body.addEventListener("click", event => {
    if (event.target.classList.contains("copy-btn")) {
        const text = event.target.dataset.text;
        navigator.clipboard.writeText(text)
            .catch(err => console.error("Copy failed:", err));
    }
});

// Render Details in Modal
document.body.addEventListener("click", event => {
    const modal = document.getElementById("details-modal");
    if (event.target.classList.contains("details-ribbon")) {
        console.log("Details ribbon clicked"); // Debug log
        const details = JSON.parse(event.target.dataset.details);
        console.log("Details:", details); // Debug log
        const detailsList = document.getElementById("details-list");
        detailsList.innerHTML = "";

        if (Array.isArray(details)) {
            details.forEach(detail => {
                detailsList.innerHTML += `<li>${detail}</li>`;
            });
        } else {
            Object.entries(details).forEach(([key, value]) => {
                detailsList.innerHTML += `<li><strong>${key}:</strong> ${value}</li>`;
            });
        }

        modal.style.display = "flex";
        console.log("Modal displayed"); // Debug log
    } else if (event.target === modal || event.target.classList.contains("close-btn")) {
        modal.style.display = "none";
    }
});