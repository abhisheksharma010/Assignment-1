import { WidgetCategoryType } from "@/types/types";

export const json_data: WidgetCategoryType = {
  CSPM: [
    {
      id: "1",
      widgetName: "Cloud Security Overview",
      widgetText:
        "Offers a detailed analysis of cloud security metrics and trends.",
    },
    {
      id: "2",
      widgetName: "Compliance Checker",
      widgetText:
        "Evaluates cloud assets against security compliance standards.",
    },
  ],
  CWPP: [
    {
      id: "3",
      widgetName: "Threat Detection Alerts",
      widgetText:
        "Monitors and alerts on potential threats within cloud infrastructure.",
    },
  ],
  Registry: [
    {
      id: "5",
      widgetName: "Registry Configuration Audit",
      widgetText:
        "Analyzes registry configurations for compliance with best practices.",
    },
    {
      id: "6",
      widgetName: "Image Integrity Checker",
      widgetText:
        "Verifies container images for integrity and security compliance.",
    },
  ],
};
