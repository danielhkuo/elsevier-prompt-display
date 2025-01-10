const templates = {
    'business-operations': [
        {
            text: "Generate a monthly operational report summary.",
            details: {
                "Month": "Specify the month.",
                "Key metrics": "Include key metrics to report."
            }
        },
        {
            text: "Provide an update on system downtime and resolutions.",
            details: {
                "Affected systems": "List affected systems.",
                "Downtime durations": "Include downtime durations."
            }
        }
    ],
    'enterprise-delivery': [
        {
            text: "Draft a client onboarding checklist for [Product Name].",
            details: {
                "Product details": "Provide product details.",
                "Onboarding phases": "Include onboarding phases."
            }
        },
        {
            text: "Generate a status report for active client projects.",
            details: {
                "Project names": "Include project names.",
                "Deadlines and statuses": "Summarize deadlines and statuses."
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