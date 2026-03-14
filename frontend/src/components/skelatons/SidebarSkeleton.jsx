import { Users } from "lucide-react";

const SidebarSkeleton = () => {
  const skeletonContacts = Array(8).fill(null);

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200 bg-base-100 relative overflow-hidden">

      {/* Background orb */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="border-b border-base-300 w-full p-4 relative">
        <div className="flex items-center gap-3">

          {/* Icon */}
          <div className="size-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <Users className="w-4 h-4 text-primary" />
          </div>

          {/* Title + count badge */}
          <div className="hidden lg:flex items-center justify-between flex-1">
            <span className="font-bold text-sm tracking-wide text-base-content">
              Contacts
            </span>
            <div className="skeleton h-5 w-8 rounded-full" />
          </div>
        </div>

        {/* Search skeleton */}
        <div className="hidden lg:block mt-3">
          <div className="skeleton h-9 w-full rounded-xl" />
        </div>
      </div>

      {/* Filter row skeleton */}
      <div className="hidden lg:flex items-center gap-2 px-4 py-3 border-b border-base-300">
        <div className="skeleton h-4 w-4 rounded" />
        <div className="skeleton h-3 w-32 rounded-lg" />
      </div>

      {/* Skeleton Contacts */}
      <div className="overflow-y-auto w-full py-2 px-2 space-y-1">
        {skeletonContacts.map((_, idx) => (
          <div
            key={idx}
            className="w-full p-3 flex items-center gap-3 rounded-xl"
            style={{ opacity: 1 - idx * 0.09 }}
          >
            {/* Avatar */}
            <div className="relative mx-auto lg:mx-0 shrink-0">
              <div className="skeleton size-11 rounded-full" />
              {/* Online dot */}
              <div className="absolute bottom-0 right-0 skeleton size-2.5 rounded-full" />
            </div>

            {/* Info */}
            <div className="hidden lg:flex flex-col gap-2 flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <div className="skeleton h-3.5 rounded-lg w-24" />
                <div className="skeleton h-3 rounded-lg w-8" />
              </div>
              <div className="skeleton h-3 rounded-lg w-32" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-base-100 to-transparent pointer-events-none" />
    </aside>
  );
};

export default SidebarSkeleton;