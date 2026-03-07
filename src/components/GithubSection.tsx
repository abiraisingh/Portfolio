import { FaGithub } from "react-icons/fa";
const GithubSection = () => {
  const username = "abiraisingh";

  return (
    <section id="github" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            GitHub Activity
          </h2>

          <p className="text-gray-600 mt-3">
            My open source contributions and coding activity
          </p>
        </div>

        {/* GitHub Stats */}
        <div className="flex flex-col items-center gap-8">
          {/* Stats Card */}
          <div className="bg-white/70 backdrop-blur-lg border border-white/50 rounded-2xl p-6 shadow-md">
            <img
              src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=abiraisingh&show_icons=true&hide_border=true"
              alt="GitHub Stats"
            />
          </div>

          {/* Top Languages */}
          <div className="bg-white/70 backdrop-blur-lg border border-white/50 rounded-2xl p-6 shadow-md">
            <img
              src="https://github-readme-stats-git-masterrstaa-rickstaa-rickstaa.vercel.app/api/top-langs/?username=abiraisingh&layout=compact&hide_border=true"
              alt="Top Languages"
            />
          </div>

          {/* Contribution Graph */}
          <div className="bg-white/70 backdrop-blur-lg border border-white/50 rounded-2xl p-6 shadow-md overflow-x-auto">
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=github-light`}
              alt="Contribution Graph"
            />
          </div>

          {/* GitHub Button */}
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            <FaGithub />
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
