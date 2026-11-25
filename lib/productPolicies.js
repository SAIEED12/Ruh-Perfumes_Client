export const POLICY_FIELDS = [
  "disclaimer",
  "note",
  "deliveryPayment",
  "returnPolicy",
];

export const POLICY_LABELS = {
  disclaimer: "Disclaimer",
  note: "How to wear",
  deliveryPayment: "Delivery and payment",
  returnPolicy: "Returns",
};

export const DEFAULT_POLICIES = {
  disclaimer:
    "Fragrance smells different on every skin. Colour of the liquid may vary slightly between batches without affecting quality.",
  note: "Apply to clean skin at the pulse points. Start with one spray and let the scent settle before adding more.",
  deliveryPayment:
    "Cash on delivery across Bangladesh. Delivery charge is ৳70 inside Dhaka and ৳120 outside Dhaka.",
  returnPolicy:
    "Bottles are sealed before dispatch. Opened fragrances cannot be returned. If a bottle arrives damaged or leaking, contact us on the day of delivery with a photo and we will arrange a replacement.",
};

export const getPolicyValue = (product, field, defaults = DEFAULT_POLICIES) => {
  const saved = product?.[field];
  if (typeof saved === "string" && saved.trim()) return saved;
  const fallback = defaults?.[field];
  return typeof fallback === "string" ? fallback : "";
};

export const getVisiblePolicies = (product) =>
  POLICY_FIELDS.map((field) => ({
    field,
    title: POLICY_LABELS[field] ?? field,
    content: getPolicyValue(product, field),
  })).filter((entry) => entry.content);
