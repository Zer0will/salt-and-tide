export const STUDIO_AVAILABILITY = "Discuss your next project";
export const RESPONSE_TIME = "one business day";

export const PROJECT_BUDGETS = [
  "Project: under $3,500",
  "Project: $3,500–$6,500",
  "Project: $6,500–$8,500",
  "Project: $8,500+",
];
export const MONTHLY_BUDGETS = [
  "Monthly: under $1,000",
  "Monthly: $1,000–$2,500",
  "Monthly: $2,500+",
];

export const INQUIRY_PACKAGES: Record<string, { name: string; service: string; budget: string }> = {
  launch: { name: "Launch", service: "Web Design", budget: PROJECT_BUDGETS[1] },
  growth: { name: "Growth", service: "Web Design", budget: PROJECT_BUDGETS[2] },
  partnership: { name: "Partnership", service: "Both", budget: PROJECT_BUDGETS[3] },
};
