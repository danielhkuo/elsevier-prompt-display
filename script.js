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
                "Sales process": "Provide the name and a brief description (e.g., \"Order approval process\" or ''Submitting a new client order'').",
                "Step details": "Write each step in plain text (e.g., \"Step 1: Sales rep completes the form\").",
                "Tips or warnings": "Add simple advice (e.g., \"Ensure all required fields are filled\")."
            }
        },
        {
            text: "List the key processes within the {{Sales Operations workflow}} and highlight any {{issues}} prone to delays or inaccuracies. Suggest measurable {{KPIs}} and improvements in plain text.",
            details: {
                "Sales Operations workflow": "Sequential process\n\"Step 1: Process incentive compensation calculations\".",
                "Identified issues": "Describe common challenges\n\"Frequent errors in incentive calculations\" or \"Delays in contract validation\".",
                "KPIs": "Define specific, measurable indicators\n\"Time to complete compensation calculations\" or \"Accuracy of contract validation\"."
            }
        },
        {
            text: "Summarize the key incentive payout rules for the sales team based on the {{individual sales performance}} and {{team-level achievements}}. Clearly list payout thresholds and explain how bonuses or penalties apply: {{Payout rules}}.",
            details: {
                "Individual sales performance": "Enter details as plain text\n\"Revenue: $50,000; Quota: $40,000\" or \"Exceeds quota by 10%\".",
                "Team-level achievements": "Provide descriptions in plain text\n\"Upselling rate: 15%; Target: 10%\" or \"Achieved cross-selling goal\".",
                "Payout rules": "Copy rules directly from the policy document."
            }
        },
        {
            text: "Draft a basic sales contract using {{client details}} and {{product/service details}}. Include {{key terms}}.",
            details: {
                "Client details": "\"Company Name: XYZ, Contact: Jane Doe, Retail Industry\".",
                "Product/service details": "Write out specifics\n\"Item: Annual subscription; Cost: $5,000/year\".",
                "Key terms": "Copy standard legal terms\n\"Cancellation: 30 days notice\", or from templates or prior contracts."
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