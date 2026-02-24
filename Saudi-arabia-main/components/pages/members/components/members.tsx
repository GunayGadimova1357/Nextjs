"use client";

import { useEffect, useState } from "react";
import SectionHeader from "@/components/pages/components/section-header";
import MembersCard from "./members-card";

interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  type: string;
}

export default function MembersPage() {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.github.com/users");

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Unexpected API response format");
      }

      setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err);
      setUsers([]);
      setError("We couldn’t load the members list right now.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          <p className="text-gray-400 text-sm tracking-wide">
            Fetching members...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-10 text-center max-w-md w-full">
          <h2 className="text-xl font-semibold text-white mb-3">
            Something went wrong
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            {error}
          </p>
          <button
            onClick={() => void fetchUsers()}
            className="px-6 py-3 rounded-md bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-10 text-center max-w-md w-full">
          <h2 className="text-xl font-semibold text-white mb-3">
            No Members Found
          </h2>
          <p className="text-gray-400 text-sm">
            There are currently no users to display.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-14">
          <SectionHeader
            title="Saudi, a kingdom that inspires"
            description="A uniquely Saudi experience awaits in winter"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users.map((user) => (
            <MembersCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}
