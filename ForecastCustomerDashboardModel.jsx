import React from "react";

const rows = [
  { customer: "Brand A", style: "Gravel Bib 2026", category: "Bottoms", expectedShipDate: "2026-06-14", poPlacedQty: 4800, forecastQty: 6200, forecastTopsQty: 0, forecastBottomsQty: 6200, mustPoDate: "2026-04-30", reservedCapacity: 6500, unboundCapacity: 1300, status: "PO Gap" },
  { customer: "Brand A", style: "Thermal Jacket", category: "Tops", expectedShipDate: "2026-07-05", poPlacedQty: 3000, forecastQty: 3000, forecastTopsQty: 3000, forecastBottomsQty: 0, mustPoDate: "2026-05-12", reservedCapacity: 3200, unboundCapacity: 200, status: "Covered" },
  { customer: "Brand B", style: "Aero Jersey", category: "Tops", expectedShipDate: "2026-07-22", poPlacedQty: 0, forecastQty: 5400, forecastTopsQty: 5400, forecastBottomsQty: 0, mustPoDate: "2026-05-25", reservedCapacity: 6000, unboundCapacity: 6000, status: "Forecast Only" },
  { customer: "Brand C", style: "Rain Shell", category: "Tops", expectedShipDate: "2026-08-10", poPlacedQty: 4200, forecastQty: 4000, forecastTopsQty: 4000, forecastBottomsQty: 0, mustPoDate: "2026-06-03", reservedCapacity: 4300, unboundCapacity: 100, status: "Over PO" },
];

const weeklyPlan = [
  { week: "W17", start: "2026-04-20", reserved: 2200, topsReserve: 1200, bottomsReserve: 1000, topsForecast: 1100, bottomsForecast: 950, poPlaced: 1600, ttlStyles: 8, newStyles: 3, ttlPoStyles: 5, current: true },
  { week: "W18", start: "2026-04-27", reserved: 3600, topsReserve: 1700, bottomsReserve: 1900, topsForecast: 1600, bottomsForecast: 1800, poPlaced: 2600, ttlStyles: 11, newStyles: 4, ttlPoStyles: 7, current: false },
  { week: "W19", start: "2026-05-04", reserved: 4100, topsReserve: 2200, bottomsReserve: 1900, topsForecast: 1700, bottomsForecast: 1800, poPlaced: 2800, ttlStyles: 13, newStyles: 5, ttlPoStyles: 8, current: false },
  { week: "W20", start: "2026-05-11", reserved: 5200, topsReserve: 3100, bottomsReserve: 2100, topsForecast: 2700, bottomsForecast: 1700, poPlaced: 3300, ttlStyles: 15, newStyles: 6, ttlPoStyles: 9, current: false },
  { week: "W21", start: "2026-05-18", reserved: 4700, topsReserve: 2500, bottomsReserve: 2200, topsForecast: 3800, bottomsForecast: 2500, poPlaced: 4200, ttlStyles: 12, newStyles: 3, ttlPoStyles: 8, current: false },
  { week: "W22", start: "2026-05-25", reserved: 6100, topsReserve: 3900, bottomsReserve: 2200, topsForecast: 0, bottomsForecast: 0, poPlaced: 0, ttlStyles: 0, newStyles: 0, ttlPoStyles: 0, current: false, isNew: true },
];

const futureForecastCapture = [
  { week: "W23", start: "2026-06-01", topsForecast: 1800, bottomsForecast: 1200, capsulaTops: 900, capsulaBottoms: 400, newDesigns: 4, rollIn: "W18" },
  { week: "W24", start: "2026-06-08", topsForecast: 2200, bottomsForecast: 1600, capsulaTops: 1500, capsulaBottoms: 0, newDesigns: 6, rollIn: "W19" },
];

