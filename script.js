const templates = {
    'business-operations': [
        {
            text: "Generate a monthly operational report summary.",
            details: ["Specify the month.", "Include key metrics to report."]
        },
        {
            text: "Provide an update on system downtime and resolutions.",
            details: ["List affected systems.", "Include downtime durations."]
        }
    ],
    'enterprise-delivery': [
        {
            text: "Draft a client onboarding checklist for [Product Name].",
            details: ["Provide product details.", "Include onboarding phases."]
        },
        {
            text: "Generate a status report for active client projects.",
            details: ["Include project names.", "Summarize deadlines and statuses."]
        }
    ],
    'enterprise-revenue': [
        {
            text: "Summarize revenue performance for the current fiscal quarter.",
            details: ["Include revenue figures.", "Highlight key drivers."]
        },
        {
            text: "Analyze trends in recurring revenue streams.",
            details: ["Provide historical data.", "Summarize growth rates."]
        }
    ],
    'sales-operations': [
        {
            text: "Create a plain-text guide for {{a sales process}} by breaking it into clear steps. Include helpful tips or warnings where necessary. {{step details}}. Additional Information: {{Tips or warnings}}",
            details: ["Sales process: Provide the name and a brief description (e.g., \"Order approval process\" or ‘’Submitting a new client order’’).", "Step details: Write each step in plain text (e.g., \"Step 1: Sales rep completes the form\").", "Tips or warnings: Add simple advice (e.g., \"Ensure all required fields are filled\")."]
        },
        {
            text: "Provide a summary of lead conversion rates by region.",
            details: ["Include regional data.", "Specify the time period."]
        }
    ]
};

// Render Templates
function renderTemplates(tab, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Clear content
    if (templates[tab]) {
        templates[tab].forEach(template => {
            const card = document.createElement("div");
            card.className = "template-card";
            card.innerHTML = `
        <span class="copy-btn" data-text="${template.text}">📋</span>
        <pre>${template.text}</pre>
        <div class="details-ribbon" data-details='${JSON.stringify(template.details)}'>Details</div>
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

// Modal Functionality
document.body.addEventListener("click", event => {
    const modal = document.getElementById("details-modal");
    if (event.target.classList.contains("details-ribbon")) {
        const details = JSON.parse(event.target.dataset.details);
        const detailsList = document.getElementById("details-list");
        detailsList.innerHTML = details.map(detail => `<li>${detail}</li>`).join("");
        modal.style.display = "flex";
    } else if (event.target === modal || event.target.classList.contains("close-btn")) {
        modal.style.display = "none";
    }
});
