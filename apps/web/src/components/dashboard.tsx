import type { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Helper for currency formatting
export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

interface MetricCardProps {
  title: string;
  value: number;
  unit?: string | number;
  icon?: React.ReactNode;
  description?: string;
  valueClassName?: string;
  fractionDigits?: number;
}

export const MetricCard: FC<MetricCardProps> = ({
  title,
  value,
  unit = "",
  icon,
  description,
  fractionDigits = 0,
  valueClassName,
}) => (
  <Card className="flex-1 min-w-62.5">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className={`text-2xl font-bold ${valueClassName}`}>
        {unit}
        {typeof value === "number"
          ? value
              .toLocaleString(undefined, {
                minimumFractionDigits: fractionDigits,
                maximumFractionDigits: fractionDigits,
              })
              .replace(/,/g, " ")
          : "0"}
      </div>
      {description && (
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      )}
    </CardContent>
  </Card>
);
