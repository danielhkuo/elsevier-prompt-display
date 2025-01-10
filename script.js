const templates = {
    'business-operations': [
        {
            text: "Outline the key steps in the {{BI and CRM optimization workflow}} and identify {{challenges}} and inefficiencies. Propose measurable {{KPIs}} to evaluate performance, and provide recommendations to improve workflows and align with business objectives.",
            details: {
                "BI and CRM optimization workflow": "List each step in the process in a clear and sequential manner (e.g., \"Step 1: Develop Tableau dashboards; Step 2: Validate data; Step 3: Generate sales pipeline reports\").",
                "challenges": "Highlight bottlenecks or inefficiencies that hinder the process (e.g., \"Frequent dashboard revisions\" or \"Slow data QA resolution\").",
                "KPIs": "Define measurable indicators to evaluate performance and improvements (e.g., \"Dashboard delivery time\" or \"Salesforce adoption rate\")."
            }
        },
        {
            text: "Summarize the current {{Tableau dashboard development process}} and suggest improvements to enhance timeliness, accuracy, and usability. Identify areas prone to delays or {{challenges}}, and highlight specific {{areas for improvement}} to optimize the process.",
            details: {
                "Tableau dashboard development process": "Describe the current steps followed in the dashboard development process (e.g., \"Step 1: Collect stakeholder requirements; Step 2: Data extraction; Step 3: Dashboard design and feedback\").",
                "challenges": "Identify challenges or bottlenecks faced in the process (e.g., \"Manual data updates cause delays; feedback often includes missing metrics\").",
                "areas for improvement": "Highlight steps or stages where improvements could be made (e.g., \"Improve data integration to reduce development time\" or \"Standardize feedback to minimize revisions\")."
            }
        },
        {
            text: "Evaluate the current {{data QA process}} and design an automated system to improve error detection and resolution. Highlight key {{data sources}}, common {{error types}}, and {{challenges}} that could streamline the process.",
            details: {
                "data QA process": "Describe the current steps in your data quality assurance process (e.g., \"Manual data validation checks after data import\").",
                "data sources": "List the data sources currently in use (e.g., \"Salesforce, financial databases, HR records\").",
                "error types": "Describe common data quality issues encountered (e.g., \"Missing fields, duplicates in customer records, calculation errors\").",
                "challenges": "Identify pain points or inefficiencies in the existing process (e.g., \"Manual error detection leads to delays in identifying discrepancies; inconsistency in data across systems\")."
            }
        },
        {
            text: "Evaluate the {{current Salesforce workflows}} to identify inefficiencies and areas for improvement. Focus on addressing delays, uncovering {{automation opportunities}} to reduce {{manual tasks}}, and incorporating {{user feedback}} to enhance efficiency and user experience.",
            details: {
                "current Salesforce workflows": "Describe the key workflows currently in place (e.g., \"Lead routing, approval workflows, reporting processes\").",
                "automation opportunities": "List tasks that can be automated to improve efficiency (e.g., \"Automating lead assignment to reduce manual intervention\").",
                "manual tasks": "Highlight tasks that are currently being done manually (e.g., \"Data entry, report generation\").",
                "user feedback": "Include feedback or complaints from users (e.g., \"Users report frequent delays in approval workflows and a lack of custom reporting options\")."
            }
        },
        {
            text: "Review the {{sales pipeline reporting process}} by identifying {{issues}} and {{areas prone to inaccuracies or delays}}. Suggest improvements to optimize the process.",
            details: {
                "sales pipeline reporting process": "Provide the steps in the pipeline reporting process (e.g., \"Step 1: Extract data from Salesforce; Step 2: Segment by pipeline stage\").",
                "issues": "List challenges encountered in the process (e.g., \"Data formatting inconsistencies; delays in data retrieval\").",
                "areas prone to inaccuracies/delays": "Identify stages where errors or delays occur (e.g., \"Manual data entry at segmentation stage; inconsistencies in tracking conversion rates\")."
            }
        },
        {
            text: "Evaluate the {{sales credit reporting process}} by reviewing {{issues}} and {{areas prone to inaccuracies or delays}}. Provide a step-by-step guide with recommendations for improvement.",
            details: {
                "sales credit reporting process": "List the key steps in the credit reporting process (e.g., \"Step 1: Retrieve sales data; Step 2: Apply credit assignment rules\").",
                "issues": "Describe challenges encountered (e.g., \"Duplicate credits; delays in credit approval\").",
                "areas prone to inaccuracies/delays": "Highlight problem areas (e.g., \"Manual credit assignment leads to errors; delays in updating credit data\")."
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
            text: "Summarize revenue performance for the current fiscal quarter.",
            details: {
                "Revenue figures": "Include revenue figures.",
                "Key drivers": "Highlight key drivers."
            }
        },
        {
            text: "Analyze trends in recurring revenue streams.",
            details: {
                "Historical data": "Provide historical data.",
                "Growth rates": "Summarize growth rates."
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