"use server";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { getCollection } from "@/lib/db/mongo";

const normalizeUser = (doc) => {
  if (!doc || typeof doc !== "object") return doc;
  return {
    _id: String(doc._id?.toString?.() ?? doc.id ?? ""),
    name: doc.name ?? "",
    email: doc.email ?? "",
    phone: doc.phone ?? "",
    role: doc.role ?? "customer",
    createdAt:
      doc.createdAt instanceof Date ? doc.createdAt.toISOString() : (doc.createdAt ?? null),
  };
};

export const getCustomers = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    throw new Error("Please sign in again.");
  }
  if (session.user.role !== "admin") {
    throw new Error("Admin only.");
  }

  const docs = await (await getCollection("user"))
    .find({ role: "customer" })
    .sort({ createdAt: -1 })
    .limit(500)
    .toArray();

  return docs.map(normalizeUser);
};