const mtoForecast = [
  { id: 1, customer: "Team Dealer A", program: "Club Jersey", product: "Tops", orderQty: 850, orderWeek: "W18", planWeek: "W18", shipWeek: "W22" },
  { id: 2, customer: "Team Dealer B", program: "Custom Bib", product: "Bottoms", orderQty: 1250, orderWeek: "W18", planWeek: "W18", shipWeek: "W23" },
  { id: 3, customer: "Capsula Partner", program: "Capsula Aero Kit", product: "Tops", orderQty: 2300, orderWeek: "W19", planWeek: "W19", shipWeek: "W25" },
  { id: 4, customer: "Brand C", program: "Event Drop", product: "Bottoms", orderQty: 3900, orderWeek: "W20", planWeek: "W20", shipWeek: "W27" },
  { id: 5, customer: "Brand A", program: "Capsula Rain", product: "Tops", orderQty: 4600, orderWeek: "W21", planWeek: "W21", shipWeek: "W29" },
];

const shipReserveByBucket = {
  W22: 900,
  W23: 1500,
  W24: 0,
  W25: 1900,
  W26: 0,
  "W27+": 7000,
};

const partnerScore = {
  reliability: 92,
  streakWeeks: 5,
  priorityLevel: "Preferred Capacity Partner",
  accuracyBand: "Top 20%",
  lastUpdate: "2026-04-22",
};

const commanderWeeks = [
  { week: "W18", designLoad: 86, printLoad: 92, sewingLoad: 88, baseQty: 10400, hardPO: 6200, forecast: 4200, styles: 34, threadChanges: 18, ot1: 1100, ot2: 1900, subcontract: 0, frozen: true },
  { week: "W19", designLoad: 112, printLoad: 105, sewingLoad: 96, baseQty: 12300, hardPO: 7000, forecast: 5300, styles: 48, threadChanges: 27, ot1: 1400, ot2: 2400, subcontract: 900, frozen: false },
  { week: "W20", designLoad: 94, printLoad: 126, sewingLoad: 118, baseQty: 15100, hardPO: 8200, forecast: 6900, styles: 41, threadChanges: 31, ot1: 1800, ot2: 3200, subcontract: 1500, frozen: false },
  { week: "W21", designLoad: 78, printLoad: 88, sewingLoad: 132, baseQty: 13900, hardPO: 7600, forecast: 6300, styles: 29, threadChanges: 38, ot1: 1600, ot2: 3000, subcontract: 2100, frozen: false },
  { week: "W22", designLoad: 121, printLoad: 98, sewingLoad: 102, baseQty: 11800, hardPO: 5100, forecast: 6700, styles: 52, threadChanges: 22, ot1: 1300, ot2: 2200, subcontract: 800, frozen: false },
];

const scenarioPresets = {
  balanced: { label: "Balanced", otLevel: "OT1", subcontractPct: 10, freezePolicy: "Freeze current + confirmed" },
  protectSewing: { label: "Protect Sewing", otLevel: "OT2", subcontractPct: 18, freezePolicy: "Freeze hard PO first" },
  protectPrint: { label: "Protect Print", otLevel: "OT1", subcontractPct: 22, freezePolicy: "Move overflow to subcontract" },
};

const MONTHS = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];
const SHIP_BUCKETS = ["W22", "W23", "W24", "W25", "W26", "W27+"];

function formatQty(n) {
  return new Intl.NumberFormat("en-US").format(Number(n) || 0);
}

function getRiskTone(forecast, reserve) {
  if (reserve <= 0 && forecast <= 0) return "neutral";
  if (reserve <= 0 && forecast > 0) return "red";
  const deviation = Math.abs(forecast - reserve) / reserve;
  if (deviation > 0.2) return "red";
  if (deviation > 0.1) return "amber";
  return "green";
}

function getDeviationPct(forecast, reserve) {
  if (reserve <= 0) return forecast > 0 ? 100 : 0;
  return Math.round((Math.abs(forecast - reserve) / reserve) * 100);
}

