interface ProfileCardProps {
  name: string;
  role: string;
  bio: string;
}

export default function ProfileCard({ name, role, bio }: ProfileCardProps) {
  return (
    <section className="relative">
      {/* CARD CONTAINER */}
      <div className="glass h-74 p-8 max-w-sm w-full border border-gray-700 shadow-xl rounded-2xl">
        {/* TITLE */}
        <h1 className="text-gray-800 mb-4 bg-red-400 rounded-xl w-34 px-2 py-1 text-2xl font-bold">
          About Me
        </h1>

        {/* CONTENT */}
        <p className="text-white leading-relaxed mb-6">
          Hello! I am {name} a {role} {bio}
        </p>

        {/* BUTTON */}
        <button className="glass-btn w-full py-3 bg-black text-white rounded-2xl hover:bg-gray-800 transition-colors cursor-pointer">
          Contact Me
        </button>
      </div>
    </section>
  );
}