function getToneClasses(tone) {
  const styles = {
    green: "border-emerald-300 bg-emerald-50",
    amber: "border-amber-300 bg-amber-50",
    red: "border-red-300 bg-red-50",
    neutral: "border-slate-200 bg-slate-50",
  };
  return styles[tone] || styles.neutral;
}

function getShipWeekRange(weekLabel, index) {
  const base = new Date("2026-05-25");
  const addWeeks = weekLabel === "W27+" ? 5 : index;
  const start = new Date(base);
  start.setDate(start.getDate() + addWeeks * 7);
  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  const fmt = (d) => `${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}`;
  return weekLabel === "W27+" ? `${fmt(start)}+` : `${fmt(start)}-${fmt(end)}`;
}

function getMtoClass(qty) {
  if (qty <= 1000) {
    return { name: "Custom / Team", leadWeeks: 4, tone: "bg-emerald-100 text-emerald-800 border-emerald-200" };
  }
  const capsule = Math.min(4, Math.ceil(qty / 1000) - 1);
  return {
    name: `Capsula ${capsule}K`,
    leadWeeks: 4 + capsule,
    tone: capsule >= 3 ? "bg-red-100 text-red-800 border-red-200" : "bg-amber-100 text-amber-800 border-amber-200",
  };
}

function getFixedOrdersForShipBucket(shipBucket) {
  return rows.filter((r) => {
    const d = new Date(r.expectedShipDate);
    const base = new Date("2026-05-25");
    const diffWeeks = Math.floor((d.getTime() - base.getTime()) / (7 * 24 * 60 * 60 * 1000));
    if (shipBucket === "W27+") return diffWeeks >= 5;
    return diffWeeks === SHIP_BUCKETS.indexOf(shipBucket);
  });
}

function runSampleDataChecks() {
  const w18 = weeklyPlan.find((w) => w.week === "W18");
  const w19 = weeklyPlan.find((w) => w.week === "W19");
  const w21 = weeklyPlan.find((w) => w.week === "W21");
  console.assert(getRiskTone(w18.topsForecast + w18.bottomsForecast, w18.topsReserve + w18.bottomsReserve) === "green", "W18 should be green");
  console.assert(getRiskTone(w19.topsForecast + w19.bottomsForecast, w19.topsReserve + w19.bottomsReserve) === "amber", "W19 should be amber");
  console.assert(getRiskTone(w21.topsForecast + w21.bottomsForecast, w21.topsReserve + w21.bottomsReserve) === "red", "W21 should be red");
  console.assert(getMtoClass(850).name === "Custom / Team", "850 pcs should be Custom / Team");
  console.assert(getMtoClass(1250).name === "Capsula 1K", "1250 pcs should be Capsula 1K");
  console.assert(getMtoClass(4600).name === "Capsula 4K", "4600 pcs should be Capsula 4K");
  console.assert(getDeviationPct(3400, 3600) === 6, "Deviation sample should round to 6%");
  console.assert(getRiskTone(0, 0) === "neutral", "Empty bucket should be neutral");
}

if (typeof console !== "undefined") {
  runSampleDataChecks();
}

function StatusPill({ status }) {
  const styles = {
    Covered: "bg-emerald-100 text-emerald-800 border-emerald-200",
    "PO Gap": "bg-amber-100 text-amber-800 border-amber-200",
    "Forecast Only": "bg-blue-100 text-blue-800 border-blue-200",
    "Over PO": "bg-slate-100 text-slate-800 border-slate-200",
  };
  return <span className={`rounded-full border px-2 py-1 text-[11px] font-medium ${styles[status]}`}>{status}</span>;
}

// ... component implementation intentionally truncated for initial handoff; paste rest from your draft here ...

export default function ForecastCustomerDashboardModel() {
  return <div className="p-6">Starter file created. Paste remaining component body if needed.</div>;
}
